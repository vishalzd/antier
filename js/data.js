// Antier Solutions - Complete Blockchain Solutions Data Structure

const blockchainData = {
    categories: [
        {
            id: 'supply-chain',
            name: 'Supply Chain & Provenance',
            slug: 'supply-chain',
            description: 'Traceability, transparency, and lifecycle tracking',
            icon: 'fa-boxes',
            color: '#3B82F6',
            solutionCount: 12,
            solutions: [
                {
                    id: 'product-provenance',
                    name: 'End-to-End Product Provenance',
                    slug: 'product-provenance',
                    shortDesc: 'Complete product journey tracking from origin to consumer',
                    example: 'IBM Food Trust, Walmart Food Safety',
                    industry: ['Food & Beverage', 'Retail'],
                    businessProblem: 'Consumers and regulators demand transparency about product origins, handling, and authenticity. Traditional supply chains lack visibility, making it difficult to trace contamination sources, verify ethical sourcing, or prove authenticity.',
                    solution: 'Blockchain-based provenance system that records every touchpoint in the product lifecycle—from raw material sourcing, manufacturing, quality checks, transportation, to retail delivery—creating an immutable audit trail.',
                    capabilities: [
                        'Origin verification and certification',
                        'Multi-party data sharing with permissioned access',
                        'Real-time location and status tracking',
                        'Automated compliance reporting',
                        'Consumer-facing QR code verification',
                        'Integration with IoT sensors and ERP systems'
                    ],
                    architecture: 'Hyperledger Fabric permissioned network with IoT integration, ERP connectors, and mobile verification interfaces',
                    industries: ['Food & Agriculture', 'Retail', 'Pharmaceuticals', 'Luxury Goods']
                },
                {
                    id: 'cold-chain-monitoring',
                    name: 'Cold-Chain Monitoring',
                    slug: 'cold-chain-monitoring',
                    shortDesc: 'Temperature-sensitive product integrity verification',
                    example: 'Modum, Pfizer vaccine tracking',
                    industry: ['Pharmaceuticals', 'Food & Beverage'],
                    businessProblem: 'Temperature-sensitive products like vaccines, biologics, and perishable foods lose efficacy or safety if cold-chain protocols are broken. Traditional monitoring relies on manual logs that can be altered or lost.',
                    solution: 'IoT-blockchain integration that automatically records temperature, humidity, and location data from refrigerated containers and vehicles, creating tamper-proof compliance records.',
                    capabilities: [
                        'Continuous IoT sensor data capture',
                        'Automated threshold breach alerts',
                        'Regulatory compliance documentation',
                        'Multi-stakeholder audit access',
                        'Smart contract-based quality gates',
                        'Insurance claim automation'
                    ],
                    architecture: 'IoT sensors → Edge gateways → Blockchain ledger (Hyperledger or Ethereum) → Stakeholder dashboards',
                    industries: ['Pharmaceuticals', 'Food & Beverage', 'Chemicals', 'Healthcare']
                },
                {
                    id: 'supplier-compliance',
                    name: 'Supplier Compliance Registry',
                    slug: 'supplier-compliance',
                    shortDesc: 'Verified supplier certifications and audit records',
                    example: 'Tradeshift, SAP Ariba blockchain extensions',
                    industry: ['Manufacturing', 'Automotive'],
                    businessProblem: 'Enterprises work with thousands of suppliers whose certifications (ISO, safety, environmental) must be verified. Manual verification is time-consuming, expensive, and prone to fraud.',
                    solution: 'Decentralized registry where suppliers maintain verified credentials, certifications, and audit results. Buyers can instantly verify supplier compliance without redundant audits.',
                    capabilities: [
                        'Digital credential issuance and verification',
                        'Audit trail for certification renewals',
                        'Automated compliance scoring',
                        'Third-party verifier integration',
                        'Supplier onboarding automation',
                        'Risk assessment dashboards'
                    ],
                    architecture: 'Verifiable Credentials (W3C standard) on permissioned blockchain with API access for procurement systems',
                    industries: ['Manufacturing', 'Automotive', 'Aerospace', 'Construction']
                },
                {
                    id: 'invoice-reconciliation',
                    name: 'Invoice Reconciliation Hub',
                    slug: 'invoice-reconciliation',
                    shortDesc: 'Automated three-way matching and dispute resolution',
                    example: 'Basware, Taulia blockchain networks',
                    industry: ['Finance', 'Manufacturing'],
                    businessProblem: 'Invoice discrepancies between purchase orders, goods receipts, and invoices cause payment delays, disputes, and working capital inefficiencies. Manual reconciliation is labor-intensive.',
                    solution: 'Shared ledger where buyers, suppliers, and logistics providers record POs, shipments, and invoices in real-time, enabling automated three-way matching and instant dispute identification.',
                    capabilities: [
                        'Automated three-way matching',
                        'Real-time discrepancy flagging',
                        'Smart contract payment triggers',
                        'Dispute resolution workflows',
                        'Working capital optimization',
                        'Supplier financing integration'
                    ],
                    architecture: 'Multi-party blockchain network with ERP integration and smart contract payment automation',
                    industries: ['Manufacturing', 'Retail', 'Automotive', 'Distribution']
                },
                {
                    id: 'container-visibility',
                    name: 'Container Visibility Platform',
                    slug: 'container-visibility',
                    shortDesc: 'End-to-end shipping container tracking and documentation',
                    example: 'TradeLens (Maersk + IBM), GSBN',
                    industry: ['Logistics', 'Maritime'],
                    businessProblem: 'Container shipping involves dozens of parties with fragmented information systems. Lack of visibility causes delays, disputes, and inefficient asset utilization.',
                    solution: 'Blockchain platform connecting ocean carriers, ports, customs, freight forwarders, and importers/exporters. All parties share a single source of truth for container status and documentation.',
                    capabilities: [
                        'Real-time container location tracking',
                        'Digital bill of lading',
                        'Customs clearance automation',
                        'Demurrage and detention management',
                        'Port congestion visibility',
                        'Document verification and sharing'
                    ],
                    architecture: 'Hyperledger Fabric network with IoT integration, document storage (IPFS), and API access for all stakeholders',
                    industries: ['Maritime Shipping', 'Logistics', 'International Trade', 'Ports']
                },
                {
                    id: 'parts-provenance',
                    name: 'Parts Provenance & Authentication',
                    slug: 'parts-provenance',
                    shortDesc: 'Counterfeit prevention and parts lifecycle tracking',
                    example: 'Everledger, Boeing blockchain pilots',
                    industry: ['Aerospace', 'Automotive'],
                    businessProblem: 'Counterfeit parts in aerospace and automotive cause safety risks and warranty issues. Tracking parts across complex supply chains and secondary markets is nearly impossible.',
                    solution: 'Digital twin for every critical part with blockchain-verified pedigree. Each part gets a unique digital identity tracking manufacturing, installation, maintenance, and ownership transfers.',
                    capabilities: [
                        'Digital part certification',
                        'Manufacturing pedigree verification',
                        'Maintenance history tracking',
                        'Counterfeit detection',
                        'Secondary market authentication',
                        'Recall management automation'
                    ],
                    architecture: 'Blockchain registry with unique part IDs (NFC/RFID), digital twins, and integration with MRO systems',
                    industries: ['Aerospace', 'Automotive', 'Defense', 'Industrial Equipment']
                },
                {
                    id: 'reverse-logistics',
                    name: 'Reverse Logistics Certification',
                    slug: 'reverse-logistics',
                    shortDesc: 'Returns, recycling, and circular economy tracking',
                    example: 'Chronicled, Circular Economy projects',
                    industry: ['Retail', 'Electronics'],
                    businessProblem: 'Product returns, recycling, and refurbishment lack transparency. Companies cannot prove environmental claims about circular economy practices. Fraud in returns is common.',
                    solution: 'Blockchain system tracking product returns, refurbishment status, component recycling, and material recovery, creating verified circular economy credentials.',
                    capabilities: [
                        'Return authorization and tracking',
                        'Refurbishment certification',
                        'Component recovery documentation',
                        'ESG reporting for circular economy',
                        'Fraud prevention in returns',
                        'Secondary market authentication'
                    ],
                    architecture: 'Blockchain ledger integrated with returns management systems, refurbishment workflows, and recycling partners',
                    industries: ['Electronics', 'Retail', 'Automotive', 'Fashion']
                },
                {
                    id: 'sustainability-traceability',
                    name: 'Sustainability Traceability',
                    slug: 'sustainability-traceability',
                    shortDesc: 'Verified ethical sourcing and sustainability claims',
                    example: 'Provenance.org, Textile Genesis',
                    industry: ['Fashion', 'Consumer Goods'],
                    businessProblem: 'Consumers demand proof of ethical sourcing and sustainability claims, but brands lack visibility into multi-tier supply chains. Greenwashing erodes trust.',
                    solution: 'Blockchain platform connecting farms, processors, manufacturers, and brands to verify sustainability claims (organic, fair trade, carbon neutral) with immutable evidence.',
                    capabilities: [
                        'Multi-tier supply chain mapping',
                        'Sustainability certification verification',
                        'Carbon footprint calculation',
                        'Fair labor practice documentation',
                        'Consumer transparency portal',
                        'ESG compliance reporting'
                    ],
                    architecture: 'Multi-party blockchain with document verification, IoT integration, and consumer-facing mobile apps',
                    industries: ['Fashion', 'Food & Beverage', 'Cosmetics', 'Consumer Goods']
                },
                {
                    id: 'asset-lifecycle-iot',
                    name: 'Asset Lifecycle & IoT Logs',
                    slug: 'asset-lifecycle-iot',
                    shortDesc: 'Complete asset history with IoT sensor data',
                    example: 'SAP Asset Intelligence Network, Siemens pilots',
                    industry: ['Manufacturing', 'Industrial'],
                    businessProblem: 'Industrial assets (turbines, machinery, vehicles) generate massive IoT data, but it is siloed or lost. Proving asset history for maintenance, resale, or warranty is difficult.',
                    solution: 'Blockchain-based digital passport for assets combining IoT telemetry, maintenance records, ownership transfers, and performance data in one immutable record.',
                    capabilities: [
                        'Continuous IoT data logging',
                        'Maintenance event recording',
                        'Performance analytics',
                        'Warranty and service verification',
                        'Asset transfer documentation',
                        'Predictive maintenance integration'
                    ],
                    architecture: 'IoT platform → Blockchain ledger → Asset management systems and analytics dashboards',
                    industries: ['Industrial Equipment', 'Energy', 'Transportation', 'Aviation']
                },
                {
                    id: 'trade-documentation',
                    name: 'Cross-Border Trade Documentation',
                    slug: 'trade-documentation',
                    shortDesc: 'Digital trade documents and customs automation',
                    example: 'Bolero, TradeLens, we.trade',
                    industry: ['International Trade', 'Logistics'],
                    businessProblem: 'International trade requires dozens of paper documents (bills of lading, certificates of origin, customs forms) that cause delays, fraud, and administrative costs.',
                    solution: 'Blockchain platform for digital trade documents accepted by customs authorities, banks, and trading partners. Smart contracts automate document verification and approvals.',
                    capabilities: [
                        'Digital bill of lading',
                        'Electronic certificate of origin',
                        'Automated customs declarations',
                        'Multi-party document sharing',
                        'Trade finance integration',
                        'Regulatory compliance verification'
                    ],
                    architecture: 'Permissioned blockchain with document tokenization, digital signatures, and integration with customs APIs',
                    industries: ['International Trade', 'Shipping', 'Customs', 'Trade Finance']
                },
                {
                    id: 'retail-inventory',
                    name: 'Retail Inventory Ledger',
                    slug: 'retail-inventory',
                    shortDesc: 'Real-time inventory sync across retail ecosystem',
                    example: 'Walmart blockchain, IBM Retail projects',
                    industry: ['Retail', 'E-commerce'],
                    businessProblem: 'Retailers, distributors, and suppliers have conflicting inventory data causing stockouts, overstocking, and poor customer experience. Real-time visibility is critical.',
                    solution: 'Shared blockchain ledger synchronizing inventory levels across warehouses, stores, and suppliers. Automated reordering and demand forecasting using verified data.',
                    capabilities: [
                        'Real-time inventory synchronization',
                        'Automated reorder triggers',
                        'Demand forecasting',
                        'Stockout prevention',
                        'Shelf-life management',
                        'Omnichannel inventory visibility'
                    ],
                    architecture: 'Blockchain network connecting retail POS, warehouse management, and supplier systems with real-time data sync',
                    industries: ['Retail', 'E-commerce', 'Distribution', 'CPG']
                },
                {
                    id: 'luxury-authentication',
                    name: 'Luxury Product Authentication',
                    slug: 'luxury-authentication',
                    shortDesc: 'Anti-counterfeiting for high-value goods',
                    example: 'Everledger, Aura Blockchain Consortium (LVMH)',
                    industry: ['Luxury Goods', 'Jewelry'],
                    businessProblem: 'Luxury brands lose billions to counterfeits. Buyers lack proof of authenticity, especially in secondary markets. Warranty and service history are hard to verify.',
                    solution: 'Digital certificates of authenticity on blockchain linked to physical products via NFC tags or QR codes. Complete ownership history and service records.',
                    capabilities: [
                        'Digital certificate of authenticity',
                        'NFC/QR code verification',
                        'Ownership transfer tracking',
                        'Service and repair history',
                        'Secondary market authentication',
                        'Brand protection and enforcement'
                    ],
                    architecture: 'Blockchain registry with NFC/RFID tags, mobile verification app, and integration with brand CRM systems',
                    industries: ['Luxury Fashion', 'Jewelry', 'Watches', 'Art & Collectibles']
                }
            ]
        },
        {
            id: 'finance',
            name: 'Trade Finance & Enterprise Finance',
            slug: 'finance',
            description: 'Trade finance, reconciliation, and treasury management',
            icon: 'fa-university',
            color: '#8B5CF6',
            solutionCount: 8,
            solutions: [
                {
                    id: 'trade-finance-platform',
                    name: 'Trade Finance Platform',
                    slug: 'trade-finance-platform',
                    shortDesc: 'Letters of credit and trade finance automation',
                    example: 'we.trade, Marco Polo Network, Contour',
                    industry: ['Banking', 'International Trade'],
                    businessProblem: 'Trade finance is paper-intensive, slow (7-10 days for LC processing), and prone to fraud. SMEs struggle to access trade finance. Manual processes cost billions in inefficiencies.',
                    solution: 'Blockchain platform connecting importers, exporters, banks, and customs for digital letters of credit, automated document verification, and smart contract-based payment release.',
                    capabilities: [
                        'Digital letter of credit issuance',
                        'Automated document compliance checking',
                        'Smart contract payment triggers',
                        'Multi-bank participation',
                        'Fraud prevention',
                        'SME financing access'
                    ],
                    architecture: 'Permissioned blockchain (R3 Corda or Hyperledger) with bank integration, document verification, and payment settlement',
                    industries: ['Banking', 'International Trade', 'Import/Export', 'Commodities']
                },
                {
                    id: 'intercompany-reconciliation',
                    name: 'Intercompany Reconciliation',
                    slug: 'intercompany-reconciliation',
                    shortDesc: 'Automated reconciliation for multinational corporations',
                    example: 'SAP Blockchain, Oracle Blockchain Cloud',
                    industry: ['Finance', 'Corporate'],
                    businessProblem: 'Large enterprises with multiple subsidiaries spend weeks reconciling intercompany transactions. Discrepancies delay financial close and increase audit costs.',
                    solution: 'Shared blockchain ledger where all subsidiaries record intercompany transactions. Real-time matching and automatic reconciliation eliminate manual effort.',
                    capabilities: [
                        'Real-time transaction recording',
                        'Automated matching and reconciliation',
                        'Discrepancy identification',
                        'Fast financial close',
                        'Audit trail maintenance',
                        'Multi-currency support'
                    ],
                    architecture: 'Private blockchain connecting subsidiary ERPs with automated reconciliation engine and financial reporting integration',
                    industries: ['Corporate Finance', 'Accounting', 'Multinational Enterprises']
                },
                {
                    id: 'treasury-visibility',
                    name: 'Treasury Visibility Platform',
                    slug: 'treasury-visibility',
                    shortDesc: 'Real-time cash position and liquidity management',
                    example: 'Bank treasury blockchain pilots, Swift gpi',
                    industry: ['Corporate Treasury', 'Banking'],
                    businessProblem: 'Corporate treasurers lack real-time visibility into cash positions across multiple banks and countries. Forecasting liquidity and optimizing cash is challenging.',
                    solution: 'Blockchain network connecting corporate accounts across banks providing real-time cash visibility, automated cash pooling, and liquidity forecasting.',
                    capabilities: [
                        'Real-time multi-bank cash visibility',
                        'Automated cash concentration',
                        'Liquidity forecasting',
                        'FX exposure management',
                        'Payment status tracking',
                        'Bank fee reconciliation'
                    ],
                    architecture: 'Permissioned blockchain network with bank APIs, treasury management system integration, and real-time analytics',
                    industries: ['Corporate Treasury', 'Banking', 'Multinational Corporations']
                },
                {
                    id: 'kyc-registry',
                    name: 'KYC Registry & Utility',
                    slug: 'kyc-registry',
                    shortDesc: 'Shared KYC verification for financial institutions',
                    example: 'R3 Corda KYC, SWIFT KYC Registry on blockchain',
                    industry: ['Banking', 'Financial Services'],
                    businessProblem: 'Banks duplicate KYC efforts for the same customers. KYC costs $500M+ annually for large banks. Onboarding takes weeks. Data silos prevent sharing verified KYC.',
                    solution: 'Shared blockchain registry where banks contribute and access verified KYC data. Customers control consent. Reduces duplication and speeds onboarding.',
                    capabilities: [
                        'Shared KYC verification',
                        'Customer consent management',
                        'Real-time KYC updates',
                        'Regulatory compliance',
                        'Audit trail',
                        'Cost reduction through sharing'
                    ],
                    architecture: 'Permissioned blockchain with encrypted KYC data, consent management, and bank integration APIs',
                    industries: ['Banking', 'Financial Services', 'Regulatory Compliance']
                },
                {
                    id: 'securities-lifecycle',
                    name: 'Securities Lifecycle Management',
                    slug: 'securities-lifecycle',
                    shortDesc: 'Issuance, trading, and settlement of digital securities',
                    example: 'Digital Asset (DAML), tZERO, Polymath',
                    industry: ['Capital Markets', 'Securities'],
                    businessProblem: 'Securities settlement takes T+2 days, involves multiple intermediaries, and has high operational costs. Corporate actions are manual and error-prone.',
                    solution: 'Blockchain-based securities platform enabling instant settlement, automated corporate actions, and reduced intermediaries. Tokenized securities with smart contract governance.',
                    capabilities: [
                        'Digital securities issuance',
                        'Instant trade settlement',
                        'Automated corporate actions',
                        'Dividend distribution',
                        'Compliance and regulatory reporting',
                        'Fractional ownership'
                    ],
                    architecture: 'Blockchain platform with smart contracts, securities tokenization, integration with market infrastructure and custodians',
                    industries: ['Capital Markets', 'Securities', 'Asset Management', 'Private Equity']
                },
                {
                    id: 'escrow-payments',
                    name: 'Smart Escrow & Conditional Payments',
                    slug: 'escrow-payments',
                    shortDesc: 'Automated escrow release based on conditions',
                    example: 'Enterprise smart contract platforms',
                    industry: ['Real Estate', 'M&A'],
                    businessProblem: 'Traditional escrow requires trusted intermediaries, is slow, and expensive. Conditional payment release based on milestones is manual and dispute-prone.',
                    solution: 'Smart contract-based escrow that automatically releases funds when pre-agreed conditions are met (verified on blockchain or via oracles). Reduces intermediary costs.',
                    capabilities: [
                        'Automated conditional payments',
                        'Milestone-based fund release',
                        'Multi-signature authorization',
                        'Dispute resolution workflows',
                        'Audit trail',
                        'Integration with legal and compliance'
                    ],
                    architecture: 'Smart contracts on permissioned blockchain with oracle integration for external data verification',
                    industries: ['Real Estate', 'M&A', 'Construction', 'Enterprise Contracts']
                },
                {
                    id: 'bank-guarantees',
                    name: 'Bank Guarantees & Letters of Credit',
                    slug: 'bank-guarantees',
                    shortDesc: 'Digital guarantees with instant verification',
                    example: 'MonetaGo, Contour network',
                    industry: ['Banking', 'Construction'],
                    businessProblem: 'Bank guarantees are paper-based, slow to verify, and subject to fraud (double-financing). Beneficiaries cannot instantly verify authenticity.',
                    solution: 'Blockchain registry of bank guarantees with instant verification. Prevents double-financing fraud and speeds up project execution.',
                    capabilities: [
                        'Digital guarantee issuance',
                        'Instant authenticity verification',
                        'Fraud prevention (double-financing)',
                        'Automated expiry management',
                        'Regulatory reporting',
                        'Multi-bank participation'
                    ],
                    architecture: 'Permissioned blockchain connecting issuing banks, beneficiaries, and regulators with verification APIs',
                    industries: ['Banking', 'Construction', 'Project Finance', 'Infrastructure']
                },
                {
                    id: 'syndicated-loans',
                    name: 'Syndicated Loan Management',
                    slug: 'syndicated-loans',
                    shortDesc: 'Multi-bank loan administration and settlement',
                    example: 'Finastra, SyndicateRoom blockchain pilots',
                    industry: ['Banking', 'Corporate Finance'],
                    businessProblem: 'Syndicated loans involve multiple banks sharing risk and servicing. Manual coordination causes settlement delays, discrepancies, and operational costs.',
                    solution: 'Blockchain platform where loan agents, participating banks, and borrowers share a single source of truth. Automated payment distribution and reporting.',
                    capabilities: [
                        'Loan syndication workflows',
                        'Automated payment distribution',
                        'Interest calculation and settlement',
                        'Voting and amendments',
                        'Regulatory reporting',
                        'Secondary market trading'
                    ],
                    architecture: 'Permissioned blockchain with smart contracts for payment distribution, integration with bank loan systems',
                    industries: ['Banking', 'Corporate Finance', 'Project Finance']
                }
            ]
        },
        {
            id: 'identity',
            name: 'Identity & Access',
            slug: 'identity',
            description: 'Decentralized identity and access management',
            icon: 'fa-fingerprint',
            color: '#10B981',
            solutionCount: 6,
            solutions: [
                {
                    id: 'decentralized-identity',
                    name: 'Decentralized Identity (SSI)',
                    slug: 'decentralized-identity',
                    shortDesc: 'Self-sovereign digital identity for employees and partners',
                    example: 'Microsoft Entra Verified ID, IBM Verify Credentials',
                    industry: ['Enterprise IT', 'Government'],
                    businessProblem: 'Employees and partners must manage dozens of credentials. Centralized identity systems are vulnerable to breaches. Onboarding and offboarding are manual and slow.',
                    solution: 'Self-sovereign identity (SSI) platform where individuals control their digital credentials. Organizations issue verifiable credentials; individuals present them without central registry.',
                    capabilities: [
                        'Verifiable credential issuance',
                        'Decentralized identity verification',
                        'Privacy-preserving authentication',
                        'Portable credentials across organizations',
                        'Automated onboarding/offboarding',
                        'Compliance with identity regulations'
                    ],
                    architecture: 'W3C Verifiable Credentials + DID standard on blockchain (Hyperledger Indy, Sovrin) with enterprise identity provider integration',
                    industries: ['Enterprise IT', 'Government', 'Healthcare', 'Education']
                },
                {
                    id: 'professional-credentials',
                    name: 'Professional Credentials Registry',
                    slug: 'professional-credentials',
                    shortDesc: 'Verified education, certifications, and work history',
                    example: 'Learning Machine (Hyland Credentials), Blockcerts',
                    industry: ['Education', 'HR'],
                    businessProblem: 'Employers spend weeks verifying education and professional credentials. Resume fraud is common. Credential verification is manual and expensive.',
                    solution: 'Blockchain registry where educational institutions and certification bodies issue digital credentials. Employers verify credentials instantly without contacting issuers.',
                    capabilities: [
                        'Digital credential issuance',
                        'Instant verification',
                        'Fraud prevention',
                        'Portable professional profile',
                        'Privacy-preserving selective disclosure',
                        'Integration with HR systems'
                    ],
                    architecture: 'Blockchain registry with W3C Verifiable Credentials, integration with learning management systems and HR platforms',
                    industries: ['Education', 'Human Resources', 'Professional Services', 'Healthcare']
                },
                {
                    id: 'iot-device-identity',
                    name: 'IoT Device Identity & Management',
                    slug: 'iot-device-identity',
                    shortDesc: 'Secure identity and lifecycle for IoT devices',
                    example: 'IOTA, Xage Security blockchain for IoT',
                    industry: ['Manufacturing', 'Energy'],
                    businessProblem: 'Enterprises deploy millions of IoT devices with weak security and no identity management. Devices are vulnerable to hijacking. Firmware updates are insecure.',
                    solution: 'Blockchain-based device identity registry. Each device has a unique identity, cryptographic keys, and immutable audit log. Secure firmware updates and access control.',
                    capabilities: [
                        'Unique device identity',
                        'Device authentication',
                        'Secure firmware updates',
                        'Access control policies',
                        'Device lifecycle management',
                        'Audit trail for device actions'
                    ],
                    architecture: 'Blockchain registry for device identities with PKI integration, firmware update validation, and device management platform integration',
                    industries: ['Manufacturing', 'Energy', 'Smart Cities', 'Industrial IoT']
                },
                {
                    id: 'consent-management',
                    name: 'Consent & Data Sharing Ledger',
                    slug: 'consent-management',
                    shortDesc: 'GDPR-compliant consent tracking and data portability',
                    example: 'Consent management blockchain pilots',
                    industry: ['Healthcare', 'Financial Services'],
                    businessProblem: 'GDPR and privacy regulations require explicit consent for data use. Tracking consent across systems is difficult. Users cannot easily revoke consent or see who has their data.',
                    solution: 'Blockchain ledger recording all consent grants, revocations, and data access events. Users control consent; organizations prove compliance.',
                    capabilities: [
                        'Granular consent management',
                        'Consent audit trail',
                        'Real-time consent revocation',
                        'Data access tracking',
                        'GDPR compliance proof',
                        'User-controlled data portability'
                    ],
                    architecture: 'Blockchain ledger with consent smart contracts, integration with data management platforms and user portals',
                    industries: ['Healthcare', 'Financial Services', 'Retail', 'Digital Marketing']
                },
                {
                    id: 'access-audit-trail',
                    name: 'Enterprise Access Audit Trail',
                    slug: 'access-audit-trail',
                    shortDesc: 'Immutable audit logs for privileged access',
                    example: 'Guardtime, Blockchain audit solutions',
                    industry: ['Enterprise IT', 'Financial Services'],
                    businessProblem: 'Privileged users (admins, developers) can alter access logs, hiding security breaches. Audit logs are scattered and tamper-prone. Compliance audits are painful.',
                    solution: 'Blockchain-based immutable audit trail for all access events. Every login, permission change, and data access is recorded and tamper-proof.',
                    capabilities: [
                        'Immutable access logs',
                        'Real-time anomaly detection',
                        'Privileged user monitoring',
                        'Compliance reporting',
                        'Forensic investigation support',
                        'Integration with SIEM and IAM'
                    ],
                    architecture: 'Blockchain ledger receiving access logs from IAM, SIEM, and application systems with tamper-proof storage',
                    industries: ['Enterprise IT', 'Financial Services', 'Government', 'Healthcare']
                },
                {
                    id: 'visitor-access',
                    name: 'Visitor & Contractor Access Management',
                    slug: 'visitor-access',
                    shortDesc: 'Temporary credentials and facility access control',
                    example: 'Enterprise blockchain access pilots',
                    industry: ['Corporate', 'Manufacturing'],
                    businessProblem: 'Managing temporary access for visitors, contractors, and vendors is manual and insecure. Badge management is cumbersome. Audit trails are incomplete.',
                    solution: 'Blockchain-based temporary credential system. Visitors receive time-bound digital credentials. Access events are recorded immutably. Automated expiry and revocation.',
                    capabilities: [
                        'Temporary credential issuance',
                        'Time-bound access control',
                        'Mobile-based access',
                        'Real-time access monitoring',
                        'Automated expiry and revocation',
                        'Audit trail for compliance'
                    ],
                    architecture: 'Blockchain credential registry integrated with physical access control systems and visitor management platforms',
                    industries: ['Corporate', 'Manufacturing', 'Healthcare', 'Data Centers']
                }
            ]
        },
        {
            id: 'healthcare',
            name: 'Healthcare & Life Sciences',
            slug: 'healthcare',
            description: 'Patient data, pharma tracking, and clinical trials',
            icon: 'fa-heartbeat',
            color: '#EF4444',
            solutionCount: 5,
            solutions: [
                {
                    id: 'patient-data-federation',
                    name: 'Patient Data Federation',
                    slug: 'patient-data-federation',
                    shortDesc: 'Interoperable patient records across providers',
                    example: 'MedRec (MIT), Hashed Health projects',
                    industry: ['Healthcare'],
                    businessProblem: 'Patient records are siloed across hospitals, clinics, and labs. Patients lack control over their data. Care coordination suffers. HIPAA compliance is complex.',
                    solution: 'Blockchain-based patient data exchange where patients control access. Providers share records via permissioned access. Immutable audit trail ensures HIPAA compliance.',
                    capabilities: [
                        'Patient-controlled data access',
                        'Interoperable health records',
                        'Provider data sharing',
                        'HIPAA compliance audit trail',
                        'Emergency access protocols',
                        'Research data consent management'
                    ],
                    architecture: 'Permissioned blockchain with off-chain encrypted data storage (IPFS), patient consent management, and EHR integration',
                    industries: ['Healthcare', 'Hospitals', 'Clinics', 'Health Insurance']
                },
                {
                    id: 'pharma-supply-chain',
                    name: 'Pharmaceutical Supply Chain',
                    slug: 'pharma-supply-chain',
                    shortDesc: 'Drug traceability and anti-counterfeiting',
                    example: 'MediLedger, Pfizer blockchain pilots',
                    industry: ['Pharmaceuticals'],
                    businessProblem: 'Counterfeit drugs kill hundreds of thousands annually. Drug recalls are slow and inefficient. Track-and-trace regulations (DSCSA) require full supply chain visibility.',
                    solution: 'Blockchain tracking every drug unit from manufacturer to pharmacy. Serialization, authentication, and recall management. Regulatory compliance automation.',
                    capabilities: [
                        'Drug serialization and tracking',
                        'Counterfeit detection',
                        'Recall management',
                        'DSCSA compliance',
                        'Supply chain visibility',
                        'Automated authentication'
                    ],
                    architecture: 'Hyperledger-based supply chain with serialization integration, pharmacy verification, and regulatory reporting',
                    industries: ['Pharmaceuticals', 'Pharmacy', 'Healthcare Distribution']
                },
                {
                    id: 'clinical-trials',
                    name: 'Clinical Trial Data Integrity',
                    slug: 'clinical-trials',
                    shortDesc: 'Tamper-proof clinical trial data and patient consent',
                    example: 'Boehringer Ingelheim blockchain trials',
                    industry: ['Pharmaceuticals', 'Research'],
                    businessProblem: 'Clinical trial data manipulation undermines drug safety. Patient consent management is complex. Data sharing between trial sites is inefficient.',
                    solution: 'Blockchain platform recording clinical trial data, patient consent, and protocol changes immutably. Regulators audit data integrity. Patients control consent.',
                    capabilities: [
                        'Immutable trial data recording',
                        'Patient consent management',
                        'Protocol change tracking',
                        'Multi-site data sharing',
                        'Regulatory audit support',
                        'Real-time data integrity verification'
                    ],
                    architecture: 'Permissioned blockchain with encrypted data storage, patient consent smart contracts, integration with clinical trial management systems',
                    industries: ['Pharmaceuticals', 'Biotechnology', 'Clinical Research Organizations']
                },
                {
                    id: 'claims-automation',
                    name: 'Health Insurance Claims Automation',
                    slug: 'claims-automation',
                    shortDesc: 'Smart contract-based claims processing',
                    example: 'Anthem, UnitedHealthcare blockchain pilots',
                    industry: ['Health Insurance'],
                    businessProblem: 'Health insurance claims take weeks to process. Fraud costs $68B annually in the US. Manual adjudication is expensive and error-prone.',
                    solution: 'Blockchain platform with smart contracts for automated claims adjudication. Real-time eligibility verification and payment. Fraud detection through transparent history.',
                    capabilities: [
                        'Automated claims adjudication',
                        'Real-time eligibility verification',
                        'Smart contract payment triggers',
                        'Fraud detection',
                        'Provider credentialing',
                        'Audit trail for compliance'
                    ],
                    architecture: 'Blockchain network connecting payers, providers, and patients with smart contracts for claims logic and payment automation',
                    industries: ['Health Insurance', 'Healthcare Providers', 'Third-Party Administrators']
                },
                {
                    id: 'medical-device-lifecycle',
                    name: 'Medical Device Lifecycle',
                    slug: 'medical-device-lifecycle',
                    shortDesc: 'Device tracking, maintenance, and regulatory compliance',
                    example: 'FDA blockchain pilots, Chronicled MediLedger',
                    industry: ['Medical Devices'],
                    businessProblem: 'Medical device recalls affect millions. Device maintenance history is lost. Proving compliance with FDA regulations is manual. Counterfeit devices pose safety risks.',
                    solution: 'Blockchain-based device registry tracking manufacturing, distribution, usage, maintenance, and recalls. Digital device passport ensures authenticity and compliance.',
                    capabilities: [
                        'Device serialization and tracking',
                        'Maintenance history recording',
                        'Recall management',
                        'FDA compliance documentation',
                        'Counterfeit prevention',
                        'Asset management for hospitals'
                    ],
                    architecture: 'Blockchain registry with unique device identifiers, integration with hospital asset management and FDA reporting systems',
                    industries: ['Medical Devices', 'Hospitals', 'Healthcare Distribution']
                }
            ]
        },
        {
            id: 'energy-esg',
            name: 'Energy, Carbon & ESG',
            slug: 'energy-esg',
            description: 'REC tracking, carbon ledger, and ESG platforms',
            icon: 'fa-leaf',
            color: '#059669',
            solutionCount: 5,
            solutions: [
                {
                    id: 'rec-tracking',
                    name: 'Renewable Energy Certificate (REC) Tracking',
                    slug: 'rec-tracking',
                    shortDesc: 'Transparent renewable energy credit lifecycle',
                    example: 'Energy Web Chain, Power Ledger',
                    industry: ['Energy', 'Utilities'],
                    businessProblem: 'REC markets lack transparency. Double-counting of renewable energy credits is common. Tracking RECs across jurisdictions is fragmented.',
                    solution: 'Blockchain registry for REC issuance, transfer, and retirement. Each REC has a unique identity preventing double-counting. Real-time settlement and auditing.',
                    capabilities: [
                        'REC issuance and tokenization',
                        'Transfer and trading',
                        'Retirement verification',
                        'Double-counting prevention',
                        'Multi-jurisdictional tracking',
                        'Regulatory reporting'
                    ],
                    architecture: 'Blockchain platform (Energy Web Chain) with smart contracts for REC lifecycle, integration with energy markets and utilities',
                    industries: ['Energy', 'Utilities', 'Corporate Sustainability', 'Renewable Energy']
                },
                {
                    id: 'carbon-credit-ledger',
                    name: 'Carbon Credit Ledger',
                    slug: 'carbon-credit-ledger',
                    shortDesc: 'Verified carbon offset tracking and trading',
                    example: 'Toucan Protocol, Verra blockchain pilots',
                    industry: ['Carbon Markets', 'ESG'],
                    businessProblem: 'Carbon credit markets are opaque and fragmented. Verification is slow and expensive. Double-counting and fraud undermine market integrity.',
                    solution: 'Blockchain platform for carbon credit issuance, verification, trading, and retirement. Transparent lifecycle prevents double-counting. Automated compliance.',
                    capabilities: [
                        'Carbon credit tokenization',
                        'Project verification tracking',
                        'Trading and retirement',
                        'Double-counting prevention',
                        'Vintage and quality tracking',
                        'Corporate offset reporting'
                    ],
                    architecture: 'Blockchain registry with carbon credit tokenization, integration with verification bodies (Verra, Gold Standard) and carbon markets',
                    industries: ['Carbon Markets', 'Corporate Sustainability', 'Project Developers', 'ESG']
                },
                {
                    id: 'microgrid-settlement',
                    name: 'Microgrid Energy Settlement',
                    slug: 'microgrid-settlement',
                    shortDesc: 'Peer-to-peer energy trading and settlement',
                    example: 'LO3 Energy, Power Ledger microgrids',
                    industry: ['Energy', 'Renewable Energy'],
                    businessProblem: 'Microgrids with distributed solar and storage need real-time energy trading. Traditional utility billing is too slow and centralized for peer-to-peer transactions.',
                    solution: 'Blockchain-based energy marketplace for microgrid participants to trade excess solar energy. Smart meters feed data; smart contracts automate settlement.',
                    capabilities: [
                        'Peer-to-peer energy trading',
                        'Real-time metering integration',
                        'Automated settlement',
                        'Dynamic pricing',
                        'Grid balancing optimization',
                        'Renewable energy incentives'
                    ],
                    architecture: 'Blockchain platform with smart contracts for energy trading, integration with smart meters and grid management systems',
                    industries: ['Energy', 'Renewable Energy', 'Smart Cities', 'Utilities']
                },
                {
                    id: 'esg-data-registry',
                    name: 'ESG Data Registry',
                    slug: 'esg-data-registry',
                    shortDesc: 'Verified ESG metrics and sustainability reporting',
                    example: 'IBM Blockchain for ESG, enterprise pilots',
                    industry: ['Corporate', 'ESG'],
                    businessProblem: 'ESG reporting lacks standardization and transparency. Data is self-reported and hard to verify. Investors and regulators demand proof. Greenwashing damages credibility.',
                    solution: 'Blockchain platform aggregating verified ESG data from multiple sources (IoT, suppliers, auditors). Transparent metrics with audit trails. Automated reporting.',
                    capabilities: [
                        'Multi-source ESG data aggregation',
                        'Third-party verification',
                        'Automated ESG reporting',
                        'Supply chain sustainability tracking',
                        'Investor transparency',
                        'Regulatory compliance'
                    ],
                    architecture: 'Blockchain ledger with IoT integration, third-party verifier APIs, and ESG reporting framework integration (GRI, SASB)',
                    industries: ['Corporate', 'Investment Management', 'Supply Chain', 'Regulatory']
                },
                {
                    id: 'scope3-emissions',
                    name: 'Scope 3 Emissions Tracking',
                    slug: 'scope3-emissions',
                    shortDesc: 'Supply chain carbon footprint calculation',
                    example: 'IBM Environmental Intelligence Suite, SAP Product Footprint Management',
                    industry: ['Manufacturing', 'Retail'],
                    businessProblem: 'Scope 3 emissions (supply chain) represent 80%+ of corporate carbon footprints but are nearly impossible to measure. Suppliers lack visibility and incentives to share data.',
                    solution: 'Blockchain platform where suppliers share verified carbon data. Product-level carbon footprints calculated across supply tiers. Incentivized data sharing.',
                    capabilities: [
                        'Multi-tier supply chain carbon tracking',
                        'Product-level carbon footprints',
                        'Supplier data verification',
                        'Automated calculation',
                        'Carbon reduction incentives',
                        'Regulatory compliance reporting'
                    ],
                    architecture: 'Blockchain network connecting suppliers with carbon calculation engines, IoT integration, and corporate sustainability platforms',
                    industries: ['Manufacturing', 'Retail', 'Food & Beverage', 'Fashion']
                }
            ]
        },
        {
            id: 'insurance',
            name: 'Insurance & Risk',
            slug: 'insurance',
            description: 'Parametric insurance and fraud prevention',
            icon: 'fa-shield-alt',
            color: '#F59E0B',
            solutionCount: 4,
            solutions: [
                {
                    id: 'parametric-insurance',
                    name: 'Parametric Insurance Platform',
                    slug: 'parametric-insurance',
                    shortDesc: 'Automated claims payout based on triggers',
                    example: 'Etherisc, Arbol climate insurance',
                    industry: ['Insurance'],
                    businessProblem: 'Traditional insurance claims are slow, subjective, and dispute-prone. Parametric triggers (weather, flight delays) are ideal for automation but lack trusted data sources.',
                    solution: 'Smart contract-based insurance policies that automatically pay out when predefined conditions are met (verified by oracles). Instant claims, no disputes.',
                    capabilities: [
                        'Automated claims triggers',
                        'Oracle integration for data feeds',
                        'Instant payout processing',
                        'Policy customization',
                        'Fraud prevention',
                        'Regulatory compliance'
                    ],
                    architecture: 'Smart contracts on blockchain with oracle integration (Chainlink, weather APIs) for trigger verification and payment automation',
                    industries: ['Insurance', 'Agriculture', 'Travel', 'Catastrophe Insurance']
                },
                {
                    id: 'fraud-prevention-registry',
                    name: 'Insurance Fraud Prevention Registry',
                    slug: 'fraud-prevention-registry',
                    shortDesc: 'Shared fraud detection across insurers',
                    example: 'Coalition Against Insurance Fraud blockchain pilots',
                    industry: ['Insurance'],
                    businessProblem: 'Insurance fraud costs $80B annually. Fraudsters exploit data silos between insurers. Claim history is fragmented. Fraud detection is reactive.',
                    solution: 'Blockchain-based fraud registry where insurers share anonymized claim patterns and flagged entities. Real-time fraud detection without sharing PII.',
                    capabilities: [
                        'Shared fraud intelligence',
                        'Privacy-preserving data sharing',
                        'Real-time fraud detection',
                        'Multi-insurer collaboration',
                        'Pattern recognition',
                        'Regulatory compliance'
                    ],
                    architecture: 'Permissioned blockchain with privacy-preserving protocols (zero-knowledge proofs), integration with insurer claim systems',
                    industries: ['Insurance', 'Healthcare Insurance', 'Auto Insurance', 'Property Insurance']
                },
                {
                    id: 'reinsurance-settlement',
                    name: 'Reinsurance Settlement Platform',
                    slug: 'reinsurance-settlement',
                    shortDesc: 'Automated reinsurance claims and reconciliation',
                    example: 'B3i (Blockchain Insurance Industry Initiative)',
                    industry: ['Reinsurance'],
                    businessProblem: 'Reinsurance involves complex multi-party contracts with manual reconciliation. Claims settlement takes months. Data exchange is fragmented and error-prone.',
                    solution: 'Blockchain platform connecting insurers and reinsurers with smart contracts for automated settlement. Real-time data exchange and reconciliation.',
                    capabilities: [
                        'Smart contract-based treaties',
                        'Automated claims settlement',
                        'Real-time reconciliation',
                        'Multi-party data sharing',
                        'Regulatory reporting',
                        'Dispute resolution'
                    ],
                    architecture: 'Permissioned blockchain (R3 Corda) with smart contracts for reinsurance logic, integration with insurer and reinsurer systems',
                    industries: ['Reinsurance', 'Insurance', 'Risk Management']
                },
                {
                    id: 'warranty-lifecycle',
                    name: 'Product Warranty Lifecycle',
                    slug: 'warranty-lifecycle',
                    shortDesc: 'Transparent warranty claims and service history',
                    example: 'Manufacturer blockchain pilots',
                    industry: ['Manufacturing', 'Electronics'],
                    businessProblem: 'Warranty fraud costs manufacturers billions. Service history is lost when products change hands. Claim verification is manual and slow.',
                    solution: 'Blockchain-based product registry linking warranties to devices. Service history and ownership transfers recorded. Instant warranty verification and automated claims.',
                    capabilities: [
                        'Product registration and warranty linking',
                        'Service history tracking',
                        'Ownership transfer recording',
                        'Warranty claim automation',
                        'Fraud prevention',
                        'Extended warranty management'
                    ],
                    architecture: 'Blockchain registry with product identifiers (serial numbers, NFC), integration with manufacturer CRM and service systems',
                    industries: ['Electronics', 'Automotive', 'Appliances', 'Industrial Equipment']
                }
            ]
        },
        {
            id: 'real-estate-legal',
            name: 'Real Estate, Legal & Records',
            slug: 'real-estate-legal',
            description: 'Land registry, contracts, and digital notarization',
            icon: 'fa-building',
            color: '#6366F1',
            solutionCount: 5,
            solutions: [
                {
                    id: 'land-registry',
                    name: 'Digital Land Registry',
                    slug: 'land-registry',
                    shortDesc: 'Blockchain-based property title management',
                    example: 'Sweden Land Registry, Dubai Land Department',
                    industry: ['Real Estate', 'Government'],
                    businessProblem: 'Property title disputes cause billions in losses. Paper-based registries are vulnerable to fraud and natural disasters. Title verification is slow and expensive.',
                    solution: 'Blockchain land registry where property titles, ownership transfers, and liens are recorded immutably. Instant title verification and fraud prevention.',
                    capabilities: [
                        'Digital property titles',
                        'Ownership transfer recording',
                        'Lien and encumbrance tracking',
                        'Instant title verification',
                        'Fraud prevention',
                        'Integration with land authorities'
                    ],
                    architecture: 'Permissioned blockchain with government integration, property tokenization, and public verification portals',
                    industries: ['Real Estate', 'Government', 'Title Insurance', 'Banking']
                },
                {
                    id: 'smart-lease-contracts',
                    name: 'Smart Lease Contracts',
                    slug: 'smart-lease-contracts',
                    shortDesc: 'Automated rent payment and lease management',
                    example: 'Propy, RealBlocks',
                    industry: ['Real Estate', 'Property Management'],
                    businessProblem: 'Lease management is manual and error-prone. Rent collection and late payments cause cash flow issues. Dispute resolution is slow and expensive.',
                    solution: 'Smart contract-based leases with automated rent collection, late fee calculation, and escrow management. Transparent terms reduce disputes.',
                    capabilities: [
                        'Automated rent collection',
                        'Late fee calculation',
                        'Security deposit escrow',
                        'Lease term automation',
                        'Maintenance request tracking',
                        'Dispute resolution'
                    ],
                    architecture: 'Smart contracts on blockchain with payment integration, property management system APIs, and tenant portals',
                    industries: ['Real Estate', 'Property Management', 'Commercial Real Estate']
                },
                {
                    id: 'ip-licensing',
                    name: 'IP Licensing & Royalty Management',
                    slug: 'ip-licensing',
                    shortDesc: 'Automated royalty payments and usage tracking',
                    example: 'IPwe, Bernstein blockchain IP',
                    industry: ['Legal', 'Media'],
                    businessProblem: 'Royalty calculations are complex and opaque. IP licensing involves multiple parties with manual reconciliation. Usage tracking is difficult, especially for digital content.',
                    solution: 'Blockchain platform tracking IP usage and automating royalty calculations and payments. Smart contracts distribute payments to rights holders instantly.',
                    capabilities: [
                        'IP registration and timestamping',
                        'Usage tracking',
                        'Automated royalty calculation',
                        'Multi-party payment distribution',
                        'Licensing agreement management',
                        'Dispute resolution'
                    ],
                    architecture: 'Blockchain ledger with smart contracts for royalty logic, integration with content platforms and payment systems',
                    industries: ['Media & Entertainment', 'Publishing', 'Music', 'Software']
                },
                {
                    id: 'ma-audit-trail',
                    name: 'M&A Due Diligence Audit Trail',
                    slug: 'ma-audit-trail',
                    shortDesc: 'Immutable document trail for M&A transactions',
                    example: 'Legal blockchain pilots, OpenLaw',
                    industry: ['Legal', 'Corporate Finance'],
                    businessProblem: 'M&A due diligence involves thousands of documents with version control nightmares. Audit trails are incomplete. Document authenticity is hard to verify.',
                    solution: 'Blockchain platform where all due diligence documents are timestamped and hashed. Immutable audit trail shows who accessed what and when. Version control automated.',
                    capabilities: [
                        'Document timestamping and hashing',
                        'Immutable audit trail',
                        'Access control and tracking',
                        'Version control',
                        'Multi-party collaboration',
                        'Regulatory compliance'
                    ],
                    architecture: 'Blockchain ledger with document hashing (off-chain storage on IPFS), access control, and legal workflow integration',
                    industries: ['Legal', 'M&A', 'Corporate Finance', 'Private Equity']
                },
                {
                    id: 'digital-notarization',
                    name: 'Digital Notarization Service',
                    slug: 'digital-notarization',
                    shortDesc: 'Blockchain-based document certification',
                    example: 'Notarize.com blockchain, Apostille',
                    industry: ['Legal', 'Government'],
                    businessProblem: 'Traditional notarization requires physical presence, is slow, and vulnerable to fraud. Remote notarization lacks trust infrastructure.',
                    solution: 'Blockchain-based notarization where documents are timestamped, hashed, and certified by authorized notaries. Instant verification and cross-border recognition.',
                    capabilities: [
                        'Digital document certification',
                        'Notary identity verification',
                        'Timestamp proof',
                        'Instant verification',
                        'Cross-border recognition',
                        'Regulatory compliance'
                    ],
                    architecture: 'Blockchain ledger with document hashing, digital signatures, notary credentialing, and verification APIs',
                    industries: ['Legal', 'Government', 'Real Estate', 'International Trade']
                }
            ]
        },
        {
            id: 'telecom',
            name: 'Telecom & Data Sharing',
            slug: 'telecom',
            description: 'Roaming, consent management, and data clean rooms',
            icon: 'fa-signal',
            color: '#8B5CF6',
            solutionCount: 5,
            solutions: [
                {
                    id: 'roaming-settlement',
                    name: 'Roaming Settlement & Clearing',
                    slug: 'roaming-settlement',
                    shortDesc: 'Automated inter-carrier roaming reconciliation',
                    example: 'Clear (by GSMA), TBCASoft roaming blockchain',
                    industry: ['Telecommunications'],
                    businessProblem: 'International roaming settlement involves hundreds of carriers with manual reconciliation taking months. Discrepancies cause disputes and revenue leakage.',
                    solution: 'Blockchain platform where carriers record roaming events in real-time. Automated settlement and reconciliation. Smart contracts for discount and rate application.',
                    capabilities: [
                        'Real-time roaming event recording',
                        'Automated settlement',
                        'Discrepancy detection',
                        'Multi-carrier reconciliation',
                        'Smart contract rate application',
                        'Dispute resolution'
                    ],
                    architecture: 'Permissioned blockchain (Hyperledger) connecting carrier billing systems with smart contract settlement logic',
                    industries: ['Telecommunications', 'Mobile Operators']
                },
                {
                    id: 'number-portability',
                    name: 'Mobile Number Portability',
                    slug: 'number-portability',
                    shortDesc: 'Faster number porting with shared registry',
                    example: 'Telecom blockchain pilots',
                    industry: ['Telecommunications'],
                    businessProblem: 'Mobile number portability takes days and involves multiple parties. Centralized registries are single points of failure. Updates are slow and error-prone.',
                    solution: 'Blockchain-based number portability registry shared by all carriers. Real-time updates when numbers are ported. Instant routing table updates.',
                    capabilities: [
                        'Real-time number porting',
                        'Shared carrier registry',
                        'Routing table synchronization',
                        'Fraud prevention',
                        'Customer consent tracking',
                        'Regulatory compliance'
                    ],
                    architecture: 'Permissioned blockchain with carrier integration, routing updates via APIs, and regulatory reporting',
                    industries: ['Telecommunications', 'Mobile Operators', 'Regulatory Bodies']
                },
                {
                    id: 'ad-transparency',
                    name: 'Digital Advertising Transparency',
                    slug: 'ad-transparency',
                    shortDesc: 'Verified ad impressions and fraud prevention',
                    example: 'MetaX (adChain), IBM blockchain for advertising',
                    industry: ['Digital Advertising', 'Marketing'],
                    businessProblem: 'Digital ad fraud costs $65B annually. Ad impressions are unverifiable. Supply chain lacks transparency. Advertisers cannot verify if ads were actually shown to humans.',
                    solution: 'Blockchain platform recording every ad impression with verification. Publishers, ad networks, and advertisers share transparent data. Fraud detection and prevention.',
                    capabilities: [
                        'Verified ad impression recording',
                        'Bot and fraud detection',
                        'Supply chain transparency',
                        'Real-time campaign tracking',
                        'Automated payment reconciliation',
                        'Brand safety verification'
                    ],
                    architecture: 'Blockchain ledger with ad server integration, fraud detection algorithms, and advertiser dashboards',
                    industries: ['Digital Advertising', 'Media', 'Marketing Technology']
                },
                {
                    id: 'oss-bss-ledger',
                    name: 'OSS/BSS Data Ledger',
                    slug: 'oss-bss-ledger',
                    shortDesc: 'Shared operational and business support data',
                    example: 'Telecom blockchain consortia',
                    industry: ['Telecommunications'],
                    businessProblem: 'Telecom operations (OSS) and billing (BSS) systems across carriers and vendors are fragmented. Inter-carrier processes require manual data exchange.',
                    solution: 'Blockchain-based shared data layer for OSS/BSS data. Real-time synchronization of customer data, network events, and billing information across ecosystem.',
                    capabilities: [
                        'Real-time OSS/BSS data sharing',
                        'Customer data synchronization',
                        'Network event recording',
                        'Billing reconciliation',
                        'SLA verification',
                        'Multi-vendor coordination'
                    ],
                    architecture: 'Permissioned blockchain connecting carrier OSS/BSS systems with standardized data models and APIs',
                    industries: ['Telecommunications', 'Network Equipment Vendors', 'Service Providers']
                },
                {
                    id: 'data-clean-room',
                    name: 'Enterprise Data Clean Room',
                    slug: 'data-clean-room',
                    shortDesc: 'Privacy-preserving data collaboration',
                    example: 'Decentralized data collaboration platforms',
                    industry: ['Enterprise', 'Marketing'],
                    businessProblem: 'Enterprises want to collaborate on data analytics without exposing raw data. Privacy regulations prevent data sharing. Trusted third parties are expensive and vulnerable.',
                    solution: 'Blockchain-based data clean room where parties contribute encrypted data for joint analysis. Computation on encrypted data preserves privacy. Results shared, not raw data.',
                    capabilities: [
                        'Privacy-preserving data collaboration',
                        'Encrypted computation',
                        'Audit trail of data usage',
                        'Consent management',
                        'Result sharing without raw data exposure',
                        'Regulatory compliance'
                    ],
                    architecture: 'Blockchain with secure multi-party computation (MPC) or homomorphic encryption, integrated with enterprise data platforms',
                    industries: ['Financial Services', 'Healthcare', 'Marketing', 'Research']
                }
            ]
        }
    ]
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = blockchainData;
}