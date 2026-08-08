(function () {
  const root = document.documentElement;
  root.classList.remove("no-js");
  root.classList.add("js");
  const storageKey = "sahil-portfolio-theme";
  const themeToggle = document.querySelector(".theme-toggle");
  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector("#primary-menu");
  const year = document.querySelector("#current-year");
  const pageProgress = document.querySelector(".page-progress span");
  const hero = document.querySelector(".cinematic-hero");
  const operatingSection = document.querySelector(".operating-section");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const colorPreference = window.matchMedia("(prefers-color-scheme: dark)");
  const mobileMenu = window.matchMedia("(max-width: 1120px)");
  const stickyOperating = window.matchMedia("(min-width: 981px) and (min-height: 721px)");
  let scrollFrame = 0;

  function readSavedTheme() {
    try {
      return window.localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch (error) {
      return;
    }
  }

  function getPreferredTheme() {
    const saved = readSavedTheme();
    if (saved === "dark" || saved === "light") {
      return saved;
    }
    return colorPreference.matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    if (themeToggle) {
      const nextTheme = theme === "dark" ? "light" : "dark";
      themeToggle.setAttribute("aria-label", "Switch to " + nextTheme + " theme");
      themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    }
  }

  applyTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      saveTheme(nextTheme);
      applyTheme(nextTheme);
    });
  }

  colorPreference.addEventListener("change", function () {
    const saved = readSavedTheme();
    if (!saved) {
      applyTheme(getPreferredTheme());
    }
  });

  function setMenuAccessibility(isOpen) {
    if (!menu) {
      return;
    }

    if (mobileMenu.matches) {
      menu.inert = !isOpen;
      menu.setAttribute("aria-hidden", isOpen ? "false" : "true");
    } else {
      menu.inert = false;
      menu.removeAttribute("aria-hidden");
    }
  }

  function closeMenu(restoreFocus) {
    if (!menu || !menuButton) {
      return;
    }
    menu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.querySelector(".sr-only").textContent = "Open navigation menu";
    document.body.classList.remove("menu-open");
    setMenuAccessibility(false);
    if (restoreFocus) {
      menuButton.focus({ preventScroll: true });
    }
  }

  function openMenu() {
    if (!menu || !menuButton) {
      return;
    }
    setMenuAccessibility(true);
    menu.classList.add("is-open");
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.querySelector(".sr-only").textContent = "Close navigation menu";
    document.body.classList.add("menu-open");
    const firstLink = menu.querySelector("a, button");
    if (firstLink) {
      firstLink.focus({ preventScroll: true });
    }
  }

  function trapMenuFocus(event) {
    if (!menu || !mobileMenu.matches || menuButton.getAttribute("aria-expanded") !== "true") {
      return;
    }

    const focusable = [
      menuButton,
      ...Array.from(menu.querySelectorAll("a[href], button:not([disabled])"))
    ];
    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  if (menuButton && menu) {
    setMenuAccessibility(false);

    menuButton.addEventListener("click", function () {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeMenu(true);
      } else {
        openMenu();
      }
    });

    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        closeMenu(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      if (event.key === "Escape" && isOpen) {
        closeMenu(true);
      } else if (event.key === "Tab" && isOpen) {
        trapMenuFocus(event);
      }
    });

    mobileMenu.addEventListener("change", function () {
      closeMenu(false);
      setMenuAccessibility(false);
    });
  }

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  const navTargets = navLinks
    .map(function (link) {
      return {
        link: link,
        section: document.querySelector(link.getAttribute("href"))
      };
    })
    .filter(function (item) {
      return item.section;
    });

  function updateActiveNavigation() {
    let current = null;
    const activationLine = window.innerHeight * 0.38;

    navTargets.forEach(function (item) {
      if (item.section.getBoundingClientRect().top <= activationLine) {
        current = item;
      }
    });

    navTargets.forEach(function (item) {
      if (item === current) {
        item.link.setAttribute("aria-current", "location");
      } else {
        item.link.removeAttribute("aria-current");
      }
    });
  }

  function updateScrollEffects() {
    scrollFrame = 0;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(Math.max(window.scrollY / scrollable, 0), 1) : 0;
    root.style.setProperty("--page-progress", String(progress));

    if (operatingSection) {
      if (!reduceMotion.matches && stickyOperating.matches) {
        const rect = operatingSection.getBoundingClientRect();
        const travel = Math.max(operatingSection.offsetHeight - window.innerHeight, 1);
        const operatingProgress = Math.min(Math.max(-rect.top / travel, 0), 1);
        operatingSection.style.setProperty("--operating-progress", String(operatingProgress));
        operatingSection.style.setProperty("--operating-scale", String(0.86 + operatingProgress * 0.14));
        operatingSection.style.setProperty("--operating-radius", String((1 - operatingProgress) * 28) + "px");
        operatingSection.style.setProperty("--operating-image-scale", String(1.12 - operatingProgress * 0.12));
      } else {
        operatingSection.style.setProperty("--operating-progress", "1");
        operatingSection.style.setProperty("--operating-scale", "1");
        operatingSection.style.setProperty("--operating-radius", "16px");
        operatingSection.style.setProperty("--operating-image-scale", "1");
      }
    }

    updateActiveNavigation();
  }

  function scheduleScrollEffects() {
    if (!scrollFrame) {
      scrollFrame = window.requestAnimationFrame(updateScrollEffects);
    }
  }

  window.addEventListener("scroll", scheduleScrollEffects, { passive: true });
  window.addEventListener("resize", scheduleScrollEffects, { passive: true });
  reduceMotion.addEventListener("change", scheduleScrollEffects);
  stickyOperating.addEventListener("change", scheduleScrollEffects);
  scheduleScrollEffects();

  if (hero && !reduceMotion.matches && "IntersectionObserver" in window) {
    const heroMotionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        hero.classList.toggle("is-motion-active", entry.isIntersecting);
      });
    });
    heroMotionObserver.observe(hero);
  }

  const metricValues = Array.from(document.querySelectorAll(".metric-value"));

  function formatMetric(value) {
    if (value >= 1000) {
      return Math.round(value / 1000) + "K";
    }
    return String(Math.round(value));
  }

  function animateMetric(element) {
    const target = Number(element.dataset.value || "0");
    if (!target || element.dataset.animated === "true") {
      return;
    }
    element.dataset.animated = "true";

    if (reduceMotion.matches) {
      element.textContent = formatMetric(target);
      return;
    }

    const duration = 720;
    const start = performance.now();

    function tick(now) {
      const elapsed = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      element.textContent = formatMetric(target * eased);
      if (elapsed < 1) {
        window.requestAnimationFrame(tick);
      } else {
        element.textContent = formatMetric(target);
      }
    }

    window.requestAnimationFrame(tick);
  }

  if (metricValues.length > 0) {
    if (!("IntersectionObserver" in window)) {
      metricValues.forEach(animateMetric);
    } else {
      const metricObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              metricValues.forEach(animateMetric);
              metricObserver.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );
      metricObserver.observe(metricValues[0]);
    }
  }
})();
