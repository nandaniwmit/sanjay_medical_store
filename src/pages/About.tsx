import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldCheck, Heart, Award, CheckCircle2, Building2, UserCheck, Clock, MapPin, Sparkles, Phone, MessageSquare } from 'lucide-react';

interface AboutProps {
  onOpenOrderModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenOrderModal }) => {
  return (
    <div id="about-page" className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <SEOHead
        title="About Us | Sanjay Medical Store - Gewalbigha, Gaya, Bihar"
        description="Learn about Sanjay Medical Store in Gewalbigha, Gaya. Our mission, values, pharmacist commitment, cold chain storage facilities, and history of serving genuine medicines."
      />

      <Breadcrumbs />

      {/* Header Banner */}
      <section id="about-hero" className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
            <Building2 className="w-4 h-4" />
            <span>Our Heritage & Values</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About Sanjay Medical Store
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Your steadfast neighborhood healthcare partner in Gewalbigha, Gaya — dedicated to 100% genuine pharmaceuticals, patient education, and local accessibility.
          </p>
        </div>
      </section>

      {/* Main Story & Overview */}
      <section id="business-story" className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                Business Story
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                Serving Gewalbigha & Gaya with Authenticity and Patient Care
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                Founded with a resolute commitment to public health, <strong>Sanjay Medical Store</strong> was established in W. Wazir Ali Lane, Gewalbigha, Gaya to bridge the gap between quality pharmaceutical care and local healthcare accessibility.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                In an industry where counterfeit and improperly stored medications pose grave risks, we built our reputation on two unshakeable pillars: <strong>Strict Direct Brand Procurement</strong> and <strong>Uncompromised Temperature-Controlled Cold Chain Storage</strong>. Every tablet strip, syrup, and diagnostic device on our shelves comes with verified manufacturing origin.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60">
                  <span className="text-2xl font-extrabold text-emerald-700 dark:text-emerald-400">100%</span>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-semibold mt-1">Genuine & Certified Drugs</p>
                </div>
                <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/60">
                  <span className="text-2xl font-extrabold text-teal-700 dark:text-teal-400">7 Days</span>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-semibold mt-1">Active Store Availability</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80"
                  alt="Sanjay Medical Store Interior Shelves"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pharmacist & Owner Message */}
      <section id="owner-message" className="py-16 bg-slate-100 dark:bg-slate-950 border-y border-slate-200/80 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200 dark:border-slate-800 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shrink-0 shadow-lg">
                <UserCheck className="w-12 h-12" />
              </div>
              <div className="space-y-4 text-center sm:text-left">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Pharmacist’s Personal Message
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  "Our Responsibility Goes Beyond Selling Medicines — It’s About Guarding Your Health."
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                  "When a patient visits Sanjay Medical Store with a doctor’s prescription, they bring their trust. We ensure that every medicine dispensed is exact, unexpired, and stored at optimal temperature. We take time to guide patients on exact dosages, proper food timings, and precautions. Gewalbigha is our home, and serving its families is our highest duty."
                </p>
                <div className="pt-2">
                  <p className="font-bold text-slate-900 dark:text-white text-base">Sanjay Kumar</p>
                  <p className="text-xs text-slate-500">Lead Pharmacist & Store Director • Sanjay Medical Store, Gaya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section id="mission-vision" className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
              Core Guiding Philosophy
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Mission, Vision & Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To provide authentic, affordable, and immediate access to prescription and OTC medications with uncompromising quality standards across Gaya.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To be Gewalbigha’s most digitally empowered, patient-centric neighborhood medical store offering instant WhatsApp ordering and home delivery.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-800 text-white flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Core Values</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Integrity, total transparency in pricing, continuous cold-chain vigilance, and empathetic pharmacist patient consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Journey & Timeline */}
      <section id="business-timeline" className="py-16 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
              Store Journey
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Milestones in Gewalbigha
            </h2>
          </div>

          <div className="relative border-l-2 border-emerald-500/40 ml-4 sm:ml-32 space-y-10">
            <div className="relative pl-8">
              <span className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold ring-4 ring-slate-50 dark:ring-slate-950">
                1
              </span>
              <div className="sm:absolute sm:-left-32 sm:top-0 text-xs font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1 sm:mb-0">
                Inception
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Establishment in Gewalbigha</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Opened physical pharmacy counter in W. Wazir Ali Lane, stocking essential prescription medicines and first-aid kits for local families.
              </p>
            </div>

            <div className="relative pl-8">
              <span className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold ring-4 ring-slate-50 dark:ring-slate-950">
                2
              </span>
              <div className="sm:absolute sm:-left-32 sm:top-0 text-xs font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1 sm:mb-0">
                Expansion
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Cold-Chain & Health Device Wing</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Installed commercial refrigeration for biologicals & insulins, and expanded stock to include Omron BP monitors, glucometers, and nebulizers.
              </p>
            </div>

            <div className="relative pl-8">
              <span className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold ring-4 ring-slate-50 dark:ring-slate-950">
                3
              </span>
              <div className="sm:absolute sm:-left-32 sm:top-0 text-xs font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1 sm:mb-0">
                Digital Era
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">WhatsApp Order & Home Delivery</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Launched WhatsApp instant prescription ordering and doorstep delivery across Gewalbigha & Gaya town.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold">Have Questions or Need a Specialized Medicine?</h3>
          <p className="text-sm text-slate-300">Contact our pharmacist directly or send your prescription via WhatsApp.</p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={onOpenOrderModal}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all"
            >
              Order via WhatsApp
            </button>
            <a
              href="tel:09204548707"
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all border border-slate-700"
            >
              Call 09204548707
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
