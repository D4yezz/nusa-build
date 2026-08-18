export interface ServiceItem {
  id: string;
  iconName: "Building2" | "Compass" | "Wrench" | "ShieldCheck";
  title: { id: string; en: string };
  shortDesc: { id: string; en: string };
  fullDesc: { id: string; en: string };
  features: { id: string[]; en: string[] };
  image: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "commercial-construction",
    iconName: "Building2",
    title: {
      id: "Konstruksi Komersial",
      en: "Commercial Construction",
    },
    shortDesc: {
      id: "Pembangunan gedung perkantoran, ruko, hotel, dan pusat perbelanjaan berstandar Grade-A.",
      en: "Construction of office towers, shophouses, hotels, and Grade-A shopping centers.",
    },
    fullDesc: {
      id: "Solusi lengkap konstruksi gedung komersial dari tahap fondasi hingga penyelesaian fasad exterior. Kami menjamin efisiensi struktur, standar keamanan ISO, dan kepatuhan penuh terhadap regulasi zonasi daerah.",
      en: "Complete commercial building construction solutions from foundation phase to exterior facade completion. We guarantee structural efficiency, ISO safety standards, and strict zoning compliance.",
    },
    features: {
      id: [
        "Gedung Perkantoran & HQ",
        "Pusat Perbelanjaan & Retail",
        "Hotel & Resor Komersial",
        "Ruko & Ruang Usaha Modern",
      ],
      en: [
        "Office Buildings & Headquarters",
        "Shopping & Retail Centers",
        "Hotels & Commercial Resorts",
        "Shophouses & Modern Business Spaces",
      ],
    },
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "architecture-interior",
    iconName: "Compass",
    title: {
      id: "Jasa Arsitektur & Interior",
      en: "Architecture & Interior Design",
    },
    shortDesc: {
      id: "Perancangan tata ruang, 3D photorealistic rendering, dan desain interior eksklusif.",
      en: "Space planning, 3D photorealistic rendering, and exclusive custom interior design.",
    },
    fullDesc: {
      id: "Tim arsitek dan desainer interior kami menggabungkan nilai estetika kontemporer dengan fungsionalitas ruang yang optimal. Kami menyediakan konsep 3D interaktif dan detail gambar kerja komprehensif.",
      en: "Our team of architects and interior designers combine contemporary aesthetics with optimal spatial functionality, providing interactive 3D concepts and comprehensive technical drawings.",
    },
    features: {
      id: [
        "Konsep Arsitektur 3D Render",
        "Desain Tata Ruang Interior",
        "Pemilihan Material & Moodboard",
        "Lighting & Acoustic Design",
      ],
      en: [
        "3D Render Architectural Concepts",
        "Interior Layout & Space Planning",
        "Material & Moodboard Selection",
        "Lighting & Acoustic Design",
      ],
    },
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "renovation-restructuring",
    iconName: "Wrench",
    title: {
      id: "Renovasi & Restrukturisasi",
      en: "Renovation & Restructuring",
    },
    shortDesc: {
      id: "Peningkatan kualitas & penguatan struktur bangunan lama dengan sentuhan modern.",
      en: "Upgrading quality & strengthening old building structures with modern finishes.",
    },
    fullDesc: {
      id: "Mengubah wujud dan meningkatkan daya tahan bangunan lama tanpa mengabaikan aspek keselamatan. Kami menangani perbaikan struktur anti-gempa, peninggian lantai, serta remodelling fasad modern.",
      en: "Transforming appearance and enhancing durability of legacy structures without compromising safety. Handling seismic retrofitting, floor additions, and modern facade remodelling.",
    },
    features: {
      id: [
        "Penguatan Struktur Anti-Gempa",
        "Remodelling Fasad & Exterior",
        "Penambahan Lantai & Perluasan",
        "Retrofitting Material Modern",
      ],
      en: [
        "Seismic Structural Retrofitting",
        "Exterior & Facade Remodelling",
        "Floor Addition & Expansion",
        "Modern Material Upgrades",
      ],
    },
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "project-management",
    iconName: "ShieldCheck",
    title: {
      id: "Manajemen & Pengawasan Proyek",
      en: "Project Management & Supervision",
    },
    shortDesc: {
      id: "Pengawasan independen, kontrol kualitas K3LH, dan manajemen anggaran RAB secara ketat.",
      en: "Independent site supervision, HSE quality control, and rigorous BOQ budget management.",
    },
    fullDesc: {
      id: "Layanan manajemen proyek terpadu untuk memastikan proyek konstruksi Anda berjalan tepat waktu, sesuai spesifikasi teknis, serta hemat biaya tanpa mengorbankan kualitas material.",
      en: "Integrated project management services ensuring your construction project stays on schedule, meets technical specs, and remains cost-effective without sacrificing quality.",
    },
    features: {
      id: [
        "Supervisi Kualitas Konstruksi",
        "Audit Anggaran RAB & Material",
        "Manajemen Keselamatan K3LH",
        "Laporan Kemajuan Proyek Real-time",
      ],
      en: [
        "Construction Quality Supervision",
        "BOQ & Material Budget Audit",
        "HSE Safety Management",
        "Real-Time Project Progress Reports",
      ],
    },
    image:
      "https://images.unsplash.com/photo-1608303588026-884930af2559?auto=format&fit=crop&w=1000&q=80",
  },
];
