(function () {
  "use strict";
  var C = window.TEO_CONFIG || {};
  var links = C.links || {};

  function get(key) {
    if (key in C) return C[key];
    if (key in links) return links[key];
    return "";
  }

  function hrefFor(key) {
    if (key === "whatsapp") {
      return "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(C.whatsappMessage || "");
    }
    return get(key);
  }

  // نصوص من الإعدادات
  document.querySelectorAll("[data-cfg]").forEach(function (el) {
    el.textContent = get(el.getAttribute("data-cfg"));
  });

  // روابط من الإعدادات
  document.querySelectorAll("[data-link]").forEach(function (el) {
    var url = hrefFor(el.getAttribute("data-link"));
    if (url) {
      el.setAttribute("href", url);
      if (/^https?:/.test(url)) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
      }
    } else {
      el.style.display = "none";
    }
  });

  // السنة في الفوتر
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // أزرار النسخ
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); resolve(); } catch (e) { reject(e); }
      document.body.removeChild(ta);
    });
  }

  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = hrefFor(btn.getAttribute("data-copy"));
      var label = btn.querySelector(".copy-label");
      var original = label ? label.textContent : "";
      copyText(text).then(function () {
        btn.classList.add("is-copied");
        if (label) label.textContent = "تم النسخ";
        setTimeout(function () {
          btn.classList.remove("is-copied");
          if (label) label.textContent = original;
        }, 1800);
      });
    });
  });

  // الهيدر عند التمرير
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ظهور العناصر بنعومة
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -40px 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }
})();
