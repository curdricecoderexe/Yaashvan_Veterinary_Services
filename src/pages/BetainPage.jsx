import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Activity, ArrowRight, ChevronRight, Droplets, FlaskConical, Beaker, BarChart3, AlertTriangle, Eye, CheckCircle2, Sun, Thermometer, Waves, Heart, FileDown, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { handleDownload } from '../constants/docs';

const BetainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const functions = [
    { title: "Osmoregulation", desc: "Helps maintain cellular water balance and prevents dehydration during heat stress.", icon: Waves },
    { title: "Heat Stress", desc: "Reduces the negative impact of high environmental temperatures on flock productivity.", icon: Sun },
    { title: "Methyl Donor", desc: "Acts as a potent methyl donor for improved metabolic efficiency and liver health.", icon: Zap },
    { title: "Intestinal Health", desc: "Supports villi integrity and nutrient absorption during physiological stress.", icon: Heart },
  ];

  const benefits = [
    "Increases carcass yield and improves breast meat quality.",
    "Reduces the energy cost of maintaining osmotic balance.",
    "Improves tolerance to high salinity and water hardness.",
    "Supports growth performance during coccidiosis challenges.",
  ];

  return (
    <div className="bg-[#fbfbfc] min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-orange-500/5 rounded-full blur-[120px]" />
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
            <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-[100px] opacity-40 animate-pulse-slow" />
            <div className="relative bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[3.5rem] p-6 sm:p-8 md:p-16 border border-slate-100 shadow-[0_20px_60px_rgba(249,115,22,0.08)] overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50/50 to-transparent pointer-events-none" />
              <motion.img
                src="/betain.webp"
                alt="Betain Anti-Stress Supplement"
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(249,115,22,0.12)] group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
              />
              <div className="absolute top-10 right-10 flex items-center gap-2 px-5 py-2 rounded-full bg-brand-navy text-white font-bold text-[10px] uppercase tracking-[0.2em] shadow-lg">
                <Thermometer size={12} className="text-orange-500" />
                Anti-Stress Technology
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <span className="section-tag-light border-orange-100 text-orange-600">
                <span className="w-1 h-1 rounded-full bg-orange-500 inline-block" />
                Advanced Osmoregulator
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-brand-navy mb-8 leading-tight tracking-tight uppercase">
              BETA<span className="text-orange-600">IN</span>
            </h1>
            <h3 className="text-xl md:text-2xl font-bold text-slate-500 mb-6 uppercase tracking-tight">A Solution to Beat the Heat.</h3>
            <p className="text-lg text-slate-500 leading-relaxed mb-10 font-medium">
              A high-performance osmoregulator standardized for maximum biological activity. Betain helps poultry and livestock maintain physiological balance during extreme heat stress and environmental challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleDownload('BETAIN')}
                className="px-10 py-5 rounded-2xl bg-orange-600 text-white font-black text-sm uppercase tracking-widest flex items-center gap-3 transition-all hover:bg-brand-navy shadow-xl shadow-orange-600/10 group"
              >
                Download Literature <FileDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              <a href="#dosage" className="px-10 py-5 rounded-2xl bg-brand-navy text-white font-bold text-lg flex items-center gap-3 transition-all hover:bg-orange-600 shadow-xl shadow-brand-navy/10">
                Dosage Recommendation <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Key Functions Grid ──────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {functions.map((fn, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 text-orange-600">
                  <fn.icon size={24} />
                </div>
                <h4 className="text-lg font-heading font-black text-brand-navy mb-3 uppercase tracking-tight">{fn.title}</h4>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">{fn.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Technical Profile ───────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-6 sm:p-8 lg:p-12 mb-16 md:mb-24 lg:mb-32">
          <div className="bg-brand-navy rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
            <h3 className="text-2xl sm:text-3xl font-heading font-black mb-10 uppercase tracking-tight">Osmotic Resilience</h3>
            <div className="space-y-6">
              {benefits.map((text, i) => (
                <div key={i} className="flex flex-wrap gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 shrink-0 mt-1">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-sm font-medium text-slate-300 leading-relaxed">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="dosage" className="bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 lg:p-12 border border-slate-100 shadow-xl flex flex-col justify-center items-center text-center">
            <div className="w-20 h-20 rounded-3xl bg-orange-50 flex items-center justify-center mb-8">
              <Activity size={40} className="text-orange-600" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-brand-navy mb-4 uppercase">Usage Protocol</h3>
            <div className="text-4xl font-black text-orange-600 mb-2">500 gm – 1 kg</div>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Per Ton of Feed</p>
            <div className="mt-10 p-6 rounded-2xl bg-orange-50 border border-orange-100 flex items-center gap-4 text-left">
              <AlertTriangle className="text-orange-600 shrink-0" size={24} />
              <p className="text-[10px] text-brand-navy font-black uppercase tracking-wider leading-relaxed">
                Dosage varies based on environmental temperature and salt levels in water.
              </p>
            </div>
          </div>
        </div>

        {/* ── Footer CTA ──────────────────────────────────── */}
        <div className="text-center">
          <Link to="/#contact" className="inline-flex items-center gap-4 px-12 py-6 bg-brand-navy text-white rounded-3xl font-black uppercase tracking-widest text-sm hover:bg-orange-600 transition-all shadow-2xl">
            Combat Heat Stress <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BetainPage;
