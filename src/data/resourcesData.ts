export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  img: string;
  sections: { heading: string; body: string }[];
  keyTakeaways: string[];
};

export type Download = {
  title: string;
  desc: string;
  size: string;
  format: string;
  type: 'Download' | 'Resource';
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-new-wage-code',
    category: 'New Labour Codes',
    title: 'Understanding the New Wage Code',
    excerpt: 'A comprehensive guide to how the new definitions of wages impact your salary structure, PF contributions, and total cost to company.',
    date: 'Oct 15, 2024',
    readTime: '7 min read',
    author: 'Maru Consultancy Team',
    img: '/assets/service-payroll.png',
    sections: [
      {
        heading: 'What Has Changed Under the Code on Wages?',
        body: 'The Code on Wages, 2019 — one of the four New Labour Codes — fundamentally redefines the concept of "wages." Previously, employers could structure salary packages with a disproportionately high allowance component (HRA, special allowance, transport, etc.) to keep the Basic + DA low, thereby reducing statutory contributions like PF, gratuity, and bonus.\n\nThe new definition mandates that Basic + DA must constitute at least 50% of the total gross wages. Any allowances exceeding 50% of gross wages will be treated as part of wages for the purpose of calculating all statutory deductions.',
      },
      {
        heading: 'Impact on Provident Fund Contributions',
        body: 'Under the current regime, PF is calculated at 12% of Basic + DA. With the new wage definition, if a company has structured salaries such that basic is only 20–30% of gross, they will be required to restructure. This will significantly increase both employer and employee PF contributions, impacting take-home pay and employer cost.\n\nFor example, an employee drawing ₹1,00,000 gross with ₹20,000 basic currently contributes ₹2,400/month to PF. Under the new code, with basic mandatory at ₹50,000, the contribution rises to ₹6,000/month — a 150% jump.',
      },
      {
        heading: 'Implications for Gratuity and Bonus',
        body: 'Gratuity under the Payment of Gratuity Act is calculated on the basis of "last drawn wages" — and with the redefined wage definition, this base will be significantly higher for most employees. Similarly, the Minimum Bonus under the Payment of Bonus Act (8.33% of wages) will be computed on the higher wage base.\n\nEmployers who have historically kept the basic low to minimize gratuity liability will face a direct impact on F&F settlements once the codes are enforced.',
      },
      {
        heading: 'What Should Employers Do Now?',
        body: 'The smart approach is to conduct a salary structure audit across your workforce before enforcement begins. Identify employees whose Basic + DA is below 50% of gross and model the cost impact. Work with your compliance advisor to design a transition plan that balances legal compliance with cost optimization and employee communication.\n\nThe transition can be managed through a combination of restructuring allowances, renegotiating CTC structures in new offers, and phasing the change over performance cycles.',
      },
    ],
    keyTakeaways: [
      'Basic + DA must now constitute at least 50% of gross wages',
      'PF, gratuity, and bonus calculations will all be impacted significantly',
      'Employers with low-basic salary structures face the highest exposure',
      'Conduct a salary structure audit before the codes come into force',
      'F&F settlements for long-tenured employees will be materially higher',
    ],
  },
  {
    slug: 'state-specific-leave-policies',
    category: 'Compliance',
    title: 'Navigating State-Specific Leave Policies',
    excerpt: 'Analyzing the variations in sick, casual, and earned leaves across different Indian states and how to build a compliant leave policy.',
    date: 'Oct 02, 2024',
    readTime: '6 min read',
    author: 'Maru Consultancy Team',
    img: '/assets/service-hr.png',
    sections: [
      {
        heading: 'Why Leave Policies Are More Complex Than You Think',
        body: 'Many HR professionals assume that a standard leave policy — 12 CLs, 12 SLs, 15 ELs — is compliant across India. In reality, leave entitlements under the Shops & Establishments Acts vary significantly across states, and a single policy applied nationally may result in under-compliance in several locations.\n\nIndia does not have a central Shops & Establishments Act. Each state has enacted its own legislation, with different leave quantum, carry-forward rules, encashment provisions, and qualifying periods.',
      },
      {
        heading: 'Key State-Wise Variations',
        body: 'Maharashtra: The Maharashtra Shops & Establishments (Regulation of Employment and Conditions of Service) Act, 2017 mandates 45 days of Earned Leave (EL) for every year worked — one of the highest in the country. Casual Leave is not separately mandated but is commonly offered as an industry practice.\n\nKarnataka: The Karnataka Shops & Commercial Establishments Act provides for 12 days Casual Leave, 12 days Sick Leave, and Earned Leave at 1 day for every 20 days worked (approximately 15 ELs per year).\n\nDelhi: Under the Delhi Shops & Establishments Act, employees are entitled to 12 days CL, 12 days SL, and EL at 1 day for every 18 working days (approximately 16 ELs per year).\n\nTamil Nadu: The Tamil Nadu Shops & Establishments Act mandates 12 days EL for the first year, and 1 day for every 20 days thereafter, with SL and CL at 12 days each.',
      },
      {
        heading: 'The Factories Act Leave Provisions',
        body: 'For factory workers, the Factories Act governs leave entitlements. Adult workers are entitled to 1 day of Earned Leave for every 20 days worked. Child workers are entitled to 1 day for every 15 days worked. The Act also allows for carry-forward of up to 30 days of earned leave.\n\nThis is separate from the Shops & Establishments provisions, and factory employers must ensure they are applying the right framework to their workforce.',
      },
      {
        heading: 'Building a Compliant Multi-State Leave Policy',
        body: 'The safest approach for multi-state employers is to build a leave policy that provides the maximum entitlement required under any applicable state law — and then apply it uniformly across all locations. This ensures compliance everywhere while simplifying policy administration.\n\nAlternatively, location-specific addendums can be used to reflect state-specific minimums. The key is to ensure your HRMS is configured to track and enforce these variations accurately, and that your employment contracts and HR policy manual reflect the correct state-wise entitlements.',
      },
    ],
    keyTakeaways: [
      'Leave entitlements vary significantly across Indian states under different Shops Acts',
      'Maharashtra mandates up to 45 EL days — one of the highest in India',
      'Factory workers are governed by the Factories Act, not the Shops Act',
      'Multi-state employers should apply the most generous entitlement uniformly',
      'HRMS configuration must reflect state-wise leave rules accurately',
    ],
  },
  {
    slug: 'preparing-for-labour-inspections',
    category: 'Labour Audit',
    title: 'Preparing for Labour Inspections',
    excerpt: 'Key statutory documents and registers you must maintain and keep updated before an unexpected factory inspection by authorities.',
    date: 'Sep 28, 2024',
    readTime: '8 min read',
    author: 'Maru Consultancy Team',
    img: '/assets/service-audits.png',
    sections: [
      {
        heading: 'The Reality of Labour Inspections in India',
        body: 'Labour inspections in India can be routine or surprise visits by Inspector-cum-Facilitators under the New Labour Codes or existing inspectors under the Factories Act, Shops Act, CLRA, EPF Act, and ESI Act. They can be triggered by a complaint, or can be part of a state-mandated inspection schedule.\n\nThe consequences of a failed inspection range from notices and penalties to prosecution of the occupier, manager, or HR head. In certain cases, the factory or establishment can be directed to shut down until compliance is achieved.',
      },
      {
        heading: 'Statutory Registers You Must Maintain',
        body: 'Under the Factories Act: Register of adult workers, Register of child workers (if any), Register of accidents, Register of dangerous occurrences, Register of leave with wages, Muster Roll.\n\nUnder CLRA: Register of contractors, Register of workmen employed by contractor, Muster Roll, Register of wages, Register of deductions, Register of overtime, Register of fines.\n\nUnder EPF Act: Register of establishments, Monthly wage register, PF contribution register, ECR records.\n\nUnder ESI Act: Attendance register, Wage register, Accident register, ESI contribution records.\n\nAll registers must be legible, current, and available for inspection at the establishment at all times.',
      },
      {
        heading: 'Licences and Certificates to Keep Current',
        body: 'Factory Licence: Must be renewed annually before the 31st of December preceding the year of operation. An expired factory licence is a serious violation.\n\nContract Labour Registration Certificate: Must be obtained by any principal employer using 20 or more contract workers, and renewed as required.\n\nShop & Establishment Registration: Must be prominently displayed at the establishment and renewed as per state-specific timelines.\n\nBoiler Certificate: If your factory operates a boiler, a valid boiler certificate is mandatory and must be available for inspection.',
      },
      {
        heading: 'Pre-Inspection Audit Checklist',
        body: 'A structured pre-inspection audit should cover: (1) Review all statutory registers for completeness and accuracy, (2) Verify all licences and certificates are valid and prominently displayed, (3) Confirm all statutory contributions — PF, ESIC, PT, LWF — are paid and returns filed, (4) Audit employment documentation for all workers — including contract workers, (5) Review welfare provisions — canteen, restrooms, creche, first aid, safety equipment.\n\nThe goal is to be in a state of perpetual inspection-readiness, not to scramble when an inspector arrives.',
      },
    ],
    keyTakeaways: [
      'Labour inspections can be surprise visits — be perpetually inspection-ready',
      'All statutory registers must be maintained, current, and available on-site',
      'An expired factory licence can result in prosecution and shutdown',
      'Contract workers bring their own compliance obligations for principal employers',
      'Pre-inspection audits should cover registers, licences, contributions, and welfare',
    ],
  },
  {
    slug: 'posh-act-compliance-essentials',
    category: 'POSH',
    title: 'POSH Act Compliance Essentials',
    excerpt: 'Everything employers need to know about the Prevention of Sexual Harassment Act, ICC constitution requirements, and annual reporting.',
    date: 'Sep 10, 2024',
    readTime: '6 min read',
    author: 'Maru Consultancy Team',
    img: '/assets/service-hr.png',
    sections: [
      {
        heading: 'What Is the POSH Act and Who Does It Apply To?',
        body: 'The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 — commonly known as the POSH Act — applies to every employer in India with 10 or more employees. The Act covers all women employees, including permanent, temporary, contractual, apprentices, interns, and visitors.\n\nNon-compliance with the POSH Act can result in a fine of up to ₹50,000 for the first violation, and cancellation of the business licence for repeated violations. Every employer is legally obligated to comply.',
      },
      {
        heading: 'Constituting the Internal Complaints Committee (ICC)',
        body: 'Every employer covered under the Act must constitute an Internal Complaints Committee (ICC) at each office or branch with 10 or more employees. The ICC must have:\n\n• A Presiding Officer — a senior woman employee at the workplace\n• At least two members from employees committed to the cause of women or with experience in social work or legal knowledge\n• One external member from an NGO or association committed to the cause of women\n\nThe external member must be paid fees for their services. The ICC must be reconstituted every three years. Any change in composition must be formally notified.',
      },
      {
        heading: 'Mandatory Annual Activities',
        body: 'Beyond constituting the ICC, employers must conduct mandatory awareness programs for all employees at regular intervals. These programs must educate employees on what constitutes sexual harassment, how to file a complaint, and what the ICC process involves.\n\nAnnual POSH Training for ICC members is critical — members must understand how to conduct a fair inquiry, maintain confidentiality, and compile the annual report.\n\nThe Annual Report under POSH must be submitted to the District Officer by January 31 each year, covering number of complaints received, disposed of, and pending from the previous calendar year.',
      },
      {
        heading: 'The POSH Policy — What It Must Contain',
        body: 'A legally compliant POSH Policy must include: (1) A clear definition of sexual harassment aligned with the Act, (2) Coverage — who the policy applies to, (3) Complaint procedure — how to file, who to file with, timelines, (4) ICC composition and contact details, (5) Confidentiality provisions, (6) Protection against false complaints and retaliation, (7) Consequences for violation.\n\nThe policy must be displayed prominently at all workplaces, shared with all employees at joining, and made available digitally.',
      },
    ],
    keyTakeaways: [
      'POSH Act applies to every employer with 10 or more employees in India',
      'An ICC must be constituted at each office with 10+ employees',
      'External ICC member from an NGO is mandatory — not optional',
      'Annual POSH training for employees and ICC members is required',
      'Annual report must be submitted to the District Officer by January 31',
    ],
  },
  {
    slug: 'role-of-esic-in-healthcare-benefits',
    category: 'ESI & PF',
    title: 'Role of ESIC in Healthcare Benefits',
    excerpt: 'How the Employees State Insurance Corporation provides comprehensive medical coverage and cash benefits to covered workers and their families.',
    date: 'Mar 28, 2025',
    readTime: '5 min read',
    author: 'Maru Consultancy Team',
    img: '/assets/service-statutory.png',
    sections: [
      {
        heading: 'What Is ESIC and Who Is Covered?',
        body: 'The Employees State Insurance Corporation (ESIC) is a statutory body under the Ministry of Labour & Employment that administers the Employees State Insurance (ESI) Scheme — a social security and health insurance scheme for Indian workers.\n\nThe scheme applies to all non-seasonal factories and establishments employing 10 or more persons (20 in some states) where the employee\'s gross salary is ₹21,000 or less per month (₹25,000 for persons with disability). Both the employer (3.25% of gross wages) and employee (0.75% of gross wages) contribute to the ESI fund.',
      },
      {
        heading: 'Medical Benefits Under ESIC',
        body: 'The ESI scheme provides full medical care — outpatient, inpatient, specialist services, and emergency treatment — to insured employees and their dependants through ESIC hospitals, dispensaries, and empanelled hospitals. There is no cap on the amount of medical expenditure covered.\n\nThis is one of the most valuable benefits of the scheme — employees and their entire family receive free medical care for as long as the employee remains in insured employment.',
      },
      {
        heading: 'Cash Benefits — Sickness, Maternity, and Disability',
        body: 'Sickness Benefit: An insured employee is entitled to cash compensation at 70% of wages for up to 91 days in a year during medically certified illness.\n\nMaternity Benefit: Insured women employees are entitled to maternity benefit at full wages for up to 26 weeks (for first two children) under ESIC, even though the Maternity Benefit Act also applies separately.\n\nDisablement Benefit: Temporary disablement benefit is 90% of wages during the period of injury. Permanent disablement benefit is a monthly pension based on the degree of disablement.',
      },
      {
        heading: 'Employer Compliance Obligations',
        body: 'Employers must register their establishment on the ESIC portal within 15 days of becoming applicable. All covered employees must be registered and their monthly wages reported accurately. Contributions must be deposited by the 15th of the following month. Returns must be filed half-yearly.\n\nNon-compliance — including delay in registration, under-reporting of wages, or late payment of contributions — attracts interest, damages, and prosecution. Employers have been held personally liable for ESI defaults.',
      },
    ],
    keyTakeaways: [
      'ESIC covers employees earning up to ₹21,000/month in applicable establishments',
      'Medical care is provided free of charge to the entire family of the insured',
      'Sickness benefit is 70% of wages for up to 91 days per year',
      'Employer contribution is 3.25% and employee contribution is 0.75% of gross wages',
      'Registration must happen within 15 days of the establishment becoming applicable',
    ],
  },
  {
    slug: 'simplify-payroll-processing',
    category: 'Payroll',
    title: 'Simplify Payroll Processing',
    excerpt: 'Best practices for streamlining monthly payroll with accurate tax deductions, statutory filings, and zero errors in compliance computation.',
    date: 'Apr 15, 2025',
    readTime: '7 min read',
    author: 'Maru Consultancy Team',
    img: '/assets/service-payroll.png',
    sections: [
      {
        heading: 'The Hidden Complexity of Monthly Payroll',
        body: 'For many HR teams, payroll feels like a monthly crisis — last-minute attendance data, salary revisions, statutory rate changes, and the ever-present risk of an error reaching the bank account. The complexity compounds for organizations with multiple locations, contract workers, or employees in different pay bands.\n\nThe key to simplifying payroll is not working harder each month — it is building the right processes, data flows, and compliance checkpoints so the payroll run becomes predictable and error-free.',
      },
      {
        heading: 'Step 1 — Lock Your Payroll Calendar',
        body: 'The most effective payroll teams operate on a fixed calendar: a specific date for attendance finalization, a date for statutory input (new hires, exits, salary changes), and a date for the payroll run and bank transfer. Any change outside these windows is held for the next cycle — no exceptions.\n\nThis discipline eliminates the "just one more change" problem that causes most payroll errors. Document your calendar, share it with all stakeholders, and enforce it consistently.',
      },
      {
        heading: 'Step 2 — Automate Statutory Computation',
        body: 'PF, ESIC, PT, TDS — all have specific rules and thresholds that can change with state notifications or budget announcements. Manually computing these each month is an error-waiting-to-happen.\n\nA good HRMS or payroll platform will handle these computations automatically once configured correctly. The critical investment is in the initial configuration — ensuring wage heads are mapped correctly, PF applicability rules are set up, and TDS is linked to the employee\'s tax declarations. After that, the computation is automatic.',
      },
      {
        heading: 'Step 3 — Build a Payroll Audit Checklist',
        body: 'Before every payroll run, a structured audit checklist should be executed: (1) Headcount reconciliation — new hires vs. exits vs. previous month, (2) Gross salary reconciliation — total payroll vs. approved budget, (3) Statutory deductions verification — PF, ESIC, PT deducted at correct rates, (4) TDS deduction verification — aligned with Form 12BB declarations, (5) CTC vs. cost check — ensure total employer cost is within approved limits.\n\nThis takes 2–3 hours but prevents errors that take days to investigate and correct — and protects you from compliance exposure.',
      },
    ],
    keyTakeaways: [
      'A fixed payroll calendar eliminates most last-minute errors and delays',
      'Automate statutory computations through a properly configured HRMS',
      'A pre-run audit checklist is non-negotiable for error-free payroll',
      'Separate payroll inputs — attendance, revisions, new hires — by defined deadlines',
      'Monthly payroll reconciliation reports should be reviewed by HR and Finance jointly',
    ],
  },
];

export const downloads: Download[] = [
  { title: 'PF Calculation Template 2024', desc: 'Excel spreadsheet for accurate PF deductions based on the latest EPF guidelines and wage code definitions.', size: '45 KB', format: 'XLSX', type: 'Download' },
  { title: 'Sample Employment Contract', desc: 'Standardized employment agreement template updated for full New Labour Code compliance and best practice inclusions.', size: '120 KB', format: 'DOCX', type: 'Download' },
  { title: 'Minimum Wage Chart — Q3 2024', desc: 'Comprehensive list of state-wise minimum wages for skilled, semi-skilled, and unskilled labour across all Indian states.', size: '2 MB', format: 'PDF', type: 'Resource' },
  { title: 'Approval of Factory Plan & Factory License', desc: 'Step-by-step process document for factory plan approval and factory license grant under the Factories Act.', size: '350 KB', format: 'PDF', type: 'Download' },
  { title: 'Grant / Amendment of Registration under CLRA', desc: 'Template and comprehensive guide for Contract Labour Registration Certificate under the CLRA Act.', size: '180 KB', format: 'PDF', type: 'Download' },
  { title: 'ESI & PF Registration Checklist', desc: 'A comprehensive checklist covering every document and step in the ESI and PF registration process in India.', size: '95 KB', format: 'PDF', type: 'Resource' },
];
