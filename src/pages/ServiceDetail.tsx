
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, FileText, Phone, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PP = 'Poppins, sans-serif';

const serviceDetails: Record<string, {
  headline: string;
  subhead: string;
  intro: string;
  body: string;
  deliverables: string[];
  related: { name: string; slug: string }[];
  img: string;
}> = {
  'labour-law-compliance': {
    headline: 'Streamlining Compliance has never been easier.',
    subhead: 'Labour Law Compliance Services',
    intro: 'End-to-end compliance management for all applicable central and state labour legislation across India.',
    body: 'Navigating the complex web of Indian labour laws requires precision and proactive management. Our Labour Law Compliance service provides end-to-end protection, ensuring your organization remains fully compliant while optimizing operational efficiency.\n\nWith the impending enforcement of the New Labour Codes — consolidating 29 Central Acts into 4 Codes — the regulatory landscape is shifting fundamentally. We audit your current practices, identify structural gaps, and implement frameworks that withstand the highest level of scrutiny from statutory bodies, including the DPIIT, State Labour Departments, and ESI/PF Enforcement Officers.',
    deliverables: ['Comprehensive Compliance Audits', 'Statutory Register Maintenance', 'Risk Assessment & Mitigation', 'Liaison with Government Authorities', 'Regular Regulatory Updates', 'Documentation Standardization'],
    related: [
      { name: 'Statutory Compliance & Filings', slug: 'statutory-filings' },
      { name: 'Audits & Governance', slug: 'audits-governance' },
      { name: 'HR Policy & Advisory', slug: 'hr-policy-advisory' },
    ],
    img: '/assets/service-labour.png',
  },
  'payroll-structuring': {
    headline: 'Precise Payroll Processing, optimized for New Labour Codes.',
    subhead: 'Payroll & Salary Structuring Services',
    intro: 'Accurate payroll management and salary structure auditing aligned with the New Labour Code definitions of wages.',
    body: 'The New Labour Codes have fundamentally redefined the concept of "wages," directly impacting PF contributions, gratuity calculations, leave encashment, and employee benefits. Non-compliance in payroll structuring can result in significant financial penalties and employee disputes.\n\nOur experts design salary structures that are fully compliant with the Code on Wages, tax-efficient, and aligned with the new 50% basic wage rule — protecting both the employer and employee while minimizing statutory costs.',
    deliverables: ['Salary Structure Redesign', 'PF & ESIC Computation', 'Full & Final Settlement', 'Payroll Software Integration', 'Tax Optimization', 'Monthly Payroll Processing'],
    related: [
      { name: 'Statutory Compliance & Filings', slug: 'statutory-filings' },
      { name: 'Labour Law Compliance', slug: 'labour-law-compliance' },
      { name: 'Audits & Governance', slug: 'audits-governance' },
    ],
    img: '/assets/service-payroll.png',
  },
  'statutory-filings': {
    headline: 'Flawless Statutory Filings, on time, every time.',
    subhead: 'Statutory Compliance & Filings Services',
    intro: 'Complete management of PF, ESIC, PT, LWF, TDS filings and timely regulatory returns.',
    body: 'Statutory compliance involves a complex, interlocking calendar of filings, payments, and returns across multiple government portals and authorities. A single missed deadline can attract hefty penalties, interest, and even prosecution of directors and HR managers.\n\nOur dedicated statutory team manages the full compliance calendar for your organization — from monthly PF/ESIC contributions to annual returns — ensuring zero delays, zero errors, and complete peace of mind for your leadership team.',
    deliverables: ['PF Monthly Returns', 'ESIC Monthly Contribution', 'Professional Tax Payments', 'LWF Contributions', 'TDS Filings', 'Annual Statutory Returns'],
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
    deliverables: ['Contract Labour License (CLRA)', 'Worker Onboarding & Registration', 'Payroll for Contract Staff', 'Monthly Compliance Filings', 'Exit & F&F Management', 'Principal Employer Compliance'],
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
    deliverables: ['Labour Law Compliance Audit', 'Factory Act Audit', 'Payroll Audit', 'Contract Labour Audit', 'Remediation Planning', 'Post-Audit Monitoring'],
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
    deliverables: ['Shop & Establishment Registration', 'Factory License & Renewal', 'Contract Labour License (CLRA)', 'PF & ESIC Registration', 'Professional Tax Registration', 'MSME / Udyam Registration'],
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
    deliverables: ['HR Policy Manual', 'Standing Orders (Certified)', 'POSH Policy & ICC Setup', 'Employment Contracts', 'Offer Letter Templates', 'Non-Disclosure & Non-Compete Agreements'],
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
    deliverables: ['Labour Court Representation', 'Industrial Tribunal Cases', 'Conciliation Proceedings', 'Inquiry Officer Services', 'Legal Opinions', 'Domestic Enquiry Management'],
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
    deliverables: ['New Labour Codes Overview', 'POSH Act Training & ICC', 'Payroll Compliance Workshop', 'HR Documentation Workshop', 'Factory Act Training', 'Custom In-house Programs'],
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

      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden flex items-center justify-center"
        style={{ height: '42vh', minHeight: '200px', maxHeight: '320px' }}>
        {/* Background image */}
        <img
          src={detail?.img || '/assets/service-labour.png'}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
        />
        {/* #a83a00 brand tint */}
        <div className="absolute inset-0" style={{ background: 'rgba(168,58,0,0.78)' }} />

        {/* Centered text */}
        <motion.div
          initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p
            className="uppercase tracking-[0.3em] font-semibold mb-2"
            style={{ fontFamily: PP, fontSize: '0.7rem', color: '#fda102' }}>
            {detail?.subhead || 'Our Services'}
          </p>
          <h1
            className="uppercase leading-[1.1] mb-3"
            style={{
              fontFamily: PP,
              fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)',
              fontWeight: 700,
              letterSpacing: '0.04em',
              color: '#ffffff',
            }}>
            {detail?.headline || title}
          </h1>
          <p
            className="leading-relaxed mx-auto"
            style={{
              fontFamily: PP,
              fontSize: 'clamp(0.88rem, 1.4vw, 1.05rem)',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.82)',
              maxWidth: '500px',
            }}>
            {detail?.intro}
          </p>
        </motion.div>
      </section>


      {/* ── Main Content ──────────────────────────────────── */}
      <section className="py-14 bg-[#f8fafb]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row gap-10">

          {/* ── Body column ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/3">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 mb-7">

              {/* Image + Text */}
              <div className="flex flex-col md:flex-row gap-8 mb-10">
                <div className="md:w-2/5 shrink-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
                    <img
                      src={detail?.img || '/assets/service-labour.png'}
                      alt={title}
                      className="w-full h-full object-cover" />
                  </motion.div>
                </div>
                <div className="md:w-3/5">
                  {detail?.body?.split('\n\n').map((para, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                      className="text-gray-600 leading-relaxed mb-4 font-light"
                      style={{ fontFamily: PP, fontSize: '0.95rem' }}>
                      {para}
                    </motion.p>
                  ))}
                </div>
              </div>

              {/* Key Deliverables */}
              <h3
                className="font-bold mb-5"
                style={{ fontFamily: PP, fontSize: '1.25rem', color: '#111' }}>
                Key Deliverables
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {(detail?.deliverables || []).map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.06 }}
                    className="flex items-start gap-3 p-4 rounded-xl border border-gray-100"
                    style={{ backgroundColor: '#fdf7f0' }}>
                    <CheckCircle className="shrink-0 mt-0.5" size={17} style={{ color: '#a83a00' }} />
                    <span className="font-medium text-sm" style={{ fontFamily: PP, color: '#222' }}>{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Related Services */}
              {detail?.related && (
                <>
                  <h3
                    className="font-bold mb-4 mt-2"
                    style={{ fontFamily: PP, fontSize: '1rem', color: '#111' }}>
                    Related Services
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {detail.related.map((r, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }}>
                        <Link
                          to={`/services/${r.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-colors border"
                          style={{
                            fontFamily: PP,
                            color: '#a83a00',
                            backgroundColor: 'rgba(168,58,0,0.07)',
                            borderColor: 'rgba(168,58,0,0.18)',
                          }}>
                          <ChevronRight size={13} /> {r.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* ── Sidebar ─────────────────────────────────── */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 space-y-6">

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3
                  className="font-bold mb-3"
                  style={{ fontFamily: PP, fontSize: '1.1rem', color: '#111' }}>
                  Ready to secure your compliance?
                </h3>
                <p
                  className="text-gray-500 text-sm mb-6 leading-relaxed font-light"
                  style={{ fontFamily: PP }}>
                  Speak directly with our legal experts to discuss how this service applies to your specific industry and workforce size.
                </p>
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="w-full text-white py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition-opacity hover:opacity-90"
                    style={{ backgroundColor: '#a83a00', fontFamily: PP }}>
                    <FileText size={15} /> Request Proposal
                  </Link>
                  <a
                    href="tel:+919876543210"
                    className="w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 border-2 transition-opacity hover:opacity-80"
                    style={{ fontFamily: PP, color: '#a83a00', borderColor: '#a83a00', backgroundColor: 'transparent' }}>
                    <Phone size={15} /> Call Now
                  </a>
                </div>
              </motion.div>

              {/* Other Services */}
              <motion.div
                initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm">
                <h4
                  className="font-bold mb-5 uppercase tracking-wider text-xs"
                  style={{ fontFamily: PP, color: '#a83a00' }}>
                  Other Services
                </h4>
                <ul className="space-y-1">
                  {otherServices.filter(s => s.slug !== slug).map((s, i) => (
                    <li key={i}>
                      <Link
                        to={`/services/${s.slug}`}
                        className="flex items-center gap-2.5 text-sm py-2 border-b border-gray-50 last:border-0 font-medium transition-colors hover:opacity-70"
                        style={{ fontFamily: PP, color: '#333' }}>
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: '#fda102' }} />
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
