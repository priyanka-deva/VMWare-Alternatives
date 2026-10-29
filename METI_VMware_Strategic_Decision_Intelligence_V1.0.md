# METI | VMware Strategic Decision Intelligence
## Broadcom, enterprise virtualization competition and peer biopharma infrastructure

**Version:** 1.0 — executive editorial consolidation  
**Prepared:** 29 October 2026  
**Research cutoff:** 28–29 October 2026, as recorded in the six source reports  
**Audience:** Global Cloud & Infrastructure Technology Leadership, global biopharma  
**Scope:** External public evidence; no internal infrastructure, contracts, application inventory or supplier decisions assumed  
**Evidence basis:** Six METI research reports reconciled 29 October 2026, plus dated and explicitly identified Section 5 supplemental source records in Annex E  
**Independence:** METI editorial synthesis. Consulting-style structure only; not authored, reviewed or endorsed by EY.
**Presentation rule:** Sections 1–9 distinguish source-supported **Facts** from explicitly labeled **Conclusions — analyst synthesis**. The research annexes retain their original evidence and source-access qualifications.

> **Executive reading guide.** Sections 1–9 are the decision-intelligence report. Section 10 explains the evidence structure; annexes retain company and competitor dossiers, detailed OT specifications and the six original source/claim registers. The original six-report combined baseline remains a separate, unchanged research artifact. Source tags use **R1–R6** to distinguish the original report: for example, **[R1:S05]** refers to source S05 in Report 1's annexed source register. Source IDs are **not globally unique without the R-prefix**. An attribution to a vendor, customer or survey publisher is not an independent audit.

---

# 1. Executive Summary and Principal Findings

## Facts — six questions answered by the research

The table preserves the published metrics, attribution and source limitations. It does not convert survey responses, vendor claims or missing public disclosures into independently verified enterprise deployments.

| Leadership question | Source-supported evidence and stated limits |
|---|---|
| **Is VMware still a major enterprise platform?** | Yes. A 2026 S&P Global 451 survey reports VMware as the primary platform for approximately **43%** of relevant responses, ahead of Microsoft Hyper-V at about **28%**. **The headline figures are publisher-indexed, not fully reopened**, and are survey responses—not audited worldwide market share. [R6:S01–S02] |
| **Has Broadcom grown its VMware customer base?** | **Not determinable.** More than **90% of its top 10,000 VMware customers** had reportedly **purchased** VCF by February 2026, and infrastructure-software revenue rose; neither measures total active customers or installed VM growth. [R2:S01, S03] |
| **Are peers moving away from VMware?** | The 19-company set has **one publicly quantified, post-acquisition VMware-origin migration case** meeting the research threshold: AWS reports Gilead moved **more than 2,000 servers** from on-premises VMware to AWS-native services and retired **more than 1,400 systems**. This is a project scope, **not** a full-company exit or proof Broadcom caused the move. [R1:S05–S06] |
| **Are replacements credible?** | Yes for **selected scopes**. Named customer cases describe completed VMware migrations to Nutanix AHV, Proxmox, Vates/XCP-ng and VergeOS. Microsoft, Red Hat, HPE and other suppliers offer additional viable architectural options, but proof varies by product and reference. [R4:S04, S09–S13; R5:S27–S33] |
| **What do OT records establish?** | Some Siemens, Rockwell, Schneider, AVEVA and Emerson materials explicitly mention VMware, Hyper-V and, in a Rockwell general statement, Nutanix. Approval remains tied to **specific application releases and configurations**. [R5:OT01–OT05, OT09–OT10] |
| **Is there a defensible one-number global market-share or customer-churn chart?** | **No.** The accessible sources do not supply a like-for-like worldwide installed-VM, revenue or active-customer series. Intentions, purchasing, deployment and primary-platform survey responses cannot be merged. [R2:S01–S05; R6:S01–S09] |

### Conclusion — analyst synthesis

**VMware remains a major enterprise virtualization platform, while credible alternatives are increasingly evidenced in actual customer deployments.** The available record supports **workload-segmented competition and measured diversification**; it does not support either an industry-wide VMware exit narrative or an assumption that any single alternative can replace the complete VMware Cloud Foundation (VCF) stack across corporate, scientific and validated manufacturing workloads.

## Principal conclusions — analyst synthesis

**1. Broadcom's commercial success and VMware's installed-base trajectory are separate questions.** Broadcom's FY2025 infrastructure-software revenue rose **26%** from FY2024; the company describes VCF demand, subscription conversion and contract recognition among the drivers. There is no disclosed like-for-like VMware active-customer series to translate this into net customer growth. [R2:S01]

**2. VMware competitiveness is now demonstrated at the workload level.** Supplier-hosted customer stories provide actual source-to-destination migration examples. They do not establish comparable estate-wide economics, equivalent resilience, or regulatory support across customers. [R4:S04–S13]

**3. Peer biopharma infrastructure developments do not establish a common VMware exit trend.** AWS reports that Gilead migrated more than 2,000 servers from on-premises VMware to AWS-native services. Separately, Microsoft reports GSK using Azure Local for manufacturing/R&D edge workloads; Roche has a historical VMware Diagnostics simulation environment and a distinct 2026 on-premises AI/GPU expansion; and Novo Nordisk designated AWS its preferred cloud provider in August 2026. **Only the Gilead example explicitly identifies VMware as the source platform for migrated workloads.** The other examples do not establish whether VMware was retained, expanded or replaced. Even Gilead's case does not establish an enterprise-wide VMware exit. [R1:S05–S11, S30]

**4. OT compatibility is application-specific, not a generic infrastructure certification.** A hypervisor supporting Windows/Linux virtual machines does not automatically qualify a particular MES, historian, LIMS, SCADA or distributed-control-system deployment. [R5:OT01–OT05, OT09–OT10]

**5. Decision readiness depends on the enterprise workload and dependency baseline.** The research identifies credible options but **does not recommend a specific vendor for an undisclosed company estate**. A defensible decision requires the current VMware stack dependencies, application and site segmentation, support terms, migration validation and total economics.

**Decision implications drawn from the evidence:**

- Maintain a distinction between market presence, primary-platform preference and deployed VM share.
- Do not use segment revenue or commercial conversion as proof of customer growth, retention or churn.
- Use named projects as technical analogues, not a statistical biopharma migration rate.
- Evaluate both actual migration outcomes and fit with the services bundled around a hypervisor.
- For regulated/plant workloads, written application-vendor support and qualification are gating requirements.
- Avoid false precision and fabricated cross-year market trends.

### Overall conclusion

**Compete where evidence can be established; protect unsupported or unqualified workloads from unproven substitution.** The strategic choice is not simply “stay on VMware” versus “leave VMware.” The realistic decision is which workload segments should remain, optimize, diversify or migrate, under defined support and economic conditions.

---

# 2. Broadcom / VMware Customer and Commercial Position

## Facts — VCF purchasing milestones

Broadcom's public statements provide a selected cohort's **VCF purchasing/conversion milestones** beginning after the **22 November 2023** acquisition.

“Signed up,” “adoption” and “purchased” should retain their original wording. None is synonymous with a quantified production rollout, individual renewal retention or worldwide market share.

| Disclosure date | Reported position | Scope and source integrity |
|---|---|---|
| 22 Nov 2023 | Acquisition completed; **no like-for-like top-10,000 conversion baseline** | No zero baseline should be plotted. [R2:S01] |
| 12 Dec 2024 | **More than 4,500 of 10,000** “signed up” | Management-attributed, **secondary-hosted** executive transcript; not an original Broadcom transcript inspected. [R2:S13] |
| 6 Mar 2025 | Approximately **70%** adoption/conversion | Secondary-hosted executive transcript; not production deployment. [R2:S14] |
| 5 Jun 2025 | **Over 87%** adoption/conversion | Secondary-hosted executive transcript. [R2:S15] |
| 26 Aug 2025 | **Over 100 million VCF cores licensed**; nine of top ten Fortune 500 companies committed | A different **licensed-capacity/commitment** metric; not customer penetration or utilization. [R2:S12] |
| 13 Feb 2026 | **More than 90% of the top 10,000 had purchased VCF** | Broadcom/VMware original; selected **existing large-customer cohort**, not all VMware customers. [R2:S03] |
| Sep–Oct 2026 | No later comparable cohort percentage established in the reviewed disclosures | An evidence gap, **not** proof of stalling or contraction. [R2:S04–S05] |

### Conclusion — analyst synthesis

**Large-account VCF purchasing/conversion does not establish how many distinct VMware customers were added or lost, nor how many VCF workloads entered production.** The milestone terms and denominators are not interchangeable with retention or deployed capacity.

## Facts — Broadcom financial disclosures

Broadcom cited VCF demand, a transition to subscriptions, non-terminable license contracts and post-integration labor cost reductions as relevant revenue or income drivers. Price and packaging may also affect results, but **the reviewed record does not isolate a VMware-specific realized price increase accounting for all growth**. [R2:S01, S04]

| Broadcom disclosure | Earlier value | Later value | Appropriate interpretation |
|---|---:|---:|---|
| Infrastructure-software revenue, annual | FY2024 **$21.478bn** | FY2025 **$27.029bn** | **+26%**, across all infrastructure software, not VMware-only. [R2:S01] |
| Infrastructure-software segment operating income | FY2024 **$13.977bn** | FY2025 **$20.765bn** | **+49%**, segment level, not VMware standalone profit. [R2:S01] |
| Infrastructure-software revenue, quarterly | Q3 FY2025 **$6.786bn** | Q3 FY2026 **$8.752bn** | **+29%**, comparable quarters, segment-wide. [R2:S04–S05] |
| VMware-attributable net revenue | FY2024 **$12.384bn** | No comparable FY2025–26 VMware-only series verified | Historical FY2024 acquisition-related disclosure. **Do not** splice into segment totals. [R2:S01] |

### Conclusion — analyst synthesis

**Infrastructure-software revenue and operating-income growth do not establish VMware-only customer-base growth.** Broadcom's reported segment includes other software, and the research cannot separate customer count, price, deployment volume and accounting effects.

## Facts — named Broadcom customer announcements

**Evidence boundary:** The eight named cases are a selected sample, not a customer census; individual financial consideration was not established.

| Customer | Publicly reported action | Interpretation boundary |
|---|---|---|
| **Audi** | March 2025: selected VCF-supported virtual-PLC/factory automation deployment live at Böllinger Höfe. [R2:S06] | Specific manufacturing deployment, not global factory share. |
| **Walmart** | August 2025: strategic supplier collaboration and prospective VCF cloud/edge plan. [R2:S07] | Planned rollout is not completed rollout. |
| **Lloyds Banking Group** | September 2025: multi-year Broadcom software expansion including VCF. [R2:S08] | Contract continuity, not VM growth. |
| **ING** | December 2025: VCF 9 selected for private-cloud modernization. [R2:S09] | Selection, not verified full implementation. |
| **LSEG** | May 2026: five-year VCF agreement; rollout described as planned. [R2:S10] | Explicit continued relationship, scope and deployment distinct. |
| **Standard Chartered** | July 2026: supplier/customer reports 70% of global infrastructure footprint on its new architecture. [R2:S11] | Customer-reported figure, not independently audited. |
| **NTT DOCOMO** | October 2026: announced ten-year VMware software relationship. [R2:S16] | Official publication indexed; full reopening unsuccessful in underlying run. |
| **FedEx** | October 2026: supplier says it continues to use VCF and other Broadcom products. [R2:S17] | Official publication indexed; full reopening unsuccessful in underlying run. |

### Conclusion — analyst synthesis

**These eight announcements show selected customer agreements, product decisions and deployment examples—not the total VMware installed base.** No named deal values were established, and planned rollouts must not be treated as completed deployments. The total VMware customer/VM population trend since acquisition remains unresolved.


---

# 3. Enterprise Virtualization Market Position — 2026

## Facts — 2026 primary-platform survey

**Evidence qualification:** These figures are attributed to S&P Global 451 Research's *Virtualization 2026*. The originating article and detailed crosstabs were **not fully reopened** in the original research, although the article was publisher-indexed and an official archive corroborated publication. The publisher's methodology material describes approximately **789 survey respondents**, with approximately **230 current hypervisor users** in a relevant survey portion (May–June 2026). Exact platform-question denominator/weighting were not established from inspected full materials. **Do not describe these as independently revalidated worldwide revenue, customer or installed-VM shares.** [R6:S01–S02, S08]

| Primary platform family | Approximate share of responses | Read as |
|---|---:|---|
| VMware vSphere / vSphere Foundation | **27%** | Component of combined VMware figure |
| VMware Cloud Foundation | **16%** | Component of combined VMware figure |
| **VMware combined** | **43%** | **Do not add** 27% and 16% again |
| Microsoft Hyper-V | **28%** | Primary-platform response |
| Oracle virtualization | **12%** | Publisher's broad Oracle category |
| Red Hat | **7%** | Publisher's platform category |
| OpenStack solutions | **3%** | Publisher's category |
| Nutanix | **2%** | Primary platform, **not** total AHV adoption |

### Conclusion — analyst synthesis

**VMware is the leading primary platform in the reported survey responses, not an audited global installed-VM, revenue or unique-customer share.** The figures remain attributed to publisher-indexed S&P 451 material; the article and detailed crosstabs were not fully reopened in the original research.

## Facts — installed presence and intentions in a separate survey

A different, directly opened S&P 451 private-cloud article reports that **nearly 90%** of surveyed private-cloud environments contained VMware-based workloads. Within that surveyed population, **37%** intended to keep most VMware workloads; its broader remaining **63%** includes multiple approaches and **6% undecided**. Around one quarter described shifting **some** workloads while retaining a smaller footprint, and around one third described either evaluating alternatives or already transitioning. **These are not completed migration percentages**. [R6:S03]

Other 2026 studies (CloudBolt, HPE and ETR) offer directional evidence of reconsideration, often vendor-sponsored or based on **intentions**. Gartner's September 2026 server-virtualization research evaluates **17 vendors** but its publicly available abstract is not a market-share dataset. [R3:E11, R4:M01, R6:S04–S09]

| Measure | What it describes | What it does not describe |
|---|---|---|
| **43% VMware** | One 2026 survey's primary-platform responses | Worldwide VM/revenue/customer market share |
| **Nearly 90% VMware presence** | Separate private-cloud survey's VMware-containing environments | Exclusive or primary platform, or 90% of all enterprises |
| **37% maintain bulk / 63% other approaches** | Respondents' future approaches in that second survey | Executed churn, or 63% completed/committed VMware exits |

### Conclusion — analyst synthesis

**Primary-platform choice, VMware presence and intended future action are different measures from different survey populations.** The 63% group cannot be described as completed VMware exits or customer churn, and the data cannot support a 2023–2026 worldwide market-share trendline.


---

# 4. Competitive Landscape — Ten VMware Alternatives

## Facts — ten researched alternative platforms

The shortlist follows technical relevance and architectural diversity in the original research; it is **unranked** and is **not** an independently measured market-share top ten.

| Alternative | Documented architecture | Potential fit (analyst assessment) | Qualification requiring validation |
|---|---|---|---|
| **Nutanix AHV / Cloud Infrastructure** | Integrated hypervisor, HCI storage and Prism operations | Enterprise VM and HCI substitution; selected VMware migration references | Hardware/storage economics, network/security, recovery, OT support and licensing scope. [R4:S04–S05] |
| **Microsoft Hyper-V / Azure Local** | Microsoft virtualization and Azure-connected hybrid/edge infrastructure | Windows/Linux VMs, hybrid estates, certain explicitly named industrial uses | **Hyper-V approval does not automatically approve Azure Local**, every guest version or every plant app. [R4:S06, OT01–OT03] |
| **Red Hat OpenShift Virtualization** | KVM virtual machines alongside Kubernetes workloads | VM/container convergence, common platform policy where OpenShift skills exist | Kubernetes operating-model complexity and legacy guest/ISV support. [R4:S07] |
| **HPE Morpheus VM Essentials / HVM** | KVM-based HVM with management/coexistence for existing VMware | Phased coexistence, staged conversion and HPE-aligned estates | Product maturity and parity by edition, HCL, ISVs and independent customer evidence. [R4:S08] |
| **Proxmox VE** | KVM-based cluster virtualization with optional Ceph | Noncritical VM estates, independent infrastructure, selected proven migrations | Enterprise support model, operations integration, backup, resilience and OT approval. [R4:S09–S11] |
| **Oracle Linux KVM / OLVM** | Oracle-managed KVM virtualization | Oracle/Linux-aligned application/VM portfolios | Migration procedure is **not** evidence of a named customer exit; differentiate VirtualBox from OLVM. [R4:S14] |
| **Canonical MicroCloud / OpenStack** | Open Linux/private-cloud architecture | Engineering-led cloud estates seeking control and portability | Greater integration and lifecycle-operating responsibility; no verified named VMware exit in the scoped evidence. [R4:S15] |
| **Scale Computing HyperCore** | Consolidated virtualization/storage for distributed sites | Remote sites and smaller edge footprints | Enterprise scale, site autonomy, recovery model and exact industrial software support. [R4:S16] |
| **Vates VMS / XCP-ng** | Xen/Xen Orchestra virtualization and management | Select legacy estates, phased conversion, independently managed infrastructure | Guest driver/firmware and enterprise backup/OT ISV ecosystem. [R4:S12, S17] |
| **VergeOS** | Integrated compute/storage/network virtualization stack | Selected consolidated infrastructure and hardware reuse | Smaller-vendor support, resilience, ecosystem and application support. [R4:S13] |

### Conclusion — analyst synthesis

**The documented products represent different architectures and intended workload segments; they are not ten equivalent substitutions for VMware Cloud Foundation.** The potential-fit column is **analyst interpretation**, not a claim that every deployment has demonstrated the stated fit. The shortlist is unranked and is not an independently measured top ten by market share.

**Public cloud is a separate choice.** AWS-native services, Azure VMs and other hyperscaler destinations can replace VMware hosting for a **particular application**, but should not be compared as one-for-one on-premises hypervisor substitutes.

## Facts and evaluation requirements — full stack versus hypervisor

**An ESXi substitute is not necessarily a VCF substitute.** A platform assessment must separately prove the relevant capabilities formerly provided by vSphere/vCenter, vSAN, NSX/network security, live migration and high availability, automation, monitoring, backup/recovery and service governance. A functional VM boot is insufficient to establish operational equivalence. [R4:S06, S08, S14, S23]

**Relative market position cannot be inferred from vendor-specific denominators.** Nutanix reported **over 32,000 end customers** across its portfolio in its FY2026 Form 10-K; Proxmox reported **over 2.3 million active VE servers** in a supplier announcement. Those are different populations, and the original source-access record is qualified. Neither figure establishes comparative virtualization market share or migrated VMware customer counts. [R4:M02–M03; R5:S03, S12]

### Conclusion — analyst synthesis

**Enterprise alternatives should be evaluated against the VMware services actually used—hypervisor, management, storage, networking, availability, recovery and automation—and against application support.** Vendor installation and customer totals cannot be combined into a comparative market-share ranking.


---

# 5. Peer Biopharma Infrastructure Strategies

**Historical research context (2019–2026):** The peer relationship analysis uses a **2019–2026 lookback** because enterprise infrastructure and software relationships can span multiple years, including periods before and after Broadcom's acquisition of VMware in November 2023. Material earlier references (such as Sanofi's 2012 and AstraZeneca's 2017 VMware deployments) are retained as clearly dated historical baselines. **This is a contextual evidence window, not a claim that every company was comprehensively assessed in every year.** Historical product use does not establish a current Broadcom contract, VMware deployment or VCF renewal.

## 5.1. What Broadcom customer disclosures and financial filings establish

The research examined Broadcom's published customer/cohort disclosures, FY2025 Form 10-K, FY2026 Q3 financial statements and earnings, and selected public financial and infrastructure records for named biopharma peers. **It was not a comprehensive audit of all 19 companies' private infrastructure contracts or every peer's 10-K.**

| Evidence source | Published facts | Scope |
|---|---|---|
| **Broadcom VCF customer purchasing** | By **13 February 2026**, Broadcom stated that **more than 90% of its largest 10,000 VMware customers had purchased VCF**. [R2:S03] | Selected large-customer cohort. **Purchased** does not measure deployed VMs or the number of customers added/lost. |
| **Broadcom FY2025 Form 10-K** | Infrastructure-software revenue increased from **$21.478bn in FY2024 to $27.029bn in FY2025 (+26%)**. The filing also reported **$12.384bn FY2024 VMware-attributable revenue**, without a comparable FY2025 VMware-only series verified in this research. [R2:S01] | Broadcom's infrastructure-software segment also includes non-VMware businesses; its totals cannot be assigned to named peers. |
| **Broadcom FY2026 Q3 disclosures** | Infrastructure-software revenue was **$8.752bn**, compared with **$6.786bn in Q3 FY2025 (+29%)**. The source describes VCF demand and non-terminable contract revenue-recognition mechanisms. [R2:S04–S05] | Financial and contractual results, not a VMware customer-count or installed-VM movement series. |
| **Broadcom named accounts** | Eight selected public announcements in the research identify **Audi, Walmart, Lloyds Banking Group, ING, LSEG, Standard Chartered, NTT DOCOMO and FedEx**. [R2:S06–S11, S16–S17] | **None of those eight selected announcements names one of the 19 scoped biopharma peers.** This does **not** establish that the peers are or are not VMware customers. |
| **Selected peer financial records** | Amgen's FY2025 Form 10-K reported capitalized **cloud-computing arrangement implementation costs of $272m at 2025 year-end versus $227m at 2024 year-end**. J&J FY2025 results were also inspected in the underlying research. [R1:S03–S04] | Amgen's amounts are **not VMware costs**. Neither source provides a verified VMware contract value or installed-VM count for the 19-company cohort. |

### Conclusion — analyst synthesis

**Broadcom's large-account VCF purchasing and financial growth cannot establish that biopharma peers are collectively expanding, retaining or exiting VMware.** The disclosures do not provide attributable VMware spending, retention, VM capacity or renewal decisions for the named 19 companies. The financial evidence describes supplier-side commercial performance; the peer-specific documents below describe selected customer-side infrastructure activity. **Both forms of evidence are useful, but they answer different questions.**

## 5.2. Nineteen biopharma peers — Broadcom portfolio relationships

The comparison covers **Broadcom's broader product portfolio**, including historical products from VMware, CA Technologies and other acquired businesses. A named pre-acquisition VMware or CA deployment is evidence of a relationship with a **business now in the Broadcom portfolio**, **not** a confirmed current Broadcom contract or 2026 VCF renewal. Separate AWS/Azure/cloud activities are contextual, **not** evidence of Broadcom product use.

| Company | Named Broadcom portfolio relationship — exact product and period | Other documented infrastructure context |
|---|---|---|
| **Eli Lilly** | No attributable Broadcom portfolio product deployment established in the reviewed evidence. | Partner-described AWS business-intelligence data automation. [R1:S23] |
| **Johnson & Johnson** | **VMware:** In a **2017** VMworld account, a J&J infrastructure leader describes a VMware team and integration with **vSphere Storage APIs for Data Protection (VADP)**. The reported SDDC VM count is not verified as VMware-only. [BP03] | Azure preferred for historical **MedTech digital surgery**, not company-wide pharma IT. [R1:S14] |
| **AbbVie** | **VMware:** Company infrastructure role describes VMware data-center/lifecycle responsibilities. This is an **operations requirement**, not an audited deployment or renewal. [R1:S07] | No separate enterprise-wide provider decision established in the original research. |
| **Roche** | **VMware:** A **2022 Roche Diagnostics** case explicitly identifies **ESXi, vCenter, Horizon, Workspace ONE Access and VMware Cloud on AWS** for training/simulation environments. [R1:S30] | Distinct 2026 on-premises GPU infrastructure investment. [R1:S09] |
| **Novartis** | No attributable Broadcom portfolio product deployment established in the reviewed evidence. | AWS patient-services application platform. [R1:S15] |
| **AstraZeneca** | **VMware:** A 2021 customer case describes **VMware ESX** in a 2017 private-cloud deployment and later hybrid-cloud automation. **CA Technologies:** A commercial customer directory lists **CA Clarity PPM** use in **2011**; this is **secondary reported adoption**, not an independently verified active contract. [BP01, BP05] | AWS research/genomics compute. [R1:S16, S25] |
| **Amgen** | No named Broadcom portfolio product deployment established in the reviewed evidence. A supplier VMware migration funding scenario was **not executed migration proof**. [R1 Appendix D] | AWS genomics/SAP context and capitalized cloud implementation costs; **not VMware spending**. [R1:S03, S17, S24] |
| **Gilead Sciences** | **VMware:** AWS reports **more than 2,000 servers** migrated from on-premises VMware to AWS-native services, plus **more than 1,400 systems retired**. This establishes a VMware source estate for that program, **not a full enterprise exit**. [R1:S05–S06] | AWS-native destination for the documented migration. |
| **Novo Nordisk** | No attributable Broadcom portfolio product deployment established in the reviewed evidence. | AWS **preferred** provider (August 2026) and separate Azure application cases. [R1:S10; R3:E07, E22] |
| **Pfizer** | **VMware:** In VMware's **November 2019** earnings-call discussion, its CEO named Pfizer as a **VMware Cloud on AWS customer reference**. **This is management-attributed evidence**, not a documented production VM inventory or 2026 renewal. [BP04] | AWS PACT scientific/manufacturing-analytics work. [R1:S18] |
| **Vertex Pharmaceuticals** | No attributable Broadcom portfolio product deployment established in the reviewed evidence. | Historical AWS cryo-EM/HPC and serverless image processing. [R1:S19–S20] |
| **Bristol Myers Squibb** | No attributable Broadcom portfolio product deployment established in the reviewed evidence. | Historical SAP S/4HANA on AWS and cloud automation. [R1:S21–S22] |
| **GSK** | No attributable Broadcom portfolio product deployment established in the reviewed evidence. | Microsoft-reported Azure Local manufacturing/R&D edge use. [R1:S11] |
| **Sanofi** | **VMware:** Dell/EMC's **2012** customer release explicitly describes **VMware vSphere** in Sanofi's global private cloud. **Historical deployment**, not a 2026 Broadcom contract. [BP02] | AWS Digital Accelerator/cloud-native application services. [R1:S26] |
| **Regeneron** | No attributable Broadcom portfolio product deployment established in the reviewed evidence. | AWS genomics and 2023 AWS Proton automation case. [R1:S27–S28] |
| **Moderna** | **VMware:** Historical VMware life-sciences material quotes a Moderna executive, **without identifying ESXi/VCF deployment, VM count or renewal**. [R1:S31] | AWS manufacturing/data and Google Looker–AWS Redshift architecture. [R1:S12–S13, S32] |
| **Takeda** | No attributable Broadcom portfolio product deployment established in the reviewed evidence. | AWS/Accenture 2020 cloud-first plan; 80% migration figure was a **target**. [R1:S29] |
| **argenx** | No attributable Broadcom portfolio product deployment established in the reviewed evidence. | No qualifying public enterprise infrastructure record found in scoped research. [R1 Appendix E] |
| **Teva** | No attributable deployment established. Unverified VMware/Nutanix recruitment material was **not classified as a customer relationship**. [R1 Appendix D] | No qualifying original-source cloud/hypervisor deployment established in scope. |

### Conclusion — analyst synthesis

**1. Broadcom's inherited VMware portfolio has an established historical biopharma footprint.** The researched records document named VMware implementations at **Johnson & Johnson, Roche, AstraZeneca and Sanofi**. Gilead's post-acquisition migration also establishes an on-premises VMware source estate in the disclosed scope. This does **not** establish that those five firms are active 2026 VCF customers.

**2. Other relationship signals have different evidentiary status.** **Pfizer** was named in VMware management commentary; **Moderna** appears in a historical VMware testimonial; **AbbVie** documented VMware operational responsibilities. None should be presented as equivalent to a contract, a quantified production estate or confirmed current license.

**3. Non-VMware Broadcom relationships deserve explicit visibility.** A commercial customer database reports historical **CA Clarity PPM** adoption at **AstraZeneca**. This is a **secondary-source relationship lead** and should not be upgraded to a verified 2026 Clarity contract. The reviewed records do not substantiate a broad claim that all 19 use CA, Symantec, VCF or other Broadcom products.

**4. The critical post-acquisition question remains open.** Broadcom's aggregate VCF purchasing/earnings disclosures cannot identify which peer companies renewed, expanded or reduced their VMware or other Broadcom products. **Gilead** is the scoped VMware-origin migration reference, not proof of a company-wide exit or a market-wide trend.

**5. Leadership implication.** Treat the **historical Broadcom portfolio relationship map** and the **current VMware replacement decision** as related but separate analyses. They identify potential customer familiarity and architecture history, but cannot substitute for attributable renewal, estate or procurement evidence.

## 5.3. Decision relevance by biopharma workload

The peer evidence identifies **different comparable workload categories** rather than a single common virtualization strategy.

| Workload/architecture observed | Source-grounded peer reference | How the reference can inform a VMware assessment |
|---|---|---|
| **Direct VMware-to-cloud migration** | Gilead — specified on-premises VMware servers to AWS-native services. [R1:S05–S06] | Use as a migration-program example; establish the scope, actual migrated/retired systems and residual estate before extrapolating. |
| **Manufacturing/R&D site and edge infrastructure** | GSK — Azure Local in manufacturing and labs. [R1:S11] | Evaluate distributed platform/site characteristics; do not assume it replaced VMware. |
| **Specialized virtualized simulation/training** | Roche Diagnostics — documented **2022** VMware environment. [R1:S30] | Compare specialized virtual workloads separately from corporate general-purpose VMs. |
| **Private AI compute capacity** | Roche — new on-premises GPU infrastructure in **2026**. [R1:S09] | Relevant to private compute direction; not a disclosed VMware hypervisor decision. |
| **Enterprise cloud application/SAP** | BMS, Moderna, and other named AWS-hosted cases. [R1:S12, S21–S22] | Application and regulated-workload context; original VMware placement not established. |
| **Cloud-provider strategy** | Novo Nordisk — AWS preferred in **2026**, with documented Azure uses in another scope. [R1:S10; R3:E07, E22] | Separate provider preference from individual workload placement or hypervisor displacement. |

### Conclusion — analyst synthesis

**Peer benchmarking is most decision-useful when it compares similar workloads, origins, destinations and implementation states.** The evidence does not support comparing an on-premises virtual lab, a manufacturing edge platform, an AI GPU estate and a cloud-preferred-provider agreement as though they were four equivalent VMware contract decisions.

## 5.4. Additional life-sciences references outside the selected 19

The companion research identifies **IHMA** as a Nutanix-hosted laboratory migration from VMware to AHV; **Astellas Pharma** as an Azure migration/datacenter consolidation case **without an identified VMware-origin VM total**; and **Himalaya Wellness** as a named Nutanix HCI deployment. These are additional technical references, **not evidence of decisions by any of the selected 19 companies**. [R3:E12–E16]

### Conclusion — analyst synthesis

**These adjacent life-sciences cases broaden the set of relevant implementation analogues, especially for lab virtualization and hybrid modernization.** They do not establish adoption rates or manufacturer/GxP certification across the biopharma sector.

---

# 6. Customer Migration and Platform Replacement Evidence

## Facts — VMware-origin customer migrations

| Target platform | Customer and published context | Reported migration outcome | Evidence qualification |
|---|---|---|---|
| **AWS native services** | **Gilead**, 2024 session / 2025 recap | **>2,000 servers** migrated from on-premises VMware; **>1,400 systems** retired. [R1:S05–S06] | AWS-authored session material; **not** independent slide-level audit. Counts must **not** be added; residual VMware unknown. |
| **Nutanix AHV** | **MSIG Asia**, 2025 | Approximately **2,000 VMware VMs** transitioned to AHV by April 2025. [R4:S04] | Supplier-hosted named customer; defined regional group only. |
| **Nutanix AHV** | **IHMA**, lab case | Customer describes **99 VMs** moved from VMware to AHV. [R3:E12; R5:S22] | Supplier-hosted laboratory reference, not proof that every GxP configuration is supported. |
| **Proxmox VE** | **Estracom**, Oct 2025 | **320 VMs** transitioned VMware vCenter to Proxmox; supplier states six-week duration. [R4:S09] | Customer/vendor claim; no generalizable migration economics. |
| **Proxmox VE** | **HorizonIQ**, Sep 2025 | **>300 VMs** moved from VMware to Proxmox. [R4:S10] | Supplier-hosted reference; savings claim not independently audited. |
| **Proxmox VE** | **Artec**, Apr 2026 | Named manufacturing **IT infrastructure** transition from VMware to Proxmox. [R4:S11] | Does **not** certify any specific MES, PLC, SCADA or DCS application. |
| **Vates / XCP-ng** | **Virtual Computing**, Apr 2026 | **550 VMs**, about **20 hosts**, VMware to Vates in phased batches. [R4:S12] | Supplier-hosted customer implementation; guest and hardware conversion issues reported. |
| **Vates / XCP-ng** | **Fujifilm MicroChannel**, Mar 2026 | Named VMware-to-Vates transition. [R4:S17] | **IT services business**, not evidence of pharmaceutical manufacturing at FUJIFILM. |
| **VergeOS** | **Alinsco Insurance**, Jan 2026 | Named VMware/VxRail exit and hardware reuse. [R4:S13] | Supplier-reported zero-downtime outcome is not independently audited. |

### Conclusion — analyst synthesis

**Published named cases demonstrate real VMware-origin migrations for specific workloads, sometimes numbering hundreds or thousands of VMs.** They do not establish an industry migration rate, independently verified savings, equal operating outcomes or suitability for validated manufacturing applications.

## Facts — other platform deployments with different evidence scope

**Red Hat / Emirates NBD:** The customer case describes a large OpenShift Virtualization deployment/migration program involving approximately **9,000 VMs**, but the opened source **does not establish VMware as the source**; do not label it “9,000 VMware VMs replaced” or an independently reconciled completed count. [R4:S07; R5:S25]

**Microsoft / CDW:** A named customer reports **more than 800 nonproduction VMs** moved to Azure Local; the case does not show that all came from VMware. Microsoft separately documents VMware-to-Azure-Local migration functionality. Product migration capability and a customer's VMware-origin volume are different facts. [R4:S18; R5:S23–S24]

**HPE:** HPE's **>3,200-VM** engineering-laboratory example is **supplier self-deployment**, with limited original-PDF reopening in the reviewed run. It should not be called a verified independent customer conversion. [R4:S08b; R5:S26]

**Oracle, Canonical, Scale Computing:** The scoped original documentation demonstrates capabilities and migration approaches but does not provide sufficiently verified named VMware-exit completions for each supplier. **Absence of a substantiated example in this research is not proof no such customer exists.** [R4:S14–S16]

### Conclusion — analyst synthesis

**A sizeable destination deployment or documented conversion capability does not by itself establish that VMware was the source platform.** Emirates NBD, CDW and HPE must be kept separate from confirmed VMware-origin customer migrations.


---

# 7. OT Application Compatibility and Manufacturing Considerations

## Facts — application-manufacturer virtualization guidance

| Industrial application / release | Named virtual environments in inspected material | What leadership can conclude |
|---|---|---|
| **Siemens TIA Portal V21 — STEP 7 / WinCC** | VMware **ESXi 8.0+**, Workstation/Player 17+, Microsoft **Hyper-V Server 2019+**. [R5:OT01] | Product/release-specific requirements; not a certification of all KVM/Xen alternatives. |
| **Siemens WinCC Runtime Unified V21** | VMware and Hyper-V in product-specific installation guidance. [R5:OT02] | Specific tested combinations and networking constraints govern. |
| **Rockwell FactoryTalk Services Platform 6.60.00** | General vendor guidance names **VMware, Hyper-V, Nutanix**. [R5:OT03] | Rockwell expressly defers to product-specific documentation and support terms; no blanket AHV approval. |
| **Schneider EcoStruxure Control Expert V15.3** | VMware ESXi, Workstation 15.5.2, **Oracle VirtualBox 6.1**. [R5:OT04] | Historical tested environments; **VirtualBox is not Oracle Linux KVM/OLVM**. |
| **Schneider Data Center Expert virtual appliance** | ESXi 6.7+, Hyper-V on Windows Server 2019/2022 for specified DCE versions. [R5:OT05] | Infrastructure-management appliance, **not evidence of SCADA/control certification**. |
| **AVEVA System Platform / OMI** | Official community guide announcement covers **VMware vSphere and Hyper-V**. [R5:OT09] | Full detailed guide and exact release clauses were not inspected; no universal certification claim. |
| **Emerson DeltaV v15 FP3 virtual SZ** | VMware and Hyper-V for specified **simulation/training/virtual FAT** functions. [R5:OT10] | **Not** approval for all production DCS control nodes. |

### Conclusion — analyst synthesis

**OT suitability is determined by application product, version and deployment configuration.** Some inspected industrial materials explicitly support or discuss Hyper-V, but this does **not** automatically certify Azure Local or every OT workload. Rockwell's general Nutanix mention is not blanket AHV approval, and a generic KVM-capable VM does not confer manufacturer support or GxP qualification. These conclusions describe the documentation **inspected**, not universal exclusions.

**The key distinction:** The application publisher may name a particular Hyper-V release, but that does **not** automatically grant approved status to every Azure Local deployment. Similarly, generic KVM support does not establish manufacturer support for Red Hat OpenShift Virtualization, Proxmox, Oracle OLVM, HPE HVM or Canonical; nor does technical bootability establish a validated GxP state.

## Analyst recommendation — plant application acceptance requirements

Before an industrial or regulated workload is selected for migration, establish **in writing** its supported application/build, guest OS, hypervisor/version, host firmware and I/O devices; network/field topology, clock accuracy, backup/snapshot restrictions, availability and recovery design, qualified operating state, support entitlement, change-impact assessment and rollback/restore evidence. Obtain application-owner, infrastructure, security, OT and Quality agreement for the actual change.

For any application whose certification or qualification cannot be confirmed, the research supports **retaining the currently supported environment or seeking a formally governed exception**, not inferring safety from another customer's case study.


---

# 8. Cross-Industry Strategic Analysis

## Facts — basis of cross-industry analysis

| Evidence topic | Existing source-supported observation |
|---|---|
| **Broadcom** | Broadcom reports selected-cohort VCF purchases and software-segment financial performance, without a comparable total active VMware customer-count series. [R2:S01, S03] |
| **VMware-origin migrations** | Multiple supplier-hosted customer case studies describe specified VMware-to-alternative migrations. [R4:S04–S13] |
| **Source assurance** | The original registers distinguish opened publisher records, vendor-hosted customer claims, and indexed-only or inaccessible originals. [R3 Appendix A; R4 Appendix A; R5 Section 10] |
| **Biopharma** | Gilead, GSK, Roche and Novo Nordisk have documented **different kinds of infrastructure activity** with different evidence boundaries. [R1:S05–S11, S30] |

### Conclusions — analyst synthesis



**A. Commercial retention, production deployment and migration are independent states.** A VCF purchase can coexist with VMware workloads that have not yet been moved to the purchased platform, while an enterprise may migrate selected VMs and retain other contractual commitments. Broadcom purchasing penetration and vendor migration stories therefore are not contradictory. [R2:S01, S03; R4:S04–S13]

**B. The replacement unit changes the business case.** An application rehost, a 300-VM service-provider conversion, a multi-site manufacturing platform and a complete private-cloud operating model impose different network, storage, recovery, support and organizational obligations. Comparisons must align source architecture, destination architecture, implementation stage and business-criticality before borrowing reported outcomes. [R4:S04–S13; R5:OT01–OT10]

**C. A supplier announcement is usable evidence with defined limits.** A named customer quote or case can establish that the supplier publicly reports a specified customer activity. It does not independently validate scale, savings or regulatory suitability; indexed-only sources must retain additional access qualifications. Source provenance and source-access status are separate. [R3 Appendix A; R4 Appendix A; R5 Section 10]

**D. Peer biopharma infrastructure is workload-specific and selectively visible.** Gilead's AWS migration, GSK's site-level Azure Local, historical Roche simulation/VDI, Roche's separate on-premises AI hardware, and Novo Nordisk's preferred cloud relationship answer **different architecture questions**. They do not collectively reveal the undisclosed virtualization strategies of 19 enterprises. [R1:S05–S11, S30]

## Analyst strategic options — not observed peer decisions

| Strategic path | Potential rationale | Conditions that would change the decision |
|---|---|---|
| **Retain and optimize VMware** | Existing platform/support benefits, supported OT dependencies, migration friction or contract economics favor continuity | Verify real cost, current utilization, stack dependencies, renewal terms and technical lifecycle risk. |
| **Hybrid, targeted substitution** | Some workload groups can migrate while critical or uneconomic classes remain supported | Demonstrate migration/rollback, operational parity, supplier support, requalification needs and net economics by segment. |
| **Substantial VMware replacement** | Larger estate redesign may be economically/architecturally justified after a validated proof program | Requires comprehensive application support, platform-service parity, resilience, skills, transition financing and acceptable interruption risk. |

### Conclusion — analyst synthesis

**The public record supports examining segmented substitution without preselecting an outcome.** Retention, hybrid coexistence and substantial replacement should be compared against the specific enterprise estate. The research does not establish a general mandate to replace VMware or maintain it indefinitely.



---

# 9. Implications for Cloud Infrastructure Decision-Making

## Facts — established limits relevant to the decision

- Named VMware-source migrations are documented for specific workloads, but universal VMware Cloud Foundation parity and uniform migration economics are not established. [R4:S04–S13]
- Manufacturing and OT application vendors publish release- and configuration-specific support conditions; these do not disclose an individual enterprise's validated application estate. [R5:OT01–OT10]
- The reviewed Broadcom disclosures and market surveys do not provide a company-specific VM estate or a comparable global VMware customer-churn series. [R2:S01–S05; R6:S01–S09]

## Analyst decision framework — proposed, not an enterprise current-state claim

| Decision dimension | Necessary inputs | Suggested decision output |
|---|---|---|
| **Estate and contracts** | Actual ESXi/vSphere hosts, VMs, cores, versions, license entitlements, renewal terms, VCF features used | Verified baseline separating installed workloads from purchased licenses |
| **Workload segmentation** | Application owners; corporate, research/HPC, SAP, dev/test, site/OT and GxP classification | Explicit portable, restricted and exception populations |
| **Platform capability** | Networking/NSX dependencies, vSAN/storage, security, IAM, backup/DR, automation, monitoring | Fit-gap matrix for selected candidate platforms |
| **Migration feasibility** | Discovery, conversions, dependencies, downtime, restore, rollback, staging | Pilot evidence for named representative workload classes |
| **Manufacturing/OT assurance** | Exact OEM/ISV support letters, guest OS/hypervisor releases, site design and validation scope | Documented eligible applications and required qualification controls |
| **Economics and supplier risk** | Recurring support/license, new hardware/software, labor, dual-run, migration/requalification, recovery, vendor durability | Comparable **3–5-year** TCO/risk scenarios; no unsupported public savings assumptions |

### Conclusion — analyst synthesis

**Authorize an evidence-backed evaluation of selected infrastructure alternatives without committing to a replacement outcome.** Assess which VM classes are portable, whether alternate platforms meet application and operating requirements, and whether change is economical after transition costs. **Infrastructure substitution is a workload and operating-model decision—not simply a supplier decision.**

## Focused evaluation sequence

1. **Establish a workload and dependency baseline** rather than making the decision from aggregate market metrics.
2. **Validate an enterprise shortlist** against the actual estate. The existing research identifies Nutanix AHV, Microsoft Hyper-V/Azure Local and Red Hat OpenShift Virtualization as substantial enterprise alternatives; HPE may be relevant for coexistence. Proxmox, Vates, Oracle, Canonical, Scale and VergeOS may suit more targeted requirements. This is a **research-led starting point**, not a ranked supplier selection. [R4 Section 3; R5 Section 4]
3. **Protect regulated OT applications through a separate certification and qualification gate** before selecting production workloads for migration.
4. **Compare maintain/optimize, hybrid and substantial replacement scenarios** on identical workload baselines, lifecycle periods, resilience requirements and adverse assumptions.
5. **Decide by evidence and acceptance criteria**, with architecture, infrastructure operations, applications, cybersecurity, manufacturing OT, Quality and procurement participating where relevant.

## Decision Questions Remaining

- Which services of the existing VMware/VCF stack are actually used, and what replacement scope is under consideration?
- Which workloads have written manufacturer support for a specific destination, with acceptable validation and downtime conditions?
- What does the 3–5-year economics comparison show after migration labor, dual running, retraining, resilience and requalification?
- Which named customer references most closely match the enterprise's workload, scale and service model?
- What independent technical and operating evidence would overturn the preferred option?



---

# 10. Sources, Evidence Registers and Research Appendices

## Provenance and source-key interpretation

This report is **editorially derived** from the 29 October 2026 combined Markdown baseline; supplemental dated external research for Section 5 is recorded separately in Annex E. The original six report source registers below are preserved from that baseline. Where registers contain “opened” or “checked,” those verbs refer **only to the historical research run** described in the source document.

- **R1** — Peer Biopharma — VMware Footprint and Cloud Infrastructure: source IDs Sxx, Xxx, claim IDs Cxxx.
- **R2** — Broadcom/VMware Customer Base: source IDs Sxx; SEC, executive-transcript and named-customer distinctions.
- **R3** — Biopharma Customer Base Triangulation: source IDs Exx, Rxx, Xxx; historical and adjacent cases.
- **R4** — VMware Platform Competition: source IDs Sxx, Mxx, OTxx; supplier customer cases and ten-platform comparisons.
- **R5** — OT Application Compatibility and Customer Migrations: source IDs Sxx, OTxx; product/release-level documentation.
- **R6** — 2026 Virtualization Market Position: source IDs Sxx, Cxx; survey and access limitations.

**Source IDs are local to each R-number.** In the following original ledgers, an unprefixed ID belongs to the immediately preceding R-section heading. Some original reports classify source access differently depending on whether the original was successfully reopened during that specific investigation. **No later editorial “verification upgrade” is implied.**

## Material limitations retained

**Primary-platform 2026 shares:** S&P 451 main blog and detailed survey tables could not be fully reopened; the approximately 43% VMware figure remains attributed to publisher-indexed material, not a newly validated worldwide census. [R6:S01–S02]

**Named Broadcom October customers:** NTT DOCOMO and FedEx official releases were indexed, but full reopening was unsuccessful; retain this qualification when reproducing the eight-customer table. [R2:S16–S17]

**Biopharma visibility:** Historical VMware footprints, cloud use, recruitment signals and explicit VMware migrations represent distinct evidence categories. The 19-company research cannot determine peer-wide churn, 2026 installed VM counts or contract costs. [R1 Appendix E; R3 Appendix C]

**Competitor references:** Vendor-hosted customer cases, supplier internal labs and product migration capability are not interchangeable; 2026 Nutanix/Proxmox installed-base denominators and some original link opens remain limited. [R4 Appendix A; R5 Section 10]

**OT:** Only exact industrial application/version support and inspected guidance can be cited. Public vendor catalogs do not provide a universal cross-product compatibility matrix, and inaccessible guides remain limited. [R5:OT01–OT10]

**Retention rule:** The source Markdown and all six original research files remain the authoritative long-form research trail. The annexes preserve the comparative dossiers, case details, named sources, source-status records and material claim crosswalks. This report does **not** silently treat missing public evidence as a negative finding about a company.

---


# Research Annexes — Supporting Detail and Audit Trail

> The annexes are intended for analysts, architects and reviewers. They contain the original research's technical details, source ledgers and claim-level qualifications. Historical source-access notes are retained for traceability; they are not current verification claims.

## Annex A — Nineteen-company factual dossiers (original Report 1)

The following original dossiers preserve the nuanced company-by-company source and scope distinctions behind Section 5.


### 5. Company factual dossiers

Each dossier records the latest fact that survived the accessible-source check, not a guessed enterprise state.

#### 5.1 Eli Lilly and Company
**VMware footprint/response:** Not established. The earlier Workday vacancy R-107936 included references to ESX/VMware in search indexing, but direct original-page retrieval failed [X01]. It is **excluded** as an accessible confirmed-footprint source.  
**Other infrastructure:** Uptimal describes a Lilly AWS data automation implementation using AWS Lambda and existing AWS infrastructure; this is partner-authored and limited to business intelligence pipelines [S23].  
**What cannot be concluded:** Hypervisor footprint, Azure/VMware coexistence, 2026 VCF renewal, use of AWS as primary cloud, or VMware migration.

#### 5.2 Johnson & Johnson
**VMware footprint/response:** Not established in inspected public material.  
**Other infrastructure:** J&J's company release, dated before the acquisition, identifies Microsoft's cloud/Azure as preferred for **MedTech digital surgery**, not the pharma division or corporate enterprise [S14].  
**Financial source:** J&J's FY2025 results were opened [S04]; the inspected materials did not provide a VMware customer-estate record.  
**Limitation:** The business-unit and historical timing preclude any claim about a 2026 global J&J VMware strategy.

#### 5.3 AbbVie
**VMware evidence:** An AbbVie-authored expired job listing states responsibility for VMware/Windows data-center operations, platform security, problem resolution and VMware lifecycle management [S07]. It mentions servers in cloud, operational technology and data-center environments, but does not furnish deployment counts.  
**Post-Broadcom response:** No renewal, VCF rollout, reduction or migration verified.  
**Evidence nature:** C1, *expired recruitment requirement*, not audited production evidence.  
**Limitations:** The listing is accessible but expired and has no sufficiently established posting/event date to treat it as proof of current installations.

#### 5.4 Roche Holding
**Historical VMware footprint:** VMware's 3 August 2022 Roche Diagnostics customer case describes a training/simulation estate using ESXi, vCenter, Horizon, Workspace ONE Access and VMware Cloud on AWS [S30]. It reports >15,000 VM **consumptions per month**, a utilization metric rather than a current or concurrent VM count. This is **historical vendor-hosted customer evidence**, not a 2026 Broadcom contract or renewal.  
**Post-acquisition VMware response:** No qualifying response established.  
**Infrastructure:** Roche's 16 March 2026 company release says it added **2,176 on-premises NVIDIA Blackwell GPUs** across the US and Europe; combined on-premises and cloud capacity exceeds **3,500 Blackwell GPUs** [S09]. Scope: AI compute across Roche operations.  
**Interpretation:** Demonstrates willingness to expand privately operated high-performance infrastructure for particular workloads. **Not** evidence of VCF, AHV or general VM hosting.  
**Limits:** No VMware licensing or hypervisor architecture is disclosed.

#### 5.5 Novartis
**VMware:** No verifiable post-acquisition decision or estate size.  
**Infrastructure:** AWS's named Novartis case documents patient-service workloads and cloud platform services, with a 2024 program roadmap [S15]. A supplier description of AWS+Azure analytics exists, but the direct source failed opening in this run and is not elevated [X04].  
**Limits:** AWS use cannot be generalized to the entire enterprise or interpreted as VMware migration.

#### 5.6 AstraZeneca
**VMware:** Not established.  
**Infrastructure:** AWS's named customer hub documents genomics research and use of AWS for critical activities, while a separate AWS case describes EC2/EKS compute supporting augmented drug design [S16, S25].  
**Limits:** Case-study publication date and deployment date are not uniformly provided. Neither explicitly states VMware source infrastructure.

#### 5.7 Amgen
**VMware:** No customer-verified migration or 2026 footprint established. A previously referenced Cognizant VMware-to-AWS business-case illustration is **not** evidence of an executed migration [X05].  
**Infrastructure:** AWS case describes Amgen's genomics workflows, including an initial on-premises-to-AWS transition dating to 2019 [S17]. AWS's pharma-manufacturing directory refers to Amgen SAP-on-AWS migration [S24] but is insufficient for detailed VMware attribution.  
**Financial record:** 2025 Form 10-K reports capitalized cloud-computing-arrangement implementation costs of **$272m at 2025 year-end vs $227m at 2024 year-end**; these are **not VMware costs** [S03].  
**Limits:** No verified VCF contract, hypervisor decision, or executed 2,269-VM migration.

#### 5.8 Gilead Sciences
**VMware:** AWS's 2024 re:Invent **MAM214** published session description identifies migration of **more than 2,000** servers from on-premises VMware to native AWS services and retirement of **more than 1,400** systems [S05]. AWS's 18 Feb 2025 session recap repeats these figures [S06].  
**Response/stage:** **Migrate/replace within disclosed workload scope**; AWS reports executed migration.  
**Evidence caveat:** Both accessible documents are AWS-authored session descriptions. They corroborate the public AWS reporting but are **not independent customer-authored proof**. The inaccessible Gilead PDF was **not** treated as a validated direct link, and the more exact 2,200/340 figures were **not used**.  
**Limits:** No full VMware exit, residual host count, specific VCF license reduction, GxP workload transition or causal exclusivity of Broadcom established.

#### 5.9 Novo Nordisk
**VMware:** No disclosed post-acquisition strategy.  
**Infrastructure:** In its **10 Aug 2026** corporate release, Novo Nordisk explicitly designates AWS its **preferred cloud provider** and strategic AI partner, and describes a London co-innovation hub [S10]. AWS also describes manufacturing data/IoT examples [S12].  
**Stage:** Commercial/strategic partnership and documented application initiatives.  
**Limits:** Preferred does not mean exclusive; no VMware migration evidence.

#### 5.10 Pfizer
**VMware:** Not established.  
**Infrastructure:** AWS's PACT case records 14 projects/prototypes spanning research and manufacturing analytics, dating from a collaboration begun in 2021. Its 16,000-hour time-savings and 55% infrastructure-cost figures are presented partly as **estimates**, not audited realized company-wide effects [S18].  
**Limits:** Neither PACT nor Azure/AWS usage establishes VMware retention/exit.

#### 5.11 Vertex Pharmaceuticals
**VMware:** No qualifying footprint/response.  
**Infrastructure:** AWS describes cryo-EM processing/storage shifted from on-premises HPC beginning around 2022, with AWS EC2/ParallelCluster/FSx, plus a separately described AWS Step Functions serverless image-processing redesign in April 2023 [S19, S20].  
**Stage:** Named technical implementation, **pre-acquisition**.  
**Limits:** Previous on-premises HPC systems were not identified as VMware; no Broadcom-era inference permitted.

#### 5.12 Bristol Myers Squibb
**VMware:** Not established.  
**Infrastructure:** AWS/Accenture's 2021 case documents BMS's SAP ECC-to-S/4HANA conversion on AWS across **44 markets, 12 manufacturing sites and 13,000 users** [S21]; a BMS cloud engineering guest-authored blog in 2022 describes AWS account provisioning automation [S22].  
**Stage:** Historical implemented enterprise and cloud platform capabilities.  
**Limits:** Pre-2023 program cannot be dated as a reaction to Broadcom or as VMware displacement.

#### 5.13 GSK
**VMware:** No verified renewal/exit.  
**Other virtualization/hybrid:** Microsoft explicitly identifies GSK as an Azure Local customer enabling edge processing and AI inference across vaccine and medicine manufacturing and R&D laboratories; the article also references participation in Microsoft Ignite [S11].  
**Stage:** Microsoft-reported customer use (V1); conference session itself was not independently reviewed.  
**Limits:** No public proof that Azure Local displaced a specific VMware site, VM count or VCF agreement.

#### 5.14 Sanofi
**VMware:** No documented decision.  
**Infrastructure:** AWS's Sanofi Digital Accelerator customer case describes AWS-hosted serverless, ML and data capabilities used across clinical, R&D, commercial and manufacturing-related digital solutions [S26]. The program began in **2022**.  
**Limits:** Application-platform evidence, not enterprise virtualization or hypervisor replacement. Customer quotations appear within a vendor-hosted case.

#### 5.15 Regeneron Pharmaceuticals
**VMware:** No directly verified post-acquisition strategy or footprint; older indexed job references are not counted.  
**Infrastructure:** AWS describes Regeneron Genetics Center using EC2/S3 for large-scale genomics; outcomes and data refer predominantly to **2021** [S27]. A **2023** AWS post co-authored with a Regeneron IT architect documents platform automation with AWS Proton [S28].  
**Limits:** Strong historical AWS platform proof, not VMware or Broadcom response.

#### 5.16 Moderna
**VMware:** VMware's historical life-sciences brochure contains a Moderna executive promotional reference, but lacks an identified ESXi/VCF deployment, virtual-machine quantity, or post-acquisition renewal [S31]. It is a historical relationship indicator, **not a certified VMware footprint**.  
**Infrastructure:** AWS's accessible Moderna customer hub describes cloud services for data and manufacturing, with examples from **2018, 2022 and 2023** [S13]. AWS's manufacturing page describes SAP S/4HANA in a GxP-validated AWS environment for a Moderna facility [S12].  
**Other verified-scope cloud evidence:** A Google Cloud Moderna customer story documents Looker and Amazon Redshift use in a data architecture [S32]; this does **not** establish a mixed hypervisor estate.  
**Limits:** Historic deployment details and validation are **supplier-published**; do not extrapolate to the whole manufacturing estate or to 2026 VMware licensing.

#### 5.17 Takeda Pharmaceutical
**VMware:** Not established.  
**Infrastructure:** Takeda's original **13 Oct 2020** announcement defines an AWS/Accenture five-year strategic agreement and future cloud-first transition. The **80% application-to-cloud figure is a target**, *not* completed migration verified by that source [S29].  
**Limits:** Additional post-2023 completion numbers cannot be accepted without a subsequently inspected dated record; no VMware connection proven.

#### 5.18 argenx
**VMware:** Not publicly established from qualifying inspected material.  
**Cloud infrastructure:** No qualifying original infrastructure-provider or virtualization deployment identified in this research run.  
**Limit:** Do not substitute general AI, data-science, procurement or corporate investor reports for platform-specific evidence.

#### 5.19 Teva Pharmaceutical
**VMware:** Search results revealed a Teva-attributed LinkedIn vacancy mentioning VMware Cloud Foundation, vSphere/vSAN/NSX, Nutanix AHV and Azure. **Direct opening failed** [X02]; it remains an **unverified recruitment lead**.  
**Post-Broadcom response:** Not established.  
**Cloud/hypervisor:** No verified company-authored current infrastructure architecture or deployment record in the opened evidence.  
**Limits:** Do not call Teva a confirmed mixed VMware/Nutanix production estate from this lead.

---


## Annex B — Additional biopharma case archetypes (original Report 3)

These case narratives distinguish a historical VMware relationship, a named migration, hybrid-edge implementations and cloud/data workload examples.


#### 4. Detailed evidence-led company archetypes

##### 4.1 Roche Diagnostics: a real historical VMware estate—and the limits of the record

**Customer and platform:** VMware's original 3 August 2022 case names Roche Diagnostics, its platform owner, ESXi/vCenter/Horizon/Workspace ONE Access, an on-premises training simulation system, and VMware Cloud on AWS expansion in the United States and Europe [E01]. The narrative reports more than 6,000 users on the on-premises system, over 15,000 virtual-machine **consumptions per month**, and three VMware Cloud on AWS hosts at each of two documented locations at that time. These are *2022 case-study figures*, not a 2026 live-estate measurement.

**Why significant:** Specialized training environments running multiple versions of diagnostics software represent a concrete example of virtualization serving biopharma-adjacent product/customer support with persistence, legacy-OS and regional considerations—not just general ERP hosting.

**2026 adjacent change:** Roche itself announced additional on-premises NVIDIA GPU capacity in March 2026 [E05]. The announcement does not identify a hypervisor or say those systems replaced VMware. A Roche on-premises GPU deployment and a historical VMware VDI estate are **not** proof of a unified modern Roche infrastructure decision.

**Executive applicability:** Historical example of a specialized/long-lived use case that may demand different migration logic from standard application servers. Do not cite the 15,000 monthly instances as 15,000 simultaneously deployed VMs or Roche-wide production VM footprint.

##### 4.2 Gilead: observed source-to-destination transformation

AWS's MAM214 session guide and playlist were opened and inspected [E03]. They describe migration from **on-premises VMware to AWS native services**, with **over 2,000 servers** migrated and **over 1,400 systems retired**. This is concrete displacement inside the identified migration program.

**Limitations:** The original slide PDF previously supplied returned Access Denied and was not validated as a live accessible primary document here. Therefore the more exact 2,200-server and 340-application figures are not adopted in this edition. A migrated workload may be retained in a new form, while a retired system may be part of the program: do not add the two numbers. The record does not prove that Gilead's remaining VMware footprint is zero.

##### 4.3 GSK: an alternative on-premises/hybrid execution pattern

Microsoft explicitly names GSK as using **Azure Local** for real-time data processing and AI inference spanning vaccine/medicine manufacturing and R&D laboratories [E04]. This is a meaningful implementation signal for pharmaceutical edge/site compute. But the source does not establish the virtual-machine count, physical site count, GxP validation scope, VMware contract, or whether Azure Local displaced VMware.

##### 4.4 Novo Nordisk: declared preferred provider coexists with other real cloud workloads

Novo Nordisk's 10 August 2026 company release calls AWS the **preferred cloud provider and strategic AI partner** [E06]. A Microsoft May 2026 customer record details an **Azure-hosted clinical-research analytics agent** and its FounData setting [E07]. An October 2024 Microsoft case details Azure AI/data infrastructure [E22]. Together, these records affirm *multiple platforms used for distinct business purposes*. They do not describe two competing hypervisors, nor make AWS the sole hosting provider.

##### 4.5 Moderna: documented multicloud data, not validated VMware VM platform

Google Cloud's named Moderna case describes Looker operating with data centered in **Amazon Redshift**, alongside quotations from a Moderna technology executive [E08]. VMware's historic life-sciences promotional brief quotes Moderna's CEO about VMware's usefulness [E02], but **does not identify the VMware product, server clusters, quantities or date of a VM deployment**. The two sources are not evidence of a post-2023 VMware retention or exit decision.

---

#### 5. VMware's published customer base: what can be reconstructed

##### 5.1 Is there a complete, public Broadcom list of every VMware customer?

**No comprehensive open, dated, customer-by-customer Broadcom installed-base list was identified.** Public Broadcom evidence comprises selectively named references, investor-reported **aggregate** sales/conversion statistics and hosted customer stories.

- Broadcom's official February 2026 VCF publication states **more than 90% of its 10,000 largest VMware customers purchased VCF**; it names Audi, ING, Lloyds and Walmart as examples [E09]. This is commercial-purchasing penetration **within a defined selected cohort**, not VCF deployment, all-customer retention, or a list of customer identities.
- Broadcom's FY2025 10-K reports broader **infrastructure-software segment** results and describes VCF and revenue recognition drivers; these results encompass other infrastructure-software offerings and do not name 19-company VCF purchases [E10].
- VMware's older customer pages, including Roche Diagnostics, can establish **past named customer relationships**. They do not prove survival, renewal or a 2026 installed base.

##### 5.2 Commercial customer directories

[Apps Run The World — VMware vSphere customer directory](https://www.appsruntheworld.com/customers-database/products/view/vmware-vsphere) and its [VCF customer directory](https://www.appsruntheworld.com/customers-database/products/view/vmware-cloud-foundation) were **opened** [E14–E15]. They explicitly describe combining public and proprietary research, with partial public previews and paid filters. Their preview did **not** furnish attributable records for the 19 named firms in this check. Thus they are **research leads, not independent proof** of a dated 2026 installation at one of the 19.

**Public record triangulation standard:** A directory hit would require an underlying vendor case, customer statement, procurement entry or technical record proving scope and date before being promoted to a verified footprint claim.

##### 5.3 Other directly and indirectly observable footprints

| Technique | What it could establish | How it was treated |
|---|---|---|
| Original VMware case / conference with named customer engineer | Historically deployed platform and scope | **Strongest baseline**; Roche [E01] |
| AWS migration conference with VMware explicitly named as source | Migration progress and identified source-to-destination estate | **Strongest change evidence**; Gilead [E03] |
| Red Hat, Nutanix, Microsoft customer cases | Alternative platform, workload and sometimes replacement | GSK Azure Local qualifies; Nutanix additional peers below, not proof for named 19 |
| Public annual reports / earnings | Supplier revenue, market commentary and occasionally exceptional contract items | Broadcom aggregate only; no 19-company footprint count |
| Company vacancy / engineering skills | Relevant operating capability/possible estate | AbbVie categorized as **workforce signal**; Lilly/Teva broken originals excluded |
| Named technographic database | Customer discovery leads | Directory preview insufficient without back-tracing original record |
| Public RFP, license procurement, contract, legal docket | A specific commercial action, not deployment | No attributable 19-company VMware renewal found in opened records |
| Partner SOW/funding examples | Potential project scopes and estimates | Amgen funding illustration **not execution** |
| Public DNS, Internet scans or exposed VM management endpoints | At most service exposure or technology hints, often ambiguous | **Not used**: unreliable for private estate counts and unnecessary security/privacy exposure |
| Data-center exits, application migration and cloud partnerships | Narrow workload/site evolution | Useful corroboration, **not automatically VMware churn** |

---

#### 6. Competitor and adjacent life-sciences evidence — outside the 19-company decision universe

The following are **sector comparators**, not a substitute for evidence about the specified 19. They demonstrate the types of public implementation proof available in the wider market.

| Named organization | Original source and dated evidence | What it establishes | Not established |
|---|---|---|---|
| **IHMA**, clinical microbiology laboratory | Nutanix named customer case with directly attributable IT director quotations [E12] | VMware predecessor, AHV/Nutanix adoption; a named lab modernization reference. Customer describes support concerns beginning fall 2023 and fourfold license renewal pressure | Causation solely from Broadcom; enterprise-wide biopharma prevalence |
| **Astellas Pharma** | Microsoft customer story, 3 Sept 2025 [E16] | Azure migration involving a **500-terabyte** share and closure of **six datacenters** in a reported six-month effort | Number of VMware VMs retired or hypervisor switch |
| **Himalaya Wellness** | Nutanix customer case directly attributed to IT GM [E13] | Nutanix AHV HCI deployment in a pharmaceutical/wellness business | VMware exit and 19-company peer status |
| **GC Biopharma** | Nutanix named case, July 2026; indexed full source but **live direct retrieval failed** [R03] | Vendor-reported Nutanix NKP at Ochang MES and platform adoption since 2020 | A Broadcom-triggered VMware replacement; counts from inaccessible page should not be promoted as opened |
| **LSEG (non-pharma regulated comparator)** | LSEG company release, 19 May 2026 [E17] | New **five-year VCF agreement** coexisting with other clouds; demonstrates a named *retain/expand* decision | Evidence of what a biopharma company decided |

**Comparative insight (not representativeness):** Real enterprise case studies reveal **different modernization units**: whole data centers (Astellas), VMware-origin server estates (Gilead), life-sciences lab virtualization (IHMA), industrial/edge compute (GSK), and specialized VMware VDI (historical Roche). Evaluating only by logo-level “stay/move” masks these distinctions.

---

#### 7. Independent and competitor market evidence


## Annex C — Competitor technical dossiers and OT compatibility catalogs (original Report 5)

Detailed product and integration notes are retained to support vendor assessment; they are not a ranking or proof of application certification.


#### 4. Detailed competitive dossiers

##### 4.1 Nutanix Cloud Infrastructure / AHV

**Documented:** Nutanix's FY2026 10-K reports over 32,000 end customers at July 31, 2026, subject to its definition that an organization can count more than once for subsidiaries/divisions. Its customer story says MSIG Asia, motivated partly by VMware licensing costs, transitioned approximately 2,000 VMs to Nutanix AHV by April 2025. [S03, S06]

**Assessment:** Among the more credible enterprise replacements for a substantial vSphere/vSAN estate, especially where an HCI architecture and unified operations model are desired. The customer example is evidence of production migration, but not a global success rate or savings guarantee. Verify applications, storage performance, GPU needs, network security, DR tooling, end-to-end TCO and contract terms.

**Key trade-off:** Replacing VMware vendor concentration with a new tightly integrated platform can reduce some operational layers while increasing dependency on Nutanix's software and compatible hardware ecosystem.

##### 4.2 Microsoft Hyper-V and Azure Local

**Documented:** Microsoft documents live migration and clustering for Hyper-V and an Azure Migrate process for VMware VMs to Azure Local. Its release notes state VMware-to-Azure-Local migration became generally available in October 2025. Azure Local migration requires coordinated source/target appliances; Microsoft documents third-party migration options as well. [S07, S08]

**Assessment:** Highly relevant for Windows-oriented corporate application estates, regional datacenters and hybrid/cloud-governed environments. Needs careful distinction between standalone Hyper-V licensing and Azure Local subscription/service requirements.

**Key trade-off:** Familiarity for Microsoft workloads and tools does not establish free migration, one-for-one operational equivalence, or support for all regulated applications and devices.

##### 4.3 Red Hat OpenShift Virtualization

**Documented:** Red Hat states OpenShift Virtualization runs VM workloads alongside containers and supplies a migration toolkit that can migrate from VMware vSphere, RHV and OpenStack. [S09]

**Assessment:** Particularly viable when the target operating model already centers on OpenShift/Kubernetes and the organization wants to converge VM and container operations. A first phase could include Linux business applications and selected non-production workloads.

**Key trade-off:** Organizations without OpenShift expertise may trade VMware administration for a substantially new platform operations model. Backup, storage, networking and specialized application compatibility cannot be assumed.

##### 4.4 HPE Morpheus VM Essentials / HVM

**Documented:** HPE's technical QuickSpecs describe HVM KVM, HA, live migration, external storage and a unified manager for HVM and VMware; product documentation describes bulk migration from vCenter to HVM clusters. [S10]

**Assessment:** A useful migration bridge where organizations need a gradual replacement or a mixed-hypervisor operational model rather than a one-time cutover. It may be especially relevant where HPE infrastructure, support and procurement relationships already exist.

**Key trade-off:** The offering should be tested as the particular **VM Essentials** SKU, not confused with higher-tier Morpheus capabilities or with older Morpheus cloud-management customer references. Validate support for NSX-type controls, DR and desired vSAN replacement.

##### 4.5 Proxmox Virtual Environment

**Documented:** Official product documentation details KVM, LXC, clustered HA, live migration, software-defined networking, Ceph storage, REST API and Proxmox Backup Server. Its September 2026 announcement states more than 2.3 million active Proxmox VE servers and 24/7 vendor-direct enterprise support effective October 19, 2026; the announcement was discovered on the official site but **could not be reopened directly** in the research session. [S11, S12]

**Assessment:** A technically serious alternative, particularly for Linux-capable teams, research compute, development environments and defined enterprise clusters. It cannot be dismissed simply because it is open source. Nevertheless, deployment count is not enterprise penetration, and regulated vendors may support only nominated virtualization platforms.

**Key trade-off:** Lower software licensing exposure may be offset by greater integration, staffing, support and specialized certification burden.

##### 4.6 Oracle Linux Virtualization Manager

**Documented:** Oracle documents an Oracle Linux KVM/oVirt-based management stack with host/VM management, storage/network domains, cluster HA and live migration. Oracle's lifecycle pages identify version 4.5 on Oracle Linux 9 as released August 2026. [S13]

**Assessment:** Relevant to Oracle and Linux application estates when vendor support, processor licensing and Linux platform alignment are material. It should not be assumed that KVM automatically satisfies every Oracle application certification or licensing requirement; these require exact contractual and ISV validation.

**Key trade-off:** More modular than VMware VCF, but requires integration of additional cloud-operations, DR and networking functions.

##### 4.7 Canonical MicroCloud / OpenStack

**Documented:** Canonical's Tennessee Tech case reports a 10-node MicroCloud environment and approximately 1,700 production VMs rebuilt/migrated in under four weeks. Canonical announced new MicroCloud and LXD LTS releases in October 2026. [S16, S19]

**Assessment:** Credible for sovereign, campus/research and infrastructure automation scenarios where open systems and cloud primitives are priorities. Distinguish MicroCloud's lightweight cluster approach from full OpenStack's infrastructure-service complexity.

**Key trade-off:** The organization assumes architecture and integration responsibilities that may be bundled or productized in VMware/Nutanix, unless a managed Canonical deployment is contracted.

##### 4.8 Scale Computing Platform / HyperCore

**Documented:** Scale Computing documents a migration product supporting VMware, Hyper-V and others. Its published customer examples and awards demonstrate commercial use for distributed sites, but no comparable audited global installed base was verified. [S17]

**Assessment:** A credible evaluation option for distributed manufacturing and remote sites with limited on-site IT staff. Generalizing edge deployments to an entire global datacenter estate would overstate the evidence.

**Key trade-off:** Integrated simplicity may constrain specialized hardware, network overlays, scale-out architecture and some enterprise tooling choices.

##### 4.9 Vates VMS / XCP-ng

**Documented:** Vates reports Virtual Computing migrated 550 VMware VMs to its platform, with attributable testimony from the CTO. FUJIFILM MicroChannel also describes replacing VMware with Vates VMS. Both sources were opened; they are vendor-hosted customer statements, not third-party audits. [S14, S18]

**Assessment:** A credible commercially supported open-source alternative for defined virtualization estates and service providers, including cases with hundreds of VMs. Enterprise teams should test support responsiveness, large-disks, backup compatibility, guest drivers and multi-site DR.

**Key trade-off:** More flexibility may require assembling an ecosystem that VMware customers obtain in integrated product/support packages.

##### 4.10 VergeOS

**Documented:** VergeIO's January 2026 press release quotes Alinsco Insurance's CIO and says Alinsco completed migration from VMware on VxRail to VergeOS. Named customer stories include other migrations, but disclosures remain vendor-selected. [S15]

**Assessment:** Relevant where replacing separate hypervisor, SAN/storage and networking products in one project could simplify the operating model. Particularly worth exploring for well-bounded private-cloud or service-provider requirements.

**Key trade-off:** Smaller supplier scale and tighter all-in-one integration increase the importance of financial durability, interop, exit portability, supported guest application lists and independent proof of recoverability.

---

### Original Report 5 — OT application-vendor evidence and compatibility catalogs

#### 6A. Published OT and industrial-software virtualization support: what is actually available

**Answer:** Yes, industrial software publishers provide **product- and version-specific** virtualization support lists and compatibility documents. **No** verified cross-vendor universal “OT applications certified on all ten hypervisors” list was found in the original sources reviewed. A competitor claiming to host Windows/Linux guests does **not** imply a named industrial application vendor will support it.

##### 6A.1 Application-vendor originals — concrete evidence (not an inferred compatibility matrix)

| OT / industrial software and version | Explicitly named environments | What the original source establishes | Opened supporting source |
|---|---|---|---|
| **Siemens SIMATIC STEP 7 + WinCC, TIA Portal V21** | **VMware ESXi 8.0+**; VMware Workstation 17+ and Player 17+; **Microsoft Hyper-V Server 2019+** | Siemens lists installation-capable virtual platforms, with detailed host/guest OS table. Does not name AHV, Proxmox, OpenShift Virtualization, HPE HVM, Oracle KVM, Scale, XCP-ng, VergeOS or Canonical. | [Siemens TIA Portal V21 system requirements, OT01](https://docs.tia.siemens.cloud/r/en-us/v21/installation/system-requirements-for-installation/general-software-and-hardware-requirements) (opened, section “Supported virtualization platforms”; Nov 2025) |
| **Siemens SIMATIC WinCC Runtime Unified, TIA Portal V21** | VMware ESXi (specified tested baseline), VMware Workstation/Player; Microsoft Hyper-V Server 2019+ | Product-specific tested configurations and separation of terminal/PLC networking. This is **not** blanket certification of all WinCC family versions. | [Siemens WinCC Runtime Unified installation, OT02](https://docs.tia.siemens.cloud/r/en-us/v21/installation/system-requirements-for-installation/product-specific-special-characteristics/installation-of-wincc-runtime-unified) (opened, “Virtualization”) |
| **Rockwell FactoryTalk Services Platform 6.60.00** | **VMware, Hyper-V, Nutanix** named in Rockwell's general virtualization support statement | Rockwell explicitly says exact product documentation/service agreements prevail; **VMware used in its internal testbed; Hyper-V in training**. “Nutanix” is not an unconditional certification of AHV for every FactoryTalk product/version. | [Rockwell FTSP installation guide, OT03](https://literature.rockwellautomation.com/idc/groups/literature/documents/in/ftsp-in001_-en-p.pdf), **PDF physically opened and page 9 (zero-index 8) visually inspected**; Sep 2025 |
| **Schneider Electric EcoStruxure Control Expert V15.3** | VMware ESXi; VMware Workstation 15.5.2; Oracle **VirtualBox** 6.1 | Vendor lists *successfully tested* environments. **VirtualBox ≠ Oracle Linux KVM/OLVM.** | [Schneider FAQ000255707, OT04](https://www.se.com/us/en/faqs/FAQ000255707/) (opened, “Resolution”; historical 2023 product/version) |
| **Schneider Electric Data Center Expert virtual appliance** | VMware ESXi 6.7+; on-prem Hyper-V on Windows Server 2019/2022 in DCE 8.1.1+ | Explicit support boundary: other virtual environments **may function but are not tested/supported**. This is infrastructure management, **not process-control SCADA**. | [Schneider FA358121, OT05](https://www.se.com/us/en/faqs/FA358121/) (opened, last modified Apr 22 2026) |
| **AVEVA System Platform / OMI virtualization guidance** | **VMware vSphere** and **Microsoft Hyper-V** covered by the updated vendor virtualization guide | AVEVA's *official community administrator* announced a guide covering these platforms, HA and optimized resource allocation; the announcement is accessible. The guide itself is a distinct source and needs its version-specific provisions checked before claiming certification of System Platform, Historian, InTouch or Plant SCADA on a given release. | [AVEVA official community guide announcement, OT09](https://community.aveva.com/heroes-hq/f/announcements-news/83908/system-platform-virtualization-guide-is-here) (**opened**). |
| **Emerson DeltaV v15 Feature Pack 3 — virtual SZ simulation** | **VMware** and **Hyper-V** in documented simulation/training/virtual FAT context | Emerson states Modbus functionality for virtual SZ controllers in VMware and Hyper-V environments. This is **simulation/operator training and virtual FAT**, not a certification to run all production DeltaV DCS control nodes on either hypervisor or other competitors. | [Emerson official DeltaV v15 FP3 page, OT10](https://www.emerson.com/en/automation-systems/deltav/deltav-v15/deltav-v15-fp3) (**opened**). |
| **Siemens Desigo CC (building automation)** | VMware ESXi, Microsoft Hyper-V, Stratus everRun Enterprise | Public indexed help lists supported systems and constraints such as VM clock and snapshot handling. **A direct reopen failed**, so the help article is an **access-limited lead**, not fully validated in this audit. | [Siemens Desigo CC help, OT06](https://mybuilding.siemens.com/d036861342594/help/engineeringhelp/en-us/23579166475.html) (indexed; direct open failed) |

**Interpretation for manufacturing and regulated operations:** In this inspected set, **Microsoft Hyper-V has explicit documented support or vendor guidance in multiple Siemens/Schneider/AVEVA product lines and Rockwell's FactoryTalk guidance**, plus specific Emerson DeltaV simulation functions. Nutanix is expressly mentioned in Rockwell's general guide, but other products require exact vendor confirmation. Lack of a product on a published list is **not proof it cannot run**; it is evidence that this documentation does **not establish vendor support**.

##### 6A.2 Published compatibility catalogs from the ten competitor platforms

| Competitor | Catalog or compatibility documentation located | Does this prove Siemens/Rockwell/AVEVA/Emerson OT support? | Correct diligence action |
|---|---|---|---|
| Nutanix AHV | Nutanix product and ecosystem/reference material; Rockwell OT03 names **Nutanix** in its general support guidance | **Only product/version-specific confirmation can establish support.** Do not promote the generic Rockwell wording to unconditional AHV approval. | Ask Rockwell and each OT ISV for an explicit hypervisor/version/guest matrix for each product. |
| Microsoft Hyper-V/Azure Local | Siemens OT01/OT02 and Schneider OT05 explicitly name **Hyper-V**; Rockwell OT03 also names it | **Only for those releases and tested configurations.** Azure Local is Hyper-V-based but is not automatically listed in each ISV's approved configurations. | Confirm Azure Local release, firmware/hardware, guest OS, Hyper-V generation, licensing and OT ISV support. |
| Red Hat OpenShift Virtualization | [Red Hat certified ecosystem catalog](https://catalog.redhat.com/en/platform/red-hat-openshift/virtualization) (opened); [Red Hat VM compatibility guidance](https://access.redhat.com/articles/7074700) (opened) | **No.** Catalog includes general ISVs, infrastructure and support integrations; not a blanket industrial application support list. | Check exact ISV, guest OS, drivers, network latency and storage performance; request written support exceptions if needed. |
| HPE Morpheus VM Essentials | HPE HVM product/HCL/feature documentation (existing report S10) | **No verified broad OT application certification list.** HPE VM Essentials' management of vCenter is not application certification on HVM. | Validate target HVM hypervisor, device support and OT ISV approval independently of HPE control plane. |
| Proxmox VE | Proxmox KVM/cluster documentation and customer directory | No universal named OT ISV certification list validated | Ask ISVs for exact written support, test USB/dongle/pass-through/clock behavior and recovery, preserve version baselines. |
| Oracle Linux KVM/OLVM | Oracle migration guide S30; Oracle Linux compatibility material | No universal OT ISV certification list validated | Distinguish **Oracle VirtualBox** support in Schneider OT04 from OLVM/KVM; obtain product-specific ISV statements. |
| Canonical MicroCloud/OpenStack | Canonical infrastructure guidance and OS/cloud compatibility material | No universal OT ISV certification list validated | Validate industrial control app, guest OS and relevant I/O/latency and site continuity design. |
| Scale Computing HyperCore | Scale's platform and migration technical material | No universal OT ISV certification list validated | Seek exact MES/SCADA/historian supported versions and customer references for plant workloads. |
| Vates VMS/XCP-ng | Vendor platform and Linux/Windows guest documentation | No universal OT ISV certification list validated | Seek written ISV support and validate availability, storage and lifecycle controls. |
| VergeOS | Product/vendor case studies and virtualization documentation | No universal OT ISV certification list validated | Test app compatibility and supplier support separately from infrastructure migration success. |

**Important qualification:** The table records **what was found and checked in the scoped research**, not a definitive claim that no compatibility certifications exist anywhere, including vendor login portals, licensed knowledgebases or unpublished customer support letters.

##### 6A.3 OT acceptance gate for a candidate VMware replacement

Before choosing a competitor for a manufacturing or regulated environment, capture all of the following for **each application and version**: vendor name/product/build, validated guest OS and drivers, named supported hypervisor/version, host/hardware compatibility, VM image/device dependencies (USB dongles, serial, hardware passthrough), controller/field networking topology, clock accuracy, supported snapshots/backup and restore, availability architecture, downtime rules, customer support entitlement, and written change-impact/GxP requalification responsibility. Test restore and rollback; confirm the OEM will support an incident after cutover. Different sites may need different certifications.

---


## Annex D — Source registers, claim crosswalks, verification records and limitations

**Important:** Identical unprefixed source codes can refer to different original reports. Read each ledger under its **R-number**. Original language such as “opened,” “indexed,” or “failed” describes its original research session. No new source checks were undertaken for V1.0.


### R1 — Peer Biopharma: source, claim, discovery and research-assurance ledgers

### Appendix A — Opened source register

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

### Appendix B — Claim-level evidence register

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

### Appendix C — Financial, earnings, investor and legal record disposition

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

### Appendix D — Discovery coverage and excluded source log

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

### Appendix E — Coverage, unresolved questions and source assurance

#### Coverage ledger

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

#### Outstanding evidence gaps (research findings, not user-assigned tasks)

- **18/19** organizations lack a publicly evidenced **post-acquisition VMware strategy decision** in the accessible records assembled here.
- No comparable VM/core-count time series for these companies exists in the verified evidence assembled here.
- No original invoices, VCF contracts, customer-specific renewal prices, or company-wide license inventories were discovered.
- Gilead residual VMware capacity, per-workload compliance handling, migration savings and procurement effect are not publicly established from the accessible AWS summary.
- Teva and Lilly vacancy leads are not link-accessible originals in this run; historical indexed snippets are retained only as leads.
- GSK Azure Local source is Microsoft-authored; no original GSK site-specific VM migration detail was verified.
- Private cloud, manufacturing OT, research HPC and ordinary public-cloud applications are not comparable measures of virtualization footprint.

#### Research assurance statement

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

### R2 — Broadcom/VMware: primary source register and claim crosswalk

#### 6. Primary research and evidence methodology

1. **Population separation:** historical VMware installed base vs the selected top-10,000 cohort vs named reference examples.
2. **Metric separation:** customer count, subscriptions purchased, revenue recognized, licensed cores, contract duration and workloads in production.
3. **Scope discipline:** Broadcom's software segment includes other businesses; a company's VCF announcement may cover only one country, plant or workload domain.
4. **Evidence hierarchy:** SEC original filing (F1); Broadcom original company assertion (V1); customer-attributable quotation within company release (C2); secondary-published CEO transcript (S1 for publication, C2 for attributed statement). Neither company nor vendor statements independently audit production claims.
5. **Accessibility policy:** *Opened original* means the original page's relevant content was retrieved and read. *Official indexed content; full-page open failed* means the publisher's matching text was discoverable in search but complete page retrieval failed. *Opened secondary transcript* is neither an original Broadcom-hosted call record nor an independent audit.
6. **Temporal boundary:** all claims through 28 October 2026; do not import later information or project FY2026 financial results beyond the latest filed quarter.

##### Source register (stable IDs, original URLs and inspection status)

| ID | Original source / direct URL | Date | Supporting section/locator | Retrieval during revision |
|---|---|---|---|---|
| **S01** | [Broadcom FY2025 Form 10-K, SEC](https://www.sec.gov/Archives/edgar/data/1730168/000173016825000121/avgo-20251102.htm) | FY ended 2 Nov 2025 | MD&A segment revenue and operating income; VMware acquisition note; intangible assets; RPO | **Opened original**; passages inspected |
| **S02** | [Broadcom quarterly results archive](https://investors.broadcom.com/financial-information/quarterly-results) | Accessed 28 Oct 2026 | Investor report directory; *not* used as proof of a customer metric | **Opened original**, directory only |
| **S03** | [VMware Cloud Foundation: One Platform for All Workloads](https://blogs.vmware.com/cloud-foundation/2026/02/13/one-platform-for-all-workloads/) | 13 Feb 2026 | “Proof of value lies in the results” | **Opened original**; >90% purchase statement inspected |
| **S04** | [Broadcom Q3 FY2026 Form 10-Q, SEC](https://www.sec.gov/Archives/edgar/data/1730168/000173016826000080/avgo-20260802.htm) | Filed 10 Sep 2026; period ended 2 Aug | MD&A “Net Revenue” and “Segment Operating Results”; non-terminable license contracts | **Official original indexed; full-page fetch failed**. Filing existence separately verified through [SEC filing index](https://www.sec.gov/Archives/edgar/data/1730168/000173016826000080/0001730168-26-000080-index.htm) |
| **S05** | [Broadcom Q3 FY2026 earnings release](https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-third-quarter-fiscal-year-2026-financial) | 2 Sep 2026 | “Net revenue by segment” $8,752m/$6,786m | **Official original indexed; full investor-page fetch failed**. Original-publisher [Broadcom news mirror](https://www.broadcom.com/company/news/apj/financial-releases/64671) also indexed with tables, direct fetch not reproducible |
| **S06** | [Audi/VCF manufacturing release](https://investors.broadcom.com/news-releases/news-release-details/broadcom-teams-audi-deliver-next-generation-it-based-factory) | 27 Mar 2025 | First live vPLC at Böllinger Höfe, VCF private cloud paragraphs | **Opened original** |
| **S07** | [Walmart strategic virtualization release](https://investors.broadcom.com/news-releases/news-release-details/broadcom-selected-strategic-vendor-virtualization-software) | 26 Aug 2025 | Strategic collaboration, future VCF cloud/edge operation | **Opened original** |
| **S08** | [Lloyds partnership release](https://investors.broadcom.com/news-releases/news-release-details/lloyds-banking-group-extends-strategic-partnership-broadcom) | 17 Sep 2025 | Multi-year agreement and forward-looking deployment | **Opened original** |
| **S09** | [ING private-cloud announcement](https://investors.broadcom.com/news-releases/news-release-details/ing-selects-vmware-cloud-foundation-90-strategic-platform) | 2 Dec 2025 | VCF 9 selection and existing VMware environment | **Opened original** |
| **S10** | [LSEG VCF renewal](https://investors.broadcom.com/news-releases/news-release-details/lseg-renews-partnership-broadcom-enhance-technology) | 19 May 2026 | Five-year renewal; existing VMware; VCF 9 rollout | **Opened original** |
| **S11** | [Standard Chartered VCF announcement](https://investors.broadcom.com/news-releases/news-release-details/standard-chartered-selects-broadcom-deliver-secure-always) | 16 Jul 2026 | 54 markets; 70% reported deployment | **Opened original** |
| **S12** | [VMware Explore 2025 Broadcom VCF disclosure](https://investors.broadcom.com/news-releases/news-release-details/broadcom-makes-vmware-cloud-foundation-ai-native-platform-and) | 26 Aug 2025 | Nine of top ten Fortune 500; over 100 million cores licensed | **Opened original** |
| **S13** | [MarketBeat Broadcom FY2024 Q4 earnings-call transcript](https://www.marketbeat.com/earnings/reports/2024-12-12-broadcom-inc-stock/) | 12 Dec 2024 | Attributed Hock Tan top-10,000 remarks | **Opened secondary transcript**, not Broadcom-issued transcript |
| **S14** | [Motley Fool Broadcom FY2025 Q1 call transcript](https://www.fool.com/earnings/call-transcripts/2025/03/06/broadcom-avgo-q1-2025-earnings-call-transcript/) | 6 Mar 2025 | Attributed Hock Tan approx. 70% statement | **Opened secondary transcript** |
| **S15** | [Motley Fool Broadcom FY2025 Q2 call transcript](https://www.fool.com/earnings/call-transcripts/2025/06/05/broadcom-avgo-q2-2025-earnings-call-transcript/) | 5 Jun 2025 | Attributed Hock Tan over-87% statement | **Opened secondary transcript** |
| **S16** | [NTT DOCOMO ten-year VMware agreement](https://investors.broadcom.com/news-releases/news-release-details/broadcom-advance-ntt-docomos-private-cloud-vmware-cloud) | Press release 19 Oct 2026; official website entry 20 Oct | Ten-year agreement; VMware collaboration since 2019 | **Official original indexed; full-page open failed**; no statement of individual contract price |
| **S17** | [FedEx infrastructure agreement](https://investors.broadcom.com/news-releases/news-release-details/broadcom-announces-continued-infrastructure-agreement-fedex) | 20 Oct 2026 | Continuing VCF, Avi and Tanzu use | **Official original indexed; full-page open failed**; no statement of individual contract price |

**Reader-access note:** “Opened original” records supporting accessible text in this research environment on the verification date; it cannot guarantee continued access from all corporate networks. Links marked “indexed” are **not certified as fully openable**. No broken PDF is substituted for an HTML source. The count of verified original publication pages must not include the SEC Q3 filing or October releases solely on the basis of search indexing.

##### Claim-level crosswalk

| Claim | Evidence | Exact limitation |
|---|---|---|
| BC-001: >90% of top 10,000 purchased VCF | S03, final paragraph “Proof of value” | Broadcom assertion about selected existing-customer cohort; not net additions or deployment |
| BC-002: >100m VCF cores licensed | S12, first announcement paragraph | Licensed capacity; not distinct customers or deployed cores |
| BC-003: 9 of top 10 Fortune 500 companies committed | S12, first announcement paragraph | Anonymous subset; no individual values |
| BC-004: $12.384bn FY2024 VMware-attributable net revenue | S01, “Our results ... included ... attributable to VMware” | No comparable standalone VMware revenue for later years in reviewed sources |
| BC-005: $21.478bn / $27.029bn FY2024/FY2025 software revenue | S01, MD&A “Net Revenue by Segment” | Broadcom infrastructure-software segment, not VMware-only |
| BC-006: $13.977bn / $20.765bn segment operating income | S01, MD&A “Operating Income by Segment” | Segment accounting, not customer count |
| BC-007: contract terms, subscriptions and integration costs | S01 MD&A; S04 MD&A | Drivers identified; effect on net customer base not quantified |
| BC-008: $6.786bn / $8.752bn Q3 software revenue | S05 “Net revenue by segment”; S04 MD&A | Original-publisher content indexed; direct full-page open failed |
| BC-009: historical cohort milestones | S13–S15 speaker remarks | Transcripts secondary-hosted; threshold/approximately values |
| BC-010: Audi live industrial VCF | S06 “live with first vPLC” | Defined factory application scope |
| BC-011: Walmart strategic virtualization partnership | S07 introductory paragraphs | Deployment completion not established |
| BC-012: Lloyds multi-year VCF agreement | S08 agreement and prospective rollout | No transaction price published |
| BC-013: ING VCF 9 selection | S09 opening paragraphs | Completion not demonstrated |
| BC-014: LSEG five-year renewal | S10 agreement paragraph | Price and deployment status not specified |
| BC-015: Standard Chartered 70% infrastructure on VCF architecture | S11 global footprint paragraph | Broadcom/customer-reported, not independently audited |
| BC-016: DOCOMO and FedEx October announcements | S16–S17 official indexed original text | Direct webpage fetch failed; financial consideration unknown |
| BC-017: VMware customer-relationship fair value $15.239bn | S01 acquisition intangible valuation table | Accounting valuation, not total contract consideration |

---

### R3 — Biopharma triangulation: source ledger, claim register and assurance

#### Appendix A. Verified-opened supporting source ledger

**Verification date:** 28 October 2026. `OPENED` means original URL and supporting text rendered in the research reader. Each entry states its true evidence scope.

| ID | Publisher / title | Date | Provenance | Verification and supporting locator | URL |
|---|---|---|---|---|---|
| E01 | VMware EMEA, *Virtual hands-on learning delivers real-world outcomes* | 3 Aug 2022 | V1 + Roche platform-owner C2 | **OPENED**; 'Developing real-world proficiency' and 'Expanding learning'—ESXi, vCenter, Horizon, monthly use, US/EU VMC hosts | https://blogs.vmware.com/emea-en/2022/08/virtual-hands-on-learning-delivers-real-world-outcomes/ |
| E02 | VMware, *Advance Life Sciences Digital Transformation* | Historical; embedded context pre-acquisition | V1 marketing quote | **PARTIALLY INSPECTED**; PDF text for Moderna CEO quote opened; screenshot retrieval failed; **no ESXi claim supported** | https://www.vmware.com/docs/vmw-life-sciences-solution-brief |
| E03 | AWS, *AWS for VMware at re:Invent 2024 Playlist* / MAM214 | 18 Feb 2025 | V1 conference description of named customer session | **OPENED**; MAM214 heading—>2,000 migrated, >1,400 retired; use same original accessible AWS page, not broken deck | https://aws.amazon.com/blogs/migration-and-modernization/aws-for-vmware-at-reinvent-2024-playlist/ |
| E04 | Microsoft Azure blog, *New options for AI-powered innovation, resiliency, and control* | 2025/26 publication | V1 named-customer claim | **OPENED**; 'Meeting unique operational and data sovereignty needs'—GSK Azure Local | https://azure.microsoft.com/en-us/blog/new-options-for-ai-powered-innovation-resiliency-and-control-with-microsoft-azure/ |
| E05 | Roche, *Roche launches NVIDIA AI factory* | 16 Mar 2026 | C1 company announcement | **OPENED**; announcement text, on-prem and cloud AI infrastructure | https://www.roche.com/media/releases/med-cor-2026-03-16 |
| E06 | Novo Nordisk, *Novo Nordisk and AWS enter strategic partnership* | 10 Aug 2026 | C1 company statement | **OPENED**; headline and bullets explicitly say preferred cloud provider | https://www.novonordisk.com/news-and-media/news-and-ir-materials/news-details.html?id=916594 |
| E07 | Microsoft customer story, *Novo Nordisk accelerates clinical insight with custom agents on Azure* | 19 May 2026 | V1 + customer C2 quotations | **OPENED**; Executive summary / governed Azure research analytics | https://www.microsoft.com/en/customers/story/26569-novo-nordisk-as-azure |
| E08 | Google Cloud customer story, *Moderna uses the right dose of data to boost discovery* | Date unestablished; historical context | V1 + customer C2 | **OPENED**; 'Finding the best solution'—Looker, Amazon Redshift; no VMware assertion | https://cloud.google.com/customers/moderna |
| E09 | VMware/Broadcom, *One Platform for All Workloads* | 13 Feb 2026 | V1 corporate claim | **OPENED**; passage 'more than 90% of the top 10,000 ... purchased VCF' | https://blogs.vmware.com/cloud-foundation/2026/02/13/one-platform-for-all-workloads/ |
| E10 | Broadcom, FY2025 Form 10-K | Filed Dec 2025 | F1 original SEC report | **OPENED**; 'Net Revenue by Segment' / discussion of VCF and license recognition; no named pharma contracts | https://www.sec.gov/Archives/edgar/data/1730168/000173016825000121/avgo-20251102.htm |
| E11 | ETR Research, *VMware Customers Face a Cost Reckoning* | 11 Jun 2026 | Independent published buyer research | **OPENED**; December 2025 drill-down survey, planned migrations and survey constraints | https://research.etr.ai/etr-data-drop/vmware-customers-face-a-cost-reckoning |
| E12 | Nutanix, *Global Microbiology Lab Accelerates Innovation ... IHMA* | 2024 | V1 + direct C2 | **OPENED**; named customer quotes, former VMware environment, AHV/Nutanix | https://www.nutanix.com/company/customers/ihma |
| E13 | Nutanix, *Himalaya Wellness* customer case | Historical | V1 + customer-author byline | **OPENED**; GM infrastructure account, AHV stack in use | https://www.nutanix.com/company/customers/himalaya-wellness |
| E14 | Apps Run The World, *VMware vSphere Customers* | Dynamic/current snapshot | Curated third-party technographics | **OPENED**; directory and methodology description, partial access, **not full verified list** | https://www.appsruntheworld.com/customers-database/products/view/vmware-vsphere |
| E15 | Apps Run The World, *VMware Cloud Foundation Customers* | Dynamic/current snapshot | Curated third-party technographics | **OPENED**; preview does not prove any of 19 identities | https://www.appsruntheworld.com/customers-database/products/view/vmware-cloud-foundation |
| E16 | Microsoft, *Astellas Pharma closes 6 datacenters* | 3 Sep 2025 | V1 + direct customer statements | **OPENED**; executive summary, 500 TB and six data-center closures | https://www.microsoft.com/en/customers/story/24804-astellas-azure-data-box |
| E17 | LSEG, *Renews Partnership with Broadcom* | 19 May 2026 | C1 company announcement | **OPENED**; five-year VCF expansion, multi-cloud relationship | https://www.lseg.com/en/media-centre/press-releases/2026/lseg-renews-partnership-with-broadcom |
| E18 | J&J, *MedTech digital surgery partnership with Microsoft* | Historical pre-acquisition | C1 | **OPENED**; MedTech digital surgery Azure preference, not global J&J estate | https://www.jnj.com/media-center/press-releases/johnson-johnson-medical-devices-companies-announces-strategic-partnership-with-microsoft-to-further-enable-its-digital-surgery-solutions |
| E19 | AWS, *Novartis Builds Patient Support System* | Date unclear | V1 customer case | **OPENED**; AWS patient-support workload | https://aws.amazon.com/solutions/case-studies/novartis-case-study/ |
| E20 | AWS, *AstraZeneca Builds Large-Scale Cloud Compute System* | Date unclear | V1 customer case | **OPENED**; compute case headline; provider detail limited in retrievable page | https://aws.amazon.com/solutions/case-studies/astrazeneca-compute-case-study/ |
| E21 | AWS, *Amgen Scientists Use AWS HealthOmics* | Date unclear | V1 + C2 | **OPENED**; defined scientific analysis workload | https://aws.amazon.com/solutions/case-studies/amgen-omics-case-study/ |
| E22 | Microsoft, *Transforming drug discovery: Novo Nordisk uses ... Azure* | 4 Oct 2024 | V1 + customer C2 | **OPENED**; Azure AI/data platform and AKS | https://www.microsoft.com/en/customers/story/18752-novo-nordisk-azure |
| E23 | AWS, *Driving Patient-Centric Innovation ... Pfizer* | Date unclear | V1 + C2 | **OPENED**; PACT use case, no hypervisor | https://aws.amazon.com/solutions/case-studies/pfizer-PACT-case-study/ |
| E24 | Uptimal, *Eli Lilly ... data processing with AWS* | Undated | V1 partner | **OPENED**; limited data-automation use case | https://www.uptimal.com/our-work/eli-lilly-company-automating-data-processing-with-aws/ |
| E25 | AWS, *Vertex Pharmaceuticals cryo-EM* | Historic 2022 context | V1 + C2 | **OPENED**; scientific workflow, not VMware | https://aws.amazon.com/solutions/case-studies/vertex-case-study/ |
| E26 | AWS, *Step Functions at Vertex Pharmaceuticals* | 2023 project references | V1 + C2 | **OPENED**; image processing, not a VMware migration | https://aws.amazon.com/solutions/case-studies/vertex-pharmaceuticals-distributed-map/ |
| E27 | AWS blog, *Bristol Myers Squibb Deploys Accounts ...* | 26 Oct 2022 | Named BMS guest author (C2) | **OPENED**; Control Tower environment, before acquisition | https://aws.amazon.com/blogs/industries/bristol-myers-squibb-deploys-accounts-from-multiverse-solution-within-an-hour-using-aws-control-tower/ |
| E28 | AWS, *Sanofi Drives Scientific Innovation with AI* | Date not captured | V1 + C2 | **OPENED**; Digital Accelerator, cloud research apps | https://aws.amazon.com/solutions/case-studies/sanofi-case-study/ |
| E29 | AWS + RGC author, *RGC infrastructure automation using AWS Proton* | 1 Aug 2023 | Customer co-author / C2 | **OPENED**; RGC cloud infrastructure, historical | https://aws.amazon.com/blogs/containers/how-rgc-genetics-center-achieved-infrastructure-automation-at-scale-using-aws-proton/ |
| E30 | Takeda, *Accelerates Digital Transformation with Accenture and AWS* | 13 Oct 2020 | C1 | **OPENED**; 80% application move = forward-looking target | https://www.takeda.com/newsroom/newsreleases/2020/takeda-accelerates-digital-transformation-with-accenture-and-aws/ |
| E31 | Gartner, *Top 7 Alternatives to VMware* | 17 Apr 2026 | Independent analyst market coverage | **OPENED summary**; alternatives list; detailed research may require subscription | https://www.gartner.com/en/documents/7739657 |
| E32 | AbbVie Careers, *Senior Analyst, Business Systems* | Publication date not established | C1 recruitment | **OPENED**, expired; VMware data-center lifecycle responsibilities | https://careers.abbvie.com/en/job/senior-analyst-business-systems-in-north-chicago-il-jid-2943 |

##### Additional candidate sources: opened failure or insufficient direct verification

| ID | Candidate | Actual retrieval status | Disposition |
|---|---|---|---|
| R01 | Nutanix Q4 FY2026 original IR earnings https://ir.nutanix.com/news-releases/news-release-details/nutanix-reports-fourth-quarter-and-fiscal-2026-financial-results | Indexed primary content found; direct `open` failed (cache miss) | Market context only, not opened-verified or 19-company evidence |
| R02 | Nutanix FY2026 SEC Form 10-K https://www.sec.gov/Archives/edgar/data/1618732/000119312526394793/ntnx-20260731.htm | Indexed original filing, direct `open` failed (cache miss) | Competitive commentary as *issuer statement*, not independent customer census |
| R03 | Nutanix GC Biopharma https://www.nutanix.com/company/customers/gc-biopharma | Search-indexed source, direct `open` cache miss | Comparator lead only; not counted as opened-verification |
| X01 | Lilly historic Workday engineering role R-107936 | Original withdrawn/unavailable | No current VMware customer proof |
| X02 | Teva LinkedIn-hosted VCF/Nutanix recruitment claim | Not opened in reader | No production platform proof |
| X03 | Cognizant Amgen VMware-to-AWS funding illustration | Vendor planning/funding scenario; no customer execution proof | Must not be called an Amgen migration |
| X04 | AWS event-hosted Gilead slide PDF variant | Access Denied from user's browser / not inspected as live source | Do not cite as accessible; use E03 instead |

---

#### Appendix B. Claim-level evidence register (selected material claims)

| Claim ID | Evidence-backed statement | Source(s) | Locator | Status and limitation |
|---|---|---|---|---|
| C01 | Roche Diagnostics on-prem training used ESXi, vCenter and Horizon | E01 | 'Developing real-world proficiency' | Historical 2022 V1+C2; subsidiary-specific |
| C02 | Roche story reported >15,000 virtualized simulator **consumptions per month** | E01 | 'Developing real-world proficiency' | Do not equate with concurrent resident enterprise VMs |
| C03 | Roche used VMware Cloud on AWS hosts in US and Frankfurt at historical time | E01 | 'Expanding learning' | 2021–22 baseline, not 2026 |
| C04 | Gilead AWS record reports >2,000 VMware-origin servers migrated | E03 | MAM214 description | AWS-hosted event description; customer presentation attribution; not audited |
| C05 | Gilead AWS record reports >1,400 systems retired | E03 | MAM214 description | Do not add to servers migrated or claim all VMware eliminated |
| C06 | GSK Azure Local at manufacturing and R&D edge sites | E04 | 'Meeting unique operational and data sovereignty needs' | Microsoft vendor claim; hypervisor displacement not stated |
| C07 | Novo AWS preferred cloud provider August 2026 | E06 | Company headline and bullets | Preferred ≠ exclusive, no VMware exit inference |
| C08 | Novo Azure clinical research analytics May 2026 | E07 | Executive summary / Azure solution | Workload-scoped; not enterprise hypervisor |
| C09 | Moderna Google Looker + Redshift multicloud data stack | E08 | 'Finding the best solution for the job' | Historical multicloud data; not virtualization change |
| C10 | VMware published a historic Moderna CEO endorsement | E02 | PDF page 1 quote text | Screenshot failed; no ESXi/vSphere contract established |
| C11 | Broadcom says >90% top 10,000 VMware customers purchased VCF | E09 | Main body 'Proof of value' paragraph | Broadcom seller claim; purchased ≠ deployed; identities not provided |
| C12 | Broadcom FY2025 10-K discusses VCF demand and software revenue recognition | E10 | Software segment MD&A | Segment aggregates cannot identify 19 peers |
| C13 | IHMA lab IT leader describes move away from former virtualization platform to Nutanix | E12 | 'Overview' and named customer quotes | Outside 19; customer-reported vendor-hosted |
| C14 | Astellas Azure 500 TB data move and closure six data centers | E16 | Executive summary | Outside 19; does not identify VMware source |
| C15 | LSEG signed five-year Broadcom/VCF renewal | E17 | Opening paragraphs and CIO quotation | Non-pharma positive comparator |
| C16 | Roche announced on-prem NVIDIA AI factory 2026 | E05 | Original corporate release | GPU deployment not necessarily VMware |
| C17 | ETR respondents express intentions to shift some VMware footprint toward alternatives | E11 | 'Microsoft, Red Hat and Nutanix' | Survey-based, not observed implementation nor 19-specific |
| C18 | AbbVie recruitment described VMware data-centre operations | E32 | Expired employer-authored careers description | Job is an operational responsibility signal, not a contract or production inventory. |


---

#### Appendix C. Research assurance, source caveats and decision boundaries

**Coverage:** 19/19 companies represented; all have differentiated evidence or an explicit data limitation. Competitor/reference searches covered Broadcom/VMware, Nutanix, Microsoft, AWS, Google Cloud, Gartner, ETR, targeted Red Hat/other virtualization queries and regulatory/investor sources. This is **not** a claim that every conference session, enterprise filing, procurement database or paid technographic feed was exhaustively searched.

**Opened-source log:** E01–E32 comprise 32 designated entries, with E02 **partially inspected**; E32 is the late-addition AbbVie source. Supporting HTML in E01, E03–E32 was opened in this research run. Some pages are original publication with older event dates; vendor pages can change after publication. The inaccessible originals and uncaptured private records are listed R/X.

**No private installed-base census:** Broadcom does not identify all VMware customers in its public disclosures; customer-specific contracts, renewal dates, deployed VM/host counts and per-business-unit topologies for these 19 are generally not public. Even a paid technographics estimate requires original proof for a material executive assertion.

**Source independence:** VMware, AWS, Microsoft, Nutanix and Google Cloud customer stories are commercially interested publications. Customer quotations within them are useful **attributed testimony** but not an independent audit. ETR is independent *survey research*, subject to sampling/questionnaire limits. SEC filings establish what issuers disclosed, not an externally audited customer-by-customer hypervisor migration register.

**Final statement suitable for an executive:** Within the 19 biopharma group, the strongest directly published VMware-origin migration example is Gilead. Roche Diagnostics has a specific, quantifiable historical VMware virtualization case, while GSK demonstrates a named alternative on-premises/edge platform and Novo Nordisk/Moderna illustrate purposeful multi-provider deployments for defined workloads. Public disclosures do **not** support a defensible company-by-company classification of 2026 VMware renewals and exits for all 19. **Evidence-backed platform archetypes and transition cases** are the appropriate output—not an invented “19-company stay/move scoreboard.”

**Research cutoff:** 28 October 2026. No recommendations about the sponsoring enterprise's infrastructure decision are made.

---

### R4 — Competitor landscape: original source/traceability/limitations

### Appendix A — Source and link-verification register

**Verification meaning:** `OPENED` = the original publisher page was opened through the research browser and the relevant text was inspected during this response; `PDF VISUAL` = original PDF page viewed; `OFFICIAL INDEXED / OPEN FAILED` = found in official search results but full original could not be reopened, hence evidence is downgraded; `SOURCE NOT RE-INSPECTED` = carried from the previous METI V2 research and **not** promoted to freshly verified status. Links may behave differently in corporate networks or change after cutoff.

| ID | Original source and URL | What it supports | Publisher type | Verification |
|---|---|---|---|---|
| M01 | [Gartner, Magic Quadrant for Server Virtualization Platforms, Sep 14 2026](https://www.gartner.com/en/documents/8377781) | Market covers 17 named vendors; not a share survey | Market analyst | **OFFICIAL INDEXED / OPEN FAILED** (abstract inspected via search) |
| M02 | [Nutanix FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1618732/000119312526394793/ntnx-20260731.htm) | >32,000 end customers as of Jul 31 2026; customer definition | Official SEC filing | **OFFICIAL INDEXED / OPEN FAILED** |
| M03 | [Proxmox 24/7 support and installed-base release, Sep 2 2026](https://proxmox.com/en/about/company-details/press-releases/proxmox-24-7-support-and-proxmox-north-america) | Vendor reports >2.3m active VE servers | Supplier announcement | **OFFICIAL INDEXED / OPEN FAILED** |
| S04 | [Nutanix MSIG Asia customer story](https://www.nutanix.com/company/customers/msig-asia) | ~2,000 AHV conversions; company rationale | Vendor-hosted customer testimony | **OPENED** |
| S05 | [Nutanix IHMA customer story](https://www.nutanix.com/company/customers/ihma) | 99 VMs customer-reported | Vendor-hosted customer testimony | **SOURCE NOT RE-INSPECTED** this turn |
| S06 | [Microsoft Azure Migrate for Azure Local release history](https://learn.microsoft.com/en-us/azure/azure-local/migrate/migrate-whats-new?view=azloc-2603) | VMware→Azure Local GA Oct 2025; Sep 2026 update | Original product documentation | **OPENED** |
| S07 | [Red Hat Emirates NBD customer story](https://www.redhat.com/en/success-stories/emirates-nbd) | ~9,000 VMs now operating; 140/night migration rate | Vendor-hosted, customer-attributable | **OPENED** |
| S08 | [HPE Morpheus VM Essentials bulk migration](https://support.hpe.com/hpesc/public/docDisplay?docId=sd00007520en_us&docLocale=en_US&page=GUID-4CCF6004-31A7-4B35-996D-5E12877CB443.html) | VMware→HVM migration capability | Official product documentation | **OFFICIAL INDEXED / open returned no usable body** |
| S08b | HPE engineering-lab >3,200-VM account, long-form PDF carried from earlier METI V2 | Supplier internal pilot evidence | Supplier document | **SOURCE NOT RE-INSPECTED**; omitted from verified external customer count |
| S09 | [Proxmox Estracom](https://proxmox.com/en/about/about-us/stories/story/estracom) | 320 VM move, six-week timeline | Supplier-hosted case | **OPENED** |
| S10 | [Proxmox HorizonIQ](https://proxmox.com/en/about/about-us/stories/story/horizoniq) | >300 VMs, 19-node platform, supplier-published economics | Supplier-hosted case | **OPENED** |
| S11 | [Proxmox Artec](https://www.proxmox.com/en/about/about-us/stories/story/artec) | Three-node VMware replacement in precision-manufacturing IT | Supplier-hosted case | **OPENED** |
| S12 | [Vates Virtual Computing](https://vates.tech/blog/how-virtual-computing-migrated-550-vms-to-vates-vms/) | 550 VMs/20 hosts migration, operational issues | Supplier-hosted customer testimony | **OPENED** |
| S13 | [VergeIO Alinsco Jan 2026 announcement](https://www.verge.io/press-release/alinsco-insurance-completes-zero-downtimevmware-exit-with-vergeos/) | Customer-reported VMware/VxRail exit | Supplier-hosted testimony | **OPENED** |
| S14 | [Oracle VMware→Oracle Linux KVM engineering guide](https://blogs.oracle.com/scoter/how-to-migrate-vmware-vsphere-to-oracle-linux-kvm) | Specific vSphere conversion method, not a named customer | Original publisher product engineering | **OPENED** |
| S15 | [Canonical MicroCloud/OpenStack infrastructure case and migration guidance](https://canonical.com/case-study/tntech-microcloud-cyber-range) | MicroCloud infrastructure use, not explicitly VMware exit | Supplier-authored case | **SOURCE NOT RE-INSPECTED** this turn |
| S16 | [Scale Computing migration datasheet](https://www.scalecomputing.com/documents/Data-Sheets/Scale-Computing-Migrate-Data-Sheet.pdf) | Platform migration proposition only | Supplier datasheet | **SOURCE NOT RE-INSPECTED** this turn |
| S17 | [Vates Fujifilm MicroChannel](https://vates.tech/blog/fujifilm-microchannel-what-a-well-planned-migration-can-change/) | Customer-attributed VMware conversion | Supplier-hosted case | **OPENED** |
| S18 | [Microsoft CDW Azure Local case](https://www.microsoft.com/en/customers/story/23002-cdw-computers-azure/) | >800 nonproduction VMs, not all VMware-origin | Supplier-hosted case | **SOURCE NOT RE-INSPECTED** this turn |
| S23 | [Broadcom VMware VCF product scope](https://www.vmware.com/products/cloud-infrastructure/vmware-cloud-foundation) | VCF's described full-stack components | Vendor product page | **OFFICIAL INDEXED / open returned no usable body** |
| OT01 | [Siemens TIA Portal V21 general requirements](https://docs.tia.siemens.cloud/r/en-us/v21/installation/system-requirements-for-installation/general-software-and-hardware-requirements) | Exact ESXi/Hyper-V/guest version statements and limitations | OT application publisher | **OPENED** |
| OT02 | [Siemens WinCC Runtime Unified V21 requirements](https://docs.tia.siemens.cloud/r/en-us/v21/installation/system-requirements-for-installation/product-specific-special-characteristics/installation-of-wincc-runtime-unified) | Product-specific virtualization requirements | OT application publisher | **SOURCE NOT RE-INSPECTED** this turn |
| OT03 | [Rockwell FTSP 6.60 installation guide (Sep 2025)](https://literature.rockwellautomation.com/idc/groups/literature/documents/in/ftsp-in001_-en-p.pdf) | VMware/Hyper-V/Nutanix; product docs prevail | OT application publisher | **PDF VISUAL — printed page 9 (PDF page index 8)** |
| OT04 | [Schneider Control Expert V15.3 FAQ](https://www.se.com/us/en/faqs/FAQ000255707/) | ESXi, VMware Workstation, Oracle VirtualBox *tested* | OT application publisher | **OPENED** |
| OT05 | [Schneider Data Center Expert virtualization FAQ](https://www.se.com/us/en/faqs/FA358121/) | Directs to up-to-date supported-platform page | OT application publisher | **OPENED** |
| OT06 | [AVEVA System Platform virtualization guide announcement](https://community.aveva.com/heroes-hq/f/announcements-news/83908/system-platform-virtualization-guide-is-here) | vSphere and Hyper-V covered in announced guide | OT application publisher | **OPENED** (announcement, not full guide) |
| OT07 | [Emerson DeltaV v15 FP3](https://www.emerson.com/en/automation-systems/deltav/deltav-v15/deltav-v15-fp3) | VMware/Hyper-V virtual SZ simulation only | OT application publisher | **OPENED** |

**Source checks in this revision:** Link opening and content inspection were repeated for core customer migrations, Siemens, Rockwell's original PDF, Schneider, AVEVA, Emerson, Microsoft migration releases and Oracle technical documentation. Official sources whose text was available only via search index are *not* represented as fully opened. Customer-case outcomes are attributed to their publishers and named speakers rather than asserted as independent measurements.

---

### Appendix B — Claim-to-source traceability (executive-material claims)

| Claim ID | Claim | Source(s) | Exact locator / important boundary |
|---|---|---|---|
| C01 | Nutanix reports >32k end customers Jul 2026 | M02 | Form 10-K “Our End Customers”; includes all Nutanix products; original full-page fetch failed this turn. |
| C02 | Proxmox reports >2.3m active servers | M03 | Supplier press-release body; official indexed only, not customer count. |
| C03 | ~2,000 MSIG Asia VMware VMs moved by Apr 2025 | S04 | Nutanix customer story “Solution”; supplier-hosted named customer. |
| C04 | ~9,000 VMs operating on Red Hat at Emirates NBD | S07 | “Migrating ...” in customer story; does not prove all originated on VMware. |
| C05 | 320 VMs migrated at Estracom | S09 | Case overview; 2025 customer/vendor report. |
| C06 | >300 VMs migrated HorizonIQ | S10 | “Migrating to a flexible open-source platform”; reported 19-node environment. |
| C07 | Vates says Virtual Computing moved 550 VMs | S12 | “A migration planned to stay under control”; supplier-hosted testimony. |
| C08 | Alinsco moved VMware/VxRail to VergeOS | S13 | Supplier press release Jan 6 2026; do not generalize zero downtime. |
| C09 | Microsoft Azure Local VMware migration GA Oct 2025 | S06 | “October 2025” release history. |
| C10 | Oracle offers vSphere→OLVM migration | S14 | “Migration from VMware vSphere / ESXi”, technical procedure, not a customer. |
| C11 | Siemens TIA Portal V21 names ESXi 8+ and Hyper-V 2019+ | OT01 | “Supported virtualization platforms”, release/version boundary and notes. |
| C12 | Rockwell FTSP 6.60 names VMware/Hyper-V/Nutanix | OT03 | Printed page 9; product-specific documents prevail. |
| C13 | Schneider Control Expert V15.3 tested ESXi/Workstation/VirtualBox | OT04 | “Resolution”, published 9 Mar 2023; VirtualBox not OLVM. |
| C14 | AVEVA guide covers VMware/Hyper-V | OT06 | Publisher announcement only; detailed guide not inspected. |
| C15 | Emerson v15 FP3 virtual SZ supports VMware/Hyper-V simulation | OT07 | “Communicate with Modbus in Virtual SZ”; simulation/FAT only. |
| C16 | No comparable 2026 market share established | M01–03 | Gartner abstract lists vendors; supplier adoption measures noncomparable. |

---

### Appendix C — Research limitations and assurance statement

- **Ten alternatives are a chosen analytical shortlist, not a validated global market-share ranking.** No percentages were invented.
- **Company customer cases are supplier-selected**, often with named customer quotations. They support that claims were published, not independent field-test validation, universal application eligibility or an industry migration rate.
- **OT compatibility is software/version/topology-specific.** Industrial product publishers' wording, and the exact support agreement, supersede generic hypervisor guest OS support.
- **Nutanix customers and Proxmox servers are unlike denominators.** Neither independently measures AHV/Proxmox paid VM market share or VMware churn.
- **Operational equivalence is unproven without live estate testing.** HA/DR, storage/network/security features, automation and governance must be tested as a stack.
- **Some official original pages were indexed but not reopened** in this research pass; the register records this explicitly. They do not substitute for opened source evidence.
- **No claim of a universal 2026 OT-approved vendor list** is made. The research identified product/version-specific publisher statements and an operational validation method.

**Research assurance conclusion:** Ten competing platform families assessed; material customer-migration claims backed by opened named original customer/supplier publications where indicated; key OT publisher documents reopened, including visual inspection of Rockwell PDF page 9; inaccessible sources downgraded; comparative customer-market share not asserted where data are incompatible. **Suitable for a qualified executive decision discussion and to authorize focused technical/commercial validation; not sufficient by itself to certify a target architecture or execute a manufacturing migration.**

---

### R5 — OT and migrations: full research source ledger and assurance

#### 10. Source and verification ledger (research cutoff 29 October 2026)

Codes: **P** = original publisher material; **F** = original regulatory/financial filing; **C2** = attributable named customer comments hosted by supplier; **V** = supplier claim; **R** = research-provider abstract. **Opened** = actual original webpage content opened/read in this session. **Indexed only** = discovered in indexed official records but attempted full reopening failed. Source *credibility* and original *accessibility* are separate attributes.

| ID | Original source / supporting content | Type | Retrieval |
|---|---|---|---|
| S01 | [Gartner, Magic Quadrant for Server Virtualization Platforms, 14 Sep 2026](https://www.gartner.com/en/documents/8377781): 17 vendors covered, methods and questions | R | **Indexed abstract; full Gartner report not accessed; direct reopen failed** |
| S02 | [Gartner, Critical Capabilities for Server Virtualization Platforms, 14 Sep 2026](https://www.gartner.com/en/documents/8381581): product/use-case evaluation categories | R | **Indexed abstract; full report not accessed** |
| S03 | [Nutanix FY2026 Form 10-K, Jul 31 2026](https://www.sec.gov/Archives/edgar/data/1618732/000119312526394793/ntnx-20260731.htm): over 32,000 end customers, including definition | F | **Official filing search-indexed; direct reopen failed** |
| S04 | [Broadcom-owned VCF publication, 13 Feb 2026](https://blogs.vmware.com/cloud-foundation/2026/02/13/one-platform-for-all-workloads/): >90% top-10,000 purchasing | V | **Opened** |
| S05 | [Nutanix investor release, Gartner recognition Sep 16 2026](https://ir.nutanix.com/news-releases/news-release-details/nutanix-recognized-leader-gartnerr-magic-quadranttm-server): vendor-reported Gartner placement | V | Indexed; not used for market-share quantification |
| S06 | [Nutanix / MSIG Asia customer story](https://www.nutanix.com/company/customers/msig-asia): ~2,000 VMs migrated by Apr 2025 | V+C2 | **Opened** |
| S07 | [Microsoft Azure Local migration options](https://learn.microsoft.com/en-us/azure/azure-local/migrate/migration-options-overview?view=azloc-2604): VMware migration support and appliances | P | **Opened** |
| S08 | [Microsoft Azure Migrate release chronology](https://learn.microsoft.com/en-us/azure/azure-local/migrate/migrate-whats-new?view=azloc-2604): Oct 2025 GA for VMware migrations | P | Official documentation indexed; direct original page not separately reopened |
| S09 | [Red Hat OpenShift Virtualization product portal](https://access.redhat.com/products/red-hat-openshift-virtualization/), [Red Hat Migration Toolkit](https://access.redhat.com/products/migration-toolkit-virtualization/) | P | **Product portal opened; toolkit official text indexed** |
| S10 | [HPE Morpheus Software QuickSpecs](https://www.hpe.com/us/en/collaterals/collateral.a50009231enw.html): HVM KVM and VMware coexistence, HA, migration | P | **Opened** |
| S11 | [Proxmox VE official feature documentation](https://proxmox.com/en/products/proxmox-virtual-environment/features) | P | **Opened** |
| S12 | [Proxmox 2 Sep 2026 support/active server announcement](https://proxmox.com/en/about/company-details/press-releases/proxmox-24-7-support-and-proxmox-north-america) | V | **Indexed official publisher; direct reopen failed** |
| S13 | [Oracle Linux Virtualization Manager documentation](https://docs.oracle.com/en/virtualization/oracle-linux-virtualization-manager/), [lifecycle](https://docs.oracle.com/en/operating-systems/oracle-linux/product-lifecycle/oracle_linux_virtualization_manager.html) | P | **Main documentation opened; lifecycle indexed** |
| S14 | [Vates, Virtual Computing, Apr 24 2026](https://vates.tech/blog/how-virtual-computing-migrated-550-vms-to-vates-vms/) | V+C2 | **Opened** |
| S15 | [VergeIO, Alinsco Insurance migration, Jan 6 2026](https://www.verge.io/press-release/alinsco-insurance-completes-zero-downtimevmware-exit-with-vergeos/) | V+C2 | **Opened** |
| S16 | [Canonical, Tennessee Tech MicroCloud case](https://canonical.com/case-study/tntech-microcloud-cyber-range) | V+C2 | **Opened** |
| S17 | [Scale Computing migration datasheet](https://www.scalecomputing.com/documents/Data-Sheets/Scale-Computing-Migrate-Data-Sheet.pdf) | P | **Indexed source text; original PDF not visually inspected** |
| S18 | [Vates, FUJIFILM MicroChannel, Mar 19 2026](https://vates.tech/blog/fujifilm-microchannel-what-a-well-planned-migration-can-change/) | V+C2 | **Opened** |
| S19 | [Canonical, October 2026 MicroCloud/LXD LTS release](https://canonical.com/blog/microcloud-and-lxd-lts-releases-2026) | P | **Indexed original publisher; direct reopen not verified** |
| S20 | [Proxmox customer stories](https://www.proxmox.com/en/about/about-us/stories) | V | Indexed official customer-story directory; individually claimed metrics not independently corroborated |

| S21 | [Nutanix / MSIG Asia](https://www.nutanix.com/company/customers/msig-asia): ~2,000 migrated VMware VMs | V+C2 | **Opened and inspected** |
| S22 | [Nutanix / IHMA](https://www.nutanix.com/company/customers/ihma): 99 VMs moved to AHV | V+C2 | **Original publisher content located; corroborating passages returned in source search** |
| S23 | [Microsoft / CDW Azure Local case](https://www.microsoft.com/en/customers/story/23002-cdw-computers-azure/): >800 nonproduction VMs, origin not all identified as VMware | V+C2 | **Opened and inspected** |
| S24 | [Microsoft Azure Migrate for Azure Local change history](https://learn.microsoft.com/en-us/azure/azure-local/migrate/migrate-whats-new?view=azloc-2603) | P | **Opened and inspected** |
| S25 | [Red Hat / Emirates NBD customer statement](https://www.redhat.com/en/engage/choose-your-best-path-for-virtualization-strategy): >9,000-VM migration program | V+C2 | **Opened and inspected** |
| S26 | [HPE internal Morpheus VM Essentials implementation](https://www.hpe.com/psnow/downloadDoc/Rethinking%20enterprise%20virtualization%20%E2%80%93%20Real-world%20results%20with%20HPE%20Morpheus%20VM%20Essentials%20Software-a00157471enw.pdf?contentDisposition=attachment&deepLink=&form=false&hf=regular&id=a00157471enw&isFutureVersion=true&isLinearized=false&originalObjectName=&prelaunchSection=&softrollSection=&ver=1): >3,200 VM supplier-internal claim | V | **Indexed source only; direct PDF reopen failed** |
| S27 | [Proxmox / Estracom](https://proxmox.com/en/about/about-us/stories/story/estracom): VMware-to-Proxmox | V+C2 | **Opened and inspected** |
| S28 | [Proxmox / HorizonIQ](https://proxmox.com/en/about/about-us/stories/story/horizoniq): >300 VMware VMs | V+C2 | **Opened and inspected** |
| S29 | [Proxmox / Artec](https://www.proxmox.com/en/about/about-us/stories/story/artec): industrial manufacturer | V+C2 | **Opened and inspected** |
| S30 | [Oracle / How to Migrate VMware vSphere to Oracle Linux KVM, Feb 2024](https://blogs.oracle.com/scoter/how-to-migrate-vmware-vsphere-to-oracle-linux-kvm) | P | **Opened and inspected** |
| S31 | [Canonical / VMware-to-OpenStack migration discussion](https://canonical.com/blog/multi-cloud-infrastructure-kubernetes-italy) | P | **Original publisher search text; not independently verified as named customer deployment** |
| S32 | [Vates / Fujifilm MicroChannel, Mar 2026](https://vates.tech/blog/fujifilm-microchannel-what-a-well-planned-migration-can-change/) | V+C2 | **Opened and inspected** |
| S33 | [VergeIO / Alinsco VMware exit, Jan 2026](https://www.verge.io/press-release/alinsco-insurance-completes-zero-downtimevmware-exit-with-vergeos/) | V+C2 | **Opened and inspected** |
| OT01 | [Siemens TIA Portal V21 requirements](https://docs.tia.siemens.cloud/r/en-us/v21/installation/system-requirements-for-installation/general-software-and-hardware-requirements) | OT ISV | **Opened and inspected, supported virtualization section** |
| OT02 | [Siemens WinCC Runtime Unified V21](https://docs.tia.siemens.cloud/r/en-us/v21/installation/system-requirements-for-installation/product-specific-special-characteristics/installation-of-wincc-runtime-unified) | OT ISV | **Opened and inspected, Virtualization section** |
| OT03 | [Rockwell FactoryTalk Services v6.60 installation PDF](https://literature.rockwellautomation.com/idc/groups/literature/documents/in/ftsp-in001_-en-p.pdf) | OT ISV | **Original PDF opened; printed page 9 / PDF page index 8 visually inspected** |
| OT04 | [Schneider EcoStruxure Control Expert V15.3 FAQ](https://www.se.com/us/en/faqs/FAQ000255707/) | OT ISV | **Opened and inspected** |
| OT05 | [Schneider Data Center Expert virtualization FAQ](https://www.se.com/us/en/faqs/FA358121/) | OT ISV | **Opened and inspected** |
| OT06 | [Siemens Desigo CC help article](https://mybuilding.siemens.com/d036861342594/help/engineeringhelp/en-us/23579166475.html) | OT ISV | **Indexed support text only; direct page failed to reopen** |
| OT07 | [Red Hat OpenShift Virtualization ecosystem catalog](https://catalog.redhat.com/en/platform/red-hat-openshift/virtualization) | Platform catalog | **Opened and inspected; not a comprehensive SCADA/MES compatibility list** |
| OT08 | [Red Hat virtual machine compatibility guidance](https://access.redhat.com/articles/7074700) | Platform guidance | **Opened and inspected** |
| OT09 | [AVEVA System Platform virtualization guide announcement](https://community.aveva.com/heroes-hq/f/announcements-news/83908/system-platform-virtualization-guide-is-here) | OT ISV publication | **Opened and inspected (guide announcement, not full guide)** |
| OT10 | [Emerson DeltaV v15 FP3 virtual SZ simulation](https://www.emerson.com/en/automation-systems/deltav/deltav-v15/deltav-v15-fp3) | OT ISV publication | **Opened and inspected** |

##### Assurance limits

- Named customer cases generally come from suppliers, with attributable customer statements where noted; none was independently audited here.
- Public product documentation proves availability of a capability **in a documented configuration**, not universal compatibility or parity with a deployed VMware estate.
- Market-share figures were **not invented** to fill the gap in publicly comparable data.
- Source-access limitations are retained; some valid official links may be restricted by automated retrieval or later site updates.
- No claims are made that these ten are the ten largest vendors worldwide by customer count or revenue.
- This is a peer-intelligence shortlist and technical analysis, not procurement due diligence, regulatory validation or a benchmark of independent field testing.

**Research assurance conclusion (revised):** Ten alternatives assessed; OT compatibility reviewed against original Siemens, Rockwell, Schneider, AVEVA and Emerson documentation; named VMware-displacement cases traced to specific competitor-published reports; inaccessible sources explicitly downgraded; original publisher records used for all ten; sources explicitly labelled by retrieval and provenance; market share intentionally not asserted where the evidence is non-comparable. **Suitable as an evidence-qualified executive discussion paper, not a definitive 2026 vendor market-share census or platform certification.**

### R6 — Market research: sources, original claim register and limitations

#### 7. Evidence register and source-access audit

**Verification convention:** “Opened” means the relevant original publisher page was retrieved and inspected in this research session. “Publisher-indexed; direct open unsuccessful” means publisher-authored text was returned by source search and the publication could be located, but a subsequent direct fetch failed. “Abstract only” means full subscription research was not reviewed. These labels are intentionally narrower than calling every retrieved snippet “fully validated.”

| Source ID | Original publisher, dated record | Original URL | Source access in this review | Claims supported |
|---|---|---|---|---|
| **S01** | S&P Global 451 Alliance, Melanie Posey, **12 Aug 2026**, *VMware holds its ground as virtualization strategies diversify* | https://blog.451alliance.com/vmware-holds-its-ground-as-virtualization-strategies-diversify/ | **Publisher-indexed; direct article open unsuccessful**. Original 451 archive corroborates title and publication date. | C01, C05 |
| **S02** | S&P Global 451 Research, analyst directory, *Virtualization 2026 Survey Data Hub* entry, **24 Jul 2026** | https://451research.com/index.php?name=Melanie%2BPosey&option=com_analystdirectory&view=analyst | **Publisher-indexed; direct page open unsuccessful**. Searchable publisher record states survey period, respondent totals and sample limitation. | C05 |
| **S03** | S&P Global 451 Alliance, Melanie Posey, **11 May / updated 22 Jun 2026**, *Security and operational control drive expansion in organizations' IT environments* | https://blog.451alliance.com/security-and-operational-control-drive-expansion-in-organizations-it-environments/ | **Original page opened and inspected**, including summary and private-cloud definition. | C02, C03 |
| **S04** | Gartner, **14 Sep 2026**, *Magic Quadrant for Server Virtualization Platforms* | https://www.gartner.com/en/documents/8377781 | **Official abstract indexed; direct full-page open unsuccessful; full report restricted**. Original abstract names 17 competitors; does not present market-share percentages. | C04 |
| **S05** | CloudBolt Software, **17 Feb 2026**, *New CloudBolt research: 86% of companies actively reducing their VMware footprint*; associated January survey | https://www.cloudbolt.io/company/news/new-cloudbolt-research-86-of-companies-actively-reducing-their-vmware-footprint/ | **Publisher-indexed; direct page retrieval timed out**. Publisher's report listing and survey description corroborated. | C06 |
| **S06** | Statista, **13 Jul 2026 update**, *Leading virtualization platform technologies worldwide* | https://www.statista.com/statistics/1252355/top-virtualization-technologies-by-domain/ | **Original page returned HTTP 403**. Exact share values not used. | C07 |
| **S07** | 6sense, *Virtualization Platform Technologies* (2026 page) | https://technographics.6sense.com/virtualization | **Publisher-indexed; direct open unsuccessful**. Broad mixed categories preclude like-for-like comparison. | C07 |
| **S08** | S&P Global 451 Alliance, *Cloud & Managed Services Transformation research archive* | https://www.451alliance.com/resources/research-reports/cloud-managed-services-transformation | **Original publisher archive opened**, with August 2026 article entry visible in current indexed version; a cached older open lacked recent entries. | Publication confirmation for S01 |
| **S09** | Hewlett Packard Enterprise, **10 Feb 2026**, *New research finds only 5% of enterprises are fully ready for the Great Virtualization Reset* | https://www.hpe.com/us/en/newsroom/press-release/2026/02/new-research-finds-only-5-of-enterprises-are-fully-ready-for-the-great-virtualization-reset.html | **Original page opened and inspected**, including fieldwork dates and methodology paragraph. | C06 |

##### Claim register

| Claim ID | Material finding | Original source | Evidence boundary |
|---|---|---|---|
| **C01** | VMware ~43% primary; Hyper-V ~28%; Oracle ~12%; Red Hat ~7%; OpenStack ~3%; Nutanix ~2% | S01 | Primary-platform survey response, **not worldwide installed-VM or revenue share** |
| **C02** | VMware workloads in nearly 90% of surveyed private-cloud environments | S03 | **Presence** in private-cloud survey; not primary selection or global share |
| **C03** | 37% plan to keep bulk of VMware workloads; remainder includes reductions, evaluations and undecided | S03 | Future intent; **not 63% completed migrations** |
| **C04** | Gartner 2026 virtualization Magic Quadrant evaluates 17 vendors | S04 | Competitive positioning, **not market share** |
| **C05** | 2026 451 survey ~789 respondents, May 5–June 26; ~230 current hypervisor users; stated ±4 top-line margin | S02 | Full question-level bases and subpopulation sampling error **not independently available** |
| **C06** | CloudBolt 86% report reduction; HPE >two-thirds planning change | S05, S09 | **Different vendor-sponsored sample populations**; no equivalence to completed migration |
| **C07** | Technographic and gated categories cannot validate an alternative like-for-like 2026 share table | S06, S07 | Explicit exclusion from primary exhibit |

##### Research assurance and remaining limitations

- **Original publisher full pages opened for key substantive secondary study and HPE methodology:** S03 and S09; S&P official 451 archive opened separately.
- **Publisher-authored survey figures identified, but not fully reopened at original article URL:** S01/S02. The principal **43% chart remains directly attributed to the publisher and accessible in its indexed publication text**, with the access limitation disclosed rather than concealed.
- **Full underlying 451 survey instruments, crosstabs, weightings and question-level bases:** not available through the public summary; cannot independently re-estimate subpopulation confidence intervals.
- **Like-for-like 2026 worldwide product revenue/production-VM share tables:** not validated in the accessible record.
- **Biopharma-specific breakdown:** not established by the reviewed general-enterprise surveys.
- **No market-share time series invented:** different studies measure different populations, products and denominators; a 2023-to-2026 line would be methodologically unsupported.

**Overall finding:** Credible 2026 original research supports VMware's lead in **surveyed primary-platform choice** and substantial private-cloud installed presence, with meaningful competitive pressure and mixed virtualization strategies. It does **not** establish a precise worldwide revenue/VM market-share series or customer-loss rate. This is the evidence-grounded conclusion suitable for Cloud Leadership.

---

---


---

## Annex E — Additional peer-company Broadcom portfolio relationship sources (29 October 2026)

These are **supplementary dated public sources for Section 5**. Earlier VMware/CA activity refers to a business or technology subsequently within Broadcom's portfolio and is not itself a 2026 Broadcom agreement.

| Reference | Source | What it directly establishes | Historical and verification boundary |
|---|---|---|---|
| **BP01** | [Morpheus Data — AstraZeneca customer case study (2021)](https://morpheusdata.com/wp-content/uploads/content/Morpheus-CMP-Case-Study-AstraZeneca-2021.pdf) | VMware ESX used for 2017 private-cloud provisioning; Morpheus hybrid-cloud operations in 2021 | Original supplier-hosted case, PDF page 2 visually inspected in the research. The **8-data-center** deployment concerns Morpheus automation, not a verified all-VMware deployment; no 2026 VCF claim. |
| **BP02** | [Dell/EMC — Sanofi Transforms Data Center (May 2012)](https://www.dell.com/en-us/dt/corporate/newsroom/announcements/2012/05/20120605-02.htm) | VMware vSphere named in Sanofi private cloud with EMC storage | Named vendor/customer historical case; no later VMware retention established. |
| **BP03** | [iTnews — Johnson & Johnson SDDC, VMworld 2017](https://www.itnews.com.au/news/johnson-johnson-goes-tapeless-to-get-to-sddc-475687) | Customer-attributed VMware team and vSphere VADP use in J&J's SDDC | Named-leader reporting by a secondary publisher; quoted global SDDC VM count not independently established as VMware-only. |
| **BP04** | [VMware Q3 FY2020 earnings call, 26 Nov 2019 — secondary-hosted transcript](https://www.fool.com/earnings/call-transcripts/2019/11/26/vmware-inc-vmw-q3-2020-earnings-call-transcript.aspx) | VMware CEO names Pfizer among VMware Cloud on AWS customer references | Management-reported, not a named production scope or contemporary contract. |
| **BP05** | [Apps Run The World — Broadcom Clarity PPM (ex CA PPM) customer directory](https://www.appsruntheworld.com/customers-database/products/view/broadcom-clarity-ppm-ex-ca-ppm) | Database lists AstraZeneca as a historical 2011 CA Clarity PPM implementation | Commercial secondary technographic record; no customer-authored implementation or 2026 procurement independently verified. |

---

**Editorial provenance:** METI VMware Strategic Decision Intelligence V1.0, 29 October 2026. Base report reconciled from METI_FINAL_SIX_REPORTS_COMBINED_2026-10-29.md (source blob SHA 9d24e92756b9e6c4a4e66e5b516dff95cec1c6ea), with separately identified supplementary public Section 5 references in Annex E (29 October 2026). Historical source-access qualifications are preserved; newly reviewed references do not verify 2026 Broadcom contracts. The combined baseline was not edited.
