import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { SERVICES_LIST } from '../data/servicesData';
import { ShieldCheck, ArrowRight, CheckCircle2, HeartPulse, Stethoscope, Baby, Pill, Activity, Truck, Package, MessageSquare, Phone } from 'lucide-react';

interface ServicesProps {
  onOpenOrderModal: (medName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenOrderModal }) => {
  const categoriesList = [
    { title: 'Prescription Medicines', icon: Pill, count: '1000+ Items', desc: 'Cardiology, Diabetes, Antibiotics, Gastro, Nephrology' },
    { title: 'OTC Medicines', icon: Stethoscope, count: '500+ Items', desc: 'Pain Relief, Antacids, Cough & Cold, Ointments' },
    { title: 'Health Devices', icon: Activity, count: 'Omron, Accu-Chek', desc: 'Digital BP Monitors, Glucometers, Nebulizers' },
    { title: 'Baby Care & Food', icon: Baby, count: 'Infant Essentials', desc: 'Lactogen, Cerelac, Diapers, Hypoallergenic Lotions' },
    { title: 'Nutritional Supplements', icon: HeartPulse, count: 'Multivitamins', desc: 'Calcium D3, Protein Powders, Immunity Boosters' },
    { title: 'Medical & Surgical', icon: Package, count: 'Sterile Supplies', desc: 'Surgical Cotton, Gauze, Antiseptic Liquids, Tapes' },
  ];

  return (
    <div id="services-page" className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <SEOHead
        title="Pharmacy Services & Categories | Sanjay Medical Store Gaya"
        description="Browse healthcare products, prescription medicines, health devices, baby care, OTC drugs, and medical supplies at Sanjay Medical Store Gewalbigha, Gaya."
      />

      <Breadcrumbs />

      {/* Header Banner */}
      <section id="services-hero" className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
            <ShieldCheck className="w-4 h-4" />
            <span>Comprehensive Pharmacy Care</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Healthcare Services & Product Categories
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From chronic prescription management to home diagnostic instruments and baby wellness — explore our full spectrum of authentic pharmacy services in Gewalbigha, Gaya.
          </p>
        </div>
      </section>

      {/* Exclusive Feature: Medicine Stock Checker Component */}
      <section id="stock-checker-section" className="py-12 bg-emerald-50/50 dark:bg-slate-900/60 border-b border-emerald-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full">
              ★ Exclusive Feature
            </span>
          </div>
          <MedicineStockChecker onOrderClick={(medName) => onOpenOrderModal(medName)} />
        </div>
      </section>

      {/* Category Grid Overview */}
      <section id="category-overview" className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
              Departmental Breakdown
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Medicine & Healthcare Categories
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              All product lines stored strictly according to humidity and temperature guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoriesList.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full">
                    {cat.count}
                  </span>
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white mt-2 mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Service Cards */}
      <section id="detailed-services-list" className="py-16 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
              Service Deep-Dive
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Detailed Pharmacy Services
            </h2>
          </div>

          <div className="space-y-8">
            {SERVICES_LIST.map((service, index) => (
              <div
                key={service.id}
                className={`bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center gap-8`}
              >
                <div className="flex-1 space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
                    {service.category}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {service.highlights.map((item, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => onOpenOrderModal(service.title)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl text-xs flex items-center space-x-2 transition-all hover:scale-105 shadow-md shadow-emerald-600/20"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{service.ctaText}</span>
                    </button>
                  </div>
                </div>

                <div className="w-full lg:w-80 h-56 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-6 flex flex-col justify-between border border-slate-200 dark:border-slate-800 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                    #{index + 1}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Service Guarantee</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                      Certified Genuine Sourcing Guarantee
                    </p>
                  </div>
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                    Available at Gewalbigha Store & WhatsApp
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Home Delivery Process */}
      <section id="delivery-process" className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider">
              Step-by-Step Guide
            </span>
            <h2 className="text-3xl font-bold text-white mt-1">
              How WhatsApp Medicine Order Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center mx-auto text-base">
                1
              </div>
              <h3 className="font-bold text-base text-white">Upload Prescription</h3>
              <p className="text-xs text-slate-300">Take a photo of doctor prescription or write list of required medicines.</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center mx-auto text-base">
                2
              </div>
              <h3 className="font-bold text-base text-white">Stock & Bill Verification</h3>
              <p className="text-xs text-slate-300">Our pharmacist verifies batch, expiry, and sends total bill with MRP discount.</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center mx-auto text-base">
                3
              </div>
              <h3 className="font-bold text-base text-white">Careful Packaging</h3>
              <p className="text-xs text-slate-300">Order is sealed with cold-pack protection for insulins or temperature sensitive items.</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center mx-auto text-base">
                4
              </div>
              <h3 className="font-bold text-base text-white">Doorstep Delivery</h3>
              <p className="text-xs text-slate-300">Delivered directly to your home in Gewalbigha/Gaya with cash or UPI payment.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
