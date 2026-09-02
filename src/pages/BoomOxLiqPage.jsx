import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Activity, ArrowRight, ChevronRight, Droplets, FlaskConical, Sparkles, AlertTriangle, Eye, CheckCircle2, Heart, FileDown, Shield, Award, Cpu, Settings, Thermometer, Leaf, BarChart3, TrendingUp, HelpCircle, Package, Star, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { handleDownload } from '../constants/docs';

const BoomOxLiqPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const keyFeatures = [
    {
      title: "Advanced Water Conditioning",
      desc: "Removes hardness, excess minerals, and unwanted impurities from water to improve overall water quality.",
      icon: Droplets,
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-600"
    },
    {
      title: "Powerful Disinfection",
      desc: "Kills harmful bacteria, viruses, fungi, algae, and protozoa present in water with high efficiency.",
      icon: Shield,
      color: "from-brand-magenta/20 to-purple-500/20",
      iconColor: "text-brand-magenta"
    },
    {
      title: "Automated Dosing",
      desc: "The intelligent control panel automatically maintains the required ORP and pH levels for effective treatment.",
      icon: Cpu,
      color: "from-brand-emerald/20 to-teal-500/20",
      iconColor: "text-brand-emerald"
    },
    {
      title: "24×7 Continuous Protection",
      desc: "Provides stable and long-lasting water sanitation with continuous monitoring and control.",
      icon: Activity,
      color: "from-indigo-500/20 to-blue-600/20",
      iconColor: "text-indigo-600"
    },
    {
      title: "pH Independent Functionality",
      desc: "Works effectively across different pH levels without reducing treatment performance.",
      icon: FlaskConical,
      color: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-orange-600"
    },
    {
      title: "Eco-Friendly & Safe",
      desc: "Reduces the need for excessive chemical usage and supports safer water management practices.",
      icon: Leaf,
      color: "from-emerald-500/20 to-green-600/20",
      iconColor: "text-emerald-600"
    }
  ];

  const farmBenefits = [
    {
      title: "Improves Animal Health",
      desc: "Clean water helps reduce disease outbreaks and improves immunity in poultry and livestock.",
      icon: Heart,
      badge: "🐔 Poultry & Livestock",
      color: "from-red-500/10 to-pink-500/10",
      iconColor: "text-red-500"
    },
    {
      title: "Enhances Productivity",
      desc: "Supports better growth rate, feed intake, egg production, and overall farm performance.",
      icon: TrendingUp,
      badge: "🐄 Peak Performance",
      color: "from-brand-emerald/10 to-teal-500/10",
      iconColor: "text-brand-emerald"
    },
    {
      title: "Reduces Waterborne Diseases",
      desc: "Effectively controls bacterial and viral contamination in drinking water systems.",
      icon: ShieldCheck,
      badge: "💧 Biosecurity",
      color: "from-blue-500/10 to-indigo-500/10",
      iconColor: "text-blue-500"
    },
    {
      title: "Cost Effective Solution",
      desc: "Minimizes medical expenses and maintenance costs caused by poor water quality.",
      icon: BarChart3,
      badge: "💰 High ROI",
      color: "from-amber-500/10 to-yellow-500/10",
      iconColor: "text-amber-500"
    },
    {
      title: "Easy Installation & Integration",
      desc: "Compact design with user-friendly controls and minimal maintenance requirements.",
      icon: Settings,
      badge: "⚙️ Low Maintenance",
      color: "from-slate-500/10 to-slate-700/10",
      iconColor: "text-slate-600"
    }
  ];

  const uniquenessPoints = [
    "Patented “Water Doctor” technology for advanced water treatment",
    "Combination of water disinfectant and sanitizer in a single solution",
    "Maintains ORP and pH balance continuously",
    "Removes biofilm and controls microbial contamination effectively",
    "Highly stable and fast-acting formulation",
    "Suitable for poultry, livestock, agriculture, and industrial applications",
    "Supports sustainable and hygienic water management practices"
  ];

  const technicalAdvantages = [
    {
      title: "Real-Time Monitoring",
      desc: "Integrated sensors provide accurate monitoring of water quality parameters.",
      icon: Activity
    },
    {
      title: "Smart Automation",
      desc: "The IoT-enabled system allows automated operation and precise chemical dosing.",
      icon: Cpu
    },
    {
      title: "High Efficiency Treatment",
      desc: "Capable of eliminating 99.99% of harmful microorganisms from water systems.",
      icon: ShieldCheck
    },
    {
      title: "Durable & Reliable Design",
      desc: "Manufactured using high-quality components for long-term performance and reliability.",
      icon: Settings
    }
  ];

  const packingInfo = [
    {
      type: "Boom-Ox (ClO2) — 0.75%",
      method: "Single can of 950 ml Part A + attached 50 ml Part B. Mix and keep in airtight bottle for 1 hour before use.",
      dose: "50–200 ml / 1000 Litre water (Depends on source ORP)",
      pack: "1 Ltr (950 ml Part A + 50 ml Part B)"
    }
  ];

  return (
    <div className="bg-[#fbfbfc] min-h-screen pt-32 pb-24 overflow-hidden selection:bg-brand-navy/10">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none opacity-25">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-brand-navy/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-brand-magenta/5 rounded-full blur-[100px]" />
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
            <div className="absolute inset-0 bg-blue-700/10 rounded-full blur-[100px] opacity-40 animate-pulse-slow" />
            <div className="relative bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[3.5rem] p-6 sm:p-8 md:p-16 border border-slate-100 shadow-[0_20px_60px_rgba(43,57,144,0.08)] overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50/50 to-transparent pointer-events-none" />
              <motion.img
                src="/Boom-0x.webp"
                alt="Boom-Ox Liquid Water Treatment Solution"
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(43,57,144,0.12)] group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
              />
              <div className="absolute top-6 right-6 sm:top-10 sm:right-10 flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-navy text-white font-bold text-[10px] uppercase tracking-[0.2em] shadow-lg">
                <Sparkles size={12} className="text-brand-magenta" />
                Patented Technology
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <span className="section-tag-light border-blue-100 text-blue-700">
                <span className="w-1 h-1 rounded-full bg-blue-700 inline-block animate-pulse" />
                Advanced Water Treatment Solution
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-brand-navy mb-4 leading-tight tracking-tight uppercase">
              BOOM-<span className="text-brand-magenta">OX LIQ</span>
            </h1>
            <h3 className="text-xl md:text-2xl font-bold text-slate-500 mb-6 uppercase tracking-tight">
              Smart & Innovative Water Treatment Technology
            </h3>
            <p className="text-lg text-slate-500 leading-relaxed mb-8 font-medium">
              Boom-Ox is an advanced patented water treatment and conditioning system designed to improve water quality for livestock, poultry farms, agriculture, and industrial applications.
            </p>

            <div className="bg-brand-navy/5 p-8 rounded-[2rem] border border-brand-navy/10 mb-10">
              <p className="text-slate-600 leading-relaxed text-sm font-medium">
                The system effectively controls harmful microorganisms, reduces water hardness, neutralizes toxins, and enhances the overall quality of water without affecting its natural properties. By using a smart automated dosing mechanism, Boom-Ox ensures a continuous, safe, and hygienic water supply for better animal health and farm productivity.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleDownload('BOOM-OX LIQ')}
                className="px-10 py-5 rounded-2xl bg-brand-navy text-white font-black text-sm uppercase tracking-widest flex items-center gap-3 transition-all hover:bg-brand-magenta shadow-xl shadow-brand-navy/10 group"
              >
                Download Literature <FileDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              <a
                href="#features"
                className="px-10 py-5 rounded-2xl bg-white border-2 border-brand-navy text-brand-navy font-bold text-sm uppercase tracking-widest flex items-center gap-3 transition-all hover:bg-brand-navy hover:text-white shadow-xl shadow-brand-navy/5"
              >
                Explore Features <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Why Water Quality Matters Section ───────────── */}
        <div className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-navy rounded-[2rem] sm:rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-magenta/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px]" />
            
            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7">
                <h3 className="text-3xl sm:text-4xl font-heading font-black mb-8 uppercase tracking-tight flex items-center gap-3">
                  <HelpCircle className="text-brand-magenta" />
                  Why Water Quality Matters
                </h3>
                <div className="space-y-6 text-slate-300 text-base leading-relaxed font-medium">
                  <p>
                    Water is one of the most essential nutrients for all living beings, especially in livestock and poultry farming. Poor water quality can lead to bacterial infections, reduced immunity, poor feed conversion, low growth performance, and severe economic losses.
                  </p>
                  <p>
                    Studies show that a large percentage of diseases are caused by contaminated water and improper sanitation practices. Boom-Ox is specifically developed to solve these critical challenges by providing a reliable and scientifically engineered water treatment solution.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center backdrop-blur-sm">
                  <div className="text-5xl font-black text-brand-magenta mb-2 italic">80%</div>
                  <div className="text-[10px] uppercase font-bold text-white/50 tracking-widest leading-relaxed">
                    Of Diseases are Waterborne
                  </div>
                </div>
                <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center backdrop-blur-sm">
                  <div className="text-5xl font-black text-brand-emerald mb-2 italic">100%</div>
                  <div className="text-[10px] uppercase font-bold text-white/50 tracking-widest leading-relaxed">
                    Safe & Potable Guarantee
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Key Features of Boom-Ox ───────────────────── */}
        <div id="features" className="mb-24 md:mb-32">
          <div className="text-center mb-16">
            <span className="section-tag-light mb-4">
              <span className="w-1 h-1 rounded-full bg-brand-magenta inline-block" />
              Engineered Excellence
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-brand-navy mb-4 uppercase">
              Key Features <span className="text-gradient">of Boom-Ox</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium italic">
              Scientifically proven, stable, and highly effective components that keep your farm water at peak safety levels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col h-full"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feat.color} flex items-center justify-center mb-6 shrink-0`}>
                  <feat.icon size={26} className={feat.iconColor} />
                </div>
                <h4 className="text-lg font-heading font-black text-brand-navy mb-3 uppercase tracking-tight group-hover:text-brand-magenta transition-colors">
                  {feat.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium flex-grow">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── How Boom-Ox Works ───────────────────────────── */}
        <div className="mb-24 md:mb-32">
          <div className="bg-slate-900 rounded-[2rem] sm:rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-magenta/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px]" />

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-magenta bg-brand-magenta/10 px-3 py-1.5 rounded-full mb-4 inline-block">
                  Operation Process
                </span>
                <h3 className="text-3xl sm:text-5xl font-heading font-black uppercase italic">
                  How <span className="text-brand-magenta">Boom-Ox Works</span>
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-stretch">
                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="text-brand-magenta font-black text-3xl mb-4 italic">01.</div>
                    <h4 className="font-heading font-bold text-xl mb-4 uppercase tracking-tight text-white">
                      Water Conditioning & Sensor Check
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed font-medium">
                      Boom-Ox operates through a scientifically designed multi-stage treatment process. Water first enters the conditioning unit where hardness-causing minerals and contaminants are neutralized. Sensors continuously monitor water flow rate, pH, and ORP levels.
                    </p>
                  </div>
                  <div className="mt-8 text-xs text-brand-magenta uppercase font-bold tracking-widest flex items-center gap-2">
                    <Activity size={12} /> Automated Detection
                  </div>
                </div>

                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="text-brand-emerald font-black text-3xl mb-4 italic">02.</div>
                    <h4 className="font-heading font-bold text-xl mb-4 uppercase tracking-tight text-white">
                      Oxidation & Biofilm Elimination
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed font-medium">
                      Based on automated control panel readings, the required treatment solution is released. The treated water undergoes oxidation, destroying microbial cell walls and preventing harmful growth. This process also actively removes biofilm formation inside pipelines.
                    </p>
                  </div>
                  <div className="mt-8 text-xs text-brand-emerald uppercase font-bold tracking-widest flex items-center gap-2">
                    <ShieldCheck size={12} /> High Efficiency Sanitization
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Benefits for Poultry & Livestock Farms ──────── */}
        <div className="mb-24 md:mb-32">
          <div className="text-center mb-16">
            <span className="section-tag-light mb-4">
              <span className="w-1 h-1 rounded-full bg-brand-emerald inline-block" />
              Proven Advantages
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-brand-navy mb-4 uppercase">
              Benefits <span className="text-gradient">for Farms</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium italic">
              Delivering high impact, healthy growth, and cost savings directly to your agricultural and poultry setup.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {farmBenefits.map((ben, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ben.color} flex items-center justify-center`}>
                      <ben.icon size={22} className={ben.iconColor} />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                      {ben.badge}
                    </span>
                  </div>
                  <h4 className="text-lg font-heading font-black text-brand-navy mb-3 uppercase tracking-tight">
                    {ben.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-bold leading-relaxed">
                    {ben.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Uniqueness & Technical Advantages ────────────── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-24 md:mb-32">
          <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-brand-navy mb-8 flex items-center gap-3 uppercase">
              <Award className="text-brand-magenta" /> Uniqueness of Boom-Ox
            </h3>
            <div className="grid gap-4">
              {uniquenessPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl hover:bg-brand-navy/5 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-brand-magenta/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={16} className="text-brand-magenta" />
                  </div>
                  <span className="text-brand-navy font-bold text-xs uppercase tracking-tight leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-brand-navy mb-8 flex items-center gap-3 uppercase">
                <Cpu className="text-brand-navy" /> Technical Advantages
              </h3>
              <div className="grid gap-6">
                {technicalAdvantages.map((adv, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-brand-navy/5 rounded-2xl">
                    <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center shrink-0">
                      <adv.icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-heading font-black text-brand-navy text-xs uppercase tracking-wider mb-1">
                        {adv.title}
                      </h4>
                      <p className="text-slate-400 font-bold text-[10px] uppercase tracking-wide leading-relaxed">
                        {adv.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 p-6 bg-brand-navy text-white rounded-[1.5rem] text-center shadow-lg">
              <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Technical Origin</div>
              <div className="text-sm font-bold">Patented Israeli Water Doctor Technology</div>
            </div>
          </div>
        </div>

        {/* ── Packing & Dosage ────────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32 max-w-4xl mx-auto">
          {packingInfo.map((p, i) => (
            <div key={i} className="bg-white p-6 sm:p-8 lg:p-12 rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[3.5rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-8">
                <Package className="text-brand-magenta" size={24} />
              </div>
              <h4 className="text-xl font-heading font-black text-brand-navy mb-4 uppercase tracking-tight">{p.type}</h4>
              <div className="space-y-4 mb-8">
                <div>
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-1">Stock Method</span>
                  <p className="text-xs text-slate-500 font-medium">{p.method}</p>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-1">Dose</span>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-tight">{p.dose}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-navy">
                <Star size={12} className="text-brand-magenta fill-brand-magenta" /> {p.pack}
              </div>
            </div>
          ))}
        </div>


        {/* ── Conclusion Section ───────────────────────────── */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-brand-navy to-[#1a2b7c] rounded-[2rem] sm:rounded-[3rem] p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-magenta/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-emerald/10 rounded-full blur-[80px]" />

            <div className="relative z-10 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-heading font-black mb-6 uppercase">
                Ready for the Next Generation of Water Sanitation?
              </h3>
              <p className="text-slate-300 font-medium leading-relaxed text-base md:text-lg mb-10 max-w-3xl mx-auto">
                Boom-Ox is a next-generation water treatment solution designed to provide safe, clean, and high-quality water for livestock and poultry operations. With its patented technology, automated monitoring system, and powerful disinfection capabilities, Boom-Ox helps farms improve animal health, productivity, and operational efficiency while reducing water-related risks and economic losses.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => handleDownload('BOOM-OX LIQ')}
                  className="px-10 py-5 bg-brand-magenta text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-white hover:text-brand-navy transition-all shadow-xl group"
                >
                  Download Literature <FileDown size={18} className="inline ml-2" />
                </button>
                <Link
                  to="/#contact"
                  className="px-10 py-5 bg-white text-brand-navy font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-brand-magenta hover:text-white transition-all shadow-xl"
                >
                  Contact Expert <ArrowRight size={18} className="inline ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BoomOxLiqPage;
