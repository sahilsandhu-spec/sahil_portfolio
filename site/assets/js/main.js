(function () {
  const root = document.documentElement;
  const storageKey = "sahil-portfolio-theme";
  const themeToggle = document.querySelector(".theme-toggle");
  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector("#primary-menu");
  const year = document.querySelector("#current-year");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const colorPreference = window.matchMedia("(prefers-color-scheme: dark)");

  function getPreferredTheme() {
    const saved = window.localStorage.getItem(storageKey);
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
      window.localStorage.setItem(storageKey, nextTheme);
      applyTheme(nextTheme);
    });
  }

  colorPreference.addEventListener("change", function () {
    const saved = window.localStorage.getItem(storageKey);
    if (!saved) {
      applyTheme(getPreferredTheme());
    }
  });

  function closeMenu() {
    if (!menu || !menuButton) {
      return;
    }
    menu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.querySelector(".sr-only").textContent = "Open navigation menu";
  }

  function openMenu() {
    if (!menu || !menuButton) {
      return;
    }
    menu.classList.add("is-open");
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.querySelector(".sr-only").textContent = "Close navigation menu";
    const firstLink = menu.querySelector("a, button");
    if (firstLink) {
      firstLink.focus({ preventScroll: true });
    }
  }

  if (menuButton && menu) {
    menuButton.addEventListener("click", function () {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeMenu();
        menuButton.focus({ preventScroll: true });
      } else {
        openMenu();
      }
    });

    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
        menuButton.focus({ preventScroll: true });
      }
    });
  }

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const revealItems = Array.from(document.querySelectorAll(".reveal"));
  revealItems.forEach(function (item, index) {
    item.style.setProperty("--reveal-index", String(index % 4));
  });

  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  } else {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
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

