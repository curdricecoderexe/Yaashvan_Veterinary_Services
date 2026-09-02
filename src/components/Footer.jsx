import { motion } from 'framer-motion';
import { Share2, Mail, Phone, Globe, ArrowRight, MapPin } from 'lucide-react';

const quickLinks = ['About Us', 'Solutions', 'Core Strengths', 'Leadership', 'Contact'];
const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy'];
const solutions = ['Feed Mill Solutions', 'Water Health Solutions', 'Gut Health Promoters', 'Performance Enhancers', 'Immune Support'];

const socialIcons = [Share2, Mail, Phone, Globe];

const Footer = () => {
  return (
    <footer className="bg-brand-navy relative overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-brand-magenta/60 to-transparent" />

      {/* Background mesh */}
      <div className="absolute inset-0 bg-mesh-dark opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-magenta/8 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#2B3990]/20 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* ── CTA Banner ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-14 border-b border-white/8 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 leading-snug">
              Ready to elevate your livestock performance?
            </h3>
            <p className="text-slate-400 text-base">
              Partner with Yaashvan and unlock science-driven, field-tested solutions for your operation.
            </p>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-magenta to-[#6B1580] text-white font-semibold text-sm tracking-wide shadow-[0_4px_20px_rgba(146,39,143,0.3)] hover:shadow-[0_8px_32px_rgba(146,39,143,0.4)] transition-all duration-300"
          >
            Get In Touch
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>

        {/* ── Main Footer Grid ────────────────────────────── */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="bg-white w-fit mx-auto sm:mx-0 rounded-xl px-4 py-2 mb-6 shadow-sm">
              <img src="/logo.webp" alt="Yaashvan Veterinary Services" width={600} height={154} loading="lazy" className="h-9 w-auto object-contain" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-7 max-w-[240px] mx-auto sm:mx-0">
              Innovating veterinary health naturally. Empowering global protein producers with science-driven, practical solutions.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              {socialIcons.map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-9 h-9 rounded-xl bg-white/6 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/12 hover:border-white/20 transition-all duration-300"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>

            {/* Address snippet */}
            <div className="mt-7 flex items-start justify-center sm:justify-start gap-2.5 text-left">
              <MapPin size={14} className="text-brand-magenta shrink-0 mt-0.5" />
              <p className="text-slate-500 text-xs leading-relaxed">
                Yewalewadi, Kondhwa Budruk,<br />
                Pune - 411048 (M.S), India
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-[0.14em] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <motion.a
                    href={`#${link.toLowerCase().replace(/\s/g, '')}`}
                    whileHover={{ x: 4 }}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-300 flex items-center justify-center sm:justify-start gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-brand-magenta transition-all duration-300 inline-block" />
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-[0.14em] mb-6">Solutions</h4>
            <ul className="space-y-3">
              {solutions.map((link, i) => (
                <li key={i}>
                  <motion.a
                    href="#solutions"
                    whileHover={{ x: 4 }}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-300 flex items-center justify-center sm:justify-start gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-brand-magenta transition-all duration-300 inline-block" />
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact mini */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-[0.14em] mb-6">Legal</h4>
            <ul className="space-y-3 mb-8">
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 4 }}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-300 flex items-center justify-center sm:justify-start gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-brand-magenta transition-all duration-300 inline-block" />
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>

            {/* Contact quick links */}
            <div className="space-y-2.5">
              <a href="mailto:info@yaashvan.com" className="flex items-center justify-center sm:justify-start gap-2 text-slate-400 hover:text-white text-sm transition-colors duration-300 group">
                <Mail size={13} className="text-brand-magenta shrink-0" />
                info@yaashvan.com
              </a>
              <a href="tel:+919422036116" className="flex items-center justify-center sm:justify-start gap-2 text-slate-400 hover:text-white text-sm transition-colors duration-300">
                <Phone size={13} className="text-brand-magenta shrink-0" />
                +91 9422036116
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ──────────────────────────────────── */}
        <div className="py-6 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Yaashvan Veterinary Services. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
            Designed with <span className="text-brand-magenta text-base">♥</span> for Global Veterinary Excellence
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
