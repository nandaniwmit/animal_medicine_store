import { useState, useEffect } from "react";
import { BUSINESS_INFO, MEDICINES_DATA } from "./data";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import SEOHead from "./components/SEOHead";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import ServicesView from "./components/ServicesView";
import GalleryView from "./components/GalleryView";
import ContactView from "./components/ContactView";
import { 
  ChevronRight, 
  Search, 
  X, 
  AlertCircle, 
  Sparkles, 
  FileText, 
  Scale, 
  HelpCircle 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  // Navigation Routing Tab
  const [activeTab, setActiveTab] = useState<string>("home");

  // Dark Mode State
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  // Global Medicine Search Overlay
  const [globalSearchOpen, setGlobalSearchOpen] = useState(false);
  const [globalQuery, setGlobalQuery] = useState("");

  // Policy Modal state
  const [activePolicy, setActivePolicy] = useState<"privacy" | "terms" | "disclaimer" | null>(null);

  // Sync dark theme with HTML root class for Tailwind CSS v4
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Handle global keypresses (Escape to close search, etc.)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setGlobalSearchOpen(false);
        setActivePolicy(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filter medicines for global lookup
  const filteredGlobalMeds = MEDICINES_DATA.filter(med => 
    med.name.toLowerCase().includes(globalQuery.toLowerCase()) || 
    med.category.toLowerCase().includes(globalQuery.toLowerCase()) ||
    med.description.toLowerCase().includes(globalQuery.toLowerCase())
  );

  // Get active SEO details
  const getSEODetails = () => {
    switch (activeTab) {
      case "about":
        return {
          title: "About Us",
          description: "Our business heritage, veterinary mission, vision and proprietor values since 2004 in Tikari Gaya."
        };
      case "services":
        return {
          title: "Our Services",
          description: "Explore our ten clinical pharmacy services including diabetic care, surgical supplies, and veterinary medication distributions."
        };
      case "gallery":
        return {
          title: "Store Photo Gallery",
          description: "View high-resolution photos of our medicine shelves, cold chain vaccine units, and our prominent physical storefront in Gaya."
        };
      case "contact":
        return {
          title: "Contact & Support",
          description: "Find our official phone number, operating hours, direct email support, and interactive Google Map coordinates."
        };
      default:
        return {
          title: "Home Base",
          description: BUSINESS_INFO.tagline
        };
    }
  };

  const seo = getSEODetails();

  const handleGlobalInquiry = (medName: string) => {
    setGlobalSearchOpen(false);
    setGlobalQuery("");
    // Navigate to homepage order form
    setActiveTab("home");
    setTimeout(() => {
      // Dispatch custom prefill event
      window.dispatchEvent(new CustomEvent("set-order-medicine", { detail: medName }));

      // Find element and scroll
      const formElement = document.getElementById("whatsapp-order-form");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-gray-800 dark:text-gray-100 flex flex-col justify-between transition-colors duration-300">
      
      {/* 1. Dynamic SEO Injections */}
      <SEOHead 
        title={seo.title} 
        description={seo.description} 
        pagePath={activeTab === "home" ? "" : activeTab} 
      />

      {/* 2. Sticky Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        onOpenSearch={() => setGlobalSearchOpen(true)}
      />

      {/* 3. Sub-Page Hero / Breadcrumb Tracker */}
      {activeTab !== "home" && (
        <section id="breadcrumb-section" className="bg-slate-100 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800/80 py-6 font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-white capitalize">
                {activeTab} Domain
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Animal Medicine Store &middot; Gaya, Bihar
              </p>
            </div>

            {/* Breadcrumb links */}
            <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 font-semibold">
              <button 
                id="bread-home-btn"
                onClick={() => setActiveTab("home")} 
                className="hover:text-emerald-600 transition-colors focus:outline-none cursor-pointer"
              >
                Home
              </button>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-emerald-600 dark:text-emerald-400 capitalize font-bold">
                {activeTab}
              </span>
            </div>
          </div>
        </section>
      )}

      {/* 4. Active Main View with elegant transition */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            {activeTab === "home" && (
              <HomeView 
                setActiveTab={setActiveTab} 
                openSearch={globalSearchOpen} 
                setOpenSearch={setGlobalSearchOpen} 
              />
            )}
            {activeTab === "about" && <AboutView />}
            {activeTab === "services" && <ServicesView />}
            {activeTab === "gallery" && <GalleryView />}
            {activeTab === "contact" && <ContactView />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 5. Footer */}
      <Footer 
        activeTab={activeTab}
        setActiveTab={setActiveTab} 
        openModal={(type) => setActivePolicy(type)} 
      />

      {/* 6. Floating supportive elements */}
      <FloatingButtons />

      {/* 7. Global Search Modal Overlay */}
      <AnimatePresence>
        {globalSearchOpen && (
          <div 
            id="global-search-overlay"
            className="fixed inset-0 z-55 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[10vh] px-4"
            onClick={() => setGlobalSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-150 dark:border-slate-800 shadow-2xl w-full max-w-xl overflow-hidden font-sans"
            >
              <div className="p-4 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <div className="flex-grow relative">
                  <Search className="absolute left-3 top-3 w-4.5 h-4.5 text-gray-400" />
                  <input
                    id="global-search-box-input"
                    type="text"
                    autoFocus
                    placeholder="Search standard medicine stocks..."
                    value={globalQuery}
                    onChange={(e) => setGlobalQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-gray-900 dark:text-white"
                  />
                </div>
                <button
                  id="close-global-search-btn"
                  onClick={() => {
                    setGlobalSearchOpen(false);
                    setGlobalQuery("");
                  }}
                  className="p-1.5 bg-gray-100 dark:bg-slate-800 text-gray-500 hover:text-rose-500 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Results */}
              <div className="max-h-80 overflow-y-auto p-4 space-y-3.5">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                  {globalQuery ? "Matching Results" : "Catalog Index (Sample list)"}
                </p>
                {filteredGlobalMeds.length > 0 ? (
                  filteredGlobalMeds.map(med => (
                    <div 
                      key={med.id} 
                      id={`global-med-${med.id}`}
                      className="p-3 bg-gray-50 dark:bg-slate-950 rounded-xl border border-gray-150 dark:border-slate-850 flex justify-between items-center gap-3"
                    >
                      <div>
                        <div className="flex gap-1.5 items-center">
                          <span className="text-[9px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded">
                            {med.category}
                          </span>
                          {med.target && (
                            <span className="text-[9px] font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded">
                              {med.target}
                            </span>
                          )}
                        </div>
                        <h4 className="font-bold text-xs text-gray-900 dark:text-white mt-1">{med.name}</h4>
                        <p className="text-[10px] text-gray-400 mt-0.5">{med.description}</p>
                      </div>
                      <button
                        id={`global-med-inquire-${med.id}`}
                        onClick={() => handleGlobalInquiry(med.name)}
                        className="py-1.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] rounded-lg transition-colors cursor-pointer shrink-0"
                      >
                        Inquire
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-6">
                    <p className="text-xs text-gray-500 font-bold">No listed medicines match.</p>
                    <p className="text-[11px] text-gray-400 mt-1">We likely still stock this item. Please consult us on WhatsApp!</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 8. Terms, Conditions, Privacy Policies & Disclaimers Modal */}
      <AnimatePresence>
        {activePolicy && (
          <div 
            id="policy-modal-overlay"
            className="fixed inset-0 z-55 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActivePolicy(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-slate-800 shadow-2xl w-full max-w-2xl overflow-hidden font-sans text-left space-y-4"
            >
              <div className="flex justify-between items-center border-b border-gray-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  {activePolicy === "privacy" && <FileText className="w-6 h-6 text-emerald-600" />}
                  {activePolicy === "terms" && <Scale className="w-6 h-6 text-emerald-600" />}
                  {activePolicy === "disclaimer" && <AlertCircle className="w-6 h-6 text-yellow-500" />}
                  <h3 className="text-lg font-bold text-gray-950 dark:text-white capitalize">
                    {activePolicy === "privacy" && "Privacy Policy"}
                    {activePolicy === "terms" && "Terms & Conditions"}
                    {activePolicy === "disclaimer" && "Medical & Veterinary Disclaimer"}
                  </h3>
                </div>
                <button
                  id="close-policy-btn"
                  onClick={() => setActivePolicy(null)}
                  className="p-1.5 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Policy detail texts matching drug act compliance */}
              <div className="max-h-[50vh] overflow-y-auto text-xs md:text-sm text-gray-500 dark:text-gray-400 space-y-4 pr-1 leading-relaxed">
                
                {activePolicy === "privacy" && (
                  <>
                    <p className="font-bold text-gray-900 dark:text-white">1. Scope of Data Gathering</p>
                    <p>At Animal Medicine Store, we are fully committed to protecting your private credentials. Any personal metadata submitted through our custom WhatsApp Order form or Contact form (including customer name, telephone number, mailing address, email, and doctor prescriptions) is only used to assist in the processing of your current drug orders.</p>
                    <p className="font-bold text-gray-900 dark:text-white">2. Protection of Sensitive Medical Information</p>
                    <p>We do NOT sell, lease, trade, or distribute your private doctor prescriptions or health information to third-party advertisers. All records are handled in strict adherence to central pharmacy guidelines.</p>
                  </>
                )}

                {activePolicy === "terms" && (
                  <>
                    <p className="font-bold text-gray-900 dark:text-white">1. Prescription Requirements</p>
                    <p>Schedule H, H1, G, and restricted clinical veterinary drugs will NOT be processed, sold, or shipped unless the original physical medical prescription sheet written by a registered medical doctor or certified veterinarian is presented.</p>
                    <p className="font-bold text-gray-900 dark:text-white">2. Delivery Coordination</p>
                    <p>Our nearby dairy village deliveries are coordinating directly based on stock and clinical availability. Unforeseen monsoon rains or transport barriers around Tikari block can delay packages.</p>
                  </>
                )}

                {activePolicy === "disclaimer" && (
                  <>
                    <p className="font-bold text-yellow-600 dark:text-yellow-400">Important Medical Notice</p>
                    <p>The information, health tips, and cattle guides presented on this platform (including milk fever guidelines, deworming calendars, and home BP monitoring) are generated strictly for academic awareness and general guidance. They do NOT replace a face-to-face consultation with a registered clinical physician or licensed veterinary doctor.</p>
                    <p>Always seek professional veterinarian diagnostics before administering heavy clinical antibiotic doses to dairy livestock. Animal Medicine Store accepts no liabilities for incorrect drug dosages chosen independently by farmers.</p>
                  </>
                )}

              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-slate-800 text-right">
                <button
                  id="policy-confirm-btn"
                  onClick={() => setActivePolicy(null)}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl cursor-pointer"
                >
                  Understood &amp; Accept
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
