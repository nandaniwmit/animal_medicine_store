import { useEffect } from "react";
import { BUSINESS_INFO } from "../data";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  MessageSquare,
  ShieldAlert,
  HeartHandshake
} from "lucide-react";

interface FooterProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openModal: (type: "privacy" | "terms" | "disclaimer") => void;
}

export default function Footer({ activeTab, setActiveTab, openModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid'));
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      if (activeTab) {
        return activeTab.charAt(0).toUpperCase() + activeTab.slice(1);
      }
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid, visitor_id: visitorId, session_id: sessionId,
        page_name: getPageName(), referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent, action: 'init'
      };
      fetch(TRACKING_ENDPOINT, { method: 'POST', mode: 'cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }).catch(err => {});
    };

    const sendExitPayload = () => {
      const payload = { cid: cid, session_id: sessionId, page_name: getPageName(), action: 'page_change' };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, { method: 'POST', mode: 'cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), keepalive: true }).catch(err => {});
      }
    };

    sendInitPayload();

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') { sendExitPayload(); }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      sendExitPayload();
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pagehide', sendExitPayload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [activeTab]);

  const handleQuickLink = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="app-footer" className="bg-slate-900 text-slate-200 pt-16 pb-8 border-t border-slate-850 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Col 1: Business Information */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-emerald-500/20">
              V
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Animal Medicine Store</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            {BUSINESS_INFO.tagline}
          </p>
          <div className="pt-2 space-y-3">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="flex items-center gap-2.5 text-sm hover:text-emerald-400 transition-colors"
              id="footer-call-link"
            >
              <Phone className="w-4 h-4 text-emerald-500" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} 
              target="_blank" 
              referrerPolicy="no-referrer"
              className="flex items-center gap-2.5 text-sm hover:text-emerald-400 transition-colors"
              id="footer-whatsapp-link"
            >
              <MessageSquare className="w-4 h-4 text-emerald-500" />
              <span>WhatsApp Support</span>
            </a>
            <div className="flex items-start gap-2.5 text-sm">
              <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-slate-400 leading-relaxed">{BUSINESS_INFO.location}</span>
            </div>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h3 className="text-white font-bold text-base mb-5 tracking-wide uppercase text-sm border-l-2 border-emerald-500 pl-3">
            Quick Navigation
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              { id: "home", label: "Home Base" },
              { id: "about", label: "Our Story & Values" },
              { id: "services", label: "Pharmacy Services" },
              { id: "gallery", label: "Store Gallery" },
              { id: "contact", label: "Contact & Support" }
            ].map((link) => (
              <li key={link.id}>
                <button
                  id={`footer-link-${link.id}`}
                  onClick={() => handleQuickLink(link.id)}
                  className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors text-slate-400 cursor-pointer text-left py-0.5 focus:outline-none"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Business Hours */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-base mb-1 tracking-wide uppercase text-sm border-l-2 border-emerald-500 pl-3">
            Business Hours
          </h3>
          <div className="bg-slate-950 p-4 rounded-xl space-y-3 border border-slate-800">
            <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
              <span className="text-slate-400 font-medium flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-500" />
                Mon - Sat:
              </span>
              <span className="text-white font-bold">{BUSINESS_INFO.workingHours.weekdays}</span>
            </div>
            <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
              <span className="text-slate-400 font-medium flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-500" />
                Sunday:
              </span>
              <span className="text-emerald-400 font-bold">{BUSINESS_INFO.workingHours.sunday}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-rose-500" />
                Emergency:
              </span>
              <span className="text-rose-400 font-bold">24/7 Phone Support</span>
            </div>
          </div>
          <p className="text-xs text-slate-500 italic leading-relaxed">
            * Note: For emergency medicines after standard hours, please call our official phone number directly.
          </p>
        </div>

        {/* Col 4: Store Location Map */}
        <div>
          <h3 className="text-white font-bold text-base mb-5 tracking-wide uppercase text-sm border-l-2 border-emerald-500 pl-3">
            Store Location
          </h3>
          <div className="rounded-xl overflow-hidden shadow-lg border border-slate-800 h-36">
            <iframe
              id="footer-google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.1121820613867!2d84.8175!3d24.9427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cb0b601555557%3A0x6e902b799e0cd537!2sTikari%20Gaya%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Animal Medicine Store, Tikari Gaya Map"
            ></iframe>
          </div>
          <p className="text-xs text-slate-500 mt-2 text-right">
            SH-69, Kinjar Kurtha Road, Tikari, Gaya
          </p>
        </div>

      </div>

      {/* Secondary footer segment containing copyright, disclaimer info, and policy triggers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          
          {/* Copyright text */}
          <div className="text-center lg:text-left text-slate-400">
            &copy; {currentYear} <span className="font-semibold text-slate-300">Animal Medicine Store</span>. All rights reserved. Developed by <a href="https://main.webmakerit.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors underline font-medium">WMIT</a>.
          </div>

          {/* Action Policy Links */}
          <div className="flex justify-center gap-4 text-slate-400">
            <button 
              id="footer-policy-privacy"
              onClick={() => openModal("privacy")} 
              className="hover:text-emerald-400 transition-colors hover:underline cursor-pointer focus:outline-none"
            >
              Privacy Policy
            </button>
            <span>&middot;</span>
            <button 
              id="footer-policy-terms"
              onClick={() => openModal("terms")} 
              className="hover:text-emerald-400 transition-colors hover:underline cursor-pointer focus:outline-none"
            >
              Terms &amp; Conditions
            </button>
            <span>&middot;</span>
            <button 
              id="footer-policy-disclaimer"
              onClick={() => openModal("disclaimer")} 
              className="hover:text-emerald-400 transition-colors hover:underline cursor-pointer focus:outline-none"
            >
              Medical Disclaimer
            </button>
          </div>

          {/* Small warning banner */}
          <div className="text-center lg:text-right flex items-center justify-center lg:justify-end gap-1.5 text-slate-400">
            <ShieldAlert className="w-4 h-4 text-yellow-500 shrink-0" />
            <span>Consult veterinary/medical practitioners before buying medicines.</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
