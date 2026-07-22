import { 
  ServiceItem, 
  Testimonial, 
  FAQItem, 
  GalleryItem, 
  HealthTip, 
  Offer,
  Medicine
} from "./types";

export const BUSINESS_INFO = {
  name: "Animal Medicine Store",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  category: "Pharmacy | Medical Store",
  location: "Tikari, Gaya, SH-69, Kinjar Kurtha Road, Gaya, Bihar 824236",
  shortLocation: "Tikari, Gaya, Bihar",
  phone: "09934744842",
  phoneDisplay: "+91 99347 44842",
  whatsapp: "919934744842",
  email: "animalmedicinestore.gaya@gmail.com",
  workingHours: {
    weekdays: "8:00 AM - 10:00 PM",
    sunday: "9:00 AM - 8:00 PM",
    emergency: "24/7 Support Available"
  },
  owner: {
    name: "Dr. K. P. Singh",
    role: "Proprietor & Chief Pharmacist",
    message: "For over two decades, we have been committed to delivering authentic, safe, and life-saving medicines to the veterinary and human community in Tekari, Gaya. Our focus is absolute genuineness, prompt assistance, and affordable care."
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "v-med",
    title: "Veterinary Medicines",
    description: "Specialized pharmacy supplying quality animal medicines, vaccines, and therapeutic care for cattle, pets, poultry, and small animals.",
    details: [
      "Broad-spectrum antibiotics & dewormers",
      "Livestock calcium & vitamin supplements",
      "Vaccines for dogs, cats, cattle, and poultry",
      "Pet nutrition and veterinary prescription diets"
    ],
    icon: "ShieldAlert", // Custom map
    image: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "pres-med",
    title: "Prescription Medicines",
    description: "Authentic prescription drugs for standard chronic and acute health issues, double-checked for quality, batch accuracy, and validity.",
    details: [
      "Cardiac, diabetic, and hypertensive drugs",
      "Veterinarian-certified clinical treatments",
      "Properly chilled storage for insulin and biologics",
      "Clear dosage counseling and usage logs"
    ],
    icon: "FileText",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "otc-med",
    title: "General & OTC Medicines",
    description: "Wide selection of over-the-counter tablets, caps, and liquids for daily health requirements, pain management, and first aid.",
    details: [
      "Analgesics, cold remedies, and anti-allergies",
      "Antacids, laxatives, and digestion boosters",
      "Multi-vitamins and general physical health tonics",
      "Trusted local advice for common symptoms"
    ],
    icon: "Pill",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "baby-mother",
    title: "Baby Care Products",
    description: "Essential care items for infants and young mothers including trusted nutritional brands, baby hygiene, and developmental care.",
    details: [
      "Top-brand baby formula and specialized food",
      "Dermatologically tested baby soaps, lotions & oils",
      "Anti-rash creams, diapers, and organic wipes",
      "Maternal supplements and wellness kits"
    ],
    icon: "Heart",
    image: "https://images.unsplash.com/photo-1515488042361-404e9250afef?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "personal-hyg",
    title: "Personal Care Products",
    description: "Daily hygiene, skin protection, and sanitary solutions maintaining optimum defense against infections and environmental stresses.",
    details: [
      "Medicated face washes, skin lotions & sunscreens",
      "Antibacterial soaps, hair care & dental care",
      "Feminine hygiene essentials",
      "Sanitizers, masks, and surface disinfectants"
    ],
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "equipment",
    title: "Medical Devices & Equipment",
    description: "Standard self-monitoring tools and clinical hardware to track key vitals at home with ease and high accuracy.",
    details: [
      "Digital Blood Pressure (BP) monitors",
      "Blood glucose meters & testing strips",
      "Pulse oximeters, Nebulizers, and Vaporizers",
      "Infrared and digital thermometers"
    ],
    icon: "Activity",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "surgical",
    title: "Surgical Supplies",
    description: "Safe, sterile single-use disposables, orthopedic splints, and professional wound dressing equipment for clinics and domestic care.",
    details: [
      "Sterile gauze pads, bandages, and surgical tapes",
      "Syringes, infusion sets, and sterile gloves",
      "Orthopedic braces, crepe bandages & splints",
      "Antiseptic liquid, betadine, and spirit"
    ],
    icon: "Scissors",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "supplements",
    title: "Health & Nutrition Supplements",
    description: "Nutritional supplements for physical recovery, immunity building, and dietary fulfillments for both families and animal stock.",
    details: [
      "Protein powders, mass gainers, and amino acids",
      "Cattle feed supplements & milk-enhancing mineral mixtures",
      "Calcium, Vitamin D3, B-Complex capsules",
      "Herbal energy drinks and immunity pills"
    ],
    icon: "TrendingUp",
    image: "https://images.unsplash.com/photo-1579721591244-607998a2470c?auto=format&fit=crop&q=80&w=600"
  }
];

export const CATEGORIES_DATA = [
  { name: "Tablets & Capsules", count: 240, image: "https://images.unsplash.com/photo-1628771065518-0d82f1113871?auto=format&fit=crop&q=80&w=200", id: "cat-tab" },
  { name: "Veterinary Medicines", count: 185, image: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=200", id: "cat-vet" },
  { name: "Syrups & Suspensions", count: 120, image: "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&q=80&w=200", id: "cat-syr" },
  { name: "Injections & Vaccines", count: 95, image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=200", id: "cat-inj" },
  { name: "Medical Equipment", count: 65, image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=200", id: "cat-equ" },
  { name: "Protein Supplements", count: 80, image: "https://images.unsplash.com/photo-1579721591244-607998a2470c?auto=format&fit=crop&q=80&w=200", id: "cat-prot" },
  { name: "Skin & Personal Care", count: 150, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=200", id: "cat-skin" },
  { name: "Baby Care Products", count: 110, image: "https://images.unsplash.com/photo-1515488042361-404e9250afef?auto=format&fit=crop&q=80&w=200", id: "cat-baby" },
  { name: "Diabetic Care", count: 75, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=200", id: "cat-diab" },
  { name: "Orthopedic Supports", count: 45, image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=200", id: "cat-orth" }
];

export const MEDICINES_DATA: Medicine[] = [
  // Veterinary
  { id: "m1", name: "Himax Skin Ointment", category: "Veterinary Medicines", description: "Effective skin antiseptic cream for cattle and pets, useful for wounds, ringworm, and eczema.", target: "Cattle & Pets", available: true },
  { id: "m2", name: "Ostovet Forte Liquid (5L)", category: "Veterinary Medicines", description: "High quality liquid feed supplement with Calcium, Phosphorus, Vitamin D3 & B12 for high-yielding milk cows.", target: "Cattle", available: true },
  { id: "m3", name: "Albendazole Oral Dewormer", category: "Veterinary Medicines", description: "Broad-spectrum veterinary deworming suspension for sheep, goats, and cattle.", target: "Livestock", available: true },
  { id: "m4", name: "PetHex Medicated Dog Shampoo", category: "Veterinary Medicines", description: "Anti-fungal and antibacterial bath wash for pets with chronic skin itching.", target: "Dogs & Cats", available: true },
  { id: "m5", name: "Vimerol Multi-Vitamin drops", category: "Veterinary Medicines", description: "Vitamins A, D3, E and B12 syrup for birds, poultry, and small domestic animals.", target: "Poultry & Pets", available: true },
  // Human Prescription
  { id: "m6", name: "Telmisartan 40mg (Telma)", category: "Tablets & Capsules", description: "Standard blood pressure regulation medicine, prescription required.", target: "General / Human", available: true },
  { id: "m7", name: "Metformin SR 500mg (Glycomet)", category: "Diabetic Care", description: "Oral anti-diabetic medication for controlling blood sugar level in Type 2 Diabetes.", target: "General / Human", available: true },
  { id: "m8", name: "Atorvastatin 10mg (Lipvas)", category: "Tablets & Capsules", description: "Statins prescribed for regulating high blood cholesterol levels safely.", target: "General / Human", available: true },
  // OTC
  { id: "m9", name: "Paracetamol 650mg (Dolo)", category: "Tablets & Capsules", description: "Extremely popular analgesic and antipyretic medicine for fever and headache relief.", target: "General / Human", available: true },
  { id: "m10", name: "Multivitamin Gold capsules", category: "Protein Supplements", description: "Comprehensive daily vitamin, mineral and antioxidant booster softgels.", target: "General / Human", available: true },
  { id: "m11", name: "Ascoril LS Cough Syrup", category: "Syrups & Suspensions", description: "Bronchodilator and expectorant syrup for relief from wet, chesty cough.", target: "General / Human", available: true },
  { id: "m12", name: "Accu-Chek Active Test Strips", category: "Diabetic Care", description: "High-accuracy blood glucose measurement strips (Pack of 50).", target: "General / Human", available: true },
  { id: "m13", name: "Crepe Bandage (10cm)", category: "Orthopedic Supports", description: "Elastic muscle support wrap for sprains, muscle pulls, and sports safety.", target: "General / Human", available: true },
  { id: "m14", name: "Sebamed Baby Gentle Wash", category: "Baby Care Products", description: "Soap-free ultra-mild wash with pH 5.5 for sensitive skin of newborn babies.", target: "Baby Care", available: true },
  { id: "m15", name: "Dettol Antiseptic Liquid (1L)", category: "Skin & Personal Care", description: "First aid disinfectant liquid for wounds, skin disinfection, and household hygiene.", target: "General / Human", available: true }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Rameshwar Yadav",
    role: "Dairy Farm Owner",
    rating: 5,
    content: "I have 12 cows in my farm near Tekari. For the last 5 years, I buy all veterinary calcium and dewormers from Animal Medicine Store. Their suggestions are genuine, prices are very reasonable, and they always keep fresh vaccine stock in cold chain.",
    date: "June 24, 2026",
    location: "Gaya Road, Tikari"
  },
  {
    id: "t2",
    name: "Anjali Kumari",
    role: "Local Resident",
    rating: 5,
    content: "Excellent service! I upload my mother's diabetes prescription on their WhatsApp, and within 30 minutes, they keep the medicines ready for pickup. Their staff double-checks the expiry date of every strip, which makes us trust them fully.",
    date: "July 02, 2026",
    location: "Kurtha Road, Tikari"
  },
  {
    id: "t3",
    name: "Dr. Arvind Sinha",
    role: "Veterinary Physician",
    rating: 5,
    content: "I always recommend Animal Medicine Store to all livestock owners in Gaya. They stock all critical drugs, from veterinary life-saving antibiotics to specialty supplements, which are otherwise very hard to find in local Tikari pharmacies.",
    date: "May 18, 2026",
    location: "Tikari Block Office"
  },
  {
    id: "t4",
    name: "Vikash Kumar",
    role: "Pet Parent (Golden Retriever)",
    rating: 5,
    content: "Finding genuine dog vaccinations and medicated shampoos in Gaya can be stressful. This store is a blessing! They even gave me guidance on tick treatment on WhatsApp. Their prices are cheaper than online veterinary portals too.",
    date: "June 12, 2026",
    location: "Gaya Cantt"
  },
  {
    id: "t5",
    name: "Suresh Prasad Singh",
    role: "Retired Teacher",
    rating: 5,
    content: "A highly professional pharmacy in Gaya district. Dr. Singh explains the medicine dosage so patiently. They also have digital BP and sugar testing devices at very competitive prices. Very polite and honest behavior.",
    date: "April 29, 2026",
    location: "Bazaar Ward, Tikari"
  },
  {
    id: "t6",
    name: "Mohammad Farhan",
    role: "Poultry Farm Operator",
    rating: 5,
    content: "Our farm needs rapid multi-vitamins and vaccine supplies in large quantities. This shop maintains bulk supplies and is extremely reliable. The WhatsApp order system is great; we just message the details and send our pick-up vehicle.",
    date: "July 08, 2026",
    location: "Kinjar Road"
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq1",
    question: "Do you supply both animal (veterinary) and human medicines?",
    answer: "Yes, we are a comprehensive pharmacy. We specialize in general human healthcare medicines, baby care, surgical items, and high-quality veterinary medicines and vaccines for cattle, poultry, and domestic pets.",
    category: "Store Overview"
  },
  {
    id: "faq2",
    question: "How do I order medicines using the WhatsApp order feature?",
    answer: "It is very simple! Go to our 'WhatsApp Order' section, fill in your Name, Phone, and the Medicine names (you can also upload or attach a clear photo of your doctor's prescription), then click 'Send via WhatsApp'. It formats a professional text which opens directly in WhatsApp to our number: +91 9934744842.",
    category: "Ordering Process"
  },
  {
    id: "faq3",
    question: "Is a prescription required for purchasing medicines?",
    answer: "For Schedule H, H1 and G drugs (for both humans and animals), a valid registered medical practitioner or veterinary doctor prescription is legally required. For general health vitamins, feed supplements, first-aid materials, and standard OTC medicines, you can buy them directly.",
    category: "Medical Guidelines"
  },
  {
    id: "faq4",
    question: "Do you deliver medicines nearby Tikari and Gaya regions?",
    answer: "We support nearby local drop-offs and store-pickup reservation. If you are a veterinary clinic, dairy farm, or livestock owner in Tikari, Kurtha, or Gaya block needing bulk medicines, please WhatsApp us. We will arrange delivery or package loading accordingly.",
    category: "Delivery & Pickup"
  },
  {
    id: "faq5",
    question: "How do you ensure veterinary vaccines remain effective?",
    answer: "All veterinary and human vaccines (such as FMD vaccines, pet immunizations, insulin, etc.) are strictly stored inside a reliable medical cold chain refrigerator (maintaining a constant 2°C to 8°C). We handle cold chain transfers carefully to preserve quality.",
    category: "Quality Control"
  },
  {
    id: "faq6",
    question: "Are your animal feed supplements suitable for milk-yielding dairy cows?",
    answer: "Absolutely. We supply premium quality calcium supplements (like Ostovet, Calshakti), mineral mixtures, and lactation boosters certified by vet departments to safely improve milk output and build cattle immunity.",
    category: "Veterinary Care"
  },
  {
    id: "faq7",
    question: "What medical equipment do you have available?",
    answer: "We stock digital Blood Pressure monitors, glucometers, high-quality thermometers, nebulizers for breathing assistance, vaporizers, oximeters, and basic orthopedic braces and supports.",
    category: "Medical Devices"
  },
  {
    id: "faq8",
    question: "What are your exact business hours in Tekari?",
    answer: "We are open Monday through Saturday from 8:00 AM to 10:00 PM, and Sundays from 9:00 AM to 8:00 PM. For absolute critical emergencies, you can call us directly on our official line: 09934744842.",
    category: "Store Overview"
  },
  {
    id: "faq9",
    question: "Do you offer discounts on bulk orders or chronic medicines?",
    answer: "Yes, we offer special concessions on high-volume livestock supplies and monthly chronic human therapies (diabetes/hypertension). Please contact our store manager Dr. K.P. Singh directly at the counter for discount details.",
    category: "Pricing & Discounts"
  },
  {
    id: "faq10",
    question: "How can I verify if a specific medicine is currently in stock?",
    answer: "You can use the real-time search tool on our homepage to look up our general stock catalogue, or simply type your medicine name into our WhatsApp Inquiry form. Our pharmacist will respond within minutes about the current stock status and batch price.",
    category: "Ordering Process"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    title: "Animal Medicine Store Front",
    category: "Store Front",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=800",
    description: "Our prominent retail pharmacy outlet located on SH-69 Kinjar Kurtha Road in Tikari, Gaya."
  },
  {
    id: "g2",
    title: "Organized Medicine Shelves",
    category: "Shelves",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e55c26?auto=format&fit=crop&q=80&w=800",
    description: "Highly classified clinical racks containing double-verified therapeutic medications, properly cataloged."
  },
  {
    id: "g3",
    title: "Premium Veterinary Feed Supplements",
    category: "Veterinary",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=800",
    description: "Bulk livestock growth formulas, bone boosters, and lactation calcium solutions for dairy farming."
  },
  {
    id: "g4",
    title: "Clinical Equipment Display",
    category: "Equipment",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    description: "Reliable home monitoring devices including Omron BP units, Accu-Chek glucometers, and vaporizers."
  },
  {
    id: "g5",
    title: "Veterinary Vaccine Storage",
    category: "Veterinary",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800",
    description: "Dedicated clinical cold chain unit safeguarding vaccine strains and bio-injections."
  },
  {
    id: "g6",
    title: "Customer Support Desk",
    category: "Customers",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    description: "Prompt pharmacist counseling, medicine scanning, and quick checkout assistance for local farmers."
  },
  {
    id: "g7",
    title: "Surgical Supplies & Dressings",
    category: "Products",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=800",
    description: "Sterile wound-dressing bandages, clinical gloves, syringes, and single-use cannulas."
  },
  {
    id: "g8",
    title: "OTC Care & Hygiene Products",
    category: "Products",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
    description: "Dermatological body soaps, antiseptic ointments, mother-baby powders, and skin sanitizers."
  }
];

export const HEALTH_TIPS_DATA: HealthTip[] = [
  {
    id: "blog1",
    title: "Preventing Milk Fever (Hypocalcemia) in Dairy Cattle",
    category: "Veterinary Care",
    date: "July 10, 2026",
    author: "Dr. K. P. Singh",
    summary: "A brief guide on managing post-calving calcium deficits in high-producing cows using veterinary supplements.",
    content: "Milk fever is a common metabolic disorder affecting dairy cows around calving due to a rapid draw on calcium reserves for milk production. Symptoms include muscular weakness and listlessness. Prevent this critical issue by providing premium oral calcium gels (such as Ostocalcium or Calshakti) 24 hours prior and immediately after calving. Maintaining balanced dietary pre-calving ratios is also vital.",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "blog2",
    title: "Understanding Blood Pressure Self-Monitoring at Home",
    category: "Human Health",
    date: "July 05, 2026",
    author: "Dr. Arvind Sinha (MD)",
    summary: "Learn the proper technique to measure blood pressure using standard digital BP devices for accurate readings.",
    content: "Self-monitoring keeps chronic hypertension under check. When measuring, sit comfortably with your back supported, feet flat on the floor, and arm rested at heart level. Remain silent for 5 minutes before tapping the start button. Avoid caffeine or smoking for 30 minutes prior. Repeat thrice and take the average for reliable medical logs to present to your doctor.",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "blog3",
    title: "Essential Summer Care & Dehydration Management for Pets",
    category: "Pet Wellness",
    date: "June 28, 2026",
    author: "Dr. K. P. Singh",
    summary: "Help your dogs and cats beat the intense Bihar heat with simple hydration techniques and symptom alerts.",
    content: "During peak summer in Gaya, temperature averages exceed 40 degrees, causing severe heat exhaustion in furry companions. Symptoms include heavy panting, red gums, and fatigue. Ensure clean, cool drinking water is available in multiple bowls. Mix electrolyte powders (Vimerol or vet-hydration formula) if they look lethargic, and never leave pets in closed unventilated spaces.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600"
  }
];

export const OFFERS_DATA: Offer[] = [
  {
    id: "off1",
    title: "Monsoon Dairy Bulk Discount",
    discount: "Up to 10% Off",
    description: "Get flat 10% discount on bulk purchases of dairy calcium formulas (Ostovet, Cal-up) and livestock mineral mixtures.",
    code: "DAIRYBULK10",
    expiry: "Valid till August 31, 2026"
  },
  {
    id: "off2",
    title: "First WhatsApp Order",
    discount: "Flat 5% Off",
    description: "Submit your healthcare requirements or veterinary prescriptions through our order form today and save instantly.",
    code: "MEDWHATSAPP5",
    expiry: "Ongoing Customer Promotion"
  },
  {
    id: "off3",
    title: "Free BP & Sugar Testing Counter",
    discount: "100% Free",
    description: "Visit our physical store in Tikari on any Sunday between 10 AM to 1 PM for complimentary blood pressure and diabetes screenings.",
    expiry: "Every Sunday Morning"
  }
];
