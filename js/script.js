/* ==========================================================================
   SCRIPT.JS — Portfólio Pedro Henrique da Silva Pereira
   1. Ano do rodapé   2. Tema   3. Menu mobile e link ativo
   4. Renderização a partir de data.js   5. Formulário (mailto)
   Sem bibliotecas externas. Os dados renderizados vêm apenas de data.js;
   a entrada do visitante nunca é inserida como HTML.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* 1. Ano --------------------------------------------------------------- */
  document.querySelectorAll(".current-year").forEach(el => { el.textContent = new Date().getFullYear(); });

  /* 2. Tema -------------------------------------------------------------- */
  const THEME_KEY = "portfolio-theme";
  const root = document.documentElement;
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  const currentTheme = () => root.getAttribute("data-theme") || (systemDark.matches ? "dark" : "light");
  document.querySelectorAll("[data-theme-toggle]").forEach(btn => {
    const sync = () => btn.setAttribute("aria-pressed", String(currentTheme() === "dark"));
    sync();
    btn.addEventListener("click", () => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* sem storage */ }
      sync();
    });
  });

  /* 3. Menu mobile e link ativo ----------------------------------------- */
  const nav = $("#site-nav");
  const toggle = $(".nav-toggle");
  if (nav && toggle) {
    const setOpen = (open) => {
      nav.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    };
    toggle.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", e => { if (e.key === "Escape" && nav.classList.contains("open")) { setOpen(false); toggle.focus(); } });
  }

  const navLinks = document.querySelectorAll(".site-nav a[href^='#']");
  if (navLinks.length && "IntersectionObserver" in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "true"); else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(s => obs.observe(s));
  }

  /* 4. Renderização ------------------------------------------------------ */
  const STATUS_CLASS = {
    "Funcional": "badge-ok", "Concluído": "badge-ok", "Concluída": "badge-ok",
    "WIP": "badge-wip", "Em documentação": "badge-wip", "Em andamento": "badge-wip",
    "Interno": "badge-accent", "Especificação": "badge-neutral", "Planejado": "badge-neutral"
  };
  const badge = (status) => `<span class="badge ${STATUS_CLASS[status] || "badge-neutral"}">${esc(status)}</span>`;
  const tags = (list) => `<ul class="tags" aria-label="Tecnologias">${list.map(t => `<li>${esc(t)}</li>`).join("")}</ul>`;

  const exp = $("#experience-container");
  if (exp && typeof EXPERIENCE_DATA !== "undefined") {
    exp.innerHTML = EXPERIENCE_DATA.map(e => `
      <article class="card job">
        <div class="job-period">${esc(e.period)}${e.current ? ' <span class="badge badge-accent">atual</span>' : ""}</div>
        <div>
          <h3>${esc(e.role)}</h3>
          <p class="job-company">${esc(e.company)}</p>
          <p class="muted">${esc(e.summary)}</p>
          <ul>${e.activities.map(a => `<li>${esc(a)}</li>`).join("")}</ul>
        </div>
      </article>`).join("");
  }

  const proj = $("#projects-container");
  if (proj && typeof PROJECTS_DATA !== "undefined") {
    proj.innerHTML = PROJECTS_DATA.map(p => `
      <article class="card project" id="projeto-${esc(p.id)}">
        <div class="project-head">
          <div>
            <p class="project-kind">${esc(p.kind)}</p>
            <h3>${esc(p.title)}</h3>
          </div>
          ${badge(p.status)}
        </div>
        <p>${esc(p.summary)}</p>
        <p class="project-problem"><strong>Problema:</strong> ${esc(p.problem)}</p>
        ${tags(p.tech)}
        <details>
          <summary>Detalhes técnicos</summary>
          <dl>
            <div><dt>O que existe</dt><dd><ul>${p.built.map(b => `<li>${esc(b)}</li>`).join("")}</ul></dd></div>
            <div><dt>Testes</dt><dd>${esc(p.tests)}</dd></div>
            <div><dt>Limitações</dt><dd>${esc(p.limits)}</dd></div>
          </dl>
        </details>
        <div class="project-foot">
          ${p.note ? `<span class="project-note">${esc(p.note)}</span>` : "<span></span>"}
          <span class="actions">
            ${p.demo ? `<a class="btn" href="${esc(p.demo)}" target="_blank" rel="noopener">Demo ao vivo<span class="visually-hidden"> de ${esc(p.title)}</span></a>` : ""}
            ${p.repo
              ? `<a class="btn" href="${esc(p.repo)}" target="_blank" rel="noopener"><svg width="18" height="18" aria-hidden="true"><use href="#i-github"/></svg>Repositório<span class="visually-hidden"> de ${esc(p.title)}</span></a>`
              : `<span class="mono small muted">${p.status === "Interno" ? "código não público" : "repositório em preparação"}</span>`}
          </span>
        </div>
      </article>`).join("");
  }

  const casos = $("#casos-container");
  if (casos && typeof CASOS_TECNICOS_DATA !== "undefined") {
    casos.innerHTML = CASOS_TECNICOS_DATA.map(c => `
      <article class="card case">
        <h3>${esc(c.title)}</h3>
        <dl>
          <div><dt>Problema</dt><dd>${esc(c.problem)}</dd></div>
          <div><dt>Contexto</dt><dd>${esc(c.context)}</dd></div>
          <div><dt>Solução</dt><dd>${esc(c.solution)}</dd></div>
          <div><dt>Resultado</dt><dd class="case-result">${esc(c.result)}</dd></div>
        </dl>
        ${tags(c.tech)}
      </article>`).join("");
  }

  const labs = $("#labs-container");
  if (labs && typeof LABS_DATA !== "undefined") {
    labs.innerHTML = LABS_DATA.map(l => `
      <article class="lab">
        <div class="lab-code">${esc(l.code)}</div>
        <div>
          <h3>${esc(l.title)}</h3>
          <p>${esc(l.description)}</p>
          ${l.env ? `<p class="lab-env">${esc(l.env)}</p>` : ""}
        </div>
        <div class="lab-meta">
          ${badge(l.status)}
          <span class="lab-date">${esc(l.date)}</span>
          <a href="${esc(l.page)}">Ver página<span class="visually-hidden"> do ${esc(l.code)}</span></a>
        </div>
      </article>`).join("");
  }

  const tech = $("#tech-container");
  if (tech && typeof TECH_GROUPS !== "undefined") {
    tech.innerHTML = TECH_GROUPS.map(g => `
      <div class="tech-group">
        <h3>${esc(g.title)}</h3>
        <table class="tech-table">
          <thead><tr><th scope="col">Tecnologia</th><th scope="col">Nível</th><th scope="col">Onde usei</th></tr></thead>
          <tbody>${g.items.map(i => {
            const lvl = TECH_STATUS_LEVELS[i.statusKey];
            return `<tr><td>${esc(i.name)}</td><td><span class="badge ${lvl.className}">${esc(lvl.label)}</span></td><td>${esc(i.whereUsed)}</td></tr>`;
          }).join("")}</tbody>
        </table>
      </div>`).join("");
  }

  const certs = $("#cert-container");
  if (certs && typeof CERTIFICATIONS_DATA !== "undefined") {
    certs.innerHTML = CERTIFICATIONS_DATA.map(c => `
      <article class="card cert">
        <p class="mono card-kicker">${esc(c.issuer)}</p>
        <h3>${esc(c.name)}</h3>
        ${c.detail ? `<p class="muted">${esc(c.detail)}</p>` : ""}
        ${c.verifyUrl ? `<p class="cert-foot"><a href="${esc(c.verifyUrl)}" target="_blank" rel="noopener">Verificar credencial<span class="visually-hidden"> ${esc(c.name)}</span></a></p>` : ""}
      </article>`).join("");
  }

  /* 5. Formulário: monta um e-mail no cliente do visitante --------------- */
  const form = $("#contact-form");
  if (form && typeof PROFILE_DATA !== "undefined") {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#contact-name").value.trim();
      const subject = $("#contact-subject").value.trim();
      const message = $("#contact-message").value.trim();
      const feedback = $("#form-feedback");
      feedback.classList.remove("error");
      if (!name || !message) {
        feedback.textContent = "Preencha nome e mensagem.";
        feedback.classList.add("error");
        (!name ? $("#contact-name") : $("#contact-message")).focus();
        return;
      }
      const params = new URLSearchParams({
        subject: subject || `Contato pelo portfólio — ${name}`,
        body: `${message}\n\n— ${name}`
      }).toString().replace(/\+/g, "%20");
      window.location.href = `mailto:${PROFILE_DATA.email}?${params}`;
      feedback.textContent = `Abrindo o seu aplicativo de e-mail. Se nada abrir, escreva para ${PROFILE_DATA.email}.`;
    });
  }
});
