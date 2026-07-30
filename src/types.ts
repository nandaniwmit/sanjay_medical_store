export type MedicineStatus = 'Available' | 'Limited Stock' | 'Out of Stock';

export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  mrp: number;
  discountedPrice?: number;
  availableQuantity: number;
  expiry: string;
  status: MedicineStatus;
  dosageForm: string; // e.g. "Tablet", "Syrup", "Ointment", "Injection", "Device"
  requiresPrescription: boolean;
  packSize: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  highlights: string[];
  ctaText: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'store' | 'shelves' | 'products' | 'devices' | 'counter';
  imageUrl: string;
  description: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  tag: string;
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  summary: string;
  readTime: string;
  date: string;
  keyTakeaway: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface OrderFormData {
  customerName: string;
  phone: string;
  email: string;
  address: string;
  medicineRequired: string;
  hasPrescription: 'Yes' | 'No';
  preferredTime: string;
  message: string;
}
