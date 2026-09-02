import { motion } from 'framer-motion';
import { Shield, Zap, Activity, ArrowRight, ChevronRight, Droplets, Heart, Sparkles, Filter, Beaker, BarChart3, Package, CheckCircle2, FlaskConical, Target, TrendingUp, Info, FileDown, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { handleDownload } from '../constants/docs';

const AzurroSaniXPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dualActions = [
    { title: "Water Sanitization", desc: "Helps reduce unwanted microbial load in drinking water and supports cleaner water systems.", icon: Shield },
    { title: "Water Acidification", desc: "Supports a more favorable water pH and gut environment through optimized acidification.", icon: FlaskConical },
  ];

  const features = [
    { title: "Dual-Action Value", desc: "Sanitization and acidification combined into a single step for simpler and tighter water management.", icon: Sparkles },
    { title: "Farm-Friendly Use", desc: "Easy continuous-use program that can be executed confidently by field and farm staff.", icon: Activity },
    { title: "Bird-First Focus", desc: "Cleaner water plus optimized organic acids help support gut balance, health, and livability.", icon: Heart },
  ];

  const coreFeaturesList = [
    "Supports a favorable pH for better intake",
    "Reduces mortality in adult birds and improves the FCR / Performance",
    "Helps to maintain gut health",
    "Reduces Bio-film and the consequences",
    "Improves sanitation performance",
    "Supports growth by reducing Subclinical / Clinical E. coli spp."
  ];

  const howItWorks = [
    { step: "1", title: "Sanitizes", desc: "Helps reduce unwanted microbial load in drinking water for safer conditions.", icon: Shield },
    { step: "2", title: "Supports Line Hygiene", desc: "Helps act against biofilm build-up inside water lines for long-term cleanliness.", icon: Droplets },
    { step: "3", title: "Acidifies", desc: "Supports better water quality management through optimized acidification.", icon: Beaker },
    { step: "4", title: "Supports Bird Performance", desc: "Promotes a favorable gut environment for better flock livability and consistency.", icon: TrendingUp },
  ];

  const farmAdvantages = [
    { title: "All-in-One Program", desc: "One product instead of separate acidifier and sanitizer programs." },
    { title: "Simple Application", desc: "Simple daily application for field teams and routine farm use." },
    { title: "Antibiotic Compatible", desc: "Fully compatible with antibiotic treatments." },
    { title: "Economical", desc: "Highly economical for continuous use programs." },
  ];

  const roiItems = [
    { label: "Improved FCR", desc: "Lower feed cost per kg gain." },
    { label: "Lower Mortality", desc: "Particularly in finisher stage due to CRD/CCRD." },
    { label: "Better Growth Rate", desc: "Earlier market weight achievement." },
    { label: "Reduced Disease Pressure", desc: "Lower medication and mortality costs." },
    { label: "Cleaner Water", desc: "Consistent intake and uniform flock performance." },
    { label: "Higher Profitability", desc: "Increased economic return per bird." },
  ];

  return (
    <div className="bg-[#fbfbfc] min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-cyan-500/[0.03] rounded-full blur-[120px]" />
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
            <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-[100px] opacity-40 animate-pulse-slow" />
            <div className="relative bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[3.5rem] p-6 sm:p-8 md:p-16 border border-slate-100 shadow-[0_20px_60px_rgba(43,57,144,0.08)] overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50/50 to-transparent pointer-events-none" />
              <motion.img
                src="/prom2.webp"
                alt="AZURRO Sani-X"
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(6,182,212,0.12)] group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
              />
              <div className="absolute top-10 right-10 flex items-center gap-2 px-5 py-2 rounded-full bg-brand-navy text-white font-bold text-[10px] uppercase tracking-[0.2em] shadow-lg">
                <Filter size={12} className="text-cyan-400" />
                Dual Action Support
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
                <span className="w-1 h-1 rounded-full bg-cyan-500 inline-block" />
                AZURRO Sani-X
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-brand-navy mb-8 leading-tight tracking-tight uppercase">
              Safe Water. <br />
              <span className="text-cyan-600">Smarter Protection.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10 font-medium">
              Water is one of the most critical nutrients in poultry production, yet it is often the most overlooked. When drinking water carries excess microbial load, biofilm challenge or inconsistent pH, it can reduce water quality, compromise gut balance, and affect overall flock performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {features.map((f, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <f.icon className="text-cyan-600 mb-3" size={24} />
                  <div className="font-heading font-bold text-[10px] text-brand-navy uppercase tracking-widest mb-1">{f.title}</div>
                  <div className="text-[10px] text-slate-400 font-medium leading-tight">{f.desc}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleDownload('AZURRO SANI-X')}
                className="px-10 py-5 rounded-2xl bg-cyan-600 text-white font-black text-sm uppercase tracking-widest flex items-center gap-3 transition-all hover:bg-cyan-700 shadow-xl shadow-cyan-600/10 group"
              >
                Download Literature <FileDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              <a href="#dosage" className="px-10 py-5 rounded-2xl bg-brand-navy text-white font-black text-sm uppercase tracking-widest flex items-center gap-3 transition-all hover:bg-brand-magenta shadow-xl shadow-brand-navy/10">
                View Dosage <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── One Solution. Two Actions. ──────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-navy mb-4 uppercase">One Solution. <span className="text-cyan-600">Two Actions.</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">Sanitization and acidification in a single step for simpler, tighter water management.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {dualActions.map((action, idx) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={idx}
                className="bg-white p-10 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] border border-slate-100 shadow-xl group"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-cyan-600 transition-colors duration-500">
                  <action.icon className="text-cyan-600 group-hover:text-white transition-colors duration-500" size={32} />
                </div>
                <h4 className="text-2xl font-heading font-bold text-brand-navy mb-4 uppercase tracking-tight">{action.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">{action.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Core Features List ──────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-navy mb-8 uppercase tracking-tight">Core <span className="text-cyan-600">Features</span></h2>
            <div className="grid gap-4">
              {coreFeaturesList.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-cyan-200 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-cyan-600" size={18} />
                  </div>
                  <span className="text-slate-700 font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-brand-navy rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[3.5rem] p-10 lg:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            <h3 className="text-2xl font-heading font-black text-white mb-6 uppercase">Why AZURRO Sani-X?</h3>
            <p className="text-slate-300 leading-relaxed text-lg font-medium">
              Its time-tested blend of selected organic acids, supported by a potent anti-microbial component, helps maintain clean, pathogen-free drinking water, supports better waterline hygiene, and creates a more favorable environment for bird health and performance.
            </p>
            <div className="mt-10 pt-10 border-t border-white/10 grid grid-cols-1 gap-6">
              <div className="flex items-center gap-6">
                <div className="text-cyan-400 text-5xl font-black shrink-0">&gt; 95%</div>
                <div>
                  <div className="text-white font-bold uppercase tracking-widest text-xs mb-1">Microbial Reduction</div>
                  <div className="text-white/50 text-[10px] leading-tight max-w-[200px]">Clearly shows the reduction in total microorganisms after treatment.</div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <div className="text-white/40 text-[9px] uppercase font-bold tracking-[0.2em] mb-1">Additional Benefits</div>
                {[
                  "Reduces Biofilm Formation over long usage",
                  "Supports cleaner water lines",
                  "Nano-barrier support for secondary pathogen suppression"
                ].map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-cyan-500" />
                    <span className="text-white/80 text-xs font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Key Benefits ───────────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Hard Water Stability", desc: "Maintains stable acidic conditions even in high mineral (hard) water", icon: Shield },
              { title: "Growth Support", desc: "Promotes faster growth and better weight gain", icon: TrendingUp },
              { title: "Sustained Activity", desc: "Supports long-lasting activity in the gut for improved performance", icon: Activity },
              { title: "Pathogen Control", desc: "Lowers harmful bacterial load in drinking water", icon: Filter },
            ].map((benefit, bIdx) => (
              <div key={bIdx} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl hover:border-cyan-200 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors">
                  <benefit.icon className="text-cyan-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <h4 className="text-brand-navy font-bold uppercase tracking-tight mb-2">{benefit.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── How It Works Steps ──────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-navy mb-4 uppercase">How It <span className="text-cyan-600">Works</span></h2>
            <p className="text-slate-500 font-medium">A systematic approach to total water hygiene.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg text-center relative overflow-hidden group">
                <div className="absolute -top-4 -right-4 text-8xl font-black text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">{item.step}</div>
                <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-cyan-600" size={32} />
                </div>
                <h4 className="text-xl font-heading font-bold text-brand-navy mb-3 uppercase tracking-tight relative z-10">{item.title}</h4>
                <p className="text-sm text-slate-500 font-medium relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Farm Advantages & ROI ───────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32 grid lg:grid-cols-2 gap-6 sm:p-8 lg:p-12">
          <div className="bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 md:p-14 border border-slate-100 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-brand-navy mb-10 flex items-center gap-3 uppercase">
              <Sparkles className="text-brand-magenta" /> Farm Advantages
            </h3>
            <div className="grid gap-6">
              {farmAdvantages.map((adv, idx) => (
                <div key={idx} className="flex flex-wrap gap-4 items-start p-6 bg-slate-50 rounded-2xl">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-navy mb-1 uppercase text-sm tracking-wide">{adv.title}</h4>
                    <p className="text-slate-500 text-sm font-medium">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 md:p-14 border border-slate-100 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-brand-navy mb-10 flex items-center gap-3 uppercase">
              <TrendingUp className="text-cyan-600" /> Farmer ROI Impact
            </h3>
            <div className="grid gap-4">
              {roiItems.map((roi, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-cyan-50/50 rounded-2xl border border-cyan-100">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                    <div>
                      <div className="font-bold text-brand-navy text-sm uppercase tracking-tight">{roi.label}</div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{roi.desc}</div>
                    </div>
                  </div>
                  <Target size={18} className="text-cyan-200" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Dosage & Packaging ──────────────────────────── */}
        <div id="dosage" className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-brand-navy rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[3.5rem] p-10 lg:p-14 text-white">
            <h3 className="text-2xl sm:text-3xl font-heading font-black mb-8 uppercase flex items-center gap-4">
              <FlaskConical className="text-cyan-400" /> Recommendation
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4 italic">Standard Recommendation</h4>
                <div className="text-4xl font-black mb-2">2–3 ml onwards</div>
                <p className="text-slate-400 font-medium uppercase tracking-widest text-[10px]">per 10 Litre water</p>
              </div>
              <div className="pt-8 border-t border-white/10">
                <h4 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4 italic">Prevention Support</h4>
                <p className="text-white/60 text-xs mb-4 leading-relaxed">To prevent CRD, E.coli spp build-up & chronic farm challenges:</p>
                <div className="text-4xl font-black mb-2">3 ml+</div>
                <p className="text-slate-400 font-medium uppercase tracking-widest text-[10px]">per 10 Litre water</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[3.5rem] p-10 lg:p-14 border border-slate-100 shadow-xl flex flex-col justify-center items-center text-center">
            <div className="w-24 h-24 rounded-3xl bg-slate-50 flex items-center justify-center mb-8">
              <Package className="text-brand-magenta" size={48} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-brand-navy mb-4 uppercase">Packaging</h3>
            <div className="text-5xl font-black text-brand-magenta mb-4">5 Litres</div>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">HDPE Jar</p>
          </div>
        </div>

        {/* ── Product Positioning ─────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32 mt-32">
          <div className="bg-cyan-600 rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-10 lg:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-white/10 rounded-full blur-[120px]" />
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-heading font-black mb-8 uppercase italic">Dual-Action Poultry Water Management</h2>
              <p className="text-xl font-bold leading-relaxed opacity-90">
                AZURRO Sani-X is positioned as an advanced poultry water sanitization and acidification solution designed to improve drinking water quality, support gut health, reduce microbial pressure, and enhance flock performance.
              </p>
              <div className="mt-12 flex justify-center items-center gap-4">
                <span className="h-[2px] w-12 bg-white/30" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Integrated Bio-Security</span>
                <span className="h-[2px] w-12 bg-white/30" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer Info ─────────────────────────────────── */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-100 shadow-sm text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            <Info size={14} className="text-cyan-600" />
            Product of Yaashvan Veterinary Services | AZURRO Quality Standard
          </div>
        </div>
      </div>
    </div>
  );
};

export default AzurroSaniXPage;
