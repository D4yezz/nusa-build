export interface ProjectItem {
  id: string;
  title: string;
  category: "commercial" | "residential" | "interior";
  categoryName: { id: string; en: string };
  year: string;
  location: string;
  area: string;
  duration: string;
  image: string;
  gallery: string[];
  description: { id: string; en: string };
  specs: { id: string; en: string }[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "nusa-tower-jakarta",
    title: "Nusa Tower Jakarta",
    category: "commercial",
    categoryName: { id: "Komersial", en: "Commercial" },
    year: "2024",
    location: "Kuningan, Jakarta Selatan",
    area: "24,500 m² (28 Lantai)",
    duration: "18 Bulan",
    image:
      "https://images.unsplash.com/photo-1541447271487-09612b3f49f7?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    ],
    description: {
      id: "Pembangunan gedung pencakar langit perkantoran modern berkonsep Green Building Grade-A di kawasan CBD Jakarta. Dilengkapi fasad kaca ganda tahan panas dan sistem otomasi pintar.",
      en: "Construction of a modern Grade-A Green Building office skyscraper in Jakarta's CBD. Features heat-insulated double glass facade and smart automation system.",
    },
    specs: [
      {
        id: "Struktur: Beton Bertulang Mutu Tinggi (K-600) & Steel Frame",
        en: "Structure: High-Strength Reinforced Concrete (K-600) & Steel Frame",
      },
      {
        id: "Sertifikasi: Greenship Platinum GBCI",
        en: "Certification: Greenship Platinum GBCI",
      },
      {
        id: "Fasilitas: Helipad, Double Deck Elevator, Underground Parking 400 Mobil",
        en: "Facilities: Helipad, Double Deck Elevator, Underground Parking 400 Cars",
      },
    ],
  },
  {
    id: "villa-minimalis-bali",
    title: "Villa Minimalis Canggu",
    category: "residential",
    categoryName: { id: "Residensial", en: "Residential" },
    year: "2023",
    location: "Canggu, Badung, Bali",
    area: "850 m²",
    duration: "8 Bulan",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
    description: {
      id: "Hunian resor mewah tropis dengan gaya arsitektur minimalis modern. Memadukan material batu alam lokal Bali, kayu Ulin Kalimantan, dan infinity pool menghadap pemandangan sawah.",
      en: "Luxury tropical resort residence with modern minimalist architecture. Blending local Bali natural stone, Kalimantan Ulin wood, and an infinity pool overlooking rice fields.",
    },
    specs: [
      {
        id: "Struktur: Pondasi Footplate Anti Gempa & Rangka Baja Ringan Premium",
        en: "Structure: Earthquake Resistant Footplate Foundation & Premium Light Steel Frame",
      },
      {
        id: "Material: Kayu Ulin Kalimantan, Batu Paras Jogja, Kaca Low-E",
        en: "Materials: Kalimantan Ulin Wood, Jogja Paras Stone, Low-E Glass",
      },
      {
        id: "Fitur: Smart Home Automation, Solar Panel 10kW, Natural Ventilation System",
        en: "Features: Smart Home Automation, Solar Panel 10kW, Natural Ventilation System",
      },
    ],
  },
  {
    id: "hq-creative-studio",
    title: "HQ Creative Studio",
    category: "interior",
    categoryName: { id: "Interior", en: "Interior" },
    year: "2024",
    location: "BSD City, Tangerang Selatan",
    area: "1,200 m²",
    duration: "4 Bulan",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    ],
    description: {
      id: "Desain interior kantor bernuansa industrial biophilic modern. Dilengkapi area kolaborasi fleksibel, amphitheater mini untuk presentasi, dan sistem peredam akustik tinggi.",
      en: "Biophilic modern industrial office interior design. Equipped with flexible collaboration areas, a mini presentation amphitheater, and high acoustic dampening systems.",
    },
    specs: [
      {
        id: "Gaya: Industrial Biophilic & Warm Modern Wood Accent",
        en: "Style: Industrial Biophilic & Warm Modern Wood Accent",
      },
      {
        id: "Akustik: Soundproofing Panel NRC 0.85 di Seluruh Ruang Rapat",
        en: "Acoustics: Soundproofing Panel NRC 0.85 in All Meeting Rooms",
      },
      {
        id: "Pencahayaan: Custom Architectural Linear LED (CRI > 90)",
        en: "Lighting: Custom Architectural Linear LED (CRI > 90)",
      },
    ],
  },
  {
    id: "grand-horizon-hotel",
    title: "Grand Horizon Plaza",
    category: "commercial",
    categoryName: { id: "Komersial", en: "Commercial" },
    year: "2023",
    location: "Surabaya Pusat",
    area: "18,000 m²",
    duration: "14 Bulan",
    image:
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    ],
    description: {
      id: "Pusat perbelanjaan dan plaza gaya hidup bernuansa kontemporer dengan atrium kaca tembus pandang yang memberikan pencahayaan alami maksimal.",
      en: "Contemporary lifestyle plaza and shopping center featuring a transparent glass atrium providing maximum natural illumination.",
    },
    specs: [
      {
        id: "Fasad: Aluminum Composite Panel (ACP) High-Grade & Curved Tempered Glass",
        en: "Facade: High-Grade Aluminum Composite Panel (ACP) & Curved Tempered Glass",
      },
      {
        id: "Struktur: Column-Free Atrium Span 24 meter",
        en: "Structure: Column-Free Atrium Span 24 meters",
      },
    ],
  },
  {
    id: "eco-residence-sanctuary",
    title: "Eco Sanctuary Residence",
    category: "residential",
    categoryName: { id: "Residensial", en: "Residential" },
    year: "2024",
    location: "Dago Pakar, Bandung",
    area: "620 m²",
    duration: "7 Bulan",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    ],
    description: {
      id: "Rumah privat ramah lingkungan yang memanfaatkan kontur lereng perbukitan Dago. Mengutamakan pemanenan air hujan dan efisiensi sirkulasi udara alami.",
      en: "Eco-friendly private house built on hillside contour of Dago. Emphasizing rainwater harvesting and natural airflow efficiency.",
    },
    specs: [
      {
        id: "Struktur: Bored Pile & Cantilever Slab",
        en: "Structure: Bored Pile & Cantilever Slab",
      },
      {
        id: "Keberlanjutan: Rainwater Harvesting System 5.000L & Solar PV 8kW",
        en: "Sustainability: Rainwater Harvesting System 5,000L & Solar PV 8kW",
      },
    ],
  },
  {
    id: "skyline-financial-hub",
    title: "Skyline Executive Lounge",
    category: "interior",
    categoryName: { id: "Interior", en: "Interior" },
    year: "2024",
    location: "SCBD, Jakarta",
    area: "950 m²",
    duration: "3.5 Bulan",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80",
    ],
    description: {
      id: "Desain interior lounge eksekutif dan ruang pertemuan perbankan privat berkelas ultra-premium dengan marmer Carrara Italia dan veneer kayu Walnut.",
      en: "Ultra-premium executive lounge and private banking suite interior design featuring Italian Carrara marble and Walnut wood veneer.",
    },
    specs: [
      {
        id: "Material: Marmer Italian Calacatta Gold & Natural Walnut Veneer",
        en: "Materials: Italian Calacatta Gold Marble & Natural Walnut Veneer",
      },
      {
        id: "Pencahayaan: DALI Dimming System with Preset Scene Control",
        en: "Lighting: DALI Dimming System with Preset Scene Control",
      },
    ],
  },
];
