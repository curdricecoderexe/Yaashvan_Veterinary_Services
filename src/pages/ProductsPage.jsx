import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Zap, Droplets, TrendingUp, Sparkles, FileDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { handleDownload } from '../constants/docs';

const products = [
  {
    name: 'BOOM-OX LIQ',
    src: '/Boom-0x.webp',
    color: 'from-brand-navy to-[#2B3990]',
    link: '/products/boomox',
    desc: 'Patented Israeli technology-based water conditioner for optimum livestock health.',
    tag: 'Water Treatment',
    icon: Droplets
  },
  {
    name: 'BOOM OX MACHINE',
    src: '/boomx-prom.webp',
    color: 'from-brand-navy to-brand-emerald',
    link: '/products/boomox-machine',
    desc: 'Advanced electrolysis system for large-scale water purification.',
    tag: 'Engineering Marvel',
    icon: Zap
  },
  {
    name: 'GOLD MAXX',
    src: '/gold-maxx.webp',
    color: 'from-[#2B3990] to-brand-magenta',
    link: '/products/gold-maxx',
    desc: 'Premium growth and performance catalyst engineered for peak productivity.',
    tag: 'Flagship Formulation',
    icon: TrendingUp
  },
  {
    name: 'HEPATOSHIELD',
    src: '/hepatoshield.webp',
    color: 'from-brand-emerald to-brand-navy',
    link: '/products/hepatoshield',
    desc: 'Advanced 7-System liver support and detoxification formulation.',
    tag: 'Liver Specialist',
    icon: ShieldCheck
  },
  {
    name: 'G-PROGAIN X',
    src: '/prom1.webp',
    color: 'from-brand-magenta to-pink-500',
    link: '/products/progainx',
    desc: 'High-performance poultry growth and uniformity promoter.',
    tag: 'Growth Promoter',
    icon: Sparkles
  },
  {
    name: 'AZURRO SANI-X',
    src: '/prom2.webp',
    color: 'from-brand-navy to-brand-emerald',
    link: '/products/azurro',
    desc: 'Dual-action water sanitizer and acidifier for clean hydration.',
    tag: 'Water Safety',
    icon: Droplets
  },
  {
    name: 'YAASHGUARD',
    src: '/YAASHGUARD.webp',
    color: 'from-brand-emerald to-brand-navy',
    link: '/products/yaashguard',
    desc: 'Advanced feed hygiene solution with organic acids and LeciSpread technology for cleaner feed.',
    tag: 'Feed Hygiene',
    icon: ShieldCheck
  },
];

const ProductsPage = () => {
  return (
    <div className="bg-[#fbfbfc] min-h-screen pt-40 pb-24 overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-brand-navy/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-brand-magenta/[0.02] rounded-full blur-[100px]" />
        <div className="absolute inset-0 hex-pattern opacity-30" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="section-tag-light">
              <span className="w-1 h-1 rounded-full bg-brand-magenta inline-block" />
              World-Class Portfolio
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-heading font-black text-brand-navy mb-8 tracking-tighter"
          >
            PREMIUM <span className="text-gradient">BRANDS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-xl leading-relaxed font-medium"
          >
            Explore our range of world-class veterinary solutions engineered for maximum livestock performance and health.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Outer Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${product.color} rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}></div>

              {/* Card Body */}
              <div className="relative bg-white/80 backdrop-blur-2xl p-5 md:p-8 rounded-[2rem] sm:rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] lg:rounded-[3.5rem] border border-white/80 shadow-[0_8px_40px_rgba(43,57,144,0.06)] hover:shadow-[0_20px_60px_rgba(43,57,144,0.12)] transition-all duration-500 h-full flex flex-col md:flex-row gap-8 lg:gap-6 sm:p-8 lg:p-12 items-center overflow-hidden">

                {/* Large Image Wrapper with Glow */}
                <div className="w-full md:w-64 lg:w-72 h-64 md:h-full min-h-[280px] shrink-0 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100/80 rounded-[2.5rem] relative overflow-hidden border border-slate-100/60 shadow-inner group-hover:shadow-[inset_0_4px_24px_rgba(0,0,0,0.04)] transition-shadow duration-500">
                  {/* Dynamic colorful glow behind product */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr ${product.color} rounded-full blur-3xl opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-700 pointer-events-none`} />

                  {/* Premium Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-sm">
                      <Star size={10} className="text-brand-magenta fill-brand-magenta" />
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-brand-navy">Premium</span>
                    </div>
                  </div>

                  <img
                    src={product.src}
                    alt={product.name}
                    className="relative z-10 w-full h-full object-contain p-8 drop-shadow-2xl group-hover:scale-110 transition-transform duration-700 ease-out mix-blend-multiply"
                  />
                </div>

                {/* Content Wrapper */}
                <div className="flex-grow flex flex-col items-center md:items-start text-center md:text-left py-4 pr-4 md:pr-8">
                  <div className="flex items-center gap-2 mb-4">
                    <product.icon size={14} className="text-brand-magenta" />
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-magenta">{product.tag}</span>
                  </div>
                  <h3 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-brand-magenta tracking-tight group-hover:scale-[1.02] transition-transform duration-300`}>
                    {product.name}
                  </h3>
                  <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-10 flex-grow max-w-md">
                    {product.desc}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto mt-auto">
                    <Link
                      to={product.link}
                      className="relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest text-white bg-brand-navy rounded-2xl overflow-hidden group/btn shadow-[0_10px_20px_rgba(43,57,144,0.15)] hover:shadow-[0_15px_30px_rgba(43,57,144,0.25)] transition-all duration-300 flex-grow text-center"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Specs <ArrowRight size={16} className="group-hover/btn:translate-x-1.5 transition-transform" />
                      </span>
                      <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`} />
                    </Link>

                    <button
                      onClick={() => handleDownload(product.name)}
                      className="relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest text-brand-navy bg-white border-2 border-brand-navy rounded-2xl overflow-hidden group/doc shadow-[0_5px_15px_rgba(43,57,144,0.05)] hover:bg-brand-navy hover:text-white transition-all duration-300 flex-grow text-center"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Literature <FileDown size={16} className="group-hover/doc:translate-y-0.5 transition-transform" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProductsPage;
