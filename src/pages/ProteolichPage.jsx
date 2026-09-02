import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Activity, ArrowRight, ChevronRight, Droplets, FlaskConical, Beaker, BarChart3, AlertTriangle, Eye, CheckCircle2, Box, Cpu, Microscope, TrendingUp, FileDown, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { handleDownload } from '../constants/docs';

const ProteolichPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const enzymes = [
    { name: "Protease", desc: "Optimizes protein breakdown and amino acid availability." },
    { name: "Cellulase", desc: "Degrades complex cellulose into fermentable sugars." },
    { name: "Hemicellulase", desc: "Breaks down hemicellulose for better energy release." },
    { name: "Amylase", desc: "Enhances starch digestion and glycogen efficiency." },
    { name: "Phytase", desc: "Unlocks phosphorus from plant-based feed ingredients." },
    { name: "Lipase", desc: "Supports fat digestion and absorption of oil-soluble nutrients." },
  ];

  const highlights = [
    { icon: Activity, title: "FCR Optimization", desc: "Drastically improves feed conversion ratios across production cycles." },
    { icon: ShieldCheck, title: "Gut Stability", desc: "Reduces undigested nutrients that cause pathogenic proliferation." },
    { icon: TrendingUp, title: "Weight Gain", desc: "Supports uniform growth and maximum weight gain targets." },
  ];

  return (
    <div className="bg-[#fbfbfc] min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-emerald-500/5 rounded-full blur-[120px]" />
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
            <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-[100px] opacity-40 animate-pulse-slow" />
            <div className="relative bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[3.5rem] p-6 sm:p-8 md:p-16 border border-slate-100 shadow-[0_20px_60px_rgba(16,185,129,0.08)] overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50/50 to-transparent pointer-events-none" />
              <motion.img
                src="/proteolich.webp"
                alt="Proteolich Enzyme Complex"
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(16,185,129,0.12)] group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
              />
              <div className="absolute top-10 right-10 flex items-center gap-2 px-5 py-2 rounded-full bg-brand-navy text-white font-bold text-[10px] uppercase tracking-[0.2em] shadow-lg">
                <Cpu size={12} className="text-emerald-500" />
                Feed Mill Specialist
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <span className="section-tag-light border-emerald-100 text-emerald-600">
                <span className="w-1 h-1 rounded-full bg-emerald-500 inline-block" />
                Multi-Enzyme Catalyst
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-brand-navy mb-8 leading-tight tracking-tight uppercase">
              PROTEO<span className="text-emerald-600">LICH</span>
            </h1>
            <h3 className="text-xl md:text-2xl font-bold text-slate-500 mb-6 uppercase tracking-tight">A Dynamic Digestive & Immunity Catalyst.</h3>
            <p className="text-lg text-slate-500 leading-relaxed mb-10 font-medium">
              A synergistic blend of fortified digestive and metabolic enzymes designed to maximize nutrient utilization from feed ingredients. Proteolich ensures that every gram of feed counts toward livestock growth and profitability.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleDownload('PROTEOLICH')}
                className="px-10 py-5 rounded-2xl bg-emerald-600 text-white font-black text-sm uppercase tracking-widest flex items-center gap-3 transition-all hover:bg-brand-navy shadow-xl shadow-emerald-600/10 group"
              >
                Download Literature <FileDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              <a href="#enzymes" className="px-10 py-5 rounded-2xl bg-brand-navy text-white font-bold text-lg flex items-center gap-3 transition-all hover:bg-emerald-600 shadow-xl shadow-brand-navy/10">
                Enzyme Spectrum <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Key Highlights ──────────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((h, i) => (
              <div key={i} className="bg-white p-10 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] border border-slate-100 shadow-xl relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <h.icon size={32} className="text-emerald-600 mb-6 relative z-10" />
                <h4 className="text-xl font-heading font-black text-brand-navy mb-4 uppercase tracking-tight relative z-10">{h.title}</h4>
                <p className="text-sm text-slate-400 font-medium leading-relaxed relative z-10">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Enzyme Spectrum Table ───────────────────────── */}
        <div id="enzymes" className="mb-16 md:mb-24 lg:mb-32 grid lg:grid-cols-3 gap-6 sm:p-8 lg:p-12">
          <div className="lg:col-span-2 bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 lg:p-12 border border-slate-100 shadow-xl overflow-hidden relative">
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-brand-navy mb-12 flex items-center gap-4 uppercase">
              <Microscope className="text-emerald-600" /> Enzyme Composition
            </h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {enzymes.map((e, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="text-2xl font-black text-slate-100 group-hover:text-emerald-600 transition-colors duration-500">{(i + 1).toString().padStart(2, '0')}</div>
                  <div>
                    <h4 className="font-heading font-bold text-brand-navy mb-1 uppercase text-sm tracking-tight">{e.name}</h4>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-navy rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
              <Box size={40} className="text-emerald-500" />
            </div>
            <h3 className="text-2xl font-heading font-bold mb-4 uppercase tracking-tight">Recommendation</h3>
            <div className="text-4xl font-black text-emerald-500 mb-2">500 gm</div>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Per Ton of Feed</p>
            <div className="mt-10 p-4 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em]">
              Poultry • Swine • Aqua
            </div>
          </div>
        </div>

        {/* ── Footer CTA ──────────────────────────────────── */}
        <div className="text-center">
          <Link to="/#contact" className="inline-flex items-center gap-4 px-12 py-6 bg-brand-navy text-white rounded-3xl font-black uppercase tracking-widest text-sm hover:bg-emerald-600 transition-all shadow-2xl">
            Technical Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProteolichPage;
