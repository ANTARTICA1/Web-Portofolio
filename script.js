
function startPortfolioApp() {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 700,
      once: true,
      mirror: false,
      offset: 30,
      easing: "ease-out-cubic",
    });
  }

  initTypewriter();
  initFullscreenProjectsGSAP();
  initNavbarMobileAutoClose();
  initTerminalConsole();
  updateArchiveCategoryCounts();
  initSkillsMatrixAnimation();
}

function initSkillsMatrixAnimation() {
  const skillCards = document.querySelectorAll(".skill-card-modern");
  if (!skillCards.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const bar = card.querySelector(".skill-progress-bar");
          const percentEl = card.querySelector(".skill-card-percent");

          const targetWidth = (bar && bar.getAttribute("data-width")) || "85%";
          const targetNum = parseInt(targetWidth, 10) || 85;

          if (bar) {
            bar.style.width = "0%";
            setTimeout(() => {
              bar.style.width = targetWidth;
            }, 120);
          }

          if (percentEl) {
            let current = 0;
            percentEl.textContent = "0%";
            const duration = 1100;
            const stepTime = Math.max(14, Math.floor(duration / targetNum));
            const timer = setInterval(() => {
              current++;
              percentEl.textContent = current + "%";
              if (current >= targetNum) {
                clearInterval(timer);
                percentEl.textContent = targetNum + "%";
              }
            }, stepTime);
          }

          observer.unobserve(card);
        }
      });
    },
    { threshold: 0.2 }
  );

  skillCards.forEach((card) => {
    observer.observe(card);
  });
}

function initNavbarMobileAutoClose() {
  document.querySelectorAll(".navbar-nav .nav-link, .btn-nav-hire").forEach((link) => {
    link.addEventListener("click", () => {
      const navbarCollapse = document.getElementById("navbarNav");
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });
}

function initChatbot() {
  initTerminalConsole();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startPortfolioApp);
} else {
  startPortfolioApp();
}

const textElement = document.getElementById("typing-text");
const phrases = ["CYBER SECURITY SPECIALIST", "WEB DEVELOPER", "SYSTEM SECURITY ANALYST"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 120;

function initTypewriter() {
  const el = document.getElementById("typing-text");
  if (!el) return;

  function typeStep() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      el.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      el.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typeSpeed = 2200;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 400;
    }

    setTimeout(typeStep, typeSpeed);
  }

  setTimeout(typeStep, 600);
}

const projectsData = [
  {
    id: 0,
    title: "Institutional Web Redesign",
    category: "Web Engineering & UI/UX Redesign",
    categoryType: "web",
    role: "Lead UI/UX & Frontend Developer",
    type: "Academic & Institutional Portal",
    status: "Live & Deployed",
    image: "img/project1.png",
    problem:
      "Antarmuka lama website institusi ITB STIKOM Bali memiliki hierarki informasi yang padat, struktur navigasi bertingkat yang membingungkan pengunjung baru, serta belum optimal saat diakses melalui perangkat layar kecil (smartphone/tablet). Hal ini mengakibatkan tingginya bounce rate dan kelambatan mahasiswa dalam menemukan informasi akademik penting.",
    solution:
      "Melakukan redesain antarmuka secara komprehensif berlandaskan metodologi User-Centered Design. Merestrukturisasi Information Architecture (IA) dengan sistem navigasi modern, mengimplementasikan grid responsif mobile-first, tipografi berhierarki jelas, serta mengoptimalkan aset grafis untuk mencapai Core Web Vitals yang maksimal.",
    features: [
      {
        title: "Mobile-First Fluid Layout",
        desc: "Tampilan beradaptasi mulus dari resolusi smartphone 360px hingga layar desktop ultrawide 4K tanpa distorsi layout.",
      },
      {
        title: "Academic Program Showcase",
        desc: "Katalog interaktif seluruh program studi dilengkapi silabus kurikulum, profil lulusan, dan akreditasi secara transparan.",
      },
      {
        title: "Interactive News & Announcement Feed",
        desc: "Pusat warta kampus terpadu dengan penyaringan kategori pengumuman beasiswa, seminar nasional, dan agenda akademik.",
      },
      {
        title: "High-Performance Clean Code",
        desc: "Struktur markup semantik HTML5 dan CSS modern yang meminimalkan layout shift (CLS) dan mempercepat waktu muat halaman.",
      },
    ],
    techStack: ["HTML5", "CSS3", "JavaScript ES6", "Bootstrap 5", "Font Awesome", "Figma UI/UX", "Mobile-First"],
    impact:
      "Menghadirkan pengalaman pengguna yang jauh lebih segar, profesional, dan modern. Mempersingkat waktu pencarian informasi program studi hingga 50% dan meningkatkan kenyamanan akses mahasiswa di perangkat seluler.",
    demoUrl: "https://antartica1.github.io/Website-Stikom-UAS/html/index.html",
    demoText: "Kunjungi Live Demo",
    demoIcon: "fa-arrow-up-right-from-square",
    repoUrl: "https://github.com/ANTARTICA1/Website-Stikom-UAS",
    repoText: "Lihat Repositori GitHub",
  },
  {
    id: 1,
    title: "Customer Management System (Aplikasi Laundry)",
    category: "Fullstack Web & Management Information System",
    categoryType: "web",
    role: "Fullstack Developer & Database Architect",
    type: "Commercial Business Application",
    status: "Production Ready",
    image: "img/project2.png",
    problem:
      "Operasional usaha jasa cuci pakaian (laundry) manual sering mengalami kendala pencatatan nota fisik yang hilang, ketidakakuratan perhitungan timbangan kiloan, kekeliruan melacak antrean cucian, serta kesulitan dalam merekapitulasi laporan pendapatan harian dan bulanan.",
    solution:
      "Membangun aplikasi web sistem informasi terpusat berbasis arsitektur database relasional MySQL. Mengotomatisasi alur pesanan kasir, perhitungan tarif per kilogram/satuan, pelacakan siklus cucian realtime (Diterima -> Dicuci -> Dikeringkan -> Disetrika -> Siap Diambil), serta dashboard laporan keuangan.",
    features: [
      {
        title: "Realtime Laundry Status Cycle",
        desc: "Pemantauan progres setiap pesanan dari nota dicetak hingga pakaian siap diserahkan ke pelanggan.",
      },
      {
        title: "Customer Database & Order History",
        desc: "Manajemen kontak pelanggan dan riwayat transaksi untuk memudahkan retensi dan layanan pelanggan.",
      },
      {
        title: "Automated Financial Reporting",
        desc: "Rekapitulasi otomatis pendapatan kotor, omset harian/bulanan, dan pencetakan invoice nota pembayaran.",
      },
      {
        title: "Role-Based Access Control (RBAC)",
        desc: "Validasi hak akses yang aman antara kasir operasional dan pemilik toko dengan proteksi session login.",
      },
    ],
    techStack: ["PHP", "MySQL Database", "Bootstrap 5", "JavaScript", "HTML5 & CSS3", "XAMPP / Apache", "Session Security"],
    impact:
      "Menghilangkan risiko salah hitung nota transaksi hingga 100%, memangkas waktu pelayanan kasir sebesar 40%, dan memberikan transparansi keuangan langsung kepada pemilik bisnis.",
    demoUrl: "",
    demoText: "",
    demoIcon: "",
    repoUrl: "https://github.com/ANTARTICA1/Aplikasi-Laundry",
    repoText: "Lihat Source Code di GitHub",
  },
  {
    id: 2,
    title: "STIKOM Bali Campus Building Simulation Plugin",
    category: "Game Modding & Digital Simulation Asset",
    categoryType: "tools",
    role: "Digital Pixel Artist & Plugin Script Engineer",
    type: "Community Mod & Game Simulation Asset",
    status: "Published & Active",
    image: "img/project3.png",
    problem:
      "Game simulasi rancang kota global TheoTown memiliki ribuan bangunan kota internasional, namun belum memiliki representasi gedung perguruan tinggi teknologi asal Bali, khususnya kampus ITB STIKOM Bali, dengan detail arsitektur lokal yang presisi dan fungsional.",
    solution:
      "Merancang aset grafis pixel art isometrik resolusi tinggi dari gedung kampus ITB STIKOM Bali dari sudut pandang 45 derajat. Menyusun skrip definisi JSON yang mengatur atribut perilaku game (kapasitas mahasiswa, konsumsi listrik, air, pengaruh pendidikan kota, dan siklus pencahayaan malam hari).",
    features: [
      {
        title: "Precision Isometric Pixel Art",
        desc: "Rendering grafis piksel bangunan secara detail merefleksikan fasad fisik kampus secara nyata.",
      },
      {
        title: "Dynamic Day/Night Lighting Layer",
        desc: "Integrasi pencahayaan malam hari dinamis dengan animasi logo dan jendela bercahaya saat siklus malam.",
      },
      {
        title: "JSON Attribute Configuration",
        desc: "Penetapan parameter game: daya jangkau pendidikan kota, kapasitas tampung, serta biaya operasional gedung.",
      },
      {
        title: "Multi-Platform Compatibility",
        desc: "Kompatibel untuk TheoTown versi Android, iOS, maupun PC (Steam) tanpa penurunan performa frame rate (FPS).",
      },
    ],
    techStack: ["Isometric Pixel Art", "JSON Config Schema", "TheoTown Plugin API", "Game Simulation Logic", "Texture Mapping"],
    impact:
      "Memperkenalkan identitas kampus ITB STIKOM Bali ke ribuan pemain simulasi kota di seluruh dunia, sekaligus mendemonstrasikan keahlian dalam perancangan aset grafis digital dan konfigurasi game engine.",
    demoUrl: "",
    demoText: "",
    demoIcon: "",
    repoUrl: "https://github.com/ANTARTICA1/PLUGIN-STIKOM-BALI-THEOTOWN",
    repoText: "Lihat Repositori Plugin di GitHub",
  },
  {
    id: 3,
    title: "Network Port & Vulnerability Reconnaissance Script",
    category: "Security Automation & Network Recon",
    categoryType: "cyber",
    role: "Security Automation & Script Engineer",
    type: "Cyber Security Tool",
    status: "Active & Tested",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=60",
    problem:
      "Kebutuhan audit pemetaan port terbuka dan identifikasi celah banner grabbing secara otomatis pada subnet jaringan target tanpa dependensi tools eksternal yang rumit.",
    solution:
      "Mengembangkan skrip security scanner multi-threaded berbasis Python dan Socket API untuk mendeteksi layanan berisiko tinggi serta menyusun laporan kerentanan otomatis.",
    features: [
      {
        title: "Multi-Threaded Port Scanner",
        desc: "Pemindaian ribuan port dalam hitungan detik dengan soket non-blocking asynchronous.",
      },
      {
        title: "Service Banner Grabbing",
        desc: "Mendeteksi versi daemon server untuk memvalidasi potensi kerentanan CVE yang terpublikasi.",
      },
      {
        title: "Security Hardening Report",
        desc: "Ekspor otomatis ringkasan temuan keamanan dan rekomendasi konfigurasi firewall.",
      },
    ],
    techStack: ["Python 3", "Socket API", "Nmap Engine", "Scapy", "Linux Bash", "Threadpool"],
    impact:
      "Mempercepat durasi initial reconnaissance tim penguji keamanan hingga 60% lebih ringkas dan otomatis.",
    demoUrl: "",
    demoText: "",
    demoIcon: "",
    repoUrl: "https://github.com/ANTARTICA1",
    repoText: "Lihat di GitHub",
  },
  {
    id: 4,
    title: "REST API Sentinel & Rate Limiting Middleware",
    category: "API Security & Defense Architecture",
    categoryType: "cyber",
    role: "Backend Security Architect",
    type: "Security Middleware",
    status: "Production Ready",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=60",
    problem:
      "Endpoint API publik rentan terhadap serangan credential stuffing, brute force, DDoS layer-7, dan pencurian data akibat validasi token stateless yang longgar.",
    solution:
      "Membangun middleware proteksi API dengan algoritma Token Bucket, verifikasi cryptographically signed JWT, dan proteksi replay attack.",
    features: [
      {
        title: "Token Bucket Rate Limiter",
        desc: "Membatasi lonjakan request per IP / API key secara realtime dengan in-memory cache.",
      },
      {
        title: "Cryptographic JWT Validator",
        desc: "Inspeksi integritas signature dan masa berlaku token secara ketat anti-tampering.",
      },
      {
        title: "OWASP API Top 10 Guard",
        desc: "Pencegahan serangan Broken Object Level Authorization (BOLA) dan mass assignment.",
      },
    ],
    techStack: ["Node.js", "Express", "JWT", "Redis", "OWASP Security", "REST Architecture"],
    impact:
      "Mereduksi potensi penyalahgunaan endpoint API dan menjamin stabilitas uptime server di atas 99.9%.",
    demoUrl: "",
    demoText: "",
    demoIcon: "",
    repoUrl: "https://github.com/ANTARTICA1",
    repoText: "Lihat di GitHub",
  },
  {
    id: 5,
    title: "Web Traffic Telemetry & Packet Monitor",
    category: "Monitoring & Digital Simulation Tool",
    categoryType: "tools",
    role: "Fullstack Tools Developer",
    type: "Diagnostic Tool",
    status: "Stable Release",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60",
    problem:
      "Visualisasi lalu lintas request web dan payload inspect manual sering kali sulit dipantau secara langsung oleh administrator.",
    solution:
      "Dashboard pemantau latensi dan anomali throughput secara interaktif dengan visualisasi diagram alir data waktu-nyata berbasis WebSocket.",
    features: [
      {
        title: "Live Throughput Stream",
        desc: "Pembaruan grafik latensi per milidetik via saluran WebSocket dua arah.",
      },
      {
        title: "Suspicious Payload Flag",
        desc: "Pemberitahuan otomatis jika terdeteksi pola payload SQLi atau XSS pada header request.",
      },
      {
        title: "Historical Traffic Log",
        desc: "Rekam jejak request harian untuk mempermudah audit investigasi insiden siber.",
      },
    ],
    techStack: ["JavaScript ES6", "Chart.js", "WebSocket", "HTML5 Canvas", "Bootstrap 5"],
    impact:
      "Memudahkan monitoring performa dan kesehatan lalu lintas aplikasi web secara visual dan instan.",
    demoUrl: "",
    demoText: "",
    demoIcon: "",
    repoUrl: "https://github.com/ANTARTICA1",
    repoText: "Lihat di GitHub",
  },
];

let projectsScrollTrigger = null;

function initFullscreenProjectsGSAP() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    "(min-width: 992px)": function () {
      const pinWrapper = document.getElementById("projects-pin-wrapper");
      if (!pinWrapper) return;

      const dots = document.querySelectorAll(".slide-indicator-dot");
      const progressBar = document.getElementById("projectsProgressFill");
      const counterText = document.getElementById("projectsActiveCounterText");
      const slide0 = document.getElementById("project-slide-0");
      const slide1 = document.getElementById("project-slide-1");
      const slide2 = document.getElementById("project-slide-2");
      const slide3 = document.getElementById("project-slide-3");

      if (!slide0 || !slide1 || !slide2 || !slide3) return;

      gsap.set(slide0, { yPercent: 0, scale: 1, opacity: 1, zIndex: 1 });
      gsap.set(slide1, { yPercent: 100, scale: 1, opacity: 1, zIndex: 2 });
      gsap.set(slide2, { yPercent: 100, scale: 1, opacity: 1, zIndex: 3 });
      gsap.set(slide3, { yPercent: 100, scale: 1, opacity: 1, zIndex: 4 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#projects",
          pin: "#projects-pin-wrapper",
          start: "top top",
          end: "+=3800",
          scrub: 0.8,
          anticipatePin: 1,
          id: "projects-pin",
          onUpdate: (self) => {
            const p = self.progress;

            if (progressBar) {
              progressBar.style.width = Math.min(Math.max(p * 100, 3), 100) + "%";
            }

            dots.forEach((d) => d.classList.remove("active"));
            if (p < 0.28) {
              dots[0]?.classList.add("active");
              if (counterText) counterText.textContent = "PROJECT 01 / 04";
            } else if (p < 0.55) {
              dots[1]?.classList.add("active");
              if (counterText) counterText.textContent = "PROJECT 02 / 04";
            } else if (p < 0.82) {
              dots[2]?.classList.add("active");
              if (counterText) counterText.textContent = "PROJECT 03 / 04";
            } else {
              dots[3]?.classList.add("active");
              if (counterText) counterText.textContent = "ARCHIVE & REPO // 04";
            }
          },
        },
      });

      tl.to({}, { duration: 0.35 })
        .to(slide0, {
          scale: 0.93,
          opacity: 0.25,
          yPercent: -10,
          ease: "power2.inOut",
          duration: 1,
        })
        .to(
          slide1,
          {
            yPercent: 0,
            ease: "power2.inOut",
            duration: 1,
          },
          "<"
        )
        .to({}, { duration: 0.35 })
        .to(slide1, {
          scale: 0.93,
          opacity: 0.25,
          yPercent: -10,
          ease: "power2.inOut",
          duration: 1,
        })
        .to(
          slide0,
          {
            opacity: 0,
            scale: 0.88,
            ease: "power2.inOut",
            duration: 0.6,
          },
          "<"
        )
        .to(
          slide2,
          {
            yPercent: 0,
            ease: "power2.inOut",
            duration: 1,
          },
          "<"
        )
        .to({}, { duration: 0.35 })
        .to(slide2, {
          scale: 0.93,
          opacity: 0.25,
          yPercent: -10,
          ease: "power2.inOut",
          duration: 1,
        })
        .to(
          slide1,
          {
            opacity: 0,
            scale: 0.88,
            ease: "power2.inOut",
            duration: 0.6,
          },
          "<"
        )
        .to(
          slide3,
          {
            yPercent: 0,
            ease: "power2.inOut",
            duration: 1,
          },
          "<"
        )
        .to({}, { duration: 0.4 });

      projectsScrollTrigger = tl.scrollTrigger;
    },

    "(max-width: 991px)": function () {
      projectsScrollTrigger = null;

      const mobileHeader = document.querySelector(".projects-mobile-header");
      if (mobileHeader) {
        gsap.fromTo(
          mobileHeader,
          { opacity: 0, y: -25 },
          {
            scrollTrigger: {
              trigger: mobileHeader,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          }
        );
      }

      const slides = gsap.utils.toArray(".project-fullscreen-panel");
      slides.forEach((slide) => {
        const tlMobile = gsap.timeline({
          scrollTrigger: {
            trigger: slide,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });

        tlMobile.fromTo(
          slide,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: "power3.out",
          }
        );

        const visualCard = slide.querySelector(".panel-visual-card");
        if (visualCard) {
          tlMobile.fromTo(
            visualCard,
            { opacity: 0, scale: 0.92 },
            { opacity: 1, scale: 1, duration: 0.45, ease: "back.out(1.5)" },
            "-=0.35"
          );
        }

        const title = slide.querySelector(".panel-project-title");
        if (title) {
          tlMobile.fromTo(
            title,
            { opacity: 0, x: -18 },
            { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" },
            "-=0.3"
          );
        }

        const features = slide.querySelectorAll(".panel-feat-item");
        if (features.length > 0) {
          tlMobile.fromTo(
            features,
            { opacity: 0, x: -12 },
            { opacity: 1, x: 0, stagger: 0.06, duration: 0.3, ease: "power2.out" },
            "-=0.25"
          );
        }

        const tags = slide.querySelectorAll(".tech-tag");
        if (tags.length > 0) {
          tlMobile.fromTo(
            tags,
            { opacity: 0, scale: 0.75 },
            { opacity: 1, scale: 1, stagger: 0.04, duration: 0.3, ease: "back.out(2)" },
            "-=0.2"
          );
        }

        const cta = slide.querySelector(".panel-cta-actions");
        if (cta) {
          tlMobile.fromTo(
            cta,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
            "-=0.2"
          );
        }

        const hookCard = slide.querySelector(".archive-hook-card");
        if (hookCard) {
          tlMobile.fromTo(
            hookCard.children,
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, stagger: 0.08, duration: 0.4, ease: "power2.out" },
            "-=0.3"
          );
        }
      });
    },
  });
}

function jumpToProjectSlide(index) {
  const dots = document.querySelectorAll(".slide-indicator-dot");
  dots.forEach((d, idx) => {
    if (idx === index) d.classList.add("active");
    else d.classList.remove("active");
  });

  const st = projectsScrollTrigger || ScrollTrigger.getById("projects-pin");
  if (st && window.innerWidth >= 992) {
    let scrollPos = st.start;
    if (index === 0) scrollPos = st.start + 2;
    else if (index === 1) scrollPos = st.start + (st.end - st.start) * 0.38;
    else if (index === 2) scrollPos = st.start + (st.end - st.start) * 0.70;
    else if (index === 3) scrollPos = st.start + (st.end - st.start) * 0.96;
    window.scrollTo({ top: scrollPos, behavior: "smooth" });
  } else {
    const slide = document.getElementById(`project-slide-${index}`);
    if (slide) {
      slide.scrollIntoView({ behavior: "smooth" });
    }
  }
}

function openProjectModal(projectId) {
  const project = projectsData.find((p) => p.id === projectId);
  if (!project) return;

  document.getElementById("modalCategory").textContent = project.category;
  document.getElementById("projectModalTitle").textContent = project.title;
  document.getElementById("modalImage").src = project.image;
  document.getElementById("modalImage").alt = project.title;

  const roleEl = document.getElementById("modalRole");
  if (roleEl) roleEl.textContent = project.role;

  const typeEl = document.getElementById("modalType");
  if (typeEl) typeEl.textContent = project.type;

  const statusEl = document.getElementById("modalStatus");
  if (statusEl) statusEl.textContent = project.status;

  document.getElementById("modalProblem").textContent = project.problem;
  document.getElementById("modalSolution").textContent = project.solution;
  document.getElementById("modalImpact").textContent = project.impact;

  const featuresContainer = document.getElementById("modalFeaturesContainer");
  featuresContainer.innerHTML = "";
  project.features.forEach((feat) => {
    const col = document.createElement("div");
    col.className = "col-md-6 mb-3";
    col.innerHTML = `
      <div class="modal-feature-clean">
        <div class="d-flex align-items-baseline gap-2 mb-1">
          <span class="text-info font-mono small">■</span>
          <h6 class="text-white fw-bold mb-0 font-heading" style="font-size: 0.94rem;">${feat.title}</h6>
        </div>
        <p class="mb-0 ps-3" style="font-size: 0.86rem; line-height: 1.6; color: #cbd5e1;">${feat.desc}</p>
      </div>
    `;
    featuresContainer.appendChild(col);
  });

  const techContainer = document.getElementById("modalTechStack");
  techContainer.innerHTML = "";
  project.techStack.forEach((tech) => {
    const span = document.createElement("span");
    span.className = "tech-chip";
    span.textContent = tech;
    techContainer.appendChild(span);
  });

  const actionsContainer = document.getElementById("modalActionButtons");
  actionsContainer.innerHTML = "";

  if (project.demoUrl) {
    const demoBtn = document.createElement("a");
    demoBtn.href = project.demoUrl;
    demoBtn.target = "_blank";
    demoBtn.rel = "noopener noreferrer";
    demoBtn.className = "btn btn-neon-cyan px-3 py-2";
    demoBtn.innerHTML = `<i class="fas ${project.demoIcon || "fa-arrow-up-right-from-square"} me-1"></i> ${project.demoText || "Live Demo"}`;
    actionsContainer.appendChild(demoBtn);
  }

  if (project.repoUrl) {
    const repoBtn = document.createElement("a");
    repoBtn.href = project.repoUrl;
    repoBtn.target = "_blank";
    repoBtn.rel = "noopener noreferrer";
    repoBtn.className = "btn btn-outline-cyber px-3 py-2";
    repoBtn.innerHTML = `<i class="fab fa-github me-1"></i> ${project.repoText || "Source Code"}`;
    actionsContainer.appendChild(repoBtn);
  }

  const modalEl = document.getElementById("projectModal");
  const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
  modalInstance.show();

  if (typeof gsap !== "undefined") {
    gsap.fromTo(
      ".cyber-modal-content",
      { scale: 0.95, opacity: 0.7 },
      { scale: 1, opacity: 1, duration: 0.35, ease: "power2.out" }
    );
  }
}

let currentArchiveFilter = "all";
let currentArchiveSearch = "";

function openArchiveModal() {
  updateArchiveCategoryCounts();
  renderProjectsArchive(currentArchiveFilter, currentArchiveSearch);
  const modalEl = document.getElementById("archiveModal");
  if (modalEl) {
    const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
    modalInstance.show();
  }
}

function filterArchiveCategory(category, btnEl) {
  currentArchiveFilter = category;
  document.querySelectorAll(".archive-filter-btn").forEach((b) => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");
  renderProjectsArchive(currentArchiveFilter, currentArchiveSearch);
}

function handleArchiveSearch(val) {
  currentArchiveSearch = (val || "").trim().toLowerCase();
  renderProjectsArchive(currentArchiveFilter, currentArchiveSearch);
}

function updateArchiveCategoryCounts() {
  const countAll = projectsData.length;
  const countCyber = projectsData.filter((p) => p.categoryType === "cyber").length;
  const countWeb = projectsData.filter((p) => p.categoryType === "web").length;
  const countTools = projectsData.filter((p) => p.categoryType === "tools").length;

  const elAll = document.getElementById("count-all");
  const elCyber = document.getElementById("count-cyber");
  const elWeb = document.getElementById("count-web");
  const elTools = document.getElementById("count-tools");

  if (elAll) elAll.textContent = countAll;
  if (elCyber) elCyber.textContent = countCyber;
  if (elWeb) elWeb.textContent = countWeb;
  if (elTools) elTools.textContent = countTools;
}

function renderProjectsArchive(category = "all", searchQuery = "") {
  const grid = document.getElementById("archiveProjectsGrid");
  const emptyState = document.getElementById("archiveEmptyState");
  const summaryText = document.getElementById("archiveSummaryText");
  if (!grid) return;

  const filtered = projectsData.filter((p) => {
    const matchesCategory = category === "all" || p.categoryType === category;
    if (!matchesCategory) return false;
    if (!searchQuery) return true;

    const inTitle = p.title.toLowerCase().includes(searchQuery);
    const inCategory = p.category.toLowerCase().includes(searchQuery);
    const inProblem = (p.problem || "").toLowerCase().includes(searchQuery);
    const inTech = (p.techStack || []).some((t) => t.toLowerCase().includes(searchQuery));
    return inTitle || inCategory || inProblem || inTech;
  });

  grid.innerHTML = "";

  if (filtered.length === 0) {
    if (emptyState) emptyState.classList.remove("d-none");
    if (summaryText) summaryText.textContent = "0 proyek ditemukan";
    return;
  }

  if (emptyState) emptyState.classList.add("d-none");
  if (summaryText) summaryText.textContent = `Menampilkan ${filtered.length} dari ${projectsData.length} total proyek`;

  filtered.forEach((p) => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";

    const isFeaturedBadge = p.id < 3 ? `<span class="archive-card-featured-pill font-mono"><i class="fas fa-star text-warning me-1"></i>Featured</span>` : "";
    const categoryIcon = p.categoryType === "cyber" ? "fa-shield-halved text-danger" : p.categoryType === "web" ? "fa-code text-info" : "fa-gear text-success";

    col.innerHTML = `
      <div class="archive-project-card h-100 d-flex flex-column">
        <div class="archive-card-thumb position-relative" onclick="openProjectModal(${p.id})">
          <img src="${p.image}" alt="${p.title}" class="w-100 archive-thumb-img" loading="lazy" />
          <div class="archive-thumb-overlay">
            <span class="btn btn-sm btn-neon-cyan px-3"><i class="fas fa-magnifying-glass me-1"></i> Detail</span>
          </div>
          ${isFeaturedBadge}
        </div>
        <div class="archive-card-content p-3 d-flex flex-column flex-grow-1">
          <div class="d-flex align-items-center gap-2 mb-2">
            <i class="fas ${categoryIcon} small"></i>
            <span class="archive-card-category-text font-mono">${p.category}</span>
          </div>
          <h5 class="archive-card-heading mb-2" onclick="openProjectModal(${p.id})">${p.title}</h5>
          <p class="archive-card-snippet mb-3 flex-grow-1" style="color: #cbd5e1;">${p.problem.substring(0, 115)}...</p>
          <div class="archive-card-tags mb-3 d-flex flex-wrap gap-1">
            ${p.techStack.slice(0, 3).map((t) => `<span class="tech-tag small py-0 px-2">${t}</span>`).join("")}
            ${p.techStack.length > 3 ? `<span class="tech-tag small py-0 px-1">+${p.techStack.length - 3}</span>` : ""}
          </div>
          <div class="d-flex gap-2 pt-2 border-top border-secondary border-opacity-25 mt-auto">
            <button class="btn btn-sm btn-neon-cyan flex-grow-1" onclick="openProjectModal(${p.id})">
              <i class="fas fa-circle-info me-1"></i> Spesifikasi
            </button>
            ${p.repoUrl ? `<a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-cyber px-2" title="Source Code"><i class="fab fa-github"></i></a>` : ""}
            ${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-cyber px-2 text-info" title="Live Demo"><i class="fas fa-arrow-up-right-from-square"></i></a>` : ""}
          </div>
        </div>
      </div>
    `;

    grid.appendChild(col);
  });
}

let isConsoleMinimized = false;

function initTerminalConsole() {
  const input = document.getElementById("cli-input");
  const consoleEl = document.getElementById("mini-console");
  const toggleIcon = document.getElementById("toggle-icon");
  if (!input || !consoleEl) return;

  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    isConsoleMinimized = true;
    consoleEl.classList.add("minimized");
    if (toggleIcon) toggleIcon.innerHTML = `<i class="fas fa-chevron-up small"></i>`;
  } else {
    isConsoleMinimized = false;
    consoleEl.classList.remove("minimized");
    if (toggleIcon) toggleIcon.innerHTML = `<i class="fas fa-minus small"></i>`;
  }

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const rawCmd = input.value.trim();
      if (!rawCmd) return;

      input.value = "";
      handleTerminalCommand(rawCmd);
    }
  });

  scrollTerminalToBottom();
}

function toggleConsole() {
  const consoleEl = document.getElementById("mini-console");
  const toggleIcon = document.getElementById("toggle-icon");
  if (!consoleEl) return;

  isConsoleMinimized = !isConsoleMinimized;
  if (isConsoleMinimized) {
    consoleEl.classList.add("minimized");
    if (toggleIcon) toggleIcon.innerHTML = `<i class="fas fa-chevron-up small"></i>`;
  } else {
    consoleEl.classList.remove("minimized");
    if (toggleIcon) toggleIcon.innerHTML = `<i class="fas fa-minus small"></i>`;
    setTimeout(() => {
      document.getElementById("cli-input")?.focus();
      scrollTerminalToBottom();
    }, 100);
  }
}

function scrollTerminalToBottom() {
  const output = document.getElementById("output");
  if (output) {
    setTimeout(() => {
      output.scrollTop = output.scrollHeight;
    }, 40);
  }
}

function printTermLine(content, cssClass = "term-line-white") {
  const output = document.getElementById("output");
  if (!output) return;

  const div = document.createElement("div");
  div.className = cssClass;
  div.innerHTML = content;
  output.appendChild(div);
  scrollTerminalToBottom();
}

function escapeHTML(str) {
  const p = document.createElement("p");
  p.appendChild(document.createTextNode(str));
  return p.innerHTML;
}

function handleTerminalCommand(rawCmd) {
  const cleanCmd = rawCmd.toLowerCase().trim();

  printTermLine(`guest@dev:~$ ${escapeHTML(rawCmd)}`, "term-user-entry");

  switch (cleanCmd) {
    case "help":
      printTermLine("[AVAILABLE COMMANDS // GEKA OS]:", "term-line-cyan");
      printTermLine("  • <span class='term-highlight'>home</span>     : Navigasi ke Hero / Beranda utama");
      printTermLine("  • <span class='term-highlight'>skills</span>   : Tampilkan matrix keahlian & cyber security");
      printTermLine("  • <span class='term-highlight'>projects</span> : Buka daftar 3 proyek unggulan");
      printTermLine("  • <span class='term-highlight'>project 1</span>: Buka modal teknis ITB STIKOM Web Redesign");
      printTermLine("  • <span class='term-highlight'>project 2</span>: Buka modal teknis Laundry Management System");
      printTermLine("  • <span class='term-highlight'>project 3</span>: Buka modal teknis TheoTown Campus Plugin");
      printTermLine("  • <span class='term-highlight'>hire</span> / <span class='term-highlight'>contact</span> : Hubungi Krisna via WhatsApp / Form");
      printTermLine("  • <span class='term-highlight'>about</span> / <span class='term-highlight'>whoami</span>  : Profil singkat & spesialisasi Krisna");
      printTermLine("  • <span class='term-highlight'>social</span>   : Tautan GitHub, LinkedIn, Instagram, Discord");
      printTermLine("  • <span class='term-highlight'>status</span>   : Status sistem, latency, dan koneksi server");
      printTermLine("  • <span class='term-highlight'>clear</span>    : Bersihkan layar terminal");
      printTermLine("---------------------------------------------------------", "term-line-divider");
      break;

    case "clear":
      const output = document.getElementById("output");
      if (output) {
        output.innerHTML = `
          <div class="term-line-cyan">[SYSTEM BOOT] Geka Cyber Terminal v2.5 initialized... [OK]</div>
          <div class="term-line-white">Selamat datang! Ketik <span class="term-highlight">help</span> untuk daftar perintah interaktif.</div>
          <div class="term-line-green">> Perintah cepat: <b>home</b>, <b>skills</b>, <b>projects</b>, <b>hire</b>, <b>about</b>, <b>clear</b></div>
          <div class="term-line-divider">---------------------------------------------------------</div>
        `;
      }
      break;

    case "home":
    case "top":
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
      printTermLine("> [NAVIGATING] Mengalihkan ke bagian Home...", "term-line-green");
      break;

    case "skills":
    case "skill":
      document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
      printTermLine("[MATRIX KEAHLIAN KRISNA ARTHA WIBAWA]:", "term-line-cyan");
      printTermLine("  🛡️ Network Security Hardening : 90% (Penetration testing, firewalls)");
      printTermLine("  🕵️ Vulnerability Assessment    : 85% (OWASP Top 10, Web exploit analysis)");
      printTermLine("  🔑 API Security & Auth        : 88% (JWT, OAuth2, Rate limiting)");
      printTermLine("  🐧 Linux System Admin         : 82% (Bash scripting, server hardening)");
      printTermLine("  💻 Modern Web Architecture    : 88% (HTML5, CSS3, ES6+, PHP, MySQL)");
      printTermLine("---------------------------------------------------------", "term-line-divider");
      break;

    case "projects":
    case "project":
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      printTermLine("[3 PROYEK UNGGULAN TERVERIFIKASI]:", "term-line-cyan");
      printTermLine("  1. <span class='term-cmd-link' onclick='openProjectModal(0)'>[OPEN] Institutional Web Redesign (ITB STIKOM)</span>", "term-line-green");
      printTermLine("  2. <span class='term-cmd-link' onclick='openProjectModal(1)'>[OPEN] Customer Management System (Aplikasi Laundry)</span>", "term-line-green");
      printTermLine("  3. <span class='term-cmd-link' onclick='openProjectModal(2)'>[OPEN] STIKOM Bali Simulation Plugin (TheoTown)</span>", "term-line-green");
      printTermLine("> Tip: Ketik 'project 1', 'project 2', atau 'project 3' untuk membaca detail arsitektur.", "term-line-white");
      printTermLine("---------------------------------------------------------", "term-line-divider");
      break;

    case "project 1":
    case "project1":
    case "stikom":
      openProjectModal(0);
      printTermLine("> [MODAL LAUNCH] Membuka lembar teknis Proyek 01: ITB STIKOM Web Redesign.", "term-line-green");
      break;

    case "project 2":
    case "project2":
    case "laundry":
      openProjectModal(1);
      printTermLine("> [MODAL LAUNCH] Membuka lembar teknis Proyek 02: Customer Management System (Laundry).", "term-line-green");
      break;

    case "project 3":
    case "project3":
    case "theotown":
      openProjectModal(2);
      printTermLine("> [MODAL LAUNCH] Membuka lembar teknis Proyek 03: TheoTown Simulation Plugin.", "term-line-green");
      break;

    case "archive":
    case "all":
    case "katalog":
    case "repositori":
      openArchiveModal();
      printTermLine("> [ARCHIVE LAUNCH] Membuka katalog repositori semua proyek...", "term-line-green");
      break;

    case "hire":
    case "contact":
    case "wa":
    case "whatsapp":
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      printTermLine("[JALUR KOMUNIKASI & REKRUTMEN]:", "term-line-cyan");
      printTermLine("  📱 WhatsApp : <a href='https://wa.me/6282247846546' target='_blank' rel='noopener noreferrer' class='term-cmd-link'>+62 822-4784-6546 (Klik untuk Chat)</a>");
      printTermLine("  📧 Email    : anakagungarthawibawa22@gmail.com");
      printTermLine("  📍 Lokasi   : Bali, Indonesia (Available for Remote / On-Site)");
      printTermLine("> Mengarahkan Anda ke formulir kontak di bawah...", "term-line-green");
      printTermLine("---------------------------------------------------------", "term-line-divider");
      break;

    case "about":
    case "whoami":
    case "bio":
      printTermLine("[IDENTITAS OPERATOR // GEKA_ROOT]:", "term-line-cyan");
      printTermLine("  Nama        : Anak Agung Ngurah Krisna Artha Wibawa");
      printTermLine("  Spesialisasi: Cyber Security Analyst & Fullstack Web Developer");
      printTermLine("  Fokus       : Keamanan infrastruktur siber, audit kerentanan, dan web aplikasi efisien performa tinggi.");
      printTermLine("  Status      : ACTIVE & READY FOR COLLABORATION");
      printTermLine("---------------------------------------------------------", "term-line-divider");
      break;

    case "social":
    case "socials":
      printTermLine("[JARINGAN SOSIAL & REPOSITORI]:", "term-line-cyan");
      printTermLine("  • GitHub   : <a href='https://github.com/ANTARTICA1' target='_blank' rel='noopener noreferrer' class='term-cmd-link'>github.com/ANTARTICA1</a>");
      printTermLine("  • LinkedIn : <a href='https://www.linkedin.com/in/anak-agung-ngurah-krisna-artha-wibawa-b60580327/' target='_blank' rel='noopener noreferrer' class='term-cmd-link'>linkedin.com/in/anak-agung-ngurah-krisna</a>");
      printTermLine("  • Instagram: <a href='https://www.instagram.com/gungkrisna22_/' target='_blank' rel='noopener noreferrer' class='term-cmd-link'>@gungkrisna22_</a>");
      printTermLine("  • Discord  : <span class='term-highlight'>gekaaa</span>");
      printTermLine("---------------------------------------------------------", "term-line-divider");
      break;

    case "status":
      printTermLine("[DIAGNOSTIK SISTEM PORTAL]:", "term-line-cyan");
      printTermLine("  ⚡ HTTP Status : 200 OK (Protocol HTTP/2)");
      printTermLine("  🛡️ Enkripsi    : TLS 1.3 / AES-256 Validated");
      printTermLine("  🌐 Core Engine : GSAP v3.12 + Vanilla CSS Hardware-Accelerated");
      printTermLine("  🟢 State       : ONLINE (Latensi ~14ms)");
      printTermLine("---------------------------------------------------------", "term-line-divider");
      break;

    case "date":
    case "time":
      printTermLine(`> Waktu Sistem: ${new Date().toLocaleString("id-ID")}`, "term-line-cyan");
      break;

    default:
      processNaturalTerminalQuery(rawCmd);
      break;
  }
}

function processNaturalTerminalQuery(query) {
  const q = query.toLowerCase();

  if (q.includes("halo") || q.includes("hai") || q.includes("pagi") || q.includes("siang") || q.includes("malam")) {
    printTermLine("> Halo! Senang menyapa Anda. Ada informasi seputar portofolio atau proyek yang ingin Anda tanyakan?", "term-line-green");
    printTermLine("> Ketik <span class='term-highlight'>help</span> untuk opsi perintah interaktif.");
  } else if (q.includes("krisna") || q.includes("siapa") || q.includes("profil") || q.includes("biodata")) {
    handleTerminalCommand("whoami");
  } else if (q.includes("proyek") || q.includes("project") || q.includes("karya") || q.includes("portofolio")) {
    handleTerminalCommand("projects");
  } else if (q.includes("skill") || q.includes("keahlian") || q.includes("kemampuan") || q.includes("security")) {
    handleTerminalCommand("skills");
  } else if (q.includes("kontak") || q.includes("wa") || q.includes("whatsapp") || q.includes("hire") || q.includes("kerja") || q.includes("harga")) {
    handleTerminalCommand("hire");
  } else {
    printTermLine(`bash: command not found: "${escapeHTML(query)}"`, "term-line-danger");
    printTermLine("> Ketik <span class='term-highlight'>help</span> untuk melihat daftar perintah yang tersedia.");
  }
}

let scrollTimer = null;
window.addEventListener(
  "scroll",
  () => {
    if (scrollTimer !== null) return;
    scrollTimer = setTimeout(() => {
      scrollTimer = null;
      updateActiveNav();
    }, 100);
  },
  { passive: true }
);

function updateActiveNav() {
  const sections = document.querySelectorAll("section[id], div[id='projects']");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

  let currentSection = "";
  sections.forEach((sec) => {
    const secTop = sec.offsetTop - 180;
    const secHeight = sec.offsetHeight;
    if (scrollPos >= secTop && scrollPos < secTop + secHeight) {
      currentSection = sec.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (currentSection && link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
}

function toggleFontOptions() {
  const options = document.getElementById("fontOptions");
  if (options) options.classList.toggle("show");
}

function changeFontSize(scale) {
  document.documentElement.style.fontSize = scale * 100 + "%";
  const options = document.getElementById("fontOptions");
  if (options) options.classList.remove("show");
}

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("user-name").value.trim();
    const email = document.getElementById("user-email").value.trim();
    const subject = document.getElementById("project-subject").value.trim() || "Diskusi Proyek";
    const details = document.getElementById("project-details").value.trim();
    const myPhone = "6282247846546";

    if (!name || !email || !details) {
      Swal.fire({
        icon: "error",
        title: "> ACCESS DENIED",
        text: "Harap isi nama, email, dan rincian pesan Anda dengan lengkap.",
        background: "#0c1222",
        confirmButtonColor: "#ff0055",
        customClass: {
          popup: "swal-cyber-popup",
          title: "swal-cyber-title",
        },
      });
      return;
    }

    Swal.fire({
      title: "> ENCRYPTING PACKETS...",
      html: `
        <div style="color: #00f3ff; font-family: 'JetBrains Mono', monospace; text-align: left; font-size: 0.85rem">
          > Validating credentials... [OK]<br>
          > Encrypting message payload (AES-256)... [OK]<br>
          > Establishing secure WhatsApp handshake...
        </div>
      `,
      background: "#0c1222",
      showConfirmButton: false,
      allowOutsideClick: false,
      timer: 1200,
      didOpen: () => {
        Swal.showLoading();
      },
    }).then(() => {
      Swal.fire({
        icon: "success",
        title: "> SECURE LINK READY",
        html: `
          <div style="font-family: 'JetBrains Mono', monospace; text-align: left; font-size: 0.85rem">
            <p class="text-success mb-1">> STATUS: 200 SUCCESS</p>
            <p class="mb-0" style="color: #cbd5e1;">> Diteruskan ke WhatsApp Krisna Artha Wibawa</p>
          </div>
        `,
        background: "#0c1222",
        confirmButtonColor: "#00f3ff",
        confirmButtonText: "LANJUT KE WHATSAPP",
      }).then((result) => {
        if (result.isConfirmed) {
          const encodedMessage = `Halo Gung Krisna, saya *${name}* (${email}).%0A%0A*Perihal:* ${encodeURIComponent(subject)}%0A*Rincian Pesan:*%0A${encodeURIComponent(details)}`;
          window.open(`https://wa.me/${myPhone}?text=${encodedMessage}`, "_blank");
          contactForm.reset();
        }
      });
    });
  });
}

window.openProjectModal = openProjectModal;
window.openArchiveModal = openArchiveModal;
window.filterArchiveCategory = filterArchiveCategory;
window.handleArchiveSearch = handleArchiveSearch;
window.jumpToProjectSlide = jumpToProjectSlide;
window.toggleConsole = toggleConsole;
window.toggleFontOptions = toggleFontOptions;
window.changeFontSize = changeFontSize;

window.initChatbot = initTerminalConsole;
window.toggleChatWidget = toggleConsole;

