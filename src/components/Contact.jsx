import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useState } from 'react';

const contactDetails = [
  {
    icon: MapPin,
    label: 'Location',
    iconBg: 'bg-brand-navy/8',
    iconColor: 'text-brand-navy',
    content: (
      <>
        <strong className="text-slate-700">YAASHVAN VETERINARY SERVICES</strong><br />
        Sr.No.-6/1A Kondhwa-Saswad Road,<br />
        Near Kamthe Patil CNG Station,<br />
        Yewalewadi, Kondhwa Budruk, Pune- 411048 (M.S)
      </>
    ),
  },
  {
    icon: Mail,
    label: 'Direct Mail',
    iconBg: 'bg-brand-magenta/8',
    iconColor: 'text-brand-magenta',
    content: (
      <a href="mailto:info@yaashvan.com" className="text-brand-navy font-semibold hover:text-brand-magenta transition-colors">
        info@yaashvan.com
      </a>
    ),
  },
  {
    icon: Phone,
    label: 'Hotline',
    iconBg: 'bg-[#2B3990]/8',
    iconColor: 'text-[#2B3990]',
    content: (
      <div className="flex flex-col gap-1">
        <a href="tel:+919422036116" className="text-brand-navy font-semibold hover:text-brand-magenta transition-colors">+91 9422036116</a>
        <a href="tel:+919172236116" className="text-brand-navy font-semibold hover:text-brand-magenta transition-colors">+91 9172236116</a>
      </div>
    ),
  },
];

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Format pre-filled WhatsApp message
    const messageText = `Hello Yaashvan Veterinary Services,\n\nI would like to make an inquiry:\n- *Name*: ${formState.name}\n- *Company*: ${formState.company}\n- *Email*: ${formState.email}\n- *Message*: ${formState.message}`;
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/919172236116?text=${encodedMessage}`;

    // Redirect to WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">

      {/* Background accents */}
      <div className="absolute inset-0 hex-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-brand-navy/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-brand-magenta/4 to-transparent rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Section header */}
        <div className="text-center mb-10 md:mb-12">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-5">
            <span className="section-tag-light">
              <span className="w-1 h-1 rounded-full bg-brand-magenta inline-block" />
              Connect With Us
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-brand-navy mb-4"
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="text-slate-500 max-w-xl mx-auto text-lg"
          >
            Partner with us to explore innovative veterinary solutions tailored for your enterprise.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">

          {/* ── Left — Info Panel ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
            className="flex flex-col gap-6"
          >
            {/* Contact details card */}
            <div className="bg-white/50 backdrop-blur-2xl rounded-3xl p-8 border border-white shadow-[0_8px_32px_rgba(43,57,144,0.08),inset_0_1px_0_rgba(255,255,255,1)] relative overflow-hidden">
              <h3 className="text-2xl font-heading font-bold text-brand-navy mb-8">Corporate Office</h3>
              <div className="space-y-7">
                {contactDetails.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-5">
                      <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0 border border-current/10`} style={{ color: 'inherit' }}>
                        <Icon size={22} className={item.iconColor} />
                      </div>
                      <div>
                        <div className={`text-[10px] font-bold uppercase tracking-[0.18em] mb-1.5 ${item.iconColor}`}>{item.label}</div>
                        <div className="text-slate-600 text-sm leading-relaxed">{item.content}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map placeholder - hidden in mobile view */}
              <div className="hidden sm:block mt-8 h-48 rounded-xl overflow-hidden relative border border-slate-200/20 bg-brand-navy">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000&h=500"
                  alt="Global Presence Map"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale brightness-[0.4] contrast-[1.2] opacity-60"
                />
                {/* Navy Overlay to tint the map */}
                <div className="absolute inset-0 bg-brand-navy/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />

                {/* Marker positioned roughly over India */}
                <div className="absolute top-[62%] left-[68%]">
                  <div className="w-5 h-5 bg-brand-magenta rounded-full animate-ping absolute opacity-80" />
                  <div className="w-5 h-5 bg-brand-magenta rounded-full relative border-2 border-white shadow-[0_0_15px_rgba(146,39,143,0.8)]" />
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/919172236116"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#1aab55] text-white font-bold text-base shadow-[0_8px_30px_rgba(37,211,102,0.2)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.3)] transition-all duration-300"
            >
              <img src="/what.svg" alt="WhatsApp" loading="lazy" width={24} height={24} className="w-6 h-6" />
              Instant WhatsApp Support
            </motion.a>
          </motion.div>

          {/* ── Right — Inquiry Form ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
            className="bg-white/50 backdrop-blur-2xl rounded-3xl p-8 md:p-10 border border-white shadow-[0_8px_32px_rgba(43,57,144,0.08),inset_0_1px_0_rgba(255,255,255,1)] relative overflow-hidden"
          >
            {/* Decorative accent */}
            <div className="absolute -top-28 -right-28 w-80 h-80 bg-gradient-to-bl from-brand-navy/5 to-transparent rounded-full blur-[80px] pointer-events-none" />

            <h3 className="text-2xl font-heading font-bold text-brand-navy mb-8 relative z-10">Inquiry Form</h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-64 flex flex-col items-center justify-center text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-brand-emerald/10 flex items-center justify-center">
                  <Send size={28} className="text-brand-emerald" />
                </div>
                <h4 className="text-xl font-bold text-brand-navy">Message Sent!</h4>
                <p className="text-slate-500">Our team will get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Full Name</label>
                    <input
                      type="text" name="name" value={formState.name} onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3.5 text-slate-700 bg-white/40 backdrop-blur-md border border-white/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] rounded-xl focus:outline-none focus:bg-white/70 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/10 transition-all duration-300 text-sm placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Company</label>
                    <input
                      type="text" name="company" value={formState.company} onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full px-4 py-3.5 text-slate-700 bg-white/40 backdrop-blur-md border border-white/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] rounded-xl focus:outline-none focus:bg-white/70 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/10 transition-all duration-300 text-sm placeholder:text-slate-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Business Email</label>
                  <input
                    type="email" name="email" value={formState.email} onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3.5 text-slate-700 bg-white/40 backdrop-blur-md border border-white/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] rounded-xl focus:outline-none focus:bg-white/70 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/10 transition-all duration-300 text-sm placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Message</label>
                  <textarea
                    name="message" rows={5} value={formState.message} onChange={handleChange}
                    placeholder="How can we assist you today?"
                    className="w-full px-4 py-3.5 text-slate-700 bg-white/40 backdrop-blur-md border border-white/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] rounded-xl focus:outline-none focus:bg-white/70 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/10 transition-all duration-300 text-sm resize-none placeholder:text-slate-400"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full btn-primary justify-center py-4 rounded-xl text-base"
                >
                  <Send size={18} />
                  Send Professional Inquiry
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
