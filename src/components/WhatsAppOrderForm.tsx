import React, { useState, useRef, useEffect } from "react";
import { BUSINESS_INFO } from "../data";
import { 
  MessageSquare, 
  Phone, 
  Upload, 
  Clock, 
  CheckCircle2, 
  FileText,
  X,
  AlertCircle
} from "lucide-react";

export default function WhatsAppOrderForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [medicines, setMedicines] = useState("");
  const [message, setMessage] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("Morning (8 AM - 12 PM)");

  // Listen to window custom events to pre-fill medicine field
  useEffect(() => {
    const handleSetMedicine = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setMedicines(customEvent.detail);
      }
    };
    window.addEventListener("set-order-medicine", handleSetMedicine);
    return () => window.removeEventListener("set-order-medicine", handleSetMedicine);
  }, []);
  
  // Prescription upload state
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formSuccess, setFormSuccess] = useState(false);

  // Drag and Drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setPrescriptionFile(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFile(e.target.files[0]);
    }
  };

  const removePrescription = () => {
    setPrescriptionFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !mobile || !medicines || !address) {
      alert("Please fill in all the required fields (Name, Mobile, Medicine details, and Address).");
      return;
    }

    const prescriptionText = prescriptionFile ? `Yes (File: ${prescriptionFile.name})` : "No";

    // Format the text string exactly as requested
    const textMessage = `Hello
Animal Medicine Store

Customer Name:
${name}

Phone:
${mobile}

Medicine Required:
${medicines}

Address:
${address}

Prescription:
${prescriptionText}

Message:
${message || "N/A"}

Preferred Delivery Time:
${deliveryTime}
    `;

    // Encode URL parameter
    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodedText}`;

    // Mark as success and open link
    setFormSuccess(true);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setFormSuccess(false);
    }, 1500);
  };

  return (
    <div 
      id="whatsapp-order-form" 
      className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-gray-150 dark:border-slate-800 shadow-xl font-sans relative overflow-hidden"
    >
      {/* Decorative gradient blur background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 dark:bg-emerald-400/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
          <MessageSquare className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
            WhatsApp Order Form
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Submit your prescription or list of items directly to our counter.
          </p>
        </div>
      </div>

      {formSuccess ? (
        <div id="form-success-alert" className="py-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 mb-2">
            <CheckCircle2 className="w-10 h-10 animate-bounce" />
          </div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
            Opening WhatsApp Chat...
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
            Your inquiry is formatted perfectly. We are redirecting you to discuss availability and dispatch options.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Customer Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5 uppercase tracking-wider">
                Customer Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="order-name-input"
                type="text"
                required
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-gray-900 dark:text-white"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5 uppercase tracking-wider">
                Mobile Number <span className="text-rose-500">*</span>
              </label>
              <input
                id="order-mobile-input"
                type="tel"
                required
                placeholder="10-digit mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-gray-900 dark:text-white"
              />
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Email Address (Optional) */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5 uppercase tracking-wider">
                Email Address
              </label>
              <input
                id="order-email-input"
                type="email"
                placeholder="name@example.com (optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-gray-900 dark:text-white"
              />
            </div>

            {/* Preferred Delivery/Pickup Time */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5 uppercase tracking-wider">
                Preferred Delivery / Pickup
              </label>
              <div className="relative">
                <select
                  id="order-time-select"
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-gray-900 dark:text-white appearance-none cursor-pointer"
                >
                  <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                  <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                  <option value="Immediate Urgency">Immediate Urgency</option>
                </select>
                <Clock className="absolute right-3.5 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

          </div>

          {/* Full Delivery/Farm Address */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5 uppercase tracking-wider">
              Delivery / Farm Address <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="order-address-input"
              rows={2}
              required
              placeholder="Enter your complete home or farm address in Tikari, Gaya"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-gray-900 dark:text-white resize-none"
            ></textarea>
          </div>

          {/* Medicine Name / Details */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5 uppercase tracking-wider">
              Medicines Required <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="order-medicines-input"
              rows={3}
              required
              placeholder="E.g. Ostovet 5 Liter - 1 can, Dolo 650mg - 2 strips, Himax Ointment - 1 tube"
              value={medicines}
              onChange={(e) => setMedicines(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-gray-900 dark:text-white"
            ></textarea>
          </div>

          {/* Upload Prescription */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5 uppercase tracking-wider">
              Attach Prescription (Image / PDF)
            </label>
            
            <div
              id="prescription-dropzone"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all duration-200 ${
                isDragging 
                  ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20" 
                  : "border-gray-250 dark:border-slate-800 hover:border-emerald-500 hover:bg-gray-50 dark:hover:bg-slate-950"
              }`}
            >
              <input
                id="order-prescription-file"
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*,.pdf"
                className="hidden"
              />
              
              {prescriptionFile ? (
                <div className="flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/30 p-2.5 rounded-lg border border-emerald-100 dark:border-emerald-950">
                  <div className="flex items-center gap-2 text-left">
                    <FileText className="w-8 h-8 text-emerald-600 shrink-0" />
                    <div className="overflow-hidden">
                      <p className="text-xs font-bold text-gray-900 dark:text-white truncate max-w-[180px] md:max-w-[280px]">
                        {prescriptionFile.name}
                      </p>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400">
                        {(prescriptionFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    id="remove-prescription-btn"
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removePrescription();
                    }}
                    className="p-1 text-gray-400 hover:text-rose-500 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-1.5 py-2">
                  <Upload className="w-7 h-7 text-gray-400 mx-auto" />
                  <p className="text-xs font-bold text-gray-700 dark:text-gray-300">
                    Drag &amp; drop prescription here, or <span className="text-emerald-600 dark:text-emerald-400 hover:underline">browse</span>
                  </p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400">
                    Supports JPG, PNG, PDF up to 10MB
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Message / Special Instructions */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5 uppercase tracking-wider">
              Special Instructions
            </label>
            <textarea
              id="order-message-input"
              rows={2}
              placeholder="Any other notes, clinical symptoms, or alternative drug requests"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-gray-900 dark:text-white resize-none"
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            {/* Submit Button */}
            <button
              id="whatsapp-submit-btn"
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-emerald-600/15 cursor-pointer focus:outline-none"
            >
              <MessageSquare className="w-4.5 h-4.5" />
              <span>Send order via WhatsApp</span>
            </button>

            {/* Quick Call backup */}
            <a
              id="whatsapp-call-backup"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-3.5 px-6 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-bold rounded-xl text-sm transition-colors text-center"
            >
              <Phone className="w-4.5 h-4.5" />
              <span>Call Us Now</span>
            </a>
          </div>

          {/* Footnote on Schedule H guidelines */}
          <div className="flex items-start gap-1.5 text-[10px] text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
            <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
            <span>
              Disclaimer: Placing an order here submits a drug inquiry to our pharmacist. Prescription medicines will ONLY be billed and handed over/dispatched upon presenting a valid physical prescription at delivery or store pickup, strictly in compliance with Central Drug Guidelines.
            </span>
          </div>

        </form>
      )}
    </div>
  );
}
