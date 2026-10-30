// Runs the report's actual JavaScript against a minimal DOM model.
// This tests data and handlers, not browser layout or native-dialog rendering.
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const html=fs.readFileSync('interactive/OT_Application_Support_Heatmap_2026-10-30_v2.1.html','utf8');
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
check(run('activeTab')==='summary','Executive summary initial view');
check(get('report-view').value==='requirements','Execution requirements default');
get('summary-explore').click();check(run('visible.length')===97,'All 97 records available');
check((get('matrix-body').innerHTML.match(/class="requirement-cell"/g)||[]).length===97,'Exactly 97 single-statement cells');
check(!get('matrix-body').innerHTML.includes('class="cell ')&&!get('matrix-body').innerHTML.includes('class="chip '),'No classification cells or chips in requirement view');
check(get('status-control').hidden&&get('columns').hidden&&get('legend').hidden&&get('classifications-method').hidden,'Platform controls and codes hidden');
check(get('matrix-head').innerHTML.includes('Execution requirement')&&!get('matrix-head').innerHTML.includes('VMware'),'Requirement table has no platform columns');
get('supplier').value='OT002';get('supplier').events.change[0]();
check(run('visible.length')===1,'Supplier dropdown selects AMDT');
check(get('matrix-body').innerHTML.includes('Octoplant does not require a hypervisor')&&get('matrix-body').innerHTML.includes('versiondog')&&get('matrix-body').innerHTML.includes('N27'),'AMDT statement and sources visible');
check(!get('matrix-body').innerHTML.includes('Support not established'),'AMDT runtime not replaced by compatibility gap');
check(!/<option[^>]*>OT\d{3}/.test(get('supplier').innerHTML),'Dropdown labels omit roster IDs');
get('supplier').value='OT009';get('supplier').events.change[0]();check(get('matrix-body').innerHTML.includes('requires Hyper-V on Windows but runs natively on Linux'),'PCT edition boundary visible');
get('supplier').value='OT048';get('supplier').events.change[0]();check(get('matrix-body').innerHTML.includes('runs onboard protocols without a hypervisor'),'BioTek onboard distinction visible');
get('supplier').value='OT003';get('supplier').events.change[0]();check(get('matrix-body').innerHTML.includes('exact CIM-integrated PM-Server product is unidentified'),'Unknown product stated explicitly');
run('resetFilters()');get('deployment').value='Provider-hosted core';get('deployment').events.change[0]();check(run('visible.length')===3,'Deployment filter still works');
run('resetFilters()');get('category').value='3.5';get('category').events.change[0]();check(run('visible.length')===30,'Operational category works');
run('resetFilters()');get('report-view').value='platforms';get('report-view').events.change[0]();
check(!get('status-control').hidden&&!get('columns').hidden&&!get('legend').hidden,'Platform controls enabled in explicit VM support view');
check((get('matrix-body').innerHTML.match(/class="cell /g)||[]).length===648,'All 648 technical assessment cells retained');
check((get('matrix-body').innerHTML.match(/class="context-link"/g)||[]).length===43,'43 inventory records remain mapping actions');
get('supplier').value='OT080';get('supplier').events.change[0]();
check(/class="cell backup"[^>]*data-open="OT080"[^>]*data-platform="vmware"[^>]*>B<\/button>/.test(get('matrix-body').innerHTML),'Cohesity VMware B retained');
run('openDetail("OT080","hpe")');check(get('detail-body').innerHTML.includes('Guest-agent protection')&&get('detail-body').innerHTML.includes('Execution requirement'),'Cohesity BA and runtime separated');get('detail').close();
run('openDetail("OT080","proxmox")');check(get('detail-body').innerHTML.includes('Repository / adapter workflow'),'Cohesity BR retained');get('detail').close();
get('summary-backup').click();check(get('report-view').value==='platforms'&&run('visible.length')===3,'Backup summary CTA opens protection matrix');
get('summary-explore').click();check(get('report-view').value==='requirements'&&run('visible.length')===97,'Runtime CTA restores single statements');
get('summary-applicability').click();check(run('activeTab')==='context','Source lineage CTA');
check(get('context-content').innerHTML.includes('Upper Hutt')&&get('context-content').innerHTML.includes('OT097'),'Complete enterprise lineage retained');
get('source-scope').value='';run('setTab("sources")');check((get('source-grid').innerHTML.match(/class="source-card"/g)||[]).length===163,'All 163 reference IDs render');
check(get('provenance').innerHTML.includes('40f8536'),'Pinned committed master');
check(!get('source-grid').innerHTML.includes('N12'),'Removed N12 remains absent');
for(const r of run('D.rows')){run('openDetail('+JSON.stringify(r.id)+')');assert(get('detail-body').innerHTML.includes('Execution requirement'));assert(get('detail-body').innerHTML.includes(r.execution.statement.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')));get('detail').close();}
check(true,'All 97 requirement detail views match master statement');
for(const r of run('D.rows'))for(const p of run('D.platforms')){run('openDetail('+JSON.stringify(r.id)+','+JSON.stringify(p.id)+')');assert(get('detail-body').innerHTML.includes('Exact matrix scope'));assert(!/undefined|\[object Object\]/.test(get('detail-body').innerHTML));get('detail').close();}
check(true,'All 1164 technical detail combinations render');
run('goHeatmap("all")');get('export').click();
(async()=>{const csv=await lastBlob.text();fs.writeFileSync('qa/heatmap-v2.1/requirements-export.csv',csv);check(csv.split('\r\n').length===98,'Requirement export one row per entry');check(csv.split('\r\n')[0].includes('Execution requirement statement')&&!csv.split('\r\n')[0].includes('Classification'),'Requirement CSV has no classification column');
 run('goHeatmap("all","platforms")');get('export').click();const tech=await lastBlob.text();fs.writeFileSync('qa/heatmap-v2.1/platform-export.csv',tech);check(tech.split('\r\n').length===692,'Technical export retains 648 cells plus 43 scope records');check(tech.includes('Octoplant does not require a hypervisor'),'Technical export includes separate execution statement');
 run('goHeatmap("backup","platforms")');get('export').click();check((await lastBlob.text()).split('\r\n').length===37,'Backup export retains all 36 comparisons');
 fs.writeFileSync('qa/heatmap-v2.1/interaction-checks.json',JSON.stringify({checks,passed:true,requirement_statements_checked:97,technical_details_checked:1164,method:'Actual report JavaScript executed in a minimal DOM model; browser layout not verified'},null,2));console.log(JSON.stringify({checks,passed:true,requirement_statements_checked:97,technical_details_checked:1164},null,2));
})().catch(e=>{console.error(e);process.exitCode=1;});
