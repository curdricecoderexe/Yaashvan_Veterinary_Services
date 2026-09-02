import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Activity, ArrowRight, ChevronRight, Droplets, FlaskConical, Beaker, BarChart3, AlertTriangle, Eye, CheckCircle2, Wind, Sparkles, ShieldAlert, Target, FileDown, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { handleDownload } from '../constants/docs';

const VirutrapPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const applications = [
    { title: "Water Sanitization", icon: Droplets, desc: "Eliminates bacteria, viruses, and fungi in farm drinking systems." },
    { title: "Aerial Spraying", icon: Wind, desc: "Controls airborne pathogens in high-density livestock housing." },
    { title: "Surface Disinfection", icon: Sparkles, desc: "Powerful cleaning for floors, walls, and equipment." },
    { title: "Foot & Vehicle Baths", icon: ShieldAlert, desc: "Essential biosecurity barrier at entry points." },
  ];

  const features = [
    { title: "Broad Spectrum", desc: "Effective against all major virus families, bacteria, and fungi." },
    { title: "Eco-Friendly", desc: "Degradable components with no persistent environmental impact." },
    { title: "Safe Formulation", desc: "Non-corrosive at working dilutions and safe for livestock exposure." },
    { title: "Rapid Action", desc: "Quickly neutralizes pathogens even in organic matter presence." },
  ];

  const dosage = [
    { type: "Drinking Water", dose: "1 gm / 10 Litres of water" },
    { type: "Aerial Spray", dose: "5 gm / 1 Litre of water (once daily)" },
    { type: "Surface Cleaning", dose: "5 - 10 gm / 1 Litre of water" },
  ];

  return (
    <div className="bg-[#fbfbfc] min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-red-500/5 rounded-full blur-[120px]" />
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
            <div className="absolute inset-0 bg-red-500/10 rounded-full blur-[100px] opacity-40 animate-pulse-slow" />
            <div className="relative bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[3.5rem] p-6 sm:p-8 md:p-16 border border-slate-100 shadow-[0_20px_60px_rgba(220,38,38,0.08)] overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50/50 to-transparent pointer-events-none" />
              <motion.img
                src="/virutrap.webp"
                alt="Virutrap Disinfectant"
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(220,38,38,0.12)] group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
              />
              <div className="absolute top-10 right-10 flex items-center gap-2 px-5 py-2 rounded-full bg-brand-navy text-white font-bold text-[10px] uppercase tracking-[0.2em] shadow-lg">
                <ShieldCheck size={12} className="text-red-500" />
                Biosecurity Gold Standard
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <span className="section-tag-light border-red-100 text-red-600">
                <span className="w-1 h-1 rounded-full bg-red-500 inline-block" />
                Advanced Oxidizing Agent
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-brand-navy mb-8 leading-tight tracking-tight uppercase">
              VIRU<span className="text-red-600">TRAP</span>
            </h1>
            <h3 className="text-xl md:text-2xl font-bold text-slate-500 mb-6 uppercase tracking-tight">The Sentinel of Biosecurity. Broad Spectrum Protection.</h3>
            <p className="text-lg text-slate-500 leading-relaxed mb-10 font-medium">
              A high-performance disinfectant containing Potassium Monopersulphate. Virutrap provides ultimate biosecurity for livestock farms through rapid oxidation of pathogen cellular components.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleDownload('VIRUTRAP')}
                className="px-10 py-5 rounded-2xl bg-red-600 text-white font-black text-sm uppercase tracking-widest flex items-center gap-3 transition-all hover:bg-brand-navy shadow-xl shadow-red-600/10 group"
              >
                Download Literature <FileDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              <a href="#usage" className="px-10 py-5 rounded-2xl bg-brand-navy text-white font-bold text-lg flex items-center gap-3 transition-all hover:bg-red-600 shadow-xl shadow-brand-navy/10">
                Usage Protocols <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Applications Grid ──────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-navy mb-4 uppercase">Versatile <span className="text-red-600">Defense</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">One product for multiple biosecurity critical control points.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-500">
                  <app.icon size={28} />
                </div>
                <h4 className="text-lg font-heading font-black text-brand-navy mb-3 uppercase tracking-tight">{app.title}</h4>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Why Virutrap Section ────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-6 sm:p-8 lg:p-12 mb-16 md:mb-24 lg:mb-32">
          <div className="bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 lg:p-12 border border-slate-100 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-brand-navy mb-10 flex items-center gap-4 uppercase">
              <Target className="text-red-600" /> Key Features
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="pb-6 border-b border-slate-50">
                  <h4 className="text-sm font-black text-brand-navy uppercase mb-2 tracking-tight">{f.title}</h4>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="usage" className="bg-brand-navy rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-10 uppercase tracking-tight flex items-center gap-4">
              <Beaker className="text-red-500" /> Recommended Dosage
            </h3>
            <div className="space-y-6 relative z-10">
              {dosage.map((row, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-white/5 rounded-3xl border border-white/10 group hover:border-red-500 transition-colors">
                  <div>
                    <div className="text-lg font-black text-white uppercase tracking-tight mb-1">{row.type}</div>
                    <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Application guide</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-red-500 tracking-tighter">{row.dose}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Footer CTA ──────────────────────────────────── */}
        <div className="text-center">
          <Link to="/#contact" className="inline-flex items-center gap-4 px-12 py-6 bg-brand-navy text-white rounded-3xl font-black uppercase tracking-widest text-sm hover:bg-red-600 transition-all shadow-2xl">
            Order Virutrap Now <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VirutrapPage;
