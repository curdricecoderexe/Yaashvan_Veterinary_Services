import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Tag, Sparkles } from 'lucide-react';

const Promotions = () => {
  const promotions = [
    {
      id: 1,
      image: '/prom1.webp',
      title: 'Monsoon Special',
      subtitle: 'Exclusive discounts on poultry health solutions',
      badge: 'Limited Time',
      accent: 'magenta'
    },
    {
      id: 2,
      image: '/prom2.webp',
      title: 'Precision Care',
      subtitle: 'Advanced diagnostic tools for livestock management',
      badge: 'New Arrival',
      accent: 'emerald'
    }
  ];

  return (
    <section id="promotions" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-magenta/20 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-magenta/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-emerald/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-magenta/5 border border-brand-magenta/10 text-brand-magenta text-sm font-semibold mb-4"
          >
            <Sparkles size={16} />
            <span>Special Offers</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-brand-navy mb-4"
          >
            Exclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-magenta to-brand-emerald">Promotions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Discover our latest deals and featured solutions designed to enhance your farm's productivity and animal well-being.
          </motion.p>
        </div>

        <div className="flex flex-col gap-12 lg:gap-16">
          {promotions.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group relative w-full rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-brand-md hover:shadow-brand-lg transition-all duration-500"
            >
              {/* Image Container - Fixed aspect ratio so every promo renders at the same size */}
              <div className="relative w-full overflow-hidden bg-slate-100 aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]">
                <img
                  src={promo.image}
                  alt={promo.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-center block transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Subtle Overlay for readability if needed, but keeping it light to show full image */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Content Card - Optional, maybe better to keep it clean if image has text */}
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex-1">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 ${promo.accent === 'magenta' ? 'bg-brand-magenta text-white' : 'bg-brand-emerald text-white'
                    }`}>
                    {promo.badge}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-2">
                    {promo.title}
                  </h3>
                  <p className="text-white/80 text-sm lg:text-base max-w-xl">
                    {promo.subtitle}
                  </p>
                </div>
                <div className="shrink-0">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-brand-navy font-bold hover:bg-brand-magenta hover:text-white transition-all duration-300 shadow-xl"
                  >
                    Get Started
                    <ArrowRight size={20} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
