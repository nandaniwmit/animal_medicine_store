import { useState, useEffect } from "react";
import { BUSINESS_INFO } from "../data";
import { 
  Menu, 
  X, 
  Phone, 
  MessageSquare, 
  Sun, 
  Moon, 
  ShieldCheck,
  Search
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenSearch: () => void;
}

export default function Header({ 
  activeTab, 
  setActiveTab, 
  darkMode, 
  setDarkMode,
  onOpenSearch
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top mini banner with working hours & Emergency text */}
      <div className="bg-emerald-900 text-emerald-50 text-xs py-2 px-4 flex justify-between items-center z-50 relative md:px-8 font-sans">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            {BUSINESS_INFO.workingHours.emergency}
          </span>
          <span className="hidden sm:inline">| Hours: {BUSINESS_INFO.workingHours.weekdays}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden md:inline font-medium">Emergency Line:</span>
          <a 
            href={`tel:${BUSINESS_INFO.phone}`} 
            className="font-bold hover:underline flex items-center gap-1"
            id="emergency-top-link"
          >
            <Phone className="w-3.5 h-3.5" />
            {BUSINESS_INFO.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        id="main-sticky-header"
        className={`sticky top-0 z-40 transition-all duration-300 font-sans ${
          scrolled 
            ? "bg-white/95 dark:bg-slate-900/95 shadow-md backdrop-blur-md py-3" 
            : "bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <button 
            id="logo-brand-btn"
            onClick={() => handleNavClick("home")} 
            className="flex items-center gap-2.5 text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-600/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white leading-none tracking-tight">
                Animal Medicine Store
              </h1>
              <span className="text-[10px] md:text-xs text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider uppercase block mt-0.5">
                {BUSINESS_INFO.category}
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors cursor-pointer relative py-1 focus:outline-none ${
                  activeTab === item.id 
                    ? "text-emerald-600 dark:text-emerald-400 font-semibold" 
                    : "text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right Header Controls (Call, WhatsApp, Search, DarkMode, Hamburger) */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Quick Search Trigger */}
            <button
              id="header-search-btn"
              onClick={onOpenSearch}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title="Search medicines"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Dark Mode Toggle */}
            <button
              id="dark-mode-toggle"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle theme mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Call Now Action Button (Desktop Only) */}
            <a
              id="header-call-btn"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-sm rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>

            {/* WhatsApp Quick Order button */}
            <button
              id="header-whatsapp-order-btn"
              onClick={() => handleNavClick("home")} // Will scroll user to WhatsApp form or trigger custom order modal
              className="hidden md:flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg transition-all shadow-md shadow-emerald-600/15"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Order via WhatsApp</span>
            </button>

            {/* Mobile Burger Menu Button */}
            <button
              id="mobile-burger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-nav-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-2 flex flex-col">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    id={`mobile-nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-3 py-2.5 rounded-lg text-base font-semibold transition-colors cursor-pointer ${
                      activeTab === item.id
                        ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800/50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Mobile Quick Action Buttons inside Menu */}
                <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex flex-col gap-3">
                  <a
                    id="mobile-nav-call-action"
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold rounded-lg text-sm text-center"
                  >
                    <Phone className="w-4 h-4" />
                    Call {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <button
                    id="mobile-nav-whatsapp-action"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      // Navigate to contact/whatsapp order form
                      const formElement = document.getElementById("whatsapp-order-form");
                      if (formElement) {
                        formElement.scrollIntoView({ behavior: "smooth" });
                      } else {
                        setActiveTab("home");
                        // We will check for element on next tick
                        setTimeout(() => {
                          document.getElementById("whatsapp-order-form")?.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                      }
                    }}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 text-white font-bold rounded-lg text-sm text-center"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp Order Form
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
