import { useState, useEffect } from "react";
import { BUSINESS_INFO } from "../data";
import { Phone, MessageSquare, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 font-sans">
      
      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            id="floating-back-to-top"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={scrollToTop}
            className="w-11 h-11 bg-slate-900 dark:bg-slate-800 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors cursor-pointer focus:outline-none"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Call Now Button */}
      <motion.a
        id="floating-call-now"
        href={`tel:${BUSINESS_INFO.phone}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-blue-700 transition-all hover:scale-105"
        title="Call Medicine Store"
        aria-label="Call pharmacy"
      >
        <Phone className="w-5.5 h-5.5" />
      </motion.a>

      {/* Floating WhatsApp Support Button */}
      <motion.a
        id="floating-whatsapp-support"
        href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Animal%20Medicine%20Store%2C%20I%20have%20an%20inquiry%20regarding%20medicines.`}
        target="_blank"
        referrerPolicy="no-referrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-105"
        title="Order via WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.a>

    </div>
  );
}
