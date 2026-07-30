import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, ArrowRight, ShieldCheck, Clock, Award, HeartHandshake, CheckCircle2, ChevronRight, Star, Truck, Sparkles, Mail, Stethoscope } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { SERVICES_LIST } from '../data/servicesData';
import { REVIEWS_LIST } from '../data/reviewsData';
import { FAQ_LIST } from '../data/faqData';
import { HEALTH_TIPS } from '../data/healthTipsData';

interface HomeProps {
  onOpenOrderModal: (medName?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenOrderModal }) => {
  return (
    <div id="home-page" className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <SEOHead
        title="Sanjay Medical Store | Genuine Medicines & Healthcare in Gewalbigha, Gaya"
        description="Sanjay Medical Store in Gewalbigha, Gaya - Your trusted local pharmacy providing 100% genuine medicines, healthcare devices, baby care, and WhatsApp home delivery."
      />

      {/* Hero Section */}
      <section id="hero-section" className="bg-[#F8FAFC] dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-12 lg:py-16 border-b border-slate-200/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Hero Left Column */}
            <div className="lg:col-span-7 flex flex-col justify-center gap-6">
              <div className="inline-flex items-center gap-2 bg-[#0A8F6A]/10 text-[#0A8F6A] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider w-fit">
                <span className="w-2 h-2 rounded-full bg-[#0A8F6A] animate-pulse"></span>
                <span>Certified Genuine Medicines</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                Your Trusted <br className="hidden sm:inline" />
                Healthcare <span className="text-[#0A8F6A]">Partner.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                Providing genuine medicines, surgical supplies, healthcare devices, and baby care essentials at affordable prices in Gewalbigha, Gaya. Your health is our priority.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenOrderModal()}
                  id="hero-wa-order-btn"
                  className="flex items-center gap-2 bg-[#0A8F6A] hover:bg-[#087758] text-white px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-[#0A8F6A]/20 transition-all hover:scale-[1.02]"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Order on WhatsApp</span>
                </button>

                <a
                  href="tel:09204548707"
                  id="hero-call-now-btn"
                  className="flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#182f70] text-white px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-900/20 transition-all hover:scale-[1.02]"
                >
                  <Phone className="w-5 h-5 text-blue-200" />
                  <span>Call 09204548707</span>
                </a>

                <a
                  href="https://maps.google.com/?q=QXPV%2B3HG,+W.Wazir+ALi+Lane,+Gewalbigha,+Gaya,+Bihar+823001"
                  target="_blank"
                  rel="noreferrer"
                  id="hero-directions-btn"
                  className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-6 py-3.5 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                >
                  <MapPin className="w-5 h-5 text-[#0A8F6A]" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Quick trust metrics */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/80 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-400">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#0A8F6A] shrink-0" />
                  <span>100% Genuine</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-[#0A8F6A] shrink-0" />
                  <span>Home Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#0A8F6A] shrink-0" />
                  <span>Open Daily</span>
                </div>
              </div>
            </div>

            {/* Hero Right Interactive Section */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
              {/* Medicine Stock Checker Card */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Sparkles className="w-5 h-5 text-[#0A8F6A]" />
                  <span>Quick Medicine Stock Check</span>
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter medicine name..."
                    onClick={() => onOpenOrderModal()}
                    readOnly
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/20"
                  />
                  <button
                    onClick={() => onOpenOrderModal()}
                    className="absolute right-2 top-2 bg-[#0A8F6A] text-white p-1.5 rounded-lg hover:bg-[#087758] transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs p-2.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl text-emerald-800 dark:text-emerald-300 font-medium">
                    <span>Paracetamol 650mg / Dolo</span>
                    <span className="bg-emerald-200 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-2.5 py-0.5 rounded-full font-bold">Available</span>
                  </div>
                  <div className="flex items-center justify-between text-xs p-2.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl text-amber-800 dark:text-amber-300 font-medium">
                    <span>Amoxicillin Syrup / Pantocid</span>
                    <span className="bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-2.5 py-0.5 rounded-full font-bold">In Stock</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact Info Card */}
              <div className="bg-[#1E3A8A] text-white p-6 rounded-3xl shadow-xl shadow-blue-950/20">
                <h4 className="font-bold mb-1 uppercase text-[10px] tracking-widest text-blue-200">Store Location</h4>
                <p className="text-sm font-semibold leading-snug mb-4">
                  QXPV+3HG, W.Wazir ALi Lane, Gewalbigha, Gaya, Bihar 823001
                </p>
                <div className="flex items-center justify-between border-t border-blue-800/80 pt-3">
                  <div>
                    <h4 className="font-bold uppercase text-[10px] tracking-widest text-blue-200">Working Hours</h4>
                    <p className="text-xs font-medium">Daily: 8:00 AM - 10:00 PM</p>
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white">
                    <Clock className="w-5 h-5 text-emerald-300" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Category Carousel / Specialty Bar */}
        <div className="mt-12 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 py-6 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-12">
            <div className="flex-shrink-0">
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Core Specialties</h5>
            </div>
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-slate-800 dark:text-slate-200">
              <div className="flex flex-col">
                <span className="text-sm font-bold">Prescription</span>
                <span className="text-[11px] text-slate-400">Verified Medicines</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-slate-200 dark:bg-slate-800"></div>
              <div className="flex flex-col">
                <span className="text-sm font-bold">Health Devices</span>
                <span className="text-[11px] text-slate-400">BP Monitors, Oximeters</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-slate-200 dark:bg-slate-800"></div>
              <div className="flex flex-col">
                <span className="text-sm font-bold">Baby Care</span>
                <span className="text-[11px] text-slate-400">Diapers, Formula, Oils</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-slate-200 dark:bg-slate-800"></div>
              <div className="flex flex-col">
                <span className="text-sm font-bold">Surgicals</span>
                <span className="text-[11px] text-slate-400">First Aid & Supplies</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-slate-200 dark:bg-slate-800"></div>
              <div className="flex flex-col">
                <span className="text-sm font-bold">Supplements</span>
                <span className="text-[11px] text-slate-400">Vitamins & Proteins</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short About Preview Section */}
      <section id="about-preview-section" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1631549912265-21d1d8212e69?auto=format&fit=crop&w=1000&q=80"
                  alt="Pharmacist Consultation at Sanjay Medical Store"
                  className="w-full h-[380px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-2xl shadow-xl hidden sm:block max-w-xs">
                <Award className="w-8 h-8 mb-2" />
                <p className="font-bold text-sm">Trusted Healthcare Partner in Gaya</p>
                <p className="text-xs text-emerald-100 mt-1">Serving Gewalbigha families with care.</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="inline-flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <Stethoscope className="w-4 h-4" />
                <span>About Sanjay Medical Store</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Dedicated to Genuine Medicine & Patient Care Since Establishment
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                Located in the heart of Gewalbigha, Gaya, Sanjay Medical Store is committed to delivering authentic pharmaceutical medications, specialized health monitoring instruments, and baby essentials with complete integrity and personal care.
              </p>
              <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Direct sourcing from company-licensed pharma distributors.</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Temperature-controlled storage for insulins, vaccines, and syrups.</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Qualified pharmacist dosage consultation and prescription verification.</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-md"
                >
                  <span>Read Full Business Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Preview (Maximum 6) */}
      <section id="featured-services-section" className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                Comprehensive Healthcare Services
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                Featured Pharmacy Services
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>View All Services & Categories</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => onOpenOrderModal(service.title)}
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 flex items-center"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Medicine Stock Checker Preview */}
      <section id="stock-checker-preview-section" className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicineStockChecker compactMode={true} onOrderClick={(med) => onOpenOrderModal(med)} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us-section" className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider">
              Why Patients Trust Us
            </span>
            <h2 className="text-3xl font-bold text-white mt-1">
              Why Choose Sanjay Medical Store in Gaya?
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              We prioritize your health and peace of mind with verified pharma standards and fast local delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">100% Genuine Medicines</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct procurement from authorized pharmaceutical manufacturers ensuring full batch traceability.
              </p>
            </div>

            <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">WhatsApp Home Delivery</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Snap a photo of your doctor prescription and get medicines delivered right to your doorstep in Gaya.
              </p>
            </div>

            <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Pharmacist Guidance</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Clear instructions on dosage, timing, potential dietary interactions, and proper storage.
              </p>
            </div>

            <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Open 7 Days a Week</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Open from 8:00 AM to 10:00 PM every day to meet urgent medical requirements without delay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Preview */}
      <section id="reviews-preview-section" className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
              Local Feedback
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
              What Our Customers Say in Gewalbigha
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Genuine feedback from local patients and families relying on our pharmacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS_LIST.map((rev) => (
              <div
                key={rev.id}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-full">
                    {rev.tag}
                  </span>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "{rev.comment}"
                </p>

                <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-100 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white">{rev.author}</span>
                  <span className="text-slate-400">{rev.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Tips Preview */}
      <section id="health-tips-preview-section" className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                Pharmacist Insights
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                Latest Health & Medicine Tips
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HEALTH_TIPS.slice(0, 2).map((tip) => (
              <div
                key={tip.id}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-3"
              >
                <div className="flex items-center space-x-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <span>{tip.category}</span>
                  <span>•</span>
                  <span>{tip.readTime}</span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  {tip.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {tip.summary}
                </p>
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 rounded-xl text-xs text-emerald-800 dark:text-emerald-300 font-medium border border-emerald-200/50 dark:border-emerald-800/50">
                  💡 <strong>Key Takeaway:</strong> {tip.keyTakeaway}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section id="faq-preview-section" className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_LIST.slice(0, 4).map((faq) => (
              <div
                key={faq.id}
                className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2"
              >
                <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 shrink-0"></span>
                  {faq.question}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 pl-4 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>Have more questions? Contact store or view details</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section id="cta-banner" className="py-16 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Need Medicines Urgently in Gewalbigha, Gaya?
          </h2>
          <p className="text-emerald-100 text-base max-w-2xl mx-auto leading-relaxed">
            Order directly via WhatsApp or call us now. We verify stock immediately and prepare your order with care.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenOrderModal()}
              className="w-full sm:w-auto bg-white text-emerald-800 hover:bg-emerald-50 font-extrabold py-3.5 px-8 rounded-2xl shadow-xl transition-all hover:scale-105 flex items-center justify-center space-x-2 text-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Medicine Order</span>
            </button>

            <a
              href="tel:09204548707"
              className="w-full sm:w-auto bg-emerald-900/60 hover:bg-emerald-900 text-white font-extrabold py-3.5 px-8 rounded-2xl border border-white/20 transition-all hover:scale-105 flex items-center justify-center space-x-2 text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-300" />
              <span>Call Store: 09204548707</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
