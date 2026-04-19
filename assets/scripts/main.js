const menuButton = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-main-nav]");

if (menuButton && nav) {
  const closeMenu = () => {
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1040) {
      closeMenu();
    }
  });
}

const lightbox = document.querySelector("[data-lightbox-dialog]");

if (lightbox instanceof HTMLDialogElement) {
  const lightboxImage = lightbox.querySelector("[data-lightbox-image]");
  const lightboxTitle = lightbox.querySelector("[data-lightbox-title]");
  const closeButton = lightbox.querySelector("[data-lightbox-close]");

  document.querySelectorAll("[data-lightbox-src]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!(lightboxImage instanceof HTMLImageElement) || !lightboxTitle) {
        return;
      }

      lightboxImage.src = button.getAttribute("data-lightbox-src") || "";
      lightboxImage.alt = button.getAttribute("data-lightbox-alt") || "";
      lightboxTitle.textContent = button.getAttribute("data-lightbox-title") || "Lavoro Riparapadel";
      lightbox.showModal();
    });
  });

  closeButton?.addEventListener("click", () => {
    lightbox.close();
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.close();
    }
  });

  lightbox.addEventListener("close", () => {
    if (lightboxImage instanceof HTMLImageElement) {
      lightboxImage.removeAttribute("src");
      lightboxImage.alt = "";
    }
  });
}

const revealTargets = new Set(
  document.querySelectorAll(
    ".section-heading, .fact, .card, .gallery-card, .work-card, .final-cta, .page-hero .container",
  ),
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
  );

  Array.from(revealTargets).forEach((element, index) => {
    element.classList.add("reveal");
    element.style.setProperty("--reveal-delay", `${Math.min(index % 8, 5) * 45}ms`);
    observer.observe(element);
  });
} else {
  revealTargets.forEach((element) => {
    element.classList.add("is-visible");
  });
}
