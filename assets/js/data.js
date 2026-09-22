/**
 * Portfolio Data - Nadhin Awwali Fari
 * Front-End Developer | UI/UX Designer (IoT Focus)
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Nadhin Awwali Fari",
    role: "Front-End Developer & UI/UX Designer",
    bio: "Mahasiswa Sistem Informasi Universitas Dian Nuswantoro dengan spesialisasi pada UI/UX Design dan Front-End Development. Berpengalaman merancang purwarupa interaktif menggunakan Figma serta mengimplementasikannya ke dalam antarmuka web responsif berbasis HTML, CSS, JavaScript, Bootstrap, dan framework Laravel. Memiliki fokus mendalam pada integrasi antarmuka sistem Internet of Things (IoT) untuk menyajikan dashboard monitoring dan visualisasi data perangkat keras secara real-time.",
    email: "fozeth1@gmail.com",
    phone: "+62 857-2700-8860",
    whatsappUrl: "https://wa.me/6285727008860",
    githubUrl: "https://github.com/namiaww",
    linkedinUrl: "https://www.linkedin.com/in/nadhin-awwali-fari/",
    cvUrl: "assets/docs/CV-Nadhin-Awwali-Fari-2026.pdf",
    avatar: "assets/img/profile.jpg",
    openToWork: "Open for IoT & Front-End Internship"
  },

  stats: [
    { value: "3+", label: "Tahun Pengalaman Desain & Web" },
    { value: "3+", label: "Proyek Signifikan (IoT, UI/UX, Web)" },
    { value: "2", label: "Kampus Ternama (Udinus & UGM)" },
    { value: "100%", label: "Dedikasi & Detail-Oriented" }
  ],

  skillCategories: [
    {
      name: "UI / UX Design",
      icon: "layout",
      skills: [
        { name: "Design Thinking & Research" },
        { name: "User Flow & Wireframing" },
        { name: "Interactive Prototyping" },
        { name: "Design System" }
      ]
    },
    {
      name: "Front-End Development",
      icon: "code",
      skills: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "Tailwind CSS" },
        { name: "JavaScript (ES6+)" },
        { name: "Bootstrap 5" },
        { name: "Laravel Blade & Routing Basics" },
        { name: "C++" }
      ]
    },
    {
      name: "Tools",
      icon: "tool",
      skills: [
        { name: "Figma" },
        { name: "Git & GitHub" },
        { name: "VS Code" },
        { name: "Adobe Illustrator & Photoshop" }
      ]
    }
  ],

  projects: [
    {
      id: "project-iot-ugm",
      title: "Pertanian Pintar — Sistem Telemetri Multi-Node IoT ESP32 & ESP-NOW",
      shortTitle: "IoT Pertanian Pintar",
      category: "iot",
      categoryLabel: "IoT",
      institution: "Universitas Gadjah Mada — PMM Research",
      period: "2025 - 2026",
      featured: true,
      badge: "Flagship Research",
      image: "assets/img/iot-hardware-box.jpg",
      imageFit: "cover",
      videoUrl: "https://drive.google.com/drive/folders/1qEYP24gsXWX51LhYeTfHanyZu7u2StwM?usp=sharing",
      summary: "Arsitektur telemetri IoT multi-node berbasis ESP32 & ESP-NOW terenkripsi ganda (ChaCha20-Poly1305) dengan sinkronisasi cloud real-time ke Blynk IoT.",
      description: "Mengembangkan sistem akuisisi data nirkabel multi-node skala pertanian pintar. Setiap node sensor ESP32 mengumpulkan data kelembaban tanah kapasitif, suhu, kelembaban udara (DHT22), dan tegangan baterai. Data ditransmisikan ke Node Gateway utama melalui protokol nirkabel berkecepatan tinggi ESP-NOW dengan enkripsi ganda (AES-128 & ChaCha20-Poly1305). Gateway menyinkronkan seluruh telemetri ke cloud Blynk melalui Wi-Fi untuk visualisasi dashboard dan pemantauan jarak jauh.",
      specs: [
        { label: "Hardware Nodes", value: "2x Sensor Nodes (ESP32-WROOM-32), 1x Central Gateway" },
        { label: "Sensors", value: "Soil Moisture Capacitive v1.2, DHT22 Temp/Humidity, Voltage Divider" },
        { label: "Protocol & Range", value: "ESP-NOW (Peer-to-peer 2.4GHz) + Wi-Fi 802.11 b/g/n" },
        { label: "Security & Encryption", value: "ChaCha20-Poly1305 AEAD + Hardware AES-128" },
        { label: "Cloud & Telemetry", value: "Blynk IoT Platform, Virtual Pins, Real-time Alerts" },
        { label: "Firmware Core", value: "C++ / Arduino Core ESP32, FreeRTOS Tasks" }
      ],
      techStack: ["C++", "ESP32", "ESP-NOW", "ChaCha20-Poly1305", "Blynk Cloud", "FreeRTOS", "IoT Hardware"],
      links: {},
      album: [
        {
          src: "assets/img/iot-hardware-box.jpg",
          title: "Perakitan Modul Hardware Multi-Node",
          desc: "Integrasi ESP32 DevKit, Capacitive Soil Moisture Sensor v2.0, DS18B20, dan Gateway Controller terangkai dalam modul prototipe riset."
        },
        {
          src: "assets/img/iot-serial-test.jpg",
          title: "Pengujian Sensor & Kalibrasi Serial",
          desc: "Pengujian telemetri kelembapan tanah kapasitif secara langsung terhubung ke laptop melalui Arduino IDE Serial Monitor."
        },
        {
          src: "assets/img/iot-documentation.jpg",
          title: "Dokumentasi Riset Laboratorium UGM",
          desc: "Dokumentasi asistensi dan serah terima pengujian kit prototipe riset IoT multi-node di lingkungan kampus Universitas Gadjah Mada."
        }
      ]
    },
    {
      id: "project-kafesco",
      title: "Kafes.Co - Specialty Coffee Mobile UI/UX Design",
      shortTitle: "Kafes.Co Mobile UI/UX",
      category: "uiux",
      categoryLabel: "UI/UX Design",
      institution: "SMK Raden Umar Said (RUS) Kudus — Tugas Akhir",
      period: "2023",
      featured: true,
      badge: "Best UI Design",
      image: "assets/img/logo-kafesco.png",
      imageFit: "contain",
      summary: "Desain purwarupa aplikasi mobile pemesanan kopi premium dengan alur checkout instan, kustomisasi racikan, dan sistem desain dark/warm roast aesthetic.",
      description: "Merancang antarmuka mobile e-commerce secara komprehensif dari tahap riset pengguna, perumusan persona pencinta kopi, hingga pembuatan design system skala penuh di Figma. Mengutamakan kemudahan navigasi katalog menu, kalkulasi harga dinamis berdasarkan opsi susu/sugar level, serta alur pembayaran tanpa hambatan. Menghasilkan prototype interaktif dengan fidelity tinggi yang diuji kepada calon pelanggan.",
      specs: [
        { label: "Target Platform", value: "Mobile Application (iOS / Android 375x812 pt)" },
        { label: "Design Methodology", value: "Design Thinking, User Journey Mapping, Wireframing" },
        { label: "Typography & Color", value: "Poppins, Warm Dark Roast & Cream White" },
        { label: "Deliverables", value: "Interactive Prototype, Component System, Laporan TA" }
      ],
      techStack: ["Figma", "UI/UX", "User Flow", "Wireframing", "Prototyping", "Design Thinking"],
      links: {
        figma: "https://www.figma.com/design/68IUG4sd1vgKbNh7Z447om/Mobile-Apps-Kafesco?node-id=0-1&t=P10VqtZkCSbX4ltw-1"
      },
      album: [
        {
          src: "assets/img/kafesco-mockup-mobile.png",
          title: "Mockup Aplikasi Mobile Kafes.Co",
          desc: "Desain purwarupa antarmuka mobile e-commerce: halaman splash/login, rincian produk kopi, dan halaman akun profil pengguna."
        }
      ]
    },
    {
      id: "project-kost-kurnia",
      title: "KOST KURNIA — Boarding House Booking & Management Web Platform",
      shortTitle: "KOST KURNIA Web Platform",
      category: "uiux",
      categoryLabel: "UI/UX Design",
      institution: "Independent Project",
      period: "2024",
      featured: true,
      badge: "Web Platform UI",
      image: "assets/img/logo-kostkurnia.png",
      imageFit: "contain",
      summary: "Desain sistem antarmuka web reservasi dan manajemen hunian indekos modern, mempermudah calon penyewa meninjau ketersediaan kamar, fasilitas, tarif, dan pemesanan online.",
      description: "Platform web yang dirancang untuk memodernisasi cara pencarian dan penyewaan kamar kost. Melalui antarmuka yang bersih, intuitif, dan responsif, pengguna dapat memfilter tipe kamar, melihat galeri foto kamar 360/detail, memeriksa kelengkapan fasilitas, dan melakukan booking instan secara transparan. Sistem desain mengutamakan visual hierarchy yang terstruktur, keterbacaan tinggi, serta alur konversi pengguna yang efisien.",
      specs: [
        { label: "Target Platform", value: "Responsive Web (Desktop & Mobile Browser)" },
        { label: "Design Tools", value: "Figma" },
        { label: "Key Focus", value: "Booking Conversion, Room Catalog, Transparent Pricing" }
      ],
      techStack: ["Figma", "Responsive Web Design", "UI/UX", "Design Systems", "Component Library"],
      links: {
        figma: "https://www.figma.com/design/ow6jiDKK25YC4iPtnRbDUB/KOST-KURNIA?node-id=0-1&t=pDxflQ6axCDQnhe6-1"
      },
      album: [
        {
          src: "assets/img/kostkurnia-mockup-laptop.jpg",
          title: "Mockup Platform Web KOST KURNIA",
          desc: "Tampilan antarmuka website pemesanan dan reservasi kamar indekos pada layar laptop dengan visual yang bersih dan modern."
        }
      ]
    }
  ],

  workExperiences: [
    {
      role: "Desainer Grafis (Magang)",
      institution: "Perusahaan Daerah Percetakan Kudus",
      period: "Desember 2022 - Juni 2023",
      location: "Kudus, Jawa Tengah",
      description: "Membuat desain siap cetak sesuai pesanan dan membantu menyelesaikan desain akhir."
    },
    {
      role: "Administrasi Kantor (Magang)",
      institution: "Perusahaan Daerah Percetakan Kudus",
      period: "Desember 2022 - Juni 2023",
      location: "Kudus, Jawa Tengah",
      description: "Membuat nota pesanan yang masuk dan membantu membuat laporan keuangan."
    }
  ],

  education: [
    {
      role: "Computer Science (Student Exchange)",
      institution: "Universitas Gadjah Mada",
      period: "Semester 5 (2025 - 2026)",
      location: "Yogyakarta, Indonesia",
      description: "Mendalami fokus studi Pengembangan UI/UX & Front-end, Internet of Things dan Aplikasinya, Proyek Rekayasa Perangkat Lunak, Penjaminan Kualitas Perangkat Lunak, serta Pembelajaran Mesin Mendalam di Ilmu Komputer."
    },
    {
      role: "S1 Sistem Informasi",
      institution: "Universitas Dian Nuswantoro",
      period: "2023 - Sekarang",
      location: "Semarang, Jawa Tengah",
      description: "Mempelajari rekayasa perangkat lunak, perancangan antarmuka pengguna (UI/UX), arsitektur web modern, basis data relasional, serta analisis proses bisnis untuk pengembangan sistem informasi digital."
    },
    {
      role: "Desain Grafis",
      institution: "SMK Raden Umar Said",
      period: "2020 - 2023",
      location: "Kudus, Jawa Tengah",
      description: "Mempelajari kompetensi fotografi, videografi, desain grafis, dan UI/UX, serta menyelesaikan tugas akhir perancangan mobile UI/UX untuk brand KAFES.CO secara komprehensif menggunakan software Figma."
    }
  ]
};
