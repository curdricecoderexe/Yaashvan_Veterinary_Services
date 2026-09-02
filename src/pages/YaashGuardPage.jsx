import { motion } from 'framer-motion';
import {
  ShieldCheck, ArrowRight, Beaker, Target, FileDown, ArrowLeft,
  FlaskConical, Sparkles, Wind, Layers, Droplets, Grid3x3, Zap
} from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { handleDownload } from '../constants/docs';

const YaashGuardPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    {
      title: 'Organic Acids + Acid Salts',
      icon: FlaskConical,
      desc: 'Carefully selected active ingredients designed to support feed hygiene and stability.',
    },
    {
      title: 'LeciSpread Technology',
      icon: Sparkles,
      desc: 'Enhances ingredient spread, contact, and activity for improved effectiveness.',
    },
    {
      title: 'Cleaner Feed, Lower Microbial Pressure',
      icon: ShieldCheck,
      desc: 'Supports a cleaner feed environment and helps minimize microbial contamination.',
    },
  ];

  const advantages = [
    { title: 'Reduces Microbial Load', desc: 'Helps reduce microbial load in feed and provides rapid antimicrobial support.' },
    { title: 'Improves Feed Hygiene', desc: 'Improves overall feed hygiene in the mill and in finished feed.' },
    { title: 'Easy to Use', desc: 'Easy to use in routine and challenging situations.' },
    { title: 'Mixer-to-Feed Protection', desc: 'Delivers rapid kill and prolonged hygiene protection, lowering Salmonella pressure from mixer to finished feed.' },
  ];

  const leciSpread = [
    { title: 'Improved Dry Dispersion', icon: Wind, desc: 'Enhances flow and spread of actives in dry blends.' },
    { title: 'Better Contact with Dust & Residues', icon: Layers, desc: 'LeciSpread reaches and wets more surfaces.' },
    { title: 'More Uniform Active Distribution', icon: Grid3x3, desc: 'Promotes even coverage across every feed particle.' },
    { title: 'Enhanced Feed Hygiene Support', icon: Droplets, desc: 'Supports cleaner mixers and safer feed.' },
  ];

  const dosage = [
    { type: 'Routine Use', dose: '0.5 - 1 kg / MT of poultry feed' },
    { type: 'High Contamination Risk', dose: '1.5 kg / MT or as per nutritionist' },
    { type: 'Feed Mill Sanitation', dose: '150 - 200 kg / 1 MT mixer capacity' },
  ];

  return (
    <div className="bg-[#fbfbfc] min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-brand-emerald/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 hex-pattern" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            to="/#products"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-navy transition-colors text-[10px] uppercase font-black tracking-widest group"
          >
            <ArrowLeft size={10} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back to products
          </Link>
        </div>

        {/* ── Hero Section ────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center mb-16 md:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-emerald/10 rounded-full blur-[100px] opacity-40 animate-pulse-slow" />
            <div className="relative bg-white rounded-[2rem] sm:rounded-[2rem] lg:rounded-[3.5rem] p-6 sm:p-8 md:p-16 border border-slate-100 shadow-[0_20px_60px_rgba(0,165,81,0.08)] overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50/50 to-transparent pointer-events-none" />
              <motion.img
                src="/YAASHGUARD.webp"
                alt="YAASHGUARD Feed Hygiene Solution"
                className="w-full h-auto object-contain rounded-[1.5rem] drop-shadow-[0_20px_50px_rgba(0,165,81,0.12)] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-10 right-10 flex items-center gap-2 px-5 py-2 rounded-full bg-brand-navy text-white font-bold text-[10px] uppercase tracking-[0.2em] shadow-lg">
                <ShieldCheck size={12} className="text-brand-emerald" />
                Feed Pathogen Control
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <span className="section-tag-light border-emerald-100 text-brand-emerald">
                <span className="w-1 h-1 rounded-full bg-brand-emerald inline-block" />
                Advanced Feed Hygiene Solution
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-brand-navy mb-6 leading-tight tracking-tight uppercase">
              YAASH<span className="text-brand-emerald">GUARD</span>
            </h1>
            <h3 className="text-xl md:text-2xl font-bold text-slate-500 mb-6 uppercase tracking-tight">
              Lower risk. With a Feed Pathogen Control Program.
            </h3>
            <p className="text-lg text-slate-500 leading-relaxed mb-4 font-medium">
              "Cleaner Feed. Lower Pathogen Pressure. Better Performance."
            </p>
            <p className="text-base text-slate-500 leading-relaxed mb-10 font-medium">
              YAASHGUARD is a synergistic feed hygiene solution built on a carefully selected combination of
              organic acids, their salts, and surface-active technology. It is designed to support cleaner feed,
              help reduce microbial pressure, and contribute to better gut health and performance in poultry.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleDownload('YAASHGUARD')}
                className="px-10 py-5 rounded-2xl bg-brand-emerald text-white font-black text-sm uppercase tracking-widest flex items-center gap-3 transition-all hover:bg-brand-navy shadow-xl shadow-brand-emerald/10 group"
              >
                Download Leaflet <FileDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              <a href="#usage" className="px-10 py-5 rounded-2xl bg-brand-navy text-white font-bold text-lg flex items-center gap-3 transition-all hover:bg-brand-emerald shadow-xl shadow-brand-navy/10">
                Recommended Usage <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Core Pillars ───────────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-navy mb-4 uppercase">
              Built on <span className="text-brand-emerald">Synergy</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">
              A carefully selected system of organic acids and surface-active technology.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 text-brand-emerald group-hover:bg-brand-emerald group-hover:text-white transition-colors duration-500">
                  <p.icon size={28} />
                </div>
                <h4 className="text-lg font-heading font-black text-brand-navy mb-3 uppercase tracking-tight">{p.title}</h4>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mode of Action ─────────────────────────────── */}
        <div className="bg-brand-navy rounded-[2rem] lg:rounded-[4rem] p-6 sm:p-8 lg:p-14 text-white shadow-2xl relative overflow-hidden mb-16 md:mb-24 lg:mb-32">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-emerald/10 rounded-full blur-3xl" />
          <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-6 uppercase tracking-tight flex items-center gap-4 relative z-10">
            <Zap className="text-brand-emerald" /> Mode of Action
          </h3>
          <p className="text-slate-300 leading-relaxed font-medium max-w-4xl relative z-10">
            YAASHGUARD penetrates feed residues and microbial surfaces with a synergistic acid-formaldehyde
            system, disrupting cell membranes and essential microbial functions. By delivering rapid kill and
            prolonged hygiene protection, it helps lower Salmonella pressure from mixer to finished feed.
          </p>
        </div>

        {/* ── Why YAASHGUARD + Usage ─────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16 md:mb-24 lg:mb-32">
          <div className="bg-white rounded-[2rem] lg:rounded-[4rem] p-6 sm:p-8 lg:p-12 border border-slate-100 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-brand-navy mb-10 flex items-center gap-4 uppercase">
              <Target className="text-brand-emerald" /> Why YAASHGUARD
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {advantages.map((f, i) => (
                <div key={i} className="pb-6 border-b border-slate-50">
                  <h4 className="text-sm font-black text-brand-navy uppercase mb-2 tracking-tight">{f.title}</h4>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="usage" className="bg-brand-navy rounded-[2rem] lg:rounded-[4rem] p-6 sm:p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-emerald/10 rounded-full blur-3xl" />
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-10 uppercase tracking-tight flex items-center gap-4">
              <Beaker className="text-brand-emerald" /> Recommended Usage
            </h3>
            <div className="space-y-6 relative z-10">
              {dosage.map((row, i) => (
                <div key={i} className="flex items-center justify-between gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 group hover:border-brand-emerald transition-colors">
                  <div>
                    <div className="text-lg font-black text-white uppercase tracking-tight mb-1">{row.type}</div>
                    <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Application guide</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black text-brand-emerald tracking-tight">{row.dose}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 font-medium mt-6 relative z-10">
              Feed mill sanitation: apply with DORB / grounded maize to effectively control pathogen
              contamination in poultry feed manufacturing.
            </p>
          </div>
        </div>

        {/* ── LeciSpread Technology ──────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="text-center mb-16">
            <span className="section-tag-light border-emerald-100 text-brand-emerald mb-5 inline-flex">
              <span className="w-1 h-1 rounded-full bg-brand-emerald inline-block" />
              Fortified with LeciSpread Technology
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-navy mb-4 uppercase">
              Uniform <span className="text-brand-emerald">Coverage</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">
              A dry surface-active support that helps the active system spread more uniformly across feed
              particles, dust, and mixer residues for improved contact and performance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leciSpread.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 text-brand-emerald group-hover:bg-brand-emerald group-hover:text-white transition-colors duration-500">
                  <item.icon size={28} />
                </div>
                <h4 className="text-base font-heading font-black text-brand-navy mb-3 uppercase tracking-tight leading-snug">{item.title}</h4>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Footer CTA ──────────────────────────────────── */}
        <div className="text-center">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleDownload('YAASHGUARD')}
              className="inline-flex items-center gap-3 px-10 py-6 bg-white text-brand-navy border border-slate-200 rounded-3xl font-black uppercase tracking-widest text-sm hover:border-brand-emerald hover:text-brand-emerald transition-all shadow-lg"
            >
              Download Leaflet <FileDown size={18} />
            </button>
            <Link to="/#contact" className="inline-flex items-center gap-4 px-12 py-6 bg-brand-navy text-white rounded-3xl font-black uppercase tracking-widest text-sm hover:bg-brand-emerald transition-all shadow-2xl">
              Enquire about YAASHGUARD <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YaashGuardPage;
