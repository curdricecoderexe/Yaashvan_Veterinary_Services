import { motion } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp, Dna, Leaf, Activity, FlaskConical, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-transparent pt-24 pb-16 md:pt-32 md:pb-24">

      {/* ── Premium background system ───────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Large soft orbs - Pink/Green Theme matching Expertise Matrix */}
        <div className="absolute top-[-15%] right-[-8%] w-[850px] h-[850px] bg-gradient-to-br from-brand-magenta/[0.12] to-transparent rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-[-20%] left-[-12%] w-[850px] h-[850px] bg-gradient-to-tr from-brand-emerald/[0.10] to-transparent rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-[45%] left-[48%] w-[400px] h-[400px] bg-gradient-to-br from-brand-navy/[0.04] to-transparent rounded-full blur-[100px]" />

        {/* Hexagon scientific pattern */}
        <div className="absolute inset-0 hex-pattern opacity-80" />

        {/* Floating geometric shapes */}
        <svg className="absolute top-24 right-[18%] w-28 h-28 text-brand-magenta/15 animate-float" viewBox="0 0 100 100">
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-28 left-[8%] w-16 h-16 text-brand-emerald/15 animate-float-slow" viewBox="0 0 100 100">
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <svg className="absolute top-[55%] left-[42%] w-10 h-10 text-brand-magenta/10 animate-float" style={{ animationDelay: '2s' }} viewBox="0 0 100 100">
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>

        {/* Molecular accent dots */}
        <div className="absolute top-[22%] left-[4%] w-2.5 h-2.5 bg-brand-navy/10 rounded-full" />
        <div className="absolute top-[17%] left-[7%] w-1.5 h-1.5 bg-brand-magenta/15 rounded-full" />
        <div className="absolute bottom-[22%] right-[10%] w-3 h-3 bg-brand-emerald/15 rounded-full" />
        <div className="absolute top-[35%] right-[5%] w-1.5 h-1.5 bg-brand-navy/15 rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">

          {/* ── Left Content ─────────────────────────────────── */}
          <div className="lg:col-span-6 max-w-2xl text-center lg:text-left mx-auto lg:mx-0 flex flex-col items-center lg:items-start">



            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.2rem] xl:text-[3.8rem] font-heading font-extrabold text-brand-navy leading-[1.12] mb-6 tracking-tight text-balance"
            >
              Next-Generation{' '}
              <span className="text-gradient">
                Solutions
              </span>{' '}
              <span className="inline lg:block">for Healthier Livestock &amp; Poultry</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="text-base md:text-[1.05rem] text-slate-500 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 text-justify"
            >
              Pioneering science-backed veterinary solutions that enhance gut health, strengthen immunity, and drive sustainable growth performance for modern protein producers worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.56 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
            >
              <a
                href="#solutions"
                className="btn-primary text-sm"
              >
                Explore Solutions
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="btn-secondary text-sm"
              >
                Contact Us
                <ArrowRight size={16} className="text-slate-400 group-hover:text-brand-navy transition-colors" />
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.72 }}
              className="flex items-center justify-between sm:justify-center lg:justify-start gap-2 sm:gap-4 md:gap-6 w-full flex-nowrap"
            >
              {[
                { icon: Shield, label: 'ISO Certified', sub: 'Quality Assured', color: 'text-brand-navy' },
                { icon: Leaf, label: 'Sustainable', sub: 'Eco-Friendly', color: 'text-brand-magenta' },
                { icon: TrendingUp, label: 'Proven ROI', sub: 'Field Tested', color: 'text-[#2B3990]' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
                  {i > 0 && <div className="hidden sm:block w-px h-8 bg-slate-200 mr-0.5" />}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm shrink-0">
                    <item.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${item.color}`} />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] sm:text-[13px] font-bold text-brand-navy leading-tight whitespace-nowrap">{item.label}</div>
                    <div className="text-[8px] sm:text-[11px] font-medium text-slate-500 mt-0.5 whitespace-nowrap">{item.sub}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right Side — Cinematic Biotech Visual ─────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="relative flex items-center justify-center lg:justify-end mt-10 lg:mt-0 lg:col-span-6"
          >
            {/* Atmospheric glow - Beautiful Pink-Green Ambient Glow */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-to-br from-brand-magenta/20 to-transparent rounded-full blur-[100px] animate-pulse-slow" />
              <div className="absolute bottom-0 left-0 w-[80%] h-[80%] bg-gradient-to-tr from-brand-emerald/15 to-transparent rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2.5s' }} />
            </div>

            {/* Outer HUD Rings */}
            <div className="absolute inset-[-16%] z-0 pointer-events-none select-none">
              <div className="absolute inset-0 border border-slate-200/50 rounded-full" />
              <div className="absolute inset-[7%] border border-brand-navy/12 rounded-full border-dashed animate-[spin_70s_linear_infinite]" />
              <div className="absolute inset-[16%] border border-brand-magenta/10 rounded-full animate-[spin_90s_linear_infinite_reverse]" />
              {/* Ring accent dots */}
              <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-brand-navy rounded-full shadow-[0_0_14px_rgba(43,57,144,0.4)]" />
              <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-[22%] right-0 w-2 h-2 bg-brand-magenta rounded-full shadow-[0_0_12px_rgba(146,39,143,0.3)]" />
              <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                className="absolute top-[38%] left-0 w-1.5 h-1.5 bg-brand-emerald rounded-full shadow-[0_0_8px_rgba(0,165,81,0.3)]" />
            </div>

            {/* Main composition */}
            <div className="relative w-full max-w-md sm:max-w-xl lg:max-w-[760px] xl:max-w-[850px] mx-auto lg:mx-0 z-10">

              {/* Floating biotech particles */}
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute rounded-full ${i % 3 === 0 ? 'w-2 h-2 bg-brand-navy/50' :
                    i % 3 === 1 ? 'w-1.5 h-1.5 bg-brand-magenta/40' :
                      'w-2 h-2 bg-brand-emerald/35'
                    }`}
                  animate={{ y: [0, -90, 0], x: [0, i % 2 === 0 ? 40 : -40, 0], opacity: [0, 0.7, 0], scale: [0.5, 1.1, 0.5] }}
                  transition={{ duration: 7 + i, repeat: Infinity, delay: i * 0.45, ease: 'easeInOut' }}
                  style={{ top: `${8 + i * 8}%`, left: `${-12 + (i * 26) % 125}%` }}
                />
              ))}

              {/* DNA rotator */}
              <motion.div
                animate={{ rotate: 360, y: [0, -14, 0] }}
                transition={{ rotate: { duration: 22, repeat: Infinity, ease: 'linear' }, y: { duration: 7, repeat: Infinity, ease: 'easeInOut' } }}
                className="absolute -top-10 -left-12 z-0 opacity-20 text-brand-navy"
              >
                <Dna size={90} strokeWidth={1} />
              </motion.div>

              {/* ── Hero Image — Frameless with Pink-Green Gradient behind it ── */}
              <div className="relative group rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(43,57,144,0.18)] transition-all duration-700 hover:shadow-[0_50px_100px_-20px_rgba(43,57,144,0.25)]">
                
                {/* Dynamic Pink-Green Ambient Glows matching the Expertise Matrix card - Placed safely BEHIND the image */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-brand-magenta/15 to-transparent rounded-full blur-[60px] -mr-32 -mt-32 group-hover:scale-150 group-hover:bg-brand-magenta/20 transition-all duration-1000 pointer-events-none z-0" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-brand-emerald/12 to-transparent rounded-full blur-[60px] -ml-32 -mb-32 group-hover:scale-150 group-hover:bg-brand-emerald/18 transition-all duration-1000 pointer-events-none z-0" />

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="relative z-10"
                >
                  <img
                    src="/lan.webp"
                    alt="Advanced Veterinary Biotech Solutions — YAASHVAN"
                    width={1400}
                    height={933}
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-[1.04]"
                  />
                </motion.div>
              </div>

              {/* ── Floating stat card — Growth Metrics ── */}
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{ scale: 1.04, x: 6 }}
                className="absolute -top-6 -left-4 sm:-top-8 sm:-left-6 md:-top-12 md:-left-[6%] z-20 bg-white/95 backdrop-blur-2xl rounded-2xl p-3 sm:p-4 shadow-[0_20px_48px_rgba(43,57,144,0.10)] border border-white cursor-default min-w-[150px] sm:min-w-[190px] scale-75 sm:scale-90 md:scale-100 origin-top-left"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-md shrink-0">
                    <Activity size={16} className="text-white sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <div>
                    <div className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-tight">Performance</div>
                    <div className="text-[11px] sm:text-[13px] font-bold text-brand-navy leading-tight">Growth Metrics</div>
                  </div>
                </div>
                {/* Animated bar chart */}
                <div className="flex items-end gap-1 h-5 sm:h-7 mt-2">
                  {[40, 65, 50, 88, 60, 80, 70, 95].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-teal-500/15 to-teal-600 rounded-t-sm"
                      initial={{ height: 3 }}
                      animate={{ height: `${h * 0.28}px` }}
                      transition={{ duration: 1.1, delay: 0.9 + i * 0.09, repeat: Infinity, repeatType: 'reverse', repeatDelay: 1.5 }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* ── Floating badge — Precision ── */}
              <motion.div
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                whileHover={{ scale: 1.04, x: -6 }}
                className="absolute bottom-[8%] -right-2 sm:bottom-[10%] sm:-right-[4%] md:bottom-[14%] md:-right-[12%] z-20 bg-white/95 backdrop-blur-2xl rounded-2xl p-3 sm:p-4 shadow-[0_20px_48px_rgba(43,57,144,0.10)] border border-white cursor-default scale-80 sm:scale-90 md:scale-100 origin-bottom-right"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-brand-magenta/10 to-pink-50 flex items-center justify-center border border-brand-magenta/15 shrink-0">
                    <motion.div animate={{ rotate: [0, 8, -8, 0] }} transition={{ duration: 5, repeat: Infinity }}>
                      <TrendingUp size={18} className="text-brand-magenta sm:w-[22px] sm:h-[22px]" />
                    </motion.div>
                  </div>
                  <div>
                    <div className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-tight">Precision</div>
                    <div className="text-[13px] sm:text-[15px] font-bold text-brand-navy flex items-baseline gap-1 leading-tight">
                      98.4% <span className="text-[9px] sm:text-[10px] text-brand-magenta font-bold">↑</span>
                    </div>
                    <div className="text-[8px] sm:text-[9px] text-slate-400 leading-tight">Yield Optimization</div>
                  </div>
                </div>
              </motion.div>

              {/* ── Floating badge — Award ── */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-3 left-0 sm:-bottom-5 sm:left-[5%] md:left-[12%] z-20 flex items-center gap-2 sm:gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5 bg-brand-navy text-white rounded-2xl shadow-[0_12px_32px_rgba(10,15,36,0.18)] border border-white/10 scale-80 sm:scale-90 md:scale-100 origin-bottom-left"
              >
                <Award size={15} className="text-brand-emerald shrink-0 sm:w-[15px] sm:h-[15px] w-3 h-3" />
                <span className="text-[9px] sm:text-[11px] font-semibold tracking-wide whitespace-nowrap">16+ Years of Excellence</span>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-50 to-transparent z-0 pointer-events-none" />
    </section>
  );
};

export default Hero;
