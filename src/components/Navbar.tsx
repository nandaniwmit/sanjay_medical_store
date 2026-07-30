import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Cross, Menu, X, Phone, MessageSquare, Clock, MapPin } from 'lucide-react';
import { DarkThemeToggle } from './DarkThemeToggle';

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900 text-white text-xs py-2 px-4 border-b border-emerald-700/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-4 text-emerald-100">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Gewalbigha, Gaya, Bihar 823001</span>
            </span>
            <span className="hidden md:flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Open Daily: 8:00 AM - 10:00 PM</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="tel:09204548707"
              className="flex items-center space-x-1 hover:text-emerald-300 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Helpline: 09204548707</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav id="main-navbar" className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center space-x-2.5 group">
              <div className="w-10 h-10 bg-[#0A8F6A] rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow-md shadow-[#0A8F6A]/20 transition-transform group-hover:scale-105">
                S
              </div>
              <div>
                <span className="block text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                  Sanjay Medical <span className="text-[#0A8F6A]">Store</span>
                </span>
                <span className="block text-[10px] font-semibold text-slate-400 dark:text-slate-400 mt-0.5 tracking-wider uppercase">
                  Gewalbigha, Gaya
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8 font-medium text-sm">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `pb-1 transition-all ${
                      isActive
                        ? 'text-[#0A8F6A] border-b-2 border-[#0A8F6A] font-bold'
                        : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Desktop Right CTAs */}
            <div className="hidden md:flex items-center space-x-3">
              <DarkThemeToggle />

              <button
                onClick={onOpenOrderModal}
                id="nav-wa-order-btn"
                className="bg-[#0A8F6A] hover:bg-[#087758] text-white px-5 py-2 rounded-full font-semibold text-sm hover:shadow-lg transition-all flex items-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </button>
            </div>

            {/* Mobile menu toggle button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <DarkThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                id="mobile-menu-toggle"
                className="p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div id="mobile-menu-drawer" className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order via WhatsApp</span>
              </button>

              <a
                href="tel:09204548707"
                className="w-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 border border-slate-200 dark:border-slate-700"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call Store: 09204548707</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
