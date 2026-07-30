import React, { useState } from 'react';
import { X, Send, Phone, Upload, CheckCircle2, FileText, Clock } from 'lucide-react';
import { OrderFormData } from '../types';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = '',
}) => {
  const [formData, setFormData] = useState<OrderFormData>({
    customerName: '',
    phone: '',
    email: '',
    address: '',
    medicineRequired: prefilledMedicine || '',
    hasPrescription: 'Yes',
    preferredTime: 'As soon as possible',
    message: '',
  });

  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const prescriptionNote = uploadedFileName
      ? `Yes (Attached: ${uploadedFileName})`
      : formData.hasPrescription;

    const messageText = `*Hello Sanjay Medical Store!* 👋%0A*NEW MEDICINE ORDER REQUEST*%0A------------------------------------%0A*Customer Name:* ${encodeURIComponent(formData.customerName || 'N/A')}%0A*Phone:* ${encodeURIComponent(formData.phone || 'N/A')}%0A*Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A*Delivery Address:* ${encodeURIComponent(formData.address || 'N/A')}%0A*Medicine Required:* ${encodeURIComponent(formData.medicineRequired || 'N/A')}%0A*Prescription Available:* ${encodeURIComponent(prescriptionNote)}%0A*Preferred Time:* ${encodeURIComponent(formData.preferredTime)}%0A*Notes:* ${encodeURIComponent(formData.message || 'None')}%0A------------------------------------%0A_Sent via Sanjay Medical Store Website_`;

    const waUrl = `https://wa.me/919204548707?text=${messageText}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div
      id="whatsapp-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="whatsapp-modal-card"
        className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-all transform"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-5 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
              <Send className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">WhatsApp Medicine Order</h3>
              <p className="text-xs text-emerald-100">Directly to Sanjay Medical Store • 09204548707</p>
            </div>
          </div>
          <button
            id="close-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSendWhatsApp} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
              Customer Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="customerName"
              required
              value={formData.customerName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="10-digit phone number"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
              Delivery Address in Gaya <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="address"
              required
              value={formData.address}
              onChange={handleInputChange}
              placeholder="House/Plot No., Wazir Ali Lane, Gewalbigha, Gaya..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
              Medicine Required / List <span className="text-red-500">*</span>
            </label>
            <textarea
              name="medicineRequired"
              required
              rows={3}
              value={formData.medicineRequired}
              onChange={handleInputChange}
              placeholder="List medicines (e.g. Dolo 650 - 2 strips, Pan 40 - 1 strip, Omron BP Monitor...)"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                Do you have a Doctor's Prescription?
              </label>
              <select
                name="hasPrescription"
                value={formData.hasPrescription}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="Yes">Yes, Doctor's Prescription Available</option>
                <option value="No">No, OTC Medicines / General Health Product</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                Preferred Delivery Time
              </label>
              <div className="relative">
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="As soon as possible">As soon as possible (Express)</option>
                  <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                  <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                  <option value="Evening (4:00 PM - 9:00 PM)">Evening (4:00 PM - 9:00 PM)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Prescription Upload Simulation */}
          <div className="border-2 border-dashed border-emerald-300 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20 p-4 rounded-xl text-center">
            <div className="flex flex-col items-center justify-center space-y-2">
              <Upload className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
              <div className="text-xs text-slate-600 dark:text-slate-300">
                <label className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer">
                  Click to attach Doctor Prescription photo
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
                <p className="text-[11px] text-slate-400">JPG, PNG, PDF max 10MB</p>
              </div>
              {uploadedFileName && (
                <div className="flex items-center space-x-1.5 text-xs text-emerald-700 dark:text-emerald-300 font-medium bg-emerald-100 dark:bg-emerald-900/50 px-3 py-1 rounded-full mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{uploadedFileName}</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
              Special Instructions / Message
            </label>
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="e.g. Please send cold-chain ice pack for insulin..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              id="send-wa-submit-btn"
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-emerald-600/30 flex items-center justify-center space-x-2 transition-all hover:scale-[1.01]"
            >
              <Send className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href="tel:09204548707"
              id="modal-call-btn"
              className="flex-none bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors border border-slate-200 dark:border-slate-700"
            >
              <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Call Now</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
