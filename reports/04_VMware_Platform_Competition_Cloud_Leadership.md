# METI | Can Broadcom's VMware Be Realistically Challenged?

> **RESEARCH STATUS — FINAL EDITORIAL EDITION (v3.0, 29 October 2026).** This file was reconciled against the other five existing METI reports. It preserves original source-access classifications and does **not** claim that external URLs were freshly opened on 29 October. "Final" refers to the selected/reconciled documentation, **not** an independently audited worldwide infrastructure census. Detailed source and claim registers follow in the original body.

**Reconciled edition note (29 October 2026):** Executive synthesis of the technical evidence in Report 05; use Report 05 for exact OT product versions and full source dispositions. Ten vendors are a **relevance shortlist, not a market-share ranking**. Red Hat's Emirates NBD case demonstrates platform scale but does **not** document VMware as the source hypervisor. HPE internal migration claims are not independent customer proof. **No new external validation was performed for this edition.**


## Executive research report: enterprise virtualization alternatives, customer adoption, OT compatibility and migration viability

**Audience:** Global Cloud & Infrastructure Technology Leader; Enterprise Architecture; CTO leadership  
**Evidence cutoff:** 29 October 2026  
**Coverage:** Ten enterprise virtualization alternatives; named VMware-displacement references; published industrial-application virtualization support  
**Research basis:** Primary vendor technical records, named customer testimony, original OT application-publisher documentation, official financial filings, market-research abstracts  
**Report status:** Decision-oriented, source-qualified external research. **Not** an independently tested product benchmark, OT application certification, or an enterprise migration approval.  
**Editorial principle:** Distinguish documented facts, customer/vendor assertions, and analyst interpretation. Source IDs throughout link to the audit register in Appendix A.

---

# 1. Executive summary

## Decision headline

**VMware faces credible, demonstrated alternatives for enterprise virtual machines. It does not follow that any one challenger is a drop-in replacement for an entire VMware Cloud Foundation (VCF) estate—especially where validated manufacturing, OT software, storage/network services and recovery operations are involved.**

### Five findings for leadership

**1. Actual VMware displacement is documented, not just promised.** In original named supplier-hosted customer publications, MSIG Asia reports transitioning about **2,000 VMs** from VMware to Nutanix AHV by April 2025; Proxmox reports completed VMware transitions at Estracom (**320 VMs**) and HorizonIQ (**more than 300 VMs**); Vates names a **550-VM** conversion at Virtual Computing; and VergeIO reports an Alinsco VMware/VxRail exit. Separately, Emirates NBD reports operating about **9,000 VMs on OpenShift Virtualization** after a phased migration, but **the opened Red Hat case does not identify VMware as the source hypervisor**. These are **customer-attributable/supplier-hosted claims**, not independently audited enterprise benchmarks. [S04, S07, S09, S10, S12, S13]

**2. The choice is architectural, not only commercial.** Nutanix pairs a hypervisor with an integrated HCI operating model; Microsoft offers Hyper-V/Azure Local with Azure-connected management; Red Hat converges KVM-based VMs and Kubernetes; HPE can manage VMware alongside a new KVM-based HVM stack; and open-source/independent alternatives provide other cost, control and operating-model choices. Replacing only ESXi is a materially smaller question than replacing **vSphere + vCenter + vSAN + NSX + automation/operations + backups/DR**. [S06, S08, S14, S23]

**3. Industrial software support changes the answer.** Siemens explicitly names VMware ESXi and Microsoft Hyper-V for specified TIA Portal/WinCC releases. Rockwell's September 2025 FactoryTalk Services installation guide names VMware, Hyper-V and Nutanix, while warning that **product-specific documents and support agreements take precedence**. AVEVA publishes guidance covering vSphere and Hyper-V; Emerson describes Hyper-V/VMware for specific **DeltaV simulation** functions. These are **not certifications for every FactoryTalk, WinCC, AVEVA or DeltaV production workload**. [OT01, OT02, OT03, OT06]

**4. Market-share comparisons remain unavailable at a trustworthy common denominator.** Gartner's September 2026 research considers 17 server-virtualization vendors, but the public abstract does not provide market-share percentages. Nutanix reports **over 32,000 end customers** across its portfolio as of July 2026; Proxmox reports **over 2.3 million active servers** as of September 2026. Those measure different populations and cannot be used to infer hypervisor market share, VMware churn or relative installed VM counts. [M01, M02, M03]

**5. The practical decision is a segmented substitution strategy.** For a complex global biopharma environment, competitors are credible for **selected, inventoried VM groups**; enterprise-wide substitution remains conditional on ISV support, validated-state change control, availability/DR, migration reversibility, lifecycle tooling and full economics. This is an **analyst assessment based on the technical and customer evidence**, not a claim that the studied vendors are certified in the sponsoring enterprise.

### Executive decision in one table

| Decision question | Evidence-led answer | Leadership consequence |
|---|---|---|
| Is VMware technically replaceable for ordinary Windows/Linux VMs? | **Yes, for supported workloads**: mature competing hypervisors and named VMware-origin customer migrations exist. | Test actual application groups rather than reopening a theoretical hypervisor debate. |
| Is there a demonstrated alternative for larger enterprise estates? | **Yes, conditional**: Nutanix has a named sizeable VMware-origin migration; Red Hat has named sizeable VM-platform deployment; Microsoft has a published VMware-to-Azure Local path; HPE has a VMware-to-HVM management/migration model. | Include stack, support and recovery parity in the comparison. |
| Is any competitor proven to replace every VCF component seamlessly? | **No such universal proof in the inspected records.** | Map all VMware dependencies before using a cost-per-core comparison. |
| Are alternative hypervisors certified for common biopharma OT apps? | **Some exact software releases explicitly name Hyper-V and/or VMware; Rockwell also names Nutanix in general guidance.** | Obtain application-version-specific written confirmation before any critical OT migration. |
| Can published customer counts determine competitive market share? | **No**: customer, host, core, subscription and VM measures differ. | Use named production references, independently defined workload measures and tender responses. |
| Does reported cost saving make migration economical overall? | **Not automatically**: published savings are selected customer/vendor reports, often based on licensing. | Include dual-run, professional services, requalification, hardware, training, DR and exit cost in TCO. |

### Cross-report market and OT evidence boundaries

- **Market share:** Report 06 provides the only numerical survey-based primary-platform comparison in this package; its core S&P article was publisher-indexed, **not reopened in full**. Competitor revenue/customer/server counts are not comparable market shares.
- **OT compatibility:** Report 05 contains the detailed Siemens, Rockwell, Schneider, AVEVA and Emerson product/version records. This executive synthesis is **not a universal OT certification table**.
- **Migration:** A named customer using 9,000 Red Hat VMs does not establish VMware-origin migration unless the source explicitly says so. HPE's internal reported migrations are **not third-party customer evidence**.

### Executive implication

**This is a credible competitive market, not a one-for-one commodity replacement market.** The leadership opportunity is to establish **choice by workload segment** and negotiate or migrate from evidence—while protecting regulated systems from unsupported assumptions. The study supports an **evaluation program**, not an unconditional product purchase or blanket VMware exit.

---

# 2. Market structure: what is being competed away?

VMware can mean (i) a hypervisor, (ii) a virtual infrastructure management plane, or (iii) the integrated VCF private-cloud stack. Analyses claiming vendor parity must specify their comparison unit. Broadcom's official portfolio describes compute, storage, networking, security, Kubernetes and automation/operations as integrated VCF capabilities. [S23]

| VMware function / dependency | Relevant replacement question | Failure mode if ignored |
|---|---|---|
| ESXi / guest virtualization | Does target support exact guest OS, drivers, CPU/GPU and VM hardware assumptions? | VM fails to boot, is unlicensed or loses performance features. |
| vCenter / resource management | Equivalent RBAC, provisioning, API, inventory, templates, policy and change logging? | New fragmented operations and audit gaps. |
| vSAN / storage | Equivalent storage performance, failure domains, snapshots, encryption, shared disks, lifecycle? | Data-service changes and DR redesign. |
| NSX / virtual networking | Equivalent overlay, segmentation, firewall policy, load balancing and migration of rules? | Network/security gap despite successful VM boot. |
| vMotion/HA/DRS / recovery | Real live migration, restart/failover, workload affinity and multi-site recovery requirements? | Unacceptable interruption or recovery exposure. |
| VCF automation / observability | Equivalence for day-0 to day-2 workflows, ITSM, policy, monitoring and capacity forecasting? | Hidden labor and platform-engineering costs. |
| ISV/OT support | Does the **application manufacturer** support named OS, version, hypervisor and topology? | Vendor support or validated-state risk. |

**Market-coverage fact:** Gartner's **14 September 2026** Server Virtualization Platforms Magic Quadrant and Critical Capabilities abstracts list **17 vendors**. This report selects ten technically relevant alternatives from that market; **“top ten” means an enterprise research shortlist, not the ten largest by verified share**. The paid Gartner research itself and any proprietary vendor rankings are not reproduced or independently inspected. [M01]

---

# 3. Competitive landscape — ten alternatives (unranked)

The rows describe **potential architectural fit and diligence issues**, not a numerical vendor rating. Specific product versions, licensing, hardware support and OEM support must be checked at evaluation time.

| Alternative | Primary VMware substitute | Potential advantages | Constraints / downside to validate | Named replacement evidence inspected |
|---|---|---|---|---|
| **Nutanix Cloud Infrastructure + AHV** | Virtualization plus integrated HCI and Prism management | Integrated operations, storage and migration tooling; meaningful customer scale | HCI/storage economics, network segmentation, backup/DR integration, hardware and OT ISV support | MSIG Asia ~2,000 VMs; IHMA 99 VMs [S04, S05] |
| **Microsoft Hyper-V / Azure Local** | Windows/Linux virtualization and Azure-connected HCI | Familiar Microsoft skill base, documented VMware migration capability, some industrial ISV support | Arc/management dependencies, certified hardware, version and guest constraints, DR/network parity; **Azure Local ≠ every Hyper-V deployment** | VMware migration route documented; CDW >800 VMs on Azure Local **not proven VMware-origin** [S06] |
| **Red Hat OpenShift Virtualization** | KVM-based VM plus containers on OpenShift | Common VM/container platform, enterprise Linux and policy ecosystem, migration toolkit | Kubernetes operational complexity, legacy guest/device needs, storage/network design, OT ISV confirmation | Emirates NBD approximately 9,000 VMs operating; phased migration [S07] |
| **HPE Morpheus VM Essentials / HVM** | KVM-based HVM, management of HVM and vCenter | Phased coexistence, unified management and bulk migration approach | Product maturity in specific use cases, licensed feature edition, HCL, ISVs, networking/storage parity | Product migration documentation; supplier lab scale claim **not fully reopened** [S08] |
| **Proxmox VE** | KVM-based virtualization plus integrated storage/cluster administration | Open-source model, configurable clusters/Ceph, published VMware transitions | Enterprise service model, automation/multi-site operational standards, hardware/backup ecosystem and OT support | Estracom 320; HorizonIQ >300; Artec named manufacturing-site infrastructure [S09–S11] |
| **Oracle Linux KVM / OLVM** | KVM-managed virtual estate | Oracle/Linux ecosystem and documented migration tooling | Ecosystem breadth, product roadmap, storage/network architecture, compatibility with existing enterprise tools | Vendor migration procedure; no opened named VMware exit in this evidence set [S14] |
| **Canonical MicroCloud / OpenStack** | Linux-based private cloud / VM platform | Open infrastructure, customizable sovereignty and scaled cloud operations | High platform-engineering responsibility, OpenStack operational complexity, changing architectures and OT support | Product/customer infrastructure cases, but **no named VMware-exit completion substantiated** [S15] |
| **Scale Computing HyperCore** | Integrated virtualization/storage aimed at distributed sites | Lightweight site deployment and unified edge management | Diverse enterprise estate fit, centralized policy, OT software support and limited-site vs global-scale evidence | Migration/product materials; **no sufficiently opened named VMware exit** in this review [S16] |
| **Vates VMS / XCP-ng** | Xen hypervisor plus Xen Orchestra management/backup | Open architecture, direct conversion tools, incremental coexistence | Guest drivers, legacy BIOS/UEFI, support ecosystem and enterprise backup/OT ISV conditions | Virtual Computing 550 VMs; Fujifilm MicroChannel named exit [S12, S17] |
| **VergeOS** | Unified VM/storage/network stack | Single-stack operation and ability to repurpose some existing hosts | Vendor concentration in a smaller supplier, operating-model change, ISV certification and resilience evidence | Alinsco Insurance reports completed VxRail/VMware exit [S13] |

**Separate category: public-cloud rehosting/refactoring.** AWS EC2, Azure Virtual Machines, Google Compute Engine and platform services can eliminate VMware hosting for selected applications, but are **not like-for-like on-premises hypervisor competitors**. For cloud migration, classify retained vs replaced VMware components, connectivity, data residency, operating costs and application modernization separately.

---

# 4. Does the market have comparable customer or market-share evidence?

## 4.1 Published measures and denominator discipline

| Published measure | Value/date | Original publisher / basis | What it does **not** measure |
|---|---|---|---|
| Nutanix end-customer organizations | **Over 32,000**, 31 July 2026 | Nutanix FY2026 Form 10-K [M02] | AHV-only customers, production VMs, VMware conversions or global hypervisor share. |
| Proxmox active VE servers | **Over 2.3 million**, supplier-reported Sep 2026 | Proxmox press release [M03] | Unique businesses, paid accounts, VMs, or comparable revenue market share. |
| Gartner 2026 covered server-virtualization vendors | **17 vendors** | Gartner original research abstract [M01] | Any share percentage or proof each vendor is equivalent in every use case. |
| Microsoft, Red Hat, HPE and other vendors | No like-for-like public installed VMware-replacement count identified | Product and customer publications | A basis to infer relative customer-share percentages. |

**Analyst conclusion:** No defensible percentage market-share chart can be produced from these measures alone. Vendor revenue, product purchases, installed hosts and migrated VMs are non-comparable. Gartner's public pages describe market scope but do not publish a complete freely inspectable share series for this specific ten-vendor shortlist.

## 4.2 Competitive signal hierarchy

Use evidence in this order for a cloud leadership decision, recognizing that different claims require different evidence:

1. **Named customer, specified migration scope, implementation state** (prefer customer-authored or attributable engineering statement).
2. **Product-release and technical migration support** (official documentation, feature and requirement matrices).
3. **Application ISV support and operating-system/hardware compatibility** for the actual portfolio.
4. **Independent benchmark and service/support performance** if methodology and workload are disclosed.
5. **Supplier customer-base figures and market analysis** with explicitly defined units.

A vendor's 100% customer-satisfaction statement or a press headline is not equivalent to a tested migration of a regulated production workload.

---

# 5. Evidence of real VMware customer moves — not merely a product brochure

| Target | Named customer and year | Originally published customer claim | What it proves / does not prove | Evidence status |
|---|---|---|---|---|
| **Nutanix AHV** | **MSIG Asia**, 2025 | Approximately **2,000 VMs** transitioned VMware→AHV by April 2025; customer names Broadcom-era licensing concerns. | Actual customer-reported platform displacement in MSIG Asia; not its wider parent group, not an independently audited total. | Supplier-hosted customer statement; original opened [S04]. |
| **Nutanix AHV** | **IHMA**, published case | Customer IT director reports **99 VMs** moved from VMware to AHV; driver adjustment encountered. | Laboratory/microbiology-adjacent case; does not establish every GxP system's qualified status. | Supplier case; not fully reopened in this pass [S05]. |
| **Red Hat OpenShift Virtualization** | **Emirates NBD**, 2026 | Red Hat reports **about 9,000 VMs now operating** on the platform, with migration reaching as many as 140 VMs/night; **the case does not identify their original hypervisor as VMware**. | Large production estate; financial services, not pharmaceutical OT. Vendor-hosted attributable leadership statements. | Original opened [S07]. |
| **Microsoft Azure Local** | **CDW**, published case | **800+ nonproduction VMs** moved to Azure Local in four months. | Target implementation at scale; source does **not** establish VMware as origin of all 800. | Supplier-hosted, status qualified [S18]. |
| **Proxmox VE** | **Estracom**, Oct 2025 | VMware vCenter→Proxmox across **320 VMs**; six-week migration; published 25% hardware-utilization gain. | Customer-reported implementation, not generalized economics or independent performance verification. | Original opened [S09]. |
| **Proxmox VE** | **HorizonIQ**, Sep 2025 | **300+ VMs** moved; 19-node HA/Ceph platform; supplier reports material license-cost reductions. | Customer migration and supplier-published savings; costs exclude direct comparison of all possible enterprise migration burdens. | Original opened [S10]. |
| **Proxmox VE** | **Artec**, Apr 2026 | Italian precision manufacturer moved VMware estate to **three-node Proxmox/Ceph** cluster. | Manufacturing IT case; **no named PLC/MES/SCADA hypervisor certification** is established. | Original opened [S11]. |
| **Vates/XCP-ng** | **Virtual Computing**, Apr 2026 | **550 VMs / about 20 hosts** transitioned from VMware with phased batches. | Demonstrates migration from VMware; legacy driver and BIOS/UEFI changes discussed by customer. | Original opened [S12]. |
| **Vates/XCP-ng** | **Fujifilm MicroChannel**, Mar 2026 | VMware→Vates transition for internal and hosted IT systems. | Customer example is a technology services business, **not evidence of FUJIFILM biopharma-manufacturing workload migration**. | Original opened [S17]. |
| **VergeOS** | **Alinsco Insurance**, Jan 2026 supplier announcement | Company reports VMware/VxRail migration completed without scheduled downtime, reusing existing hardware. | A completed, customer-attributed IT infrastructure case; "zero downtime" and comparative performance are not independently audited. | Original opened [S13]. |
| **HPE HVM** | **HPE internal labs**, supplier publication | HPE describes an internal >3,200 VM modernization/migration. | Product-company self-deployment rather than an external named customer; original PDF not reopened. | **Access limited**; not a verified external customer [S08b]. |
| **Oracle / Canonical / Scale Computing** | No sufficiently corroborated named replacement in inspected original case set | Product documentation or customer examples that do not explicitly prove VMware displacement. | Technical feasibility or workload hosting, **not evidence of an executed VMware exit**. | Record openly; no invented success stories [S14–S16]. |

**Evidence interpretation:** Customer stories are selected success cases and cannot support an industry migration rate. Nevertheless, because multiple independent suppliers publish named customer moves, it is defensible to conclude **VMware displacement is technically and operationally feasible for some production estates**. What remains unproved is universal VCF-stack interchangeability, especially for regulated manufacturing applications.

---

# 6. OT and industrial application compatibility — the critical biopharma constraint

## 6.1 Application-vendor documentation (not a broad hypervisor certification chart)

| Application / original version | Named virtualization environments in publisher documentation | Boundary: what this does not license us to claim |
|---|---|---|
| **Siemens TIA Portal V21 (STEP 7 / WinCC)** | **ESXi 8.0+**, VMware Workstation/Player V17+, **Microsoft Hyper-V Server 2019+** [OT01] | Specific releases and guest/host combinations apply; some accessible-station display limitations under Hyper-V; does not name all KVM/Xen products. |
| **Siemens WinCC Runtime Unified V21** | VMware and Hyper-V in product-specific installation guidance [OT02] | Does not establish support for all WinCC products or all industrial production topologies. |
| **Rockwell FactoryTalk Services Platform 6.60.00** | General guidance names **VMware, Hyper-V, Nutanix** [OT03] | Product-specific release notes and contracts prevail; Rockwell says VMware is used in its testbeds and Hyper-V in training. Does not certify every FactoryTalk component on AHV. |
| **Schneider EcoStruxure Control Expert V15.3** | Tested **VMware ESXi**, Workstation 15.5.2, **Oracle VirtualBox** 6.1 [OT04] | Historical 2023 product/version statement; **VirtualBox is not OLVM/KVM**. |
| **Schneider Data Center Expert virtual appliance** | Vendor refers readers to current supported-platform matrix, whose exact current supported-platform combinations must be checked separately [OT05] | This is *datacenter infrastructure management*, not validation of a plant process-control application. The retrieved FAQ is a pointer to the authoritative support page. |
| **AVEVA System Platform / OMI virtualization guidance** | Publisher announces a guide covering **VMware vSphere and Hyper-V** [OT06] | Announcement verified; the **full version-specific guide and exact product clauses were not independently inspected**. |
| **Emerson DeltaV v15 FP3 virtual SZ functions** | **VMware and Hyper-V** for Modbus in virtual SZ **simulation, training and virtual FAT** [OT07] | **Not** certification of production DeltaV DCS control nodes across all supported hypervisors. |

**What this means:** Microsoft Hyper-V is specifically named in a number of accessible industrial publishers' documents. Rockwell includes Nutanix in general guidance. But no source reviewed demonstrates that an *Azure Local* configuration inherits every Hyper-V-specific support entitlement, nor does an application running in KVM automatically confer ISV support on Proxmox, Red Hat or Oracle. Absence from a list can mean **not established**, not necessarily technically impossible.

## 6.2 OT support disposition by competitor

| Competitor | Specific support evidence in this review | Status for a real plant application |
|---|---|---|
| Nutanix AHV | Rockwell mentions Nutanix in general virtualization guidance [OT03] | **Potential**, requires product/version and AHV-specific agreement from the software publisher. |
| Microsoft Hyper-V / Azure Local | Siemens, Rockwell, AVEVA and specified Emerson uses name Hyper-V [OT01–03, OT06–07] | **Documented for selected software functions**; confirm Azure Local/product/version mapping separately. |
| Red Hat OpenShift Virtualization | General virtualization/ISV ecosystem; no inspected Siemens/Rockwell/DCS certification [S07, OT01–07] | **Not established** for the named industrial applications; request written manufacturer confirmation. |
| HPE HVM | Platform HCL/product documentation; no inspected OT application matrix | **Not established**. |
| Proxmox VE | Manufacturing customer infrastructure (Artec) is documented, but no application OEM approval for specific SCADA/MES versions | **Not established**, even though manufacturing IT is feasible. |
| Oracle OLVM/KVM | Oracle conversion guide; Schneider's VirtualBox statement is a different product | **Not established**. |
| Canonical MicroCloud/OpenStack | Infrastructure platform documents, no inspected OT manufacturer matrix | **Not established**. |
| Scale Computing HyperCore | Edge platform materials, no inspected named OT ISV approval | **Not established**. |
| Vates/XCP-ng | Guest/hypervisor docs, customer IT migrations; no inspected OT manufacturer matrix | **Not established**. |
| VergeOS | VMware/VxRail IT migration case, no inspected OT manufacturer support | **Not established**. |

### Mandatory plant-level questions

For each MES/SCADA/historian/LIMS/DCS application, ask its publisher to confirm in writing **application release, OS build, hypervisor and release, host firmware/hardware, I/O/dongle dependencies, clock synchronization, backup/snapshot restrictions, HA/DR topology, lifecycle support and change-control obligations**. Secure that confirmation **before** any production pilot; do not infer it from a generic Windows Server guest certification. Where no confirmation exists, keep that workload on its supported estate or plan an explicit risk/exception decision.

---

# 7. Technical and economic viability — what a real replacement must prove

## 7.1 Workload-segmented assessment

These are **evaluation propositions**, not facts about the sponsoring company's current estate.

| Workload segment | Most useful challenger approaches to investigate | Non-negotiable proof |
|---|---|---|
| Development/test and temporary research workloads | Proxmox, Nutanix, Red Hat, Microsoft, Vates and others | Automated rebuild, snapshots, rollback, pipeline integrations, license entitlements. |
| Conventional Windows/Linux application VMs | Nutanix, Microsoft, Red Hat, HPE plus estate-matched alternatives | Guest OS and application support, security/backup integration, HA/DR, operations parity. |
| Private-cloud modernization / HCI | Nutanix; Azure Local; HPE and other integrated stacks | Storage/network failure tests, private-cloud operations, existing hardware/support, workload economics. |
| VM/container convergence | Red Hat OpenShift Virtualization, or an appropriate split platform | Common policies, migration toolkit, Kubernetes competence, availability, cost of shared operations. |
| Remote/regional sites and edge | Scale, Microsoft, Nutanix, VergeOS, selected Proxmox/Vates configurations | Offline management, site autonomy, limited staff, resilience, industrial networking and ISV approval. |
| Validated manufacturing, LIMS, MES, historian, DCS/OT | Only a **specific supported product/version combination** | Written OEM/ISV support, GxP impact assessment, qualification and recovery evidence. |

## 7.2 Quantify total economics, not only license savings

The total change in cost is:

**Recurring license and support change + hardware/storage/network change + migration services + internal effort + dual-run + training/operating-model change + app recertification/requalification + resilience/security tooling + interruption risk + exit obligations.**

Use three scenarios—**retain/optimize VMware**, **hybrid targeted displacement**, **substantial VMware replacement**—with a common workload baseline. For each, calculate a 3–5-year cash-flow comparison and sensitivity to contract terms, migration labor, DR, support and regulated change effort. These are **recommended model components**, not undisclosed industry savings estimates.

### Feasibility gates

1. **Application gate:** documented platform/guest/ISV eligibility; unsupported workloads explicitly excluded.
2. **Operations gate:** HA, DR, backup restore, monitoring, IAM, audit, patching and support all pass realistic tests.
3. **Migration gate:** discovery is complete, pilot works, rollback and data-integrity checks demonstrated.
4. **Economics gate:** TCO after transition is defensible under at least base and adverse assumptions.
5. **Governance gate:** IT architecture, security, resilience, procurement, application owner, manufacturing OT and quality agree on scope and acceptance evidence.

---

# 8. Recommended Cloud Leadership decision agenda

**Recommendation: make an evidence-backed, segmented competition possible—not an immediate all-or-nothing platform decision.**

### Near-term decision request (proposed)

Authorize a **time-boxed competitive validation program** with three architectural tracks and a protected critical-OT lane:

- **Track A — Enterprise private cloud:** Evaluate **Nutanix AHV/NCI, Microsoft Azure Local/Hyper-V, Red Hat OpenShift Virtualization**, and VMware's own optimized path against a common enterprise test harness. Include HPE as a **coexistence/migration contender** where relevant to existing hardware and operations.
- **Track B — Infrastructure cost and portability:** For appropriate noncritical VM groups, test **Proxmox and Vates** (with Oracle or Canonical when there is specific existing platform alignment) to establish the trade between software economics and operating responsibility.
- **Track C — Remote-site/edge:** Consider **Scale Computing and VergeOS** only if estate discovery establishes their target use cases and support model fit.
- **Protected OT lane:** Do not choose a hypervisor based on a generic feature demonstration. Obtain exact **Siemens, Rockwell, AVEVA, Schneider, Emerson and other relevant ISV** support for the known manufacturing portfolio, or retain VMware for those workloads until a supported transition is proven.

This is a practical *evaluation shortlist*, not a ranking of market share or a claim that these companies' products are certified across biopharma.

### Minimum outcomes for a 90-day assessment (indicative, subject to capacity)

| Phase | Research/validation outcome | Go/no-go evidence |
|---|---|---|
| Weeks 1–3 | Segment live VMware estate by guest, app, criticality, topology, support contract and VMware feature dependency | Signed-off inventory and incompatibility register |
| Weeks 4–5 | ISV and vendor written fit assessments; common TCO assumptions | Supplier support/OT exception register; objective trial scenarios |
| Weeks 6–9 | Focused pilots for conventional VM groups and one failure/recovery scenario; OT simulation only where support exists | Measured migration effort, recovery, support response, rollback, tooling parity |
| Weeks 10–12 | Comparable 3–5-year TCO, architecture decision record and transition options | Scoping recommendation: remain, hybridize or migrate specific workload cohorts |

**Suggested decision questions for the Cloud leader:** Which VM segments are costly because of licensing alone versus deep VCF dependencies? Which require manufacturer-backed hypervisor support? What percentage of the estate (by host, VM, workload criticality and cost) can be moved without changing other infrastructure layers? What is the real dual-run and DR impact? What contract milestones constrain timing?

---

# 9. Vendor-specific considerations — concise dossiers

The following are analytical differentiators/risks grounded in the product and customer material, **not standardized independent testing**.

### 9.1 Nutanix AHV / NCI
**Why plausible:** Integrated HCI, virtualization and Prism management; one of the best-documented named VMware displacement case sets among these ten. **Opportunity:** simplify selected private-cloud estates. **Watch:** AHV-specific software certification, storage design, feature mapping for NSX/network policy, backup and costs across the full stack. **Reference:** MSIG Asia (2,000 VMs); IHMA (99). [S04–05, M02]

### 9.2 Microsoft Hyper-V / Azure Local
**Why plausible:** Mature hypervisor foundation and documented VMware migration to Azure Local; industry ISVs name Hyper-V in exact configurations. **Opportunity:** Microsoft-aligned hybrid/Windows infrastructure, including selected OT support paths. **Watch:** don't equate Hyper-V support with blanket Azure Local support; Arc/cloud and cluster hardware requirements, guest drivers, recovery parity and pricing. [S06, OT01–03]

### 9.3 Red Hat OpenShift Virtualization
**Why plausible:** KVM-based VM workloads under a platform also supporting Kubernetes/containers; named 9,000-VM operational reference. **Opportunity:** consolidate VM/container operations where enterprise skills exist. **Watch:** platform engineering complexity, virtual networking/storage dependencies and any unsupported specialized guest/OT use. [S07]

### 9.4 HPE Morpheus VM Essentials / HVM
**Why plausible:** HPE describes management of existing vCenter plus new KVM HVM clusters with bulk migration. **Opportunity:** phased choice rather than immediate VMware shutdown. **Watch:** validate the edition's feature set, HCL and application stack; large internal self-reported migrations are not external reference proof. [S08]

### 9.5 Proxmox VE
**Why plausible:** Named VMware migrations at Estracom, HorizonIQ and industrial IT at Artec; Ceph-based designs publicly described. **Opportunity:** economical, customizable virtualization for technically capable teams. **Watch:** integrated enterprise tooling, lifecycle/change management, support terms and industrial software approvals. Supplier-reported savings are not universal TCO. [S09–11, M03]

### 9.6 Oracle Linux KVM / OLVM
**Why plausible:** Oracle publishes step-by-step vSphere conversion with libvirt/qemu/virt-v2v. **Opportunity:** Linux/Oracle-oriented segments where support and infrastructure align. **Watch:** application compatibility, operational ecosystem and OLVM lifecycle; no named executed VMware exit was fully inspected for this product in the current evidence set. [S14]

### 9.7 Canonical MicroCloud / OpenStack
**Why plausible:** Open infrastructure and enterprise Canonical support can be appropriate for cloud-native private clouds, labs or sovereign environments. **Opportunity:** flexibility and architecture ownership. **Watch:** specialist OpenStack skills, operational integration and host/storage/network responsibility; do not count generic MicroCloud adoption as VMware displacement. [S15]

### 9.8 Scale Computing HyperCore
**Why plausible:** Integrated, distributed-site-oriented virtualization and storage. **Opportunity:** small clusters, edge and remote-site simplicity. **Watch:** enterprise operational standardization and specific industrial software support; named VMware-exit proof was not sufficient in the opened materials. [S16]

### 9.9 Vates VMS / XCP-ng
**Why plausible:** XCP-ng + Xen Orchestra offer VMware conversion and a different commercial model; Virtual Computing and Fujifilm MicroChannel report completed transitions. **Opportunity:** segmented production or services estates with incremental migration. **Watch:** legacy drivers/BIOS modes, support integrations and target-app ISV support. [S12, S17]

### 9.10 VergeOS
**Why plausible:** Vendor reports an insurance customer replacing VMware on existing VxRail hardware, with networking and storage integrated. **Opportunity:** simplify selected converged estates or edge sites. **Watch:** small-vendor dependency, complete audit/DR evidence, specialized-application support and independence of customer claims. [S13]

---

# Appendix A — Source and link-verification register

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

# Appendix B — Claim-to-source traceability (executive-material claims)

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

# Appendix C — Research limitations and assurance statement

- **Ten alternatives are a chosen analytical shortlist, not a validated global market-share ranking.** No percentages were invented.
- **Company customer cases are supplier-selected**, often with named customer quotations. They support that claims were published, not independent field-test validation, universal application eligibility or an industry migration rate.
- **OT compatibility is software/version/topology-specific.** Industrial product publishers' wording, and the exact support agreement, supersede generic hypervisor guest OS support.
- **Nutanix customers and Proxmox servers are unlike denominators.** Neither independently measures AHV/Proxmox paid VM market share or VMware churn.
- **Operational equivalence is unproven without live estate testing.** HA/DR, storage/network/security features, automation and governance must be tested as a stack.
- **Some official original pages were indexed but not reopened** in this research pass; the register records this explicitly. They do not substitute for opened source evidence.
- **No claim of a universal 2026 OT-approved vendor list** is made. The research identified product/version-specific publisher statements and an operational validation method.

**Research assurance conclusion:** Ten competing platform families assessed; material customer-migration claims backed by opened named original customer/supplier publications where indicated; key OT publisher documents reopened, including visual inspection of Rockwell PDF page 9; inaccessible sources downgraded; comparative customer-market share not asserted where data are incompatible. **Suitable for a qualified executive decision discussion and to authorize focused technical/commercial validation; not sufficient by itself to certify a target architecture or execute a manufacturing migration.**

---

## Editorial release provenance (29 October 2026)

This is a **history-reconciled final editorial edition** assembled solely from METI research files created earlier in the same conversation. It does not represent new public-web source checking. Source-access statuses describe the **original research run**, not guaranteed present-day availability. See `00_README_AND_VERSION_MANIFEST.md` for source-file mapping, cross-document precedence, and quality limitations.
