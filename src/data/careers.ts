export interface JobPosition {
  id: string;
  title: string;
  type: string;
  location: string;
  department: string;
  requirements: { id: string[]; en: string[] };
  description: { id: string; en: string };
}

export const careersData: JobPosition[] = [
  {
    id: "senior-civil-engineer",
    title: "Senior Civil Engineer",
    type: "Full-time",
    location: "Jakarta",
    department: "Engineering & Structure",
    description: {
      id: "Memimpin perancangan struktur, perhitungan mekanika tanah, dan pengawasan teknis konstruksi gedung bertingkat.",
      en: "Lead structural design, soil mechanics calculations, and technical supervision of high-rise building construction."
    },
    requirements: {
      id: [
        "Pendidikan min. S1 Teknik Sipil dari universitas terkemuka.",
        "Pengalaman minimal 5-7 tahun di proyek konstruksi komersial bertingkat.",
        "Memiliki Sertifikat Keahlian (SKA) Ahli Muda/Madya Struktur.",
        "Mahir mengoperasikan SAP2000, ETABS, AutoCAD, dan BIM Revit Structure."
      ],
      en: [
        "Bachelor's degree in Civil Engineering from a reputable university.",
        "Minimum 5-7 years experience in commercial high-rise construction.",
        "Possess Professional Certified Engineer Certificate (SKA) in Structures.",
        "Proficient in SAP2000, ETABS, AutoCAD, and BIM Revit Structure."
      ]
    }
  },
  {
    id: "3d-architectural-visualizer",
    title: "3D Architectural Visualizer",
    type: "Hybrid",
    location: "Surabaya",
    department: "Architecture & Design",
    description: {
      id: "Bertanggung jawab membuat rendering 3D photorealistic, animasi walk-through arsitektur, dan visualisasi materi presentasi klien.",
      en: "Responsible for creating photorealistic 3D renderings, architectural walk-through animations, and client presentation visuals."
    },
    requirements: {
      id: [
        "Pendidikan S1/D3 Arsitektur, Desain Interior, atau Desain Komunikasi Visual.",
        "Pengalaman min. 3 tahun dalam bidang visualisasi arsitektur 3D.",
        "Menguasai 3ds Max + V-Ray / Corona Renderer, Unreal Engine, Blender, Photoshop.",
        "Memiliki portofolio rendering arsitektur exterior & interior berkualitas tinggi."
      ],
      en: [
        "Bachelor's or Diploma in Architecture, Interior Design, or Visual Communication.",
        "Minimum 3 years experience in 3D architectural visualization.",
        "Mastery of 3ds Max + V-Ray / Corona Renderer, Unreal Engine, Blender, Photoshop.",
        "Possess a portfolio of high-end exterior & interior 3D renderings."
      ]
    }
  },
  {
    id: "site-project-manager",
    title: "Site Project Manager",
    type: "Full-time",
    location: "Bandung",
    department: "Project Management",
    description: {
      id: "Mengkoordinasikan tim lapangan, mengontrol alokasi anggaran & bahan baku, serta menjamin ketepatan waktu serah terima proyek.",
      en: "Coordinate site teams, control budget allocations & materials, and ensure timely project handovers."
    },
    requirements: {
      id: [
        "S1 Teknik Sipil / Arsitektur.",
        "Pengalaman 5+ tahun sebagai Project Manager / Site Manager.",
        "Memahami manajemen K3LH dan estimasi RAB secara mendalam.",
        "Kemampuan komunikasi dan kepemimpinan yang tangguh."
      ],
      en: [
        "Bachelor's degree in Civil Engineering / Architecture.",
        "5+ years experience as Project Manager / Site Manager.",
        "Deep understanding of HSE management and BOQ estimations.",
        "Strong communication and site leadership abilities."
      ]
    }
  },
  {
    id: "interior-designer",
    title: "Senior Interior Designer",
    type: "Full-time",
    location: "Jakarta",
    department: "Interior Design",
    description: {
      id: "Merancang tata ruang interior hunian mewah & komersial, memilih moodboard material, serta berkolaborasi dengan tukang spesialis.",
      en: "Design luxury residential & commercial interiors, curate material moodboards, and collaborate with specialized craftsmen."
    },
    requirements: {
      id: [
        "S1 Desain Interior / Arsitektur.",
        "Pengalaman 4+ tahun merancang interior kantor & rumah mewah.",
        "Keahlian dalam SketchUp, AutoCAD, Enscape, Photoshop.",
        "Memahami pengetahuan material interior modern & lighting design."
      ],
      en: [
        "Bachelor's degree in Interior Design / Architecture.",
        "4+ years experience designing office & luxury residential interiors.",
        "Proficient in SketchUp, AutoCAD, Enscape, Photoshop.",
        "In-depth knowledge of modern interior materials & lighting design."
      ]
    }
  }
];
