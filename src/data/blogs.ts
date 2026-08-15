export interface BlogPost {
  id: string;
  slug: string;
  title: { id: string; en: string };
  category: { id: string; en: string };
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  image: string;
  summary: { id: string; en: string };
  content: { id: string; en: string };
}

export const blogsData: BlogPost[] = [
  {
    id: "blog-1",
    slug: "tren-desain-arsitektur-minimalis-2026",
    title: {
      id: "5 Tren Desain Arsitektur Rumah Minimalis Modern Tahun 2026",
      en: "5 Architectural Design Trends for Modern Minimalist Houses in 2026"
    },
    category: { id: "Tren Arsitektur", en: "Architecture Trends" },
    date: "10 Agustus 2026",
    readTime: "5",
    author: "Ir. Hendra Wijaya",
    authorRole: "Principal Architect",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    summary: {
      id: "Eksplorasi konsep hunian berkelanjutan, integrasi biophilic design, dan penggunaan material lokal berkualitas tinggi yang mendominasi tren arsitektur tahun 2026.",
      en: "Exploring sustainable housing concepts, biophilic design integration, and local high-quality materials dominating 2026 architectural trends."
    },
    content: {
      id: `Perkembangan arsitektur rumah tinggal di tahun 2026 semakin berorientasi pada keberlanjutan dan kenyamanan penghuni. Berikut 5 tren utama yang menjadi prioritas para pemilik hunian modern:

1. **Biophilic Design & Seamless Outdoor Connection**
Memaksimalkan bukaan jendela besar, courtyard tengah rumah, dan taman vertikal yang menyatukan area luar dan dalam tanpa batasan yang kaku.

2. **Penggunaan Material Lokal Berkelanjutan**
Material seperti batu alam lokal, kayu reklamasi yang diolah modern, serta batu bata terakota semakin diminati karena jejak karbon yang lebih rendah.

3. **Fasad Dinamis & Solar Shading**
Desain fasad ganda (double-skin facade) atau roster beton geometris yang berfungsi menyaring panas sinar matahari sekaligus memberikan privasi visual.

4. **Kombinasi Ruang Fleksibel (Multifunctional Spaces)**
Desain interior tanpa sekat mati yang mudah dialihfungsikan dari area kerja WFH menjadi ruang keluarga yang lapang.

5. **Integrasi Energi Terbarukan Sejak Awal Perancangan**
Pemasangan panel surya atap terintegrasi (BIPV) dan sistem pemanenan air hujan menjadi standar wajib arsitektur masa kini.`,
      en: `The evolution of residential architecture in 2026 focuses heavily on sustainability and occupant comfort. Here are the 5 major trends:

1. **Biophilic Design & Seamless Outdoor Connection**
Maximizing large window openings, central inner courtyards, and vertical gardens that blur the boundaries between indoor and outdoor living.

2. **Use of Sustainable Local Materials**
Materials such as local natural stone, modern reclaimed timber, and terracotta bricks are increasingly preferred due to their low carbon footprint.

3. **Dynamic Facades & Solar Shading**
Double-skin facades and geometric concrete screening that filter harsh sunlight while maintaining visual privacy.

4. **Multifunctional Flexible Spaces**
Open-plan interior designs that effortlessly transition from remote work stations into spacious family living areas.

5. **Integrated Renewable Energy Systems**
Roof-integrated solar photovoltaics (BIPV) and rainwater harvesting setups are becoming essential design baselines.`
    }
  },
  {
    id: "blog-2",
    slug: "material-konstruksi-tahan-gempa",
    title: {
      id: "Cara Memilih Material Konstruksi Tahan Gempa untuk Hunian",
      en: "How to Choose Earthquake-Resistant Construction Materials for Residential Building"
    },
    category: { id: "Teknik & Struktur", en: "Engineering & Structure" },
    date: "28 Juli 2026",
    readTime: "7",
    author: "Budi Santoso, S.T., M.T.",
    authorRole: "Chief Structural Engineer",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80",
    summary: {
      id: "Panduan lengkap memilih beton bertulang mutu tinggi, baja ringan tersertifikasi, dan teknik pondasi fleksibel untuk keamanan bangunan dari risiko gempa bumi.",
      en: "Comprehensive guide to selecting high-strength reinforced concrete, certified light steel, and flexible foundation techniques for earthquake safety."
    },
    content: {
      id: `Indonesia berada di kawasan Ring of Fire yang rawan getaran seismik. Perencanaan struktur dan pemilihan material yang tepat adalah kunci utama keselamatan bangunan:

1. **Beton Bertulang dengan Pembesian Sesuai SNI**
Pastikan rasio pembesian dan penggunaan sengkang (tie/hoop) rapat pada area sambungan balok-kolom untuk menahan gaya geser seismik.

2. **Penggunaan Rangka Baja Ringan High-Tensile**
Baja ringan berkekuatan tarik tinggi (G550) memberikan bobot atap yang lebih ringan sehingga mengurangi beban inersia saat terjadi guncangan gempa.

3. **Pondasi Footplate & Cakar Ayam Terikat Tie-Beam**
Sistem pondasi yang terhubung kuat secara lateral mencegah pergeseran parsial struktur bawah tanah.

4. **Dinding Bata Ringan (AAC) / Panel Sandwich**
Material dinding yang lebih ringan memperkecil potensi bahaya reruntuhan dibanding bata merah pekat standar.`,
      en: `Located in the Pacific Ring of Fire, proper structural planning and material selection are vital to building safety in Indonesia:

1. **Reinforced Concrete Complying with SNI Standards**
Ensure proper rebar ratios and dense stirrups/hoops at beam-column joints to withstand seismic shear forces.

2. **High-Tensile Light Steel Roofing**
High-tensile steel (G550) minimizes roof dead loads, thereby significantly reducing inertia forces during seismic tremors.

3. **Footplate & Tie-Beam Interconnected Foundations**
Foundations tied rigidly together horizontally prevent differential settlement and lateral shifting.

4. **Autoclaved Aerated Concrete (AAC) Masonry**
Lightweight wall materials dramatically reduce structural inertia and falling hazards compared to heavy traditional bricks.`
    }
  },
  {
    id: "blog-3",
    slug: "pencahayaan-alami-interior-kantor",
    title: {
      id: "Pentingnya Pencahayaan Alami dalam Desain Interior Kantor",
      en: "The Importance of Natural Lighting in Commercial Office Interior Design"
    },
    category: { id: "Desain Interior", en: "Interior Design" },
    date: "15 Juni 2026",
    readTime: "4",
    author: "Maya Putri, S.Ars",
    authorRole: "Head of Interior Design",
    authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    summary: {
      id: "Bagaimana perencanaan daylighting yang optimal dapat meningkatkan produktivitas karyawan hingga 20% dan menekan biaya listrik operasional gedung.",
      en: "How daylighting design can boost employee productivity by up to 20% while slashing operational electrical costs."
    },
    content: {
      id: `Pencahayaan alami bukan sekadar elemen estetika, melainkan investasi strategis bagi produktivitas dan efisiensi operasional kantor modern:

- **Meningkatkan Fokus & Kesehatan Karyawan**: Sinar matahari alami meregulasi ritme sirkadian tubuh, mengurangi kelelahan mata, dan meningkatkan fokus kerja.
- **Efisiensi Energi Hingga 30%**: Memaksimalkan jendela perimeter, skylight, dan partisi kaca bening mengurangi ketergantungan pada lampu buatan di siang hari.
- **Strategi Daylighting NusaBuild**: Kami menerapkan light shelf, kaca berlapisan Low-E, serta sensor otomatis yang menyesuaikan kecerahan lampu sesuai intensitas cuaca luar.`,
      en: `Natural lighting is more than an aesthetic element—it is a strategic investment in workspace productivity and operational efficiency:

- **Boosts Focus & Wellness**: Natural daylight regulates circadian rhythms, mitigates eyestrain, and enhances overall focus.
- **Energy Savings Up to 30%**: Perimeter windows, skylights, and clear glass partitions minimize daylight artificial lighting dependencies.
- **NusaBuild Daylighting Strategies**: We implement light shelves, Low-E glass coatings, and automated daylight sensors that dynamically adjust ambient lighting.`
    }
  },
  {
    id: "blog-4",
    slug: "teknologi-smart-building-efisiensi-energi",
    title: {
      id: "Teknologi Smart Building untuk Efisiensi Energi Konstruksi",
      en: "Smart Building Technology for Construction Energy Efficiency"
    },
    category: { id: "Inovasi & Teknologi", en: "Innovation & Tech" },
    date: "02 Mei 2026",
    readTime: "6",
    author: "Deni Pratama",
    authorRole: "Smart Systems Specialist",
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    summary: {
      id: "Penerapan BMS (Building Management System), sensor IoT, dan AI HVAC yang mengoptimalkan konsumsi daya gedung perkantoran secara otomatis.",
      en: "Implementation of BMS (Building Management System), IoT sensors, and AI HVAC optimizing building power consumption."
    },
    content: {
      id: `Perkembangan Internet of Things (IoT) mengubah cara kita mengelola gedung modern:

- **BMS Terintegrasi**: Mengontrol HVAC, tata lampu, dan sistem keamanan dari satu dashboard terpusat.
- **AI Adaptive Climate Control**: Sensor suhu & okupansi mengatur pendingin udara otomatis sesuai jumlah orang dalam ruangan.
- **Pemeliharaan Prediktif**: Deteksi dini kebocoran atau penurunan performa lift sebelum terjadi kerusakan fatal.`,
      en: `The advancement of IoT has revolutionized how modern commercial buildings operate:

- **Integrated BMS**: Manages HVAC, lighting networks, and security from a single centralized dashboard.
- **AI Adaptive Climate Control**: Temperature and occupancy sensors adjust cooling power dynamically based on room usage.
- **Predictive Maintenance**: Early detection of leaks or elevator performance drops before critical failures occur.`
    }
  }
];
