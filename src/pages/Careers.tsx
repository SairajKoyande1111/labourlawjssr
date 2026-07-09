import { useState } from 'react';
import { MapPin, Briefcase, Clock, ArrowRight, Users, TrendingUp, Award, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { jobs } from '../data/careersData';

const PP = 'Poppins, sans-serif';

const perks = [
  {
    icon: TrendingUp,
    title: 'Career Growth',
    desc: 'Clear progression paths with structured learning and mentorship from India\'s top labour law practitioners.',
  },
  {
    icon: Award,
    title: 'Expert Recognition',
    desc: 'Work on landmark compliance cases. Your expertise becomes our collective strength.',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    desc: 'A tight-knit team of legal minds, payroll specialists, and HR professionals who learn from each other.',
  },
];

const Careers = () => {
  const [activeTab, setActiveTab] = useState<'internal' | 'client'>('internal');

  const internalJobs = jobs.filter(j => j.category === 'internal');
  const clientJobs = jobs.filter(j => j.category === 'client');
  const displayed = activeTab === 'internal' ? internalJobs : clientJobs;

  return (
    <div className="w-full" style={{ fontFamily: PP }}>

      {/* ── Hero ── */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#a83a00', minHeight: '280px' }}>

        <div className="absolute top-[-60px] right-[-60px] w-[320px] h-[320px] rounded-full opacity-10"
          style={{ backgroundColor: '#fda102' }} />
        <div className="absolute bottom-[-50px] left-[-30px] w-[200px] h-[200px] rounded-full opacity-[0.07]"
          style={{ backgroundColor: '#fff' }} />

        <motion.div
          initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-8 w-full max-w-4xl mx-auto py-16">

          <p className="uppercase tracking-[0.3em] font-semibold mb-3"
            style={{ fontFamily: PP, fontSize: '0.85rem', color: '#fda102' }}>
            Join Our Team
          </p>
          <h1 className="font-bold mb-4 leading-tight"
            style={{ fontFamily: PP, fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#fff' }}>
            Build a Career That Matters
          </h1>
          <p style={{
            fontFamily: PP, fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
            color: 'rgba(255,255,255,0.80)', maxWidth: '580px', margin: '0 auto', lineHeight: 1.7,
          }}>
            Channel your passion for labour and industrial law into a meaningful career at India's premier compliance advisory firm.
          </p>
        </motion.div>
      </section>

      {/* ── Why Work With Us ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="font-bold tracking-[0.2em] uppercase text-xs mb-3"
              style={{ fontFamily: PP, color: '#a83a00' }}>Why Labour Law</p>
            <h2 className="font-bold mb-4"
              style={{ fontFamily: PP, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#111' }}>
              Why Work With Us
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: PP, fontSize: '1rem' }}>
              Every role here creates real impact — keeping Indian businesses compliant and workers protected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {perks.map((perk, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.45 }}
                className="rounded-2xl p-8 border border-gray-100 text-center group hover:shadow-lg transition-shadow"
                style={{ backgroundColor: '#fdf7f0' }}>
                <div className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-5 shadow-sm"
                  style={{ backgroundColor: 'rgba(168,58,0,0.1)' }}>
                  <perk.icon size={24} style={{ color: '#a83a00' }} />
                </div>
                <h3 className="font-bold mb-3"
                  style={{ fontFamily: PP, fontSize: '1.1rem', color: '#111' }}>{perk.title}</h3>
                <p className="text-gray-500 leading-relaxed"
                  style={{ fontFamily: PP, fontSize: '0.93rem' }}>{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Job Listings ── */}
      <section className="py-20" style={{ backgroundColor: '#f8fafb' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="mb-10">
            <p className="font-bold tracking-[0.2em] uppercase text-xs mb-3"
              style={{ fontFamily: PP, color: '#a83a00' }}>Open Positions</p>
            <h2 className="font-bold"
              style={{ fontFamily: PP, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#111' }}>
              Current Openings
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 p-1 rounded-xl mb-10 w-fit"
            style={{ backgroundColor: 'rgba(168,58,0,0.08)' }}>
            {[
              { key: 'internal', label: `At Maru Consultancy (${internalJobs.length})` },
              { key: 'client', label: `Client Postings (${clientJobs.length})` },
            ].map(tab => (
              <button key={tab.key}
                onClick={() => setActiveTab(tab.key as 'internal' | 'client')}
                className="px-5 py-2.5 rounded-lg font-semibold text-sm transition-all"
                style={{
                  fontFamily: PP,
                  backgroundColor: activeTab === tab.key ? '#a83a00' : 'transparent',
                  color: activeTab === tab.key ? '#fff' : '#a83a00',
                }}>
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'client' && (
            <div className="mb-8 p-4 rounded-xl border flex items-start gap-3"
              style={{ backgroundColor: 'rgba(253,161,2,0.08)', borderColor: 'rgba(253,161,2,0.3)' }}>
              <span style={{ color: '#fda102', fontSize: '1.1rem' }}>ℹ</span>
              <p style={{ fontFamily: PP, fontSize: '0.88rem', color: '#555' }}>
                These are exclusive HR & compliance roles sourced directly from our corporate client network across India. Applications are managed through Maru Consultancy Services.
              </p>
            </div>
          )}

          <div className="space-y-5">
            {displayed.map((job, i) => (
              <motion.div key={job.slug}
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-7 md:p-8">

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: job.category === 'internal' ? 'rgba(168,58,0,0.1)' : 'rgba(253,161,2,0.12)',
                          color: job.category === 'internal' ? '#a83a00' : '#c07a00',
                          fontFamily: PP,
                        }}>
                        {job.category === 'internal' ? 'In-house' : 'Client Role'}
                      </span>
                      <span className="text-xs text-gray-400 font-medium" style={{ fontFamily: PP }}>
                        {job.department}
                      </span>
                    </div>

                    <h3 className="font-bold mb-3"
                      style={{ fontFamily: PP, fontSize: '1.15rem', color: '#111' }}>
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} style={{ color: '#a83a00' }} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} style={{ color: '#a83a00' }} /> {job.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={13} style={{ color: '#a83a00' }} /> {job.experience} exp
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <Link to={`/careers/${job.slug}`}
                      className="px-6 py-3 rounded-xl font-semibold text-sm border-2 flex items-center justify-center gap-2 transition-all hover:opacity-80"
                      style={{ fontFamily: PP, color: '#a83a00', borderColor: '#a83a00', backgroundColor: 'transparent' }}>
                      View JD <ChevronRight size={15} />
                    </Link>
                    <Link to={`/careers/${job.slug}#apply`}
                      className="px-6 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90 shadow-sm"
                      style={{ fontFamily: PP, backgroundColor: '#a83a00', color: '#fff' }}>
                      Apply Now <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Open Application CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mt-14 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ backgroundColor: '#a83a00' }}>
            <div>
              <h3 className="font-bold text-white mb-2"
                style={{ fontFamily: PP, fontSize: '1.4rem' }}>
                Don't see a role that fits?
              </h3>
              <p style={{ fontFamily: PP, fontSize: '0.95rem', color: 'rgba(255,255,255,0.70)' }}>
                Send us your profile. We're always open to exceptional talent in labour law and HR compliance.
              </p>
            </div>
            <Link to="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all hover:opacity-90 whitespace-nowrap shadow-lg"
              style={{ fontFamily: PP, backgroundColor: '#fda102', color: '#111' }}>
              Send Your Resume <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
