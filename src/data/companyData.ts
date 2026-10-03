export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  benefits: string[];
  targetUsers: string[];
  badge: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  overview: string;
  scope: string[];
  benefits: string[];
  process: { step: string; desc: string }[];
  deliverables: string[];
}

export interface Solution {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  targetSector: string;
  challenges: string[];
  approach: string;
  results: string[];
  keyFeatures: string[];
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: 'pendidikan' | 'perusahaan' | 'pemerintahan' | 'umkm';
  categoryLabel: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string[];
  tags: string[];
}

export interface InsightItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
  };
  tags: string[];
}

export const COMPANY_INFO = {
  name: "PT AMANI",
  legalName: "PT Amani Teknokrat Nusantara",
  tagline: "Mitra Transformasi Teknologi Informasi & Keamanan Siber Terpercaya",
  description: "PT AMANI adalah perusahaan teknologi informasi nasional yang berfokus pada penyediaan infrastruktur jaringan handal, pengembangan perangkat lunak terintegrasi, dan perlindungan keamanan siber untuk sektor pendidikan, korporasi, pemerintah, serta UMKM.",
  phone: "+62 812 3456 7890",
  whatsappNumber: "6281234567890",
  email: "kontak@amani.co.id",
  address: "Gedung AMANI Tower Lt. 8, Jl. TB Simatupang No. 42, Jakarta Selatan, 12430",
  stats: [
    { label: "Proyek Selesai", value: 180, suffix: "+" },
    { label: "Klien Aktif", value: 65, suffix: "+" },
    { label: "Uptime Jaringan", value: 99.9, suffix: "%" },
    { label: "Tim Spesialis", value: 45, suffix: " Ahli" },
  ],
  certifications: [
    "ISO/IEC 27001:2013 - Information Security Management",
    "ISO 9001:2015 - Quality Management System",
    "Mitra Resmi Terdaftar Kemenkominfo RI",
    "Sertifikasi Badan Siber dan Sandi Negara (BSSN)"
  ],
  leadership: [
    {
      name: "Drs. Rian Hidayat, M.T.",
      role: "Direktur Utama",
      bio: "Pengalaman 18 tahun dalam tata kelola TI nasional dan arsitektur infrastruktur awan skala besar."
    },
    {
      name: "Siti Rahmawati, S.Kom., M.Sc.",
      role: "Direktur Teknologi (CTO)",
      bio: "Pakar rekayasa perangkat lunak dan keandalan sistem berbasis kecerdasan buatan."
    },
    {
      name: "Budi Santoso, CEH, CISSP",
      role: "VP Cyber Security",
      bio: "Praktisi pengujian penetrasi siber dan konsultan keamanan informasi kementerian."
    }
  ]
};

export const PRODUCTS_DATA: Product[] = [
  {
    id: "sis-1",
    slug: "sistem-informasi-sekolah",
    name: "AmaniEdu - Sistem Informasi Sekolah",
    tagline: "Digitalisasi Tata Kelola Akademia & Operasional Sekolah Terintegrasi",
    shortDesc: "Platform manajemen sekolah pintar modern yang mengintegrasikan administrasi siswa, presensi biometric, penilaian kurikulum merdeka, pembayaran SPP gateway, hingga portal orang tua.",
    fullDesc: "AmaniEdu dirancang khusus untuk memodernisasi pengelolaan lembaga pendidikan dari jenjang dasar hingga menengah tinggi. Mampu menangani beban data besar dengan sistem keamanan berlapis, AmaniEdu mempercepat alur kerja staf sekolah dan transparansi akademis bagi orang tua.",
    features: [
      "Portal Siswa & Orang Tua Real-time",
      "Modul Penilaian Auto-Kalkulasi Kurikulum Merdeka",
      "Integrasi Payment Gateway SPP & Biaya Sekolah",
      "Presensi Geolocation & Face Recognition",
      "Laporan Rekapitulasi Rapor Digital PDF Instant"
    ],
    benefits: [
      "Menghemat waktu administrasi guru hingga 60%",
      "Transparansi keuangan dan tunggakan sekolah secara otomatis",
      "Mencegah kecurangan presensi siswa dan tenaga pendidik",
      "Akses mudah lewat aplikasi mobile Android & iOS"
    ],
    targetUsers: ["Sekolah Menengah (SMP/SMA/SMK)", "Yayasan Pendidikan", "Pesantren Modern", "Perguruan Tinggi"],
    badge: "Solusi Pendidikan"
  },
  {
    id: "saas-pm",
    slug: "saas-project-management",
    name: "AmaniTask - SaaS Project Management",
    tagline: "Kolaborasi Tim, Pantau Proyek & Anggaran Tanpa Hambatan",
    shortDesc: "Aplikasi manajemen proyek terpusat berbasis cloud dengan papan Kanban, Diagram Gantt interaktif, alokasi beban kerja tim, dan pelaporan biaya proyek secara akurat.",
    fullDesc: "AmaniTask diciptakan untuk perusahaan yang membutuhkan visibilitas penuh atas eksekusi proyek teknis dan bisnis. Dilengkapi pelacakan waktu (time-tracking), approval workflow, dan repositori dokumen aman.",
    features: [
      "Interaktif Gantt Chart & Milestone Tracking",
      "Alokasi Resource & Kapasitas Kerja Tim",
      "Manajemen Anggaran Proyek & Realisasi Biaya",
      "Integrasi Dokumen & Versi Berkas Aman",
      "Notifikasi Pengingat Deadline via Email & WhatsApp"
    ],
    benefits: [
      "Memastikan proyek selesai tepat waktu dan sesuai anggaran",
      "Eliminasi kendala komunikasi antar departemen",
      "Analisis produktivitas tim berdasarkan data aktual",
      "Skalabilitas cloud tanpa perlu mengelola server sendiri"
    ],
    targetUsers: ["Perusahaan Konstruksi & Engineering", "Agensi Kreatif & IT", "Departemen PMO Korporasi"],
    badge: "Produk Unggulan SaaS"
  },
  {
    id: "app-survei",
    slug: "aplikasi-survei",
    name: "AmaniPulse - Aplikasi Survei & Analisis Opini",
    tagline: "Pengumpulan Data Lapangan & Analisis Sentimen Terstruktur",
    shortDesc: "Platform pengumpulan data survei tingkat tinggi dengan fitur validasi GPS, modul wawancara offline, enkripsi data responden, dan visualisasi hasil otomatis.",
    fullDesc: "AmaniPulse memberikan kepastian validitas data lapangan untuk riset pasar, evaluasi kepuasan publik, maupun pendataan wilayah. Sistem pintar ini menyaring input duplikat dan memberikan dasbor analisis statistik seketika.",
    features: [
      "Mode Pengumpulan Data Offline-First (Sinkronisasi Otomatis)",
      "Validasi Lokasi GPS & Timestamp Anti-Tamper",
      "Kustomisasi Kuesioner Kompleks (Logic Jump & Branching)",
      "Dasbor Analisis Statistik & Export CSV/Excel/SPSS",
      "Enkripsi Kriptografi Data Responden"
    ],
    benefits: [
      "Menjamin data lapangan asli dan bebas dari data fiktif",
      "Survei tetap berjalan walau di daerah susah sinyal",
      "Hasil analisis dapat langsung dipresentasikan ke pemangku kepentingan",
      "Kepatuhan penuh pada regulasi perlindungan data pribadi"
    ],
    targetUsers: ["Lembaga Riset & Survei", "Instansi Pemerintah", "Divisi R&D Korporasi", "LSM & Organisasi Eksternal"],
    badge: "Solusi Data"
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: "infrastruktur-jaringan",
    slug: "infrastruktur-jaringan",
    title: "Infrastruktur & Jaringan",
    category: "Infrastruktur",
    shortDesc: "Perancangan, instalasi fiber optic, kabel struktur, Wi-Fi korporasi, serta arsitektur jaringan LAN/WAN tinggi keandalan.",
    overview: "Kami merancang dan mengimplementasikan arsitektur jaringan komputer modern yang tahan terhadap gangguan, memiliki bandwidth tinggi, dan dikelola secara aman untuk menjamin operasional bisnis berjalan tanpa jeda.",
    scope: [
      "Audit & Survey Topologi Jaringan Eksisting",
      "Instalasi Perkabelan Terstruktur Fiber Optic & Cat6A",
      "Konfigurasi Switch Managed, Router Korporat, & Firewall",
      "Pemasangan Enterprise Wi-Fi Mesh dengan Portal Captive",
      "Penataan Ruang Server & Rack Cabinet Management"
    ],
    benefits: [
      "Koneksi stabil tanpa dead zone di seluruh ruangan kantor",
      "Kecepatan transfer data internal hingga 10 Gbps",
      "Pengamanan akses pengguna berdasarkan peran dan divisi",
      "Dokumentasi kabel dan topologi jaringan yang rapi dan standar"
    ],
    process: [
      { step: "Analisis Kebutuhan", desc: "Pemetaan lokasi, analisis lalu lintas data, dan determinasi beban puncak jaringan." },
      { step: "Perancangan Arsitektur", desc: "Penyusunan blueprint topologi jaringan dan spesifikasi perangkat keras." },
      { step: "Implementasi & Pengabelan", desc: "Penarikan kabel terstruktur dan instalasi rack server sesuai ISO standar." },
      { step: "Pengujian & Komisioning", desc: "Stress test bandwidth, latensi, serta pemeriksaan kontinuitas sinyal." }
    ],
    deliverables: ["Dokumen Blueprint Topologi Jaringan", "Perangkat Jaringan Terkonfigurasi", "Sertifikat Pengujian Fiber Optic", "Panduan Pemeliharaan Rutin"]
  },
  {
    id: "server-hosting-vps",
    slug: "server-hosting-vps",
    title: "Server, Hosting & VPS Enterprise",
    category: "Infrastruktur",
    shortDesc: "Penyediaan infrastruktur cloud server khusus, Virtual Private Server, instalasi Bare Metal, serta migrasi basis data aman.",
    overview: "Solusi hosting dan virtualisasi server berkinerja tinggi yang disesuaikan untuk aplikasi tingkat enterprise. Dijamin dengan kesepakatan tingkat layanan (SLA) uptime 99.9% dan dukungan teknis 24 jam.",
    scope: [
      "Penyediaan Virtual Private Server (VPS) High Performance",
      "Konfigurasi Bare Metal Server untuk Beban Kerja Tinggi",
      "Layanan Migrasi Server & Basis Data Tanpa Downtime",
      "Manajemen Backup Otomatis & Disaster Recovery Plan (DRP)",
      "Penyediaan SSL EV & Pengaturan Load Balancer"
    ],
    benefits: [
      "Performa loading aplikasi jauh lebih cepat dengan NVMe Storage",
      "Ketersediaan tinggi dengan arsitektur failover otomatis",
      "Dukungan teknis lokal tanggap dalam hitungan menit",
      "Keamanan lokasi data center yang memenuhi regulasi di Indonesia"
    ],
    process: [
      { step: "Assessment Infrastruktur", desc: "Evaluasi konsumsi RAM, CPU, dan I/O sistem Anda saat ini." },
      { step: "Provisioning Server", desc: "Alokasi resource dan hardening keamanan sistem operasi server." },
      { step: "Migrasi Terjadwal", desc: "Pemindahan aplikasi dan basis data pada jam pemeliharaan berisiko rendah." },
      { step: "Post-Migration Monitoring", desc: "Pemantauan performa 72 jam pertama pasca migrasi." }
    ],
    deliverables: ["Kredensial Akses Server Terenkripsi", "Dokumentasi Arsitektur Server", "Sistem Backup Terjadwal", "Akses Dasbor Monitoring"]
  },
  {
    id: "cyber-security",
    slug: "cyber-security",
    title: "Cyber Security & Auditing",
    category: "Keamanan",
    shortDesc: "Penetration testing aplikasi & jaringan, audit keamanan ISO 27001, implementasi SIEM, serta respon insiden peretasan.",
    overview: "Melindungi aset digital kritis organisasi dari ancaman kebocoran data, ransomware, dan serangan siber terkini dengan pendekatan pertahanan berlapis (defense-in-depth).",
    scope: [
      "Vulnerability Assessment & Penetration Testing (VAPT)",
      "Audit Kepatuhan Keamanan Informasi (ISO 27001 / BSSN)",
      "Implementasi Security Information and Event Management (SIEM)",
      "Penyusunan Kebijakan Keamanan Siber Korporat",
      "Pelatihan Kesadaran Keamanan Siber (Security Awareness Training)"
    ],
    benefits: [
      "Mengidentifikasi celah keamanan sebelum dimanfaatkan pihak tak bertanggung jawab",
      "Mencegah kerugian finansial dan reputasi akibat peretasan",
      "Memenuhi kewajiban regulasi UU Perlindungan Data Pribadi (PDP)",
      "Meningkatkan kesiapsiagaan staf terhadap serangan phishing"
    ],
    process: [
      { step: "Reconnaissance & Mapping", desc: "Pengumpulan informasi target dan identifikasi aset terbuka." },
      { step: "Vulnerability Scanning", desc: "Pemindaian celah keamanan terautomasi dan manual." },
      { step: "Exploitation Phase", desc: "Pengujian penetrasi terkontrol untuk membuktikan kerentanan." },
      { step: "Remediation & Re-test", desc: "Pemberian saran perbaikan teknis dan verifikasi perbaikan." }
    ],
    deliverables: ["Laporan Audit Eksekutif & Teknis", "Daftar Prioritas Celah Keamanan", "Panduan Remidiasi Kode/Server", "Sertifikat Penetration Test"]
  },
  {
    id: "software-development",
    slug: "software-development",
    title: "Software Development Custom",
    category: "Pengembangan",
    shortDesc: "Pengembangan aplikasi web, mobile (iOS/Android), dan sistem ERP/CRM khusus disesuaikan dengan alur kerja bisnis unik Anda.",
    overview: "Kami merancang software kustom dari nol yang fleksibel, berkinerja tinggi, dan mudah dikembangkan di kemudian hari (scalable) untuk menjawab tantangan bisnis spesifik yang tidak dapat diselesaikan oleh software pasaran.",
    scope: [
      "Pengembangan Web Application Modern (React, Next.js, Node.js)",
      "Pengembangan Native & Cross-Platform Mobile Apps (Flutter, React Native)",
      "Pembangunan Sistem ERP, CRM, & HRIS Kustom",
      "Integrasi API & Microservices Architecture",
      "Modernisasi Legacy Codebase ke Teknologi Terbaru"
    ],
    benefits: [
      "Sistem 100% pas dengan alur kerja operasional perusahaan Anda",
      "Kepemilikan hak cipta source code sepenuhnya milik klien",
      "Kemudahan integrasi dengan perangkat lunak eksisting",
      "Pengalaman pengguna (UI/UX) yang intuitif dan mudah dipelajari"
    ],
    process: [
      { step: "Requirement Workshop", desc: "Penggalian kebutuhan bisnis dan penyusunan dokumen Functional Specification." },
      { step: "UI/UX Prototyping", desc: "Perancangan wireframe dan maket interaktif yang disetujui klien." },
      { step: "Agile Development", desc: "Pengkodean modular dalam sprint 2 mingguan dengan demo berkala." },
      { step: "QA & Deployment", desc: "Pengujian fungsionalitas, performa, dan peluncuran ke produksi." }
    ],
    deliverables: ["Source Code Lengkap & Hak Cipta", "Dokumentasi API & Arsitektur", "Manual Pengguna Sistem", "Garansi Maintenance Pasca Launch"]
  },
  {
    id: "data-statistik",
    slug: "data-statistik",
    title: "Data & Analisis Statistik",
    category: "Data",
    shortDesc: "Pembangunan dasbor Business Intelligence, data warehousing, pemrosesan big data, dan analisis statistik terapan.",
    overview: "Mengubah tumpukan data mentah bisnis Anda menjadi wawasan strategis yang dapat dieksekusi melalui visualisasi dasbor interaktif dan pemodelan statistik yang presisi.",
    scope: [
      "Desain & Pembangunan Data Warehouse Korporat",
      "Pembuatan Dasbor Business Intelligence (Power BI, Looker, Tableau)",
      "Pembersihan & Pemrosesan Data Kompleks (ETL Pipeline)",
      "Analisis Prediktif & Pemodelan Statistik",
      "Integrasi Dasbor Eksekutif Real-time"
    ],
    benefits: [
      "Pengambilan keputusan berbasis data konkret, bukan asumsi",
      "Mendeteksi tren penjualan dan perilaku konsumen lebih dini",
      "Menghemat waktu staf dalam menyusun laporan bulanan manajerial",
      "Sentralisasi seluruh sumber data perusahaan ke satu tempat"
    ],
    process: [
      { step: "Identifikasi Sumber Data", desc: "Inventarisasi database, file spreadsheet, dan API internal." },
      { step: "ETL Pipeline Setup", desc: "Ekstraksi, transformasi, dan pembersihan data terautomasi." },
      { step: "Dasbor Architecture", desc: "Penyusunan KPI utama dan indikator grafik yang relevan." },
      { step: "Pelatihan Pengguna", desc: "Edukasi jajaran manajemen dalam mengeksplorasi dasbor." }
    ],
    deliverables: ["Dasbor BI Interaktif Live", "Pipeline ETL Otomatis", "Kamus Data Korporat", "Dokumen Rekomendasi Wawasan Bisnis"]
  },
  {
    id: "project-management-office",
    slug: "project-management-office",
    title: "Project Management Office (PMO)",
    category: "Konsultasi",
    shortDesc: "Pengawasan eksekusi proyek TI, pendampingan tata kelola proyek, jaminan kualitas (QA), serta manajemen risiko TI.",
    overview: "Layanan pendampingan independen untuk memastikan seluruh investasi teknologi informasi di organisasi Anda dieksekusi tepat waktu, sesuai anggaran, dan memenuhi kualitas standar tertinggi.",
    scope: [
      "Penyusunan Kerangka Kerja & Standar Proyek TI",
      "Pengawasan & Monitoring Vendor TI Pihak Ketiga",
      "Mitigasi Risiko & Manajemen Perubahan (Change Management)",
      "Quality Assurance & Independent Acceptance Testing",
      "Pelaporan Periodik kepada Dewan Direksi"
    ],
    benefits: [
      "Menghindari kegagalan implementasi proyek TI bertarif besar",
      "Obyektifitas penuh dalam mengaudit kualitas kerja vendor eksternal",
      "Optimalisasi alokasi anggaran dan efisiensi waktu penyelesaian",
      "Transparansi progres proyek secara terstruktur"
    ],
    process: [
      { step: "Project Inception Audit", desc: "Pemeriksaan piagam proyek, ruang lingkup, dan jadwal acuan." },
      { step: "Governance Setup", desc: "Penetapan jalur komunikasi, eskalasi masalah, dan milestone." },
      { step: "Execution Oversight", desc: "Supervisi harian/mingguan atas pencapaian dan kualitas deliverable." },
      { step: "Project Closure & Handover", desc: "Evaluasi akhir dan komisioning serah terima hasil." }
    ],
    deliverables: ["Laporan Status Proyek Mingguan/Bulanan", "Matriks Manajemen Risiko", "Dokumen QA Acceptance Test", "Laporan Evaluasi Pasca Proyek"]
  },
  {
    id: "seo-digital-marketing",
    slug: "seo-digital-marketing",
    title: "SEO & Digital Marketing B2B",
    category: "Pemasaran",
    shortDesc: "Optimasi mesin pencari organik (SEO), strategi konten teknis, dan manajemen kampanye B2B terarah untuk pertumbuhan pencarian.",
    overview: "Meningkatkan visibilitas digital perusahaan Anda di mesin pencari Google guna mendatangkan prospek B2B bernilai tinggi secara konsisten dan berkelanjutan.",
    scope: [
      "Technical SEO Audit & Perbaikan Kecepatan Website",
      "Riset Kata Kunci Niche Industri & Intent Pencarian B2B",
      "Optimasi Konten On-Page & Arsitektur Informasi",
      "Strategi Link Building Berotoritas Tinggi",
      "Analisis Konversi & Pelaporan Traffic Google Analytics"
    ],
    benefits: [
      "Mendapatkan calon klien berkualifikasi yang aktif mencari solusi Anda",
      "Meningkatkan reputasi dan otoritas merek di industri terkait",
      "Mengurangi ketergantungan pada iklan berbayar jangka panjang",
      "Imbal hasil investasi (ROI) pemasaran yang terukur jernih"
    ],
    process: [
      { step: "SEO Health Audit", desc: "Pemeriksaan struktur HTML, indexing, crawling, dan profil backlink." },
      { step: "Keyword Architecture", desc: "Penetapan kata kunci target berdasar corong pemasaran." },
      { step: "Content & Tech Execution", desc: "Implementasi perbaikan teknis dan publikasi konten strategis." },
      { step: "Performance Review", desc: "Analisis posisi peringkat dan lalu lintas data bulanan." }
    ],
    deliverables: ["Laporan SEO Technical Audit", "Peta Kata Kunci Strategis", "Laporan Peringkat & Traffic Bulanan", "Rekomendasi Optimasi UX"]
  },
  {
    id: "training",
    slug: "training",
    title: "Pelatihan & Workshop TI",
    category: "Edukasi",
    shortDesc: "Program pelatihan peningkatan keahlian SDM dalam bidang keamanan siber, administrasi jaringan, DevOps, dan analisis data.",
    overview: "Memperkuat kapasitas teknis internal tim Anda melalui program pelatihan intensif berbasis praktik langsung yang dibawakan oleh praktisi industri berpengalaman.",
    scope: [
      "Pelatihan Defensive & Offensive Cyber Security",
      "Workshop Administrasi Jaringan Cisco & MikroTik",
      "Training DevOps, Docker, & Kubernetes",
      "Pelatihan Analisis Data dengan Python & SQL",
      "Program Digital Transformation Leadership untuk Eksekutif"
    ],
    benefits: [
      "Staf internal memiliki keterampilan praktis yang siap diterapkan",
      "Mengurangi ketergantungan pada pihak ketiga untuk pemeliharaan rutin",
      "Meningkatkan retensi dan motivasi kerja karyawan",
      "Modul materi disesuaikan dengan kebutuhan nyata perusahaan"
    ],
    process: [
      { step: "Training Needs Analysis", desc: "Pemeriksaan tingkat keahlian peserta dan target kompetensi." },
      { step: "Curriculum Customization", desc: "Penyusunan modul dan skenario studi kasus industri." },
      { step: "Interactive Workshop", desc: "Sesi penyampaian materi 30% teori dan 70% laboratorium praktik." },
      { step: "Post-Training Assessment", desc: "Ujian kompetensi dan pemberian sertifikasi kelulusan." }
    ],
    deliverables: ["Modul Pelatihan & Silabus Praktikum", "Akses Lingkungan Laboratorium Virtual", "Sertifikat Kelulusan Peserta", "Laporan Evaluasi Performa Peserta"]
  },
  {
    id: "it-support-remote-troubleshooting",
    slug: "it-support-remote-troubleshooting",
    title: "IT Support & Troubleshooting Remote",
    category: "Dukungan",
    shortDesc: "Layanan pemeliharaan teknis rutin, penanganan kendala sistem secara remote maupun kunjungan onsite dengan response time cepat.",
    overview: "Layanan helpdesk TI profesional yang siap membantu menyelesaikan gangguan perangkat keras, perangkat lunak, dan jaringan kantor Anda agar efisiensi kerja staf tetap terjaga.",
    scope: [
      "Layanan IT Helpdesk & Desk-Side Support",
      "Remote Troubleshooting via Enkripsi Aman",
      "Kunjungan On-Site Pemeliharaan Komputer & Printer",
      "Manajemen Lisensi Perangkat Lunak & Antivirus Enterprise",
      "Inventarisasi Aset Perangkat IT Kantor"
    ],
    benefits: [
      "Respons cepat terhadap keluhan teknis karyawan (SLA < 30 menit)",
      "Tanpa biaya rekrutmen tim IT internal full-time",
      "Pencegahan kerusakan hardware melalui pemeliharaan berkala",
      "Perangkat kerja selalu diperbarui dengan patch keamanan terbaru"
    ],
    process: [
      { step: "Ticket Logging", desc: "Pencatatan masalah oleh pengguna via portal ticketing atau telepon." },
      { step: "Initial Triage & Remote", desc: "Diagnosa awal dan penyelesaian jarak jauh oleh teknisi helpdesk." },
      { step: "Onsite Escalation", desc: "Pengiriman teknisi lapangan apabila kendala membutuhkan intervensi fisik." },
      { step: "Resolution Sign-off", desc: "Konfirmasi penyelesaian dari pengguna dan pengarsipan tiket." }
    ],
    deliverables: ["Akses Portal Ticketing IT", "Laporan SLA Bulanan", "Inventarisasi Aset TI Kantor", "Rekomendasi Peremajaan Perangkat"]
  }
];

export const SOLUTIONS_DATA: Solution[] = [
  {
    id: "pendidikan",
    slug: "pendidikan",
    title: "Solusi Sektor Pendidikan",
    subtitle: "Mewujudkan Kampus & Sekolah Digital Berdaya Saing Tinggi",
    targetSector: "Sekolah, Yayasan, & Perguruan Tinggi",
    challenges: [
      "Sistem administrasi manual yang memakan waktu guru",
      "Infrastruktur internet sekolah yang tidak stabil saat ujian online",
      "Kurangnya transparansi akademik dan sistem pembayaran bagi orang tua"
    ],
    approach: "Kami menghadirkan paket holistik yang mengintegrasikan AmaniEdu (SIM Sekolah), penataan Wi-Fi kampus berkapasitas tinggi, serta perlindungan server nilai siswa dari risiko peretasan.",
    results: [
      "Otomasi 85% proses administrasi dan pencetakan rapor",
      "Ujian berbasis komputer (CBT) berjalan lancar untuk 2.000+ siswa bersamaan",
      "Orang tua dapat memantau presensi dan bayar SPP secara instan via ponsel"
    ],
    keyFeatures: [
      "AmaniEdu SIM Sekolah",
      "Wi-Fi Kampus Cerdas",
      "Server CBT High-Availability",
      "Audit Keamanan Portal Nilai"
    ]
  },
  {
    id: "perusahaan",
    slug: "perusahaan",
    title: "Solusi Korporasi & Bisnis Enterprise",
    subtitle: "Mengakselerasi Efisiensi & Keamanan Operasional Perusahaan",
    targetSector: "Perusahaan Manufaktur, Jasa, & Logistik",
    challenges: [
      "Siloisasi data antar cabang perusahaan yang menghambat keputusan eksekutif",
      "Ancaman pencurian data bisnis dan ransomware",
      "Proyek TI sering terlambat karena kurangnya pengawasan PMO"
    ],
    approach: "Mengombinasikan arsitektur jaringan fiber optic antar cabang, pembangunan Data Warehouse & BI Dashboard, audit cyber security rutin, serta pengawasan PMO independen.",
    results: [
      "Visualisasi laporan keuangan dan operasional konsolidasi secara real-time",
      "Zero incident ransomware dalam 3 tahun terakhir pada jaringan terproteksi",
      "Penyelesaian proyek TI tepat waktu meningkat hingga 92%"
    ],
    keyFeatures: [
      "Enterprise Network & SD-WAN",
      "Cyber Security & SIEM",
      "BI & Executive Dashboard",
      "Custom Software Development"
    ]
  },
  {
    id: "pemerintahan",
    slug: "pemerintahan",
    title: "Solusi Instansi Pemerintahan",
    subtitle: "Mendukung Sistem Pemerintahan Berbasis Elektronik (SPBE)",
    targetSector: "Dinas, Kementerian, & Badan Daerah",
    challenges: [
      "Kebutuhan ketaatan regulasi keamanan informasi BSSN / ISO 27001",
      "Integrasi aplikasi pelayanan publik yang tersebar di berbagai platform",
      "Pengumpulan data lapangan masyarakat yang akurat untuk kebijakan"
    ],
    approach: "Penyediaan aplikasi survei AmaniPulse dengan enkripsi ketat, audit kepatuhan ISO 27001, dan integrasi API antar sistem pelayanan publik sesuai standar tata kelola SPBE.",
    results: [
      "Kelulusan indeks SPBE dengan predikat Sangat Baik",
      "Pengumpulan data bansos dan fasilitas publik 100% tervalidasi lokasi GPS",
      "Perlindungan data warga dari ancaman kebocoran publik"
    ],
    keyFeatures: [
      "AmaniPulse Survey System",
      "Audit Kepatuhan ISO 27001",
      "Integrasi Interoperabilitas SPBE",
      "VPS & Infrastructure Hardening"
    ]
  },
  {
    id: "umkm",
    slug: "umkm",
    title: "Solusi UMKM & Bisnis Berkembang",
    subtitle: "Teknologi Andal Terjangkau untuk Pertumbuhan Skala Usaha",
    targetSector: "Usaha Kecil Menengah, Toko Online, & Agensi Modern",
    challenges: [
      "Keterbatasan anggaran dan tim teknis internal",
      "Kesulitan bersaing secara digital di mesin pencarian",
      "Sistem operasional masih bergantung pada pencatatan manual"
    ],
    approach: "Paket terjangkau mencakup SEO & Digital Marketing B2B, cloud server hemat energi, serta layanan IT Support Remote tanpa perlu menggaji teknisi internal.",
    results: [
      "Peningkatan lalu lintas calon pembeli hingga 300% dalam 6 bulan",
      "Hemat biaya operasional TI hingga 50% dibanding membentuk tim sendiri",
      "Aplikasi toko & kasir dapat diakses 24/7 tanpa kelebihan beban"
    ],
    keyFeatures: [
      "SEO & Optimization B2B",
      "Managed Cloud VPS",
      "IT Support Remote On-Demand",
      "Aplikasi Kasir & Inventaris Web"
    ]
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "port-1",
    slug: "modernisasi-jaringan-sekolah-al-azhar",
    title: "Modernisasi Jaringan & SIM Sekolah Yayasan Taruna",
    client: "Yayasan Pendidikan Taruna Mandiri",
    category: "pendidikan",
    categoryLabel: "Pendidikan",
    year: "2024",
    summary: "Instalasi jaringan Wi-Fi Wi-Fi 6 kampus dan penerapan AmaniEdu untuk 3.500 siswa.",
    challenge: "Jaringan sering terputus saat jam pelajaran dan proses rekapitulasi nilai ujian memakan waktu 2 minggu secara manual.",
    solution: "Pemasangan 45 Access Point enterprise, infrastruktur fiber optic backbone 10Gbps, serta deployment platform AmaniEdu.",
    impact: [
      "Proses olah nilai rapor memendek dari 14 hari menjadi 1 hari",
      "Kapasitas koneksi Wi-Fi mampu menampung 4.000 perangkat bersamaan",
      "Orang tua mendapatkan notifikasi kehadiran siswa via WhatsApp otomatis"
    ],
    tags: ["AmaniEdu", "Fiber Optic", "Wi-Fi Enterprise", "Rapor Digital"]
  },
  {
    id: "port-2",
    slug: "audit-cyber-security-bank-daerah",
    title: "Audit Keamanan Siber & SIEM Bank Perkreditan Daerah",
    client: "BPR Sinar Sejahtera",
    category: "perusahaan",
    categoryLabel: "Perusahaan",
    year: "2024",
    summary: "Penetration testing aplikasi mobile banking dan implementasi SIEM 24/7.",
    challenge: "Persyaratan ketat OJK dan BSSN untuk memastikan sistem perbankan aman dari potensi kebocoran transaksi.",
    solution: "Pengujian VAPT komprehensif, hardening server basis data, serta pembentukan Security Operations Center (SOC) hybrid.",
    impact: [
      "Menutup 14 celah keamanan kritis sebelum peluncuran app",
      "Mencapai sertifikasi ketaatan ISO 27001 tanpa temuan mayor",
      "Monitoring insiden siber real-time dengan durasi respon < 10 menit"
    ],
    tags: ["VAPT", "ISO 27001", "SIEM", "Mobile Banking"]
  },
  {
    id: "port-3",
    slug: "aplikasi-survei-lapangan-dinas-kesehatan",
    title: "Sistem Pendataan & Survei Kesehatan Masyarakat Daerah",
    client: "Dinas Kesehatan Provinsi",
    category: "pemerintahan",
    categoryLabel: "Pemerintahan",
    year: "2023",
    summary: "Deployment AmaniPulse offline-first untuk 500+ petugas lapangan di 12 kabupaten.",
    challenge: "Banyak wilayah survei tidak memiliki sinyal cellular, menyebabkan manipulasi data survei fisik.",
    solution: "Kustomisasi AmaniPulse dengan sinkronisasi otomatis saat ada sinyal, validasi GPS anti-fake lokasi, dan enkripsi data.",
    impact: [
      "Tingkat keabsahan data lapangan mencapai 99.8%",
      "Waktu pengumpulan dan analisis data nasional berkurang 70%",
      "Dasbor interaktif menyajikan peta kerawanan stunting secara real-time"
    ],
    tags: ["AmaniPulse", "Offline-First", "GPS Geolocation", "Executive Dashboard"]
  },
  {
    id: "port-4",
    slug: "bi-dashboard-manufaktur-otomotif",
    title: "Executive Data Warehouse & BI Dashboard Otomotif",
    client: "PT Nusantara Auto Component",
    category: "perusahaan",
    categoryLabel: "Perusahaan",
    year: "2023",
    summary: "Pembangunan ETL pipeline dan dasbor Power BI terintegrasi untuk 4 pabrik.",
    challenge: "Laporan stok bahan baku dan pengiriman pabrik masih terpisah-pisah di ratusan file Excel.",
    solution: "Pembangunan Central Data Warehouse dan penyusunan 12 dasbor BI real-time untuk direksi.",
    impact: [
      "Mengurangi biaya bottleneck pasokan bahan baku sebesar 18%",
      "Pengambilan keputusan stok dapat dilakukan harian alih-alih bulanan",
      "Eliminasi penuh kesalahan input data manual"
    ],
    tags: ["Data Warehouse", "Power BI", "ETL Pipeline", "Manufacturing"]
  },
  {
    id: "port-5",
    slug: "seo-digital-strategy-logistik",
    title: "Optimasi SEO Technical & Digital Growth Logistik B2B",
    client: "PT Trans Cepat Indonesia",
    category: "umkm",
    categoryLabel: "UMKM & Bisnis",
    year: "2024",
    summary: "Strategi SEO B2B dan perbaikan performa web hingga mencapai peringkat 1 Google.",
    challenge: "Situs web lama sangat lambat dan tidak mendapatkan permintaan penawaran (leads) organik.",
    solution: "Restrukturisasi arsitektur web, perbaikan Core Web Vitals, dan strategi publikasi konten B2B bernilai tinggi.",
    impact: [
      "Peningkatan pencarian organik dari 500 menjadi 25.000 pengunjung/bulan",
      "Mendapatkan 40+ kontrak penawaran B2B baru setiap bulan",
      "Skor kecepatan Google PageSpeed naik dari 32 menjadi 96"
    ],
    tags: ["SEO B2B", "Technical Audit", "Core Web Vitals", "Content Strategy"]
  },
  {
    id: "port-6",
    slug: "saas-project-management-konstruksi",
    title: "Implementasi AmaniTask pada Proyek Pembangunan Infrastruktur",
    client: "PT Karya Konstruksi Tama",
    category: "perusahaan",
    categoryLabel: "Perusahaan",
    year: "2024",
    summary: "Adopsi platform AmaniTask untuk memantau 15 proyek konstruksi simultan.",
    challenge: "Keterlambatan laporan material dan ketidaksesuaian klaim progres di lapangan.",
    solution: "Penerapan AmaniTask dengan pelacakan foto lokasi bergeotag dan alur persetujuan bertingkat.",
    impact: [
      "Zero keterlambatan klaim termin proyek",
      "Penghematan biaya pembengkakan material hingga Rp 1,2 Miliar",
      "Visibilitas progres proyek dapat diakses komisaris via ponsel"
    ],
    tags: ["AmaniTask", "SaaS PM", "Geotagging", "Cost Management"]
  }
];

export const INSIGHTS_DATA: InsightItem[] = [
  {
    id: "ins-1",
    slug: "strategi-keamanan-siber-perusahaan-2025",
    title: "Mengantisipasi Serangan Ransomware: 5 Langkah Krusial Keamanan Siber Korporat",
    excerpt: "Panduan praktis bagi pemimpin IT dalam membangun arsitektur pertahanan berlapis dan merespons insiden peretasan data secara efektif.",
    category: "Cyber Security",
    readTime: "6 min baca",
    publishedAt: "12 Januari 2025",
    author: {
      name: "Budi Santoso, CEH",
      role: "VP Cyber Security PT AMANI"
    },
    tags: ["Keamanan Siber", "Ransomware", "ISO 27001", "Mitigasi Risiko"],
    content: `
Ancaman siber di era transformasi digital terus berkembang dengan tingkat kompleksitas yang semakin mengkhawatirkan. Ransomware modern tidak hanya mengenkripsi berkas penting perusahaan, tetapi juga mengancam akan membocorkan rahasia bisnis ke ranah publik jika tebusan tidak dibayar.

### 1. Menerapkan Arsitektur Zero Trust
Prinsip dasar Zero Trust adalah "jangan pernah percaya, selalu verifikasi". Setiap permintaan akses ke jaringan internal harus diautentikasi dan dienkripsi secara ketat, terlepas dari apakah permintaan tersebut berasal dari dalam atau luar kantor.

### 2. Segmentasi Jaringan & Cadangan Terisolasi (Air-Gapped Backup)
Jangan biarkan seluruh server berada dalam satu subnet jaringan yang sama. Lakukan segmentasi agar jika satu komputer terinfeksi, enkripsi ransomware tidak dapat menyebar ke server basis data utama. Pastikan pula file backup disimpan di lokasi fisik atau cloud terpisah yang tidak terhubung langsung secara terus-menerus.

### 3. Pemantauan Berkelanjutan dengan SIEM
Menggunakan antivirus standar tidak lagi cukup. Perusahaan memerlukan Security Information and Event Management (SIEM) yang mampu memantau lalu lintas data abnormal secara real-time selama 24 jam sehari.

### 4. Pelatihan Phishing untuk Karyawan
Lebih dari 80% insiden kebocoran siber berawal dari kelalaian manusia, khususnya email phishing. Selenggarakan simulasi phishing berkala untuk mengedukasi staf agar tidak sembarangan mengklik tautan atau mengunduh lampiran mencurigakan.

### 5. Pengujian Penetrasi (VAPT) Berkala
Lakukan audit pengujian penetrasi minimal 1-2 kali dalam setahun oleh pihak ketiga independen guna mengidentifikasi celah keamanan pada sistem sebelum ditemukan oleh pihak lawan.
    `
  },
  {
    id: "ins-2",
    slug: "pentingnya-data-warehouse-untuk-pengambilan-keputusan",
    title: "Mengubah Data Mentah Menjadi Keputusan Bisnis Presisi Lewat Business Intelligence",
    excerpt: "Bagaimana integrasi data warehouse dan dasbor BI interaktif mampu menghemat biaya operasional dan mempercepat pengambilan keputusan eksekutif.",
    category: "Data & Analisis",
    readTime: "5 min baca",
    publishedAt: "28 Desember 2024",
    author: {
      name: "Siti Rahmawati, M.Sc.",
      role: "CTO PT AMANI"
    },
    tags: ["Business Intelligence", "Data Warehouse", "Power BI", "Big Data"],
    content: `
Banyak perusahaan mengumpulkan jutaan baris data transaksi setiap harinya, namun data tersebut seringkali terkunci dalam ribuan lembar file Excel yang terpisah. Tanpa konsolidasi yang tepat, data tersebut menjadi beban simpanan alih-alih aset berharga.

### Apa Itu Data Warehouse Korporat?
Data Warehouse adalah repositori terpusat tempat seluruh data dari berbagai aplikasi operasional (ERP, CRM, Kasir, hingga HRIS) disatukan, dibersihkan, dan distrukturkan untuk kebutuhan analisis jangka panjang.

### Mengapa Spreadsheet Manual Mulai Ditinggalkan?
- **Kerentanan Human Error**: Input manual rentan terhadap salah ketik atau rumus terhapus.
- **Waktu Keterlambatan**: Pembuatan laporan bulanan bisa memakan waktu berhari-hari, membuat keputusan eksekutif terlambat.
- **Masalah Versi**: Berbagai departemen kerap memiliki versi angka yang berbeda-beda.

### Manfaat Utama Dasbor BI Interaktif
Dengan dasbor BI, jajaran manajerial dapat melihat KPI utama bisnis dalam grafik yang diperbarui secara otomatis. Pemimpin bisnis dapat melakukan *drill-down* hingga ke detail transaksi wilayah tertentu hanya dalam hitungan detik.
    `
  },
  {
    id: "ins-3",
    slug: "transformasi-digital-sekolah-kurikulum-merdeka",
    title: "Tantangan & Solusi Digitalisasi Sekolah di Era Kurikulum Merdeka",
    excerpt: "Strategi yayasan pendidikan dalam membangun jaringan Wi-Fi andal dan mengadopsi SIM sekolah yang transparan bagi guru dan orang tua.",
    category: "Pendidikan",
    readTime: "4 min baca",
    publishedAt: "15 November 2024",
    author: {
      name: "Drs. Rian Hidayat, M.T.",
      role: "Direktur Utama PT AMANI"
    },
    tags: ["Pendidikan", "AmaniEdu", "Kurikulum Merdeka", "Wi-Fi Sekolah"],
    content: `
Implementasi Kurikulum Merdeka menuntut fleksibilitas penilaian berbasis proyek dan portofolio siswa. Hal ini membawa tantangan tersendiri bagi tenaga pendidik jika masih menggunakan metode pencatatan konvensional.

### Beban Administrasi Guru yang Meningkat
Guru sering kali menghabiskan hingga 40% waktu kerjanya hanya untuk merekapitulasi format nilai dan narasi capaian belajar siswa. Waktu yang seharusnya digunakan untuk mendampingi siswa justru terserap oleh urusan kertas kerja.

### Solusi SIM Sekolah Terintegrasi (AmaniEdu)
AmaniEdu hadir untuk menyederhanakan perhitungan nilai proyek Kurikulum Merdeka. Guru cukup memasukkan skor indikator, dan sistem secara otomatis mengomposisikan deskripsi rapor sesuai panduan resmi Kementerian.

### Pentingnya Infrastruktur Jaringan Wi-Fi Sekolah
Digitalisasi tidak akan berjalan tanpa fondasi jaringan yang kokoh. Sekolah memerlukan penataan kabel terstruktur dan Access Point enterprise yang mampu menangani ratusan perangkat siswa saat ujian berbasis komputer tanpa memicu kendala koneksi terputus.
    `
  }
];
