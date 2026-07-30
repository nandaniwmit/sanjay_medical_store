import { ServiceItem } from '../types';

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'prescription-medicines',
    title: 'Prescription Medicines',
    category: 'Pharmaceuticals',
    shortDesc: '100% genuine prescribed pharmaceutical drugs direct from verified manufacturers.',
    fullDesc: 'We stock a wide range of authentic prescription medications for chronic diseases, infections, cardiology, diabetes, gastroenterology, and acute conditions. Every batch is sourced directly from licensed pharma companies with cold-chain storage.',
    iconName: 'Pill',
    highlights: [
      'Genuine & batch-verified drugs',
      'Cold-chain storage for temperature-sensitive drugs',
      'Prescription verification by licensed pharmacists',
      'Affordable MRP discounts on chronic meds'
    ],
    ctaText: 'Upload Prescription'
  },
  {
    id: 'otc-medicines',
    title: 'Over The Counter (OTC) Drugs',
    category: 'Daily Care',
    shortDesc: 'First aid, pain relief, antacids, cold remedies, and daily wellness items.',
    fullDesc: 'Immediate access to over-the-counter health essentials including pain relievers, fever reducers, digestive care, allergic remedies, cough syrups, topical ointments, and wound dressings.',
    iconName: 'Stethoscope',
    highlights: [
      'Instant counter availability',
      'Expert pharmacist advice on dosage & usage',
      'Multi-brand choices',
      'First-aid kits & essential travel medicines'
    ],
    ctaText: 'Inquire Availability'
  },
  {
    id: 'health-devices',
    title: 'Digital Health Devices',
    category: 'Diagnostic Equipment',
    shortDesc: 'Digital BP monitors, glucometers, nebulizers, pulse oximeters & thermometers.',
    fullDesc: 'Empower your household with certified home health monitoring instruments. We provide full demonstration, warranty guidance, and genuine strip refills for all leading health device brands.',
    iconName: 'Activity',
    highlights: [
      'Omron, Accu-Chek, Dr. Trust authorized stock',
      'Free demo and operational guidance in store',
      'Full brand warranty coverage',
      'Glucose strip refill discounts'
    ],
    ctaText: 'Check Devices'
  },
  {
    id: 'baby-care',
    title: 'Baby Care & Nutrition',
    category: 'Infant Wellness',
    shortDesc: 'Pediatric nutrition, baby food, gentle skincare, diapers, and feeding care.',
    fullDesc: 'Caring for your newborn’s health with dermatologically tested baby lotions, infant formulas (Lactogen, Nan Pro), diapers, baby wipes, bath essentials, and teething care products.',
    iconName: 'Baby',
    highlights: [
      'Authorized infant formulas & food supplements',
      'Hypoallergenic baby lotions & soaps',
      'Diapers, wipes & hygiene essentials',
      'Sourced strictly from trusted brand distributors'
    ],
    ctaText: 'Explore Baby Care'
  },
  {
    id: 'supplements-wellness',
    title: 'Nutritional Supplements',
    category: 'Health & Wellness',
    shortDesc: 'Multivitamins, calcium, protein powders, immunity boosters & herbal remedies.',
    fullDesc: 'Boost your family’s daily immunity and strength with certified nutritional supplements, omega-3 capsules, calcium D3 boosters, protein powders, and natural herbal care.',
    iconName: 'ShieldCheck',
    highlights: [
      'Certified dietary & fitness supplements',
      'Bone health, immunity & memory boosters',
      'Ayurvedic & herbal wellness products',
      'Authenticity guaranteed against counterfeits'
    ],
    ctaText: 'Order Supplements'
  },
  {
    id: 'home-delivery',
    title: 'WhatsApp Home Delivery',
    category: 'Store Service',
    shortDesc: 'Convenient medicine delivery right to your doorstep in Gewalbigha & Gaya town.',
    fullDesc: 'Send your medicine list or prescription photo via WhatsApp to 09204548707. Our team verifies stock, packages your order with care, and delivers it swiftly to your doorstep.',
    iconName: 'Truck',
    highlights: [
      'Easy prescription photo upload via WhatsApp',
      'Fast doorstep delivery across Gewalbigha & Gaya',
      'Cash or UPI payment on delivery',
      'Order status updates on WhatsApp'
    ],
    ctaText: 'Order via WhatsApp'
  }
];
