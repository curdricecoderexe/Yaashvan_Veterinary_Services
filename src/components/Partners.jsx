import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const partners = [
  'BoomOx Solutions',
  'GrinMicro',
  'Dovoy Animals Health',
  'Betain-C Fizz',
  'Yaashvan Labs',
];

const Partners = () => {
  const marqueeItems = [...partners, ...partners];

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Subtle border top & bottom */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <Globe size={16} className="text-brand-navy/40" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
              Strategic Global Alliance
            </span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent hidden sm:block" />
          <span className="text-xs font-medium text-slate-400">Trusted partners worldwide</span>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden flex">
        {/* Edge fades */}
        <div className="absolute top-0 left-0 w-32 md:w-56 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 md:w-56 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex gap-5 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 28, repeat: Infinity }}
          style={{ width: 'fit-content' }}
        >
          {marqueeItems.map((partner, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -4 }}
              className="relative inline-flex items-center justify-center px-8 py-4 min-w-[220px] bg-slate-100 rounded-2xl border border-slate-200 shadow-sm hover:bg-[#0a0f25] hover:shadow-[0_20px_40px_rgba(43,57,144,0.25)] hover:border-brand-magenta/30 transition-all duration-500 cursor-pointer group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/30 to-brand-magenta/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 pointer-events-none" />
              <span className="relative z-10 text-base font-heading font-black text-slate-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-brand-magenta transition-all duration-500">
                {partner}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
