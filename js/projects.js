let projectsScrollTrigger = null;

function initFullscreenProjectsGSAP() {

  initMobileCarouselObserver();

  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({

    "(min-width: 992px)": function () {
      const pinWrapper = document.getElementById("projects-pin-wrapper");
      if (!pinWrapper) return;

      const dots = document.querySelectorAll(".slide-indicator-dot");
      const slide0 = document.getElementById("project-slide-0");
      const slide1 = document.getElementById("project-slide-1");
      const slide2 = document.getElementById("project-slide-2");
      const slide3 = document.getElementById("project-slide-3");

      if (!slide0 || !slide1 || !slide2 || !slide3) return;

      gsap.set(slide0, { yPercent: 0, autoAlpha: 1, zIndex: 1, force3D: true });
      gsap.set(slide1, { yPercent: 100, autoAlpha: 1, zIndex: 2, force3D: true });
      gsap.set(slide2, { yPercent: 100, autoAlpha: 1, zIndex: 3, force3D: true });
      gsap.set(slide3, { yPercent: 100, autoAlpha: 1, zIndex: 4, force3D: true });

      let lastActiveDot = -1;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#projects",
          pin: "#projects-pin-wrapper",
          pinSpacing: true,
          start: "top top",
          end: "+=1800",
          scrub: 0.6,
          anticipatePin: 0,
          fastScrollEnd: true,
          preventOverlaps: true,
          id: "projects-pin",
          onUpdate: (self) => {
            const p = self.progress;
            let activeDot = 0;
            if (p < 0.28) {
              activeDot = 0;
            } else if (p < 0.62) {
              activeDot = 1;
            } else if (p < 0.90) {
              activeDot = 2;
            } else {
              activeDot = 3;
            }

            if (activeDot !== lastActiveDot) {
              lastActiveDot = activeDot;
              dots.forEach((d, idx) => {
                if (idx === activeDot) d.classList.add("active");
                else d.classList.remove("active");
              });
            }
          },
        },
      });

      tl.to(slide1, {
        yPercent: 0,
        ease: "none",
        duration: 1,
        force3D: true,
      })

      .to(slide2, {
        yPercent: 0,
        ease: "none",
        duration: 1,
        force3D: true,
      })

      .to(slide3, {
        yPercent: 0,
        ease: "none",
        duration: 1,
        force3D: true,
      });

      projectsScrollTrigger = tl.scrollTrigger;
    },

    "(max-width: 991px)": function () {
      projectsScrollTrigger = null;
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
    const progressMap = [0.01, 0.38, 0.72, 0.98];
    const targetProgress = progressMap[index] ?? 0;
    const scrollPos = st.start + (st.end - st.start) * targetProgress;
    if (window.lenis) {
      window.lenis.scrollTo(scrollPos, { duration: 0.45 });
    } else {
      window.scrollTo({ top: scrollPos, behavior: "smooth" });
    }
  }
}

function scrollMobileCard(index) {
  const track = document.getElementById("mobileCarouselTrack");
  if (!track) return;
  const cards = track.querySelectorAll(".mobile-carousel-card");
  if (!cards[index]) return;

  const card = cards[index];
  const targetLeft = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
  track.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });

  updateMobileDots(index);
}

function updateMobileDots(activeIndex) {
  const dots = document.querySelectorAll("#mobileCarouselDots .mobile-dot");
  dots.forEach((dot, idx) => {
    if (idx === activeIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function initMobileCarouselObserver() {
  const track = document.getElementById("mobileCarouselTrack");
  if (!track) return;

  let ticking = false;
  track.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        requestAnimationFrame(() => {
          const cards = track.querySelectorAll(".mobile-carousel-card");
          const trackCenter = track.scrollLeft + track.clientWidth / 2;
          let closestIdx = 0;
          let minDistance = Infinity;

          cards.forEach((card, idx) => {
            const cardCenter = card.offsetLeft + card.clientWidth / 2;
            const dist = Math.abs(trackCenter - cardCenter);
            if (dist < minDistance) {
              minDistance = dist;
              closestIdx = idx;
            }
          });

          updateMobileDots(closestIdx);
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
}

function openProjectModal(projectId) {
  const dataset = (typeof window !== "undefined" && window.projectsData) ? window.projectsData : (typeof projectsData !== "undefined" ? projectsData : []);
  const numId = typeof projectId === "number" ? projectId : parseInt(projectId, 10);
  const project = dataset.find((p) => p.id === numId) || dataset.find((p) => typeof projectId === "string" && p.title.toLowerCase().includes(projectId.toLowerCase()));
  if (!project) return;

  const archiveModalEl = document.getElementById("archiveModal");
  if (archiveModalEl && archiveModalEl.classList.contains("show")) {
    const archiveInstance = bootstrap.Modal.getInstance(archiveModalEl);
    if (archiveInstance) archiveInstance.hide();
  }

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

  const statsSection = document.getElementById("modalStatsSection");
  const statsContainer = document.getElementById("modalStatsContainer");
  if (statsSection && statsContainer) {
    if (project.stats && project.stats.length > 0) {
      statsContainer.innerHTML = "";
      project.stats.forEach((st) => {
        const col = document.createElement("div");
        col.className = "col-6 col-md-3";
        col.innerHTML = `
          <div class="p-2 rounded-2 border border-secondary border-opacity-25 h-100" style="background: rgba(14, 22, 42, 0.65);">
            <div class="font-mono text-secondary text-uppercase" style="font-size: 0.7rem; letter-spacing: 0.5px;">${st.label}</div>
            <div class="text-info fw-bold font-mono mt-1" style="font-size: 0.82rem; word-break: break-word;">${st.val}</div>
          </div>
        `;
        statsContainer.appendChild(col);
      });
      statsSection.classList.remove("d-none");
    } else {
      statsSection.classList.add("d-none");
    }
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
  const dataset = (typeof window !== "undefined" && window.projectsData) ? window.projectsData : (typeof projectsData !== "undefined" ? projectsData : []);
  const countAll = dataset.length;
  const countCyber = dataset.filter((p) => p.categoryType === "cyber").length;
  const countWeb = dataset.filter((p) => p.categoryType === "web").length;
  const countTools = dataset.filter((p) => p.categoryType === "tools").length;

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

  const dataset = (typeof window !== "undefined" && window.projectsData) ? window.projectsData : (typeof projectsData !== "undefined" ? projectsData : []);

  const filtered = dataset.filter((p) => {
    const matchesCategory = category === "all" || p.categoryType === category;
    if (!matchesCategory) return false;
    if (!searchQuery) return true;

    const inTitle = p.title.toLowerCase().includes(searchQuery);
    const inCategory = p.category.toLowerCase().includes(searchQuery);
    const inProblem = (p.description || p.problem || "").toLowerCase().includes(searchQuery);
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
  if (summaryText) summaryText.textContent = `Menampilkan ${filtered.length} dari ${dataset.length} total proyek`;

  filtered.forEach((p) => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";

    const categoryIcon = p.categoryType === "cyber" ? "fa-shield-halved text-danger" : p.categoryType === "web" ? "fa-code text-info" : "fa-gear text-success";

    const repoLink = p.repoUrl || "https://github.com/ANTARTICA1";
    const demoLink = p.demoUrl || repoLink;
    const demoTitle = p.demoUrl ? "Buka Live Demo" : "Lihat Demo / Dokumentasi di GitHub";

    col.innerHTML = `
      <div class="archive-project-card h-100 d-flex flex-column">
        <div class="archive-card-thumb position-relative d-block" onclick="openProjectModal(${p.id})" style="cursor: pointer;" title="Klik untuk melihat detail ${p.title}">
          <img src="${p.image}" alt="${p.title}" class="w-100 archive-thumb-img" loading="lazy" />
          <div class="archive-thumb-overlay">
            <span class="btn btn-sm btn-neon-cyan px-3"><i class="fas fa-circle-info me-1"></i> Detail Proyek</span>
          </div>
        </div>
        <div class="archive-card-content p-3 d-flex flex-column flex-grow-1">
          <div class="d-flex align-items-center gap-2 mb-2">
            <i class="fas ${categoryIcon} small"></i>
            <span class="archive-card-category-text font-mono">${p.category}</span>
          </div>
          <h5 class="archive-card-heading mb-2" onclick="openProjectModal(${p.id})" style="cursor: pointer;" title="Klik untuk melihat detail ${p.title}">
            <span class="text-white">${p.title}</span>
          </h5>
          <p class="archive-card-snippet mb-3 flex-grow-1" style="color: #cbd5e1;">${p.description || p.problem}</p>
          <div class="archive-card-tags mb-3 d-flex flex-wrap gap-1">
            ${p.techStack.slice(0, 3).map((t) => `<span class="tech-tag small py-0 px-2">${t}</span>`).join("")}
            ${p.techStack.length > 3 ? `<span class="tech-tag small py-0 px-1">+${p.techStack.length - 3}</span>` : ""}
          </div>
          <div class="d-flex gap-2 pt-2 border-top border-secondary border-opacity-25 mt-auto">
            <a href="${repoLink}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-neon-cyan flex-grow-1 text-center" title="Buka Repositori GitHub">
              <i class="fab fa-github me-1"></i> GitHub
            </a>
            <a href="${demoLink}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-cyber px-3 text-info" title="${demoTitle}">
              <i class="fas fa-arrow-up-right-from-square me-1"></i> Demo
            </a>
          </div>
        </div>
      </div>
    `;

    grid.appendChild(col);
  });
}

if (typeof window !== "undefined") {
  window.switchProject = switchProject;
  window.prevProject = prevProject;
  window.nextProject = nextProject;
  window.scrollMobileCard = scrollMobileCard;
  window.initProjectsShowcase = initProjectsShowcase;
  window.initFullscreenProjectsGSAP = initFullscreenProjectsGSAP;
  window.jumpToProjectSlide = jumpToProjectSlide;
  window.openProjectModal = openProjectModal;
  window.openArchiveModal = openArchiveModal;
  window.filterArchiveCategory = filterArchiveCategory;
  window.handleArchiveSearch = handleArchiveSearch;
  window.updateArchiveCategoryCounts = updateArchiveCategoryCounts;
  window.renderProjectsArchive = renderProjectsArchive;
}
