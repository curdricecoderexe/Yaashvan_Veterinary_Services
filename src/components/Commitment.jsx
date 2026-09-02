import { motion, useScroll, useTransform } from 'framer-motion';
import { Microscope, Award, Wrench, Handshake } from 'lucide-react';
import { useRef } from 'react';

const commitments = [
  {
    icon: Microscope,
    title: 'Scientific & Technological Excellence',
    desc: 'Rigorous research underpinning every formulation for maximum efficacy.',
    gradient: 'from-brand-navy to-[#2B3990]',
    glow: 'group-hover:shadow-[0_20px_48px_rgba(43,57,144,0.18)]',
    border: 'group-hover:border-brand-navy/25',
  },
  {
    icon: Award,
    title: 'Proven Product Quality & Consistent Service',
    desc: 'Uncompromising standards ensuring consistent efficacy and reliable service.',
    gradient: 'from-brand-magenta to-[#6B1580]',
    glow: 'group-hover:shadow-[0_20px_48px_rgba(146,39,143,0.16)]',
    border: 'group-hover:border-brand-magenta/25',
  },
  {
    icon: Wrench,
    title: 'Practical, Need-Based Solutions',
    desc: 'Directly addressing field challenges with functional, real-world innovations.',
    gradient: 'from-[#2B3990] to-brand-magenta',
    glow: 'group-hover:shadow-[0_20px_48px_rgba(43,57,144,0.16)]',
    border: 'group-hover:border-[#2B3990]/25',
  },
  {
    icon: Handshake,
    title: 'Long-Term & Reliable Partnerships',
    desc: 'Building enduring trust with global protein producers worldwide.',
    gradient: 'from-brand-emerald to-brand-navy',
    glow: 'group-hover:shadow-[0_20px_48px_rgba(0,165,81,0.14)]',
    border: 'group-hover:border-brand-emerald/25',
  },
];

const Commitment = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 hex-pattern opacity-60 pointer-events-none" />
      <motion.div style={{ y: y1 }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-brand-navy/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <motion.div style={{ y: y2 }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-brand-magenta/4 to-transparent rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-5">
            <span className="section-tag-light">
              <span className="w-1 h-1 rounded-full bg-brand-magenta inline-block" />
              Our Promise
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-brand-navy mb-5"
          >
            Our Unwavering <span className="text-gradient">Commitment</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Guiding principles that ensure we deliver the highest value to our partners and the global veterinary community.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
                className={`relative bg-white rounded-2xl p-8 border border-slate-100 ${item.border} shadow-[0_4px_24px_rgba(43,57,144,0.05)] ${item.glow} transition-all duration-400 overflow-hidden group`}
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-t-2xl`} />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={26} className="text-white" />
                </div>

                <h3 className="text-[1.05rem] font-heading font-bold text-brand-navy mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Commitment;
