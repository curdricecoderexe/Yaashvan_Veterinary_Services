import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { TrendingUp, Users, FlaskConical, Handshake } from 'lucide-react';

const stats = [
  {
    value: 16, suffix: '+', label: 'Years of Experience',
    icon: TrendingUp, iconColor: 'text-brand-navy', iconBg: 'bg-brand-navy/8',
    accent: 'from-brand-navy/5 to-transparent',
    borderHover: 'hover:border-brand-navy/25',
  },
  {
    value: 100, suffix: '%', label: 'Global Protein Producer Network',
    icon: Users, iconColor: 'text-brand-magenta', iconBg: 'bg-brand-magenta/8',
    accent: 'from-brand-magenta/5 to-transparent',
    borderHover: 'hover:border-brand-magenta/25',
  },
  {
    value: 50, suffix: '+', label: 'Science-Driven Solutions',
    icon: FlaskConical, iconColor: 'text-[#2B3990]', iconBg: 'bg-[#2B3990]/8',
    accent: 'from-[#2B3990]/5 to-transparent',
    borderHover: 'hover:border-[#2B3990]/25',
  },
  {
    value: 500, suffix: '+', label: 'Trusted Veterinary Partnerships',
    icon: Handshake, iconColor: 'text-brand-emerald', iconBg: 'bg-brand-emerald/8',
    accent: 'from-brand-emerald/5 to-transparent',
    borderHover: 'hover:border-brand-emerald/25',
  },
];

const Counter = ({ from, to, duration = 2.2 }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold: 0.2 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    let startTime;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out-cubic
      setCount(Math.floor(eased * (to - from) + from));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, from, to, duration]);

  return <span ref={nodeRef}>{count}</span>;
};

const TrustStats = () => {
  return (
    <section className="relative z-20 py-16 md:py-20 bg-white -mt-4">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container mx-auto px-6 md:px-12">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-tag-light">
            <span className="w-1 h-1 rounded-full bg-brand-navy inline-block" />
            Trusted by the Industry
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                className={`relative bg-white rounded-2xl p-7 border border-slate-100 shadow-[0_4px_24px_rgba(43,57,144,0.05)] ${stat.borderHover} hover:shadow-[0_12px_40px_rgba(43,57,144,0.10)] transition-all duration-400 overflow-hidden group`}
              >
                {/* Subtle gradient accent */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${stat.accent} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Top accent bar */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-navy to-brand-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-t-2xl" />

                <div className="relative z-10 text-center sm:text-left">
                  <div className={`w-11 h-11 rounded-xl ${stat.iconBg} flex items-center justify-center mb-5 mx-auto sm:mx-0`}>
                    <Icon size={20} className={stat.iconColor} />
                  </div>

                  <div className="text-4xl md:text-5xl font-heading font-extrabold text-brand-navy mb-2 tabular-nums">
                    <Counter from={0} to={stat.value} />
                    <span className="text-brand-magenta">{stat.suffix}</span>
                  </div>

                  <p className="text-slate-500 font-medium text-sm leading-snug max-w-[180px] mx-auto sm:mx-0">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
