AOS.init({
  duration: 800,
  once: false,
  mirror: true,
  anchorPlacement: "top-bottom",
});

const terminalInput = document.getElementById("cli-input");
const terminalOutput = document.getElementById("output");

terminalInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const command = this.value.toLowerCase().trim();

    terminalOutput.innerHTML += `<div><span class='text-info'>guest@dev:</span> ${command}</div>`;

    let response = "";

    switch (command) {
      case "help":
        response = "Available: <b>home</b>, <b>skills</b>, <b>projects</b>, <b>hire</b>, <b>clear</b>, <b>top</b";
        break;
      case "home":
        response = "Searching home...";
        document.getElementById("home").scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        response = "Searching skill database...";
        document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        response = "Accessing active projects logs...";
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
        break;
      case "hire":
        response = "Initiating recruitment protocol...";
        setTimeout(() => {
          document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        }, 600);
        break;
      case "top":
        response = "Scrolling to top...";
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "clear":
        terminalOutput.innerHTML = "<div class='text-muted'>Terminal cleared. Awaiting input...</div>";
        this.value = "";
        return;
      case "":
        return;
      default:
        response = `Command not found: <span class='text-danger'>${command}</span>. Type 'help' for info.`;
    }

    terminalOutput.innerHTML += `<div>${response}</div>`;

    this.value = "";
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
});

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section, div[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

function toggleConsole() {
  const consoleEl = document.getElementById("mini-console");
  const icon = document.querySelector("#toggle-icon i");

  consoleEl.classList.toggle("minimized");

  if (consoleEl.classList.contains("minimized")) {
    icon.className = "fas fa-chevron-up small";
  } else {
    icon.className = "fas fa-minus small";
  }
}

const textElement = document.getElementById("typing-text");
const phrases = ["CYBER SECURITY", "WEB DEVELOPER"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    textElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 50;
  } else {
    textElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 150;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typeSpeed = 2000;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    type();
  }, 1600);
});

function toggleFontOptions() {
  const options = document.getElementById("fontOptions");
  options.classList.toggle("show");
}

function changeFontSize(size) {
  document.documentElement.style.fontSize = size * 100 + "%";
  document.getElementById("fontOptions").classList.remove("show");
}
