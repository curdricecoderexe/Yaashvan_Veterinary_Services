import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const HomePage = lazy(() => import('./pages/HomePage'));
const GoldMaxxPage = lazy(() => import('./pages/GoldMaxxPage'));
const HepatoshieldPage = lazy(() => import('./pages/HepatoshieldPage'));
const ProGainXPage = lazy(() => import('./pages/ProGainXPage'));
const AzurroSaniXPage = lazy(() => import('./pages/AzurroSaniXPage'));
const BoomOxPage = lazy(() => import('./pages/BoomOxPage'));
const BoomOxLiqPage = lazy(() => import('./pages/BoomOxLiqPage'));
const VirutrapPage = lazy(() => import('./pages/VirutrapPage'));
const ProteolichPage = lazy(() => import('./pages/ProteolichPage'));
const BetainPage = lazy(() => import('./pages/BetainPage'));
const YaashGuardPage = lazy(() => import('./pages/YaashGuardPage'));

function App() {
  return (
    <Router>
      <div className="bg-[#0a0f24] min-h-screen text-slate-900 font-sans selection:bg-brand-magenta/30 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Suspense fallback={<div className="min-h-screen bg-[#0a0f24] flex items-center justify-center"><div className="w-12 h-12 border-4 border-brand-magenta border-t-transparent rounded-full animate-spin"></div></div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/products/gold-maxx" element={<GoldMaxxPage />} />
              <Route path="/products/hepatoshield" element={<HepatoshieldPage />} />
              <Route path="/products/progainx" element={<ProGainXPage />} />
              <Route path="/products/azurro" element={<AzurroSaniXPage />} />
              <Route path="/products/boomox" element={<BoomOxLiqPage />} />
              <Route path="/products/boomox-machine" element={<BoomOxPage />} />
              <Route path="/products/virutrap" element={<VirutrapPage />} />
              <Route path="/products/proteolich" element={<ProteolichPage />} />
              <Route path="/products/betain" element={<BetainPage />} />
              <Route path="/products/yaashguard" element={<YaashGuardPage />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
