# Biopharma Peer Benchmarking: VMware Footprint, Virtualization Strategy & Cloud Infrastructure Evolution

> **RESEARCH STATUS — FINAL EDITORIAL EDITION (v3.0, 29 October 2026).** This file was reconciled against the other five existing METI reports. It preserves original source-access classifications and does **not** claim that external URLs were freshly opened on 29 October. "Final" refers to the selected/reconciled documentation, **not** an independently audited worldwide infrastructure census. Detailed source and claim registers follow in the original body.

**Reconciled edition note (29 October 2026):** Integrates additional **historical** VMware evidence for Roche Diagnostics and a limited historical VMware reference for Moderna from companion Report 03. Neither is evidence of a post-November-2023 Broadcom renewal. The Gilead figures use the accessible AWS session description (>2,000 migrated, >1,400 retired), not the inaccessible slide deck's more precise figures. **This is editorial reconciliation of the existing research, not new external validation.**


**METI | Evidence-led research for Global Cloud & Infrastructure Technology Leadership**  
**Research window:** 22 November 2023–28 October 2026  
**Document status:** Source-qualified research deliverable; public-evidence benchmark, **not** an audited inventory of private customer environments  
**Version:** 1.0 | **Evidence checked:** 28 October 2026  
**Company universe:** 19 named biopharmaceutical companies (user-specified, not a random sample)

> **Reading guide:** The main analysis uses only attributable records whose supporting text was actually opened and inspected in this research run. Vendor-published material is explicitly marked. Unavailable job listings, inaccessible files, and search-only excerpts are excluded from established footprint claims. The report does not equate cloud adoption with VMware displacement.

---

# 1. Executive summary

## The question and the answer

**Question:** What virtualization platforms and cloud-computing infrastructure are these 19 biopharma enterprises demonstrably operating, and what publicly documented VMware decisions have they made since Broadcom acquired VMware?

**Answer:** The public record provides **one named, post-acquisition, quantified VMware-to-cloud migration case in this 19-company set: Gilead Sciences**. An AWS re:Invent 2024 session description and a later AWS conference recap state that Gilead migrated **more than 2,000 servers** from on-premises VMware to AWS-native services and retired **more than 1,400 systems** [S05, S06]. These are accessible **AWS-authored conference records**, not an independently inspected customer slide deck. The records do not establish a full enterprise exit or how much VMware remains.

For **AbbVie**, an accessible, expired **company-authored** data-center operations vacancy documents VMware platform engineering, security support and lifecycle responsibilities [S07]. Because it is an expired job advertisement, it is **operational-requirement evidence**, not current production inventory or a Broadcom renewal. Other earlier cited Lilly and Teva vacancies **failed direct opening** and are not counted as verified current VMware-footprint evidence [X01, X02].

The strongest documented **non-VMware infrastructure** developments include **GSK's Azure Local use in manufacturing and R&D** (Microsoft announcement) [S11], **Roche's 2026 on-premises and cloud AI compute build-out** (Roche announcement) [S09], and **Novo Nordisk's August 2026 designation of AWS as preferred cloud provider** (Novo Nordisk announcement) [S10]. Other companies have documented AWS-based SAP, research, genomics, manufacturing, serverless or data platforms—but these are **not evidence of hypervisor replacement**.

**No enterprise-wide VMware retention rate, licensing expense, VCF renewal inventory, installed virtual-machine counts, or verified full VMware exit can be established for the 19-company group from the inspected records.** The result is a carefully bounded snapshot of published peer evidence, not a census of real-world deployments.

## Executive findings

1. **Actual VMware displacement is publicly quantifiable in one case.** Gilead's AWS-hosted conference material identifies source (on-prem VMware), destination (AWS native) and approximate achieved scale. The figures are **AWS-reported**; customer slide-level independent verification was not performed [C001, S05–S06].
2. **Some VMware operational responsibilities were publicly described after the acquisition; that is different from a renewal.** AbbVie's company careers material identifies VMware lifecycle and operations work but does not disclose contract action, VM counts, or the date the underlying deployment began [C002, S07].
3. **Alternative on-premises infrastructure evidence is scarce but not absent.** Microsoft names GSK as an Azure Local customer in vaccine/medicine manufacturing and R&D laboratories. It does not specify which workloads, if any, replaced VMware [C003, S11].
4. **Major cloud commitments are workload- and contract-specific.** Novo Nordisk calls AWS its *preferred cloud provider* in August 2026, but that neither proves exclusivity nor identifies its VMware estate [C004, S10].
5. **AI/HPC infrastructure should not be mistaken for hypervisor strategy.** Roche announced 2,176 additional on-premises Blackwell GPUs in March 2026, bringing its combined on-premises/cloud AI GPU capacity above 3,500; the disclosure is not a VMware/VCF decision [C005, S09].
6. **Financial filings provide industry and supplier context, not private peer footprint counts.** Broadcom's FY2025 Form 10-K reports infrastructure software revenue of **$27.029 billion** versus **$21.478 billion** in FY2024 and attributes the change largely to VCF demand, subscription transition and certain non-cancellable contracts. This segment includes businesses beyond VMware and does **not** reveal which of the 19 purchased VCF, how much they spent, or their deployed VM counts [C006, S02].
7. **Research publication bias is substantial.** AWS and Microsoft have incentives to publicize cloud wins; renewals and stable legacy virtualization often produce fewer public case studies. Consequently, visible cases cannot establish that migration is prevailing among biopharma enterprises.

## Analyst assessment (interpretation, not a claim of industry prevalence)

The evidence is most useful as a **set of real technical reference points**, not as a vote count on VMware. Gilead offers a documented example of selecting and migrating VMware-sourced workloads; GSK offers a described hybrid/edge deployment; Roche offers a model of substantial on-premises capacity investment for AI; and Novo Nordisk provides an explicit preferred-cloud commitment. These show that enterprise cloud choices are **scope-dependent**. Public evidence is insufficient to say whether the 19 companies are broadly staying with or leaving VMware.

---

# 2. Executive 19-company comparison

**Legend:** `VR` = original VMware deployment/renewal verified; `OR` = operational requirement or vacancy, *not* verified deployed footprint; `MV` = VMware-to-other-platform migration documented; `NPE` = no qualifying public **post-acquisition VMware decision** established; `HIST` = historical VMware-related evidence, **not** current renewal or present-day production confirmation. `AWS/Microsoft case` = vendor-hosted material, often with named customer quotations. “Other platform” only means documented use in the specified scope.

| # | Company | VMware footprint evidence | Post-Broadcom VMware response | Other virtualization/private cloud | Verified alternative cloud/compute evidence | Implementation stage & scope | Source IDs |
|---:|---|---|---|---|---|---|---|
| 1 | Eli Lilly and Company | **NPE**; old VMware job URL inaccessible [X01] | Not established | Not established | AWS data-pipeline project, partner-described | Supplier-reported limited analytics workflow; no estate inference | S23; X01 |
| 2 | Johnson & Johnson | **NPE** | Not established | Not established | Azure designated preferred for *MedTech digital surgery* in a **2022** company announcement | Historical announced relationship, not global J&J hosting | S14; S04 |
| 3 | AbbVie | **OR**: company-authored expired data-center VMware operations role | No verified contract/change | Not established | Windows/VMware infrastructure responsibilities described; not a cloud-provider commitment | Expired recruitment specification, global/OT language; no VM count | S07 |
| 4 | Roche Holding | **HIST:** 2022 Roche Diagnostics VMware ESXi/vCenter/Horizon and VMware Cloud on AWS specialist training estate [S30] | No post-acquisition renewal/exit established | Historical VMware virtual-lab estate; separate 2026 on-prem AI GPU compute is **not** a named hypervisor | 2026 Roche AI factory and NVIDIA compute | 2022 VMware case: >15,000 monthly **VM consumptions**, not 15,000 concurrently deployed VMs; 2026 AI announcement is separate | S09, S30 |
| 5 | Novartis | **NPE** | Not established | Not established | AWS patient-services platform; AWS and Azure data/analytics platform in supplier account not promoted [X04] | AWS workload-specific case; other source inaccessible | S15; X04 |
| 6 | AstraZeneca | **NPE** | Not established | Not established | AWS research/genomics and EC2/EKS compute | Named AWS science/research workload; date of some implementations unspecified | S16; S25 |
| 7 | Amgen | **NPE**; supplier migration **funding illustration** not executed migration [X05] | Not established | Not established | AWS genomics/HealthOmics; AWS reports SAP migration in source directory | Research-workflow implementation; SEC filing shows cloud-computing arrangement costs, **not VMware spend** | S03, S17, S24; X05 |
| 8 | Gilead Sciences | **MV** on-prem VMware → AWS native for disclosed scope | **Migrate/replace within specific scope** | Not established | AWS-native infrastructure | AWS conference record: >2,000 servers migrated; >1,400 systems retired | S05–S06 |
| 9 | Novo Nordisk | **NPE** | Not established | Not established | **AWS preferred cloud provider** (Aug 2026); AWS manufacturing IoT examples | Strategic agreement and limited workload references; no VMware contract disclosed | S10, S12 |
| 10 | Pfizer | **NPE** | Not established | Not established | AWS PACT projects in pharma sciences and prototype manufacturing analytics | Named customer testimony; multiple projects, but no estate-wide footprint | S18 |
| 11 | Vertex Pharmaceuticals | **NPE** | Not established | Not established | AWS cryo-EM HPC and Step Functions image processing | Executed AWS projects originating in **2022–Apr 2023** (pre-acquisition) | S19–S20 |
| 12 | Bristol Myers Squibb | **NPE** | Not established | Not established | SAP S/4HANA on AWS; AWS cloud-platform automation | Customer-attributed **2021–22 historical** deployment | S21–S22 |
| 13 | GSK | **NPE** | Not established | **Azure Local** at distributed sites, per Microsoft | Microsoft Azure hybrid/edge workloads | Vendor-reported execution in manufacturing and R&D, 2025–26 | S11 |
| 14 | Sanofi | **NPE** | Not established | Not established | AWS Digital Accelerator/cloud-native data and AI | Vendor-hosted customer case for specific digital platforms | S26 |
| 15 | Regeneron Pharmaceuticals | **NPE**; prior VMware skill lead not promoted | Not established | Not established | AWS Regeneron Genetics Center and cloud platform automation | Historical customer case; 2023 co-authored AWS engineering blog | S27–S28 |
| 16 | Moderna | **HIST / LIMITED:** historical VMware life-sciences promotional quote [S31], **no ESXi/VCF footprint detailed** | No post-acquisition decision established | No named hypervisor evidenced by the quote | AWS manufacturing and analytics; Google Looker on AWS Redshift data [S32] | Historical vendor case and promotional quote; not proof of production VMware VM count | S12–S13, S31–S32 |
| 17 | Takeda Pharmaceutical | **NPE** | Not established | Not established | AWS strategic migration program | **2020 intention** to move 80% of applications; completion not independently confirmed here | S29 |
| 18 | argenx | **NPE** | Not established | Not established | No qualifying enterprise infrastructure provider established | Unknown; no substantiated VMware/cloud footprint claim | — |
| 19 | Teva Pharmaceutical | **NPE**; VMware/VCF/Nutanix LinkedIn job inaccessible [X02] | Not established | Nutanix/VCF referenced in inaccessible lead only; **not verified** | No accessible original-source enterprise cloud position established | No verified deployment/renewal status | X02 |

**Interpretive safeguard:** These are **evidence dispositions**, not claims about what infrastructure the companies actually own. A company with `NPE` may still operate VMware. The public documents checked here simply do not establish it.

---

# 3. VMware response landscape within the disclosed sample

| Category | Companies meeting the strict evidence threshold | Scope and caution |
|---|---|---|
| Retain/expand VMware after acquisition | **None established** | Lack of a public renewal does not mean none occurred |
| Retain/optimize VMware after acquisition | **None established** | VMware operations in a job posting do not prove contractual strategy |
| VMware-plus-alternative *virtualization* coexistence | **None established through verified production records** | AWS and Azure application use is not hypervisor coexistence proof |
| Migrate/replace VMware | **Gilead** | Disclosed on-prem VMware-to-AWS-native server estate; **not global exit** |
| Explicit VMware evaluation/undecided | **None established** | No customer-authored public evaluation identified |
| No verified post-acquisition VMware strategic decision | **18 of 19** | This is a **research visibility count**, not industry behavior |

**Other, separate evidence:** AbbVie has an accessible VMware operations/skills record, but it is not a documented post-acquisition strategy decision. GSK's Azure Local and Roche's AI factory are infrastructure choices but cannot be classified as VMware migration or diversification without an explicit link.

---

# 4. Documented infrastructure evolution: timeline

| Date / evidence period | Company | What was established | VMware relationship |
|---|---|---|---|
| 2020 | Takeda | Announced five-year cloud-first agreement with AWS and Accenture; *80% cloud* was a prospective objective [S29] | None specified |
| 2021 | BMS | AWS/Accenture describe completed SAP S/4HANA on AWS conversion affecting 44 markets, 12 manufacturing plants, 13,000 users [S21] | None specified |
| 2022–Apr 2023 | Vertex | AWS HPC/cryo-EM and serverless microscopy workloads redesigned [S19–S20] | None specified |
| 2022 | Johnson & Johnson MedTech | Azure selected preferred cloud for digital-surgery solutions [S14] | None specified |
| 2023 | Regeneron | Cloud infrastructure automation case co-authored by RGC architect [S28] | None specified |
| **22 Nov 2023** | Broadcom/VMware | Acquisition completed, as documented retrospectively in Broadcom FY2025 Form 10-K [S02] | Research baseline |
| **Nov 2024–Feb 2025** | **Gilead** | AWS re:Invent session and follow-up describe >2,000 VMware-sourced server migrations and >1,400 retirements [S05–S06] | **Explicit VMware displacement, selected scope** |
| 2025 | Broadcom | FY2025 10-K details infrastructure-software revenue and VCF/subscription drivers [S02] | Supplier-wide financial context; not peer-specific |
| 2025–26 | GSK | Microsoft says Azure Local is used for edge processing in manufacturing and laboratories [S11] | Not disclosed |
| **16 Mar 2026** | Roche | Company announces additional 2,176 on-prem Blackwell GPUs; >3,500 combined GPU footprint [S09] | Not disclosed |
| **10 Aug 2026** | Novo Nordisk | Company announces AWS as preferred cloud provider [S10] | Not disclosed |
| **28 Oct 2026** | Research cutoff | No more recent directly inspected public VMware contract/estate update established for other scoped companies | **Unknown, not “retained”** |

**Chart decision:** Do **not** create a 19-company VMware-footprint line graph. Only Gilead has qualifying VMware server counts, and even there the source is a one-time reported migration total rather than a repeated comparable time series. A line would imply invented observations.

---

# 5. Company factual dossiers

Each dossier records the latest fact that survived the accessible-source check, not a guessed enterprise state.

## 5.1 Eli Lilly and Company
**VMware footprint/response:** Not established. The earlier Workday vacancy R-107936 included references to ESX/VMware in search indexing, but direct original-page retrieval failed [X01]. It is **excluded** as an accessible confirmed-footprint source.  
**Other infrastructure:** Uptimal describes a Lilly AWS data automation implementation using AWS Lambda and existing AWS infrastructure; this is partner-authored and limited to business intelligence pipelines [S23].  
**What cannot be concluded:** Hypervisor footprint, Azure/VMware coexistence, 2026 VCF renewal, use of AWS as primary cloud, or VMware migration.

## 5.2 Johnson & Johnson
**VMware footprint/response:** Not established in inspected public material.  
**Other infrastructure:** J&J's company release, dated before the acquisition, identifies Microsoft's cloud/Azure as preferred for **MedTech digital surgery**, not the pharma division or corporate enterprise [S14].  
**Financial source:** J&J's FY2025 results were opened [S04]; the inspected materials did not provide a VMware customer-estate record.  
**Limitation:** The business-unit and historical timing preclude any claim about a 2026 global J&J VMware strategy.

## 5.3 AbbVie
**VMware evidence:** An AbbVie-authored expired job listing states responsibility for VMware/Windows data-center operations, platform security, problem resolution and VMware lifecycle management [S07]. It mentions servers in cloud, operational technology and data-center environments, but does not furnish deployment counts.  
**Post-Broadcom response:** No renewal, VCF rollout, reduction or migration verified.  
**Evidence nature:** C1, *expired recruitment requirement*, not audited production evidence.  
**Limitations:** The listing is accessible but expired and has no sufficiently established posting/event date to treat it as proof of current installations.

## 5.4 Roche Holding
**Historical VMware footprint:** VMware's 3 August 2022 Roche Diagnostics customer case describes a training/simulation estate using ESXi, vCenter, Horizon, Workspace ONE Access and VMware Cloud on AWS [S30]. It reports >15,000 VM **consumptions per month**, a utilization metric rather than a current or concurrent VM count. This is **historical vendor-hosted customer evidence**, not a 2026 Broadcom contract or renewal.  
**Post-acquisition VMware response:** No qualifying response established.  
**Infrastructure:** Roche's 16 March 2026 company release says it added **2,176 on-premises NVIDIA Blackwell GPUs** across the US and Europe; combined on-premises and cloud capacity exceeds **3,500 Blackwell GPUs** [S09]. Scope: AI compute across Roche operations.  
**Interpretation:** Demonstrates willingness to expand privately operated high-performance infrastructure for particular workloads. **Not** evidence of VCF, AHV or general VM hosting.  
**Limits:** No VMware licensing or hypervisor architecture is disclosed.

## 5.5 Novartis
**VMware:** No verifiable post-acquisition decision or estate size.  
**Infrastructure:** AWS's named Novartis case documents patient-service workloads and cloud platform services, with a 2024 program roadmap [S15]. A supplier description of AWS+Azure analytics exists, but the direct source failed opening in this run and is not elevated [X04].  
**Limits:** AWS use cannot be generalized to the entire enterprise or interpreted as VMware migration.

## 5.6 AstraZeneca
**VMware:** Not established.  
**Infrastructure:** AWS's named customer hub documents genomics research and use of AWS for critical activities, while a separate AWS case describes EC2/EKS compute supporting augmented drug design [S16, S25].  
**Limits:** Case-study publication date and deployment date are not uniformly provided. Neither explicitly states VMware source infrastructure.

## 5.7 Amgen
**VMware:** No customer-verified migration or 2026 footprint established. A previously referenced Cognizant VMware-to-AWS business-case illustration is **not** evidence of an executed migration [X05].  
**Infrastructure:** AWS case describes Amgen's genomics workflows, including an initial on-premises-to-AWS transition dating to 2019 [S17]. AWS's pharma-manufacturing directory refers to Amgen SAP-on-AWS migration [S24] but is insufficient for detailed VMware attribution.  
**Financial record:** 2025 Form 10-K reports capitalized cloud-computing-arrangement implementation costs of **$272m at 2025 year-end vs $227m at 2024 year-end**; these are **not VMware costs** [S03].  
**Limits:** No verified VCF contract, hypervisor decision, or executed 2,269-VM migration.

## 5.8 Gilead Sciences
**VMware:** AWS's 2024 re:Invent **MAM214** published session description identifies migration of **more than 2,000** servers from on-premises VMware to native AWS services and retirement of **more than 1,400** systems [S05]. AWS's 18 Feb 2025 session recap repeats these figures [S06].  
**Response/stage:** **Migrate/replace within disclosed workload scope**; AWS reports executed migration.  
**Evidence caveat:** Both accessible documents are AWS-authored session descriptions. They corroborate the public AWS reporting but are **not independent customer-authored proof**. The inaccessible Gilead PDF was **not** treated as a validated direct link, and the more exact 2,200/340 figures were **not used**.  
**Limits:** No full VMware exit, residual host count, specific VCF license reduction, GxP workload transition or causal exclusivity of Broadcom established.

## 5.9 Novo Nordisk
**VMware:** No disclosed post-acquisition strategy.  
**Infrastructure:** In its **10 Aug 2026** corporate release, Novo Nordisk explicitly designates AWS its **preferred cloud provider** and strategic AI partner, and describes a London co-innovation hub [S10]. AWS also describes manufacturing data/IoT examples [S12].  
**Stage:** Commercial/strategic partnership and documented application initiatives.  
**Limits:** Preferred does not mean exclusive; no VMware migration evidence.

## 5.10 Pfizer
**VMware:** Not established.  
**Infrastructure:** AWS's PACT case records 14 projects/prototypes spanning research and manufacturing analytics, dating from a collaboration begun in 2021. Its 16,000-hour time-savings and 55% infrastructure-cost figures are presented partly as **estimates**, not audited realized company-wide effects [S18].  
**Limits:** Neither PACT nor Azure/AWS usage establishes VMware retention/exit.

## 5.11 Vertex Pharmaceuticals
**VMware:** No qualifying footprint/response.  
**Infrastructure:** AWS describes cryo-EM processing/storage shifted from on-premises HPC beginning around 2022, with AWS EC2/ParallelCluster/FSx, plus a separately described AWS Step Functions serverless image-processing redesign in April 2023 [S19, S20].  
**Stage:** Named technical implementation, **pre-acquisition**.  
**Limits:** Previous on-premises HPC systems were not identified as VMware; no Broadcom-era inference permitted.

## 5.12 Bristol Myers Squibb
**VMware:** Not established.  
**Infrastructure:** AWS/Accenture's 2021 case documents BMS's SAP ECC-to-S/4HANA conversion on AWS across **44 markets, 12 manufacturing sites and 13,000 users** [S21]; a BMS cloud engineering guest-authored blog in 2022 describes AWS account provisioning automation [S22].  
**Stage:** Historical implemented enterprise and cloud platform capabilities.  
**Limits:** Pre-2023 program cannot be dated as a reaction to Broadcom or as VMware displacement.

## 5.13 GSK
**VMware:** No verified renewal/exit.  
**Other virtualization/hybrid:** Microsoft explicitly identifies GSK as an Azure Local customer enabling edge processing and AI inference across vaccine and medicine manufacturing and R&D laboratories; the article also references participation in Microsoft Ignite [S11].  
**Stage:** Microsoft-reported customer use (V1); conference session itself was not independently reviewed.  
**Limits:** No public proof that Azure Local displaced a specific VMware site, VM count or VCF agreement.

## 5.14 Sanofi
**VMware:** No documented decision.  
**Infrastructure:** AWS's Sanofi Digital Accelerator customer case describes AWS-hosted serverless, ML and data capabilities used across clinical, R&D, commercial and manufacturing-related digital solutions [S26]. The program began in **2022**.  
**Limits:** Application-platform evidence, not enterprise virtualization or hypervisor replacement. Customer quotations appear within a vendor-hosted case.

## 5.15 Regeneron Pharmaceuticals
**VMware:** No directly verified post-acquisition strategy or footprint; older indexed job references are not counted.  
**Infrastructure:** AWS describes Regeneron Genetics Center using EC2/S3 for large-scale genomics; outcomes and data refer predominantly to **2021** [S27]. A **2023** AWS post co-authored with a Regeneron IT architect documents platform automation with AWS Proton [S28].  
**Limits:** Strong historical AWS platform proof, not VMware or Broadcom response.

## 5.16 Moderna
**VMware:** VMware's historical life-sciences brochure contains a Moderna executive promotional reference, but lacks an identified ESXi/VCF deployment, virtual-machine quantity, or post-acquisition renewal [S31]. It is a historical relationship indicator, **not a certified VMware footprint**.  
**Infrastructure:** AWS's accessible Moderna customer hub describes cloud services for data and manufacturing, with examples from **2018, 2022 and 2023** [S13]. AWS's manufacturing page describes SAP S/4HANA in a GxP-validated AWS environment for a Moderna facility [S12].  
**Other verified-scope cloud evidence:** A Google Cloud Moderna customer story documents Looker and Amazon Redshift use in a data architecture [S32]; this does **not** establish a mixed hypervisor estate.  
**Limits:** Historic deployment details and validation are **supplier-published**; do not extrapolate to the whole manufacturing estate or to 2026 VMware licensing.

## 5.17 Takeda Pharmaceutical
**VMware:** Not established.  
**Infrastructure:** Takeda's original **13 Oct 2020** announcement defines an AWS/Accenture five-year strategic agreement and future cloud-first transition. The **80% application-to-cloud figure is a target**, *not* completed migration verified by that source [S29].  
**Limits:** Additional post-2023 completion numbers cannot be accepted without a subsequently inspected dated record; no VMware connection proven.

## 5.18 argenx
**VMware:** Not publicly established from qualifying inspected material.  
**Cloud infrastructure:** No qualifying original infrastructure-provider or virtualization deployment identified in this research run.  
**Limit:** Do not substitute general AI, data-science, procurement or corporate investor reports for platform-specific evidence.

## 5.19 Teva Pharmaceutical
**VMware:** Search results revealed a Teva-attributed LinkedIn vacancy mentioning VMware Cloud Foundation, vSphere/vSAN/NSX, Nutanix AHV and Azure. **Direct opening failed** [X02]; it remains an **unverified recruitment lead**.  
**Post-Broadcom response:** Not established.  
**Cloud/hypervisor:** No verified company-authored current infrastructure architecture or deployment record in the opened evidence.  
**Limits:** Do not call Teva a confirmed mixed VMware/Nutanix production estate from this lead.

---

# 6. Biopharma-specific workload comparison

| Workload / setting | Documented example | What the evidence shows | What it does **not** show |
|---|---|---|---|
| Enterprise server migration | Gilead [S05–S06] | AWS reports VMware source and native-AWS destination; >2,000 servers | GxP scope, full exit, validated-state transfer |
| Manufacturing and R&D at the edge | GSK [S11] | Azure Local reported for site-level processing/AI | Specific hypervisor displacement or whole estate |
| Private/hybrid AI compute | Roche [S09] | Real physical GPU-capacity expansion | Hypervisor/VMware architecture |
| SAP in regulated operations | BMS [S21]; Moderna [S12] | Named AWS/SAP environments with manufacturing or GxP context | Migration from VMware |
| Omics/genomic compute | Amgen [S17], Regeneron [S27], AstraZeneca [S16] | AWS research/HPC workloads | A company-wide preferred hypervisor |
| Data + AI applications | Pfizer [S18], Sanofi [S26] | Workload-specific cloud implementations | VMware footprint or Broadcom spending |

**Analyst reading:** A technical peer comparison is most defensible when **workload class**, **origin architecture**, **destination architecture**, **implementation milestone** and **regulatory scope** are specified. Only then can an implementation serve as an analogous decision reference. This is analytical framing, not an inference that all biopharma sites share identical requirements.

---

# 7. Cross-company comparative analysis

### Observation A — Public migration evidence is specific, not representative
**Fact:** Gilead is a named VMware-source migration example in accessible AWS conference records [S05–S06].  
**Interpretation:** A post-acquisition VMware-to-cloud program at meaningful scale is technically demonstrable within the peer universe.  
**Boundary:** The sample cannot establish migration frequency or financial attractiveness across 19 companies.

### Observation B — Operational continuity and contract continuity are separate
**Fact:** AbbVie's archived company vacancy discusses VMware lifecycle and operations [S07].  
**Interpretation:** It is a plausible signal that VMware knowledge and operational responsibilities were relevant to the role when published.  
**Boundary:** It neither establishes how much VMware is running now nor proves Broadcom renewal.

### Observation C — Alternative infrastructure often serves a distinct purpose
**Fact:** GSK Azure Local is described for edge processing; Roche's new on-prem GPU estate supports AI; Novo Nordisk's AWS agreement covers cloud/AI modernization [S09–S11].  
**Interpretation:** Platform choices observable in peers are often driven by differentiated workloads rather than a single universal virtualization decision.  
**Boundary:** These sources do not establish a systematic VMware displacement pattern.

### Observation D — Historical projects must remain historical
**Fact:** Vertex's two AWS modernizations began before November 2023, as did Takeda's cloud program and BMS SAP transformation [S19–S22, S29].  
**Interpretation:** Continued publication of such case studies says something about prior architectural capability but not the response to Broadcom.  
**Boundary:** Publication/republication time must not be confused with decision date.

### Observation E — Broadcom financial performance does not reveal peer behavior
**Fact:** Broadcom reports aggregate infrastructure software revenues and acknowledges significant revenue-recognition effects associated with VCF contracts [S02].  
**Interpretation:** The filing is important commercial context for VMware customers but not a named-peer renewal ledger.  
**Boundary:** No per-company spend, core count, customer churn or installed VCF volume for the 19 companies is disclosed.

---

# 8. What the peer evidence establishes for cloud infrastructure decision-making

| Verified observation | Implication for interpreting peer references | Question the public record cannot answer |
|---|---|---|
| VMware-origin migrations can be undertaken at multi-thousand-server scale (AWS-reported Gilead) [S05] | Use migration scope and actual destination architecture when comparing cases | Which VMware workloads remained and what migration economics were realized? |
| Enterprise VMware operations can remain an explicit staffing requirement (AbbVie vacancy) [S07] | Staffing or expertise evidence belongs below deployment and procurement evidence | Was VCF renewed, reduced or displaced? |
| Azure Local is used for biopharma distributed edge processing (Microsoft-reported GSK) [S11] | Edge/OT workloads may merit separate peer-case analysis | Did the platform replace VMware? Which site and VM classes? |
| Significant on-prem compute is still publicly invested in (Roche) [S09] | Cloud-first programs need not imply elimination of physical compute | What hypervisor, if any, hosts surrounding workloads? |
| Preferred-provider cloud agreements occur (Novo Nordisk) [S10] | Differentiate preferred, strategic and exclusive language | What proportion of the estate or VMware footprint is actually moved? |
| SAP and clinical/manufacturing systems can run on AWS (BMS, Moderna) [S12, S21] | Distinguish applications, validation assertions, and virtualization layers | Was VMware the original platform and were validation controls transferred? |

**Decision-relevant information gap:** No credible public evidence found in this pass provides a consolidated **2026 VMware estate size, annual Broadcom licensing cost, or 2024–26 net VMware capacity change** for the named 19 companies. External peer benchmarking can illuminate certain project choices; it cannot substitute for estate telemetry or direct peer discussions about contracts and validated workload dependencies.

---

# 9. Methodology, finance and verification boundaries

1. **Discovery:** Searches combined each company with VMware, Broadcom, VCF, vSphere, ESXi, Nutanix, Hyper-V, OpenShift Virtualization, cloud migration and AWS/Azure/Google Cloud. Search avenues included provider customer archives, AWS re:Invent, Microsoft Ignite/Azure, company investor pages, SEC disclosures, and named IT/OT roles. This was a targeted public-web research pass, **not** a crawl of every historic conference session or all financial filings ever published.
2. **Verification:** Only sources explicitly shown as *Opened / supporting content inspected* in Appendix A substantiate the main report. Search results or inaccessible official URLs do not qualify.
3. **Financial sources:** Broadcom's 2025 Form 10-K [S02], Amgen's 2025 10-K [S03], and J&J FY2025 investor results [S04] were opened. None supplies a 19-company VMware contract register. Material accessible company announcements are included separately as company-authored records. Broadcom's 2026 10-Q and earnings release were located but failed direct retrieval in this run [X03]; they have **not** been represented as opened/validated in this artifact. Financial filings are most useful for supplier-wide accounting context, not named customer installed capacity.
4. **Conference sources:** AWS re:Invent materials [S05–S06], Microsoft Azure/previous Ignite reference [S11] and relevant cloud-provider implementation stories were checked. A conference agenda can verify what an organizer states; it is **not identical to inspecting an attendee's actual slides or hearing the full recorded talk**.
5. **Scope precision:** AWS/Azure application deployment, cloud vendor preference, SAP in cloud, infrastructure engineering vacancies, and licensed VMware estate are different kinds of evidence.
6. **Sampling:** Vendor-hosted success cases are selectively promoted and are not a random cross-section of biopharma VMware behavior.
7. **No unsupported negative inference:** “Not established” means insufficient public records inspected here, not that a product is absent from the company.
8. **No industry prevalence estimates:** Counts in Section 3 are documentation-coverage counts only.

---

# Appendix A — Opened source register

**Classification:** C1 = original company record; C2 = directly attributable customer statement in externally hosted original; F1 = original SEC/official financial record; V1 = vendor-authored customer case/claim. A vendor case can include C2 quotations without becoming independently audited. **All below had their actual text successfully opened through retrieval in this research run; this does not guarantee frictionless access from every user network.** Publication date is *not stated* if not directly established from source.

| ID | Company/context | Publisher; original document (date when verified) | Provenance | Exact claim locator | Retrieval |
|---|---|---|---|---|---|
| S02 | Supplier finance | [Broadcom Form 10-K, FY2025](https://www.sec.gov/Archives/edgar/data/1730168/000173016825000121/avgo-20251102.htm) | F1 | MD&A “Net Revenue by Segment”; infrastructure software | Opened |
| S03 | Amgen finance | [Amgen Form 10-K, FY2025](https://www.sec.gov/Archives/edgar/data/318154/000031815426000010/amgn-20251231.htm) | F1 | Notes: “Cloud computing arrangements” | Opened |
| S04 | J&J finance | [Johnson & Johnson FY2025 results, 21 Jan 2026](https://www.investor.jnj.com/investor-news/news-details/2026/Johnson--Johnson-reports-Q4-and-Full-Year-2025-results/) | C1 | FY results overview; not VMware-specific | Opened |
| S05 | Gilead | [AWS, *AWS for VMware at re:Invent 2024 – Attendee Guide*, 7 Nov 2024](https://aws.amazon.com/blogs/migration-and-modernization/aws-for-vmware-at-reinvent-2024-attendee-guide/) | V1 | Session MAM214 | Opened |
| S06 | Gilead | [AWS, *AWS for VMware at re:Invent 2024 Playlist*, 18 Feb 2025](https://aws.amazon.com/blogs/migration-and-modernization/aws-for-vmware-at-reinvent-2024-playlist/) | V1 | Session MAM214 | Opened |
| S07 | AbbVie | [AbbVie careers, *Senior Analyst, Business Systems*, ID R00103126 (date not established)](https://careers.abbvie.com/en/job/senior-analyst-business-systems-in-north-chicago-il-jid-2943) | C1 / recruitment | Job description “Data Center Operations”, VMware lifecycle; **expired** | Opened; expired |
| S09 | Roche | [Roche, *Roche launches NVIDIA AI factory*, 16 Mar 2026](https://www.roche.com/media/releases/med-cor-2026-03-16) | C1 | First paragraphs / GPU numbers | Opened |
| S10 | Novo Nordisk | [Novo Nordisk, AWS partnership announcement, 10 Aug 2026](https://www.novonordisk.com/news-and-media/news-and-ir-materials/news-details.html?id=916594) | C1 | Headline bullets and paragraphs 1–3 | Opened |
| S11 | GSK | [Microsoft Azure blog, *New options for AI-powered innovation, resiliency, and control with Microsoft Azure*, 2025–26](https://azure.microsoft.com/en-us/blog/new-options-for-ai-powered-innovation-resiliency-and-control-with-microsoft-azure/) | V1 | “Meeting unique operational and data sovereignty needs” / GSK | Opened |
| S12 | Moderna, Novo Nordisk | [AWS life-sciences manufacturing & supply-chain customer page (date not stated)](https://aws.amazon.com/health/life-sciences/solutions/manufacturing-supply-chain/) | V1 | “Featured customers” | Opened |
| S13 | Moderna | [AWS, *Moderna on AWS* customer hub (historical cases)](https://aws.amazon.com/tw/solutions/case-studies/innovators/moderna/) | V1 | Overview and dated 2018/2022/2023 case index | Opened |
| S14 | J&J MedTech | [J&J, strategic Microsoft digital-surgery partnership, pre-acquisition](https://www.jnj.com/media-center/press-releases/johnson-johnson-medical-devices-companies-announces-strategic-partnership-with-microsoft-to-further-enable-its-digital-surgery-solutions) | C1 | Preferred-cloud-provider statement | Opened |
| S15 | Novartis | [AWS, *Novartis Builds Patient Support System on AWS* (case references 2024 plans)](https://aws.amazon.com/solutions/case-studies/novartis-case-study/) | V1 with C2 quotations | Opportunity, solution, 2024 roadmap | Opened |
| S16 | AstraZeneca | [AWS, *AstraZeneca on AWS* customer hub](https://aws.amazon.com/solutions/case-studies/innovators/astrazeneca/) | V1 | Research/genomics section | Opened |
| S17 | Amgen | [AWS, *Amgen Scientists Use AWS HealthOmics*](https://aws.amazon.com/solutions/case-studies/amgen-omics-case-study/) | V1, some C2 | Opportunity: 2019 AWS pipeline migration | Opened |
| S18 | Pfizer | [AWS, *Driving Patient-Centric Innovation with Pfizer*](https://aws.amazon.com/solutions/case-studies/pfizer-PACT-case-study/) | V1 with C2 quotations | Overview / PACT metrics, clearly estimates | Opened |
| S19 | Vertex | [AWS, *Vertex Pharmaceuticals cryo-EM on AWS*](https://aws.amazon.com/solutions/case-studies/vertex-case-study/) | V1 with C2 quotations | Opportunity section: 2022 architecture | Opened |
| S20 | Vertex | [AWS, *AWS Step Functions at Vertex*](https://aws.amazon.com/solutions/case-studies/vertex-pharmaceuticals-distributed-map/) | V1 with C2 quotations | Opportunity: April 2023 redesign | Opened |
| S21 | BMS | [AWS/Accenture, *BMS SAP ECC→S/4HANA on AWS*, 25 Feb 2021](https://aws.amazon.com/blogs/industries/bristol-myers-squibb-s4hana-accenture/) | V1 with C2 quotation | Scope: 44 markets, 12 sites, 13k users | Opened |
| S22 | BMS | [AWS guest-authored BMS infrastructure blog, 26 Oct 2022](https://aws.amazon.com/blogs/industries/bristol-myers-squibb-deploys-accounts-from-multiverse-solution-within-an-hour-using-aws-control-tower/) | C2 / guest-authored | Intro and AWS Control Tower workflow | Opened |
| S23 | Lilly | [Uptimal, *Eli Lilly & Company – Automating Data Processing with AWS* (undated)](https://www.uptimal.com/our-work/eli-lilly-company-automating-data-processing-with-aws/) | V1 | Case overview and AWS Lambda solution | Opened |
| S24 | Amgen/BMS/Moderna | [AWS, *Pharma Manufacturing Use Cases* (undated)](https://aws.amazon.com/health/biopharma/manufacturing/) | V1 | Case-study directory | Opened |
| S25 | AstraZeneca | [AWS, *AstraZeneca Builds Large-Scale Cloud Compute System*](https://aws.amazon.com/solutions/case-studies/astrazeneca-compute-case-study/) | V1 with customer-video reference | Overview | Opened |
| S26 | Sanofi | [AWS, *Sanofi Drives Scientific Innovation with AI on AWS*](https://aws.amazon.com/solutions/case-studies/sanofi-case-study/) | V1 with C2 quotations | Digital Accelerator and AWS services | Opened |
| S27 | Regeneron | [AWS, *Regeneron Brings Large-Scale Genomics to Drug Discovery*](https://aws.amazon.com/solutions/case-studies/regeneron-case-study/) | V1 with C2 quotations | RGC / 2021 case metrics | Opened |
| S28 | Regeneron | [AWS, *How RGC achieved infrastructure automation at scale*, 1 Aug 2023](https://aws.amazon.com/blogs/containers/how-rgc-genetics-center-achieved-infrastructure-automation-at-scale-using-aws-proton/) | C2, co-authored by Regeneron architect | Byline and Introduction | Opened |
| S29 | Takeda | [Takeda, *Accelerates Digital Transformation with Accenture and AWS*, 13 Oct 2020](https://www.takeda.com/newsroom/newsreleases/2020/takeda-accelerates-digital-transformation-with-accenture-and-aws/) | C1 | “By moving 80%…” future-tense statement | Opened |

| S30 | Roche Diagnostics historical VMware baseline | [VMware EMEA, *Virtual hands-on learning delivers real-world outcomes*, 3 Aug 2022](https://blogs.vmware.com/emea-en/2022/08/virtual-hands-on-learning-delivers-real-world-outcomes/) | V1 with Roche customer C2 | Simulation platform description, ESXi/vCenter/Horizon, monthly consumption figure | Opened in companion Report 03 research; **not freshly reopened** |
| S31 | Moderna historical VMware reference | [VMware, *Advance Life Sciences Digital Transformation*, historical PDF](https://www.vmware.com/docs/vmw-life-sciences-solution-brief) | V1 promotional | Executive quote, **no ESXi/VCF deployment identification** | **Partially inspected** in Report 03; PDF visual check failed |
| S32 | Moderna multicloud data | [Google Cloud, *Moderna uses the right dose of data to boost discovery*](https://cloud.google.com/customers/moderna) | V1 with customer C2 | Looker / Amazon Redshift data architecture | Opened in companion Report 03 research; **not freshly reopened** |

**Source-access accounting:** 27 sources were opened in the original Report 01 research, and **three supplemental source entries (S30–S32)** were carried from companion Report 03 (two opened there, one partially inspected). No new source was opened as part of this editorial reconciliation. Some sources have no independently established publication date.

**Supplemental cross-report claims added in this editorial edition:** `C-ROCHE-HIST` = VMware-published 2022 Roche Diagnostics virtual training estate, source S30; `C-MODERNA-HIST` = historical VMware promotional quote without hypervisor deployment detail, source S31; `C-MODERNA-DATA` = Google Looker / AWS Redshift data use, source S32. None changes the 2023–2026 VMware strategic-response distribution.

# Appendix B — Claim-level evidence register

| Claim ID | Company | Claim supported by opened record | Evidence/source and locator | Classification | What is not established |
|---|---|---|---|---|---|
| C001 | Gilead | >2,000 VMware-origin servers to AWS-native; >1,400 systems retired | S05, MAM214; S06, MAM214 | V1, repeated by same vendor | Customer slide inspection, full VMware exit, precise 2,200 |
| C002 | AbbVie | VMware platform/lifecycle responsibilities in an employer-authored role | S07, Job Description; expired | C1 recruitment | Current VM inventory, renewal or production status |
| C003 | GSK | Microsoft names Azure Local use in manufacturing/R&D | S11, “Meeting unique operational…” | V1 | VMware source displacement or exact deployment scope |
| C004 | Novo Nordisk | AWS named *preferred cloud provider* on 10 Aug 2026 | S10, introduction | C1 | Exclusive cloud or VMware migration |
| C005 | Roche | 2,176 new on-prem GPUs, >3,500 total on-prem+cloud GPUs | S09, release opening | C1 | VM platform or Broadcom change |
| C006 | Broadcom | Infrastructure software $27,029m FY25 vs $21,478m FY24 | S02, 10-K MD&A “Net Revenue by Segment” | F1 | VMware-only revenue, 19 peer renewals |
| C007 | Broadcom | VCF and licensing/accounting terms cited as segment growth drivers | S02, MD&A next to revenue table | F1 / management attribution | Deployment or customer counts |
| C008 | Amgen | Capitalized cloud implementation costs $272m FY25 vs $227m FY24 | S03, notes “Cloud computing arrangements” | F1 | VMware licensing spend |
| C009 | J&J MedTech | Microsoft named preferred cloud for digital surgery in historical deal | S14, partnership scope | C1 | Enterprise J&J cloud choice |
| C010 | Novartis | AWS patient-service platform implemented | S15, Overview / Opportunity | V1 with C2 | VMware migration |
| C011 | AstraZeneca | AWS supports genomics/scientific workloads | S16, research; S25 overview | V1 | Corporate hypervisor mix |
| C012 | Amgen | AWS genomics pipeline described, begun in 2019 | S17, Opportunity | V1 | Post-acquisition VMware exit |
| C013 | Pfizer | PACT 14 projects; 55% cost number framed as estimated | S18, Opportunity/Outcome | V1 with C2 | Actual company-wide costs or VMware counts |
| C014 | Vertex | AWS cryo-EM modernization started before acquisition | S19, Opportunity | V1/C2 | VMware source platform |
| C015 | Vertex | AWS serverless segmentation redesign April 2023 | S20, Opportunity | V1/C2 | Broadcom response |
| C016 | BMS | 2021 SAP AWS conversion in 44 markets/12 manufacturing sites/13k users | S21, “What Accenture did” | V1 with C2 | Migration from VMware |
| C017 | BMS | AWS cloud provisioning automation | S22, introductory narrative | C2 guest authored | Corporate virtualization platform |
| C018 | Sanofi | AWS Digital Accelerator uses AWS data/serverless/ML | S26, Solution | V1 with C2 | VMware footprint |
| C019 | Regeneron | AWS RGC genomics / historical case | S27, case overview & results | V1 with C2 | VMware footprint |
| C020 | Regeneron | 2023 co-authored AWS Proton infrastructure automation | S28, byline/introduction | C2 | VMware replacement |
| C021 | Moderna | AWS describes manufacturing SAP in GxP environment | S12, Featured customers | V1 | GxP audit, VMware origin |
| C022 | Takeda | 2020 AWS target for 80% of apps to cloud | S29, future-tense text | C1 forward-looking | Completion by 2026 |
| C023 | Lilly | Partner describes AWS BI/data automation | S23, Approach | V1 | Enterprise primary cloud / VMware |
| C024 | Novo Nordisk | AWS describes manufacturing IoT data examples | S12, Featured customers | V1 | VMware displacement |

The register is intentionally compact and identifies the **exact source section** rather than pretending that an inaccessible document was inspected.

# Appendix C — Financial, earnings, investor and legal record disposition

| Record | Status | Factual use in this report | Not established |
|---|---|---|---|
| Broadcom FY2025 SEC 10-K [S02] | Original opened | Segment revenue; subscription/VCF context | Named 19-company VMware purchases or deployments |
| Broadcom Q3 FY2026 SEC 10-Q, `avgo-20260802.htm` [X03] | Found in indexed result; **direct open failed** | **Not used as validated primary source** | 2026 customer-specific footprint and inaccessible figure validation |
| Broadcom FY2026 Q3 investor earnings release [X03] | Search discovery; direct open failed | Not treated as inspected supporting evidence | Named peer VMware strategy |
| Amgen FY2025 SEC 10-K [S03] | Original opened | Capitalized cloud computing implementation costs | VMware license fees |
| J&J FY2025 investor earnings [S04] | Original opened | Financial/business reporting context only | VMware installed base |
| Roche original March 2026 company media release [S09] | Original opened | Private AI hardware disclosure | VMware hypervisor |
| Novo Nordisk Aug 2026 corporate/IR release [S10] | Original opened | Explicit AWS preferred provider | VM count or Broadcom contract |
| J&J pre-2023 digital surgery agreement [S14] | Original opened | Defined business-unit cloud preference | Post-2023 parent-company decision |

**Accounting control:** Broadcom infrastructure software includes more than VMware. Its revenue is affected by subscription licensing and recognition timing, and cannot be used to derive VMware customer retention, churn or utilization. The full set of 19 companies' annual, quarterly and earnings documents was **not exhaustively opened** in this run; the three inspected financial records above are transparently identified. The result must not be presented as an exhaustive filing audit or a verified census of nonpublic VMware contracts.

# Appendix D — Discovery coverage and excluded source log

**Research avenues used across the 19 companies:** company + VMware/VCF/vSphere/ESXi, company + cloud provider, virtualization alternatives, AWS/Microsoft/Google customer stories, conference publications, corporate news/investor materials, SEC 10-K/10-Q for selected relevant originals. For each of the 19, the matrix gives the disposition of the strongest inspected finding or explicitly records insufficient evidence.

| Exclusion ID | Company | Candidate/avenue | Actual status | Reason not used as verified claim |
|---|---|---|---|---|
| X01 | Lilly | Workday job requisition R-107936 (`https://lilly.wd115.myworkdayjobs.com/en-US/LLY/job/Platform-Engineer--R3---R4-_R-107936`) | Search text available, **direct original open failed** | Not a reader-validated working URL; job alone not deployment |
| X02 | Teva | LinkedIn-hosted VMware/VCF/Nutanix job (`https://in.linkedin.com/jobs/view/senior-vmware-cloud-infrastructure-engineer-at-teva-pharmaceuticals-4480983192`) | Search text available, **direct open failed** | Cannot certify current source content; no company-authored verification |
| X03 | Broadcom | FY2026 Q3 SEC 10-Q and investor results | Search text retrieved, **direct open failed** | Excluded from opened-primary ledger; not an individual peer inventory |
| X04 | Novartis | Accenture AWS+Azure data-platform customer story | Search result present, direct open failed | Not promoted to inspected source |
| X05 | Amgen | Cognizant VMware-to-AWS migration funding example | Supplier-illustrative / not customer-confirmed execution | Proposed/funding scenario must not be called completed migration |
| X06 | Gilead | AWS event PDF at `d1.awsstatic.com` and earlier `reinvent.awsevents.com` variants | Earlier users encountered Access Denied; original not inspected in this run | Exact 2,200 servers/340 applications not presented as source-verified |
| X07 | Roche | Company October 2026 Q3 release | Search result obtained; direct open failed | Not used for infrastructure claim |
| X08 | Novartis | October 2026 AWS engineering careers role | Search-indexed, direct open failed | Not upgraded to active estate proof |
| X09 | Moderna | Double-slash AWS US case hub URL | Direct open failed; alternate AWS regional URL [S13] opened | Use S13, not broken original link |
| X10 | Broadcom | Company acquisition-completion release at `investors.broadcom.com/news-releases/news-release-details/broadcom-completes-acquisition-vmware` | **Direct open returned 403 Forbidden** | Removed from opened-source register; acquisition date supported by opened Broadcom FY2025 SEC 10-K [S02] |

**Access caveat:** An opened source may later expire, be region-blocked or show Access Denied in another user's browser; this register is a precise record of what was accessible to this research environment, not a guarantee of global availability. Broken and inaccessible references are **not** included in the verified-source list.

# Appendix E — Coverage, unresolved questions and source assurance

## Coverage ledger

| Company | VMware-source disposition | Cloud/alternative-source disposition |
|---|---|---|
| Lilly | No accessible qualifying VMware record | Vendor AWS analytics case |
| J&J | No qualifying VMware record | Historical company Azure MedTech agreement |
| AbbVie | Original accessible *recruitment* record | Same operational responsibilities, not estate |
| Roche | No qualifying VMware record | Original 2026 private AI compute announcement |
| Novartis | No qualifying VMware record | Accessible AWS patient-platform case |
| AstraZeneca | No qualifying VMware record | Accessible AWS research compute cases |
| Amgen | No qualifying executed VMware migration | AWS omics case and SEC cloud accounting |
| Gilead | Accessible AWS-reported VMware migration | AWS-native destination identified |
| Novo Nordisk | No qualifying VMware record | Original Aug 2026 AWS preferred-provider announcement |
| Pfizer | No qualifying VMware record | AWS PACT customer case |
| Vertex | No qualifying VMware record | Historical AWS HPC/serverless cases |
| BMS | No qualifying VMware record | Historical SAP AWS and guest-authored engineering post |
| GSK | No qualifying VMware record | Microsoft Azure Local customer claim |
| Sanofi | No qualifying VMware record | AWS Digital Accelerator customer case |
| Regeneron | No qualifying VMware record | AWS case and co-authored 2023 post |
| Moderna | No qualifying VMware record | AWS manufacturing/customer hub |
| Takeda | No qualifying VMware record | Original 2020 AWS strategy **intention**, no completion |
| argenx | No qualifying VMware record | No verified enterprise compute provider established |
| Teva | Search-only VMware lead; original inaccessible | No certified current primary infrastructure source |

## Outstanding evidence gaps (research findings, not user-assigned tasks)

- **18/19** organizations lack a publicly evidenced **post-acquisition VMware strategy decision** in the accessible records assembled here.
- No comparable VM/core-count time series for these companies exists in the verified evidence assembled here.
- No original invoices, VCF contracts, customer-specific renewal prices, or company-wide license inventories were discovered.
- Gilead residual VMware capacity, per-workload compliance handling, migration savings and procurement effect are not publicly established from the accessible AWS summary.
- Teva and Lilly vacancy leads are not link-accessible originals in this run; historical indexed snippets are retained only as leads.
- GSK Azure Local source is Microsoft-authored; no original GSK site-specific VM migration detail was verified.
- Private cloud, manufacturing OT, research HPC and ordinary public-cloud applications are not comparable measures of virtualization footprint.

## Research assurance statement

- **Companies represented:** 19 of 19.
- **Opened and inspected original source pages in register:** 27 unique entries, including 3 financial/investor records and the core AWS/Microsoft/Roche/Novo original publications. Opened means source content was retrieved through the research tool; not necessarily browser-visible from every network.
- **Claim-level entries with inspected supporting sources:** 24.
- **Direct company/SEC original evidence:** Broadcom (SEC, retrospectively confirming acquisition), Amgen (SEC), J&J (investor release and historical cloud announcement), AbbVie (expired recruitment), Roche, Novo Nordisk, Takeda (historical strategy).
- **Vendor-hosted or customer-attributed material:** AWS/Microsoft customer cases and event summaries, individually flagged V1 or C2 where directly attributable.
- **Inaccessible/search-only/rejected leads:** 10 recorded in Appendix D, including the user-flagged Gilead PDF, Lilly job listing, and Broadcom investor release.
- **Claims corrected relative to earlier drafts:** Gilead exact 2,200/340 replaced with accessible AWS >2,000/>1,400 figures; Lilly/Teva current footprint downgraded; Amgen funding scenario removed as executed migration; Takeda 80% reclassified as an original *target*; Vertex chronology marked pre-acquisition.
- **Financial coverage limitation:** This was **not** an exhaustive opening of every annual report, quarterly filing, and earnings transcript for all 19 companies; the records actually inspected are enumerated above. No company-specific VMware spend or customer-list extrapolation is made.
- **Overall conclusion:** **Completed source-qualified public-evidence benchmark, not a fully auditable census of private VMware infrastructure.**
- **Research cutoff:** 28 October 2026.

---

*Prepared for METI enterprise cloud technology sensing. Evidence-bounded analyst interpretation is explicitly differentiated from sourced facts. No platform-selection recommendation or unverifiable industry prevalence estimate is made.*

---

## Editorial release provenance (29 October 2026)

This is a **history-reconciled final editorial edition** assembled solely from METI research files created earlier in the same conversation. It does not represent new public-web source checking. Source-access statuses describe the **original research run**, not guaranteed present-day availability. See `00_README_AND_VERSION_MANIFEST.md` for source-file mapping, cross-document precedence, and quality limitations.
