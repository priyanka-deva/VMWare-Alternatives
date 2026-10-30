#!/usr/bin/env python3
"""Build the self-contained v1.6 heatmap from the sole Markdown register.

No network calls, research, or inference of cell classifications.
Run from the repository root: python3 scripts/generate_ot_heatmap.py
"""
from pathlib import Path
import hashlib
import json
import re
from collections import Counter

ROOT = Path(__file__).resolve().parents[1]
VERSION = '1.6'
BASE_COMMIT = 'e51d9156c6ba11f03ebb3aca98f487fef71af2ec'
MASTER_NAME = 'OT_Master_Roster_Alternative_Support_2026-10-30'
HEATMAP_NAME = 'OT_Application_Support_Heatmap_2026-10-30'
MASTER = ROOT / 'reports' / (MASTER_NAME + '_v1.6.md')
TEMPLATE = ROOT / 'interactive/templates/ot_support_heatmap.html'

PLATFORMS = [
    ('vmware', 'VMware', 'vSphere / ESXi'),
    ('hyperv', 'Hyper-V', 'Microsoft'),
    ('azure', 'Azure Local', 'Microsoft'),
    ('ahv', 'Nutanix AHV', 'AHV only'),
    ('openshift', 'OpenShift', 'Virtualization'),
    ('hpe', 'HPE', 'VM Essentials · HVM'),
    ('proxmox', 'Proxmox', 'VE'),
    ('oracle', 'Oracle', 'OLVM / Linux KVM'),
    ('canonical', 'Canonical', 'MicroCloud / OpenStack'),
    ('scale', 'Scale', 'HyperCore'),
    ('xcp', 'Vates', 'XCP-ng'),
    ('verge', 'VergeOS', 'VergeIO'),
]
LABELS = {
    'S': ('Named support', 'supported'),
    'C': ('Conditional support', 'conditional'),
    'B': ('Backup interoperability', 'backup'),
    'BA': ('Guest-agent protection', 'backup'),
    'BR': ('Repository / adapter workflow', 'workflow'),
    'G': ('Generic policy only', 'generic'),
    'L': ('Related / limited scope', 'limited'),
    'H': ('Historical evidence', 'historical'),
    'X': ('Component exclusion', 'excluded'),
    'U': ('Support not established', 'gap'),
    'I': ('Identity unresolved', 'identity'),
    'A': ('Documentation access gap', 'access'),
    'N': ('Provider-hosted core', 'hosted'),
}

def cells(line):
    return [x.strip() for x in line.strip().strip('|').split('|')]

def citations(text, sources):
    found=[]
    for bracket in re.findall(r'\[([^\]]+)\]',text):
        for ref in re.findall(r'\b[ASPN]\d{2,3}\b',bracket):
            if ref in sources and ref not in found:
                found.append(ref)
    return found

def parse_register(text):
    definitions=dict(re.findall(r'^\[([ASPN]\d+)\]:\s*(https://\S+)',text,re.M))
    assert len(definitions)==147, 'Source inventory drift'
    sources={k:{'id':k,'url':v,'title':'','note':''} for k,v in definitions.items()}
    for line in text.splitlines():
        if not line.startswith('| '): continue
        c=cells(line)
        if len(c)<3 or c[0] not in sources: continue
        link=re.search(r'\[([^\]]+)\](?:\((https://[^)]+)\)|\[([^\]]+)\])',c[1])
        if link:
            sources[c[0]]['title']=link.group(1)
            # Later source-register notes supersede earlier catalogue summaries.
            sources[c[0]]['note']=' | '.join(c[2:])
    missing=[k for k,v in sources.items() if not v['title']]
    assert not missing, ('Missing source titles',missing)
    access={
        'A26':'Unresolved access · HTTP 403 in the register audit',
        'A50':'Unresolved access · repeated timeout in the register audit',
        'A60':'Not fully inspected · reader-size limit in the register audit',
        'A82':'Unresolved access · 404; alternative route unstable',
        'S25':'Unresolved access · HTTP 403 in the register audit',
        'S16':'Move notice / authenticated documentation',
        'N10':'Third-party mirror · not accepted primary evidence',
        'S06':'Release applicability conflict · V21 route / V19 body',
        'S28':'Version unconfirmed in the visible course body',
    }
    for k,v in sources.items():
        v['qualification']=access.get(k,'')
    matrix_section=text.split('## Complete roster–platform evidence matrix',1)[1].split('## Final evidence validation',1)[0]
    status_descriptions={}
    matrix={}
    for line in matrix_section.splitlines():
        if not line.startswith('| '): continue
        c=cells(line)
        if c[0] in LABELS and len(c)==2:
            status_descriptions[c[0]]=c[1]
        if re.match(r'^OT\d{3}\b',c[0]):
            assert len(c)==14, c[0]
            key=c[0].split()[0]
            assert key not in matrix
            matrix[key]={'codes':c[1:13],'boundary':c[13]}
    assert len(matrix)==97
    master_section=text.split('## Master list\n',1)[1].split('## Cross-reference',1)[0]
    rows=[]; category=''; category_id=''
    for line in master_section.splitlines():
        if line.startswith('### 3.'):
            category_id=re.match(r'### (3\.\d+)',line).group(1)
            category=re.sub(r'^### 3\.\d+\. ','',line)
        if re.match(r'^\| OT\d{3} \|',line):
            c=cells(line); assert len(c)==9
            m=matrix[c[0]]
            refs=citations(' '.join(c[3:8])+' '+m['boundary'],sources)
            row={'id':c[0],'name':c[1],'description':c[2],'findingLabel':c[3],
                 'vmwareFinding':c[4],'alternativeFinding':c[5],'finding':c[6],
                 'action':c[7],'crossReference':c[8],'category':category,
                 'categoryId':category_id,'codes':m['codes'],'boundary':m['boundary'],
                 'references':refs,'backup':c[0] in ['OT074','OT080','OT081']}
            for code in row['codes']:
                assert all(part in LABELS for part in code.split('/')), code
            rows.append(row)
    assert len(rows)==97 and len({r['id'] for r in rows})==97
    assert len({r['category'] for r in rows})==6
    # Every classification is copied directly. No generic policies promoted to named support.
    assert next(r for r in rows if r['id']=='OT080')['codes']==['B','B','U','B','B','BA','BR','B','U','U','U','U']
    cross_section=text.split('## Cross-reference to every original',1)[1].split('## Product-level',1)[0]
    original_groups=[]
    for line in cross_section.splitlines():
        if re.match(r'^\| A\d{3} \|',line):
            c=cells(line);original_groups.append({'id':c[0],'supplier':c[1],'description':c[2],'rows':c[3]})
    assert len(original_groups)==65
    appendix=text.split('## Appendix — Enterprise Context',1)[1].split('\n[A01]:',1)[0]
    lineage=[]
    for line in appendix.splitlines():
        if re.match(r'^\| OT\d{3} \|',line):
            c=cells(line);assert len(c)==5
            lineage.append({'id':c[0],'supplier':c[1],'locator':c[2],'group':c[3],'identifier':c[4]})
    assert len(lineage)==97
    for r,l in zip(rows,lineage):
        assert r['id']==l['id'] and r['name']==l['supplier']
        r['lineage']=l
    context_sections=[]
    for block in re.split(r'^### ',appendix,flags=re.M)[1:]:
        title,_,markdown=block.partition('\n')
        context_sections.append({'title':title.strip(),'markdown':markdown.strip()})
    assert len(context_sections)==7
    statuses={k:{'label':v[0],'style':v[1],'description':status_descriptions[k]} for k,v in LABELS.items()}
    return {'version':VERSION,'asOf':'30 October 2026','baseCommit':BASE_COMMIT,
        'masterSHA256':hashlib.sha256(text.encode()).hexdigest(),
        'masterPath':'reports/'+MASTER.name,'masterName':MASTER.name,
        'platforms':[{'id':p[0],'name':p[1],'sub':p[2]} for p in PLATFORMS],
        'rows':rows,'sources':sources,'statuses':statuses,'originalGroups':original_groups,
        'contextSections':context_sections,
        'counts':{'rows':97,'platforms':12,'cells':1164,'categories':6,'sources':147,'urls':145,
                  'groups':65,'mappedRows':83,'detailedOnly':14,'backupRows':3,'hostedRows':3}}

def main():
    text=MASTER.read_text()
    data=parse_register(text)
    template=TEMPLATE.read_text()
    assert template.count('__REPORT_DATA__')==1
    payload=json.dumps(data,ensure_ascii=False,separators=(',',':')).replace('<','\\u003c')
    html=template.replace('__REPORT_DATA__',payload)
    assert '__REPORT_DATA__' not in html and 'N12' not in html
    for name in [HEATMAP_NAME+'_v1.6.html',HEATMAP_NAME+'.html']:
        (ROOT/'interactive'/name).write_text(html)
    # The canonical Markdown and versioned snapshot are byte-identical.
    (ROOT/'reports'/(MASTER_NAME+'.md')).write_text(text)
    counts=Counter(c for r in data['rows'] for c in r['codes'])
    report={'version':VERSION,'base_commit':BASE_COMMIT,'master_sha256':data['masterSHA256'],
            'rows':97,'platforms':12,'cell_count':1164,'codes':dict(counts),
            'source_definitions':147,'distinct_urls':len({s['url'] for s in data['sources'].values()}),
            'all_cell_codes_copied_from_markdown':True,'external_requests':0,
            'html_sha256':hashlib.sha256(html.encode()).hexdigest()}
    (ROOT/'qa/heatmap-v1.6/data-reconciliation.json').write_text(json.dumps(report,indent=2))
    print(json.dumps(report,indent=2))

if __name__=='__main__': main()
