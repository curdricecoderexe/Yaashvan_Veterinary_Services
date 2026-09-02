import { motion } from 'framer-motion';
import { Shield, Zap, Activity, ArrowRight, ChevronRight, Heart, Sparkles, Layers, Droplets, Microscope, Package, CheckCircle2, FlaskConical, Target, AlertTriangle, Info, RefreshCw, BarChart3, FileDown, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { handleDownload } from '../constants/docs';

const HepatoshieldPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dualSupports = [
    {
      title: "Hepatostimulant Support",
      desc: "Helps maintain liver performance and supports metabolic efficiency for better nutrient availability.",
      icon: Activity
    },
    {
      title: "Hepatoprotective Support",
      desc: "Supports the liver's natural defense against oxidative stress and helps protect cells from damage.",
      icon: Shield
    },
  ];

  const functionalSystems = [
    "Lipid Transport Support",
    "Cellular Renewal Support",
    "Lipid Antioxidant Support",
    "Regenerative Amino Support",
    "Detox Support",
    "Antioxidant Defense",
    "Metabolic Efficiency"
  ];

  const advantages = [
    { title: "Liver Activity", desc: "Supports maintenance of efficient hepatic function." },
    { title: "Fat Handling", desc: "Helps birds utilize dietary lipids more effectively." },
    { title: "Productivity", desc: "Supports birds to perform more consistently throughout the cycle." },
    { title: "Toxin Resilience", desc: "Aids in maintenance of liver health during production challenges." },
  ];

  const dosage = [
    { bird: "Broiler", amount: "1 kg / ton", frequency: "In feed" },
    { bird: "Breeder", amount: "1 kg / ton", frequency: "In feed" },
    { bird: "Layer (< 30 weeks)", amount: "1 kg / ton", frequency: "In feed" },
    { bird: "Layer (> 30 weeks)", amount: "500 g / ton", frequency: "In feed" },
  ];

  return (
    <div className="bg-[#fbfbfc] min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-brand-emerald/[0.03] rounded-full blur-[120px]" />
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
            <div className="absolute inset-0 bg-brand-emerald/10 rounded-full blur-[100px] opacity-40 animate-pulse-slow" />
            <div className="relative bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[3.5rem] p-6 sm:p-8 md:p-16 border border-slate-100 shadow-[0_20px_60px_rgba(43,57,144,0.08)] overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50/50 to-transparent pointer-events-none" />
              <motion.img
                src="/hepatoshield.webp"
                alt="Hepatoshield Liver Support"
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,166,81,0.12)] group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
              />
              <div className="absolute top-10 right-10 flex items-center gap-2 px-5 py-2 rounded-full bg-brand-navy text-white font-bold text-[10px] uppercase tracking-[0.2em] shadow-lg">
                <Microscope size={12} className="text-brand-emerald" />
                Liver Specialist
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
                <span className="w-1 h-1 rounded-full bg-brand-emerald inline-block" />
                Integrated Hepatic Care
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-brand-navy mb-8 leading-tight tracking-tight uppercase">
              Hepato<span className="text-brand-emerald">shield</span>
            </h1>
            <h3 className="text-xl md:text-2xl font-bold text-slate-500 mb-4 uppercase tracking-tight italic">Protect the Liver. Improve Recovery. Leverage Performance.</h3>
            <p className="text-brand-emerald font-black text-[10px] uppercase tracking-[0.2em] mb-10">Targeted Physiological Support or Comprehensive Liver Care</p>

            <div className="bg-brand-emerald/5 p-8 rounded-[2.5rem] border border-brand-emerald/10 mb-10">
              <div className="text-brand-navy font-bold text-lg mb-4 italic">“A broad-spectrum liver support solution for poultry performance.”</div>
              <p className="text-slate-500 leading-relaxed font-medium mb-4">
                HEPATOSHIELD is a nutritional support formulation developed to maintain efficient liver activity, support recovery from toxin burden, and promote steady productivity across broilers, breeders, and layers.
              </p>
              <p className="text-slate-500 leading-relaxed font-medium">
                Modern poultry production places significant metabolic stress on the liver due to rapid growth, feed transitions, toxins, oxidative stress, and continuous production demands. HEPATOSHIELD is formulated to provide targeted liver support while improving nutrient handling, metabolic efficiency, tissue repair, and oxidative defense.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleDownload('HEPATOSHIELD')}
                className="px-10 py-5 rounded-2xl bg-brand-emerald text-white font-black text-sm uppercase tracking-widest flex items-center gap-3 transition-all hover:bg-brand-navy shadow-xl shadow-brand-emerald/10 group"
              >
                Download Literature <FileDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              <a href="#dosage" className="px-10 py-5 rounded-2xl bg-brand-navy text-white font-bold text-lg flex items-center gap-3 transition-all hover:bg-brand-magenta shadow-xl shadow-brand-navy/10">
                View Dosing <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Why HEPATOSHIELD? ─────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Comprehensive Care", desc: "Supports multiple physiological systems involved in liver function, metabolism, and detoxification." },
              { title: "Performance Support", desc: "Designed to maintain productivity and consistency during stress and toxin exposure." },
              { title: "Supports Recovery", desc: "Helps birds recover from metabolic burden and maintain efficient nutrient utilization." },
              { title: "Multi-Dimensional", desc: "Targets oxidative stress, lipid metabolism, and tissue repair simultaneously." },
            ].map((item, idx) => (
              <div key={idx} className="bg-brand-navy p-8 rounded-[2.5rem] text-white hover:bg-brand-emerald transition-colors duration-500">
                <h4 className="font-heading font-black mb-3 uppercase text-xs tracking-widest">{item.title}</h4>
                <p className="text-[11px] text-slate-300 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Functional Systems ──────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-navy mb-4 uppercase">Functional <span className="text-brand-emerald">Systems</span></h2>
            <p className="text-slate-500 font-medium italic">Targeted physiological support through 7 specialized complexes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Antioxidant Defense", roles: ["Supports oxidative protection", "Helps reduce cellular stress", "Assists tissue protection"], desc: "Helps neutralize oxidative damage and supports protection against free radicals." },
              { title: "Liver Performance", roles: ["Supports hepatic activity", "Improves nutrient handling", "Maintains metabolic efficiency"], desc: "Supports liver function and metabolic efficiency during production stress." },
              { title: "Lipid Transport", roles: ["Supports fat metabolism", "Improves lipid utilization", "Assists energy balance"], desc: "Helps mobilize and utilize fats efficiently for better energy utilization." },
              { title: "Detox Support", roles: ["Supports detox efficiency", "Helps clear toxin burden", "Assists metabolic cleansing"], desc: "Helps clear metabolic by-products and supports detoxification pathways." },
              { title: "Cellular Renewal", roles: ["Encourages tissue repair", "Supports recovery", "Helps maintain cell integrity"], desc: "Supports tissue renewal and repair mechanisms during stressful phases." },
              { title: "Regenerative Amino", roles: ["Supports amino acid availability", "Helps tissue restoration", "Assists recovery performance"], desc: "Supplies amino acids required for tissue restoration and resilience." },
              { title: "Lipid Antioxidant", roles: ["Supports liver protection", "Helps maintain oxidative balance", "Assists metabolic resilience"], desc: "Helps protect the liver from oxidative stress caused by metabolic overload." },
            ].map((system, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group">
                <h4 className="font-heading font-black text-brand-navy mb-4 uppercase text-sm tracking-tight border-b border-slate-50 pb-4">{system.title}</h4>
                <p className="text-xs text-slate-400 font-medium leading-relaxed mb-6 italic">{system.desc}</p>
                <div className="space-y-2">
                  {system.roles.map((role, rIdx) => (
                    <div key={rIdx} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-brand-emerald" />
                      <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── How It Works ────────────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="bg-brand-navy rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 lg:p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-brand-emerald/10 rounded-full blur-[120px]" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-heading font-black mb-8 uppercase">How it <span className="text-brand-emerald">Works</span></h2>
                <div className="space-y-8">
                  {[
                    { title: "7 Functional Systems", desc: "A multi-dimensional support for liver health, metabolic balance, detox efficiency and oxidative protection." },
                    { title: "Liver Support", desc: "Helps maintain efficient hepatic activity for better nutrient handling, recovery, and stable performance.", points: ["Nutrient handling", "Recovery", "Metabolic stability"] },
                    { title: "Metabolic Care", desc: "Supports fat utilization, cellular turnover and internal metabolic balance for productivity.", points: ["Fat utilization", "Cellular turnover", "Internal balance"] },
                    { title: "Oxidative Defense", desc: "Helps protect tissues against free radical stress, oxidative damage, and toxin challenges.", points: ["Free radical stress", "Oxidative damage", "Toxin resilience"] },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 group">
                      <div className="text-2xl sm:text-3xl font-heading font-black text-brand-emerald/20 group-hover:text-brand-emerald transition-colors">0{idx + 1}</div>
                      <div>
                        <h4 className="font-bold text-lg mb-1 uppercase tracking-tight">{item.title}</h4>
                        <p className="text-sm text-slate-400 font-medium leading-relaxed mb-3">{item.desc}</p>
                        {item.points && (
                          <div className="flex flex-wrap gap-2">
                            {item.points.map((p, pi) => (
                              <span key={pi} className="px-2 py-1 bg-white/5 rounded-md text-[9px] font-bold uppercase tracking-widest text-slate-500">{p}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 p-10 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] border border-white/10 text-center">
                    <RefreshCw className="text-brand-emerald mx-auto mb-6" size={48} />
                    <div className="text-3xl font-black mb-1">Steady</div>
                    <div className="text-[10px] uppercase font-bold text-slate-500">Productivity</div>
                  </div>
                  <div className="bg-white/5 p-10 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] border border-white/10 text-center mt-12">
                    <Activity className="text-brand-emerald mx-auto mb-6" size={48} />
                    <div className="text-3xl font-black mb-1">Efficient</div>
                    <div className="text-[10px] uppercase font-bold text-slate-500">Liver Activity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-navy mb-4 uppercase">Benefits of <span className="text-brand-emerald">Hepatoshield</span></h2>
            <p className="text-slate-500 font-medium">Empowering performance through hepatic excellence.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Supports Liver Activity", desc: "Helps maintain efficient hepatic function and metabolic performance.", sub: ["Better nutrient utilization", "Improved metabolic activity", "Consistent liver support"] },
              { title: "Improves Fat Handling", desc: "Supports better utilization of dietary lipids and metabolic processing.", sub: ["Better energy utilization", "Improved metabolic efficiency", "Supports feed conversion"] },
              { title: "Combats Oxidative Stress", desc: "Helps protect cells from oxidative damage and supports resilience.", sub: ["Reduces oxidative pressure", "Supports tissue protection", "Improves recovery response"] },
              { title: "Supports Productivity", desc: "Helps birds perform more consistently during stressful periods.", sub: ["Better production consistency", "Improved flock stability", "Supports overall performance"] },
            ].map((benefit, bIdx) => (
              <div key={bIdx} className="bg-white p-10 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <div className="text-4xl font-black text-brand-emerald/10 mb-6 italic">0{bIdx + 1}</div>
                <h4 className="font-heading font-black text-brand-navy mb-3 uppercase text-sm tracking-tight">{benefit.title}</h4>
                <p className="text-xs text-slate-400 font-medium leading-relaxed mb-6">{benefit.desc}</p>
                <div className="space-y-2 pt-6 border-t border-slate-50">
                  {benefit.sub.map((s, si) => (
                    <div key={si} className="flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-brand-emerald" />
                      <span className="text-[10px] font-bold text-brand-navy uppercase tracking-tight">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Key Application Areas ──────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="bg-slate-50 rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 lg:p-12 md:p-20 border border-slate-100 relative overflow-hidden">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-navy mb-12 uppercase">Key <span className="text-brand-emerald">Application</span> Areas</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Liver support during stress",
                "Recovery from toxin burden",
                "Oxidative stress management",
                "Nutrient handling support",
                "Metabolic efficiency support",
                "Productivity maintenance",
                "Feed transition support"
              ].map((area, aIdx) => (
                <div key={aIdx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center text-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-navy leading-tight">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Product Positioning ────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-heading font-black text-brand-navy mb-6 uppercase tracking-tight">Comprehensive Poultry Liver Support Solution</h3>
          <p className="text-slate-500 font-medium leading-relaxed italic border-l-4 border-brand-emerald pl-8 text-left">
            HEPATOSHIELD is positioned as a broad-spectrum liver support formulation that combines metabolic care, oxidative defense, detox support, and recovery assistance to help maintain poultry productivity and physiological balance under modern production conditions.
          </p>
        </div>

        {/* ── Dosage & Packaging ──────────────────────────── */}
        <div id="dosage" className="mb-16 md:mb-24 lg:mb-32 grid lg:grid-cols-2 gap-6 sm:p-8 lg:p-12">
          <div className="bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 md:p-14 border border-slate-100 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-brand-navy mb-10 flex items-center gap-3 uppercase">
              <Target className="text-brand-magenta" /> Dosage Protocol
            </h3>
            <div className="space-y-4">
              {dosage.map((row, idx) => (
                <div key={idx} className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <div>
                    <div className="font-black text-brand-navy text-lg uppercase tracking-tight">{row.bird}</div>
                    <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{row.frequency}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-brand-emerald">{row.amount}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 md:p-14 border border-slate-100 shadow-xl flex flex-col justify-center items-center text-center">
            <div className="w-24 h-24 rounded-3xl bg-slate-50 flex items-center justify-center mb-8">
              <Package className="text-brand-magenta" size={48} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-brand-navy mb-4 uppercase">Packaging</h3>
            <div className="text-5xl font-black text-brand-magenta mb-4">20 KG</div>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Industrial Feed Grade Bag</p>
            <div className="mt-8 pt-8 border-t border-slate-100 w-full">
              <div className="flex items-center justify-center gap-2 text-slate-400">
                <Info size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-center">Formulated for Performance Stability</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer Info ─────────────────────────────────── */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-100 shadow-sm text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            <Info size={14} className="text-brand-emerald" />
            Product of Yaashvan Veterinary Services | Quality Assured
          </div>
        </div>
      </div>
    </div>
  );
};

export default HepatoshieldPage;
