import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import { FloatingActionButtons } from './components/FloatingActionButtons';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';

// Lazy loading pages as requested
const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then((module) => ({ default: module.About })));
const Services = lazy(() => import('./pages/Services').then((module) => ({ default: module.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then((module) => ({ default: module.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then((module) => ({ default: module.Contact })));

// Scroll To Top on Route Change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Suspense Fallback Loading Skeleton
function PageLoadingFallback() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-950">
      <div className="w-12 h-12 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin mb-4"></div>
      <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
        Loading Sanjay Medical Store...
      </p>
    </div>
  );
}

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState<string>('');

  const handleOpenOrderModal = (medicineName?: string) => {
    if (medicineName) {
      setPrefilledMedicine(medicineName);
    } else {
      setPrefilledMedicine('');
    }
    setIsOrderModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200 selection:bg-emerald-500 selection:text-white">
        {/* Navigation Bar */}
        <Navbar onOpenOrderModal={() => handleOpenOrderModal()} />

        {/* Main Content Router */}
        <main className="flex-grow">
          <Suspense fallback={<PageLoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home onOpenOrderModal={handleOpenOrderModal} />} />
              <Route path="/about" element={<About onOpenOrderModal={handleOpenOrderModal} />} />
              <Route path="/services" element={<Services onOpenOrderModal={handleOpenOrderModal} />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact onOpenOrderModal={handleOpenOrderModal} />} />
              {/* Catch-all fallback route to Home */}
              <Route path="*" element={<Home onOpenOrderModal={handleOpenOrderModal} />} />
            </Routes>
          </Suspense>
        </main>

        {/* Footer (includes Global Tracking Script) */}
        <Footer />

        {/* Floating WhatsApp, Call & Back-To-Top buttons */}
        <FloatingActionButtons onOpenOrderModal={() => handleOpenOrderModal()} />

        {/* Global WhatsApp Medicine Order Form Modal */}
        <WhatsAppOrderModal
          isOpen={isOrderModalOpen}
          onClose={() => setIsOrderModalOpen(false)}
          prefilledMedicine={prefilledMedicine}
        />
      </div>
    </BrowserRouter>
  );
}
