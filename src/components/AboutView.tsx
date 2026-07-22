import { BUSINESS_INFO } from "../data";
import { 
  History, 
  Target, 
  Eye, 
  HeartHandshake, 
  Award, 
  Compass,
  MessageSquare,
  ShieldCheck,
  CalendarCheck
} from "lucide-react";

export default function AboutView() {
  const timelineData = [
    { year: "2004", title: "The Foundation", desc: "Dr. K. P. Singh established Animal Medicine Store in Tikari to fill a critical gap: providing authentic veterinary medicines in rural Gaya." },
    { year: "2010", title: "Human Healthcare Expansion", desc: "Expanded inventory to stock general human prescription tablets, mother-baby care ranges, and critical diabetes products." },
    { year: "2018", title: "Cold Chain Modernization", desc: "Installed clinical medical refrigerators to guarantee strict 2°C - 8°C temperature logs for critical pet vaccines." },
    { year: "2024", title: "Digital Integration", desc: "Launched full WhatsApp prescription-processing systems enabling dairy farmers to check medicine stocks remotely." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 font-sans text-gray-800 dark:text-gray-100">
      
      {/* 1. Header Hero */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest text-xs">Our Heritage</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          About Animal Medicine Store
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Your trusted pharmacy providing genuine medications, clinical devices, and specialized livestock support in Tikari, Gaya.
        </p>
      </div>

      {/* 2. Story Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <h3 className="text-2xl font-bold text-gray-950 dark:text-white">Our Story &amp; Growth</h3>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Founded in the year 2004, Animal Medicine Store was born with a singular purpose: to bring uncompromised medical authenticity to Tekari, Gaya district. Recognizing the urgent healthcare challenges faced by local dairy farmers who struggled to access genuine veterinary treatments and critical cattle vaccines, we built our pharmacy as a trusted, certified pharmaceutical depot.
          </p>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Over the years, we grew in parallel with our community&apos;s requests. Today, we are proud to be a comprehensive, full-service health store stocking premium general human medicines, daily health supplements, sterile surgical instruments, baby nutrition ranges, and home clinical equipment.
          </p>
          <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-xl">
            <p className="text-xs text-emerald-800 dark:text-emerald-300 font-medium italic">
              &ldquo;Healthcare isn&apos;t just about transactions; it&apos;s about safeguarding families and livelihoods. Whether it is a small baby tablet or a five-liter cattle calcium booster, our ethics remain the same.&rdquo;
            </p>
          </div>
        </div>

        {/* Decorative Grid Image layout */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=400" 
              alt="Medical tablets" 
              className="rounded-2xl shadow-md object-cover h-48 w-full"
              loading="lazy"
            />
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400" 
              alt="Pharmacist advice" 
              className="rounded-2xl shadow-md object-cover h-36 w-full"
              loading="lazy"
            />
          </div>
          <div className="pt-8">
            <img 
              src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=400" 
              alt="Veterinary medicine bags" 
              className="rounded-2xl shadow-md object-cover h-80 w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* 3. Mission, Vision & Core Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        
        {/* Mission */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-150 dark:border-slate-850 shadow-sm text-center space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-gray-950 dark:text-white">Our Mission</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            To provide 100% genuine, affordable healthcare medicines and veterinary vaccines to Tikari and Gaya, keeping dairy cattle healthy and families safe.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-150 dark:border-slate-850 shadow-sm text-center space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-gray-950 dark:text-white">Our Vision</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            To become the premier model pharmacy and digital livestock support channel in Bihar, recognized for uncompromised medical safety, cold chain integrity, and local trust.
          </p>
        </div>

        {/* Core Values */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-150 dark:border-slate-850 shadow-sm text-center space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-gray-950 dark:text-white">Core Values</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            Authenticity first, clinical accuracy, absolute honesty in pricing, responsive community assistance, and total compliance with drug regulations.
          </p>
        </div>

      </div>

      {/* 4. Owner Message Card */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl"></div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-4 shrink-0 flex flex-col items-center">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-emerald-500/35 bg-slate-950 mb-3 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400" 
                alt="Dr. K.P. Singh Proprietor" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h4 className="font-bold text-white text-sm">{BUSINESS_INFO.owner.name}</h4>
            <p className="text-[10px] text-emerald-400 font-semibold">{BUSINESS_INFO.owner.role}</p>
          </div>

          <div className="md:col-span-8 space-y-4 text-center md:text-left">
            <h3 className="text-lg font-bold tracking-tight text-white uppercase text-xs text-emerald-400 font-mono">Owner Message</h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed italic">
              &ldquo;{BUSINESS_INFO.owner.message}&rdquo;
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Regd. Pharmacist Certification
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-1">
                <CalendarCheck className="w-4 h-4 text-emerald-400" /> Over 20 Years Experience
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* 5. Historical Timeline */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-xl font-bold">Our Timeline Journey</h3>
          <p className="text-xs text-gray-400">Tracing our footprints from foundation to digital age pharmacy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {timelineData.map((item, idx) => (
            <div 
              key={idx} 
              id={`timeline-${idx}`}
              className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-gray-150 dark:border-slate-800 shadow-sm relative"
            >
              <span className="text-3xl font-extrabold text-emerald-500/20 block mb-2 font-mono">
                {item.year}
              </span>
              <h4 className="text-xs font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Why local customers trust us banner */}
      <div className="bg-emerald-600 text-white rounded-3xl p-6 md:p-8 text-center space-y-4">
        <h3 className="text-lg md:text-xl font-bold">Need Help with Specific Vet or Chronic Medicine Salt?</h3>
        <p className="text-xs md:text-sm text-emerald-100 max-w-2xl mx-auto leading-relaxed">
          Dr. K.P. Singh can help guide you to find alternative medications, verify vaccine programs, and check active stock volumes. Simply start an offline inquiry!
        </p>
        <div className="pt-2">
          <a
            id="about-whats-action"
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Dr.%20Singh%2C%20I%20have%20an%20inquiry%20regarding%20veterinary%2Fhuman%20medicine%20stock.`}
            target="_blank"
            referrerPolicy="no-referrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-850 text-white font-bold rounded-xl text-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Consult Chief Pharmacist</span>
          </a>
        </div>
      </div>

    </div>
  );
}
