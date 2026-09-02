import Hero from '../components/Hero';
import TrustStats from '../components/TrustStats';
import About from '../components/About';
import FlagshipSolutions from '../components/FlagshipSolutions';
import ProductsSection from '../components/ProductsSection';
import CoreStrengths from '../components/CoreStrengths';
import Leadership from '../components/Leadership';
import Partners from '../components/Partners';
import Commitment from '../components/Commitment';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Promotions from '../components/Promotions';
import ProductBanner from '../components/ProductBanner';
import GlobalPresence from '../components/GlobalPresence';

const HomePage = () => {
  return (
    <main className="relative bg-white min-h-screen">
      {/* ── Global Pink-Green Ambient Gradient ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Pink/Magenta orbs */}
        <div className="absolute top-[0%] right-[-5%] w-[900px] h-[900px] bg-gradient-to-bl from-pink-200/40 via-brand-magenta/[0.12] to-transparent rounded-full blur-[160px]" />
        <div className="absolute bottom-[15%] right-[5%] w-[700px] h-[700px] bg-gradient-to-tl from-pink-200/30 via-brand-magenta/[0.08] to-transparent rounded-full blur-[140px]" />
        {/* Green/Emerald orbs */}
        <div className="absolute bottom-[0%] left-[-8%] w-[800px] h-[800px] bg-gradient-to-tr from-emerald-100/40 via-brand-emerald/[0.10] to-transparent rounded-full blur-[150px]" />
        <div className="absolute top-[25%] left-[0%] w-[600px] h-[600px] bg-gradient-to-br from-emerald-100/30 via-brand-emerald/[0.06] to-transparent rounded-full blur-[130px]" />
        {/* Subtle blue/indigo center accent */}
        <div className="absolute top-[40%] left-[40%] w-[500px] h-[500px] bg-gradient-to-br from-indigo-100/20 to-transparent rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Hero />
        <TrustStats />
        <About />
        <FlagshipSolutions />
        <ProductsSection />
        <ProductBanner />
        <CoreStrengths />
        <Leadership />
        <Partners />
        <Commitment />
        <Certifications />
        <Contact />
        <Promotions />
        <GlobalPresence />
      </div>
    </main>
  );
};

export default HomePage;
