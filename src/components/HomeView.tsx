import React, { useState } from "react";
import { 
  BUSINESS_INFO, 
  SERVICES_DATA, 
  CATEGORIES_DATA, 
  TESTIMONIALS_DATA, 
  FAQS_DATA, 
  HEALTH_TIPS_DATA, 
  OFFERS_DATA,
  MEDICINES_DATA
} from "../data";
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  Search, 
  HeartHandshake, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Shield,
  Tag,
  ThumbsUp,
  Award,
  Truck,
  Heart,
  Mail,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import WhatsAppOrderForm from "./WhatsAppOrderForm";

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  openSearch: boolean;
  setOpenSearch: (val: boolean) => void;
}

export default function HomeView({ setActiveTab, openSearch, setOpenSearch }: HomeViewProps) {
  // Medicine Availability Search States
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  // Offers Slider Index
  const [offerIndex, setOfferIndex] = useState(0);

  // Testimonials Carousel Index
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  // FAQ Accordion Toggle State
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq1");

  // Search Availability Inquiry Result
  const [inquiryName, setInquiryName] = useState("");
  const [inquirySuccess, setInquirySuccess] = useState(false);

  // Newsletter Subscription state
  const [newsEmail, setNewsEmail] = useState("");
  const [newsSubscribed, setNewsSubscribed] = useState(false);

  // Filter medicines based on search box
  const filteredMedicines = MEDICINES_DATA.filter(med => {
    const matchesSearch = med.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          med.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === "All" || med.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const uniqueCategories = ["All", "Tablets & Capsules", "Veterinary Medicines", "Diabetic Care", "Syrups & Suspensions", "Skin & Personal Care"];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName) return;
    setInquirySuccess(true);
    setTimeout(() => {
      // Redirect to whatsapp with prefilled query
      const text = `Hello Animal Medicine Store, I would like to check the availability of the medicine: "${inquiryName}". Please confirm if it is in stock.`;
      window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
      setInquirySuccess(false);
      setInquiryName("");
    }, 1200);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;
    setNewsSubscribed(true);
    setTimeout(() => {
      setNewsSubscribed(false);
      setNewsEmail("");
      alert("Thank you for subscribing to our health tips and livestock care bulletins!");
    }, 1500);
  };

  return (
    <div className="space-y-20 pb-16 font-sans bg-slate-50 dark:bg-slate-950 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      
      {/* 1. Emergency Banner & Top Alert */}
      <div className="bg-rose-600 dark:bg-rose-700 text-white text-xs md:text-sm font-bold py-3 px-4 shadow-md flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="bg-white text-rose-600 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider animate-pulse">Critical Alert</span>
          <span>Need Veterinary Vaccines or Life Saving Human Meds in Tikari, Gaya? Call 24/7.</span>
        </div>
        <div className="flex items-center gap-4">
          <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:underline flex items-center gap-1">
            <Phone className="w-4 h-4" /> Call: {BUSINESS_INFO.phoneDisplay}
          </a>
          <span className="hidden md:inline">|</span>
          <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=EMERGENCY%20MEDICINE%20INQUIRY`} className="hover:underline flex items-center gap-1 text-emerald-100">
            <MessageSquare className="w-4 h-4 text-emerald-400" /> WhatsApp Emergency
          </a>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section id="hero-section" className="relative overflow-hidden bg-gradient-to-br from-[#E0F2FE] via-[#f0fbf7] to-[#F0FDF4] dark:from-slate-900 dark:via-[#033a2b] dark:to-slate-950 text-slate-800 dark:text-gray-100 py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100 dark:border-slate-900">
        {/* Subtle grid pattern & color spot */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#7d857f_1px,transparent_1px),linear-gradient(to_bottom,#7d857f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-600/10 dark:bg-emerald-500/15 border border-emerald-600/20 dark:border-emerald-400/20 rounded-full text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" />
              <span>Genuineness Certified</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              Animal Medicine Store <br/>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-2xl sm:text-3xl md:text-4xl">
                Your Trusted Pharmacy in Tekari
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care, and veterinary pharmaceutical essentials at affordable prices. Located on SH-69 Kinjar Kurtha Road, Gaya.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <a
                id="hero-call-now-btn"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-base transition-colors shadow-lg shadow-blue-600/20"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <button
                id="hero-whatsapp-btn"
                onClick={() => {
                  document.getElementById("whatsapp-order-form")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-base transition-colors shadow-lg shadow-emerald-600/20 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Order</span>
              </button>
              <a
                id="hero-directions-btn"
                href="https://maps.google.com/?q=Animal+Medicine+Store+Tikari+Gaya+Bihar"
                target="_blank"
                referrerPolicy="no-referrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-200/60 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300/80 dark:border-slate-700 font-bold rounded-xl text-base transition-colors"
              >
                <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Mini Trust Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-300 dark:border-slate-800 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">100%</p>
                <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Genuine Meds</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">20+</p>
                <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Years Trusted</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">5 Star</p>
                <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Local Rating</p>
              </div>
            </div>

          </div>

          {/* Hero Right: Search availability, quick reminder or stock lookup */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white p-6 rounded-3xl shadow-xl border border-slate-200/80 dark:border-slate-800">
              <h3 className="text-lg font-bold mb-1.5 flex items-center gap-2">
                <Search className="w-5 h-5 text-emerald-600" />
                <span>Check Stock &amp; Availability</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                Type the medicine brand or salt name to inquire instantly with our pharmacist in Gaya.
              </p>

              {/* Inquiry form */}
              <form onSubmit={handleInquirySubmit} className="space-y-3.5">
                <div>
                  <input
                    id="hero-inquiry-input"
                    type="text"
                    required
                    placeholder="E.g. Ostovet, Dolo 650, Rabipur Vaccine"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs focus:outline-none focus:border-emerald-500 text-gray-900 dark:text-white font-medium"
                  />
                </div>
                
                <button
                  id="hero-inquiry-submit-btn"
                  type="submit"
                  disabled={inquirySuccess}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-emerald-600/10 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {inquirySuccess ? (
                    <span>Opening WhatsApp chat...</span>
                  ) : (
                    <>
                      <MessageSquare className="w-4 h-4" />
                      <span>Inquire availability via WhatsApp</span>
                    </>
                  )}
                </button>
              </form>

              {/* Download Prescription reminder box */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex gap-2.5 p-3.5 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-100 dark:border-blue-950/40 text-blue-850 dark:text-blue-300">
                  <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-0.5 text-blue-900 dark:text-blue-200">Quick Prescription Guideline</h4>
                    <p className="text-[11px] leading-relaxed opacity-90">
                      Keep your doctor&apos;s prescription ready on your phone! Take a clear photo of the prescription sheet to upload easily inside our order form below.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section id="why-choose-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 max-w-3xl mx-auto mb-12">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest text-xs">Our Commitment</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Why Choose Animal Medicine Store?
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            We are more than just a typical retail shop; we are your dedicated healthcare partner serving the entire Gaya district with uncompromised ethics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "100% Genuine Medicines", desc: "Every single strip, vial, or liquid container is sourced directly from certified pharmaceutical houses with official batch numbers.", icon: Shield },
            { title: "Experienced Staff", desc: "Our chief pharmacist, Dr. K.P. Singh, brings over 20 years of clinical and pharmaceutical consultation experience to assist you.", icon: Award },
            { title: "Affordable Prices", desc: "Highly reasonable, transparent pricing with standard healthcare discounts on monthly medications and animal feed products.", icon: Tag },
            { title: "Fast & Polite Service", desc: "No long queues. We pre-pack orders on request and hand them over promptly to save your clinical time.", icon: CheckCircle2 },
            { title: "Prescription Medicines", desc: "Safe dispensing of critical human, pet, and poultry prescription medications matching absolute clinical standards.", icon: HeartHandshake },
            { title: "Premium Animal Healthcare", desc: "Wide selection of dewormers, calcium gels, mineral powders, vaccinations, and skin ointments.", icon: Heart },
            { title: "Trusted Local Pharmacy", desc: "Serving dairy farmers, clinical veterinarians, and families in Tikari, Kurtha, and nearby locations with deep care.", icon: ThumbsUp },
            { title: "Easy WhatsApp Support", desc: "Order from home! Text or attach a photo of your prescription and we will coordinate packaging and pick-up options.", icon: MessageSquare }
          ].map((item, idx) => (
            <div 
              key={idx}
              id={`why-choose-card-${idx}`}
              className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-gray-150 dark:border-slate-850 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 group duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">{item.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Active Offers and Discount Section */}
      <section id="offers-section" className="bg-gradient-to-r from-emerald-900 to-teal-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-4 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider">
              <Tag className="w-3.5 h-3.5 text-yellow-400" />
              <span>Special Promotion</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Active Pharmacy Offers</h2>
            <p className="text-sm text-emerald-100 leading-relaxed">
              Take advantage of our current discounts on general veterinary medicines, feed supplements, and local community healthcare services.
            </p>
          </div>

          {/* Offers Carousel / Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {OFFERS_DATA.map((offer, idx) => (
              <div 
                key={offer.id} 
                id={`offer-card-${idx}`}
                className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-yellow-400 font-extrabold text-xl sm:text-2xl block mb-1">
                    {offer.discount}
                  </span>
                  <h3 className="text-sm font-bold text-white mb-1.5">{offer.title}</h3>
                  <p className="text-xs text-emerald-100/85 leading-relaxed mb-4">{offer.description}</p>
                </div>
                <div className="pt-3 border-t border-white/10 text-[11px] text-emerald-200">
                  {offer.code && (
                    <p className="font-mono mb-1">Code: <span className="text-white font-bold bg-white/10 px-1.5 py-0.5 rounded">{offer.code}</span></p>
                  )}
                  <p>{offer.expiry}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Our Services Section */}
      <section id="our-services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 max-w-3xl mx-auto mb-12">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest text-xs">Expert Services</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Healthcare Services We Provide
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            From critical veterinary vaccines to digital home healthcare monitors, explore the comprehensive therapeutic domains we supply daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <div 
              key={service.id}
              id={`service-card-${index}`}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-gray-150 dark:border-slate-850 hover:border-emerald-500 transition-all hover:shadow-lg group flex flex-col justify-between"
            >
              <div>
                <div className="h-40 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <h3 className="absolute bottom-3 left-4 text-white font-bold text-base">{service.title}</h3>
                </div>
                <div className="p-4 space-y-3">
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5 pt-1">
                    {service.details.slice(0, 3).map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[11px] text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-4 pt-0">
                <button
                  id={`service-more-btn-${index}`}
                  onClick={() => setActiveTab("services")}
                  className="w-full py-2 bg-gray-50 dark:bg-slate-950 text-gray-700 dark:text-gray-300 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 font-semibold text-xs rounded-lg transition-colors cursor-pointer text-center flex items-center justify-center gap-1"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Featured Categories */}
      <section id="featured-categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 max-w-3xl mx-auto mb-10">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest text-xs">Quick Filter</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Featured Medicine Categories
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {CATEGORIES_DATA.map((cat) => (
            <button
              key={cat.id}
              id={`cat-badge-${cat.id}`}
              onClick={() => {
                setFilterCategory(cat.name);
                document.getElementById("medicine-catalog")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-150 dark:border-slate-850 hover:border-emerald-500 transition-all text-center flex flex-col items-center justify-center gap-2 group cursor-pointer focus:outline-none"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
              </div>
              <div className="text-left md:text-center w-full">
                <h3 className="text-xs font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">{cat.name}</h3>
                <span className="text-[10px] text-gray-400 font-semibold">{cat.count}+ Products</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 7. Medicine Catalogue Search Box */}
      <section id="medicine-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-gray-150 dark:border-slate-850 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Medicine Stock Index</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Search our general index of available drugs, formulations and calcium bags.</p>
            </div>
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {uniqueCategories.map(cat => (
                <button
                  key={cat}
                  id={`cat-filter-btn-${cat.replace(/\s+/g, "-")}`}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer focus:outline-none ${
                    filterCategory === cat
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-100 dark:bg-slate-950 text-gray-600 dark:text-gray-400 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search Box */}
          <div className="relative mb-5">
            <input
              id="catalogue-search-input"
              type="text"
              placeholder="Search medicines, tablets, dewormers or calcium brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3.5 pl-11 bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-gray-900 dark:text-white"
            />
            <Search className="absolute left-4 top-4 w-4.5 h-4.5 text-gray-400" />
            {searchQuery && (
              <button 
                id="clear-search-btn"
                onClick={() => setSearchQuery("")} 
                className="absolute right-4 top-3.5 text-xs bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded"
              >
                Clear
              </button>
            )}
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-64 overflow-y-auto pr-1 text-sm border-t border-gray-50 dark:border-slate-800 pt-4">
            {filteredMedicines.length > 0 ? (
              filteredMedicines.map(med => (
                <div 
                  key={med.id} 
                  id={`med-result-${med.id}`}
                  className="bg-gray-50 dark:bg-slate-950 p-4 rounded-xl border border-gray-150 dark:border-slate-800 flex justify-between gap-3 items-start"
                >
                  <div>
                    <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                      <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 rounded text-[9px] font-bold">
                        {med.category}
                      </span>
                      {med.target && (
                        <span className="px-1.5 py-0.5 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 rounded text-[9px] font-semibold">
                          {med.target}
                        </span>
                      )}
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-xs">{med.name}</h4>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight mt-0.5">{med.description}</p>
                  </div>
                  <div className="shrink-0 flex flex-col items-end">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" title="In Stock"></span>
                    <button
                      id={`med-order-btn-${med.id}`}
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent("set-order-medicine", { detail: med.name }));
                        document.getElementById("whatsapp-order-form")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-[10px] text-emerald-600 dark:text-emerald-400 hover:underline font-bold mt-3 focus:outline-none cursor-pointer"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div id="no-search-results" className="col-span-full text-center py-10 space-y-2">
                <p className="text-gray-500 dark:text-gray-400 font-bold">No listed medicines match your exact query.</p>
                <p className="text-xs text-gray-400">But don&apos;t worry! We likely still have it in stock. Click below to inquire directly on WhatsApp.</p>
                <button
                  id="direct-inquiry-unlisted"
                  onClick={() => {
                    const text = `Hello Animal Medicine Store, do you have "${searchQuery}" in stock?`;
                    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
                  }}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs mt-2"
                >
                  Ask Pharmacist directly on WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 8. Working Process */}
      <section id="working-process" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 max-w-3xl mx-auto mb-12">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest text-xs">Easy Step-by-Step</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            How It Works
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Getting your human or veterinary prescriptions filled in Tikari is absolutely effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gray-200 dark:bg-slate-800 z-0"></div>

          {[
            { step: "01", title: "Visit Store or Order Online", desc: "Come directly to SH-69 Kurtha Road, or simply use our digital WhatsApp order panel." },
            { step: "02", title: "Share Prescription", desc: "Handover your physical slip to Dr. Singh or drag-and-drop its photo onto our form." },
            { step: "03", title: "Get Medicines", desc: "Our staff verifies batches, checks expirations, packs securely and delivers/hands over." },
            { step: "04", title: "Easy Payment", desc: "Pay seamlessly with cash, PhonePe, Google Pay, UPI scanner or clinical invoice." }
          ].map((item, idx) => (
            <div key={idx} id={`process-step-${idx}`} className="text-center space-y-3 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 font-extrabold text-lg flex items-center justify-center mx-auto shadow-sm">
                {item.step}
              </div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed px-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Local Delivery Information Panel */}
      <section id="delivery-info" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-50 dark:bg-emerald-950/20 p-6 md:p-8 rounded-3xl border border-emerald-100 dark:border-emerald-950/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Dairy Farm &amp; Village Delivery</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
                We support bulk pharmaceutical delivery to veterinary clinics, gaushalas, poultry farms and rural communities around Tikari, Kurtha, Konch, and Gaya block. Contact us on WhatsApp to register your location!
              </p>
            </div>
          </div>
          <button
            id="register-location-delivery"
            onClick={() => {
              const text = `Hello Animal Medicine Store, I would like to inquire about bulk veterinary medicine delivery to my dairy farm/village near Tikari block.`;
              window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
            }}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-colors shrink-0"
          >
            Ask for farm delivery options
          </button>
        </div>
      </section>

      {/* 10. Why Customers Trust Us Section */}
      <section id="trust-metrics" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest text-xs">Our Credentials</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mt-1 mb-4">
            Why Customers Trust Us Since 2004
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            Establishing a health pharmacy in Gaya district requires absolute care. Over the decades, we have developed a spotless reputation among veterinary clinical departments, pet doctors, livestock farm owners, and local families.
          </p>

          <div className="space-y-4">
            {[
              { label: "Experienced Pharmacy", desc: "Managed by registered pharmaceutical experts who understand drug salt compositions and veterinary formulas perfectly." },
              { label: "Quality Cold Chain Storage", desc: "Sensitive animal vaccines, Rabipur anti-rabies treatments, and insulin are strictly housed in chilled units." },
              { label: "Transparent & Friendly Staff", desc: "No duplicate branding. We explain dosages, expiration warnings, and alternative salts clearly." },
              { label: "Convenient Tikari Location", desc: "Easily accessible retail shop on SH-69 Kinjar Kurtha Road, Tikari, with spacious road access for loading." }
            ].map((metric, idx) => (
              <div key={idx} id={`metric-item-${idx}`} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">{metric.label}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{metric.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Graphic Display */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600 to-teal-400 rounded-3xl transform rotate-3 scale-95 opacity-10"></div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-150 dark:border-slate-800 shadow-xl space-y-6 relative z-10">
            <h3 className="text-base font-extrabold text-gray-900 dark:text-white border-b border-gray-100 dark:border-slate-800 pb-3">
              Google Customer Rating Summary
            </h3>
            
            <div className="flex items-center gap-4">
              <div className="text-5xl font-extrabold text-emerald-600 dark:text-emerald-400">4.9</div>
              <div>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-semibold">Based on 140+ Google Reviews</p>
              </div>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 italic leading-relaxed">
              &ldquo;Animal Medicine Store is the most trusted shop in Tekari Gaya. They always provide genuine injections for cattle and take very low margins. Dr. Singh behavior is excellent.&rdquo;
            </p>
            <div className="text-xs font-bold text-gray-900 dark:text-white">
              - Vijay Shankar Prasad (Cattle Owner, Tikari)
            </div>

            <a 
              id="write-google-review"
              href="https://search.google.com/local/writereview?placeid=ChIJX1BxALawuzkRN80MnnkrkG4" 
              target="_blank" 
              referrerPolicy="no-referrer"
              className="inline-block text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              View Google Map Business Reviews &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* 11. Customer Testimonials */}
      <section id="testimonials-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 max-w-3xl mx-auto mb-12">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest text-xs">Testimonials</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            What Our Customers Say
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Read stories of how we have assisted local dairy farmers, clinic doctors, and families.
          </p>
        </div>

        {/* Desktop reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((rev, index) => (
            <div 
              key={rev.id} 
              id={`testi-card-${index}`}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-150 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                <div className="flex text-amber-500 mb-3">
                  {[...Array(rev.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed italic mb-5">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex justify-between items-center text-xs">
                <div>
                  <h4 className="font-bold text-gray-950 dark:text-white">{rev.name}</h4>
                  <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">{rev.role}</p>
                </div>
                <div className="text-right text-[10px] text-gray-400">
                  <p>{rev.location}</p>
                  <p className="mt-0.5">{rev.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. Complete WhatsApp Order Placement Form */}
      <section id="whatsapp-form-section" className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest text-xs font-mono">Instant Dispatch</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Place Your Order Now
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Fill out the rapid WhatsApp request form. Our desk pharmacists will package it instantly!
          </p>
        </div>
        <WhatsAppOrderForm />
      </section>

      {/* 13. Latest Health Tips Section */}
      <section id="blog-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 max-w-3xl mx-auto mb-12">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest text-xs">Health Awareness</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Latest Health Tips &amp; Vet Insights
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Read medical advisories written directly by our clinical pharmacist to keep livestock and families healthy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HEALTH_TIPS_DATA.map((tip, idx) => (
            <article 
              key={tip.id} 
              id={`blog-card-${idx}`}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-gray-150 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="h-44 overflow-hidden relative">
                  <img src={tip.image} alt={tip.title} className="w-full h-full object-cover" loading="lazy" />
                  <span className="absolute top-3 left-3 px-2 py-1 bg-emerald-600 text-white text-[9px] font-bold rounded-md uppercase tracking-wider">
                    {tip.category}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2 text-[10px] text-gray-400 font-semibold">
                    <span>{tip.date}</span>
                    <span>&bull;</span>
                    <span>By {tip.author}</span>
                  </div>
                  <h3 className="font-bold text-gray-950 dark:text-white text-sm hover:text-emerald-600 transition-colors">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {tip.summary}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 border-t border-gray-50 dark:border-slate-850 flex justify-between items-center">
                <span className="text-[10px] text-gray-400 font-mono">{tip.readTime}</span>
                <button
                  id={`read-tip-btn-${idx}`}
                  onClick={() => alert(`Full article Content:\n\n${tip.content}`)}
                  className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline font-bold flex items-center gap-0.5 cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 14. Collapsible FAQ Section */}
      <section id="faq-section" className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest text-xs">Help &amp; Support</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Review detailed guidelines on scheduling, medicines, and delivery constraints.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS_DATA.map((faq) => (
            <div 
              key={faq.id} 
              id={`faq-item-${faq.id}`}
              className="bg-white dark:bg-slate-900 rounded-xl border border-gray-150 dark:border-slate-800 overflow-hidden shadow-sm"
            >
              <button
                id={`faq-trigger-${faq.id}`}
                onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                className="w-full text-left px-5 py-4 flex justify-between items-center gap-3 cursor-pointer focus:outline-none"
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-xs font-bold text-emerald-600 mt-0.5">Q.</span>
                  <span className="text-xs md:text-sm font-bold text-gray-900 dark:text-white">{faq.question}</span>
                </div>
                {openFaqId === faq.id ? (
                  <ChevronUp className="w-4 h-4 text-emerald-600 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                )}
              </button>
              
              <AnimatePresence initial={false}>
                {openFaqId === faq.id && (
                  <motion.div
                    id={`faq-content-wrap-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-4 pl-10 border-t border-gray-50 dark:border-slate-850 text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                      <p className="mt-2 text-[10px] text-emerald-600 font-semibold uppercase tracking-wider">
                        Category: {faq.category}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 15. Newsletter Subscription Box */}
      <section id="newsletter-section" className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-10 border border-slate-850 shadow-2xl relative overflow-hidden text-center space-y-5">
          <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-extrabold">Subscribe to Our Health Newsletters</h3>
          <p className="text-xs text-slate-350 max-w-md mx-auto leading-relaxed">
            Get expert vet advisory sheets for your milk-yielding cattle, pet food tips, and alerts for free immunization camps in Tikari Gaya.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5">
            <input
              id="newsletter-email-input"
              type="email"
              required
              placeholder="Enter your email address"
              value={newsEmail}
              onChange={(e) => setNewsEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl bg-slate-950 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 border border-slate-800"
            />
            <button
              id="newsletter-submit-btn"
              type="submit"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
            >
              Subscribe Now
            </button>
          </form>
          <p className="text-[10px] text-slate-500">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>

      {/* 16. Google Map Embedded Section */}
      <section id="map-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest text-xs">Locate Us</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Visit Our Store Front in Tikari
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Address: SH-69, Kinjar Kurtha Road, Tikari, Gaya, Bihar 824236.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-150 dark:border-slate-800 h-96 relative">
          <iframe
            id="home-embed-google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.1121820613867!2d84.8175!3d24.9427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cb0b601555557%3A0x6e902b799e0cd537!2sTikari%20Gaya%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Animal Medicine Store GPS"
          ></iframe>
        </div>
      </section>

      {/* 17. Final Contact CTA */}
      <section id="contact-cta" className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-gradient-to-tr from-emerald-950 to-teal-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl border border-emerald-800 space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-slate-950/20"></div>
          <div className="relative z-10 space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Need Instant Medicines &amp; Veterinary Advice?</h3>
            <p className="text-sm text-emerald-100 max-w-2xl mx-auto leading-relaxed">
              Do not delay critical health requirements. Call our physical store in Gaya directly, or send us a WhatsApp text.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a
                id="cta-call-action"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <button
                id="cta-whatsapp-action"
                onClick={() => {
                  document.getElementById("whatsapp-order-form")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp Order Form</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
