import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  "All",
  "Liver Health",
  "Water Quality Management",
  "Performance Enhancer",
  "Gut Protection",
  "Immunity Elevators",
  "Feed mill solutions",
  "Summer Anti-Stressors"
];

const products = [
  {
    name: 'BOOM-OX LIQ',
    src: '/Boom-0x.webp',
    category: 'Water Quality Management',
    color: 'from-brand-navy to-[#2B3990]',
    link: '/products/boomox',
    desc: 'Patented Israeli technology-based water conditioner for optimum livestock health.'
  },
  {
    name: 'BOOM OX MACHINE',
    src: '/boomx-prom.webp',
    category: 'Water Quality Management',
    color: 'from-brand-navy to-brand-emerald',
    link: '/products/boomox-machine',
    desc: 'Advanced electrolysis system for large-scale water purification.'
  },
  {
    name: 'AZURRO SANI-X',
    src: '/prom2.webp',
    category: 'Water Quality Management',
    color: 'from-brand-navy to-brand-emerald',
    link: '/products/azurro',
    desc: 'Dual-action water sanitization and acidification solution for smarter protection and stronger flock performance.'
  },
  {
    name: 'HEPATOSHIELD',
    src: '/hepatoshield.webp',
    category: 'Liver Health',
    color: 'from-brand-emerald to-brand-navy',
    link: '/products/hepatoshield',
    desc: 'Broad-spectrum liver support solution to protect, recover, and leverage performance.'
  },
  {
    name: 'G-PROGAIN X',
    src: '/prom1.webp',
    category: 'Performance Enhancer',
    color: 'from-brand-magenta to-pink-500',
    link: '/products/progainx',
    desc: 'Advanced poultry growth promoter for superior uniformity and performance.'
  },
  {
    name: 'GOLD MAXX',
    src: '/gold-maxx.webp',
    category: 'Performance Enhancer',
    color: 'from-[#2B3990] to-brand-magenta',
    link: '/products/gold-maxx',
    desc: 'Premium growth and performance catalyst engineered for peak productivity.'
  },
  {
    name: 'BETAIN',
    src: '/betain.webp',
    category: 'Summer Anti-Stressors',
    color: 'from-orange-400 to-red-500',
    link: '/products/betain',
    desc: 'Natural osmoregulator to combat heat stress in livestock.'
  },
  {
    name: 'YAASHGUARD',
    src: '/YAASHGUARD.webp',
    category: 'Feed mill solutions',
    color: 'from-brand-emerald to-brand-navy',
    link: '/products/yaashguard',
    desc: 'Advanced feed hygiene solution with organic acids and LeciSpread technology for cleaner feed and lower pathogen pressure.'
  },
];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="pt-0 pb-24 md:pb-32 bg-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 hex-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-navy/[0.03] to-transparent rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-brand-magenta/[0.02] to-transparent rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5"
          >
            <span className="section-tag-light">
              <span className="w-1 h-1 rounded-full bg-brand-emerald inline-block" />
              Our Flagship Formulations
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-brand-navy mb-6"
          >
            Premium <span className="text-gradient">Brands</span>
          </motion.h2>

          {/* Category Filter Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2.5 sm:gap-3 mt-10 md:mt-12 overflow-x-auto no-scrollbar pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap md:justify-center md:overflow-visible w-[calc(100%+3rem)] md:w-full"
          >
            <div className="flex items-center gap-2 mr-2 text-slate-400 shrink-0">
              <Filter size={16} className="text-brand-magenta" />
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-slate-500">Filter by:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 whitespace-nowrap px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-sm font-bold transition-all duration-400 border relative overflow-hidden group ${activeCategory === cat
                  ? 'text-white border-transparent shadow-[0_8px_20px_rgba(43,57,144,0.25)] scale-[1.02]'
                  : 'bg-white/70 backdrop-blur-md text-slate-600 border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-brand-magenta/40 hover:text-brand-navy hover:bg-white hover:shadow-md'
                  }`}
              >
                {/* Active Gradient Background */}
                {activeCategory === cat && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1a234e] to-[#2B3990] -z-10" />
                )}
                {/* Hover Inner Sheen */}
                {activeCategory !== cat && (
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-magenta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                )}
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
                className="group relative h-full"
              >
                {/* Outer Glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${product.color} rounded-[2.5rem] opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}></div>

                {/* Card Body */}
                <div className="relative bg-white/80 backdrop-blur-2xl p-4 rounded-[2.5rem] border border-white/80 shadow-[0_8px_32px_rgba(43,57,144,0.06)] hover:shadow-[0_16px_48px_rgba(43,57,144,0.12)] transition-all duration-500 h-full flex flex-col overflow-hidden">

                  {/* Large Image Wrapper with Glow */}
                  <div className="relative w-full h-64 sm:h-72 bg-gradient-to-br from-slate-50 to-slate-100/80 rounded-[2rem] overflow-hidden flex items-center justify-center mb-6 border border-slate-100/60 shadow-inner group-hover:shadow-[inset_0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500">
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr ${product.color} rounded-full blur-3xl opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-700 pointer-events-none`} />

                    <div className="absolute top-4 right-4 z-20">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-sm">
                        <Star size={10} className="text-brand-magenta fill-brand-magenta" />
                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-brand-navy">Premium</span>
                      </div>
                    </div>

                    <img
                      src={product.src}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      className="relative z-10 w-full h-full object-contain p-8 drop-shadow-2xl group-hover:scale-[1.08] transition-transform duration-700 ease-out mix-blend-multiply"
                    />
                  </div>

                  {/* Content Wrapper */}
                  <div className="px-4 pb-4 flex-grow flex flex-col items-center text-center">
                    <div className="mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-emerald bg-brand-emerald/5 px-2 py-0.5 rounded-md">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-brand-magenta mb-3 tracking-tight group-hover:scale-[1.02] transition-transform duration-300">
                      {product.name}
                    </h3>

                    <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                      {product.desc}
                    </p>

                    <Link
                      to={product.link}
                      className="relative inline-flex items-center justify-center w-full px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-brand-navy rounded-2xl overflow-hidden group/btn shadow-[0_10px_20px_rgba(43,57,144,0.15)] hover:shadow-[0_15px_30px_rgba(43,57,144,0.25)] transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        View Specifications <ArrowRight size={14} className="group-hover/btn:translate-x-1.5 transition-transform" />
                      </span>
                      <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductsSection;
