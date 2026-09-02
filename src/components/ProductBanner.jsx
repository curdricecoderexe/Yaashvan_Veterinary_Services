import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const ProductBanner = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-brand-navy">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-magenta/10 rounded-full blur-[120px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-emerald/10 rounded-full blur-[100px] -ml-32 -mb-32" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-emerald text-sm font-bold tracking-widest uppercase mb-6"
              >
                <Zap size={16} />
                <span>Technological Breakthrough</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight mb-6">
                Redefining <span className="text-brand-magenta">Water Standards</span> for Poultry
              </h2>
              <p className="text-slate-300 text-lg lg:text-xl leading-relaxed max-w-xl">
                Experience the power of Boom-Ox Israeli technology. Our advanced water conditioning systems ensure 100% pathogen-free hydration, boosting growth and reducing mortality rates.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-brand-emerald/20 flex items-center justify-center text-brand-emerald">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">100% Safe</h4>
                  <p className="text-slate-400 text-sm">Pathogen Elimination</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-brand-magenta/20 flex items-center justify-center text-brand-magenta">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Instant Results</h4>
                  <p className="text-slate-400 text-sm">Enhanced Performance</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-brand-magenta text-white font-black uppercase tracking-widest hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-2xl w-fit"
            >
              Explore Boom-Ox Range
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Image Border/Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-magenta to-brand-emerald opacity-20 blur-2xl rounded-4xl" />
            
            <div className="relative rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <img
                src="/boomx-prom.webp"
                alt="Boom-Ox Promotion"
                loading="lazy"
                decoding="async"
                className="w-full h-auto block"
              />
              
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent pointer-events-none" />
            </div>
            
            {/* Floating Stats or Detail */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 lg:-left-10 bg-white p-6 rounded-3xl shadow-2xl z-20 hidden md:block"
            >
              <div className="text-4xl font-black text-brand-navy mb-1">99.9%</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Efficiency Rate</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
