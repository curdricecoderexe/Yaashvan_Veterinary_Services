import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Activity, ArrowRight, ChevronRight, Settings, Award, Info, Cpu, Monitor, Database, Package, CheckCircle2, Droplets, FlaskConical, Beaker, BarChart3, AlertTriangle, Eye, RefreshCcw, Wifi, Shield, Star, FileDown, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { handleDownload } from '../constants/docs';

const BoomOxPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreBenefits = [
    { title: "24×7 Action", desc: "Maintains ORP, pH, and water quality continuously through automated dosing." },
    { title: "Conditioning", desc: "Helps neutralize ions, metals, and hardness causing agents in water systems." },
    { title: "Auto Dosing", desc: "Uses sensor-controlled dosing systems calibrated with intelligent panels." },
    { title: "Better ROI", desc: "Designed to provide better return on investment than traditional methods." },
  ];

  const modusOperandi = [
    { id: "01", title: "Water Inlet", desc: "Installation point connected from common water source to the farm system." },
    { id: "02", title: "Water Conditioner", desc: "Helps neutralize majority ions, metals, and hardness causing agents." },
    { id: "03", title: "Flow Sensor", desc: "Helps monitor water flow and supports accurate dosing of medicines." },
    { id: "04", title: "Pressure Gauge", desc: "Helps maintain water pressure stability." },
    { id: "05", title: "ClO2 Solutions", desc: "Automated chlorine dioxide dosing system calibrated with the machine brain/control panel." },
    { id: "06", title: "ORP Sensor", desc: "Maintains desired ORP level (650+ mV)." },
    { id: "07", title: "pH Solutions", desc: "Automated acidifier dosing solution integrated with the control panel system." },
    { id: "08", title: "pH Sensor", desc: "Maintains desired pH range (5.8–6.0)." },
    { id: "09", title: "IoT Device", desc: "Displays system parameters and sends notification messages for process monitoring." },
    { id: "10", title: "Control Panel / Brain", desc: "Central intelligent system receiving sensor signals and controlling automated dosing functions." },
  ];

  const supplyScope = [
    "Metering Pump — 3 Nos",
    "IP65 Control Panel (Make-Germany)",
    "ORP & pH Sensor with Holder",
    "Wall Mounting Plate with Sensor Fittings",
    "IoT Enabled Process Monitoring Device"
  ];


  const organisms = {
    gramPositive: ["Clostridium", "Staphylococcus", "Streptococcus"],
    gramNegative: ["Escherichia Coli", "P. multocida", "S. gallinarum"],
    protozoa: ["Cryptosporidium", "Microsporidium", "Giardia"]
  };

  const ctValues = [
    { organism: "S.aureus", ppm: "0.5", time: "60s", kill: "99.99%" },
    { organism: "E.coli", ppm: "0.25", time: "100s", kill: "99.99%" },
    { organism: "Streptococcus", ppm: "0.5", time: "60s", kill: "99.99%" },
    { organism: "Pseudomonas", ppm: "1.0", time: "150s", kill: "99.99%" },
  ];

  const packingInfo = [
    {
      type: "Boom-Ox (ClO2) — 7.5%",
      method: "50 ml Part A + 50 ml Part B mixed into 900 ml potable water. Store airtight for 1 hour before use.",
      dose: "Approx 50–200 ml / 1000 Litre (Depends on ORP & duration)",
      pack: "5 Ltr & 25 Ltr Sets"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24 selection:bg-brand-navy/10">
      {/* Dynamic Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-brand-navy/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 hex-pattern" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="mb-20">
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
                  src="/boomx-prom.webp"
                  alt="Boom Ox Machine"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(43,57,144,0.12)] group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-brand-navy text-white flex items-center justify-between shadow-xl">
                  <div className="text-[10px] font-black uppercase tracking-widest">System Status</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-bold">24/7 ACTIVE</span>
                  </div>
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
                  <span className="w-1 h-1 rounded-full bg-blue-700 inline-block" />
                  ...an water doctor
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black mb-8 leading-tight tracking-tight uppercase">
                <span className="text-blue-700">BOOM OX</span> <span className="text-brand-magenta">MACHINE</span>
              </h1>
              <h3 className="text-xl md:text-2xl font-bold text-brand-magenta mb-4 uppercase tracking-tight">Patented Co-treatment Water Conditioner</h3>
              <p className="text-brand-navy font-black text-[10px] uppercase tracking-[0.2em] mb-10">Patented and robust innovative water treatment machine for Hardness, ORP (ClO2) & pH for 24×7 action.</p>

              <div className="bg-brand-navy/5 p-8 rounded-[2.5rem] border border-brand-navy/10 mb-10">
                <div className="text-brand-navy font-bold text-lg mb-4 italic">“A broad-spectrum water support solution for poultry performance.”</div>
                <p className="text-slate-500 leading-relaxed font-medium text-sm">
                  BooM-Ox is an advanced patented water treatment system developed to improve water quality management for livestock and poultry farms. The system continuously manages ORP, pH balance, hardness, and microbial control to ensure safe and potable water availability.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  onClick={() => handleDownload('BOOM-OX')}
                  className="px-10 py-5 rounded-2xl bg-brand-navy text-white font-black text-sm uppercase tracking-widest flex items-center gap-3 transition-all hover:bg-brand-magenta shadow-xl shadow-brand-navy/10 group"
                >
                  Download Literature <FileDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {coreBenefits.map((h, i) => (
                  <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-heading font-black text-brand-navy mb-2 text-[10px] uppercase tracking-widest">{h.title}</h4>
                    <p className="text-[10px] text-slate-400 font-bold leading-relaxed">{h.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Why Water Management Matters ───────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="bg-brand-navy rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[3.5rem] p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-magenta/10 rounded-full blur-[100px]" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-6 sm:p-8 lg:p-12 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-heading font-black mb-8 uppercase tracking-tight italic">Why Water Management Matters</h3>
                <div className="space-y-6">
                  {[
                    "WATER stands out to be the most essential element in life as the animal body constitutes 60% water",
                    "Water is the MOST essential nutrient & least focused in production.",
                    "80% of global diseases are water borne due to unsafe water, poor sanitation, and poor hygiene practices.",
                    "2.2 billion people/livestock use water without safely managed sources (WHO)."
                  ].map((fact, fIdx) => (
                    <div key={fIdx} className="flex flex-wrap gap-4 items-start">
                      <div className="mt-1 w-2 h-2 rounded-full bg-brand-magenta shrink-0" />
                      <p className="text-slate-300 font-medium leading-relaxed">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
                  <div className="text-5xl font-black text-brand-magenta mb-2 italic">80%</div>
                  <div className="text-[10px] uppercase font-bold text-white/50 tracking-widest">Waterborne Diseases</div>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
                  <div className="text-5xl font-black text-brand-magenta mb-2 italic">2.2B</div>
                  <div className="text-[10px] uppercase font-bold text-white/50 tracking-widest">WHO Unmanaged Stat</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Why Boom-Ox & Uniqueness ───────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32 grid lg:grid-cols-2 gap-6 sm:p-8 lg:p-12">
          <div className="bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 lg:p-12 border border-slate-100 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-brand-navy mb-10 flex items-center gap-3 uppercase">
              <Star className="text-brand-magenta" /> Why Boom-Ox?
            </h3>
            <div className="grid gap-6">
              {[
                { title: "Ultra Stable", desc: "Sustains activity for 24 Hrs + in the system." },
                { title: "Highly Soluble", desc: "Instantly soluble for uniform distribution." },
                { title: "pH Independent", desc: "Works effectively across broad pH ranges." },
                { title: "Fast Acting", desc: "Lowest CT values for rapid pathogen destruction." },
                { title: "Sterilant Action", desc: "Kills Bacteria, Viruses, Algae, and Fungi." },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-wrap gap-4 items-start p-4 bg-slate-50 rounded-2xl group hover:bg-brand-navy transition-colors duration-300">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-magenta group-hover:bg-white shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-navy group-hover:text-white mb-0.5 uppercase text-xs">{item.title}</h4>
                    <p className="text-slate-500 group-hover:text-slate-300 text-xs font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 lg:p-12 border border-slate-100 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-brand-navy mb-10 flex items-center gap-3 uppercase">
              <Award className="text-brand-navy" /> Uniqueness
            </h3>
            <div className="grid gap-4">
              {[
                "Patented water treatment solution: Disinfectant + Sanitizer",
                "Maintains ORP & pH continuously 24×7",
                "All-in-One Water Doctor: Physical, Chemical, Biological",
                "Kills 99.99% water borne infections",
                "Economical performance & consistent results"
              ].map((point, pIdx) => (
                <div key={pIdx} className="flex items-center gap-4 p-4 bg-brand-navy/5 rounded-2xl">
                  <CheckCircle2 size={18} className="text-brand-navy" />
                  <span className="text-brand-navy font-bold text-xs uppercase tracking-tight">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Core System Features ───────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32 grid lg:grid-cols-2 gap-8">
          <div className="bg-brand-navy rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
            <h3 className="text-2xl sm:text-3xl font-heading font-black mb-10 uppercase italic">System <span className="text-brand-magenta">Features</span></h3>
            <div className="space-y-4">
              {[
                "Loaded Fuzzy Logic with Patent Pending Technology",
                "Accurate ORP Controlled Dosing with Level Interlock",
                "Specially Designed Activation Chamber in CPVC",
                "Auto Voltage Regulator Integrated",
                "3.5\" LCD High-Resolution Display",
                "IoT Enabled Real-time Monitoring"
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <span className="text-brand-magenta font-black">/</span>
                  <span className="text-xs font-bold uppercase tracking-widest">{feat}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 lg:p-12 border border-slate-100 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-brand-navy mb-10 uppercase italic">Competitive <span className="text-brand-magenta">Benefits</span></h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "FDA Approved Product",
                "GMP & WHO-GMP Certified",
                "ISO & HALAL Certified",
                "More than 99% Purity",
                "3000+ Farm Installations",
                "Air Disinfectant Ready"
              ].map((ben, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-brand-emerald" />
                  <span className="text-[10px] font-black uppercase text-brand-navy">{ben}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modus Operandi & Scope Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 md:mb-24 lg:mb-32">
          <div className="lg:col-span-2 bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 lg:p-12 border border-slate-100 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-20 -mt-20 blur-3xl opacity-50" />
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-brand-navy mb-12 flex items-center gap-4">
              <Settings className="text-brand-magenta" /> MODUS OPERANDI
            </h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 relative z-10">
              {modusOperandi.map((step, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="text-3xl sm:text-4xl font-heading font-black text-slate-100 group-hover:text-brand-magenta transition-colors duration-500">{step.id}</div>
                  <div>
                    <h4 className="font-heading font-bold text-brand-navy mb-2 uppercase text-sm tracking-tight">{step.title}</h4>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-navy rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
            <h3 className="text-2xl font-heading font-bold mb-8 uppercase tracking-tight">Scope of Supply</h3>
            <ul className="space-y-4">
              {supplyScope.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-300 font-medium border-b border-white/5 pb-3">
                  <CheckCircle2 size={16} className="text-brand-magenta shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 p-6 rounded-3xl bg-white/5 border border-white/10">
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Technical Origin</div>
              <div className="text-sm font-bold">German Components / Patented Design</div>
            </div>
          </div>
        </div>


        {/* Chlorine Comparison Section */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-navy mb-4 uppercase">Chlorine <span className="text-brand-magenta">vs</span> Boom-Ox</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium italic">ClO2 performance advantages over traditional chlorine treatments.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ComparisonCard title="Fast E.coli Destruction" desc="Uses 5e- electron exchange mechanism for rapid microbial action." icon={Zap} />
            <ComparisonCard title="Works in Broad pH" desc="Effective across pH range 4–10. Chlorine fails at high pH." icon={Activity} />
            <ComparisonCard title="Removes Biofilm" desc="Removes biofilm faster and helps avoid reoccurrence in pipelines." icon={Droplets} />
            <ComparisonCard title="No Resistance" desc="No resistance reported against pathogens. Effective against cysts." icon={ShieldCheck} />
            <ComparisonCard title="Non-Corrosive" desc="Lower oxidation potential and does not hydrolyse to form acid." icon={Shield} />
            <ComparisonCard title="Thermal Stability" desc="Can be used above 40°C without disassociation or loss of power." icon={RefreshCcw} />
          </div>
        </div>

        {/* ── ORP vs PPM ─────────────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 lg:p-12 md:p-20 border border-slate-100 shadow-xl relative overflow-hidden">
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-navy/5 rounded-full blur-[100px]" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-navy mb-8 uppercase italic">ORP <span className="text-brand-magenta">vs</span> PPM</h2>
                <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                  ORP (Oxidation Reduction Potential) measures water’s oxidizing capability in millivolts (mV) and indicates disinfectant effectiveness more accurately than PPM.
                </p>
                <div className="space-y-4">
                  {[
                    "ORP measures active chlorine dioxide effectiveness",
                    "WHO recommended monitoring parameter",
                    "More accurate than traditional chlorine PPM measurement",
                    "Helps evaluate real disinfectant activity in water"
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle2 className="text-brand-magenta" size={20} />
                      <span className="text-sm font-bold text-brand-navy uppercase tracking-tight">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-brand-navy p-10 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] text-center text-white">
                <div className="text-6xl font-black text-brand-magenta mb-4">650+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Target mV Range</div>
                <div className="mt-8 pt-8 border-t border-white/10 text-xs text-slate-400 font-medium">
                  Ensures rapid pathogen kill and safe potable water quality.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Biological Mechanism ────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="bg-slate-900 rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-10 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-brand-magenta/10 rounded-full blur-[120px]" />
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-heading font-black mb-12 uppercase">Biological <span className="text-brand-magenta">Action</span></h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "RNA Destruction", desc: "Penetrates the cell wall and destructs RNA of micro organisms." },
                  { title: "Oxidation", desc: "Causes oxidation of amino micro organisms leading to destruction." },
                  { title: "Inactive Killing", desc: "Kills microorganisms even when they are in an inactive state." },
                  { title: "Biofilm Removal", desc: "Active removal of existing biofilm and prevention of reoccurrence." },
                  { title: "Amino Acid Oxidation", desc: "Targets amino acids leading to total structural collapse of pathogens." },
                ].map((item, idx) => (
                  <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="text-brand-magenta font-black text-2xl mb-4">0{idx + 1}</div>
                    <h4 className="font-bold text-lg mb-2 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Organism Spectrum & CT Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 md:mb-24 lg:mb-32">
          <div className="lg:col-span-1 bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[3.5rem] p-10 border border-slate-100 shadow-xl">
            <h4 className="text-xl font-heading font-black text-brand-navy mb-8 uppercase tracking-tight">Pathogen Spectrum</h4>
            <div className="space-y-8">
              <SpectrumGroup title="Gram Positive" list={organisms.gramPositive} color="bg-emerald-500" />
              <SpectrumGroup title="Gram Negative" list={organisms.gramNegative} color="bg-brand-magenta" />
              <SpectrumGroup title="Protozoa" list={organisms.protozoa} color="bg-brand-navy" />
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[3.5rem] p-10 border border-slate-100 shadow-xl">
            <h4 className="text-xl font-heading font-black text-brand-navy mb-8 uppercase tracking-tight">CT Values (Mortality Data)</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-50">
                    <th className="py-4 text-[10px] font-black uppercase text-slate-400">Organism</th>
                    <th className="py-4 text-[10px] font-black uppercase text-slate-400">ppm</th>
                    <th className="py-4 text-[10px] font-black uppercase text-slate-400">Time</th>
                    <th className="py-4 text-right text-[10px] font-black uppercase text-slate-400">Killing %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {ctValues.map((row, i) => (
                    <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 font-bold text-brand-navy text-sm uppercase">{row.organism}</td>
                      <td className="py-4 text-sm font-medium text-slate-500">{row.ppm}</td>
                      <td className="py-4 text-sm font-medium text-slate-500">{row.time}</td>
                      <td className="py-4 text-right font-black text-brand-magenta text-sm italic">{row.kill}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ── Packing & Dosage ────────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32 grid lg:grid-cols-2 gap-8 items-stretch">
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

        {/* ── General Guidelines ────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <div className="bg-white rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[4rem] p-10 lg:p-14 border border-slate-100 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-brand-navy mb-10 uppercase flex items-center gap-4">
              <Info className="text-brand-magenta" /> General Guidelines
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Always keep air tight stock solution and product bottle.",
                "Keep product pack in dry places for Part A and Part B.",
                "Avoid electric/magnetic fields, direct sunlight and hot conditions.",
                "Keep water tank closed and cool after adding Boom-Ox.",
                "Add calculated dose once tank is full.",
                "Contact company expert for specific enquiries and feedback."
              ].map((guide, gIdx) => (
                <div key={gIdx} className="flex flex-wrap gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-navy mt-1.5 shrink-0" />
                  <p className="text-xs text-slate-600 font-bold leading-relaxed">{guide}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Brand Information ──────────────────────────── */}
        <div className="mb-16 md:mb-24 lg:mb-32 flex flex-col items-center">
          <div className="bg-brand-navy/5 px-12 py-8 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] border border-brand-navy/10 text-center max-w-2xl w-full">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Partnership & Origin</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-[9px] uppercase font-bold text-slate-400 mb-1">Manufactured by</div>
                <div className="text-brand-navy font-black text-sm">Brightwell Aquatech LLP</div>
              </div>
              <div className="md:border-l md:border-slate-200">
                <div className="text-[9px] uppercase font-bold text-slate-400 mb-1">Marketed by</div>
                <div className="text-brand-navy font-black text-sm">Yaashvan Veterinary Services</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ComparisonCard = ({ title, desc, icon: Icon }) => (
  <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
      <Icon size={24} className="text-brand-navy" />
    </div>
    <h4 className="text-lg font-heading font-black text-brand-navy mb-3 uppercase tracking-tight">{title}</h4>
    <p className="text-xs text-slate-400 font-medium leading-relaxed">{desc}</p>
  </div>
);

const SpectrumGroup = ({ title, list, color }) => (
  <div>
    <div className="flex items-center gap-2 mb-3">
      <div className={`w-1.5 h-1.5 rounded-full ${color}`} />
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{title}</span>
    </div>
    <div className="flex flex-wrap gap-2">
      {list.map((item, i) => (
        <span key={i} className="px-3 py-1.5 rounded-xl bg-slate-50 text-brand-navy text-[10px] font-bold uppercase tracking-tight border border-slate-100">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const HeartPulse = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
  </svg>
);

export default BoomOxPage;
