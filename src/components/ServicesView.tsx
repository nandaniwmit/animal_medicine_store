import { 
  FileText, 
  Pill, 
  TrendingUp, 
  Heart, 
  Sparkles, 
  Activity, 
  Scissors, 
  HeartHandshake, 
  Gauge, 
  ShieldAlert,
  MessageSquare,
  Phone
} from "lucide-react";
import { BUSINESS_INFO } from "../data";

export default function ServicesView() {
  const allServices = [
    {
      id: "s1",
      title: "Prescription Medicines",
      desc: "Authentic, high-safety prescription drugs for standard chronic diseases (Cardiac, Respiratory, Nephro, Neuro) and veterinarian-certified clinical animal treatments. Sourced strictly with valid batch numbers.",
      details: ["Proper temperature cold-chain maintenance", "Drug substitution consultancy", "Schedule H batch record checks", "Validity audit on every slip"],
      icon: FileText,
      color: "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
    },
    {
      id: "s2",
      title: "General & OTC Medicines",
      desc: "Wide selection of reliable over-the-counter tablets, pain capsules, cold syrups, antacids, and digestive boosters for rapid symptom relief.",
      details: ["Analgesics & fever reducers", "Cough & congestion relief", "Allergy defense tablets", "Digestive and probiotic tonics"],
      icon: Pill,
      color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400"
    },
    {
      id: "s3",
      title: "Health & Feed Supplements",
      desc: "Multi-vitamins, minerals, calcium compounds, and livestock feed supplements. Specially formulated products to boost cattle milk production and pet health.",
      details: ["Calcium & Vitamin D3 gels", "Cattle mineral mixture bags", "Daily family multivitamin softgels", "Protein recovery powders"],
      icon: TrendingUp,
      color: "bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400"
    },
    {
      id: "s4",
      title: "Baby Care Products",
      desc: "Dermatologically tested organic products for newborn babies and young mothers, safeguarding gentle skin and maternal nutrition requirements.",
      details: ["Infant infant formula milk", "Hypoallergenic soaps & powder", "Diaper rash defense ointments", "Mother pre-post natal tablets"],
      icon: Heart,
      color: "bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400"
    },
    {
      id: "s5",
      title: "Personal Care Products",
      desc: "Daily personal hygiene solutions, antibacterial body washes, premium medicated face washes, skin sanitizers, and defensive sunscreens.",
      details: ["Medicated facial care", "Antibacterial hand washes", "Oral & dental care setups", "Feminine sanitary protection"],
      icon: Sparkles,
      color: "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400"
    },
    {
      id: "s6",
      title: "Medical Equipment",
      desc: "Top-brand digital self-monitoring devices to track key physiological vitals accurately at home, preventing critical sudden spikes.",
      details: ["Omron digital BP monitors", "Blood glucose metrics & pens", "Pulse oximeter sensors", "Infrared thermal scanners"],
      icon: Activity,
      color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400"
    },
    {
      id: "s7",
      title: "Surgical Supplies",
      desc: "Sterile disposables, surgical sutures, orthopedic braces, splints, and professional wound dressing hardware suitable for hospital clinical blocks.",
      details: ["Sterile disposable syringes", "Clinical gauze & paper tape", "Crepe bandages & splints", "Infusion sets & IV lines"],
      icon: Scissors,
      color: "bg-violet-50 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400"
    },
    {
      id: "s8",
      title: "First Aid Products",
      desc: "Comprehensive home and farm emergency wound-care dressings, antiseptic solutions, cotton rolls, and burn ointments for instant safety.",
      details: ["Betadine & Spirit cleaners", "Adhesive strip bandages", "Sterile medical cotton wool", "Pain relieving sprays & gels"],
      icon: HeartHandshake,
      color: "bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400"
    },
    {
      id: "s9",
      title: "Diabetic Care",
      desc: "Dedicated segment for diabetic patients containing low-glycemic dietary supplements, diagnostic test strips, and temperature-controlled insulin storage.",
      details: ["Glucose testing strips", "Insulin syringe & pen needles", "Sugar-free health beverages", "Diabetic neuropathic care creams"],
      icon: Gauge,
      color: "bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400"
    },
    {
      id: "s10",
      title: "Healthcare Essentials",
      desc: "Daily protective face masks, high-grade sanitizing sprays, medical waste bags, and general safety goods for clinics and veterinary facilities.",
      details: ["N95 protective masks", "Alcohol hand sanitizers", "Disinfectant floor liquids", "Sterile examination gloves"],
      icon: ShieldAlert,
      color: "bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-400"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 font-sans text-gray-800 dark:text-gray-100">
      
      {/* 1. Header Hero */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest text-xs">Our Specialty</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Our Pharmacy Services
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Explore our ten dedicated clinical services supplying verified premium medicines and medical equipment to Gaya and Tikari block.
        </p>
      </div>

      {/* 2. Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {allServices.map((service, index) => (
          <div 
            key={service.id}
            id={`service-page-card-${index}`}
            className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-gray-150 dark:border-slate-850 hover:border-emerald-500/50 transition-all shadow-sm hover:shadow-md flex flex-col md:flex-row gap-6 justify-between duration-300"
          >
            {/* Left: Icon & Core Details */}
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${service.color}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-950 dark:text-white">{service.title}</h3>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {service.desc}
              </p>
              
              {/* Bullet details */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2">
                {service.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[11px] text-gray-600 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span className="truncate">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Direct Ask block */}
            <div className="md:w-44 shrink-0 flex flex-col justify-end gap-2.5 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-gray-100 dark:border-slate-800 md:pl-6">
              <span className="text-[10px] text-gray-400 font-bold block text-center md:text-left">Need specific brand?</span>
              <button
                id={`srv-inq-btn-${index}`}
                onClick={() => {
                  const text = `Hello Animal Medicine Store, I have an inquiry regarding your "${service.title}" services and stock details.`;
                  window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
                }}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/10 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Inquire Stock</span>
              </button>
              <a
                id={`srv-call-btn-${index}`}
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs rounded-xl transition-colors text-center flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Store</span>
              </a>
            </div>

          </div>
        ))}
      </div>

      {/* 3. Footer Guideline Advice */}
      <div className="bg-slate-900 text-slate-200 p-8 rounded-3xl border border-slate-800 text-center space-y-3">
        <h3 className="text-base font-extrabold text-white uppercase tracking-wider text-xs text-emerald-400 font-mono">Central Drug Guideline Notice</h3>
        <p className="text-xs text-slate-400 max-w-3xl mx-auto leading-relaxed">
          In compliance with the Drugs and Cosmetics Act, Schedule H / H1 / X and G drugs (for human and veterinary applications) will strictly require a physically verified original prescription written by a registered veterinarian or clinical medical practitioner. Thank you for maintaining high standards of medication safety!
        </p>
      </div>

    </div>
  );
}
