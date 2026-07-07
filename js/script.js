/* ==========================================================================
   SCRIPT.JS — Portfólio Pedro Henrique
   -----------------------------------------------------------------------
   Índice:
   1. Loader inicial
   2. Ano do rodapé
   3. Tema Dark/Light
   4. Navbar (scroll + menu mobile)
   5. Efeito de digitação (Hero)
   6. Canvas de partículas discretas (com pausa automática fora de vista)
   7. Renderização dinâmica (a partir de data.js): estatísticas, tecnologias,
      experiência, projetos, casos técnicos, scripts, laboratórios, jornada,
      roadmap, certificações e blog (com filtro de categorias)
   8. Contadores animados (Estatísticas)
   9. Barras de progresso (Roadmap)
   10. Botão voltar ao topo
   11. Cursor moderno
   12. Formulário de contato
   13. Inicialização do AOS
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------------------------------------------- */
  /* 1. LOADER INICIAL                                                */
  /* -------------------------------------------------------------- */
  const loader = document.getElementById("page-loader");
  window.addEventListener("load", () => {
    setTimeout(() => loader && loader.classList.add("loaded"), 350);
  });

  /* -------------------------------------------------------------- */
  /* 2. ANO DO RODAPÉ                                                 */
  /* -------------------------------------------------------------- */
  document.querySelectorAll(".current-year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  /* -------------------------------------------------------------- */
  /* 3. TEMA DARK / LIGHT                                             */
  /* -------------------------------------------------------------- */
  const THEME_KEY = "portfolio-theme";
  const themeToggles = document.querySelectorAll("[data-theme-toggle]");
  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    themeToggles.forEach(btn => {
      const icon = btn.querySelector("i");
      if (icon) icon.className = theme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun";
    });
  }

  let savedTheme = "dark";
  try { savedTheme = localStorage.getItem(THEME_KEY) || "dark"; } catch (e) { /* ambiente sem storage */ }
  applyTheme(savedTheme);

  themeToggles.forEach(btn => {
    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* ignora */ }
    });
  });

  /* -------------------------------------------------------------- */
  /* 4. NAVBAR — SCROLL + MENU MOBILE                                 */
  /* -------------------------------------------------------------- */
  const navbar = document.querySelector(".navbar-custom");
  const onScrollNav = () => {
    if (window.scrollY > 40) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  };
  onScrollNav();
  window.addEventListener("scroll", onScrollNav, { passive: true });

  const burger = document.querySelector(".nav-burger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileOverlay = document.querySelector(".mobile-menu-overlay");

  function closeMobileMenu() {
    mobileMenu.classList.remove("open");
    mobileOverlay.classList.remove("show");
  }

  if (burger) {
    burger.addEventListener("click", () => {
      mobileMenu.classList.add("open");
      mobileOverlay.classList.add("show");
    });
  }
  if (mobileOverlay) mobileOverlay.addEventListener("click", closeMobileMenu);
  document.querySelectorAll(".mobile-menu a").forEach(a => a.addEventListener("click", closeMobileMenu));

  // Destaca o link ativo conforme a seção visível
  const sections = document.querySelectorAll("main section[id]");
  const navLinkEls = document.querySelectorAll(".nav-links a, .mobile-menu a");
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinkEls.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(sec => sectionObserver.observe(sec));

  /* -------------------------------------------------------------- */
  /* 5. EFEITO DE DIGITAÇÃO (HERO)                                    */
  /* -------------------------------------------------------------- */
  const typingEl = document.getElementById("typing-text");
  if (typingEl && typeof PROFILE_DATA !== "undefined") {
    const roles = PROFILE_DATA.roles;
    let roleIndex = 0, charIndex = 0, deleting = false;

    function typeLoop() {
      const current = roles[roleIndex];
      if (!deleting) {
        charIndex++;
        typingEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(typeLoop, 1600);
          return;
        }
      } else {
        charIndex--;
        typingEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      setTimeout(typeLoop, deleting ? 35 : 65);
    }
    typeLoop();
  }

  /* -------------------------------------------------------------- */
  /* 6. CANVAS DE PARTÍCULAS DISCRETAS                                */
  /* -------------------------------------------------------------- */
  const canvas = document.getElementById("particles-canvas");
  if (canvas && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const ctx = canvas.getContext("2d");
    let particles = [];
    let w, h;
    let isRunning = false;   // evita múltiplos loops de rAF simultâneos
    let isVisible = true;    // seção Hero está no viewport?

    function resize() {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const COUNT = window.innerWidth < 768 ? 26 : 55;
    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.6 + 0.6,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.5 + 0.15
      });
    }

    function draw() {
      if (!isRunning) return; // corta o loop assim que a seção sai de vista (economia de CPU/bateria)
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 165, 233, ${p.alpha})`;
        ctx.fill();
      });
      // Conecta pontos próximos com linhas finas
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 120, 212, ${0.12 * (1 - dist / 110)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }

    function startLoop() {
      if (isRunning) return;
      isRunning = true;
      requestAnimationFrame(draw);
    }
    function stopLoop() { isRunning = false; }

    // Só anima enquanto o Hero estiver visível na tela...
    const heroSection = document.getElementById("home");
    if (heroSection && "IntersectionObserver" in window) {
      new IntersectionObserver((entries) => {
        isVisible = entries[0].isIntersecting;
        (isVisible && document.visibilityState === "visible") ? startLoop() : stopLoop();
      }, { threshold: 0.05 }).observe(heroSection);
    } else {
      startLoop();
    }

    // ...e enquanto a aba estiver em primeiro plano.
    document.addEventListener("visibilitychange", () => {
      (document.visibilityState === "visible" && isVisible) ? startLoop() : stopLoop();
    });
  }

  /* -------------------------------------------------------------- */
  /* 7. RENDERIZAÇÃO DINÂMICA (a partir de data.js)                   */
  /* -------------------------------------------------------------- */

  function statusBadgeClass(status) {
    if (status === "Concluído" || status === "Concluída") return "badge-concluido";
    if (status === "Em andamento") return "badge-andamento";
    return "badge-planejado";
  }

  // --- Estatísticas ---
  const statsContainer = document.getElementById("stats-container");
  if (statsContainer && typeof STATS_DATA !== "undefined") {
    statsContainer.innerHTML = STATS_DATA.map((s, i) => `
      <div class="glass-card stat-card" data-aos="fade-up" data-aos-delay="${i * 60}">
        <div class="stat-icon"><i class="${s.icon}"></i></div>
        <div class="stat-value" data-count="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join("");
  }

  // --- Tecnologias ---
  // Níveis qualitativos (sem percentuais) definidos em TECH_STATUS_LEVELS (data.js).
  const techContainer = document.getElementById("tech-container");
  if (techContainer && typeof TECH_DATA !== "undefined" && typeof TECH_STATUS_LEVELS !== "undefined") {
    techContainer.innerHTML = TECH_DATA.map((t, i) => {
      const level = TECH_STATUS_LEVELS[t.statusKey] || TECH_STATUS_LEVELS.planejado;
      return `
      <div class="glass-card tech-card" data-aos="fade-up" data-aos-delay="${i * 60}">
        <div class="tech-card-head">
          <div class="tech-icon"><i class="${t.icon}"></i></div>
          <div>
            <h5>${t.name}</h5>
            <span class="tech-level-badge ${level.className}"><i class="${level.icon}"></i> ${level.label}</span>
          </div>
        </div>
        <p class="tech-card-desc">${t.description}</p>
        <div class="tech-card-meta">
          <div><i class="fa-solid fa-location-dot"></i> <strong>Onde usei:</strong> ${t.whereUsed}</div>
          <div><i class="fa-solid fa-arrow-trend-up"></i> <strong>Próximo objetivo:</strong> ${t.nextGoal}</div>
        </div>
      </div>
    `;
    }).join("");
  }

  // --- Experiência ---
  const expContainer = document.getElementById("experience-container");
  if (expContainer && typeof EXPERIENCE_DATA !== "undefined") {
    expContainer.innerHTML = EXPERIENCE_DATA.map((e, i) => `
      <div class="timeline-item" data-aos="fade-up" data-aos-delay="${i * 80}">
        <div class="glass-card timeline-card">
          <span class="period"><i class="fa-regular fa-calendar me-1"></i>${e.period} ${e.current ? '<span class="current-pill">· Atual</span>' : ''}</span>
          <h4>${e.role}</h4>
          <div class="company"><i class="fa-solid fa-building me-1"></i> ${e.company}</div>
          <p class="timeline-summary">${e.summary}</p>
          <ul>${e.activities.map(a => `<li>${a}</li>`).join("")}</ul>
        </div>
      </div>
    `).join("");
  }

  // --- Projetos ---
  const projectsContainer = document.getElementById("projects-container");
  if (projectsContainer && typeof PROJECTS_DATA !== "undefined") {
    projectsContainer.innerHTML = PROJECTS_DATA.map((p, i) => `
      <div class="glass-card project-card" data-aos="fade-up" data-aos-delay="${i * 70}">
        <div class="project-thumb">
          <i class="${p.icon}"></i>
          <span class="badge-status ${statusBadgeClass(p.status)} project-status-badge">${p.status}</span>
        </div>
        <div class="project-body">
          <h4>${p.title}</h4>
          <p>${p.description}</p>
          <div class="project-tech-tags">
            ${p.tech.map(t => `<span class="tech-pill">${t}</span>`).join("")}
          </div>
          <button class="btn-outline-brand w-100 justify-content-center" data-bs-toggle="modal" data-bs-target="#projectModal" data-project="${p.id}">
            Ver detalhes <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `).join("");

    // Modal de detalhes do projeto (Objetivo → Problema → Solução → Resultado)
    projectsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-project]");
      if (!btn) return;
      const proj = PROJECTS_DATA.find(p => p.id === btn.dataset.project);
      if (!proj) return;
      document.getElementById("projectModalLabel").textContent = proj.title;
      document.getElementById("projectModalBody").innerHTML = `
        <div class="project-thumb mb-3" style="border-radius: var(--radius-md); height: 120px;"><i class="${proj.icon}"></i></div>
        <span class="badge-status ${statusBadgeClass(proj.status)} mb-3 d-inline-block">${proj.status}</span>
        <p class="mb-3">${proj.description}</p>
        <div class="mb-3"><strong>Tecnologias:</strong><br>
          <div class="project-tech-tags mt-2">${proj.tech.map(t => `<span class="tech-pill">${t}</span>`).join("")}</div>
        </div>
        <p><strong>Objetivo:</strong> ${proj.objective}</p>
        <p><strong>Problema:</strong> ${proj.problem}</p>
        <p><strong>Solução:</strong> ${proj.solution}</p>
        <p class="mb-0"><strong>Resultado:</strong> ${proj.result}</p>
      `;
    });
  }

  // --- Casos Técnicos ---
  const casosContainer = document.getElementById("casos-container");
  if (casosContainer && typeof CASOS_TECNICOS_DATA !== "undefined") {
    casosContainer.innerHTML = CASOS_TECNICOS_DATA.map((c, i) => `
      <div class="glass-card caso-card" data-aos="fade-up" data-aos-delay="${i * 80}">
        <h4><i class="fa-solid fa-circle-exclamation caso-icon"></i> ${c.title}</h4>
        <div class="caso-block"><span class="caso-label">Problema</span><p>${c.problem}</p></div>
        <div class="caso-block"><span class="caso-label">Contexto</span><p>${c.context}</p></div>
        <div class="caso-block"><span class="caso-label">Solução</span><p>${c.solution}</p></div>
        <div class="caso-block caso-result"><span class="caso-label">Resultado</span><p>${c.result}</p></div>
        <div class="project-tech-tags mt-3">${c.tech.map(t => `<span class="tech-pill">${t}</span>`).join("")}</div>
      </div>
    `).join("");
  }

  // --- Scripts (GitHub) ---
  const scriptsContainer = document.getElementById("scripts-container");
  if (scriptsContainer && typeof SCRIPTS_DATA !== "undefined") {
    scriptsContainer.innerHTML = SCRIPTS_DATA.map((s, i) => `
      <div class="glass-card script-card" data-aos="fade-up" data-aos-delay="${i * 70}">
        <div class="tech-icon script-icon"><i class="${s.icon}"></i></div>
        <h4>${s.name}</h4>
        <p>${s.description}</p>
        <p class="script-objective"><strong>Objetivo:</strong> ${s.objective}</p>
        <div class="project-tech-tags">${s.tech.map(t => `<span class="tech-pill">${t}</span>`).join("")}</div>
        <a href="${s.github}" target="_blank" rel="noopener" class="btn-outline-brand w-100 justify-content-center mt-3">
          <i class="fa-brands fa-github"></i> Ver no GitHub
        </a>
      </div>
    `).join("");
  }

  // --- Laboratórios ---
  const labsContainer = document.getElementById("labs-container");
  if (labsContainer && typeof LABS_DATA !== "undefined") {
    labsContainer.innerHTML = LABS_DATA.map((lab, i) => `
      <div class="glass-card lab-row" data-aos="fade-up" data-aos-delay="${i * 60}">
        <div class="lab-code">${lab.code}</div>
        <div class="lab-info">
          <h4>${lab.title}</h4>
          <p>${lab.description}</p>
          <div class="project-tech-tags">
            ${lab.tech.map(t => `<span class="tech-pill">${t}</span>`).join("")}
          </div>
        </div>
        <div class="lab-meta">
          <span class="badge-status ${statusBadgeClass(lab.status)}">${lab.status}</span>
          <span class="lab-date">${lab.date}</span>
          <a href="${lab.page}" class="btn-outline-brand">Ver laboratório <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    `).join("");
  }

  // --- Jornada ---
  const journeyContainer = document.getElementById("journey-container");
  if (journeyContainer && typeof JOURNEY_DATA !== "undefined") {
    journeyContainer.innerHTML = JOURNEY_DATA.map((j, i) => `
      <div class="journey-step" data-aos="fade-right" data-aos-delay="${i * 50}">
        <div class="journey-node">
          <div class="year">${j.year}</div>
          <div class="label">${j.label}</div>
        </div>
        ${i < JOURNEY_DATA.length - 1 ? '<i class="fa-solid fa-arrow-right journey-arrow"></i>' : ''}
      </div>
    `).join("");
  }

  // --- Roadmap ---
  const roadmapContainer = document.getElementById("roadmap-container");
  if (roadmapContainer && typeof ROADMAP_DATA !== "undefined") {
    roadmapContainer.innerHTML = ROADMAP_DATA.map((r, i) => `
      <div class="glass-card roadmap-card" data-aos="fade-up" data-aos-delay="${i * 80}">
        <div class="roadmap-year text-gradient">${r.year}</div>
        <ul>${r.items.map(item => `<li><i class="fa-solid fa-circle-check"></i> ${item}</li>`).join("")}</ul>
        <div class="progress-track">
          <div class="progress-fill" data-level="${r.progress}"></div>
        </div>
        <div class="tech-card-foot"><span>Progresso</span><span>${r.progress}%</span></div>
      </div>
    `).join("");
  }

  // --- Certificações ---
  const certContainer = document.getElementById("cert-container");
  if (certContainer && typeof CERTIFICATIONS_DATA !== "undefined") {
    certContainer.innerHTML = CERTIFICATIONS_DATA.map((c, i) => `
      <div class="glass-card cert-card" data-aos="fade-up" data-aos-delay="${i * 50}">
        <div class="cert-icon"><i class="${c.icon}"></i></div>
        <h5>${c.name}</h5>
        <div class="cert-vendor">${c.vendor}</div>
        <span class="badge-status ${statusBadgeClass(c.status)}">${c.status}</span>
        <button class="cert-attach-btn"><i class="fa-solid fa-paperclip me-1"></i> Anexar certificado</button>
      </div>
    `).join("");
  }

  // --- Blog Técnico (com filtro de categorias) ---
  const blogContainer = document.getElementById("blog-container");
  const blogFilters = document.getElementById("blog-filters");

  function renderBlogCards(posts) {
    blogContainer.innerHTML = posts.map((post, i) => `
      <div class="glass-card blog-card" data-aos="fade-up" data-aos-delay="${i * 70}">
        <div class="blog-thumb">
          <span class="blog-category-badge">${post.category}</span>
          <i class="${post.icon || 'fa-solid fa-file-lines'}"></i>
        </div>
        <div class="blog-body">
          <h4>${post.title}</h4>
          <p>${post.summary}</p>
          <div class="blog-meta">
            <span><i class="fa-regular fa-clock me-1"></i>${post.readTime} de leitura</span>
            <span>${post.date}</span>
          </div>
          <a href="${post.page}" class="btn-outline-brand w-100 justify-content-center">Continuar lendo <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    `).join("");
  }

  if (blogContainer && typeof BLOG_DATA !== "undefined") {
    renderBlogCards(BLOG_DATA);

    if (blogFilters && typeof BLOG_CATEGORIES !== "undefined") {
      blogFilters.innerHTML = BLOG_CATEGORIES.map((cat, i) =>
        `<button class="blog-filter-btn${i === 0 ? ' active' : ''}" data-category="${cat}">${cat}</button>`
      ).join("");

      blogFilters.addEventListener("click", (e) => {
        const btn = e.target.closest(".blog-filter-btn");
        if (!btn) return;
        blogFilters.querySelectorAll(".blog-filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const category = btn.dataset.category;
        const filtered = category === "Todos" ? BLOG_DATA : BLOG_DATA.filter(p => p.category === category);
        renderBlogCards(filtered);
        if (window.AOS) AOS.refreshHard();
      });
    }
  }

  /* -------------------------------------------------------------- */
  /* 8. CONTADORES ANIMADOS                                           */
  /* -------------------------------------------------------------- */
  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10) || 0;
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  setTimeout(() => {
    document.querySelectorAll("[data-count]").forEach(el => counterObserver.observe(el));

    /* ---------------------------------------------------------- */
    /* 9. BARRAS DE PROGRESSO                                        */
    /* ---------------------------------------------------------- */
    const progressObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          fill.style.width = fill.dataset.level + "%";
          obs.unobserve(fill);
        }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll(".progress-fill").forEach(el => progressObserver.observe(el));
  }, 80);

  /* -------------------------------------------------------------- */
  /* 10. BOTÃO VOLTAR AO TOPO                                         */
  /* -------------------------------------------------------------- */
  const backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.classList.toggle("show", window.scrollY > 500);
    }, { passive: true });
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* -------------------------------------------------------------- */
  /* 11. CURSOR MODERNO (apenas dispositivos com mouse fino)          */
  /* -------------------------------------------------------------- */
  if (window.matchMedia("(pointer: fine)").matches) {
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);

    window.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      cursor.classList.add("active");
    });

    document.querySelectorAll("a, button, .glass-card").forEach(el => {
      el.addEventListener("mouseenter", () => cursor.classList.add("hovering"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("hovering"));
    });
  }

  /* -------------------------------------------------------------- */
  /* 12. FORMULÁRIO DE CONTATO                                        */
  /* -------------------------------------------------------------- */
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const feedback = document.getElementById("form-feedback");
      const name = document.getElementById("contact-name").value.trim();

      // Envio real requer backend ou serviço (ex: Formspree). Placeholder de sucesso:
      feedback.innerHTML = `<div class="alert-success-custom">
        <i class="fa-solid fa-circle-check me-2"></i>Obrigado, ${name || "visitante"}! Sua mensagem foi registrada. Em breve retornarei o contato.
      </div>`;
      contactForm.reset();
    });
  }

  /* -------------------------------------------------------------- */
  /* 13. INICIALIZAÇÃO DO AOS                                         */
  /* -------------------------------------------------------------- */
  if (window.AOS) {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 60
    });
  }
});
