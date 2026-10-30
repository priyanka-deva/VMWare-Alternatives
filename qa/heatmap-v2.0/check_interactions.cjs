// Runs the report's actual JavaScript against a minimal DOM model.
// This tests data and handlers, not browser layout or native-dialog rendering.
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const html=fs.readFileSync('interactive/OT_Application_Support_Heatmap_2026-10-30_v2.0.html','utf8');
const code=html.match(/<script>([\s\S]*?)<\/script>/)[1];
const registry=new Map(),tabs=[],scopes=[],panels=[],columns=[];
let doc,downloads=[],lastBlob;
class Element{
 constructor(id='',attrs={}){this.id=id;this.attrs={...attrs};this.dataset={};this.events={};this.value='';this.style={};this.hidden='hidden' in attrs;this.checked='checked' in attrs;this._html='';this.textContent='';this.tabIndex=0;for(const [k,v]of Object.entries(attrs))if(k.startsWith('data-'))this.dataset[k.slice(5).replace(/-([a-z])/g,(_,x)=>x.toUpperCase())]=v;}
 set innerHTML(s){this._html=s;if(this.id==='column-options'){columns.length=0;for(const m of s.matchAll(/data-column="(\d+)"/g))columns.push(new Element('',{'data-column':m[1],checked:''}));}}
 get innerHTML(){return this._html;}
 setAttribute(k,v){this.attrs[k]=String(v);}
 getAttribute(k){return this.attrs[k]??null;}
 addEventListener(k,f){(this.events[k]??=[]).push(f);}
 focus(){doc.activeElement=this;}
 scrollIntoView(){}
 showModal(){this.open=true;}
 close(){this.open=false;for(const f of this.events.close??[])f({target:this});}
 click(){if(this.href)downloads.push(this);this.onclick?.({target:this});for(const f of this.events.click??[])f({target:this});}
 matches(q){return q==='.cell'&&this.attrs.class?.split(' ').includes('cell');}
 querySelector(q){const id=q.match(/data-entry="([^"]+)"/),idx=q.match(/data-index="(\d+)"/);if(id&&idx){const re=new RegExp('<tr data-entry="'+id[1]+'">([\\s\\S]*?)<\\/tr>');const row=this._html.match(re)?.[1];const button=row?.match(new RegExp('<button[^>]*data-index="'+idx[1]+'"[^>]*>'));if(!button)return null;return new Element('',{'class':'cell','data-open':id[1],'data-index':idx[1]});}return null;}
}
for(const m of html.matchAll(/<([a-z][a-z0-9-]*)\b([^>]*)>/g)){const attrs={};for(const a of m[2].matchAll(/([\w-]+)(?:="([^"]*)")?/g))attrs[a[1]]=a[2]??'';if(attrs.id&&!registry.has(attrs.id))registry.set(attrs.id,new Element(attrs.id,attrs));const el=attrs.id?registry.get(attrs.id):new Element('',attrs);if(attrs['data-tab'])tabs.push(el);if(attrs['data-scope'])scopes.push(el);if(attrs.class==='panel')panels.push(el);}
registry.get('report-data').textContent=html.match(/<script id="report-data" type="application\/json">([\s\S]*?)<\/script>/)[1];
doc={activeElement:null,events:{},getElementById:id=>{assert(registry.has(id),'Unknown element '+id);return registry.get(id);},querySelectorAll:q=>q==='[data-tab]'?tabs:q==='[data-scope]'?scopes:q==='.panel'?panels:q==='[data-column]'?columns:q==='[data-column]:checked'?columns.filter(c=>c.checked):[],querySelector:q=>new Element(),addEventListener(k,f){(this.events[k]??=[]).push(f);},createElement:()=>new Element()};
const ctx=vm.createContext({document:doc,window:{innerWidth:1440,addEventListener(){},print(){}},URL:{createObjectURL:b=>{lastBlob=b;return 'blob:test';},revokeObjectURL(){}},Blob,setTimeout:f=>f(),console});vm.runInContext(code,ctx);
const run=s=>vm.runInContext(s,ctx),get=id=>registry.get(id);
let checks=0;const check=(value,note)=>{assert(value,note);checks++;};
check(run('activeTab')==='summary','Executive summary is initial view');
check(!run('"A" in D.statuses'),'Access problem is not a compatibility code');
check(run('D.rows.every(r=>r.applicability&&r.applicability.category&&r.applicability.unit)'),'All 97 records have applicability');
check(run('new Set(D.rows.map(r=>r.applicability.category)).size')===8,'Eight deployment types');
get('summary-explore').click();check(run('visible.length')===97,'Complete roster renders');
check((get('matrix-body').innerHTML.match(/class="cell /g)||[]).length===648,'54 assessed rows retain 648 cells');
get('supplier').value='OT080';get('supplier').events.change[0]();
check(run('visible.length')===1&&run('visible[0].id')==='OT080','Supplier dropdown selects Cohesity');
check(/class="cell backup"[^>]*data-open="OT080"[^>]*data-platform="vmware"[^>]*>B<\/button>/.test(get('matrix-body').innerHTML),'Cohesity VMware remains B');
check(!/<option[^>]*>OT\d{3}/.test(get('supplier').innerHTML),'Dropdown labels omit IDs');
run('resetFilters()');get('deployment').value='Provider-hosted core';get('deployment').events.change[0]();
check(run('visible.length')===3&&run('visible.every(r=>r.codes.every(c=>c==="N"))'),'Hosted deployment filter');
get('supplier').value='OT091';get('supplier').events.change[0]();check(run('visible.length')===1,'Supplier cascades with deployment');
get('deployment').value='Backup protection';get('deployment').events.change[0]();
check(run('visible.length')===3&&get('supplier').value==='','Invalid supplier clears when deployment changes');
for (const [category,count] of Object.entries({'Server software':12,'Mixed / deployment to confirm':27,'Supplier / service record':7,'Container application':2,'Equipment record — isolate software':28,'Instrument / control workstation':15,'Backup protection':3,'Provider-hosted core':3})) {
 run('resetFilters()');get('deployment').value=category;get('deployment').events.change[0]();check(run('visible.length')===count,category+' filter count');
}
get('reset').click();check(run('visible.length')===97&&get('deployment').value==='','Reset clears deployment');
get('summary-backup').click();check(run('visible.length')===3&&run('visible.every(r=>r.backup)'),'Backup CTA resets filters');
get('summary-applicability').click();check(run('activeTab')==='context','Applicability CTA opens context');
check((get('deployment-review').innerHTML.match(/<tr>/g)||[]).length===98,'All 97 applicability records rendered');
check(get('scope-review').innerHTML.includes('Map underlying workload')&&get('scope-review').innerHTML.includes('Software identity pending'),'Full wording for I and W');
for(const id of ['OT002','OT053','OT067'])check(run('rowById.get("'+id+'").codes.every(c=>c==="U")'),'Former access rating corrected '+id);
run('openDetail("OT067","vmware")');check(get('detail-body').innerHTML.includes('limited support on other hardware')&&get('detail-body').innerHTML.includes('Manufacturer-authored 2020 addendum'),'Roche qualified finding and source provenance');get('detail').close();
run('openDetail("OT030","vmware")');check(get('detail-body').innerHTML.includes('Service 4.2')&&get('detail-body').innerHTML.includes('Other Cognex products remain unidentified'),'Cognex exclusion retains named component scope');get('detail').close();
run('openDetail("OT048")');check(get('detail-body').innerHTML.includes('Optional LHC2 PC software'),'BioTek separates onboard and PC roles');get('detail').close();
run('openDetail("OT005","vmware")');check(get('detail-body').innerHTML.includes('Supplier / service record')&&get('detail-body').innerHTML.includes('not a platform compatibility failure'),'IAS is supplier scope');get('detail').close();
run('resetFilters()');get('supplier').value='OT001';get('supplier').events.change[0]();check(get('matrix-body').innerHTML.includes('H: Nov 2010 · ≈15y11m'),'Historical dates retained');
get('reset').click();get('status-filter').value='I';get('status-filter').events.change[0]();check(run('visible.length')===4,'Only four software identity pending entries');
get('reset').click();columns[1].checked=false;columns[1].events.change[0]();check(run('shownPlatforms.length')===11,'Column toggle');get('all-platforms').click();check(run('shownPlatforms.length')===12,'Restore columns');
get('source-scope').value='';run('setTab("sources")');check((get('source-grid').innerHTML.match(/class="source-card"/g)||[]).length===158,'All 158 references render');
check(!get('source-grid').innerHTML.includes('N12'),'Removed N12 remains absent');
check(get('provenance').innerHTML.includes('373fcd9')&&!get('provenance').innerHTML.includes('v1.7'),'Provenance pins new committed master');
const context=get('context-content').innerHTML;check(context.includes('Upper Hutt')&&context.includes('cmdb_ci_ot_system_service')&&context.includes('OT097'),'Complete enterprise source lineage retained');
for(const r of run('D.rows'))for(const p of run('D.platforms')){run('openDetail('+JSON.stringify(r.id)+','+JSON.stringify(p.id)+')');assert(get('detail-body').innerHTML.includes('Exact matrix scope'));assert(!/undefined|\[object Object\]/.test(get('detail-body').innerHTML));get('detail').close();}
check(true,'All 1164 detail combinations render');
run('goHeatmap("all")');get('export').click();
(async()=>{const csv=await lastBlob.text();fs.writeFileSync('qa/heatmap-v2.0/visible-export.csv',csv);check(csv.split('\r\n').length===692,'Export has 648 platform rows plus 43 mapping records');check(csv.includes('Deployment type')&&csv.includes('Instrument / control workstation'),'CSV includes deployment fields');
 run('goHeatmap("backup")');get('export').click();check((await lastBlob.text()).split('\r\n').length===37,'Backup export 3 by 12');
 fs.writeFileSync('qa/heatmap-v2.0/interaction-checks.json',JSON.stringify({method:'Actual report JavaScript executed in a minimal DOM model; not browser layout verification',checks,all_1164_details_checked:true,passed:true},null,2));console.log(JSON.stringify({checks,passed:true,all_1164_details_checked:true},null,2));
})().catch(e=>{console.error(e);process.exitCode=1;});
