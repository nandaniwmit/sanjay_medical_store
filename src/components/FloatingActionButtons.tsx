import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, ShoppingCart } from 'lucide-react';

interface FloatingActionButtonsProps {
  onOpenOrderModal: () => void;
}

export const FloatingActionButtons: React.FC<FloatingActionButtonsProps> = ({
  onOpenOrderModal,
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Buttons Desktop & Tablet */}
      <div id="floating-actions-wrapper" className="fixed bottom-8 right-8 z-40 flex flex-col gap-3 items-end">
        <div className="bg-white dark:bg-slate-900 px-4 py-2 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0A8F6A] animate-pulse"></span>
          <span>Online Order Active</span>
        </div>

        <div className="flex gap-3 items-center">
          {/* Back to Top */}
          {showBackToTop && (
            <button
              onClick={scrollToTop}
              id="back-to-top-btn"
              aria-label="Back to top"
              className="w-12 h-12 rounded-full bg-slate-800 text-white shadow-xl flex items-center justify-center hover:bg-slate-700 transition-all border border-slate-700"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}

          {/* WhatsApp Circle Button */}
          <button
            onClick={onOpenOrderModal}
            id="floating-whatsapp-btn"
            aria-label="Order via WhatsApp"
            className="bg-white text-[#0A8F6A] dark:bg-slate-900 dark:text-[#0A8F6A] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl border border-slate-100 dark:border-slate-800 hover:scale-105 transition-transform"
            title="Order Medicines on WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </button>

          {/* Call Circle Button */}
          <a
            href="tel:09204548707"
            id="floating-call-btn"
            aria-label="Call Sanjay Medical Store"
            className="bg-[#0A8F6A] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform"
            title="Call Store Now"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div id="mobile-sticky-cta" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-2.5 px-4 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href="tel:09204548707"
          className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-1.5 border border-slate-200 dark:border-slate-700"
        >
          <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>Call 09204548707</span>
        </a>

        <button
          onClick={onOpenOrderModal}
          className="flex-1 bg-emerald-600 text-white py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-1.5 shadow-lg shadow-emerald-600/30"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Order Medicine</span>
        </button>
      </div>
    </>
  );
};
