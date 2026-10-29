# METI | Can Broadcom's VMware Be Realistically Challenged?

> **RESEARCH STATUS — FINAL EDITORIAL EDITION (v3.0, 29 October 2026).** This file was reconciled against the other five existing METI reports. It preserves original source-access classifications and does **not** claim that external URLs were freshly opened on 29 October. "Final" refers to the selected/reconciled documentation, **not** an independently audited worldwide infrastructure census. Detailed source and claim registers follow in the original body.

**Reconciled edition note (29 October 2026):** This is the detailed source-qualified OT/technical companion to Report 04. Named industrial-application documentation is **version, topology and use-case specific**. Hyper-V support cannot automatically be transferred to Azure Local, nor KVM support to all Red Hat/Proxmox/Oracle versions. Source IDs marked publisher-indexed or not re-inspected remain in those lower evidence tiers. **No new external validation was performed for this edition.**


**Top Ten Server-Virtualization Alternatives: Customer Evidence, Market Position, Technical Viability and Trade-offs**  
**Research cutoff:** 29 October 2026
**Revision:** V2.0 — OT/industrial application support and source-checked VMware displacement cases  
**Audience:** Cloud & Infrastructure Technology Leader, Enterprise Architecture, CTO leadership  
**Status:** Evidence-qualified executive competitive assessment; source-access re-audit performed 29 October 2026. Not a software-vendor certification, validated-GxP declaration or procurement decision.

---

## 1. Executive assessment

**Finding: VMware faces credible competition, but not one universal drop-in replacement for the whole VMware Cloud Foundation (VCF) stack.** The realistic alternatives depend on which layers are being replaced: ESXi/vSphere hypervisor, vCenter management, vSAN storage, NSX networking, disaster recovery, automation, or the broader private-cloud operating model.

**The strongest candidates for substantial enterprise virtualization substitution are Nutanix Cloud Infrastructure/AHV, Microsoft Hyper-V/Azure Local, and Red Hat OpenShift Virtualization.** These offer materially different strategies: integrated HCI/private cloud, Microsoft-centric hybrid infrastructure, or common governance of virtual machines and containers. HPE Morpheus VM Essentials has an explicit coexistence-and-conversion approach. Canonical, Oracle, Proxmox and Vates are technically credible for appropriate estates, but an enterprise should independently validate ecosystem coverage and operational support. Scale Computing and VergeOS are relevant for defined edge and stack-consolidation scenarios.

**Customer evidence exists of actual VMware displacement:** Nutanix cites MSIG Asia (~2,000 VMs, April 2025), Vates describes a named 550-VM migration by Virtual Computing, and VergeIO reports Alinsco Insurance's completed migration. Canonical describes Tennessee Tech's operational MicroCloud transition, although its source describes a *legacy virtualization stack* rather than explicitly proving VMware as the replaced system. These cases are attributable customer/vendor-hosted reports, not independent audits. [S06, S14, S15, S16]

**OT/industrial compatibility is a material differentiator.** Siemens and Rockwell publish specific virtual-platform statements for selected software releases, while product-agnostic certified partner catalogs do not independently establish compatibility of WinCC, FactoryTalk, MES, historian, SCADA or DCS with every competing hypervisor. Section 6A provides the inspected original application-vendor evidence.

**Market share cannot be responsibly quantified across these ten offerings from the original public records inspected.** Gartner published a new Server Virtualization Platforms Magic Quadrant and Critical Capabilities study in September 2026 covering 17 vendors, but the public abstracts do not disclose consistently defined customer-, host-, VM-, core- or revenue-share values. Market presence must not be conflated with customer wins, vendor revenue, software downloads or ratings. [S01, S02]

**Decision-oriented implication:** A phased, workload-segmented competitive strategy is realistic; a blanket estate-wide replacement assumption is not. The relevant question is **which portion of the deployed VMware estate can demonstrably be supported, migrated and operated at acceptable risk and total cost**.

### Executive conclusions (fact vs analysis)

| Observation grounded in evidence | Analyst interpretation | Boundary |
|---|---|---|
| Nutanix reports over 32,000 end customers at July 31, 2026, and names AHV migration customers. [S03, S06] | Established commercial scale makes Nutanix a credible option for large enterprise evaluations. | These are **Nutanix-wide end customers**, not AHV-only paying customers or VMware conversions; 10-K page was indexed but direct reopening failed. |
| Microsoft documents generally available VMware-to-Azure-Local migration, including appliance requirements. [S07, S08] | An actionable coexistence-to-replacement route exists for validated Windows/Linux workloads. | No directly comparable customer share; Azure Local is not a free, identical VMware operating model. |
| Red Hat documents OpenShift Virtualization and a supported migration toolkit from vSphere. [S09] | Strong option where Kubernetes/Red Hat operations are already strategic. | Technical feasibility does not prove suitability for every legacy/GxP application. |
| HPE documents an HVM KVM hypervisor, VMware-managed coexistence and a bulk migration path. [S10] | Enables gradual platform substitution without requiring simultaneous abandonment of VMware. | Hardware/ISV support matrices and feature parity still require assessment. |
| Proxmox reports >2.3 million active servers and launched 24/7 vendor support in Oct. 2026. [S12] | Indicates a significant installed footprint and improved support readiness. | **Servers are not unique enterprises, production VM totals or market share**; 2026 press-release page was indexed but direct reopening failed. |
| Named customer migration references exist for Vates and VergeOS. [S14, S15] | Smaller vendors may be viable for carefully segmented production estates. | Vendor-hosted cases are selective and not representative of universal enterprise fit. |

---

## 2. Market definition and selection methodology

The ten alternatives below were selected for enterprise relevance, architectural diversity, commercially available product capability and presence in the September 2026 server-virtualization market discussion—not by a claimed global market-share ranking. Gartner's September 2026 original abstracts list **17** vendors and assess technical areas such as CPU/GPU, HA/DR, storage, network, management, security, legacy applications and edge. Gartner's entire paid report and vendor rankings were **not** inspected here. [S01, S02]

**Comparison units differ:** Nutanix's *end-customer* figure includes multiple product lines and potentially separate divisions; Proxmox's *active server* metric counts hosts; Gartner Peer Insights counts review submissions; Broadcom's top-10,000 VCF conversion measures *purchasing by a selected cohort*. None forms a valid denominator for market-share calculations across vendors.

**Included ten, unranked:** Nutanix AHV/NCI; Microsoft Hyper-V/Azure Local; Red Hat OpenShift Virtualization; HPE Morpheus VM Essentials/HVM; Proxmox VE; Oracle Linux Virtualization Manager/KVM; Canonical MicroCloud/OpenStack; Scale Computing HyperCore; Vates VMS/XCP-ng; VergeOS.

**Separate strategic exit path:** AWS EC2, Azure VMs, and Google Compute Engine rehosting or refactoring can remove reliance on on-prem VMware but introduce public-cloud architecture, data movement, operations, commercial and compliance considerations. Hosted VMware services do not necessarily reduce VMware product dependency.

---

## 3. Competitive landscape: technical viability, advantages, limits and evidence

**Assessment convention:** “Potential advantages” and “Principal constraints” are analytical evaluation points based on documented architecture, **not observed performance comparisons or promised savings**. Absence of a published market-share number is recorded rather than filled by an estimate.

| # | Alternative | Product approach / VMware scope potentially displaced | Potential advantages | Principal constraints to validate | Named adoption/scale evidence |
|---|---|---|---|---|---|
| 1 | **Nutanix AHV + NCI** | KVM-based AHV, HCI, storage and Prism management; vSphere/vSAN-like functional scope | Integrated stack; migration tooling; private/hybrid operations | Hardware/storage qualification; licensing; network microsegmentation; backup and GxP vendor certification | >32,000 **Nutanix end customers** as of Jul 2026 (not AHV share); MSIG Asia reports ~2,000 VMware VMs moved to AHV [S03, S06] |
| 2 | **Microsoft Hyper-V + Azure Local** | Hypervisor, failover clustering, software-defined/validated HCI and Azure Arc management | Existing Windows skills; Windows/Linux guests; VMware migration path; hybrid management | Azure connectivity/Arc, hardware certification, Linux/guest specifics, storage, DR, licensing and migration prerequisites | VMware→Azure Local migration documented GA Oct 2025; no comparable public active-customer number [S07, S08] |
| 3 | **Red Hat OpenShift Virtualization** | KVM/KubeVirt VMs alongside Kubernetes containers; MTV migration from vSphere | Unified VM/container control; automation; Red Hat support; modern application platform | Requires OpenShift skills and platform operations; storage/network/backup integration; guest and ISV compatibility | Red Hat product and migration tools documented; no audited OpenShift Virtualization-only customer count located [S09] |
| 4 | **HPE Morpheus VM Essentials / HVM** | KVM-based HVM; unified management of HVM and VMware; conversion from vCenter | Phased coexistence; HPE enterprise support; reuse of some external storage; live migration in HVM | Product-specific maturity, HCL, vSAN/NSX replacement, security policy features, backup integration | HPE published technical documentation and migration support; customer count not consistently disclosed [S10] |
| 5 | **Proxmox VE** | Debian/KVM + LXC, Ceph, clustering, HA, backup | Open source; hardware flexibility; integrated Ceph; commercial support options | Enterprise backup/DR and GxP vendor certification, support SLAs and complex multi-site lifecycle | Proxmox claims >2.3m **active servers** worldwide Sept 2026; not unique customers; vendor-hosted customer stories [S11, S12] |
| 6 | **Oracle Linux VM Manager + KVM** | Oracle Linux KVM with oVirt-derived manager | Supported KVM, cluster and live-migration capabilities; alignment with Oracle/Linux operations | Oracle lifecycle/version constraints; ecosystem breadth and integration; not a whole VCF private-cloud replacement | Official Oracle technical/lifecycle documentation; no comparable customer count [S13] |
| 7 | **Canonical MicroCloud / OpenStack** | LXD/MicroCloud for distributed cloud, OpenStack for cloud-scale private IaaS | Open source/enterprise support; automation; granular control, private-cloud sovereignty | Architecture and integration complexity; skills; nuanced VM migration; suitability varies between MicroCloud and OpenStack | Canonical reports Tennessee Tech migrated/rebuilt ~1,700 production VMs on a 10-node MicroCloud environment; old stack not identified as VMware in the case [S16] |
| 8 | **Scale Computing HyperCore** | Integrated KVM-based hyperconverged/edge environment | Simplicity, distributed-site management, migration tools | Large-scale enterprise private-cloud features, external storage, specialized apps and partner breadth | Vendor migration datasheet and named enterprise edge references; no comparable audited base [S17] |
| 9 | **Vates VMS / XCP-ng** | Xen hypervisor + Xen Orchestra management and migration | Open source; commercial support; Xen Orchestra; hardware reuse | Ecosystem certification, storage and backup design; specialized hardware; verify large-disk and lifecycle requirements | Virtual Computing: vendor-hosted 550-VM VMware migration; FUJIFILM MicroChannel named migration [S14, S18] |
| 10 | **VergeOS** | Integrated virtualization, storage, virtual networking, snapshots | Stack consolidation; infrastructure management; named VMware migrations | Smaller-vendor durability, partner ecosystem, ISV certification, escape path and DR semantics | Alinsco Insurance: named completed VMware migration; vendor-hosted customer report [S15] |

### Market-share interpretation

No single **2026 worldwide enterprise server-virtualization market-share percentage** is responsibly comparable for all of these offerings based on the original disclosures collected. Segments such as HCI, cloud IaaS and server virtualization have different denominators. Selling to a customer, operating a server, licensing cores and hosting a VM do not measure the same thing. Treat market-share cells as **not established on a comparable basis**, rather than conclude a vendor has zero adoption. Gartner's public coverage and selected audited revenue/customer figures offer stronger *presence* evidence than unsourced market-share rankings. [S01–S03]

---

## 4. Detailed competitive dossiers

### 4.1 Nutanix Cloud Infrastructure / AHV

**Documented:** Nutanix's FY2026 10-K reports over 32,000 end customers at July 31, 2026, subject to its definition that an organization can count more than once for subsidiaries/divisions. Its customer story says MSIG Asia, motivated partly by VMware licensing costs, transitioned approximately 2,000 VMs to Nutanix AHV by April 2025. [S03, S06]

**Assessment:** Among the more credible enterprise replacements for a substantial vSphere/vSAN estate, especially where an HCI architecture and unified operations model are desired. The customer example is evidence of production migration, but not a global success rate or savings guarantee. Verify applications, storage performance, GPU needs, network security, DR tooling, end-to-end TCO and contract terms.

**Key trade-off:** Replacing VMware vendor concentration with a new tightly integrated platform can reduce some operational layers while increasing dependency on Nutanix's software and compatible hardware ecosystem.

### 4.2 Microsoft Hyper-V and Azure Local

**Documented:** Microsoft documents live migration and clustering for Hyper-V and an Azure Migrate process for VMware VMs to Azure Local. Its release notes state VMware-to-Azure-Local migration became generally available in October 2025. Azure Local migration requires coordinated source/target appliances; Microsoft documents third-party migration options as well. [S07, S08]

**Assessment:** Highly relevant for Windows-oriented corporate application estates, regional datacenters and hybrid/cloud-governed environments. Needs careful distinction between standalone Hyper-V licensing and Azure Local subscription/service requirements.

**Key trade-off:** Familiarity for Microsoft workloads and tools does not establish free migration, one-for-one operational equivalence, or support for all regulated applications and devices.

### 4.3 Red Hat OpenShift Virtualization

**Documented:** Red Hat states OpenShift Virtualization runs VM workloads alongside containers and supplies a migration toolkit that can migrate from VMware vSphere, RHV and OpenStack. [S09]

**Assessment:** Particularly viable when the target operating model already centers on OpenShift/Kubernetes and the organization wants to converge VM and container operations. A first phase could include Linux business applications and selected non-production workloads.

**Key trade-off:** Organizations without OpenShift expertise may trade VMware administration for a substantially new platform operations model. Backup, storage, networking and specialized application compatibility cannot be assumed.

### 4.4 HPE Morpheus VM Essentials / HVM

**Documented:** HPE's technical QuickSpecs describe HVM KVM, HA, live migration, external storage and a unified manager for HVM and VMware; product documentation describes bulk migration from vCenter to HVM clusters. [S10]

**Assessment:** A useful migration bridge where organizations need a gradual replacement or a mixed-hypervisor operational model rather than a one-time cutover. It may be especially relevant where HPE infrastructure, support and procurement relationships already exist.

**Key trade-off:** The offering should be tested as the particular **VM Essentials** SKU, not confused with higher-tier Morpheus capabilities or with older Morpheus cloud-management customer references. Validate support for NSX-type controls, DR and desired vSAN replacement.

### 4.5 Proxmox Virtual Environment

**Documented:** Official product documentation details KVM, LXC, clustered HA, live migration, software-defined networking, Ceph storage, REST API and Proxmox Backup Server. Its September 2026 announcement states more than 2.3 million active Proxmox VE servers and 24/7 vendor-direct enterprise support effective October 19, 2026; the announcement was discovered on the official site but **could not be reopened directly** in the research session. [S11, S12]

**Assessment:** A technically serious alternative, particularly for Linux-capable teams, research compute, development environments and defined enterprise clusters. It cannot be dismissed simply because it is open source. Nevertheless, deployment count is not enterprise penetration, and regulated vendors may support only nominated virtualization platforms.

**Key trade-off:** Lower software licensing exposure may be offset by greater integration, staffing, support and specialized certification burden.

### 4.6 Oracle Linux Virtualization Manager

**Documented:** Oracle documents an Oracle Linux KVM/oVirt-based management stack with host/VM management, storage/network domains, cluster HA and live migration. Oracle's lifecycle pages identify version 4.5 on Oracle Linux 9 as released August 2026. [S13]

**Assessment:** Relevant to Oracle and Linux application estates when vendor support, processor licensing and Linux platform alignment are material. It should not be assumed that KVM automatically satisfies every Oracle application certification or licensing requirement; these require exact contractual and ISV validation.

**Key trade-off:** More modular than VMware VCF, but requires integration of additional cloud-operations, DR and networking functions.

### 4.7 Canonical MicroCloud / OpenStack

**Documented:** Canonical's Tennessee Tech case reports a 10-node MicroCloud environment and approximately 1,700 production VMs rebuilt/migrated in under four weeks. Canonical announced new MicroCloud and LXD LTS releases in October 2026. [S16, S19]

**Assessment:** Credible for sovereign, campus/research and infrastructure automation scenarios where open systems and cloud primitives are priorities. Distinguish MicroCloud's lightweight cluster approach from full OpenStack's infrastructure-service complexity.

**Key trade-off:** The organization assumes architecture and integration responsibilities that may be bundled or productized in VMware/Nutanix, unless a managed Canonical deployment is contracted.

### 4.8 Scale Computing Platform / HyperCore

**Documented:** Scale Computing documents a migration product supporting VMware, Hyper-V and others. Its published customer examples and awards demonstrate commercial use for distributed sites, but no comparable audited global installed base was verified. [S17]

**Assessment:** A credible evaluation option for distributed manufacturing and remote sites with limited on-site IT staff. Generalizing edge deployments to an entire global datacenter estate would overstate the evidence.

**Key trade-off:** Integrated simplicity may constrain specialized hardware, network overlays, scale-out architecture and some enterprise tooling choices.

### 4.9 Vates VMS / XCP-ng

**Documented:** Vates reports Virtual Computing migrated 550 VMware VMs to its platform, with attributable testimony from the CTO. FUJIFILM MicroChannel also describes replacing VMware with Vates VMS. Both sources were opened; they are vendor-hosted customer statements, not third-party audits. [S14, S18]

**Assessment:** A credible commercially supported open-source alternative for defined virtualization estates and service providers, including cases with hundreds of VMs. Enterprise teams should test support responsiveness, large-disks, backup compatibility, guest drivers and multi-site DR.

**Key trade-off:** More flexibility may require assembling an ecosystem that VMware customers obtain in integrated product/support packages.

### 4.10 VergeOS

**Documented:** VergeIO's January 2026 press release quotes Alinsco Insurance's CIO and says Alinsco completed migration from VMware on VxRail to VergeOS. Named customer stories include other migrations, but disclosures remain vendor-selected. [S15]

**Assessment:** Relevant where replacing separate hypervisor, SAN/storage and networking products in one project could simplify the operating model. Particularly worth exploring for well-bounded private-cloud or service-provider requirements.

**Key trade-off:** Smaller supplier scale and tighter all-in-one integration increase the importance of financial durability, interop, exit portability, supported guest application lists and independent proof of recoverability.

---

## 5. Verified migration and adoption examples: what the cases show

| Source customer | Alternative | Reported result | Evidence grade | What it does **not** prove |
|---|---|---|---|---|
| MSIG Asia | Nutanix AHV | ~2,000 VMs moved from VMware to AHV by Apr 2025 | Vendor-hosted customer testimony [S06] | Nutanix global conversion rate, universal TCO |
| Virtual Computing | Vates VMS | 550 VMs reportedly migrated from VMware by Apr 2026 | Vendor-hosted CTO-attributed case [S14] | All regulated workloads transferable |
| FUJIFILM MicroChannel | Vates VMS | VMware→XCP-ng transition described with named technical leadership | Vendor-hosted customer testimony [S18] | Estate-wide quantitative penetration |
| Alinsco Insurance | VergeOS | Complete VMware/VxRail environment migration in documented operations; 2026 public claim | Vendor-hosted named CIO claim [S15] | Broad suitability for large global biopharma |
| Tennessee Tech University | Canonical MicroCloud | ~1,700 production VMs rebuilt/migrated, 10 nodes, <4 weeks | Canonical-hosted named customer case [S16] | That VMware specifically was the source hypervisor |
| Public Proxmox customer references | Proxmox VE | Named production customers and selected VMware displacement cases | Vendor-selected case directory [S20] | Verified active customer denominator or global share |

**Analyst interpretation:** Displacement is real and technically possible. Evidence is not yet sufficient to generalize the sample to overall market share or assert every VCF functionality can be replaced with one vendor.

---

## 5A. Verified competitor publications describing moves away from VMware

This register answers the specific research question: **Does the competing platform publisher identify a named customer moving from VMware to its product?** A vendor-owned source can verify that a named claim was published and can carry an attributable customer interview. It is not by itself an independent audit of performance, economics, or estate-wide exit.

| Alternative | Named customer / public original | Reported migration and scope | Source and inspection status | Evidence qualification |
|---|---|---|---|---|
| **Nutanix AHV** | MSIG Asia | Moved **approximately 2,000 VMs** from VMware to Nutanix AHV by Apr 2025; commercial concerns cited | [Nutanix customer story, S21](https://www.nutanix.com/company/customers/msig-asia), **opened and inspected** | Supplier-hosted named case, quoted customer. Applies to MSIG Asia, not entire parent group. |
| **Nutanix AHV** | IHMA (microbiology/life sciences) | IT director reports shifting **99 VMs** from VMware to Nutanix AHV using Move, with a Windows-driver issue during conversion | [Nutanix IHMA story, S22](https://www.nutanix.com/company/customers/ihma), **opened/inspected in search; supporting passages found** | Supplier-hosted named customer. A useful regulated-adjacent lab case; no independent validation of all GxP workflows. |
| **Microsoft Azure Local** | CDW (provider's own estate) | **More than 800 non-production VMs** moved to Azure Local over four months | [Microsoft customer story, S23](https://www.microsoft.com/en/customers/story/23002-cdw-computers-azure/), **opened and inspected** | The customer story does **not** establish that all 800 came from VMware. It demonstrates deployment scale, not a quantified VMware exit. |
| **Microsoft Azure Local** | Product migration route, not a customer | VMware-to-Azure Local migration became generally available in Oct 2025; Sep 2026 update includes Arc resource retention | [Microsoft release record, S24](https://learn.microsoft.com/en-us/azure/azure-local/migrate/migrate-whats-new?view=azloc-2603), **opened and inspected** | Product capability. Customer adoption volume and OT support are separate questions. |
| **Red Hat OpenShift Virtualization** | Emirates NBD (bank) | Head of Cloud Compute reports program migrating **more than 9,000 VMs**, at an average **140 per night**, including payment/trading systems | [Red Hat customer statement, S25](https://www.redhat.com/en/engage/choose-your-best-path-for-virtualization-strategy), **opened and inspected** | Direct customer statement hosted by competitor. **9,000 = migration program scale**, not proven completed total. |
| **HPE Morpheus VM Essentials** | HPE's own engineering laboratories | HPE reports **more than 3,200 VMs migrated** as part of internal dual-platform engineering-lab modernization | [HPE internal implementation technical paper, S26](https://www.hpe.com/psnow/downloadDoc/Rethinking%20enterprise%20virtualization%20%E2%80%93%20Real-world%20results%20with%20HPE%20Morpheus%20VM%20Essentials%20Software-a00157471enw.pdf?contentDisposition=attachment&deepLink=&form=false&hf=regular&id=a00157471enw&isFutureVersion=true&isLinearized=false&originalObjectName=&prelaunchSection=&preview=false&print=&r=&section=&softrollSection=&ver=1), **indexed original, direct opening failed** | Supplier self-deployment; not an independent named customer; numerical result **not promoted to fully opened/verified**. |
| **Proxmox VE** | Estracom (Italian telecommunications provider) | Source reports transition of infrastructure containing **320 VMs** from VMware vCenter to Proxmox VE; migration took six weeks | [Proxmox case, S27](https://proxmox.com/en/about/about-us/stories/story/estracom), **opened and inspected** | Supplier-owned customer story; project scale and financial outcomes customer/vendor-reported. |
| **Proxmox VE** | HorizonIQ (US hosting provider) | Reports **over 300 VMs** migrated from VMware to Proxmox VE with Ceph | [Proxmox case, S28](https://proxmox.com/en/about/about-us/stories/story/horizoniq), **opened and inspected** | Supplier-owned customer story; reported percentage cost savings require customer-led validation. |
| **Proxmox VE** | Artec (precision manufacturing) | Named VMware-to-Proxmox manufacturing infrastructure replacement reported | [Proxmox case, S29](https://www.proxmox.com/en/about/about-us/stories/story/artec), **opened and inspected** | Important industrial reference, but **does not certify a specific OT software application**. |
| **Oracle Linux KVM / OLVM** | No named post-acquisition VMware-exit customer substantiated in reviewed official pages | Oracle publishes a **VMware vSphere → Oracle Linux KVM** documented migration procedure | [Oracle engineering article, S30](https://blogs.oracle.com/scoter/how-to-migrate-vmware-vsphere-to-oracle-linux-kvm), **opened and inspected** | Technical migration route **only**, not customer displacement evidence. |
| **Canonical MicroCloud/OpenStack** | No named post-acquisition VMware-exit customer substantiated in reviewed original pages | Canonical discusses VMware-to-OpenStack migration methods, including partner tooling | [Canonical discussion, S31](https://canonical.com/blog/multi-cloud-infrastructure-kubernetes-italy), official publisher reference | General migration capability, not named completion; do not classify Tennessee Tech as VMware exit without an explicit source. |
| **Scale Computing Platform** | No opened named VMware-exit case sufficiently substantiated in this review | Vendor describes migration tools and VMware-alternative proposition | Prior source S17 is an **indexed supplier datasheet** not a direct named customer migration | Do not invent successful named migration or claim universal industrial-software support. |
| **Vates VMS / XCP-ng** | Fujifilm MicroChannel (Australian technology services business) | Company's technical delivery manager describes implemented VMware-to-XCP-ng/Vates transition, with a controlled cutover | [Vates customer account, S32](https://vates.tech/blog/fujifilm-microchannel-what-a-well-planned-migration-can-change/), **opened and inspected** | Not the pharmaceutical Fujifilm group or evidence of pharma manufacturing migration. No disclosed comparable total VM count. |
| **VergeOS** | Alinsco Insurance | Vendor reports migration from VMware on VxRail to VergeOS, using existing VxRail hardware and a node-by-node strategy | [VergeIO press release, S33](https://www.verge.io/press-release/alinsco-insurance-completes-zero-downtimevmware-exit-with-vergeos/), **opened and inspected** | Named CIO/IT testimony, vendor-hosted. Reported “zero downtime” is not independently audited. |

**Other leads excluded from the fully inspected customer table:** Proxmox's AMANN 650-VM story (28 Oct 2026) was indexed but its exact page failed direct retrieval during this review; no full-source verified classification is assigned. Some VergeIO case-study pages likewise failed direct reopening; the opened VergeIO press release is used instead. HPE's internal migration paper was indexed but the PDF did not open directly. These are explicitly retained as access-limited leads, not cited as fully inspected original evidence.

**Technology/industry caution:** A customer migration to a supported hypervisor is evidence that the vendor's stack can host that **customer's disclosed workloads**; it is not confirmation that another organization can migrate its validated manufacturing, LIMS, historian, MES, SCADA or DCS deployments without support exceptions or requalification.

---

## 6. Technical viability for regulated biopharma: mandatory evaluation dimensions

A credible replacement decision must compare **capability completeness and operational transition**, not only hypervisor functionality or subscription costs.

| Dimension | Required evidence / test | Why relevant |
|---|---|---|
| Compute/guest support | Windows/Linux guest versions, virtual hardware, CPU compatibility, GPU/vGPU, host upgrade paths | Legacy scientific, lab, SAP and corporate workloads differ |
| Storage | SAN/NFS/iSCSI/FC/Ceph support, snapshots, latency, encryption, lifecycle operations | VM performance, storage resilience and workload certification |
| Network/security | Segmentation parity, virtual switching, firewall, NSX dependency mapping, identity integration | Isolation of regulated/manufacturing environments |
| High availability/DR | Host-failure recovery, multi-site failover, RPO/RTO tests, backup and restore drills | Business continuity and cyber resilience |
| Operational control | RBAC/SSO, change logs, configuration management, monitoring, upgrades, observability | Enterprise IT governance and audit trail |
| Vendor ecosystem | Exact support statements for SAP, databases, LIMS, MES, laboratory instruments, backup tools | A feature can work technically but be unsupported by an application vendor |
| Validation and compliance | Change-impact assessment, qualification, evidence capture, security review, disaster recovery qualification | GxP impact is workload-specific; no platform should be declared 'GxP-certified' globally |
| Migration execution | Discovery, dependencies, pilot conversions, downtime, rollback and restore procedures | A safe phased migration is more than copying virtual disks |
| Total economics | Subscription + hardware + professional services + tools + staffing + dual-run + recovery + exit costs | Price per core alone cannot establish TCO savings |
| Supplier durability | Support service levels, patch response, ecosystem strength, roadmap and portability | Long-lived enterprise/regulated systems need sustainable support |

**Useful practical segmentation (analyst proposal, not an empirical industry finding):** (A) dev/test and lab sandboxes; (B) Windows/Linux corporate VMs; (C) data services and SAP; (D) research/HPC/GPU; (E) validated manufacturing and OT. The same target architecture should not be presumed optimal for all five.

---

**Executive caution on application certification:** The industrial software author's documented support boundary always takes precedence over the general hypervisor vendor's product claims. VMware-to-competitor case studies do not certify software at another company's plant. See Report 04 for the leadership interpretation.

## 6A. Published OT and industrial-software virtualization support: what is actually available

**Answer:** Yes, industrial software publishers provide **product- and version-specific** virtualization support lists and compatibility documents. **No** verified cross-vendor universal “OT applications certified on all ten hypervisors” list was found in the original sources reviewed. A competitor claiming to host Windows/Linux guests does **not** imply a named industrial application vendor will support it.

### 6A.1 Application-vendor originals — concrete evidence (not an inferred compatibility matrix)

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

### 6A.2 Published compatibility catalogs from the ten competitor platforms

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

### 6A.3 OT acceptance gate for a candidate VMware replacement

Before choosing a competitor for a manufacturing or regulated environment, capture all of the following for **each application and version**: vendor name/product/build, validated guest OS and drivers, named supported hypervisor/version, host/hardware compatibility, VM image/device dependencies (USB dongles, serial, hardware passthrough), controller/field networking topology, clock accuracy, supported snapshots/backup and restore, availability architecture, downtime rules, customer support entitlement, and written change-impact/GxP requalification responsibility. Test restore and rollback; confirm the OEM will support an incident after cutover. Different sites may need different certifications.

---

## 7. Market position and viability: factual signals vs non-comparable metrics

| Metric | Public evidence | Appropriate interpretation |
|---|---|---|
| **Broadcom VCF purchasing** | >90% of the top 10,000 VMware customers reported purchasing VCF by Feb 2026 [S04] | Penetration of an existing selected cohort; not new customers, deployment or full VMware retention |
| **Nutanix customer organizations** | >32,000 end customers reported in FY2026 10-K [S03] | Broad vendor installed customer base, multiple products, possible subsidiary duplication |
| **Proxmox installations** | >2.3m active Proxmox VE servers claimed by vendor Sep 2026 [S12] | Host/install count; not customers, VM share or revenue share |
| **Gartner market coverage** | 17 vendors evaluated in Sept 2026 MQ/Critical Capabilities [S01, S02] | Competitive breadth; not vendors' percentages of revenue, cores, customers or VMs |
| **Named migrations** | MSIG, Virtual Computing, MicroChannel, Alinsco [S06, S14, S15, S18] | Real reported displacement examples with selective-publication bias |
| **Competitor financial revenue** | Nutanix SEC filings reflect whole-company sales; HPE/Microsoft/Oracle/IBM segment revenue spans far more than virtualization | Not a valid cross-vendor hypervisor-market-share numerator |

**Conclusion on share:** No sourced, comparable market-share percentage is asserted. A proprietary Gartner/IDC/Omdia dataset with a common market definition and denominator would be needed for defensible 2026 percentage comparisons. Even with that, installed VM share and contract customer share would remain different analyses.

---

## 8. Can these competitors realistically challenge Broadcom? Why and how?

**Yes, in separate pathways:**

1. **Replace a vSphere/vSAN estate with a supported integrated stack** — Nutanix AHV/NCI (and, for some infrastructures, VergeOS or HPE HVM) can compete by replacing more than the basic hypervisor. *Condition:* prove application, network, backup, storage and DR coverage.
2. **Use an existing enterprise operations ecosystem** — Hyper-V/Azure Local in Microsoft-centric estates, or Oracle Linux virtualization in Oracle/Linux estates, may reduce the need for a new toolchain. *Condition:* verify lifecycle, licensing and support for each workload.
3. **Converge VMs and containers** — OpenShift Virtualization may reduce duplicate VM/container operational platforms for a Red Hat-committed enterprise. *Condition:* gain Kubernetes operations capability, storage/data protection interoperability and valid application support.
4. **Adopt supported open infrastructure** — Proxmox, Canonical and Vates can offer greater architectural control, supported production deployments and alternatives to per-core VMware packaging. *Condition:* compensate for integration, ecosystem and operational obligations.
5. **Modernize edge/distributed compute selectively** — Scale Computing and other integrated platforms can compete at branch or plant-adjacent locations. *Condition:* validated edge device and application compatibility.
6. **Exit via cloud migration** — Native public-cloud rehosting/refactoring can retire portions of on-prem VMware entirely. *Condition:* public-cloud economics, residency, data flows and application modernization make sense; this is not a vSphere feature-for-feature swap.

**What competitors cannot be assumed to do automatically:** deliver all VMware Cloud Foundation functionality, migrate NSX policies transparently, preserve application-vendor certification, match long-term recovery requirements, or reduce lifecycle costs without considering dual run and migration risk.

### Executive-facing conclusion

> **The competitive threat to VMware is credible and segmented rather than one-dimensional.** Large enterprises have alternatives for substantial virtual-machine estates, and named customers have reported migrations. Nutanix, Microsoft and Red Hat provide broad enterprise platform approaches; HPE offers a phased coexistence path; open-source and integrated vendors expand the choice set. The strategic test is which VMware workloads can be reassigned to a demonstrably supported, resilient and economically defensible operating model. Higher Broadcom software revenue or large-account VCF purchasing does not settle that question.

---

## 9. Recommended evidence-gathering for a cloud leader (not a vendor choice)

Request a workload and dependency inventory with VM count by business-criticality, hypervisor integration, backup/DR, networks, guest OS, vendor certification, GPU, and GxP impact. Compare candidates against the same test scenarios. Require written ISV support confirmation, a supported hardware matrix, an end-to-end cutover/rollback plan, a three- to five-year risk-adjusted TCO model, and evidence of successfully recovered workloads. Document where the incumbent stays in place rather than forcing a binary migration decision.

**No platform recommendation can be made solely from public vendor marketing or selective customer references. For OT, the minimum admissible support evidence is an exact application vendor/version support statement or written ISV confirmation, not a hypervisor vendor feature list.** A justified executive decision can, however, identify feasible alternative architectures and a measured test plan.

---

## 10. Source and verification ledger (research cutoff 29 October 2026)

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

### Assurance limits

- Named customer cases generally come from suppliers, with attributable customer statements where noted; none was independently audited here.
- Public product documentation proves availability of a capability **in a documented configuration**, not universal compatibility or parity with a deployed VMware estate.
- Market-share figures were **not invented** to fill the gap in publicly comparable data.
- Source-access limitations are retained; some valid official links may be restricted by automated retrieval or later site updates.
- No claims are made that these ten are the ten largest vendors worldwide by customer count or revenue.
- This is a peer-intelligence shortlist and technical analysis, not procurement due diligence, regulatory validation or a benchmark of independent field testing.

**Research assurance conclusion (revised):** Ten alternatives assessed; OT compatibility reviewed against original Siemens, Rockwell, Schneider, AVEVA and Emerson documentation; named VMware-displacement cases traced to specific competitor-published reports; inaccessible sources explicitly downgraded; original publisher records used for all ten; sources explicitly labelled by retrieval and provenance; market share intentionally not asserted where the evidence is non-comparable. **Suitable as an evidence-qualified executive discussion paper, not a definitive 2026 vendor market-share census or platform certification.**

## Editorial corrections and remaining limits — V2.0 audit

1. **OT application support ≠ hypervisor compatibility.** Red Hat's certified partner directory covers infrastructure software and ISV applications, but does not automatically certify WinCC/FactoryTalk/DCS on OpenShift Virtualization. Likewise, Rockwell's general mention of Nutanix is not carte blanche for all AHV releases or FactoryTalk versions.
2. **Microsoft/CDW is not verified VMware displacement.** The original describes 800+ non-production VMs on Azure Local, but does not specify VMware as the source for each VM; it is retained as platform scale evidence only.
3. **HPE's 3,200-VM engineering-lab account is vendor self-evidence and access limited.** Original PDF was indexed but could not be reopened; do not count it as a third-party independently verified customer move.
4. **Canonical/Tennessee Tech is not represented as a VMware-exit case** without explicit customer-source proof of the prior hypervisor.
5. **Proxmox active server count (original S12) remains supplier-reported/indexed** and should not be interpreted as active customers, market share or revenue.
6. **No 2026 comparable market share percentages are claimed.** Customer count, licensed cores, installed hosts, commercial revenue and VM displacement are different units.
7. **The Siemens Desigo CC page and AMANN/Proacta Proxmox individual story pages failed direct reopening** in this audit. They remain access-limited leads, not a substitute for the opened Siemens/Rockwell/Schneider OT references.
8. **Only some OT products have publicly enumerated hypervisors.** A positive Windows/Linux guest-support statement is not a legally binding industrial ISV certification; exact versions and formal support conditions govern.

**Research cutoff and link verification:** 29 October 2026. Source accessibility reflects retrieval during this research pass and may change; direct-opening failure is recorded separately from whether an article was search-indexed. This report is a sourced technical peer assessment, not formal GxP qualification or OEM approval for plant control systems.

---

## Editorial release provenance (29 October 2026)

This is a **history-reconciled final editorial edition** assembled solely from METI research files created earlier in the same conversation. It does not represent new public-web source checking. Source-access statuses describe the **original research run**, not guaranteed present-day availability. See `00_README_AND_VERSION_MANIFEST.md` for source-file mapping, cross-document precedence, and quality limitations.
