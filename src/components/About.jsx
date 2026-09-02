import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Lightbulb, Compass, Rocket, ChevronRight, Bird, ShieldPlus, Factory, Droplets, Stethoscope, Zap, ShieldCheck, Activity, Lock, Settings } from 'lucide-react';
import { useRef } from 'react';

const pillars = [
  {
    icon: Compass,
    label: 'About Yaashvan',
    span: 'md:col-span-2 md:row-span-2',
    iconColor: 'text-brand-navy',
    iconBg: 'bg-white/90 backdrop-blur-md shadow-sm',
    textColor: 'text-brand-navy',
    descColor: 'text-slate-600',
    border: 'border-slate-100',
    content: 'Yaashvan Veterinary Services is a modern Indian veterinary healthcare and poultry innovation company. We focus on science-driven, field-level veterinary solutions designed specifically for protein producers globally. Our approach seamlessly merges advanced biotech research with robust, practical applications.',
    tag: 'Est. 2024',
    image: '/lab-bg.png',
    isLarge: true,
  },
  {
    icon: Lightbulb,
    label: 'Our Vision',
    span: '',
    iconColor: 'text-brand-navy',
    iconBg: 'bg-white/90 backdrop-blur-md shadow-sm',
    textColor: 'text-brand-navy',
    descColor: 'text-slate-600',
    border: 'border-slate-100',
    content: 'To be the global leader in innovative, sustainable, and science-backed veterinary solutions.',
    tag: 'Global Leader',
    image: '/science-bg.png',
    hasBg: true,
  },
  {
    icon: Target,
    label: 'Our Mission',
    span: '',
    iconColor: 'text-brand-navy',
    iconBg: 'bg-white/90 backdrop-blur-md shadow-sm',
    textColor: 'text-brand-navy',
    descColor: 'text-slate-600',
    border: 'border-slate-100',
    content: 'Empowering healthier farms and profitable businesses through unwavering commitment to quality product development.',
    tag: 'Field-First',
    image: '/farm-bg.png',
    hasBg: true,
  },
  {
    icon: Rocket,
    label: 'Our Aim',
    span: 'md:col-span-3',
    iconColor: 'text-brand-navy',
    iconBg: 'bg-white/90 backdrop-blur-md shadow-sm',
    textColor: 'text-brand-navy',
    descColor: 'text-slate-600',
    border: 'border-slate-100',
    content: 'We aim to redefine industry standards by providing practical, need-based solutions that directly address the evolving challenges of the global poultry and veterinary sectors, ensuring sustainable growth for all stakeholders.',
    tag: 'Innovation Driven',
    image: '/hero-bg.png',
    hasBg: true,
  },
];

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section ref={containerRef} id="about" className="py-24 md:py-32 relative overflow-hidden bg-[#fbfbfc]">

      {/* Background system */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 hex-pattern opacity-60" />
        <motion.div style={{ y: y1 }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-bl from-brand-navy/6 to-transparent rounded-full blur-[100px]" />
        <motion.div style={{ y: y2 }}
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-brand-magenta/5 to-transparent rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-5">
            <span className="section-tag-light">
              <span className="w-1 h-1 rounded-full bg-brand-navy inline-block" />
              Our Legacy &amp; Vision
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-brand-navy leading-tight mb-5"
          >
            Pioneering the Future of{' '}
            <span className="text-gradient">Veterinary Healthcare</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            We blend deep scientific expertise with practical field insights to deliver unparalleled solutions for protein producers globally.
          </motion.p>
        </div>

        {/* Dark Pillars Grid */}
        <div className="relative max-w-6xl mx-auto mb-20 md:mb-28">
          {/* Ambient glows behind grid */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-magenta/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-navy/30 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-emerald/15 rounded-full blur-[80px] pointer-events-none" />

          {/* Row 1: Big card (About) + Vision */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mb-5">

            {/* About Yaashvan — Large Feature Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
              className="md:col-span-3 relative rounded-[2rem] overflow-hidden group cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #2a3f7a 0%, #3a52a0 60%, #2a3f7a 100%)', minHeight: '320px' }}
            >
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-magenta/25 rounded-full blur-[60px] group-hover:scale-150 transition-all duration-700" />
              <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-brand-emerald/20 rounded-full blur-[60px] group-hover:scale-150 transition-all duration-700" />
              {/* Glass shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-tl from-white/5 via-transparent to-white/10" />
              {/* Glowing edges */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-white/50 via-white/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)] group-hover:bg-white/25 group-hover:shadow-[0_0_30px_rgba(230,0,126,0.4)] transition-all duration-500">
                    <Compass size={26} className="text-white drop-shadow-lg" />
                  </div>
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">Est. 2024</span>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white mb-4 leading-tight tracking-tight">
                    About <span className="bg-gradient-to-r from-brand-magenta to-purple-400 bg-clip-text text-transparent">Yaashvan</span>
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base max-w-lg text-justify group-hover:text-white transition-colors duration-300">
                    Yaashvan Veterinary Services is a modern Indian veterinary healthcare and poultry innovation company. We focus on science-driven, field-level veterinary solutions designed specifically for protein producers globally. Our approach seamlessly merges advanced biotech research with robust, practical applications.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-brand-magenta text-xs font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-[1px] bg-brand-magenta" /> Learn More
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Our Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
              className="md:col-span-2 relative rounded-[2rem] overflow-hidden group cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #1f4030 0%, #276040 60%, #1f4030 100%)', minHeight: '320px' }}
            >
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-emerald/30 rounded-full blur-[60px] group-hover:scale-150 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-tl from-white/5 via-transparent to-white/10" />
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-white/50 via-white/10 to-transparent" />
              <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)] group-hover:bg-white/25 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-500">
                    <Lightbulb size={26} className="text-white drop-shadow-lg" />
                  </div>
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">Global Leader</span>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-white mb-4 leading-tight tracking-tight">
                    Our <span className="bg-gradient-to-r from-brand-emerald to-teal-400 bg-clip-text text-transparent">Vision</span>
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base text-justify group-hover:text-slate-300 transition-colors duration-300">
                    To be the global leader in innovative, sustainable, and science-backed veterinary solutions.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-brand-emerald text-xs font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-[1px] bg-brand-emerald" /> Learn More
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 2: Mission + Aim */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">

            {/* Our Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
              className="md:col-span-2 relative rounded-[2rem] overflow-hidden group cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #3d2468 0%, #512e8a 60%, #3d2468 100%)', minHeight: '260px' }}
            >
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-purple-400/30 rounded-full blur-[60px] group-hover:scale-150 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-tl from-white/5 via-transparent to-white/10" />
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-white/50 via-white/10 to-transparent" />
              <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)] group-hover:bg-white/25 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-500">
                    <Target size={26} className="text-white drop-shadow-lg" />
                  </div>
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">Field-First</span>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-white mb-4 leading-tight tracking-tight">
                    Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Mission</span>
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base text-justify group-hover:text-slate-300 transition-colors duration-300">
                    Empowering healthier farms and profitable businesses through unwavering commitment to quality product development.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-purple-400 text-xs font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-[1px] bg-purple-400" /> Learn More
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Our Aim — Wide Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
              className="md:col-span-3 relative rounded-[2rem] overflow-hidden group cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #3e2c00 0%, #5a4000 50%, #3e2c00 100%)', minHeight: '260px' }}
            >
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-amber-400/25 rounded-full blur-[60px] group-hover:scale-150 transition-all duration-700" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-orange-400/15 rounded-full blur-[60px] group-hover:scale-150 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-tl from-white/5 via-transparent to-white/10" />
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-white/50 via-white/10 to-transparent" />
              <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)] group-hover:bg-white/25 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-500">
                    <Rocket size={26} className="text-white drop-shadow-lg" />
                  </div>
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">Innovation Driven</span>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-white mb-4 leading-tight tracking-tight">
                    Our <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Aim</span>
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base max-w-xl text-justify group-hover:text-white transition-colors duration-300">
                    We aim to redefine industry standards by providing practical, need-based solutions that directly address the evolving challenges of the global poultry and veterinary sectors, ensuring sustainable growth for all stakeholders.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-amber-400 text-xs font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-[1px] bg-amber-400" /> Learn More
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* YVS YENSUREX Section */}
        <div className="mt-16 md:mt-24 lg:mt-32 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[2rem] md:rounded-[3.5rem] p-6 md:p-10 lg:p-16 border border-slate-100 shadow-[0_8px_40px_rgba(43,57,144,0.06)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-brand-navy/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative z-10">
              {/* Left Column: Story */}
              <div>
                <div className="relative mb-12">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-8"
                  >
                    <div className="flex items-center gap-8 flex-wrap">
                      <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-brand-navy to-brand-magenta rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                        <div className="relative overflow-hidden flex items-center justify-center">
                          <img src="/logo2.webp" alt="YENSUREX Logo" loading="lazy" decoding="async" className="h-12 sm:h-16 md:h-24 lg:h-28 w-auto object-contain rounded-xl md:rounded-2xl" />
                        </div>
                      </div>
                      <div className="hidden md:block h-16 w-[1px] bg-slate-200 mx-2" />
                      <div className="flex flex-col gap-2">
                        <span className="section-tag-light !mb-0 w-fit">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-magenta animate-pulse inline-block" />
                          Brand Story
                        </span>
                        <div className="text-xs font-bold text-slate-400 tracking-[0.3em] uppercase pl-1">Yaashvan Veterinary Services</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-navy mb-8 tracking-tight leading-[1.1]">
                        The <span className="text-gradient">YENSUREX</span> <br className="hidden sm:block" />Standard
                      </h3>
                    </div>
                  </motion.div>

                  <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-base md:text-lg text-justify">
                    <p className="pl-4 md:pl-6 border-l-4 border-brand-navy/10 hover:border-brand-navy transition-colors duration-500">
                      YVS YENSUREX is a progressive brand of Yaashvan Veterinary Services, committed to developing <span className="text-brand-navy font-bold">innovative and result-oriented</span> solutions for the modern poultry and livestock industry.
                    </p>
                    <p>
                      With the growing challenges in animal health and farm productivity, we continuously work towards providing advanced nutritional technologies and practical farm solutions that help producers achieve better performance.
                    </p>
                    <p className="text-slate-500 text-sm md:text-base italic">
                      "At YVS YENSUREX, we understand that modern farming requires a complete approach towards animal health, biosecurity, and water hygiene."
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Expertise & Why Choose Us */}
              <div className="space-y-12">
                <div className="relative group/matrix rounded-[2.5rem] md:rounded-[3rem] p-5 sm:p-8 md:p-10 bg-white/40 backdrop-blur-3xl border border-white/60 shadow-[0_8px_32px_rgba(43,57,144,0.05),inset_0_1px_0_rgba(255,255,255,0.8)] overflow-hidden transition-all duration-700 hover:shadow-[0_20px_50px_rgba(43,57,144,0.1)]">

                  {/* Dynamic Glass Ambient Glows */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-brand-magenta/10 to-transparent rounded-full blur-[60px] -mr-32 -mt-32 group-hover/matrix:scale-150 group-hover/matrix:bg-brand-magenta/15 transition-all duration-1000" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-brand-emerald/10 to-transparent rounded-full blur-[60px] -ml-32 -mb-32 group-hover/matrix:scale-150 group-hover/matrix:bg-brand-emerald/15 transition-all duration-1000" />

                  {/* Inner Glass Sheen */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/10 to-transparent pointer-events-none rounded-[inherit]" />

                  <h4 className="text-xl md:text-2xl font-heading font-black text-brand-navy mb-8 md:mb-10 tracking-tight flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/80 backdrop-blur-md shadow-sm flex items-center justify-center border border-white shrink-0 group-hover/matrix:shadow-md transition-shadow duration-500">
                      <Target className="text-brand-magenta drop-shadow-sm" size={20} />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-[0.2em] text-brand-magenta font-bold mb-0.5 md:mb-1">Our Capabilities</span>
                      Expertise Matrix
                    </div>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
                    {[
                      { title: "Poultry Nutrition", desc: "Performance Enhancement", icon: Bird },
                      { title: "Livestock Health", desc: "Productivity Solutions", icon: ShieldPlus },
                      { title: "Feed Mill Optimization", desc: "Quality Control", icon: Factory },
                      { title: "Water Acidification", desc: "Sanitization", icon: Droplets },
                      { title: "Gut Health", desc: "Digestive Management", icon: Stethoscope },
                      { title: "Immunity Boost", desc: "Disease Support", icon: Zap },
                      { title: "Toxin Binder", desc: "Feed Safety", icon: ShieldCheck },
                      { title: "Mineral & Vitamin", desc: "Supplementation", icon: Activity },
                      { title: "Farm Biosecurity", desc: "Hygiene Standards", icon: Lock },
                      { title: "Custom Nutrition", desc: "Formulations", icon: Settings }
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.03, y: -2 }}
                          className="group flex items-center gap-3 sm:gap-4 p-3.5 rounded-2xl border border-white/60 bg-white/30 backdrop-blur-md hover:bg-gradient-to-br hover:from-pink-50/70 hover:to-emerald-50/70 hover:border-brand-magenta/30 hover:shadow-[0_10px_30px_rgba(146,39,143,0.06)] transition-all duration-300 cursor-pointer overflow-hidden relative"
                        >
                          {/* Inner hover glow - Pink-green soft gradient transition */}
                          <div className="absolute inset-0 bg-gradient-to-br from-brand-magenta/[0.06] to-brand-emerald/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          <div className="w-10 h-10 rounded-xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-brand-magenta/10 group-hover:to-brand-emerald/10 group-hover:border-brand-magenta/20 transition-all duration-300 shrink-0 relative z-10">
                            <Icon size={18} className="text-slate-500 group-hover:text-brand-magenta transition-colors duration-300 group-hover:scale-110" />
                          </div>
                          <div className="relative z-10 flex-1 min-w-0">
                            <div className="text-[13px] font-black text-brand-navy leading-tight group-hover:text-brand-magenta transition-colors duration-300 truncate">{item.title}</div>
                            <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1 group-hover:text-brand-navy/70 transition-colors duration-300 truncate">{item.desc}</div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-16 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-[#1a234e] to-[#2B3990] rounded-2xl md:rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-magenta/20 rounded-full blur-[50px] pointer-events-none" />
                <h4 className="text-2xl font-heading font-black mb-8 flex items-center justify-center gap-3 relative z-10 text-center">
                  <Lightbulb className="text-brand-magenta" /> Why Choose Us?
                </h4>
                <ul className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 relative z-10 w-full">
                  {[
                    "Innovative & Research-Based Products",
                    "Practical Field-Oriented Approach",
                    "Focus on Modern Poultry & Livestock Challenges",
                    "Commitment to Animal Health & Farm Profitability",
                    "High-Quality Nutritional Solutions",
                    "Reliable Technical Guidance & Customer Support",
                    "Sustainable & Performance-Driven Solutions"
                  ].map((item, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-4 text-base text-slate-200 font-medium border-b border-white/10 pb-4 transition-transform duration-300 hover:translate-x-2 w-full ${i === 6 ? 'md:col-span-2 md:justify-center md:border-b-0 md:pb-0 md:mt-4 md:pt-6 md:border-t' : 'last:border-0 last:pb-0 md:last:border-b md:last:pb-4'}`}
                    >
                      <ChevronRight size={18} className="text-brand-magenta shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-100 text-center max-w-4xl mx-auto relative z-10">
              <p className="text-brand-navy font-bold text-base md:text-lg lg:text-xl leading-relaxed italic">
                "Driven by research, innovation, and field experience, YVS YENSUREX aims to become a trusted global partner in animal nutrition and livestock healthcare by delivering world-class quality, consistent performance, and practical farm-oriented solutions."
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
