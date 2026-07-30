import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MapPin, Phone, MessageSquare, Clock, Mail, Send, CheckCircle2, ExternalLink, ShieldAlert } from 'lucide-react';

interface ContactProps {
  onOpenOrderModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenOrderModal }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div id="contact-page" className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <SEOHead
        title="Contact Us & Directions | Sanjay Medical Store Gewalbigha, Gaya"
        description="Contact Sanjay Medical Store in Gewalbigha, Gaya. Phone: 09204548707, WhatsApp medicine order, store address, Google Maps directions, and working hours."
      />

      <Breadcrumbs />

      {/* Header Banner */}
      <section id="contact-hero" className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
            <MapPin className="w-4 h-4" />
            <span>Store Location & Helpline</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact Sanjay Medical Store
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We are here to assist you with medicine availability, doctor prescription verification, and fast doorstep delivery in Gewalbigha & Gaya.
          </p>
        </div>
      </section>

      {/* Main Info Grid & Form */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Business Details & Emergency Contacts */}
            <div className="space-y-8">
              <div>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  Direct Store Information
                </span>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                  Get in Touch with Our Pharmacist
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                  Visit us in person or reach out through call, WhatsApp, or email.
                </p>
              </div>

              <div className="space-y-4">
                {/* Address Card */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">Store Address</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-snug">
                      QXPV+3HG, W.Wazir ALi Lane, Gewalbigha, Gaya, Bihar 823001
                    </p>
                    <a
                      href="https://maps.google.com/?q=QXPV%2B3HG,+W.Wazir+ALi+Lane,+Gewalbigha,+Gaya,+Bihar+823001"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline mt-2"
                    >
                      <span>Open Turn-by-Turn GPS Map</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>
                </div>

                {/* Phone & WhatsApp Card */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">Store Helpline</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Mobile: <a href="tel:09204548707" className="font-bold text-blue-600 dark:text-blue-400 hover:underline">09204548707</a>
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      WhatsApp: <a href="https://wa.me/919204548707" target="_blank" rel="noreferrer" className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">09204548707</a>
                    </p>
                  </div>
                </div>

                {/* Working Hours Card */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">Business Operating Hours</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      <strong>Monday – Sunday:</strong> 8:00 AM – 10:00 PM (Open 7 Days)
                    </p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                      Emergency WhatsApp assistance active for critical prescriptions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={onOpenOrderModal}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg flex items-center justify-center space-x-2 text-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Order</span>
                </button>

                <a
                  href="tel:09204548707"
                  className="flex-1 bg-slate-900 dark:bg-slate-800 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center space-x-2 text-xs"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call Store</span>
                </a>
              </div>
            </div>

            {/* Right Column: Quick Contact Form */}
            <div className="bg-slate-50 dark:bg-slate-800/40 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Quick Inquiry
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">
                Have a non-urgent medicine query or request for a bulk surgical item? Send us a message below.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 text-emerald-800 dark:text-emerald-300 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h4 className="font-bold text-base">Inquiry Received Successfully!</h4>
                  <p className="text-xs">Our team at Sanjay Medical Store will respond to your contact number shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={inquiryData.name}
                      onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                      placeholder="e.g. Ramesh Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={inquiryData.phone}
                      onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                      placeholder="e.g. 9800000000"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Inquiry Type
                    </label>
                    <select
                      value={inquiryData.subject}
                      onChange={(e) => setInquiryData({ ...inquiryData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Medicine Availability">Medicine Availability Check</option>
                      <option value="Health Device Demo">Health Device Demo Request</option>
                      <option value="Bulk Order">Bulk Order Request</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Your Message
                    </label>
                    <textarea
                      rows={3}
                      value={inquiryData.message}
                      onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                      placeholder="Write your question or request here..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg flex items-center justify-center space-x-2 text-sm transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section id="google-map-section" className="py-12 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
              Interactive Map
            </span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Find Sanjay Medical Store on Google Maps
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Located in Gewalbigha, Gaya, Bihar 823001
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 h-[400px] w-full bg-slate-200 relative">
            <iframe
              title="Sanjay Medical Store Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.5134789123!2d85.000000!3d24.795000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ3JzgyLjAiTiA4NcKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};
