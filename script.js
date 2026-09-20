// ---------- Highlight the current section in the nav while scrolling ----------
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function highlightNav() {
  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 90; // account for sticky nav height
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSectionId) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", highlightNav);
window.addEventListener("load", highlightNav);

// ---------- Back-to-top button ----------
const backToTopBtn = document.createElement("button");
backToTopBtn.className = "back-to-top";
backToTopBtn.setAttribute("aria-label", "Back to top");
backToTopBtn.textContent = "↑";
document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---------- Footer year (keeps the footer accurate automatically) ----------
const footer = document.querySelector("footer span:last-child");
if (footer) {
  const currentYear = new Date().getFullYear();
  footer.textContent = footer.textContent + " · " + currentYear;
}
