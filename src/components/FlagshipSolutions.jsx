import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Beaker, Droplets, HeartPulse, Zap, ShieldCheck, Microscope, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const solutions = [
  {
    icon: Beaker,
    title: 'Feed Mill Solutions',
    description: 'Advanced formulations engineered for optimum feed conversion and palatability.',
    gradient: 'from-brand-navy to-[#2B3990]',
    glow: 'rgba(43,57,144,0.18)',
  },
  {
    icon: Droplets,
    title: 'Water Health Solutions',
    description: 'Targeted water-soluble products that ensure clean water delivery and gut hydration.',
    gradient: 'from-[#2B3990] to-brand-magenta',
    glow: 'rgba(146,39,143,0.16)',
  },
  {
    icon: HeartPulse,
    title: 'Gut Health Promoters',
    description: 'Microbiome-balancing concepts for sustained intestinal integrity and performance.',
    gradient: 'from-brand-emerald to-[#2B3990]',
    glow: 'rgba(0,165,81,0.15)',
  },
  {
    icon: Zap,
    title: 'Performance Enhancers',
    description: 'Metabolic boosters and energy-optimizers scientifically designed for rapid gains.',
    gradient: 'from-brand-magenta to-[#8B1FA8]',
    glow: 'rgba(146,39,143,0.16)',
  },
  {
    icon: ShieldCheck,
    title: 'Immune Support Concepts',
    description: 'Comprehensive immunity programs that reduce disease pressure and medication use.',
    gradient: 'from-brand-navy to-brand-magenta',
    glow: 'rgba(43,57,144,0.18)',
  },
  {
    icon: Microscope,
    title: 'Science-Backed Solutions',
    description: 'Need-based, field-driven innovations validated through rigorous scientific research.',
    gradient: 'from-[#2B3990] to-brand-navy',
    glow: 'rgba(43,57,144,0.16)',
  },
];

const products = [
  { name: 'EENSURE', src: '/eensure.webp', gradient: 'from-brand-magenta to-pink-500' },
  { name: 'Betain C FIZZ', src: '/betain.webp', gradient: 'from-brand-navy to-[#2B3990]' },
  { name: 'BOOM-OX', src: '/boom-ox.webp', gradient: 'from-brand-navy to-brand-magenta' },
  { name: 'ProteoLich', src: '/proteolich.webp', gradient: 'from-brand-emerald to-brand-navy' },
  { name: 'ViruTrap', src: '/virutrap.webp', gradient: 'from-slate-700 to-brand-navy' },
];

const SolutionCard = ({ solution, index }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-60, 60], [8, -8]), { stiffness: 400, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-60, 60], [-8, 8]), { stiffness: 400, damping: 30 });

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  const Icon = solution.icon;

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="relative group cursor-pointer h-full"
    >
      {/* Card */}
      <div className="relative h-full min-h-[280px] rounded-2xl border border-slate-100 bg-white p-8 flex flex-col overflow-hidden shadow-[0_4px_24px_rgba(43,57,144,0.06)] group-hover:shadow-[0_16px_48px_rgba(43,57,144,0.12)] transition-all duration-500 group-hover:border-transparent">

        {/* Hover gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

        {/* Glow bleed behind card on hover */}
        <motion.div
          animate={{ opacity: [0, 0] }}
          whileHover={{ opacity: 1 }}
          className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${solution.gradient} blur-sm -z-10`}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-400`}>
            <Icon size={26} className="text-white" />
          </div>

          <h3 className="text-xl font-heading font-bold text-slate-800 group-hover:text-white mb-3 transition-colors duration-400 leading-snug">
            {solution.title}
          </h3>

          <p className="text-slate-500 group-hover:text-white/80 text-sm leading-relaxed flex-grow transition-colors duration-400">
            {solution.description}
          </p>

          <div className="mt-6 flex items-center gap-1 text-brand-navy group-hover:text-white text-sm font-semibold transition-colors duration-400">
            Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FlagshipSolutions = () => (
  <section id="solutions" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
    {/* Background accents */}
    <div className="absolute inset-0 hex-pattern opacity-60 pointer-events-none" />
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-navy/4 to-transparent rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-brand-magenta/4 to-transparent rounded-full blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-6 md:px-12 relative z-10">

      {/* Section header */}
      <div className="text-center mb-16">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-5">
          <span className="section-tag-light">
            <span className="w-1 h-1 rounded-full bg-brand-magenta inline-block" />
            Our Expertise
          </span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading font-extrabold text-brand-navy mb-5">
          Flagship <span className="text-gradient">Solutions</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
          className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
          High-performance, scientifically validated formulations designed for optimal animal health and productivity.
        </motion.p>
      </div>

      {/* Solution Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((s, i) => <SolutionCard key={i} solution={s} index={i} />)}
      </div>
    </div>
  </section>
);

export default FlagshipSolutions;
