(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // ---------------------------
  // i18n
  // ---------------------------
  const getByPath = (obj, path) => {
    return path.split(".").reduce((acc, k) => (acc && acc[k] != null ? acc[k] : null), obj);
  };

  const LANGS = ["id", "en", "zh", "fr"];
  const langBtns = $$(".lang-btn");
  let currentLang = (localStorage.getItem("lang") || document.documentElement.lang || "id").toLowerCase();
  if (!LANGS.includes(currentLang)) currentLang = "id";

  const t = (key) => {
    const dict = window.I18N && window.I18N[currentLang];
    const v = dict ? getByPath(dict, key) : null;
    return (typeof v === "string") ? v : "";
  };

  const applyLang = (lang) => {
    currentLang = LANGS.includes(lang) ? lang : "id";
    localStorage.setItem("lang", currentLang);
    document.documentElement.lang = currentLang;

    // active state
    langBtns.forEach(b => b.classList.toggle("active", b.dataset.lang === currentLang));

    // text nodes
    $$("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = t(key);
      if (val) el.textContent = val;
    });

    // html nodes
    $$("[data-i18n-html]").forEach(el => {
      const key = el.getAttribute("data-i18n-html");
      const dict = window.I18N && window.I18N[currentLang];
      const val = dict ? getByPath(dict, key) : null;
      if (typeof val === "string") el.innerHTML = val;
    });

    // attributes: data-i18n-attr="attr:key;attr2:key2"
    $$("[data-i18n-attr]").forEach(el => {
      const raw = el.getAttribute("data-i18n-attr") || "";
      raw.split(";").map(s => s.trim()).filter(Boolean).forEach(pair => {
        const [attr, key] = pair.split(":").map(s => (s || "").trim());
        if (!attr || !key) return;
        const val = t(key);
        if (val) el.setAttribute(attr, val);
      });
    });
  };

  langBtns.forEach(btn => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });

  applyLang(currentLang);

  // ---------------------------
  // Reveal on scroll (fade in/out)
  // ---------------------------
  const revealEls = $$(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      e.target.classList.toggle("in-view", e.isIntersecting);
    });
  }, { threshold: 0.16, rootMargin: "0px 0px -12% 0px" });
  revealEls.forEach((el) => io.observe(el));

  // ---------------------------
  // Progress bar
  // ---------------------------
  const bar = $("#progressBar");
  const onScroll = () => {
    const doc = document.documentElement;
    const top = doc.scrollTop || document.body.scrollTop;
    const height = doc.scrollHeight - doc.clientHeight;
    const p = height > 0 ? (top / height) * 100 : 0;
    if (bar) bar.style.width = `${p}%`;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---------------------------
  // Active dot nav
  // ---------------------------
  const sections = ["home", "results", "figures", "download"]
    .map(id => document.getElementById(id))
    .filter(Boolean);
  const dots = $$(".side-nav .dot");
  const setActiveDot = (id) => {
    dots.forEach(d => d.classList.toggle("active", d.getAttribute("href") === `#${id}`));
  };
  const ioNav = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setActiveDot(visible.target.id);
  }, { threshold: [0.25, 0.45, 0.6] });
  sections.forEach(s => ioNav.observe(s));

  // ---------------------------
  // Modal
  // ---------------------------
  const modal = $("#modal");
  const modalTitle = $("#modalTitle");
  const modalContent = $("#modalContent");

  const openModal = ({ title, html, imgSrc }) => {
    if (!modal) return;
    if (modalTitle) modalTitle.textContent = title || "";
    if (modalContent) {
      modalContent.innerHTML = "";
      if (imgSrc) {
        const img = new Image();
        img.alt = title || "Image";
        img.loading = "eager";
        img.src = imgSrc;
        modalContent.appendChild(img);
      } else {
        modalContent.innerHTML = html || "";
      }
    }
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  const getModalHtml = (key) => {
    const dict = window.I18N && window.I18N[currentLang];
    const v = dict ? getByPath(dict, key) : null;
    return (typeof v === "string") ? v : "";
  };

  // Delegated click handlers
  document.addEventListener("click", (e) => {
    const close = e.target.closest("[data-close]");
    if (close) return closeModal();

    const card = e.target.closest(".clickable");
    if (!card) return;

    const mode = card.dataset.open;

    if (mode === "image") {
      const key = card.dataset.titleKey;
      const title = key ? t(key) : (card.dataset.title || "Image");
      openModal({ title, imgSrc: card.dataset.img });
      return;
    }

    if (mode === "modal") {
      const m = card.dataset.modal;
      const title = t(`modal.${m}.title`);
      const html = getModalHtml(`modal.${m}.body`);
      openModal({ title, html });
      return;
    }
  });

    document.addEventListener("keydown", (e) => {
    // Keyboard support for clickable elements
    if ((e.key === "Enter" || e.key === " ") && document.activeElement) {
      const el = document.activeElement.closest?.(".clickable");
      if (el) {
        e.preventDefault();
        el.click();
        return;
      }
    }

    if (e.key === "Escape" && modal && modal.classList.contains("show")) closeModal();
  });
})();