import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cross, MapPin, Phone, MessageSquare, Clock, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);

    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid')!);
    }

    if (!cid) return;

    let visitorId =
      localStorage.getItem('wmit_visitor_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId =
      sessionStorage.getItem('wmit_session_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, '').split('/').pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init',
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change',
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: ReturnType<typeof setTimeout>;
    let isIdle = false;

    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach((evt) => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach((evt) => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-300 pt-16 pb-20 md:pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Store Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                <Cross className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Sanjay <span className="text-emerald-400">Medical Store</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your most trusted neighborhood pharmacy in Gewalbigha, Gaya. Sourcing 100% genuine medicines, diagnostic devices, baby care essentials, and surgical items at affordable prices.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Licensed & Certified Pharmacy • Gaya, Bihar</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors flex items-center">
                  <span className="mr-2 text-emerald-500">•</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors flex items-center">
                  <span className="mr-2 text-emerald-500">•</span> About Us & Story
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors flex items-center">
                  <span className="mr-2 text-emerald-500">•</span> Pharmacy Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition-colors flex items-center">
                  <span className="mr-2 text-emerald-500">•</span> Store Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors flex items-center">
                  <span className="mr-2 text-emerald-500">•</span> Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details & Address */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs">
              Store Contact Info
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>QXPV+3HG, W.Wazir ALi Lane, Gewalbigha, Gaya, Bihar 823001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <a href="tel:09204548707" className="hover:text-emerald-400 font-semibold">
                  09204548707
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                <a href="https://wa.me/919204548707" target="_blank" rel="noreferrer" className="hover:text-emerald-400">
                  WhatsApp: 09204548707
                </a>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Mon - Sun: 8:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Location Map Action & Legal */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs">
              Google Maps Location
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Visit our physical store in Gewalbigha or open Google Maps for GPS turn-by-turn navigation.
            </p>
            <a
              href="https://maps.google.com/?q=QXPV%2B3HG,+W.Wazir+ALi+Lane,+Gewalbigha,+Gaya,+Bihar+823001"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl bg-emerald-900/50 hover:bg-emerald-900 text-emerald-300 border border-emerald-700 text-xs font-semibold transition-all group"
            >
              <span>Get Google Maps Directions</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] text-slate-500 space-y-1">
              <p>• Licensed Medical Practitioner Verification</p>
              <p>• Temperature-controlled cold chain</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar & WebMaker IT Developer Attribution */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            <p>© {new Date().getFullYear()} Sanjay Medical Store. All rights reserved.</p>
          </div>

          <div className="flex items-center space-x-4 text-slate-400">
            <span className="hover:text-slate-200 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-200 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-200 cursor-pointer">Disclaimer</span>
          </div>

          <div className="flex items-center space-x-1.5 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800 text-slate-300">
            <span>Developed with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span></span>
            <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
