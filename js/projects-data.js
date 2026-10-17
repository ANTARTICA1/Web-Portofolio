const projectsData = [
  {
    id: 0,
    title: "Tatagih",
    category: "Financial SaaS / AI Financial Analytics / Full-Stack Web App",
    categoryType: "web",
    role: "Lead Fullstack & AI Systems Developer",
    type: "Smart Subscription Manager & AI Financial Assistant",
    status: "Production Showcase (2024)",
    period: "2024",
    image: "assets/tatagih_dashboard.png",
    photos: [
      {
        id: "tatagih-dash",
        title: "Dashboard Finansial & Kalender Jatuh Tempo",
        caption: "Pusat kendali langganan dengan estimasi pengeluaran bulanan/tahunan, kalender jatuh tempo terdekat, dan visualisasi kurva 6 bulan via Chart.js.",
        imageUrl: "assets/tatagih_dashboard.png"
      },
      {
        id: "tatagih-landing",
        title: "Landing Page & Value Proposition",
        caption: "Halaman beranda publik Tatagih yang menyajikan value proposition, perbandingan vampire spending, dan ajakan mengaudit langganan berkala.",
        imageUrl: "assets/tatagih_landing.png"
      },
      {
        id: "tatagih-chat",
        title: "Tata Asisten Finansial AI (Google Gemini)",
        caption: "Ruang konsultasi keuangan kontekstual dengan Tata AI bertenaga Gemini yang mengevaluasi Financial Health Score (0-100) dan rekomendasi penghematan konkret.",
        imageUrl: "assets/tatagih_chatbot.png"
      },
      {
        id: "tatagih-split",
        title: "Modul Patungan Keluarga & Verifikasi Bukti Bayar",
        caption: "Fitur split-bill langganan bersama (Family Plan) dengan pembagian tagihan adil, upload struk pembayaran, dan verifikasi status transaksi.",
        imageUrl: "assets/tatagih_splitbill.png"
      }
    ],
    description: "Smart subscription manager berbasis web dengan asisten AI Gemini untuk memantau tagihan digital, mendeteksi pemborosan dana, dan mengelola split bill otomatis.",
    problem: "Di era digital modern, hampir setiap orang memiliki banyak layanan berlangganan (streaming, software AI, cloud storage). Masalah utamanya adalah pencatatan tercecer tanpa tempat terpusat, tagihan terlupakan hingga memicu auto-renewal tanpa persiapan dana, terjadinya kebocoran dana tersembunyi (overlapping dan vampire spending), serta kerumitan mengelola langganan yang dipakai bersama teman atau keluarga (Family Plan).",
    solution: "Tatagih mentransformasi manajemen pengeluaran digital melalui ekosistem Laravel 13, Tailwind CSS, dan MySQL: sentralisasi seluruh langganan di satu tempat rapi, visualisasi tren finansial 6 bulan via Chart.js, Tata Asisten AI berbasis Google Gemini untuk Financial Health Score (0-100) dan rekomendasi penghematan konkret, modul patungan dan split bill otomatis dengan verifikasi bukti transfer, serta notifikasi proaktif reminder H-3 dan H-1 via Telegram Bot berbasis Laravel Scheduler dan Queue.",
    stats: [
      {
        label: "Langganan Aktif",
        val: "13 Layanan Terkelola"
      },
      {
        label: "Pengeluaran Bulanan",
        val: "Rp 3.075.000 / bln"
      },
      {
        label: "Proyeksi Tahunan",
        val: "Rp 36.900.000 / thn"
      },
      {
        label: "Tata Asisten AI",
        val: "Health Score 65 (Gemini)"
      }
    ],
    features: [
      {
        title: "Manajemen Langganan & Auto-Renewal",
        desc: "Tambah, edit, filter kategori, auto-renewal toggle, pencatatan pembayaran berkala, dan unduh rekapan CSV pengeluaran."
      },
      {
        title: "Tata Asisten AI & Financial Health Score",
        desc: "Evaluasi kebiasaan berlangganan dengan skor kesehatan finansial 0-100 dan saran penghematan konkret bertenaga Google Gemini API."
      },
      {
        title: "Tata AI Chat Interaktif & Multi-Sesi",
        desc: "Chat asisten finansial kontekstual multi-sesi yang memahami total biaya dan langganan termahal secara kontekstual."
      },
      {
        title: "Pendeteksi Overlapping & Vampire Spending",
        desc: "Kalkulasi cerdas penghematan dana dari layanan digital dengan fungsi tumpang tindih dan pengeluaran mikro yang tidak disadari."
      },
      {
        title: "Cari Teman Patungan & Split Bill",
        desc: "Sistem patungan grup publik dan privat dengan pembagian tagihan adil, upload struk transfer, dan verifikasi status pembayaran."
      },
      {
        title: "Notifikasi Proaktif Telegram Bot",
        desc: "Otomasi notifikasi pengingat H-3 dan H-1 sebelum tanggal jatuh tempo tagihan langsung ke Telegram melalui Laravel Scheduler & Queue."
      },
      {
        title: "Financial Dashboard & Calendar (Chart.js)",
        desc: "Estimasi biaya bulanan/tahunan, kalender tanggal jatuh tempo terdekat, dan visualisasi kurva pengeluaran 6 bulan interaktif."
      },
      {
        title: "Riwayat Pembayaran & Audit Transaksi",
        desc: "Rekap seluruh pembayaran berdasarkan jumlah transaksi, nominal, tanggal, dan kategori yang tersinkronisasi ke analitik."
      }
    ],
    techStack: [
      "PHP",
      "Laravel 13",
      "Laravel Blade",
      "Tailwind CSS",
      "Vite",
      "JavaScript",
      "MySQL",
      "Chart.js",
      "Google Gemini API",
      "Telegram Bot API",
      "Laravel Scheduler & Queue"
    ],
    impact: "Mengeliminasi kebocoran dana langganan digital, mempermudah koordinasi patungan bersama teman, dan mengotomatisasi pengawasan jatuh tempo tagihan secara proaktif.",
    demoUrl: "https://tatagih.demo.agungkrisna.dev",
    demoText: "Lihat Demo",
    demoIcon: "fa-arrow-up-right-from-square",
    repoUrl: "https://github.com/ANTARTICA1/Subscription-Guard",
    repoText: "Lihat di GitHub"
  },
  {
    id: 1,
    title: "SIGAP",
    category: "Mobile Application / Mobile Security / Flutter",
    categoryType: "cyber",
    role: "Mobile Security & Flutter Developer",
    type: "Sistem Gerak Aman dari Pencurian (Device Anti-Theft & Alarm Application)",
    status: "Production Prototype (2024)",
    period: "2024",
    image: "assets/sigap_dashboard.png",
    photos: [
      {
        id: "sigap-dash",
        title: "Dashboard Utama: Mode Terkunci & Aktif",
        caption: "Antarmuka pemantauan sensor gerak akselerometer XYZ dan status charger dengan indikator radar aktif serta tombol siaga darurat.",
        imageUrl: "assets/sigap_dashboard.png"
      },
      {
        id: "sigap-lock",
        title: "Layar Darurat Immersive: PERANGKAT TERKUNCI",
        caption: "Layar darurat immersiveSticky saat alarm aktif dengan Volume Watchdog 100%, status GPS darurat, keypad angka, dan tombol buka alarm.",
        imageUrl: "assets/sigap_lockscreen.png"
      },
      {
        id: "sigap-logs",
        title: "Bukti Penyusup & Log Insiden Forensik",
        caption: "Riwayat insiden dengan stempel waktu presisi, foto penyusup otomatis dari kamera depan, dan koordinat snapshot GPS lokasi kejadian.",
        imageUrl: "assets/sigap_intruder_logs.png"
      }
    ],
    description: "Aplikasi keamanan smartphone anti-maling berbasis sensor gerak dan charger dengan alarm darurat kontinu, volume watchdog 100%, serta bukti foto penyusup dan GPS.",
    problem: "Saat smartphone ditinggalkan di ruang publik (meja kafe, perpustakaan, ruang rapat, atau stasiun pengisian daya), perangkat sangat rentan diambil atau dicabut kabel chargernya secara tiba-tiba tanpa sepengetahuan pemilik.",
    solution: "SIGAP menghadirkan sistem proteksi hardware real-time berbasis Flutter & Dart dengan siklus Detect → Alert → Lock → Record → Review: Detect memantau pergerakan fisik via stream akselerometer XYZ dan status charger; Alert memicu sirine 100% Volume Watchdog dan getaran berulang; Lock mengunci layar darurat immersiveSticky dengan validasi PIN lokal; Record memotret wajah penyusup diam-diam via kamera depan dan snapshot koordinat GPS; serta Review menyimpan bukti insiden lokal.",
    stats: [
      {
        label: "Konsep Sistem",
        val: "Detect → Alert → Lock"
      },
      {
        label: "Motion Threshold",
        val: "Δ >= 2.0 (XYZ Stream)"
      },
      {
        label: "Hardware Sensor",
        val: "Accelerometer & Charger"
      },
      {
        label: "Respons Darurat",
        val: "100% Vol Watchdog + Cam/GPS"
      }
    ],
    features: [
      {
        title: "Deteksi Gerakan Akselerometer XYZ",
        desc: "Memantau perubahan vektor akselerasi perangkat secara real-time dan memicu alarm saat ponsel diangkat atau digeser."
      },
      {
        title: "Deteksi Cabut Charger Seketika",
        desc: "Mendeteksi pemutusan arus pengisian daya secara instan saat ponsel sedang dicas di area publik."
      },
      {
        title: "Volume Watchdog 100% Anti-Bypass",
        desc: "Mengunci volume audio pada level maksimal secara persisten dan memblokir navigasi keluar hingga PIN rahasia dimasukkan."
      },
      {
        title: "Layar Darurat Immersive & Kunci PIN",
        desc: "Layar proteksi penuh yang memblokir tombol navigasi dan gestur sistem hingga 4-digit PIN yang benar diverifikasi."
      },
      {
        title: "Intruder Selfie Kamera Depan",
        desc: "Memotret wajah pengambil ponsel secara otomatis menggunakan kamera depan saat alarm terpicu sebagai bukti autentik."
      },
      {
        title: "Snapshot Titik Koordinat GPS",
        desc: "Merekam koordinat latitude dan longitude tepat pada saat insiden terjadi untuk dokumentasi pelacakan lokasi."
      },
      {
        title: "Log Riwayat Insiden Forensik",
        desc: "Menyimpan dokumentasi foto wajah penyusup, stempel waktu, dan detail pemicu alarm untuk barang bukti yang aman."
      },
      {
        title: "Kontak Cepat Peringatan Darurat",
        desc: "Tautan cepat untuk mengirimkan pesan darurat via WhatsApp atau SMS ke nomor terpercaya saat terjadi insiden."
      }
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Sensors Plus",
      "Battery Plus",
      "Camera API",
      "Geolocator",
      "Volume Controller",
      "Wakelock Plus",
      "Shared Preferences"
    ],
    impact: "Mencegah pencurian perangkat di ruang publik dengan respon seketika, pendokumentasian bukti foto pelaku, dan penguncian anti-bypass.",
    demoUrl: "",
    demoText: "Lihat Demo",
    demoIcon: "fa-arrow-up-right-from-square",
    repoUrl: "https://github.com/ANTARTICA1/sigap-flutter",
    repoText: "Lihat di GitHub"
  },
  {
    id: 2,
    title: "ITB STIKOM Bali TheoTown",
    category: "Game Modding / Plugin Development / Isometric Pixel Art & Simulation",
    categoryType: "tools",
    role: "Mod Developer & Pixel Artist",
    type: "Custom Isometric Pixel Art Educational Building Plugin for TheoTown",
    status: "Game Plugin Showcase (2024)",
    period: "2024",
    image: "assets/theotown.jpg",
    photos: [
      {
        id: "theotown-ingame",
        title: "Gedung Kampus ITB STIKOM Bali di Tengah Kota TheoTown",
        caption: "Tangkapan layar gameplay simulasi kota TheoTown menampilkan gedung kampus ITB STIKOM Bali Renon berdiri di kawasan perkotaan dengan jalan raya isometrik dan gedung pencakar langit sekitarnya.",
        imageUrl: "assets/theotown.jpg"
      }
    ],
    description: "Plugin kustom TheoTown yang menghadirkan gedung kampus ITB STIKOM Bali dengan grafis pixel art isometrik 2.5D arsitektur khas Bali serta fungsi simulasi edukasi kota aktif.",
    problem: "Dalam game simulasi tata kota TheoTown, katalog bangunan institusi pendidikan tinggi sangat terbatas dan didominasi arsitektur bergaya barat generik. Pemain yang ingin membangun kota bernuansa Indonesia tidak memiliki gedung universitas lokal berornamen khas nusantara (seperti gaya Bali). Banyak modder juga hanya membuat mod bertipe dekorasi pasif tanpa fungsi gameplay, serta tidak menyertakan struktur manifest dan panduan cross-platform (Android & PC) yang rapi.",
    solution: "ITB STIKOM Bali Building Plugin hadir sebagai modifikasi game resmi berkualitas tinggi: custom isometric pixel art (StikomBali.png) dengan sentuhan arsitektur khas Bali (atap tumpang, ornamen kukul, gerbang candi), terdaftar resmi di engine simulasi pendidikan TheoTown (kapasitas 2.500 mahasiswa dan radius pengaruh 700 tile), ground rendering aktif (draw ground: true) agar pekarangan menyatu mulus dengan medan game, serta konfigurasi code.json dan plugin.manifest multiplatform (Android & PC).",
    stats: [
      {
        label: "Dimensi Bangunan",
        val: "5 × 5 Tile Isometric"
      },
      {
        label: "Tipe Objek Game",
        val: "Type: education"
      },
      {
        label: "Kapasitas Mahasiswa",
        val: "2.500 Mahasiswa (High)"
      },
      {
        label: "Radius Pengaruh",
        val: "700 Tile (City-Wide)"
      }
    ],
    features: [
      {
        title: "Custom ITB STIKOM Bali Building (5 × 5 Tile)",
        desc: "Representasi visual kampus ITB STIKOM Bali Renon dengan ukuran tapak tanah 5 × 5 tile yang proporsional."
      },
      {
        title: "Fungsi Edukasi Fungsional (Type: education)",
        desc: "Terdaftar resmi di engine TheoTown, memberikan kontribusi nyata terhadap kebutuhan literasi dan pendidikan warga kota."
      },
      {
        title: "Parameter Kapasitas 2.500 Mahasiswa",
        desc: "Dikonfigurasi mampu menampung ribuan mahasiswa virtual untuk menurunkan angka putus sekolah dalam simulasi."
      },
      {
        title: "Radius Pengaruh Luas (Influence: 700 Tile)",
        desc: "Mencakup wilayah perkotaan luas untuk meningkatkan indeks literasi dan nilai tanah properti sekitar."
      },
      {
        title: "Desain Pixel Art Isometrik 2.5D Khas Bali",
        desc: "Asset visual digambar presisi mematuhi sudut proyeksi 2.5D dengan atap bertingkat, ornamen kukul, dan gerbang candi bentar."
      },
      {
        title: "Ground Rendering Aktif (draw ground: true)",
        desc: "Rendering tanah dasar agar pekarangan kampus, tanaman, dan trotoar berbaur sempurna dengan medan peta permainan."
      },
      {
        title: "Konfigurasi Engine via code.json & plugin.manifest",
        desc: "Skema JSON resmi TheoTown yang terstruktur dan terverifikasi untuk kemudahan integrasi Plugin Manager game."
      },
      {
        title: "Dukungan Multiplatform (Android & PC Windows)",
        desc: "Dapat dipasang dengan mudah baik di perangkat Android maupun PC Windows/Steam, disertai dokumentasi bilingual (ID/EN)."
      }
    ],
    techStack: [
      "TheoTown Plugin API",
      "JSON (code.json)",
      "Plugin Manifest",
      "Pixel Art Graphics",
      "Isometric Projection (2.5D)",
      "Ground Rendering",
      "Android & PC Compatible"
    ],
    impact: "Menghadirkan ikon representasi kampus Indonesia pertama ke ekosistem TheoTown global dengan fungsi simulasi edukasi riil dan kompatibilitas multiplatform.",
    demoUrl: "https://forum.theotown.com",
    demoText: "TheoTown Forum",
    demoIcon: "fa-arrow-up-right-from-square",
    repoUrl: "https://github.com/ANTARTICA1/PLUGIN-STIKOM-BALI-THEOTOWN",
    repoText: "Lihat di GitHub"
  },
  {
    id: 3,
    title: "NeuroFly",
    category: "Computational Neuroscience / 3D Simulation / Neuromorphic Computing",
    categoryType: "cyber",
    role: "Lead AI & Computational Neuroscience Developer",
    type: "Drosophila Connectome (MaleCNS v1.0) × 3D Pong Simulation System",
    status: "Production Showcase (2024)",
    period: "2024",
    image: "assets/neurofly_gameplay.png",
    photos: [
      {
        id: "neurofly-gameplay",
        title: "Arena Pertandingan 3D Pong: Pemain vs Agen Biologis Lalat Buah",
        caption: "Pertandingan interaktif 3D Pong retro di browser di mana pemain mengendalikan paddle melawan agen lalat buah yang digerakkan oleh sirkuit saraf biologis konektom asli.",
        imageUrl: "assets/neurofly_gameplay.png"
      },
      {
        id: "neurofly-brain",
        title: "Topologi Konektom 3D Drosophila (MaleCNS v1.0)",
        caption: "Visualisasi 3D 600 neuron Drosophila terverifikasi Janelia Research Campus dengan status firing sinapsis dinamis sesuai lintasan bola.",
        imageUrl: "assets/neurofly.jpg"
      },
      {
        id: "neurofly-telemetry",
        title: "Telemetri Sinyal Osiloskop & Evaluasi Pengontrol 60 FPS",
        caption: "Grafik multi-kanal real-time yang melacak koordinat bola (Ball Y/Z), posisi paddle pemain, dan dorongan potensial aksi motorik lalat (Neural Drive).",
        imageUrl: "assets/neurofly.png"
      }
    ],
    description: "Sistem simulasi biologis & komputasi saraf 3D yang menghubungkan konektom visual lalat buah (Drosophila MaleCNS v1.0, 600 neuron, 4.297 sinapsis) dengan gameplay 3D Pong retro real-time di mana manusia dapat bertanding langsung melawan kecerdasan saraf biologis lalat.",
    problem: "Model AI modern seperti Deep Reinforcement Learning memerlukan jutaan parameter tensor berat dan komputasi GPU besar untuk menyelesaikan tugas sensorimotorik sederhana. Sementara di alam, serangga kecil seperti lalat buah (Drosophila melanogaster) memiliki volume otak kurang dari 1 mm³ dengan konsumsi daya mikrowatt, namun mampu mendeteksi arah gerak objek dan bermanuver instan dalam milidetik.",
    solution: "NeuroFly merekonstruksi sirkuit optik biologis Drosophila dari dataset konektom MaleCNS v1.0 Janelia Research Campus (600 neuron visual dan motorik) untuk mengendalikan agen lalat secara otonom dalam permainan 3D Pong. Melalui pemodelan Hassenstein-Reichardt correlator pada neuron T4/T5 dan jalur descending motor neurons (DNs), lalat mampu melihat trajektori bola dan menggerakkan sayapnya untuk memukul bola secara presisi, menghadirkan arena pertandingan langsung melawan agen biologis di browser.",
    stats: [
      {
        label: "Connectome Dataset",
        val: "MaleCNS v1.0 Janelia"
      },
      {
        label: "Neuron & Sinapsis",
        val: "600 Neurons / 4.297 Synapses"
      },
      {
        label: "Sensory & Motion Pools",
        val: "Mi1, Tm, T4/T5, VS, DNs"
      },
      {
        label: "Gameplay Mode",
        val: "3D Pong: Human vs Fly Brain"
      }
    ],
    features: [
      {
        title: "Arena 3D Pong Interaktif (Lawan Otak Lalat)",
        desc: "Pengguna mengendalikan paddle 3D dengan keyboard maupun drag mouse untuk bertanding melawan saraf biologis lalat secara real-time."
      },
      {
        title: "Model Saraf Drosophila MaleCNS v1.0",
        desc: "Memetakan 600 neuron biologis terverifikasi Janelia Research Campus yang merekonstruksi sirkuit penglihatan dan lokomosi alami Drosophila."
      },
      {
        title: "Visualisasi 3D Fly Brain Monitor",
        desc: "Tampilan volumetrik 3D otak lalat dan mode graf konektom dengan titik neuron yang menyala real-time sesuai pergerakan bola di lapangan."
      },
      {
        title: "Deteksi Gerak Elementer (T4/T5 & VS)",
        desc: "Menerapkan komputasi Hassenstein-Reichardt correlator untuk membedakan gerak bola ke atas (UP motion) dan bawah (DOWN motion)."
      },
      {
        title: "Descending Neurons (DNs) Transduction",
        desc: "Mengonversi potensial aksi sinaptik menjadi dorongan motorik sayap lalat untuk membelokkan lintasan bola kembali ke arah pemain."
      },
      {
        title: "Real-Time Telemetry Oscilloscope 60 FPS",
        desc: "Osiloskop gelombang multi-saluran 60 FPS yang membandingkan koordinat bola, posisi paddle pemain, dan neural drive lalat secara simultan."
      },
      {
        title: "Evaluasi Komparatif Kontroler Saraf",
        desc: "Metrik statistik performa hit rate dan rata-rata rally antara Fly Visual Controller, Descending Motor, dan Random Baseline."
      }
    ],
    techStack: [
      "Drosophila MaleCNS v1.0",
      "HTML5 3D Canvas",
      "Leaky Integrate-and-Fire (LIF)",
      "Hassenstein-Reichardt Correlators",
      "neuPrint API",
      "Oscilloscope Telemetry",
      "JavaScript ES6",
      "NumPy & SciPy"
    ],
    impact: "Membuktikan komputasi saraf biologis alami dapat diadaptasi untuk interaksi permainan real-time di web tanpa ketergantungan tensor AI berdaya tinggi.",
    demoUrl: "https://neurofly.agungkrisna.dev",
    demoText: "Live Simulation",
    demoIcon: "fa-arrow-up-right-from-square",
    repoUrl: "https://github.com/agungkrisna/neurofly",
    repoText: "Lihat di GitHub"
  },
  {
    id: 4,
    title: "Temuin",
    category: "Mobile Application / Lost & Found Platform / Full-Stack Application",
    categoryType: "web",
    role: "Full-Stack Mobile Developer",
    type: "Platform Pelacak & Penemu Barang Hilang Berbasis QR Code",
    status: "Production Prototype (2024)",
    period: "2024",
    image: "assets/temuin.png",
    photos: [
      {
        id: "temuin-qr",
        title: "Detail Barang & Cetak QR Code Anti-Hilang",
        caption: "Tampilan detail inventaris barang berstatus aman dengan generator QR Code presisi tinggi untuk dicetak dan ditempelkan pada barang fisik, serta tombol darurat 'Tandai Barang Hilang'.",
        imageUrl: "assets/temuin_qrcode.png"
      },
      {
        id: "temuin-notif",
        title: "Notifikasi Temuan Real-Time & Modal Laporan GPS",
        caption: "Antarmuka notifikasi saat barang yang hilang ditemukan oleh penemu, dilengkapi ringkasan status DITEMUKAN, koordinat snapshot GPS, dan detail foto laporan.",
        imageUrl: "assets/temuin_notification.png"
      }
    ],
    description: "Platform pelacak dan penemu barang hilang berbasis kode QR unik dengan snapshot lokasi GPS, dokumentasi bukti foto, dan notifikasi real-time ke pemilik.",
    problem: "Barang berharga yang tertinggal atau tercecer di ruang publik (kunci motor, dompet, tas, dokumen) sering kali sulit dikembalikan karena penemu tidak memiliki saluran komunikasi langsung kepada pemilik sah tanpa mengekspos data pribadi. Selain itu, titik lokasi penemuan sering tidak terdokumentasi dengan akurat dan pemilik tidak memiliki sistem terstruktur untuk memantau status barang miliknya.",
    solution: "Temuin menyediakan infrastruktur digital pelacak barang hilang melalui alur: Pemilik Barang → QR Code → Penemu → Laporan → Lokasi GPS → Notifikasi In-App → Pemilik. Setiap barang diberi stiker QR unik yang jika dipindai penemu akan membuka formulir pelaporan dengan snapshot lokasi GPS dan foto bukti, langsung memberitahu pemilik secara real-time tanpa membocorkan nomor telepon atau identitas pribadi pemilik.",
    stats: [
      {
        label: "Identitas Barang",
        val: "QR Code Unik Tiap Item"
      },
      {
        label: "Siklus Status",
        val: "Safe → Lost → Found → Claimed"
      },
      {
        label: "Pencatatan Temuan",
        val: "GPS Snapshot & Foto Bukti"
      },
      {
        label: "Monetisasi",
        val: "Rp15.000 Boost via Midtrans"
      }
    ],
    features: [
      {
        title: "QR Code Unik Tiap Barang (qr_flutter)",
        desc: "Menghasilkan stiker QR Code unik sebagai identitas digital penghubung barang fisik ke sistem tanpa membuka kontak pribadi."
      },
      {
        title: "Pemindai Kamera Cepat (mobile_scanner)",
        desc: "Membaca kode QR pada barang temuan secara cepat menggunakan kamera smartphone dan memicu alur pelaporan penemuan."
      },
      {
        title: "Snapshot Titik Lokasi GPS (geolocator)",
        desc: "Mencatat koordinat latitude dan longitude tepat pada saat laporan penemuan dibuat untuk membantu pemilik mengenali lokasi barang."
      },
      {
        title: "Dokumentasi Foto Bukti (image_picker)",
        desc: "Penemu dapat menyertakan foto kondisi barang saat ditemukan sebagai bukti fisik autentik yang tersimpan di sistem."
      },
      {
        title: "Siklus Status Barang Terstruktur",
        desc: "Mengelola siklus hidup status barang secara bertahap: Safe (Aman) → Lost (Hilang) → Found (Ditemukan) → Claimed (Selesai)."
      },
      {
        title: "Validasi Server Anti Self-Claim",
        desc: "Logika backend yang memvalidasi bahwa pemilik dilarang melaporkan barang miliknya sendiri sebagai barang yang ia temukan."
      },
      {
        title: "Sistem Notifikasi In-App Otomatis",
        desc: "Pemilik langsung menerima pemberitahuan otomatis sesaat setelah laporan penemuan berhasil dikirimkan oleh penemu."
      },
      {
        title: "Autentikasi Aman & Bearer Token",
        desc: "Enkripsi password dengan BCRYPT dan otorisasi API menggunakan custom token bertanda tangan HMAC-SHA256."
      },
      {
        title: "Monetisasi Boost Postingan (Midtrans Snap)",
        desc: "Dukungan pembayaran digital Rp15.000 untuk memprioritaskan barang hilang menjadi featured dengan verifikasi webhook SHA-512."
      },
      {
        title: "Web Admin Dashboard (PHP Native)",
        desc: "Panel kontrol terpusat bagi administrator untuk memantau data pengguna, inventaris barang, dan audit laporan."
      }
    ],
    techStack: [
      "Flutter",
      "Dart",
      "PHP Native",
      "MySQL & PDO",
      "Midtrans Snap",
      "mobile_scanner",
      "qr_flutter",
      "geolocator",
      "Material 3"
    ],
    impact: "Menghubungkan penemu dan pemilik barang hilang dengan aman tanpa kebocoran data pribadi, didukung bukti foto dan titik koordinat GPS yang akurat.",
    demoUrl: "",
    demoText: "Lihat Demo",
    demoIcon: "fa-arrow-up-right-from-square",
    repoUrl: "https://github.com/ANTARTICA1/temuin-flutter",
    repoText: "Lihat di GitHub"
  },
  {
    id: 5,
    title: "Lintas",
    category: "Cross-Device System / Local Networking / Flutter & Native Windows Integration",
    categoryType: "tools",
    role: "Systems & Cross-Platform Developer",
    type: "Cross-Device Productivity Ecosystem (Android Mobile & Windows Companion)",
    status: "Production Showcase (2024)",
    period: "2024",
    image: "assets/lintas.jpg",
    photos: [
      {
        id: "lintas-companion",
        title: "Windows Companion Host - Status Server Port 8945, Pairing QR Code & Drop Zone",
        caption: "Dashboard pusat kendali Lintas di Windows 11. Menampilkan status local server aktif pada port 8945 (HTTP & WebSocket), alamat IP lokal 192.168.1.12, dynamic QR Code ber-token expiration untuk pairing cepat Android, daftar trusted client yang terhubung, indikator status NearLock, serta Drop Zone pengiriman berkas langsung dari PC.",
        imageUrl: "assets/lintas.jpg"
      }
    ],
    description: "Ekosistem produktivitas lintas perangkat yang menghubungkan smartphone Android dan PC Windows via Wi-Fi lokal untuk remote trackpad, transfer berkas instan berintegritas SHA-256, dan auto-lock PC (NearLock).",
    problem: "Dalam aktivitas kerja sehari-hari, pengguna laptop Windows sering direpotkan saat harus berbagi berkas atau mengontrol laptop dari jarak jauh: kirim file/teks lewat chat WhatsApp/Drive yang boros kuota dan berisiko privasi; saat presentasi atau menonton video dari sofa harus tetap berdiri di dekat keyboard/mouse fisik PC; serta kebiasaan lupa mengunci workstation (Win + L) saat meninggalkan meja kerja di kantor atau kafe.",
    solution: "Lintas hadir sebagai ekosistem produktivitas lintas perangkat yang menghubungkan smartphone Android dan komputer Windows via Wi-Fi lokal (LAN) tanpa server pihak ketiga: Windows Companion menjalankan server HTTP & WebSocket lokal pada port 8945 dengan pairing instan QR Code bertoken; remote touchpad multi-gesture & keyboard virtual via Windows Input API; Instant Drop 2 arah dengan verifikasi hash SHA-256 otomatis; sinkronisasi clipboard universal; dan fitur NearLock yang mengunci Windows workstation otomatis saat ponsel menjauh.",
    stats: [
      {
        label: "Arsitektur Sistem",
        val: "Local Client-Server (Zero Cloud)"
      },
      {
        label: "Port Komunikasi",
        val: "Port 8945 (HTTP & WebSocket)"
      },
      {
        label: "Verifikasi Integritas",
        val: "SHA-256 Checksum Matching"
      },
      {
        label: "Proteksi NearLock",
        val: "Auto-Lock PC by Phone Proximity"
      }
    ],
    features: [
      {
        title: "Pairing Cepat via QR Code & Token Kedaluwarsa",
        desc: "Mekanisme pairing instan dengan memindai QR Code dari layar Windows berisi IP lokal, port 8945, session identifier, nonce, dan token ber-expiration."
      },
      {
        title: "LAN Auto-Discovery Bebas Ketik IP",
        desc: "Fitur pemindaian otomatis perangkat di jaringan Wi-Fi lokal yang sama, menghubungkan Android dan PC tanpa mengharuskan pengguna menghafal IP."
      },
      {
        title: "Remote Touchpad Presisi & Multi-Touch Gesture",
        desc: "Mengubah layar ponsel menjadi touchpad nirkabel responsif dengan pergerakan kursor halus, klik kiri/kanan, scroll 2 jari, dan drag-and-drop."
      },
      {
        title: "Virtual Keyboard Lengkap dengan Tombol Modifier",
        desc: "Keyboard virtual ponsel yang mendukung tombol modifier Ctrl, Alt, Shift, tombol panah navigasi, dan tombol Windows."
      },
      {
        title: "Instant Drop - Transfer Berkas 2 Arah Jaringan Lokal",
        desc: "Transfer file dua arah melalui jaringan lokal berkecepatan tinggi tanpa internet, dilengkapi Drop Zone dan perkiraan kecepatan ETA."
      },
      {
        title: "Verifikasi Integritas File Berbasis SHA-256",
        desc: "Hash SHA-256 dihitung sebelum dan sesudah pengiriman berkas untuk menjamin keaslian data 100% tanpa korupsi."
      },
      {
        title: "Universal Clipboard & Deteksi URL Cerdas",
        desc: "Sinkronisasi riwayat clipboard 2 arah secara real-time dengan pengenalan format tautan web yang dapat langsung dibuka di browser tujuan."
      },
      {
        title: "NearLock - Penguncian PC Otomatis Berdasarkan Jarak",
        desc: "Memantau kedekatan smartphone dan mengunci Windows workstation secara otomatis saat ponsel berada di luar jangkauan melewati grace period."
      },
      {
        title: "Mode Presentasi & Timer Durasi Bicara",
        desc: "Mengubah ponsel menjadi remote slide nirkabel (Next/Prev, Black Screen) yang dilengkapi stopwatch timer pemantau durasi."
      },
      {
        title: "Integrasi Native Windows API (SendInput & Win32)",
        desc: "Menghubungkan aplikasi Flutter secara langsung dengan Windows API melalui C++ runner untuk mengeksekusi kontrol kursor mouse dan workstation."
      }
    ],
    techStack: [
      "Flutter & Dart",
      "C++ / Windows Runner",
      "Flutter Riverpod",
      "Local HTTP & WebSocket (Port 8945)",
      "SHA-256 Checksum",
      "Win32 API",
      "QR Code (mobile_scanner)"
    ],
    impact: "Menghilangkan ketergantungan cloud untuk transfer data lokal, meningkatkan produktivitas kontrol komputer nirkabel, dan melindungi keamanan workstation saat ditinggalkan.",
    demoUrl: "https://lintas.demo.agungkrisna.dev",
    demoText: "Live Demo",
    demoIcon: "fa-arrow-up-right-from-square",
    repoUrl: "https://github.com/ANTARTICA1/lintas-flutter",
    repoText: "Lihat di GitHub"
  },
  {
    id: 6,
    title: "NenaCare",
    category: "Full-Stack Web App / AI Automation / K3 Safety & Incident Management",
    categoryType: "web",
    role: "Lead Fullstack & AI Integration Developer",
    type: "AI-Powered K3 Incident Reporting & Monitoring System",
    status: "Production Showcase (2024)",
    period: "2024",
    image: "assets/nenacare.jpg",
    photos: [
      {
        id: "nenacare-dash",
        title: "Admin Live Monitoring Feed, Status Workflow & Statistik K3",
        caption: "Pusat kendali dan monitoring insiden K3 Nena Cafe secara real-time. Menampilkan ringkasan KPI (Total Insiden, Menunggu, Diproses, Selesai, dan Prioritas Tinggi terdeteksi AI), Live Feed laporan insiden lengkap dengan kategori, badge prioritas AI, serta visualisasi Chart.js status distribusi dan frekuensi kategori insiden.",
        imageUrl: "assets/nenacare.jpg"
      }
    ],
    description: "Sistem manajemen keselamatan kerja (K3) berbasis AI Gemini dan integrasi Telegram Bot untuk pelaporan insiden, analisis risiko otomatis, dan monitoring real-time industri F&B.",
    problem: "Di lingkungan kafe dan industri F&B yang dinamis (seperti Nena Cafe), potensi bahaya keselamatan kerja (K3)—mulai dari kebocoran gas LPG dapur, kabel kelistrikan terbuka, lantai licin, hingga isu ergonomi—sering kali terlambat dilaporkan karena proses manual yang kaku. Staf maupun pelanggan enggan melapor karena khawatir identitasnya terekspos, sementara pihak manajemen kesulitan memilah mana insiden berisiko tinggi tanpa standarisasi prioritas yang cepat.",
    solution: "NenaCare mentransformasi penanganan keselamatan kerja menjadi sistem digital terpadu end-to-end: Pelaporan Mudah & Opsional Anonim → Analisis Risiko Otomatis berbasis Google Gemini 2.5 Flash-Lite → Notifikasi Cepat & Remote Control Status via Telegram Bot → Live Monitoring Dashboard dengan Visualisasi Chart.js → Dokumentasi Audit & Ekspor PDF Dompdf. Pengelola kafe mendapatkan peringatan dini seketika dengan rekomendasi tindakan mitigasi terukur.",
    stats: [
      {
        label: "Analisis AI Gemini",
        val: "Prioritas & Tindakan Otomatis"
      },
      {
        label: "Remote Notifikasi",
        val: "Telegram Bot Interactive Action"
      },
      {
        label: "Mode Pelaporan",
        val: "Identitas Publik / 100% Anonim"
      },
      {
        label: "Audit & Pelaporan",
        val: "Ekspor PDF Landscape & Chart.js"
      }
    ],
    features: [
      {
        title: "Sistem Pelaporan Insiden K3 F&B",
        desc: "Formulir pelaporan responsif yang mencakup 4 kategori insiden (Api & Gas, Kelistrikan, Lingkungan & Kebersihan, Ergonomi & APD), lokasi kejadian, dan detail kronologi."
      },
      {
        title: "Mode Laporan Anonim Berstandar Privasi",
        desc: "Fitur perlindungan identitas yang mengosongkan nama di database agar pelapor merasa aman untuk melaporkan bahaya tanpa intimidasi."
      },
      {
        title: "AI Analyst Berbasis Google Gemini 2.5 Flash-Lite",
        desc: "Setiap insiden diproses AI untuk mengevaluasi risiko kejadian, menentukan level prioritas (Tinggi, Normal, Rendah), dan saran mitigasi cepat."
      },
      {
        title: "Pemrosesan Output Terstruktur JSON",
        desc: "AI mengembalikan data terstruktur format JSON yang secara otomatis diparsing oleh backend PHP dan disimpan ke database relasional."
      },
      {
        title: "Live Monitoring Feed & Visual Cards",
        desc: "Aliran laporan insiden secara transparan dengan lencana kategori, indikator urgensi, status penanganan, dan ringkasan insight AI."
      },
      {
        title: "Pusat Analitik & Visualisasi Chart.js",
        desc: "Admin dashboard interaktif dengan Doughnut Chart untuk distribusi status serta Bar Chart untuk perbandingan volume insiden per kategori."
      },
      {
        title: "Telegram Bot Notification & Remote Action",
        desc: "Integrasi Telegram Bot dua arah: mengirim notifikasi instan laporan baru ke ponsel admin dan menerima respon tombol inline (Proses/Selesai)."
      },
      {
        title: "Ekspor Dokumen Laporan Resmi ke PDF (Dompdf)",
        desc: "Pembuatan arsip laporan K3 format A4 landscape otomatis sesuai filter yang dipilih untuk kebutuhan audit formal."
      }
    ],
    techStack: [
      "PHP (OOP)",
      "MySQL & MySQLi",
      "Google Gemini 2.5 Flash-Lite API",
      "Telegram Bot API",
      "Chart.js",
      "Dompdf",
      "JavaScript",
      "HTML5 & CSS3"
    ],
    impact: "Mempercepat respon tanggap darurat bahaya K3 dari hitungan jam menjadi hitungan menit, menjaga keselamatan staf dan pengunjung kafe secara proaktif.",
    demoUrl: "https://nenacare.demo.agungkrisna.dev",
    demoText: "Live Demo",
    demoIcon: "fa-arrow-up-right-from-square",
    repoUrl: "https://github.com/ANTARTICA1/NenaCare",
    repoText: "Lihat di GitHub"
  },
  {
    id: 7,
    title: "Bingkai",
    category: "Desktop Utility / Local-First Photo Gallery / Python & Alpine.js",
    categoryType: "tools",
    role: "Desktop & Full-Stack Developer",
    type: "Membantu yang berserakan kembali beraturan (Smart Local Photo Gallery & Review Manager)",
    status: "Production Prototype (2024)",
    period: "2024",
    image: "assets/bingkai.png",
    photos: [
      {
        id: "bingkai-remote",
        title: "Akses Remote HP & Info Sistem (Wi-Fi Lokal)",
        caption: "Fitur kendali jarak jauh melalui browser smartphone via scan QR code jaringan Wi-Fi lokal (IP http://192.168.1.7:8080), didukung engine database SQLite WAL dan Gamepad API.",
        imageUrl: "assets/bingkai_remote.png"
      },
      {
        id: "bingkai-viewer",
        title: "Photo Viewer & File Inspector",
        caption: "Antarmuka inspeksi foto detail dengan aksi cepat: ubah nama (Y), pindah folder (M), masuk album (Alb), dan hapus ke trash (A), dilengkapi informasi dimensi, ukuran file, tanggal, serta path lokal file komputer.",
        imageUrl: "assets/bingkai_viewer.png"
      },
      {
        id: "bingkai-gamepad",
        title: "Panduan Tombol Pintasan (Stick Gamepad & Keyboard)",
        caption: "Dukungan kontrol penuh dengan controller stick game (Xbox Wireless Controller / PlayStation) via Gamepad API untuk navigasi galeri, zoom, putar foto, favorit, dan kurasi foto langsung dari sofa.",
        imageUrl: "assets/bingkai_gamepad.png"
      }
    ],
    description: "Aplikasi galeri foto lokal (Local-First) untuk merapikan ribuan foto secara cepat lewat kurasi swipe, deteksi foto kembar, dan remote kontrol via smartphone atau gamepad.",
    problem: "Kita semua punya folder foto di laptop yang isinya ribuan gambar tak beraturan. Merapikannya terasa melelahkan karena harus klik satu per satu di depan meja kerja. Ingin pakai layanan Cloud seperti Google Photos, tapi takut privasi bocor atau malas menunggu upload berjam-jam untuk file bergiga-giga. Ditambah lagi, melihat foto di depan monitor pakai mouse terasa kaku dan kurang santai.",
    solution: "Bingkai bekerja 100% di dalam komputer pengguna secara offline (Local-First). Foto tidak dipindah, tidak diduplikasi, dan sama sekali tidak diunggah ke internet. Bingkai hanya 'membaca' folder lokal dan menyajikannya dalam galeri modern yang super cepat. Pengguna juga bisa mengontrol galeri foto komputernya dari jarak jauh—cukup rebahan di sofa sambil menikmati kenangan menggunakan Smartphone (Wi-Fi lokal) atau Stick Gamepad (PlayStation/Xbox via Gamepad API).",
    stats: [
      {
        label: "Privasi Data",
        val: "100% Offline (Local-First)"
      },
      {
        label: "Kontrol Jarak Jauh",
        val: "Stick Gamepad & HP Wi-Fi"
      },
      {
        label: "Kurasi Foto",
        val: "Swipe Mode (Tinder-Style)"
      },
      {
        label: "Optimasi Memori",
        val: "Pendeteksi Foto Kembar"
      }
    ],
    features: [
      {
        title: "100% Offline & Privasi Terjaga (Local-First)",
        desc: "Seluruh foto dan database tersimpan aman di disk komputer tanpa ada satu byte pun yang diunggah ke internet."
      },
      {
        title: "Remote Kendali HP via Wi-Fi Lokal",
        desc: "Cukup scan QR code di layar untuk mengendalikan galeri laptop dari browser smartphone di jaringan Wi-Fi yang sama."
      },
      {
        title: "Dukungan Stick Gamepad (PlayStation & Xbox)",
        desc: "Navigasi galeri, zoom, putar foto, dan kurasi menggunakan tombol stik controller via Gamepad API sambil rebahan di sofa."
      },
      {
        title: "Kurasi Cepat Swipe Mode",
        desc: "Memilah foto favorit atau membuang foto buram ke tong sampah sistem dengan cepat menggunakan tombol panah atau tombol stik."
      },
      {
        title: "Pendeteksi Foto Kembar & Duplikat",
        desc: "Menganalisis kemiripan visual foto untuk menemukan jepretan ganda dan membebaskan ruang penyimpanan laptop."
      },
      {
        title: "Photo Viewer & File Inspector Lengkap",
        desc: "Menampilkan metadata foto lengkap (resolusi, ukuran file, tanggal, path lokal) disertai aksi cepat ganti nama atau pindah album."
      }
    ],
    techStack: [
      "Python",
      "FastAPI",
      "SQLite (WAL mode)",
      "Alpine.js",
      "Tailwind CSS",
      "Pillow-WebP",
      "Gamepad API",
      "Local Wi-Fi Remote"
    ],
    impact: "Menjadikan kurasi ribuan foto lokal menyenangkan, menjaga privasi 100% tanpa biaya cloud, dan memberikan fleksibilitas kendali jarak jauh nirkabel.",
    demoUrl: "",
    demoText: "Lihat Demo",
    demoIcon: "fa-arrow-up-right-from-square",
    repoUrl: "https://github.com/ANTARTICA1/bingkai-app",
    repoText: "Lihat di GitHub"
  },
  {
    id: 8,
    title: "Makalah Generator",
    category: "Web Application & Generative AI",
    categoryType: "web",
    role: "AI Systems & Web Developer",
    type: "AI Academic Draft & Citation Assistant",
    status: "Portfolio Project Showcase (2024)",
    period: "2024",
    image: "assets/makalah.jpg",
    photos: [
      {
        id: "makalah-dash",
        title: "Editor AI Penulisan Draf Akademik & Sitasi",
        caption: "Antarmuka pembuat kerangka riset dengan asisten AI yang merumuskan latar belakang, tinjauan pustaka, dan sitasi standar akademik.",
        imageUrl: "assets/makalah.jpg"
      }
    ],
    description: "Asisten penulisan ilmiah berbasis AI untuk menyusun kerangka riset terstruktur dan format sitasi standar akademik (APA, IEEE, Harvard) secara otomatis.",
    problem: "Penyusunan kerangka awal draf penelitian, perumusan rumusan masalah, dan pengorganisasian daftar pustaka sesuai kaidah ilmiah sering kali memakan waktu berhari-hari bagi mahasiswa dan peneliti akademis.",
    solution: "Makalah Generator mengotomatisasi penyusunan outline riset dan penataan referensi sitasi secara terstruktur sesuai kaidah penulisan ilmiah standar: menghasilkan rumusan masalah, tinjauan pustaka, dan metodologi riset yang koheren, memformat sitasi otomatis sesuai standar APA/IEEE/Harvard, serta menyediakan opsi ekspor instan ke format dokumen cetak PDF dan source code LaTeX.",
    stats: [
      {
        label: "Model AI",
        val: "GPT-4 / Gemini Pipeline"
      },
      {
        label: "Standar Sitasi",
        val: "APA 7th, IEEE, Harvard"
      },
      {
        label: "Format Ekspor",
        val: "PDF & LaTeX Source"
      },
      {
        label: "Waktu Draf",
        val: "< 45 Detik"
      }
    ],
    features: [
      {
        title: "Perumusan Outline Riset Terstruktur",
        desc: "Menghasilkan bab dan sub-bab ilmiah yang komprehensif mulai dari pendahuluan, metodologi, hingga kesimpulan."
      },
      {
        title: "Format Sitasi Standar Otomatis",
        desc: "Mendukung format kutipan dan daftar pustaka standar akademik internasional: APA 7th Edition, IEEE, dan Harvard."
      },
      {
        title: "Prompt Engineering Terarah Akademis",
        desc: "Sistem prompt khusus yang meminimalkan halusinasi dan memastikan terminologi akademis formal yang valid."
      },
      {
        title: "Ekspor Dokumen Siap Pakai (PDF & LaTeX)",
        desc: "Menghasilkan naskah yang siap dicetak dalam format PDF atau diolah lebih lanjut dalam source code LaTeX."
      }
    ],
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI / Gemini API",
      "LaTeX Engine",
      "PDF Generator"
    ],
    impact: "Mempercepat proses riset awal dan penyusunan draf akademik hingga 70% dengan kepatuhan format sitasi ilmiah yang konsisten.",
    demoUrl: "https://makalah-gen.vercel.app",
    demoText: "Live Demo",
    demoIcon: "fa-arrow-up-right-from-square",
    repoUrl: "https://github.com/ANTARTICA1/makalah-generator",
    repoText: "Lihat di GitHub"
  },
  {
    id: 9,
    title: "DompetQ",
    category: "Mobile Application & Fintech",
    categoryType: "tools",
    role: "Mobile & Backend Developer",
    type: "Fintech E-Wallet Mobile Application",
    status: "Portfolio Project Showcase (2023)",
    period: "2023",
    image: "assets/dompetq.jpg",
    photos: [
      {
        id: "dompetq-dash",
        title: "Dashboard Keuangan & Saldo Real-Time",
        caption: "Tampilan saldo utama, aksi cepat transfer, scan QRIS, top-up saldo, dan rekap mutasi transaksi harian.",
        imageUrl: "assets/dompetq.jpg"
      }
    ],
    description: "Aplikasi dompet digital modern dengan fitur transaksi QRIS instan, pembagian tagihan split-bill otomatis, dan analitik budgeting bulanan yang cerdas.",
    problem: "Pencatatan pengeluaran harian dan pengelolaan saldo e-wallet sering terpecah-pecah di berbagai aplikasi, menyulitkan pengguna dalam mengontrol batas anggaran bulanan dan membagi tagihan makan bersama.",
    solution: "DompetQ memadukan dompet digital dengan pelacak keuangan cerdas: transaksi QRIS instan berlatensi rendah (<200ms), autentikasi biometrik & enkripsi PIN bertingkat, fitur split-bill otomatis untuk pembagian tagihan adil, serta visualisasi mutasi transaksi dan grafik breakdown anggaran bulanan.",
    stats: [
      {
        label: "Fitur Utama",
        val: "QRIS & Split Bill"
      },
      {
        label: "Keamanan",
        val: "Biometric & PIN Encryption"
      },
      {
        label: "Latency Transaksi",
        val: "< 200ms"
      },
      {
        label: "Analitik Keuangan",
        val: "Monthly Budget Breakdown"
      }
    ],
    features: [
      {
        title: "Transaksi QRIS Cepat & Praktis",
        desc: "Kemampuan memindai dan memproses transaksi kode QRIS nasional secara seketika dengan feedback instan."
      },
      {
        title: "Fitur Pembagian Tagihan (Split Bill)",
        desc: "Membagi total tagihan restoran atau belanja kelompok secara otomatis dan adil dengan pencatatan status pelunasan."
      },
      {
        title: "Analitik & Visualisasi Budgeting Bulanan",
        desc: "Pemantauan pengeluaran harian dan bulanan dengan diagram kategori untuk mencegah pemborosan."
      },
      {
        title: "Keamanan Bertingkat (Biometric & PIN)",
        desc: "Proteksi transaksi menggunakan sidik jari/Face ID dan otentikasi PIN 6 digit terenkripsi."
      }
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Biometric Auth",
      "Material 3"
    ],
    impact: "Menyederhanakan pengelolaan keuangan harian generasi muda dengan transaksi QRIS instan dan pembagian tagihan kelompok transparan.",
    demoUrl: "https://demo.dompetq.app",
    demoText: "Live Demo",
    demoIcon: "fa-arrow-up-right-from-square",
    repoUrl: "https://github.com/ANTARTICA1/dompetq",
    repoText: "Lihat di GitHub"
  }
];

if (typeof window !== "undefined") {
  window.projectsData = projectsData;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = projectsData;
}
