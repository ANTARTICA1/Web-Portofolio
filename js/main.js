/**
 * Skrip Utama & Interaksi Umum Portofolio
 * Mengatur inisialisasi aplikasi, navigasi, animasi typewriter,
 * skills matrix, mini console CLI, font accessibility, dan form kontak.
 */

const phrases = ["CYBER SECURITY SPECIALIST", "WEB DEVELOPER", "SYSTEM SECURITY ANALYST"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 120;
let isConsoleMinimized = true;

function initLenisSmoothScroll() {
  if (typeof Lenis === "undefined") return;
  // Enable on laptop & desktop mouse/trackpad for 120 FPS buttery smooth scrolling
  if (window.innerWidth < 992) return;

  try {
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      infinite: false,
    });
    window.lenis = lenis;

    if (typeof ScrollTrigger !== "undefined") {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  } catch (err) {
    console.warn("Lenis init skipped:", err);
  }
}

function startPortfolioApp() {
  initLenisSmoothScroll();
  initGsapAnimations();
  initTypewriter();
  if (typeof initFullscreenProjectsGSAP === "function") {
    initFullscreenProjectsGSAP();
  }
  initNavbarMobileAutoClose();
  initActiveNavObserver();
  initTerminalConsole();
  if (typeof updateArchiveCategoryCounts === "function") {
    updateArchiveCategoryCounts();
  }
  initSkillsMatrixAnimation();
  initModalScrollLock();
}

function initGsapAnimations() {
  if (typeof gsap === "undefined") return;

  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Hero section entrance animation
  const heroTl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.7 } });

  heroTl
    .from(".hero-image-wrapper", {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
    })
    .from(
      ".hero-title",
      {
        opacity: 0,
        x: -25,
        duration: 0.6,
      },
      "-=0.4"
    )
    .from(
      ".hero-subtitle",
      {
        opacity: 0,
        x: -20,
        duration: 0.5,
      },
      "-=0.3"
    )
    .from(
      ".hero-lead-text",
      {
        opacity: 0,
        x: -15,
        duration: 0.5,
      },
      "-=0.3"
    )
    .from(
      ".char-stats-box",
      {
        opacity: 0,
        y: 20,
        scale: 0.98,
        duration: 0.6,
      },
      "-=0.3"
    )
    .from(
      "#home .hero-social .social-icon-btn",
      {
        opacity: 0,
        y: 10,
        stagger: 0.08,
        duration: 0.4,
        clearProps: "all",
      },
      "-=0.3"
    )
    .from(
      ".hero-buttons .btn",
      {
        opacity: 0,
        scale: 0.92,
        stagger: 0.1,
        duration: 0.4,
      },
      "-=0.3"
    );

  if (typeof ScrollTrigger !== "undefined") {
    // Techstacks reveal
    gsap.from(".techstack-title, .techstack-subtitle", {
      scrollTrigger: {
        trigger: ".techstack-title",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 25,
      stagger: 0.12,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.from(".techstack-showcase", {
      scrollTrigger: {
        trigger: ".techstack-showcase",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      scale: 0.96,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.from(".skill-quote-box", {
      scrollTrigger: {
        trigger: ".skill-quote-box",
        start: "top 88%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 20,
      duration: 0.55,
      ease: "power2.out",
    });

    // Contact section reveal
    gsap.from(".contact-container .col-lg-5", {
      scrollTrigger: {
        trigger: ".contact-container",
        start: "top 82%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      x: -30,
      duration: 0.7,
      ease: "power2.out",
    });

    // Contact social icons reveal (initially hidden, revealed sequentially on scroll)
    gsap.from(".contact-social-icons .social-icon-btn", {
      scrollTrigger: {
        trigger: ".contact-social-icons",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      scale: 0.65,
      x: -18,
      stagger: 0.1,
      duration: 0.5,
      delay: 0.2,
      ease: "power2.out",
      clearProps: "all",
    });

    gsap.from(".contact-container .col-lg-7", {
      scrollTrigger: {
        trigger: ".contact-container",
        start: "top 82%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      x: 30,
      duration: 0.7,
      ease: "power2.out",
    });
  }
}

function initSkillsMatrixAnimation() {
  const skillCards = document.querySelectorAll(".skill-card-modern");
  if (!skillCards.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
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


function initTerminalConsole() {
  const input = document.getElementById("cli-input");
  const consoleEl = document.getElementById("mini-console");
  const toggleIcon = document.getElementById("toggle-icon");
  if (!input || !consoleEl) return;

  // Minimized by default on all screens for maximum screen space & zero layout obstruction
  isConsoleMinimized = true;
  consoleEl.classList.add("minimized");
  if (toggleIcon) toggleIcon.innerHTML = `<i class="fas fa-chevron-up small"></i>`;

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
      printTermLine("  • <span class='term-highlight'>projects</span> : Buka daftar 7 proyek terverifikasi");
      printTermLine("  • <span class='term-highlight'>project 1</span>: Buka modal teknis NeuroFly");
      printTermLine("  • <span class='term-highlight'>project 2</span>: Buka modal teknis Tatagih");
      printTermLine("  • <span class='term-highlight'>project 3</span>: Buka modal teknis Lintas");
      printTermLine("  • <span class='term-highlight'>project 4</span>: Buka modal teknis Bingkai");
      printTermLine("  • <span class='term-highlight'>project 5</span>: Buka modal teknis Sigap");
      printTermLine("  • <span class='term-highlight'>project 6</span>: Buka modal teknis Temuin");
      printTermLine("  • <span class='term-highlight'>project 7</span>: Buka modal teknis NenaCare");
      printTermLine("  • <span class='term-highlight'>hire</span> / <span class='term-highlight'>contact</span> : Hubungi Krisna via Form / Pesan");
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
    case "stack":
    case "techstack":
      document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
      printTermLine("[TECH STACK & TOOLS KRISNA ARTHA WIBAWA]:", "term-line-cyan");
      printTermLine("  🛡️ Network Security : Wireshark, Firewall, Nmap, IDS/IPS");
      printTermLine("  🕵️ Pentesting       : Kali Linux, Burp Suite, Metasploit, OWASP");
      printTermLine("  🔑 API Security     : Postman, JWT, REST API, OAuth2");
      printTermLine("  🐧 Linux Admin      : Ubuntu, Debian, Bash, Docker");
      printTermLine("  💻 Web Fullstack    : HTML5/CSS3, JavaScript ES6, PHP, Bootstrap");
      printTermLine("  🗄️ Database & Tools : MySQL, Git, GitHub, CI/CD");
      printTermLine("---------------------------------------------------------", "term-line-divider");
      break;

    case "projects":
    case "project":
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      printTermLine("[7 PROYEK ASLI & TERVERIFIKASI]:", "term-line-cyan");
      printTermLine("  1. <span class='term-cmd-link' onclick='openProjectModal(0)'>[OPEN] NeuroFly (Drosophila Connectome Pong AI)</span>", "term-line-green");
      printTermLine("  2. <span class='term-cmd-link' onclick='openProjectModal(1)'>[OPEN] Tatagih (Subscription & Billing Manager)</span>", "term-line-green");
      printTermLine("  3. <span class='term-cmd-link' onclick='openProjectModal(2)'>[OPEN] Lintas (Cross-Platform HP & PC Bridge)</span>", "term-line-green");
      printTermLine("  4. <span class='term-cmd-link' onclick='openProjectModal(3)'>[OPEN] Bingkai (Photo Management Media App)</span>", "term-line-green");
      printTermLine("  5. <span class='term-cmd-link' onclick='openProjectModal(4)'>[OPEN] Sigap (Mobile Security & Sensor Alarm)</span>", "term-line-green");
      printTermLine("  6. <span class='term-cmd-link' onclick='openProjectModal(5)'>[OPEN] Temuin (Lost and Found Community Platform)</span>", "term-line-green");
      printTermLine("  7. <span class='term-cmd-link' onclick='openProjectModal(6)'>[OPEN] NenaCare (K3 Incident Reporting & Gemini AI)</span>", "term-line-green");
      printTermLine("> Tip: Ketik 'project 1' sampai 'project 7' atau 'archive' untuk membuka katalog lengkap.", "term-line-white");
      printTermLine("---------------------------------------------------------", "term-line-divider");
      break;

    case "project 1":
    case "project1":
    case "neurofly":
      if (typeof openProjectModal === "function") openProjectModal(0);
      printTermLine("> [MODAL LAUNCH] Membuka lembar teknis Proyek 01: NeuroFly.", "term-line-green");
      break;

    case "project 2":
    case "project2":
    case "tatagih":
      if (typeof openProjectModal === "function") openProjectModal(1);
      printTermLine("> [MODAL LAUNCH] Membuka lembar teknis Proyek 02: Tatagih.", "term-line-green");
      break;

    case "project 3":
    case "project3":
    case "lintas":
      if (typeof openProjectModal === "function") openProjectModal(2);
      printTermLine("> [MODAL LAUNCH] Membuka lembar teknis Proyek 03: Lintas.", "term-line-green");
      break;

    case "project 4":
    case "project4":
    case "bingkai":
      if (typeof openProjectModal === "function") openProjectModal(3);
      printTermLine("> [MODAL LAUNCH] Membuka lembar teknis Proyek 04: Bingkai.", "term-line-green");
      break;

    case "project 5":
    case "project5":
    case "sigap":
      if (typeof openProjectModal === "function") openProjectModal(4);
      printTermLine("> [MODAL LAUNCH] Membuka lembar teknis Proyek 05: Sigap.", "term-line-green");
      break;

    case "project 6":
    case "project6":
    case "temuin":
      if (typeof openProjectModal === "function") openProjectModal(5);
      printTermLine("> [MODAL LAUNCH] Membuka lembar teknis Proyek 06: Temuin.", "term-line-green");
      break;

    case "project 7":
    case "project7":
    case "nenacare":
      if (typeof openProjectModal === "function") openProjectModal(6);
      printTermLine("> [MODAL LAUNCH] Membuka lembar teknis Proyek 07: NenaCare.", "term-line-green");
      break;

    case "archive":
    case "all":
    case "katalog":
    case "repositori":
      if (typeof openArchiveModal === "function") openArchiveModal();
      printTermLine("> [ARCHIVE LAUNCH] Membuka katalog repositori semua proyek...", "term-line-green");
      break;

    case "hire":
    case "contact":
    case "wa":
    case "whatsapp":
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      printTermLine("[JALUR KOMUNIKASI & REKRUTMEN]:", "term-line-cyan");
      printTermLine("  📧 Email    : anakagungarthawibawa22@gmail.com");
      printTermLine("  💬 Discord  : gekaaa");
      printTermLine("  📍 Lokasi   : Denpasar, Bali, Indonesia (Available for Remote / On-Site)");
      printTermLine("> Mengarahkan Anda ke formulir pesan langsung di bawah...", "term-line-green");
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

function initActiveNavObserver() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  if (!sections.length || !navLinks.length) return;

  if (typeof IntersectionObserver !== "undefined") {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              const href = link.getAttribute("href") || "";
              if (href === `#${id}` || href.endsWith(`#${id}`)) {
                link.classList.add("active");
              } else {
                link.classList.remove("active");
              }
            });
          }
        });
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
  }
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

let sweetAlertPromise = null;
function loadSweetAlert() {
  if (typeof window.Swal !== "undefined") {
    return Promise.resolve(window.Swal);
  }
  if (!sweetAlertPromise) {
    sweetAlertPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
      script.onload = () => resolve(window.Swal);
      script.onerror = (err) => {
        sweetAlertPromise = null;
        reject(err);
      };
      document.head.appendChild(script);
    });
  }
  return sweetAlertPromise;
}

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  // Prefetch SweetAlert saat user mulai fokus/interaksi di form agar tidak ada lag saat submit
  contactForm.addEventListener("focusin", () => {
    loadSweetAlert().catch(() => {});
  }, { once: true });

  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("user-name").value.trim();
    const email = document.getElementById("user-email").value.trim();
    const subject = document.getElementById("project-subject").value.trim() || "Diskusi Proyek";
    const details = document.getElementById("project-details").value.trim();
    const myPhone = "6282247846546";

    let SwalInstance;
    try {
      SwalInstance = await loadSweetAlert();
    } catch (err) {
      console.error("SweetAlert load error:", err);
      alert("Harap isi nama, email, dan rincian pesan Anda dengan lengkap.");
      return;
    }

    if (!name || !email || !details) {
      SwalInstance.fire({
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

    SwalInstance.fire({
      title: "> ENCRYPTING PACKETS...",
      html: `
        <div style="color: #00f3ff; font-family: 'JetBrains Mono', monospace; text-align: left; font-size: 0.85rem">
          > Validating input credentials... [OK]<br>
          > Encrypting message payload (AES-256)... [OK]<br>
          > Dispatching secure communication handshake...
        </div>
      `,
      background: "#0c1222",
      showConfirmButton: false,
      allowOutsideClick: false,
      timer: 1100,
      didOpen: () => {
        SwalInstance.showLoading();
      },
    }).then(() => {
      SwalInstance.fire({
        icon: "success",
        title: "> TRANSMISSION READY",
        html: `
          <div style="font-family: 'JetBrains Mono', monospace; text-align: left; font-size: 0.85rem">
            <p class="text-success mb-1">> STATUS: 200 SUCCESS</p>
            <p class="mb-0" style="color: #cbd5e1;">> Pesan terenkripsi Anda siap diteruskan langsung ke kontak prioritas Krisna.</p>
          </div>
        `,
        background: "#0c1222",
        confirmButtonColor: "#00f3ff",
        confirmButtonText: "LANJUTKAN PENGIRIMAN",
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

function initModalScrollLock() {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    modal.addEventListener("show.bs.modal", () => {
      document.documentElement.classList.add("modal-open");
      document.body.classList.add("modal-open");

      const miniConsole = document.getElementById("mini-console");
      if (miniConsole) miniConsole.style.setProperty("display", "none", "important");
      const fontWidget = document.querySelector(".accessibility-wrapper");
      if (fontWidget) fontWidget.style.setProperty("display", "none", "important");
    });

    modal.addEventListener("hidden.bs.modal", () => {
      setTimeout(() => {
        if (!document.querySelector(".modal.show")) {
          document.documentElement.classList.remove("modal-open");
          document.body.classList.remove("modal-open");

          const miniConsole = document.getElementById("mini-console");
          if (miniConsole) miniConsole.style.removeProperty("display");
          const fontWidget = document.querySelector(".accessibility-wrapper");
          if (fontWidget) fontWidget.style.removeProperty("display");
        }
      }, 50);
    });
  });
}

// Window bindings untuk event listener inline di HTML
if (typeof window !== "undefined") {
  window.toggleConsole = toggleConsole;
  window.toggleFontOptions = toggleFontOptions;
  window.changeFontSize = changeFontSize;
  window.initChatbot = initTerminalConsole;
  window.toggleChatWidget = toggleConsole;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startPortfolioApp);
} else {
  startPortfolioApp();
}
