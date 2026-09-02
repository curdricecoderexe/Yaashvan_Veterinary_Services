import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Activity, ChevronRight, ArrowRight, Star, Quote, Package, Thermometer, Sparkles, TrendingUp, FlaskConical, Target, AlertTriangle, Info, BarChart3, Sun, HeartPulse, CheckCircle2, RefreshCw, FileDown, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { handleDownload } from '../constants/docs';

const GoldMaxxPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { icon: Sparkles, title: "20x Uptake", desc: "Fortified with alkaloid technology that enhances curcumin absorption up to 2000%." },
    { icon: ShieldCheck, title: "Stress Resilience", desc: "Supports antioxidant balance and oxidative stress management during production stress." },
    { icon: Activity, title: "Gut Integrity", desc: "Supports digestion, nutrient absorption, and metabolic wellness." },
  ];

  const comparison = [
    { element: "Resilience", gold: "Antioxidant & metabolic support", other: "Lower content – Low Support" },
    { element: "Absorption Enhancer", gold: "Fortified with Alkaloid (20X)", other: "No fortification, industry by-product only" },
    { element: "Curcuminoids", gold: "Standardized content", other: "Uncertain / inconsistent" },
    { element: "Easy Blending", gold: "Dispersion with dietary fats", other: "Highly variable; poor mixing" },
    { element: "Heavy Metals", gold: "Within permissible limits", other: "May exceed permissible limits" },
    { element: "Gut Efficiency", gold: "High absorption value", other: "Limited absorption value" },
    { element: "Natural Tone", gold: "Pigmentation consistency", other: "Uneven tone" },
    { element: "Antibiotic Fit", gold: "Supports reduction programs", other: "Claim – But Not effective" },
  ];

  const useCases = [
    { title: "Heat Stress", icon: Sun, desc: "Maintains oxidative balance during high environmental stress." },
    { title: "Vaccination", icon: HeartPulse, desc: "Supports recovery and physiological balance during vaccine windows." },
    { title: "Feed Change", icon: RefreshCw, desc: "Helps birds adapt during nutritional transition periods." },
    { title: "Performance Dip", icon: TrendingUp, desc: "Supports productivity during metabolic stress dips." },
    { title: "Gut Inflammation", icon: Activity, desc: "Supports gut integrity and digestive wellness." },
    { title: "Antioxidant", icon: ShieldCheck, desc: "Supports oxidative defense and cellular protection." },
  ];

  const dosage = [
    { type: "Routine Use", dose: "250 – 500 ml / Ton of feed" },
    { type: "Stress Window", dose: "500 – 750 ml / Ton of feed" },
  ];

  return (
    <div className="bg-[#fbfbfc] min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-yellow-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-brand-magenta/[0.02] rounded-full blur-[100px]" />
        <div className="absolute inset-0 hex-pattern opacity-30" />
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
            <div className="absolute inset-0 bg-yellow-500/10 rounded-full blur-[100px] opacity-40 animate-pulse-slow" />
            <div className="relative bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[3.5rem] p-6 sm:p-8 md:p-16 border border-slate-100 shadow-[0_20px_60px_rgba(43,57,144,0.08)] overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50/50 to-transparent pointer-events-none" />
              <motion.img
                src="/gold-maxx.webp"
                alt="Gold Maxx Advanced Curcumin"
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(234,179,8,0.12)] group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
              />
              <div className="absolute top-10 right-10 flex items-center gap-2 px-5 py-2 rounded-full bg-brand-navy text-white font-bold text-[10px] uppercase tracking-[0.2em] shadow-lg">
                <Star size={12} className="text-yellow-500 fill-yellow-500" />
                20X Absorption
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <span className="section-tag-light">
                <span className="w-1 h-1 rounded-full bg-yellow-500 inline-block" />
                UP TO 20x uptake (2000%)
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-brand-navy mb-8 leading-tight tracking-tight uppercase">
              GOLD <span className="text-yellow-500">MAXX</span>
            </h1>
            <h3 className="text-xl md:text-2xl font-bold text-slate-500 mb-6 uppercase tracking-tight italic">Reliable turmeric solution fortified with an absorption-enhancer alkaloid.</h3>

            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl mb-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/[0.03] rounded-full -mr-16 -mt-16" />
              <p className="text-slate-500 leading-relaxed font-medium text-sm">
                Gold MAXX is an advanced curcumin-based poultry support formulation developed to improve antioxidant balance, gut integrity, nutrient utilization, and production performance. Fortified with an advanced absorption-enhancer alkaloid, it improves curcumin uptake up to 20 times over standard formulations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {features.map((f, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <f.icon size={20} className="text-yellow-600 mb-2" />
                  <div className="font-heading font-black text-[10px] text-brand-navy uppercase tracking-widest mb-1">{f.title}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase leading-tight">{f.desc}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleDownload('GOLD MAXX')}
                className="px-10 py-5 rounded-2xl bg-yellow-500 text-brand-navy font-black text-sm uppercase tracking-widest flex items-center gap-3 transition-all hover:bg-yellow-600 shadow-xl shadow-yellow-500/10 group"
              >
                Download Literature <FileDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              <a href="#dosage" className="px-10 py-5 rounded-2xl bg-brand-navy text-white font-black text-sm uppercase tracking-widest flex items-center gap-3 transition-all hover:bg-brand-magenta shadow-xl shadow-brand-navy/10">
                View Dosage <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Why Gold MAXX? & Performance ────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32 grid lg:grid-cols-2 gap-6 sm:p-8 lg:p-12">
          <div className="bg-brand-navy rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px]" />
            <h3 className="text-2xl sm:text-3xl font-heading font-black mb-10 uppercase italic">Why Gold <span className="text-yellow-500">MAXX?</span></h3>
            <div className="space-y-6">
              {[
                { title: "Advanced Curcumin Platform", desc: "High-purity standardized curcumin developed for poultry performance." },
                { title: "20x Absorption Tech", desc: "Fortified with alkaloid technology for 2000% higher absorption." },
                { title: "Oxidative Resilience", desc: "Supports antioxidant balance during extreme production stress." },
                { title: "Gut & Metabolic Wellness", desc: "Supports digestion, nutrient absorption, and gut integrity." },
                { title: "Immunity Support", desc: "Supports shell quality, hatchability, and recovery outcomes." }
              ].map((item, i) => (
                <div key={i} className="flex flex-wrap gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <CheckCircle2 className="text-yellow-500 shrink-0" size={18} />
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-[10px] text-slate-400 font-bold">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 lg:p-12 border border-slate-100 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-brand-navy mb-10 uppercase italic text-center">How It <span className="text-yellow-500">Works</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { id: "01", title: "Gut Dispersion", desc: "Oil format supports uniform distribution with dietary fats." },
                { id: "02", title: "Uptake Tech", desc: "Fortified alkaloid helps improve curcuminoid bioavailability." },
                { id: "03", title: "Stress Support", desc: "Helps maintain oxidative balance during production stress." },
                { id: "04", title: "Gut Efficiency", desc: "Supports digestion, absorption, and metabolic wellness." }
              ].map((step, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 relative group">
                  <div className="text-3xl font-black text-yellow-500/20 group-hover:text-yellow-500 transition-colors mb-4">{step.id}</div>
                  <h4 className="text-sm font-black text-brand-navy uppercase mb-2">{step.title}</h4>
                  <p className="text-[10px] text-slate-400 font-bold leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Top 4 Benefits ─────────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="bg-slate-900 rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-10 lg:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-yellow-500/10 rounded-full blur-[120px]" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-heading font-black mb-16 uppercase text-center">Top 4 Benefits with <span className="text-yellow-500">Gold MAXX</span></h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: "Stress Defense", desc: "Supports resilience during critical stress windows." },
                  { title: "Metabolic Wellness", desc: "Supports digestion and nutrient utilization efficiency." },
                  { title: "Natural Tone", desc: "Supports pigmentation consistency and golden tone." },
                  { title: "Lower Inflamed Gut", desc: "Supports healthier gut condition and digestive stability." }
                ].map((ben, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center">
                    <div className="text-yellow-500 font-black text-2xl mb-4">0{i + 1}</div>
                    <h4 className="font-bold text-lg mb-2 uppercase tracking-tight">{ben.title}</h4>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed">{ben.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Comparison Section ──────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-navy mb-4 uppercase italic">Gold MAXX <span className="text-yellow-500">vs</span> Other Curcumin Oil</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">Why alkaloid fortification is the professional choice for performance.</p>
          </div>
          <div className="bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] border border-slate-100 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-20 -mt-20 blur-3xl opacity-50" />
            <div className="overflow-x-auto relative z-10">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-10 py-8 text-[10px] font-black uppercase tracking-widest text-slate-400">Key Performance Element</th>
                    <th className="px-10 py-8 text-[10px] font-black uppercase tracking-widest text-yellow-600">Gold MAXX</th>
                    <th className="px-10 py-8 text-[10px] font-black uppercase tracking-widest text-slate-400">Other Curcumin Oil</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {comparison.map((row, idx) => (
                    <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
                      <td className="px-10 py-6 font-bold text-brand-navy uppercase text-xs">{row.element}</td>
                      <td className="px-10 py-6 font-black text-brand-navy text-sm italic bg-yellow-500/[0.02]">"{row.gold}"</td>
                      <td className="px-10 py-6 text-slate-400 text-sm font-medium">{row.other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ── When to Use & Application Areas ──────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-navy mb-4 uppercase italic">Key Application <span className="text-yellow-500">Areas</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">Targeted support across critical production cycles.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((use, i) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={i}
                className="bg-white p-8 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] border border-slate-100 shadow-xl relative overflow-hidden"
              >
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-500/[0.03] rounded-full blur-2xl" />
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
                  <use.icon size={24} className="text-yellow-600" />
                </div>
                <h4 className="text-lg font-heading font-black text-brand-navy mb-3 uppercase tracking-tight">{use.title}</h4>
                <p className="text-xs text-slate-400 font-bold uppercase leading-relaxed">{use.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Dosing & Packaging ──────────────────────────── */}
        <div id="dosage" className="mb-16 md:mb-24 lg:mb-32 grid lg:grid-cols-2 gap-6 sm:p-8 lg:p-12">
          <div className="bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 md:p-14 border border-slate-100 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-brand-navy mb-10 flex items-center gap-3 uppercase">
              <Target className="text-yellow-600" /> Recommendation
            </h3>
            <div className="space-y-6">
              {dosage.map((row, idx) => (
                <div key={idx} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div>
                    <div className="font-black text-brand-navy text-lg uppercase tracking-tight">{row.type}</div>
                    <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Per Ton of feed</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-yellow-600">{row.dose}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 rounded-2xl bg-yellow-500/5 border border-yellow-500/10 flex items-center gap-4">
              <Info className="text-yellow-600" size={24} />
              <p className="text-[10px] text-brand-navy font-black uppercase tracking-wider">Suitable for Broilers, Layers, and Breeders.</p>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 md:p-14 border border-slate-100 shadow-xl flex flex-col justify-center items-center text-center">
            <div className="w-24 h-24 rounded-3xl bg-slate-50 flex items-center justify-center mb-8">
              <Package className="text-yellow-600" size={48} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-brand-navy mb-4 uppercase">Packaging</h3>
            <div className="text-5xl font-black text-yellow-500 mb-4">25 KG</div>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">CUPAC Premium Packing</p>
          </div>
        </div>

        {/* ── Product Positioning ─────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="bg-yellow-500 rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-10 lg:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-white/10 rounded-full blur-[120px]" />
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-heading font-black mb-8 uppercase italic">Advanced Absorption Curcumin Solution</h2>
              <p className="text-xl font-bold leading-relaxed opacity-90">
                Gold MAXX is positioned as a premium curcumin-based poultry performance solution fortified with advanced alkaloid absorption technology to support antioxidant defense, gut wellness, nutrient efficiency, and production consistency.
              </p>
              <div className="mt-12 flex justify-center items-center gap-4">
                <span className="h-[2px] w-12 bg-white/30" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Premium Veterinary Care</span>
                <span className="h-[2px] w-12 bg-white/30" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer Info ─────────────────────────────────── */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-100 shadow-sm text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            <Info size={14} className="text-yellow-600" />
            Product of Yaashvan Veterinary Services | Yaashvan Gold Standard
          </div>
        </div>
      </div>
    </div>
  );
};



export default GoldMaxxPage;
