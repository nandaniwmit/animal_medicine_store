import React, { useState } from "react";
import { BUSINESS_INFO } from "../data";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Building2,
  AlertTriangle
} from "lucide-react";

export default function ContactView() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) {
      alert("Please fill in all the required fields (Name, Phone, and Message).");
      return;
    }
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      alert("Your message has been logged successfully! Our pharmacy manager will call you back within a few business hours.");
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 font-sans text-gray-800 dark:text-gray-100">
      
      {/* 1. Header Hero */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest text-xs">Reach Out</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Contact Our Store
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Have queries about drug availability, delivery coordinates, or pricing? Find our store coordinates or send an instant message.
        </p>
      </div>

      {/* 2. Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left: Contact Info cards (Col span 5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-150 dark:border-slate-850 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-gray-950 dark:text-white border-b border-gray-150 dark:border-slate-850 pb-3 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-emerald-600" />
              <span>Store Information</span>
            </h3>

            <div className="space-y-4">
              
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Physical Address</h4>
                  <p className="text-xs md:text-sm text-gray-900 dark:text-white font-medium leading-relaxed mt-0.5">
                    {BUSINESS_INFO.location}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-1">
                    Located prominently on SH-69 Kinjar Kurtha Road near Tekari Market block.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Telephone Line</h4>
                  <a 
                    id="contact-call-now"
                    href={`tel:${BUSINESS_INFO.phone}`} 
                    className="text-xs md:text-sm text-emerald-600 dark:text-emerald-400 font-bold hover:underline block mt-0.5"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <p className="text-[10px] text-gray-500">
                    Direct voice support from 8:00 AM to 10:00 PM daily.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Support</h4>
                  <a 
                    id="contact-email-link"
                    href={`mailto:${BUSINESS_INFO.email}`} 
                    className="text-xs md:text-sm text-gray-900 dark:text-white font-medium hover:underline block mt-0.5"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                  <p className="text-[10px] text-gray-500">
                    We usually respond to clinical inquiries within 24 hours.
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Working Hours</h4>
                  <div className="text-xs text-gray-900 dark:text-white font-medium space-y-1 mt-1">
                    <p>Mon - Sat: <span className="font-bold">{BUSINESS_INFO.workingHours.weekdays}</span></p>
                    <p>Sunday: <span className="text-emerald-600 dark:text-emerald-400 font-bold">{BUSINESS_INFO.workingHours.sunday}</span></p>
                    <p>Emergency: <span className="text-rose-500 font-bold">24/7 Phone Support</span></p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Alert Warning card */}
          <div className="bg-yellow-50 dark:bg-yellow-950/20 p-5 rounded-2xl border border-yellow-200 dark:border-yellow-950/40 text-yellow-800 dark:text-yellow-300 text-xs flex gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold mb-1">Cattle Vaccination Orders</h4>
              <p className="leading-relaxed opacity-90">
                Large volumes of cattle vaccinations or calcium orders require pre-booking so we can ensure refrigerator cold chains remain unbroken during transport to your farm.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form (Col span 7) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-gray-150 dark:border-slate-850 shadow-sm relative">
          <h3 className="text-lg font-bold text-gray-950 dark:text-white mb-1">
            Send an Online Inquiry
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
            Complete the form below to leave your query. Our clinical staff will coordinate response.
          </p>

          {formSubmitted ? (
            <div id="contact-success-alert" className="py-12 text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mb-2">
                <CheckCircle2 className="w-6 h-6 animate-pulse" />
              </div>
              <h4 className="text-base font-bold text-gray-900 dark:text-white">Message Logged Successfully!</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm mx-auto leading-relaxed">
                Thank you for contacting us. We have received your query and will reach back shortly on your mobile.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1 uppercase tracking-wider">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name-input"
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl text-xs focus:outline-none focus:border-emerald-500 text-gray-900 dark:text-white"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1 uppercase tracking-wider">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-phone-input"
                    type="tel"
                    required
                    placeholder="10-digit number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl text-xs focus:outline-none focus:border-emerald-500 text-gray-900 dark:text-white"
                  />
                </div>

              </div>

              {/* Email (Optional) */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  id="contact-email-input"
                  type="email"
                  placeholder="E.g. name@example.com (optional)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl text-xs focus:outline-none focus:border-emerald-500 text-gray-900 dark:text-white"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1 uppercase tracking-wider">
                  Your Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-message-input"
                  rows={4}
                  required
                  placeholder="Type your medicine request, livestock queries, or delivery requirements here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl text-xs focus:outline-none focus:border-emerald-500 text-gray-900 dark:text-white"
                ></textarea>
              </div>

              {/* Submit btn */}
              <button
                id="contact-submit-btn"
                type="submit"
                className="w-full py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-md shadow-emerald-600/10 cursor-pointer focus:outline-none"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Query Form</span>
              </button>

            </form>
          )}
        </div>

      </div>

      {/* 3. Embedded Google Map at bottom of Contact page */}
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-base font-bold text-gray-900 dark:text-white">Google Map Interactive Location</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">Scan GPS boundaries or find directions to our loading bay.</p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-md border border-gray-150 dark:border-slate-800 h-96 relative">
          <iframe
            id="contact-google-map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.1121820613867!2d84.8175!3d24.9427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cb0b601555557%3A0x6e902b799e0cd537!2sTikari%20Gaya%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Animal Medicine Store Tikari Google Maps Location"
          ></iframe>
        </div>
      </div>

    </div>
  );
}
