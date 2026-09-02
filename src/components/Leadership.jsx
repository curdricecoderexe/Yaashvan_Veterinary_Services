import { motion } from 'framer-motion';
import { Quote, Star, Briefcase } from 'lucide-react';

const Leadership = () => {
  return (
    <section id="leadership" className="py-24 md:py-32 bg-[#fbfbfc] relative overflow-hidden">

      {/* Background accents - Very subtle low contrast glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-navy/[0.03] to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-brand-magenta/[0.02] to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-5">
            <span className="section-tag-light">
              <span className="w-1 h-1 rounded-full bg-brand-magenta inline-block" />
              Visionary Leadership
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-brand-navy mb-4"
          >
            Driven by <span className="text-gradient">Purpose</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* ── Portrait Card ───────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="relative"
          >
            {/* Soft shadow instead of glowing border for low contrast matte look */}
            <div className="absolute -inset-[1px] bg-slate-200/50 rounded-[2.2rem] blur-[2px] opacity-30" />

            <div className="relative rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl bg-white">
              {/* Dark overlay gradient on bottom for name legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent z-10" />

              <img
                src="/Rulesh Image.webp"
                alt="Mr. Rulesh S Kherde — Founder & Managing Director"
                width={1000}
                height={1250}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/5] object-cover object-top"
              />

              {/* Name card overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Star size={12} className="text-brand-magenta fill-brand-magenta" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-magenta">Founder</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">Mr. Rulesh S Kherde</h3>
                  <p className="text-slate-300 text-sm flex items-center gap-2">
                    <Briefcase size={12} className="shrink-0" />
                    Managing Director, Yaashvan Veterinary Services
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ── Content Side ────────────────────────────────── */}
          <div className="space-y-7">

            {/* Years tag */}
            <motion.div
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              <span className="section-tag-light">
                <span className="w-1 h-1 rounded-full bg-brand-emerald inline-block" />
                16+ Years of Poultry Industry Excellence
              </span>
            </motion.div>

            {/* Featured quote */}
            <motion.h4
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              className="text-xl md:text-2xl font-heading font-bold text-brand-navy leading-snug text-justify"
            >
              "Our commitment is to drive sustainable growth in the poultry sector through unwavering scientific excellence and practical, field-tested innovations."
            </motion.h4>

            {/* Vision description card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="relative bg-white rounded-2xl p-7 border border-slate-100 shadow-brand-sm overflow-hidden"
            >
              {/* Decorative quote icon */}
              <Quote className="absolute -top-3 -right-3 w-24 h-24 text-brand-navy/[0.03]" />

              <p className="text-slate-600 leading-relaxed relative z-10 text-[0.95rem] text-justify">
                Under his visionary leadership, Yaashvan Veterinary Services has evolved into a trusted global partner for protein producers. By bridging the gap between advanced biotech research and field-level realities, we empower businesses to achieve peak animal health and operational profitability.
              </p>
            </motion.div>

            {/* Quick stat pills */}
            <motion.div
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.42 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { value: '16+', label: 'Years Experience' },
                { value: '500+', label: 'Partnerships' },
                { value: '50+', label: 'Products' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <span className="text-xl font-heading font-bold text-brand-navy">{s.value}</span>
                  <span className="text-slate-500 text-xs">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
