export interface Medicine {
  id: string;
  name: string;
  category: string;
  description: string;
  price?: string;
  target?: string; // e.g. "Pet / Cattle" or "General / Human"
  available: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string; // Lucide icon name
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  content: string;
  date: string;
  location: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Store Front" | "Shelves" | "Products" | "Equipment" | "Veterinary" | "Customers";
  image: string;
  description: string;
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  summary: string;
  content: string;
  readTime: string;
  image: string;
}

export interface Offer {
  id: string;
  title: string;
  discount: string;
  description: string;
  code?: string;
  expiry: string;
}
