export interface BlogSection {
  title: string;
  desc: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: {
    id: string;
    en: string;
  };
  category: {
    id: string;
    en: string;
  };
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  image: string;
  foreword: {
    id: string;
    en: string;
  };
  summary: {
    id: string;
    en: string;
  };
  content: {
    id: BlogSection[];
    en: BlogSection[];
  };
}

export const blogsData: BlogPost[] = [
  {
    id: "blog-1",
    slug: "tren-desain-arsitektur-minimalis-2026",

    title: {
      id: "5 Tren Desain Arsitektur Rumah Minimalis Modern Tahun 2026",
      en: "5 Architectural Design Trends for Modern Minimalist Houses in 2026",
    },

    category: {
      id: "Tren Arsitektur",
      en: "Architecture Trends",
    },

    date: "10 Agustus 2026",
    readTime: "5",

    author: "Ir. Hendra Wijaya",
    authorRole: "Principal Architect",

    authorAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",

    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",

    foreword: {
      id: "Perkembangan arsitektur rumah tinggal di tahun 2026 semakin berorientasi pada keberlanjutan dan kenyamanan penghuni. Berikut 5 tren utama yang menjadi prioritas para pemilik hunian modern:",
      en: "The evolution of residential architecture in 2026 is increasingly focused on sustainability and comfort for occupants. Here are the 5 major trends for modern homeowners:",
    },

    summary: {
      id: "Eksplorasi konsep hunian berkelanjutan, integrasi biophilic design, dan penggunaan material lokal berkualitas tinggi yang mendominasi tren arsitektur tahun 2026.",
      en: "Exploring sustainable housing concepts, biophilic design integration, and local high-quality materials dominating 2026 architectural trends.",
    },

    content: {
      id: [
        {
          title: "Biophilic Design & Seamless Outdoor Connection",
          desc: "Memaksimalkan bukaan jendela besar, courtyard tengah rumah, dan taman vertikal yang menyatukan area luar dan dalam tanpa batasan yang kaku.",
        },
        {
          title: "Penggunaan Material Lokal Berkelanjutan",
          desc: "Material seperti batu alam lokal, kayu reclaimed modern, dan bata terakota semakin dipilih karena memiliki jejak karbon yang lebih rendah.",
        },
        {
          title: "Fasad Dinamis & Solar Shading",
          desc: "Penggunaan double-skin facade dan secondary skin geometris membantu menyaring sinar matahari yang berlebihan sekaligus menjaga privasi visual penghuni.",
        },
        {
          title: "Ruang Multifungsi yang Fleksibel",
          desc: "Konsep interior open-plan memungkinkan ruang kerja dari rumah bertransformasi dengan mudah menjadi area keluarga yang luas dan nyaman.",
        },
        {
          title: "Integrasi Sistem Energi Terbarukan",
          desc: "Panel surya terintegrasi pada atap atau Building-Integrated Photovoltaics (BIPV) serta sistem pemanenan air hujan mulai menjadi bagian penting dalam desain hunian modern.",
        },
      ],

      en: [
        {
          title: "Biophilic Design & Seamless Outdoor Connection",
          desc: "Maximizing large window openings, central inner courtyards, and vertical gardens that blur the boundaries between indoor and outdoor living.",
        },
        {
          title: "Use of Sustainable Local Materials",
          desc: "Materials such as local natural stone, modern reclaimed timber, and terracotta bricks are increasingly preferred due to their lower carbon footprint.",
        },
        {
          title: "Dynamic Facades & Solar Shading",
          desc: "Double-skin facades and geometric screening help filter harsh sunlight while maintaining visual privacy for occupants.",
        },
        {
          title: "Multifunctional Flexible Spaces",
          desc: "Open-plan interior designs allow remote workstations to transition effortlessly into spacious and comfortable family living areas.",
        },
        {
          title: "Integrated Renewable Energy Systems",
          desc: "Roof-integrated solar photovoltaics (BIPV) and rainwater harvesting systems are becoming essential components of modern residential design.",
        },
      ],
    },
  },

  {
    id: "blog-2",
    slug: "material-konstruksi-tahan-gempa",

    title: {
      id: "Cara Memilih Material Konstruksi Tahan Gempa untuk Hunian",
      en: "How to Choose Earthquake-Resistant Construction Materials for Residential Buildings",
    },

    category: {
      id: "Teknik & Struktur",
      en: "Engineering & Structure",
    },

    date: "28 Juli 2026",
    readTime: "7",

    author: "Budi Santoso, S.T., M.T.",
    authorRole: "Chief Structural Engineer",

    authorAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",

    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",

    foreword: {
      id: "Indonesia berada di kawasan Ring of Fire yang memiliki risiko aktivitas seismik cukup tinggi. Karena itu, perencanaan struktur dan pemilihan material yang tepat menjadi bagian penting dalam membangun hunian yang lebih aman. Berikut beberapa material dan pendekatan konstruksi yang perlu diperhatikan:",
      en: "Indonesia is located within the Pacific Ring of Fire and faces significant seismic risks. Therefore, proper structural planning and material selection are essential when building safer homes. Here are several materials and construction approaches worth considering:",
    },

    summary: {
      id: "Panduan lengkap memilih beton bertulang mutu tinggi, baja ringan tersertifikasi, dan teknik pondasi fleksibel untuk keamanan bangunan dari risiko gempa bumi.",
      en: "A comprehensive guide to selecting high-strength reinforced concrete, certified light steel, and appropriate foundation techniques for improved earthquake safety.",
    },

    content: {
      id: [
        {
          title: "Beton Bertulang dengan Pembesian Sesuai SNI",
          desc: "Pastikan rasio pembesian dan penggunaan sengkang atau hoop sesuai dengan kebutuhan struktur, terutama pada area sambungan balok dan kolom untuk membantu menahan gaya geser akibat gempa.",
        },
        {
          title: "Penggunaan Rangka Baja Ringan High-Tensile",
          desc: "Baja ringan berkekuatan tarik tinggi seperti G550 dapat membantu mengurangi bobot struktur atap sehingga beban inersia yang bekerja pada bangunan saat terjadi gempa juga dapat diminimalkan.",
        },
        {
          title: "Pondasi Footplate yang Terhubung Tie-Beam",
          desc: "Sistem pondasi yang saling terhubung secara lateral membantu menjaga kestabilan struktur bawah dan mengurangi risiko pergeseran atau penurunan yang tidak seragam.",
        },
        {
          title: "Dinding Bata Ringan AAC",
          desc: "Penggunaan material dinding yang lebih ringan dapat mengurangi beban struktur sekaligus memperkecil potensi bahaya akibat runtuhnya elemen dinding saat terjadi guncangan.",
        },
      ],

      en: [
        {
          title: "Reinforced Concrete Complying with SNI Standards",
          desc: "Proper rebar ratios and suitable stirrup or hoop spacing are essential, especially around beam-column joints, to help structures withstand seismic shear forces.",
        },
        {
          title: "High-Tensile Light Steel Roofing",
          desc: "High-tensile steel such as G550 can reduce roof dead loads, helping minimize the inertia forces acting on a building during an earthquake.",
        },
        {
          title: "Footplate Foundations Connected with Tie-Beams",
          desc: "Horizontally interconnected foundations help maintain the stability of the substructure while reducing the risk of differential movement and uneven settlement.",
        },
        {
          title: "Lightweight AAC Wall Systems",
          desc: "Lightweight wall materials can reduce structural loads and minimize potential hazards caused by wall failures during seismic events.",
        },
      ],
    },
  },

  {
    id: "blog-3",
    slug: "pencahayaan-alami-interior-kantor",

    title: {
      id: "Pentingnya Pencahayaan Alami dalam Desain Interior Kantor",
      en: "The Importance of Natural Lighting in Commercial Office Interior Design",
    },

    category: {
      id: "Desain Interior",
      en: "Interior Design",
    },

    date: "15 Juni 2026",
    readTime: "4",

    author: "Maya Putri, S.Ars",
    authorRole: "Head of Interior Design",

    authorAvatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",

    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",

    foreword: {
      id: "Pencahayaan alami bukan sekadar elemen estetika, melainkan investasi strategis bagi produktivitas dan efisiensi operasional kantor modern. Dengan perencanaan daylighting yang tepat, ruang kerja dapat menjadi lebih nyaman sekaligus hemat energi. Berikut beberapa manfaat utamanya:",
      en: "Natural lighting is more than an aesthetic element; it is a strategic investment in the productivity and operational efficiency of modern offices. With proper daylighting design, workspaces can become more comfortable while reducing energy consumption. Here are some of its key benefits:",
    },

    summary: {
      id: "Bagaimana perencanaan daylighting yang optimal dapat meningkatkan produktivitas karyawan hingga 20% dan menekan biaya listrik operasional gedung.",
      en: "How optimized daylighting design can improve employee productivity by up to 20% while reducing building electricity costs.",
    },

    content: {
      id: [
        {
          title: "Meningkatkan Fokus & Kesehatan Karyawan",
          desc: "Paparan cahaya alami membantu mendukung ritme sirkadian tubuh, mengurangi ketegangan mata, dan menciptakan lingkungan kerja yang lebih nyaman sehingga dapat membantu meningkatkan fokus.",
        },
        {
          title: "Efisiensi Energi Hingga 30%",
          desc: "Memaksimalkan penggunaan jendela perimeter, skylight, dan partisi kaca bening dapat mengurangi ketergantungan terhadap pencahayaan buatan selama siang hari.",
        },
        {
          title: "Strategi Daylighting NusaBuild",
          desc: "NusaBuild menerapkan light shelf, kaca dengan lapisan Low-E, serta sensor pencahayaan otomatis yang dapat menyesuaikan tingkat kecerahan lampu berdasarkan intensitas cahaya alami dari luar.",
        },
      ],

      en: [
        {
          title: "Boosts Focus & Employee Wellness",
          desc: "Natural daylight supports the body's circadian rhythm, helps reduce eyestrain, and creates a more comfortable working environment that can improve focus.",
        },
        {
          title: "Energy Savings of Up to 30%",
          desc: "Maximizing perimeter windows, skylights, and clear glass partitions can reduce dependence on artificial lighting during daylight hours.",
        },
        {
          title: "NusaBuild Daylighting Strategies",
          desc: "NusaBuild implements light shelves, Low-E glass coatings, and automated daylight sensors that adjust lighting levels based on the intensity of natural outdoor light.",
        },
      ],
    },
  },

  {
    id: "blog-4",
    slug: "teknologi-smart-building-efisiensi-energi",

    title: {
      id: "Teknologi Smart Building untuk Efisiensi Energi Konstruksi",
      en: "Smart Building Technology for Construction Energy Efficiency",
    },

    category: {
      id: "Inovasi & Teknologi",
      en: "Innovation & Tech",
    },

    date: "02 Mei 2026",
    readTime: "6",

    author: "Deni Pratama",
    authorRole: "Smart Systems Specialist",

    authorAvatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",

    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",

    foreword: {
      id: "Perkembangan Internet of Things (IoT) mengubah cara kita merancang dan mengelola gedung modern. Integrasi sensor, sistem otomatisasi, dan kecerdasan buatan memungkinkan berbagai sistem bangunan bekerja lebih efisien dan responsif. Berikut beberapa teknologi utama yang dapat diterapkan:",
      en: "The advancement of the Internet of Things (IoT) is changing how modern buildings are designed and managed. Integrating sensors, automation systems, and artificial intelligence allows building systems to operate more efficiently and responsively. Here are several key technologies that can be implemented:",
    },

    summary: {
      id: "Penerapan BMS (Building Management System), sensor IoT, dan AI HVAC yang mengoptimalkan konsumsi daya gedung perkantoran secara otomatis.",
      en: "Implementation of BMS (Building Management Systems), IoT sensors, and AI-powered HVAC systems to optimize office building energy consumption.",
    },

    content: {
      id: [
        {
          title: "BMS Terintegrasi",
          desc: "Building Management System memungkinkan pengelolaan HVAC, pencahayaan, serta sistem keamanan melalui satu dashboard terpusat sehingga proses monitoring dan pengendalian gedung menjadi lebih efisien.",
        },
        {
          title: "AI Adaptive Climate Control",
          desc: "Sensor suhu dan okupansi dapat digunakan untuk menyesuaikan sistem pendingin udara secara otomatis berdasarkan jumlah orang dan kondisi ruangan.",
        },
        {
          title: "Pemeliharaan Prediktif",
          desc: "Sistem monitoring dapat membantu mendeteksi tanda-tanda awal seperti kebocoran atau penurunan performa peralatan sebelum berkembang menjadi kerusakan yang lebih serius.",
        },
      ],

      en: [
        {
          title: "Integrated Building Management Systems",
          desc: "Building Management Systems allow HVAC, lighting, and security systems to be managed through a centralized dashboard, making building monitoring and control more efficient.",
        },
        {
          title: "AI Adaptive Climate Control",
          desc: "Temperature and occupancy sensors can automatically adjust HVAC systems based on the number of occupants and the current conditions of the space.",
        },
        {
          title: "Predictive Maintenance",
          desc: "Monitoring systems can detect early signs such as leaks or declining equipment performance before they develop into more serious failures.",
        },
      ],
    },
  },
];
