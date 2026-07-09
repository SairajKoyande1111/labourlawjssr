
import { useParams, Link } from 'react-router-dom';
import { FileText, Phone, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PP = 'Poppins, sans-serif';

const serviceDetails: Record<string, {
  headline: string;
  subhead: string;
  intro: string;
  body: string;
  deliverables: { title: string; desc: string }[];
  related: { name: string; slug: string }[];
  img: string;
}> = {
  'labour-law-compliance': {
    headline: 'Streamlining Compliance has never been easier.',
    subhead: 'Labour Law Compliance Services',
    intro: 'End-to-end compliance management for all applicable central and state labour legislation across India.',
    body: 'Navigating the complex web of Indian labour laws requires precision and proactive management. Our Labour Law Compliance service provides end-to-end protection, ensuring your organization remains fully compliant while optimizing operational efficiency.\n\nWith the impending enforcement of the New Labour Codes — consolidating 29 Central Acts into 4 Codes — the regulatory landscape is shifting fundamentally. We audit your current practices, identify structural gaps, and implement frameworks that withstand the highest level of scrutiny from statutory bodies, including the DPIIT, State Labour Departments, and ESI/PF Enforcement Officers.',
    deliverables: [
      { title: 'Comprehensive Compliance Audits', desc: 'Deep-dive reviews across all applicable central and state labour legislation.' },
      { title: 'Statutory Register Maintenance', desc: 'Accurate, inspection-ready registers maintained as per every applicable Act.' },
      { title: 'Risk Assessment & Mitigation', desc: 'Proactive identification and elimination of compliance gaps before they escalate.' },
      { title: 'Liaison with Government Authorities', desc: 'Expert representation in dealings with DPIIT, Labour Departments, and enforcement officers.' },
      { title: 'Regular Regulatory Updates', desc: 'Timely alerts and briefings on new notifications, amendments, and enforcement trends.' },
      { title: 'Documentation Standardization', desc: 'Unified, legally-sound documentation across all establishments and locations.' },
    ],
    related: [
      { name: 'Statutory Compliance & Filings', slug: 'statutory-filings' },
      { name: 'Audits & Governance', slug: 'audits-governance' },
      { name: 'HR Policy & Advisory', slug: 'hr-policy-advisory' },
    ],
    img: '/assets/service-labour.png',
  },
  'payroll-structuring': {
    headline: 'Precise Payroll Processing, Optimized for New Labour Codes.',
    subhead: 'Payroll & Salary Structuring Services',
    intro: 'Accurate payroll management and salary structure auditing aligned with the New Labour Code definitions of wages.',
    body: 'The New Labour Codes have fundamentally redefined the concept of "wages," directly impacting PF contributions, gratuity calculations, leave encashment, and employee benefits. Non-compliance in payroll structuring can result in significant financial penalties and employee disputes.\n\nOur experts design salary structures that are fully compliant with the Code on Wages, tax-efficient, and aligned with the new 50% basic wage rule — protecting both the employer and employee while minimizing statutory costs.',
    deliverables: [
      { title: 'Salary Structure Redesign', desc: 'Restructure compensation to meet the 50% basic wage rule while optimizing take-home pay.' },
      { title: 'PF & ESIC Computation', desc: 'Accurate monthly contribution calculations compliant with the new wage definition.' },
      { title: 'Full & Final Settlement', desc: 'Legally accurate F&F processing including gratuity, leave encashment, and statutory dues.' },
      { title: 'Payroll Software Integration', desc: 'Seamless setup and integration with HRMS and payroll platforms for error-free processing.' },
      { title: 'Tax Optimization', desc: 'Salary structuring aligned with income tax provisions to maximize in-hand salary legally.' },
      { title: 'Monthly Payroll Processing', desc: 'End-to-end payroll run including disbursement, payslips, and statutory compliance.' },
    ],
    related: [
      { name: 'Statutory Compliance & Filings', slug: 'statutory-filings' },
      { name: 'Labour Law Compliance', slug: 'labour-law-compliance' },
      { name: 'Audits & Governance', slug: 'audits-governance' },
    ],
    img: '/assets/service-payroll.png',
  },
  'statutory-filings': {
    headline: 'Flawless Statutory Filings, On Time, Every Time.',
    subhead: 'Statutory Compliance & Filings Services',
    intro: 'Complete management of PF, ESIC, PT, LWF, TDS filings and timely regulatory returns.',
    body: 'Statutory compliance involves a complex, interlocking calendar of filings, payments, and returns across multiple government portals and authorities. A single missed deadline can attract hefty penalties, interest, and even prosecution of directors and HR managers.\n\nOur dedicated statutory team manages the full compliance calendar for your organization — from monthly PF/ESIC contributions to annual returns — ensuring zero delays, zero errors, and complete peace of mind for your leadership team.',
    deliverables: [
      { title: 'PF Monthly Returns', desc: 'Timely ECR uploads and monthly PF contribution processing across all employee categories.' },
      { title: 'ESIC Monthly Contribution', desc: 'Accurate half-yearly returns and monthly contribution payments with zero lapses.' },
      { title: 'Professional Tax Payments', desc: 'State-specific PT calculations, deductions, and timely remittances to authorities.' },
      { title: 'LWF Contributions', desc: 'State-wise Labour Welfare Fund deductions and remittances on schedule.' },
      { title: 'TDS Filings', desc: 'Quarterly TDS returns (Form 24Q) and Form 16 generation for all employees.' },
      { title: 'Annual Statutory Returns', desc: 'All annual returns under applicable Acts — Factories, CLRA, PF, ESIC — filed on time.' },
    ],
    related: [
      { name: 'Labour Law Compliance', slug: 'labour-law-compliance' },
      { name: 'Payroll & Salary Structuring', slug: 'payroll-structuring' },
      { name: 'Registrations & Licensing', slug: 'registrations-licensing' },
    ],
    img: '/assets/service-statutory.png',
  },
  'contract-staffing': {
    headline: 'Flexible, Compliant Workforce Solutions at Scale.',
    subhead: 'People Outsourcing & Staffing Services',
    intro: 'End-to-end management of outsourced workforce — from onboarding to exit, fully compliant.',
    body: 'Contract and temporary staffing comes with a specific set of compliance requirements under the CLRA Act and New Labour Codes. Improper management of contract workers exposes both the principal employer and contractor to significant legal liability, including criminal prosecution.\n\nWe manage the entire lifecycle of your contractual workforce — recruitment, onboarding, payroll, all compliance filings, and exit formalities — giving you the flexibility to scale your workforce without taking on legal risk.',
    deliverables: [
      { title: 'Contract Labour License (CLRA)', desc: 'Procurement and renewal of contractor and principal employer licenses under the CLRA Act.' },
      { title: 'Worker Onboarding & Registration', desc: 'Smooth onboarding with all statutory registrations — PF, ESIC, and labour department records.' },
      { title: 'Payroll for Contract Staff', desc: 'Accurate, compliant payroll processing for all contractual and temporary workers.' },
      { title: 'Monthly Compliance Filings', desc: 'All contractor-specific returns filed on time — registers, muster rolls, and wage statements.' },
      { title: 'Exit & F&F Management', desc: 'Legally compliant full and final settlements for all exiting contract employees.' },
      { title: 'Principal Employer Compliance', desc: 'Ensuring the principal employer meets all obligations under CLRA and New Labour Codes.' },
    ],
    related: [
      { name: 'Labour Law Compliance', slug: 'labour-law-compliance' },
      { name: 'Statutory Compliance & Filings', slug: 'statutory-filings' },
      { name: 'Registrations & Licensing', slug: 'registrations-licensing' },
    ],
    img: '/assets/service-staffing.png',
  },
  'audits-governance': {
    headline: 'Rigorous Audits to Seal Every Compliance Gap.',
    subhead: 'Audits & Governance Services',
    intro: 'Labour audits, factory audits, and establishment reviews to identify and eliminate compliance risks.',
    body: 'A compliance audit is not just a paperwork exercise — it is a strategic risk management tool. Our auditors go beyond surface-level checks to identify deep-rooted vulnerabilities in your payroll structure, statutory registers, employment documentation, and contractor management systems.\n\nWe conduct comprehensive audits across all applicable legislation — Factories Act, Contract Labour Act, EPF Act, ESI Act, and the New Labour Codes — and provide actionable remediation plans, ensuring your establishment is inspection-ready at all times.',
    deliverables: [
      { title: 'Labour Law Compliance Audit', desc: 'End-to-end audit of all applicable labour laws across your establishments and locations.' },
      { title: 'Factory Act Audit', desc: 'Thorough inspection of Factory Act compliance — licensing, safety, welfare, and registers.' },
      { title: 'Payroll Audit', desc: 'Independent verification of payroll calculations, deductions, and statutory contributions.' },
      { title: 'Contract Labour Audit', desc: 'Review of contractor compliance, registers, and principal employer obligations.' },
      { title: 'Remediation Planning', desc: 'Detailed, prioritized action plans to close every gap identified during the audit.' },
      { title: 'Post-Audit Monitoring', desc: 'Ongoing compliance tracking to ensure remediation actions are implemented effectively.' },
    ],
    related: [
      { name: 'Labour Law Compliance', slug: 'labour-law-compliance' },
      { name: 'Registrations & Licensing', slug: 'registrations-licensing' },
      { name: 'HR Policy & Advisory', slug: 'hr-policy-advisory' },
    ],
    img: '/assets/service-audits.png',
  },
  'registrations-licensing': {
    headline: 'All Your Statutory Registrations, Handled End-to-End.',
    subhead: 'Registrations & Licensing Services',
    intro: 'Procurement and timely renewal of Shop & Establishment, Factory License, and Contract Labour License.',
    body: 'Operating without the required licenses and registrations is a significant legal risk that can result in closure notices, prosecution, and inability to bid for government contracts. From new business setup to ongoing renewals, we manage all statutory registrations across India.\n\nOur experts handle the entire process — from documentation preparation and application filing to follow-up with state authorities — ensuring timely approval, zero lapses, and full regulatory standing for your business.',
    deliverables: [
      { title: 'Shop & Establishment Registration', desc: 'State-wise S&E registration and renewal for all commercial establishments.' },
      { title: 'Factory License & Renewal', desc: 'End-to-end factory license procurement and annual renewal under the Factories Act.' },
      { title: 'Contract Labour License (CLRA)', desc: 'Contractor and principal employer license under the Contract Labour (Regulation & Abolition) Act.' },
      { title: 'PF & ESIC Registration', desc: 'Employer and establishment registration under EPF and ESI Acts.' },
      { title: 'Professional Tax Registration', desc: 'Employer PT registration across all applicable states.' },
      { title: 'MSME / Udyam Registration', desc: 'Udyam portal registration for MSME recognition and government benefits.' },
    ],
    related: [
      { name: 'Labour Law Compliance', slug: 'labour-law-compliance' },
      { name: 'Statutory Compliance & Filings', slug: 'statutory-filings' },
      { name: 'Audits & Governance', slug: 'audits-governance' },
    ],
    img: '/assets/service-licensing.png',
  },
  'hr-policy-advisory': {
    headline: 'Robust HR Policies that Protect Your Organization.',
    subhead: 'HR Policy & Advisory Services',
    intro: 'Drafting HR handbooks, standing orders, POSH policies, and legally compliant employment contracts.',
    body: 'In the era of New Labour Codes, HR policies are not just internal documents — they are legal instruments that can be cited in court proceedings, labour inspections, and employee disputes. Outdated or non-compliant policies create significant exposure.\n\nOur HR advisory team drafts, audits, and updates all your HR documentation — from employment contracts to POSH policies — ensuring they are legally watertight, compliant with the latest codes, and aligned with industry best practices.',
    deliverables: [
      { title: 'HR Policy Manual', desc: 'Comprehensive, legally compliant HR handbook covering all employment policies and procedures.' },
      { title: 'Standing Orders (Certified)', desc: 'Certified Standing Orders under the Industrial Employment (Standing Orders) Act.' },
      { title: 'POSH Policy & ICC Setup', desc: 'Sexual harassment policy drafting and Internal Complaints Committee constitution under POSH Act.' },
      { title: 'Employment Contracts', desc: 'Role-specific employment agreements covering probation, termination, confidentiality, and IP.' },
      { title: 'Offer Letter Templates', desc: 'Legally sound, customizable offer letter formats for all employment levels.' },
      { title: 'Non-Disclosure & Non-Compete Agreements', desc: 'Enforceable NDA and non-compete clauses aligned with Indian contract law.' },
    ],
    related: [
      { name: 'Labour Law Compliance', slug: 'labour-law-compliance' },
      { name: 'Training & Workshops', slug: 'training-workshops' },
      { name: 'Legal Representation', slug: 'litigation-support' },
    ],
    img: '/assets/service-hr.png',
  },
  'litigation-support': {
    headline: 'Expert Legal Representation in Labour Disputes.',
    subhead: 'Legal Representation Services',
    intro: 'Labour court representation, conciliation proceedings, and robust litigation support across India.',
    body: "Labour disputes — whether from individual employees, trade unions, or regulatory authorities — can be extremely costly and time-consuming. Expert legal representation at the right stage can significantly alter outcomes and protect your organization's reputation.\n\nOur panel of experienced labour law advocates represents employers before Labour Courts, Industrial Tribunals, High Courts, and in conciliation proceedings before the Conciliation Officer, providing the strongest possible defense and most favorable settlements.",
    deliverables: [
      { title: 'Labour Court Representation', desc: 'Full legal representation before all Labour Courts under the Industrial Disputes Act.' },
      { title: 'Industrial Tribunal Cases', desc: 'Expert advocacy in tribunal proceedings for termination, wage, and recognition disputes.' },
      { title: 'Conciliation Proceedings', desc: 'Strategic representation before the Conciliation Officer to achieve favorable settlements.' },
      { title: 'Inquiry Officer Services', desc: 'Trained inquiry officers for domestic enquiries into employee misconduct.' },
      { title: 'Legal Opinions', desc: 'Written legal opinions on complex labour law questions for management decision-making.' },
      { title: 'Domestic Enquiry Management', desc: 'End-to-end management of disciplinary enquiries — notice, hearing, and enquiry reports.' },
    ],
    related: [
      { name: 'Audits & Governance', slug: 'audits-governance' },
      { name: 'HR Policy & Advisory', slug: 'hr-policy-advisory' },
      { name: 'Labour Law Compliance', slug: 'labour-law-compliance' },
    ],
    img: '/assets/service-legal.png',
  },
  'training-workshops': {
    headline: 'Empowering Your HR Team with Expert Knowledge.',
    subhead: 'Training & Workshops Services',
    intro: 'In-depth labour law training programs designed to upskill your internal HR teams and management.',
    body: 'Compliance is only as strong as the people implementing it. Non-compliance often stems not from malice but from knowledge gaps in the HR and operations teams. Our training programs equip your teams with the knowledge they need to handle day-to-day compliance confidently.\n\nFrom foundational programs on New Labour Codes to specialized deep-dives on POSH, standing orders, and payroll compliance — our subject-matter experts deliver practical, case-study-driven training that translates directly into better compliance practices.',
    deliverables: [
      { title: 'New Labour Codes Overview', desc: 'Comprehensive training on all 4 Labour Codes and their impact on HR and payroll operations.' },
      { title: 'POSH Act Training & ICC', desc: 'Mandatory POSH awareness sessions for employees and specialized training for ICC members.' },
      { title: 'Payroll Compliance Workshop', desc: 'Hands-on workshop covering wage definition, statutory deductions, and new-age payroll compliance.' },
      { title: 'HR Documentation Workshop', desc: 'Practical sessions on drafting, maintaining, and auditing statutory registers and HR documents.' },
      { title: 'Factory Act Training', desc: 'Training for factory managers and HR on obligations under the Factories Act and safety rules.' },
      { title: 'Custom In-house Programs', desc: 'Bespoke training programs designed around your industry, workforce size, and compliance gaps.' },
    ],
    related: [
      { name: 'HR Policy & Advisory', slug: 'hr-policy-advisory' },
      { name: 'Labour Law Compliance', slug: 'labour-law-compliance' },
      { name: 'Audits & Governance', slug: 'audits-governance' },
    ],
    img: '/assets/service-training.png',
  },
};

const otherServices = [
  { name: 'Labour Law Compliance', slug: 'labour-law-compliance' },
  { name: 'Payroll & Salary Structuring', slug: 'payroll-structuring' },
  { name: 'Statutory Filings', slug: 'statutory-filings' },
  { name: 'Audits & Governance', slug: 'audits-governance' },
  { name: 'Registrations & Licensing', slug: 'registrations-licensing' },
  { name: 'HR Policy & Advisory', slug: 'hr-policy-advisory' },
  { name: 'Legal Representation', slug: 'litigation-support' },
  { name: 'Training & Workshops', slug: 'training-workshops' },
];

const ServiceDetail = () => {
  const { slug } = useParams();
  const detail = serviceDetails[slug || ''];
  const title = slug?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Service';

  return (
    <div className="w-full" style={{ fontFamily: PP }}>

      {/* ── Hero ── */}
      <section
        className="flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#a83a00', minHeight: '200px', maxHeight: '300px', height: '38vh' }}>

        <motion.div
          initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center px-8 w-full max-w-7xl mx-auto">

          <p
            className="uppercase tracking-[0.3em] font-semibold mb-2 whitespace-nowrap"
            style={{ fontFamily: PP, fontSize: '0.95rem', color: '#fda102' }}>
            {detail?.subhead || 'Our Services'}
          </p>

          <h1
            className="uppercase leading-none mb-3 whitespace-nowrap"
            style={{
              fontFamily: PP,
              fontSize: 'max(1.1rem, 2vw)',
              fontWeight: 700,
              letterSpacing: '0.05em',
              color: '#ffffff',
            }}>
            {detail?.headline || title}
          </h1>

          <p
            style={{
              fontFamily: PP,
              fontSize: 'clamp(0.88rem, 1.3vw, 1rem)',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.82)',
              maxWidth: '680px',
              margin: '0 auto',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              lineHeight: '1.55',
            }}>
            {detail?.intro}
          </p>
        </motion.div>
      </section>

      {/* ── Big Image Banner — true full-width ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full overflow-hidden"
        style={{ height: 'clamp(240px, 38vw, 500px)' }}>
        <img
          src={detail?.img || '/assets/service-labour.png'}
          alt={title}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
      </motion.div>

      {/* ── Main Content ── */}
      <section className="py-16 bg-[#f8fafb]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row gap-10">

          {/* ── Body Column ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:w-2/3 space-y-8">

            {/* Body Text */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
              <h2
                className="font-bold mb-6"
                style={{ fontFamily: PP, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: '#111', lineHeight: 1.25 }}>
                About This Service
              </h2>
              {detail?.body?.split('\n\n').map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="text-gray-600 leading-relaxed mb-4"
                  style={{ fontFamily: PP, fontSize: 'clamp(0.97rem, 1.3vw, 1.08rem)', fontWeight: 400, lineHeight: 1.8 }}>
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Key Deliverables — pointer format */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
              <h2
                className="font-bold mb-2"
                style={{ fontFamily: PP, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: '#111' }}>
                What You Get
              </h2>
              <p className="text-gray-400 mb-8 text-sm" style={{ fontFamily: PP }}>
                Everything included in this service — delivered end-to-end.
              </p>

              <div className="space-y-4">
                {(detail?.deliverables || []).map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.38, delay: i * 0.07 }}
                    className="flex items-start gap-5 group">

                    {/* Number badge */}
                    <div
                      className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm mt-0.5 transition-all group-hover:scale-110"
                      style={{ backgroundColor: 'rgba(168,58,0,0.08)', color: '#a83a00', fontFamily: PP }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-4 border-b border-gray-100 last:border-0">
                      <h4
                        className="font-semibold mb-1"
                        style={{ fontFamily: PP, fontSize: '1.05rem', color: '#111' }}>
                        {item.title}
                      </h4>
                      <p
                        className="text-gray-500 leading-relaxed"
                        style={{ fontFamily: PP, fontSize: '0.92rem', lineHeight: 1.7 }}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Related Services */}
            {detail?.related && (
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                <h2
                  className="font-bold mb-6"
                  style={{ fontFamily: PP, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: '#111' }}>
                  Related Services
                </h2>
                <div className="flex flex-wrap gap-3">
                  {detail.related.map((r, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }}>
                      <Link
                        to={`/services/${r.slug}`}
                        className="inline-flex items-center gap-2 font-medium px-5 py-3 rounded-full transition-all border hover:shadow-md"
                        style={{
                          fontFamily: PP,
                          fontSize: '0.92rem',
                          color: '#a83a00',
                          backgroundColor: 'rgba(168,58,0,0.06)',
                          borderColor: 'rgba(168,58,0,0.2)',
                        }}>
                        <ArrowRight size={14} /> {r.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* ── Sidebar ── */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 space-y-6">

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">

                <div className="p-2" style={{ backgroundColor: '#a83a00' }}>
                  <p className="text-center text-xs font-semibold uppercase tracking-widest" style={{ color: '#fda102', fontFamily: PP }}>
                    Get Expert Advice
                  </p>
                </div>

                <div className="bg-white p-8">
                  <h3
                    className="font-bold mb-3"
                    style={{ fontFamily: PP, fontSize: '1.35rem', color: '#111', lineHeight: 1.3 }}>
                    Ready to secure your compliance?
                  </h3>
                  <p
                    className="text-gray-500 mb-7 leading-relaxed"
                    style={{ fontFamily: PP, fontSize: '0.93rem', lineHeight: 1.7 }}>
                    Speak directly with our legal experts to discuss how this service applies to your specific industry and workforce size.
                  </p>
                  <div className="space-y-3">
                    <Link
                      to="/contact"
                      className="w-full text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-md transition-opacity hover:opacity-90"
                      style={{ backgroundColor: '#a83a00', fontFamily: PP, fontSize: '0.95rem' }}>
                      <FileText size={16} /> Request Proposal
                    </Link>
                    <a
                      href="tel:+919876543210"
                      className="w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 border-2 transition-all hover:bg-[#a83a00] hover:text-white"
                      style={{ fontFamily: PP, fontSize: '0.95rem', color: '#a83a00', borderColor: '#a83a00', backgroundColor: 'transparent' }}>
                      <Phone size={16} /> Call Now
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Other Services */}
              <motion.div
                initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm">
                <h4
                  className="font-bold mb-5 uppercase tracking-widest text-xs"
                  style={{ fontFamily: PP, color: '#a83a00' }}>
                  Other Services
                </h4>
                <ul className="space-y-0.5">
                  {otherServices.filter(s => s.slug !== slug).map((s, i) => (
                    <li key={i}>
                      <Link
                        to={`/services/${s.slug}`}
                        className="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0 group transition-colors hover:text-[#a83a00]"
                        style={{ fontFamily: PP, color: '#333', fontSize: '0.9rem', fontWeight: 500 }}>
                        <ChevronRight size={14} className="text-gray-300 group-hover:text-[#a83a00] transition-colors shrink-0" />
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
