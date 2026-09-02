import { motion } from 'framer-motion';
import { Shield, Zap, Activity, ArrowRight, ChevronRight, Beaker, Sparkles, TrendingUp, FlaskConical, Users, Package, CheckCircle2, AlertCircle, Info, Droplets, Target, HelpCircle, FileDown, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { handleDownload } from '../constants/docs';

const ProGainXPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const highlights = [
    { title: "Anti-Stress", desc: "Faster intestinal response to production stress.", icon: Zap },
    { title: "Performance Booster", desc: "Supports better nutrient utilization and FCR.", icon: TrendingUp },
    { title: "Uniform Flock Support", desc: "Encourages consistent body-weight gain.", icon: Users },
  ];

  const components = [
    {
      title: "Amino Acid Support",
      desc: "Methionine, Lysine, Threonine, and Arginine are performance-critical amino acids that support protein synthesis and gut integrity.",
      icon: Beaker
    },
    {
      title: "Choline Support",
      desc: "Supports liver function, fat metabolism, and nutrient transport during rapid growth.",
      icon: Activity
    },
    {
      title: "Mineral Support",
      desc: "Essential macro and trace minerals bridge hidden nutritional gaps to support superior performance.",
      icon: FlaskConical
    },
  ];

  const useCases = [
    { title: "Broiler Performance", desc: "For faster and more consistent growth response." },
    { title: "Flock Uniformity", desc: "Where body-weight uniformity is critical for market readiness." },
    { title: "Production Stress", desc: "During feed changes or routine production-related stress." },
    { title: "Genetic Potential", desc: "To help modern breeds express their high performance standards." },
  ];

  const dosage = [
    { species: "Broilers", amount: "5 – 10 ml", context: "Performance support" },
    { species: "Layers", amount: "10 – 20 ml", context: "Production cycle" },
    { species: "Breeders", amount: "30 ml", context: "Breeding performance" },
  ];

  return (
    <div className="bg-[#fbfbfc] min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-brand-magenta/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-brand-navy/[0.02] rounded-full blur-[100px]" />
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
            <div className="absolute inset-0 bg-brand-magenta/10 rounded-full blur-[100px] opacity-40 animate-pulse-slow" />
            <div className="relative bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[3.5rem] p-6 sm:p-8 md:p-16 border border-slate-100 shadow-[0_20px_60px_rgba(43,57,144,0.08)] overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50/50 to-transparent pointer-events-none" />
              <motion.img
                src="/prom1.webp"
                alt="G-ProGain X Growth Promoter"
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(146,39,143,0.12)] group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
              />
              <div className="absolute top-10 right-10 flex items-center gap-2 px-5 py-2 rounded-full bg-brand-navy text-white font-bold text-[10px] uppercase tracking-[0.2em] shadow-lg">
                <TrendingUp size={12} className="text-brand-magenta" />
                Performance Catalyst
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
                <span className="w-1 h-1 rounded-full bg-brand-magenta inline-block" />
                Poultry Performance Booster
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black mb-8 leading-tight tracking-tight uppercase">
              <span className="text-blue-700">G-PRO</span><span className="text-brand-magenta">GAIN X</span>
            </h1>
            <h3 className="text-xl md:text-2xl font-bold text-slate-500 mb-6 uppercase tracking-tight">Advanced Poultry Growth Promoter</h3>
            <p className="text-lg text-slate-500 leading-relaxed mb-10 font-medium italic">
              Growth. Uniformity. Performance.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-10">
              {highlights.map((h, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="font-heading font-black text-[10px] text-brand-magenta uppercase tracking-widest mb-1">{h.title}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase leading-tight">{h.desc}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleDownload('G-PROGAIN X')}
                className="px-10 py-5 rounded-2xl bg-brand-magenta text-white font-black text-sm uppercase tracking-widest flex items-center gap-3 transition-all hover:bg-brand-navy shadow-xl shadow-brand-magenta/10 group"
              >
                Download Literature <FileDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              <a href="#dosing" className="px-10 py-5 rounded-2xl bg-brand-navy text-white font-bold text-lg flex items-center gap-3 transition-all hover:bg-brand-magenta shadow-xl shadow-brand-navy/10">
                Dosage Protocol <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Why G-ProGainX ──────────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="bg-brand-navy rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[3.5rem] p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-magenta/10 rounded-full blur-[100px]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-3xl sm:text-4xl font-heading font-black mb-8 uppercase tracking-tight">Why <span className="text-brand-magenta">G-ProGain X?</span></h2>
              <div className="grid lg:grid-cols-2 gap-6 sm:p-8 lg:p-12 items-center">
                <p className="text-xl text-slate-300 leading-relaxed font-medium">
                  Modern poultry performance depends on a resilient intestine, consistent digestion, and efficient conversion of nutrients into growth. G-ProGainX is designed to support intestinal balance, improve nutrient availability, and help birds express more consistent performance across the flock.
                </p>
                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10">
                  <p className="text-sm text-slate-400 font-medium leading-relaxed">
                    Ideal for Broilers, Growers, Layers, and Breeders wherever better efficiency, feed response, and body-weight uniformity are required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Key Benefits ───────────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-navy mb-4 uppercase">Key <span className="text-brand-magenta">Benefits</span></h2>
            <p className="text-slate-500 font-medium italic">Precision support for modern production challenges.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Stress Response", desc: "Helps maintain a stronger intestinal lining and a more stable digestive response.", icon: Activity },
              { title: "Nutrient Utilization", desc: "Improves the productive use of feed nutrients for growth and performance.", icon: TrendingUp },
              { title: "Growth Uniformity", desc: "Encourages more consistent body-weight gain and flock development.", icon: Users },
              { title: "Feed Efficiency", desc: "Helps birds convert available nutrients more efficiently under field conditions.", icon: Zap },
            ].map((benefit, bIdx) => (
              <div key={bIdx} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-brand-magenta/5 flex items-center justify-center mb-6 group-hover:bg-brand-magenta transition-colors">
                  <benefit.icon className="text-brand-magenta group-hover:text-white transition-colors" size={24} />
                </div>
                <h4 className="text-brand-navy font-black uppercase tracking-tight mb-2 text-sm">{benefit.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── What is G-ProGainX ──────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 lg:p-12 md:p-20 border border-slate-100 shadow-xl relative overflow-hidden">
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-magenta/5 rounded-full blur-[100px]" />
            <div className="relative z-10 grid lg:grid-cols-5 gap-16 items-center">
              <div className="lg:col-span-3">
                <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-navy mb-8 uppercase">What is <span className="text-brand-magenta">G-ProGain X?</span></h2>
                <div className="space-y-6 text-lg text-slate-500 font-medium leading-relaxed">
                  <p>G-ProGainX is an advanced poultry growth promoter formulated with performance-critical amino acids, choline, and essential macro and trace minerals to bridge hidden nutritional gaps and support superior flock performance.</p>
                  <p>By supporting protein synthesis, liver efficiency, metabolic activity, and physiological resilience, it helps promote faster growth, improved production performance, better flock uniformity, and a stronger response during stress.</p>
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                {[
                  "Performance-critical Amino Acids",
                  "High-purity Choline Support",
                  "Essential Macro & Trace Minerals",
                  "Metabolic Activation Complex"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="text-brand-magenta" size={20} />
                    <span className="font-bold text-brand-navy text-sm uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Nutrient Support Logic ─────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-navy mb-4 uppercase">How It <span className="text-brand-magenta">Works</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">Bridging essential nutritional gaps during stressful conditions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "1. Amino acid support",
                desc: "Methionine, lysine, threonine, and arginine support protein synthesis, muscle growth, gut integrity, and feathering.",
                icon: Beaker
              },
              {
                title: "2. Choline support",
                desc: "Choline chloride supports liver function, fat metabolism, and nutrient transport during rapid growth.",
                icon: Activity
              },
              {
                title: "3. Mineral support",
                desc: "Provides key nutrients needed for efficient protein synthesis, tissue development, and metabolic activity.",
                icon: FlaskConical
              },
            ].map((comp, idx) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={idx}
                className="bg-white p-10 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] border border-slate-100 shadow-xl group"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-brand-magenta transition-colors duration-500">
                  <comp.icon className="text-brand-magenta group-hover:text-white transition-colors duration-500" size={32} />
                </div>
                <h4 className="text-xl font-heading font-bold text-brand-navy mb-4 uppercase tracking-tight">{comp.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{comp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── When to use ─────────────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32 grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-brand-navy rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[3.5rem] p-10 lg:p-14 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-magenta/10 rounded-full blur-3xl" />
            <h3 className="text-2xl font-heading font-black mb-8 uppercase flex items-center gap-4">
              <HelpCircle className="text-brand-magenta" /> Recommendation
            </h3>
            <div className="grid gap-4">
              {[
                { title: "Broilers", desc: "For faster and more consistent growth response." },
                { title: "Growers", desc: "Where efficiency and body-weight uniformity are important." },
                { title: "Layers & Breeders", desc: "During feed changes or routine production stress." },
                { title: "Field Situations", desc: "Where non-antibiotic performance support is preferred." },
              ].map((use, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-brand-magenta flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide text-brand-magenta mb-1">{use.title}</h4>
                    <p className="text-xs text-slate-400 font-medium">{use.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-navy uppercase tracking-tight">Growth <span className="text-brand-magenta">Impact</span></h2>
            <p className="text-slate-500 leading-relaxed text-lg font-medium">
              Achieving superior performance through metabolic efficiency and physiological resilience.
            </p>
            <div className="grid grid-cols-1 gap-6">
              {[
                { label: "Growth-Promoting Effect", desc: "Key nutrients for protein synthesis & tissue development." },
                { label: "Liver Efficiency", desc: "Optimized fat metabolism and nutrient transport." },
                { label: "Metabolic Activity", desc: "Enhanced metabolic response for faster growth achievement." }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                  <div className="text-brand-magenta font-black text-3xl shrink-0">0{i + 1}</div>
                  <div>
                    <div className="font-bold text-brand-navy uppercase text-sm mb-1">{item.label}</div>
                    <div className="text-xs text-slate-400 font-medium">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Dosing & Mixing ─────────────────────────────── */}
        <div id="dosing" className="mb-16 md:mb-24 lg:mb-32 grid lg:grid-cols-2 gap-6 sm:p-8 lg:p-12">
          <div className="bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 md:p-14 border border-slate-100 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-brand-navy mb-10 flex items-center gap-3 uppercase">
              <Target className="text-brand-magenta" /> Dosing Protocol
            </h3>
            <div className="space-y-4">
              {dosage.map((row, idx) => (
                <div key={idx} className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <div>
                    <div className="font-black text-brand-navy text-lg uppercase tracking-tight">{row.species}</div>
                    <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{row.context}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-brand-magenta">{row.amount}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">per 100 birds / day</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 rounded-2xl bg-brand-magenta/5 border border-brand-magenta/10 flex items-center gap-4">
              <AlertCircle className="text-brand-magenta" size={24} />
              <p className="text-xs text-brand-navy font-bold uppercase tracking-wider">Shake well before use. Keep in a cool, dark place.</p>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 md:p-14 border border-slate-100 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-brand-navy mb-10 flex items-center gap-3 uppercase">
              <Droplets className="text-brand-magenta" /> Mixing Instructions
            </h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-navy text-white flex items-center justify-center shrink-0 font-black">1</div>
                <div>
                  <h4 className="font-black text-brand-navy uppercase text-sm mb-1">Standard Dilution</h4>
                  <p className="text-slate-500 text-sm font-medium">Dilute G-ProGain X in drinking water for once-daily administration.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-navy text-white flex items-center justify-center shrink-0 font-black">2</div>
                <div>
                  <h4 className="font-black text-brand-navy uppercase text-sm mb-1">Usage Duration</h4>
                  <p className="text-slate-500 text-sm font-medium">Administer for 5–7 days or as advised by a nutritionist/veterinarian.</p>
                </div>
              </div>
              <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Available Pack Sizes</h4>
                  <div className="flex gap-3">
                    <span className="px-4 py-2 rounded-lg bg-slate-100 text-brand-navy font-black text-xs uppercase">5 Litre HDPE Jar</span>
                  </div>
                </div>
                <Package className="text-brand-magenta/20" size={48} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer Info ─────────────────────────────────── */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-100 shadow-sm text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            <Info size={14} className="text-brand-magenta" />
            Product of Yaashvan Veterinary Services | Quality Assured
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProGainXPage;
