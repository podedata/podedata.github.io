/* Aviso de consentimento (LGPD) + carregamento opcional de Clarity/GA4.
 * Só age se houver ao menos um ID em site-config.js. Escolha fica em localStorage. */
(function () {
  var cfg = window.PODE_SITE_CONFIG || {};
  var hasClarity = /^[a-z0-9]{6,}$/i.test(cfg.clarityId || "");
  var hasGa = /^G-[A-Z0-9]{4,}$/.test(cfg.ga4Id || "");
  if (!hasClarity && !hasGa) return;

  var KEY = "pode_consent_v1";
  function load() {
    if (hasClarity) {
      (function (c, l, a, r, i, t, y) {
        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
        t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", cfg.clarityId);
    }
    if (hasGa) {
      var s = document.createElement("script");
      s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + cfg.ga4Id;
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag("js", new Date());
      window.gtag("config", cfg.ga4Id, { anonymize_ip: true });
    }
  }
  function choice() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  // link "Preferências de cookies" no rodapé, para revogar/alterar a escolha
  document.addEventListener("DOMContentLoaded", addFooterLink);
  if (document.readyState !== "loading") addFooterLink();
  function addFooterLink() {
    if (document.getElementById("consent-prefs")) return;
    var col = document.querySelector('.footer a[href="/privacidade.html"]');
    if (!col) return;
    var a = document.createElement("a");
    a.href = "#"; a.id = "consent-prefs"; a.textContent = "Preferências de cookies";
    a.addEventListener("click", function (e) { e.preventDefault(); try { localStorage.removeItem(KEY); } catch (x) {} location.reload(); });
    col.parentNode.appendChild(a);
  }

  if (choice() === "accepted") { load(); return; }
  if (choice() === "rejected") return;

  var bar = document.createElement("div");
  bar.className = "consent";
  bar.setAttribute("role", "dialog");
  bar.setAttribute("aria-label", "Aviso de cookies");
  bar.innerHTML =
    '<p>Usamos cookies opcionais de métricas para entender como o site é usado e melhorá-lo. ' +
    'Eles só são ativados se você aceitar. <a href="' + (cfg.privacyUrl || "/privacidade.html") + '#cookies">Saiba mais</a></p>' +
    '<div class="consent__btns"><button type="button" class="btn btn--sm btn--ghost-dark" data-c="rejected">Recusar</button>' +
    '<button type="button" class="btn btn--sm btn--primary" data-c="accepted">Aceitar</button></div>';
  bar.addEventListener("click", function (e) {
    var v = e.target.getAttribute && e.target.getAttribute("data-c");
    if (!v) return;
    save(v); bar.remove(); if (v === "accepted") load();
  });
  document.body.appendChild(bar);
})();
