// ========== Main.js — 个人作品集网站核心脚本 ==========

document.addEventListener('DOMContentLoaded', () => {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  initCanvas();
  initSidebar();
  initScrollSpy();
  initFloatingImages();
  initTypewriter();
  applyStaticText();
  renderProjects('all');
  renderFilterBar();
  renderSkills();
  renderContacts();
  initDetailPanel();
  animateStats();
  initFadeIn();
  initLangSwitch();
  initVisualMode();
});

// ========== Language Switch ==========
function initLangSwitch() {
  const sel = document.getElementById('langSelect');
  if (!sel) return;
  sel.value = currentLang;
  sel.addEventListener('change', () => {
    if (sel.value !== currentLang) setLang(sel.value);
  });
}

// ========== Apply Static Text ==========
function applyStaticText() {
  // Sidebar
  document.querySelectorAll('.nav-section').forEach((el, i) => {
    if (i === 0) el.textContent = t('nav_section_nav');
    if (i === 1) el.textContent = t('nav_section_work');
    if (i === 2) el.textContent = t('nav_section_me');
  });
  document.querySelector('[data-section="home"] .nav-label').textContent = t('nav_home');
  document.querySelector('[data-section="projects"] .nav-label').textContent = t('nav_projects');
  document.querySelector('[data-section="skills"] .nav-label').textContent = t('nav_skills');
  document.querySelector('[data-section="about"] .nav-label').textContent = t('nav_about');
  document.querySelector('[data-section="contact"] .nav-label').textContent = t('nav_contact');
  const navCta = document.getElementById('navCta');
  if (navCta) navCta.textContent = t('nav_cta');
  document.getElementById('sidebarRole').textContent = t('sidebar_role');
  const sfStatus = document.querySelector('.sf-status');
  if (sfStatus) sfStatus.textContent = t('online');

  // Hero
  document.querySelector('.hero-greeting').textContent = t('hero_greeting');
  document.querySelector('.hero-title').textContent = t('hero_title');
  document.querySelector('.hero-desc').innerHTML = t('hero_desc');
  document.querySelector('.hero-btns .btn-primary').textContent = t('hero_btn_projects');
  document.querySelector('.hero-btns .btn-outline').textContent = t('hero_btn_more');
  document.querySelectorAll('.hero-stat-lbl')[0].textContent = t('hero_stat_projects');
  document.querySelectorAll('.hero-stat-lbl')[1].textContent = t('hero_stat_tech');
  document.querySelectorAll('.hero-stat-lbl')[2].textContent = t('hero_stat_years');
  document.querySelector('.hero-scroll-indicator span:first-child').textContent = t('hero_scroll');

  // Section headers
  document.querySelector('#projects .section-badge').innerHTML = `<span class="dot"></span> ${t('sec_projects_tag')}`;
  document.querySelector('#projects .section-title').textContent = t('sec_projects_title');
  document.querySelector('#projects .section-desc').textContent = t('sec_projects_desc');
  document.querySelector('#about .section-badge').innerHTML = `<span class="dot"></span> ${t('sec_about_tag')}`;
  document.querySelector('#about .section-title').textContent = t('sec_about_title');
  document.querySelector('#about .section-desc').textContent = t('sec_about_desc');
  document.querySelector('#skills .section-badge').innerHTML = `<span class="dot"></span> ${t('sec_skills_tag')}`;
  document.querySelector('#skills .section-title').textContent = t('sec_skills_title');
  document.querySelector('#skills .section-desc').textContent = t('sec_skills_desc');
  document.querySelector('#contact .section-badge').innerHTML = `<span class="dot"></span> ${t('sec_contact_tag')}`;
  document.querySelector('#contact .section-title').textContent = t('sec_contact_title');
  document.querySelector('#contact .section-desc').textContent = t('sec_contact_desc');

  // About photos
  const photoCards = document.querySelectorAll('.about-photo-card span');
  if (photoCards[0]) photoCards[0].textContent = t('photo_label_pro');
  if (photoCards[1]) photoCards[1].textContent = t('photo_label_life');

  // About timeline
  document.querySelectorAll('.tl-period')[0].textContent = t('tl_1_period');
  document.querySelectorAll('.tl-title')[0].textContent = t('tl_1_title');
  document.querySelectorAll('.tl-desc')[0].textContent = t('tl_1_desc');
  document.querySelectorAll('.tl-period')[1].textContent = t('tl_2_period');
  document.querySelectorAll('.tl-title')[1].textContent = t('tl_2_title');
  document.querySelectorAll('.tl-desc')[1].textContent = t('tl_2_desc');
  document.querySelectorAll('.tl-period')[2].textContent = t('tl_3_period');
  document.querySelectorAll('.tl-title')[2].textContent = t('tl_3_title');
  document.querySelectorAll('.tl-desc')[2].textContent = t('tl_3_desc');
  document.querySelectorAll('.tl-period')[3].textContent = t('tl_4_period');
  document.querySelectorAll('.tl-title')[3].textContent = t('tl_4_title');
  document.querySelectorAll('.tl-desc')[3].textContent = t('tl_4_desc');

  // Footer
  const fbPre = document.querySelector('.footer .fb-pre');
  const fbPost = document.querySelector('.footer .fb-post');
  if (fbPre) fbPre.textContent = t('footer_built_pre');
  if (fbPost) fbPost.textContent = t('footer_built_post');
  document.querySelector('.footer p:last-child').textContent = t('footer_text');

  // Document head + lang
  document.title = t('page_title');
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : currentLang;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t('page_desc'));
}

// Update getDiffLabel to use i18n
function getDiffLabel(n) {
  return diffLabel(n);
}

// ========== Project field translation helper ==========
function ptext(id, field) {
  const loc = (typeof projLocale !== 'undefined') && projLocale[currentLang] && projLocale[currentLang][id];
  if (loc && loc[field] !== undefined && loc[field] !== null &&
      !(Array.isArray(loc[field]) && loc[field].length === 0)) {
    return loc[field];
  }
  const p = projectsData.find(x => x.id === id);
  if (!p) return field === 'name' ? '' : (['features', 'innovation'].includes(field) ? [] : '');
  if (field === 'name') return p.name;
  return p.detail ? p.detail[field] : undefined;
}

// ========== Star Rating ==========
function renderStars(n) {
  let h = '';
  for (let i = 1; i <= 5; i++) h += `<span class="star${i <= n ? ' filled' : ''}">&#9733;</span>`;
  return h;
}
function getDiffLabel(n) {
  const labels = { 1: '入门', 2: '基础', 3: '中等', 4: '进阶', 5: '复杂' };
  return labels[n] || '';
}

// ========== Colorful Circle Background ==========
function initCanvas() {
  const box = document.getElementById('bgDecoration');
  if (!box) return;
  const colors = ['#10b981', '#14b8a6', '#06b6d4', '#38bdf8', '#84cc16', '#fbbf24', '#fb7185'];

  // Large soft blurred blobs
  const blobs = [
    { c: '#34d399', size: 460, top: -8, left: -6 },
    { c: '#38bdf8', size: 420, top: 18, left: 78 },
    { c: '#14b8a6', size: 380, top: 60, left: -4 },
    { c: '#fbbf24', size: 340, top: 78, left: 70 },
    { c: '#84cc16', size: 300, top: 42, left: 44 }
  ];
  blobs.forEach((b, i) => {
    const el = document.createElement('div');
    el.className = 'bg-circle blob';
    el.style.cssText = `width:${b.size}px;height:${b.size}px;background:${b.c};top:${b.top}%;left:${b.left}%;` +
      `--dx:${(Math.random() * 60 - 30).toFixed(0)}px;--dy:${(Math.random() * 60 - 30).toFixed(0)}px;` +
      `animation:float-circle ${(14 + i * 3)}s ease-in-out infinite;animation-delay:${-i * 2}s`;
    box.appendChild(el);
  });

  // Moving crisp dots (JS-animated, drifting and bouncing off edges)
  const dots = [];
  const DOT_COUNT = 4;
  for (let i = 0; i < DOT_COUNT; i++) {
    const el = document.createElement('div');
    el.className = 'bg-circle';
    const size = Math.random() * 22 + 10;
    el.style.width = size + 'px';
    el.style.height = size + 'px';
    el.style.background = colors[i % colors.length];
    el.style.opacity = (Math.random() * 0.25 + 0.18).toFixed(2);
    el.style.left = '0';
    el.style.top = '0';
    el.style.willChange = 'transform';
    box.appendChild(el);
    dots.push({
      el,
      size,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.9,
      vy: (Math.random() - 0.5) * 0.9
    });
  }

  function animateDots() {
    const w = window.innerWidth, h = window.innerHeight;
    for (const d of dots) {
      d.x += d.vx;
      d.y += d.vy;
      if (d.x <= 0) { d.x = 0; d.vx = Math.abs(d.vx); }
      else if (d.x >= w - d.size) { d.x = w - d.size; d.vx = -Math.abs(d.vx); }
      if (d.y <= 0) { d.y = 0; d.vy = Math.abs(d.vy); }
      else if (d.y >= h - d.size) { d.y = h - d.size; d.vy = -Math.abs(d.vy); }
      d.el.style.transform = `translate(${d.x.toFixed(1)}px, ${d.y.toFixed(1)}px)`;
    }
    requestAnimationFrame(animateDots);
  }
  animateDots();
}

// ========== Navbar (mobile menu + scroll state) ==========
function initSidebar() {
  const toggle = document.getElementById('sidebarToggle');
  const menu = document.getElementById('navMenu');
  const overlay = document.getElementById('sidebarOverlay');
  const navbar = document.getElementById('navbar');

  function open() { menu.classList.add('open'); overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function close() { menu.classList.remove('open'); overlay.classList.remove('open'); document.body.style.overflow = ''; }

  toggle.addEventListener('click', () => menu.classList.contains('open') ? close() : open());
  overlay.addEventListener('click', close);
  menu.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', () => { if (window.innerWidth <= 900) close(); });
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 900) close(); });

  // Navbar shadow on scroll
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });
}

// ========== Scroll Spy ==========
function initScrollSpy() {
  const navLinks = document.querySelectorAll('#navMenu .nav-link');
  const sections = [...document.querySelectorAll('section[id]')];
  window.addEventListener('scroll', () => {
    let current = 'home';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(l => {
      l.classList.toggle('active', l.getAttribute('data-section') === current);
    });

    // Trigger fade-in
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.88) el.classList.add('visible');
    });
  });
  // Initial check
  setTimeout(() => {
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.88) el.classList.add('visible');
    });
  }, 200);
}

// ========== Typewriter ==========
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;
  const roles = (typeof i18nMap !== 'undefined' && i18nMap[currentLang] && i18nMap[currentLang].tw_roles) || [];
  const texts = ['Seeyu', ...roles];
  let ti = 0, ci = 0, deleting = false;
  function tick() {
    const t = texts[ti];
    if (!deleting) {
      el.textContent = t.substring(0, ci + 1);
      ci++;
      if (ci === t.length) { deleting = true; setTimeout(tick, 1800); return; }
    } else {
      el.textContent = t.substring(0, ci - 1);
      ci--;
      if (ci === 0) { deleting = false; ti = (ti + 1) % texts.length; }
    }
    setTimeout(tick, deleting ? 55 : 110);
  }
  tick();
}

// ========== Draggable Floating Images ==========
function initFloatingImages() {
  const STORAGE_KEY = 'hero_img_positions';
  const wraps = document.querySelectorAll('.float-img-wrap');
  if (!wraps.length) return;

  // Add reset button to hero
  const hero = document.getElementById('home');
  const resetBtn = document.createElement('button');
  resetBtn.className = 'reset-pos-btn';
  resetBtn.textContent = t('hero_reset_pos');
  resetBtn.addEventListener('click', () => { localStorage.removeItem(STORAGE_KEY); location.reload(); });
  hero.appendChild(resetBtn);

  // Load saved positions
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch (e) {}

  wraps.forEach(wrap => {
    const id = wrap.dataset.id;
    if (saved[id]) { wrap.style.left = saved[id].left; wrap.style.top = saved[id].top; }

    let dragging = false, startX, startY, origLeft, origTop;
    wrap.addEventListener('mousedown', e => {
      if (e.target.tagName === 'IMG') e.preventDefault();
      dragging = true;
      wrap.classList.add('dragging');
      const rect = wrap.getBoundingClientRect();
      startX = e.clientX; startY = e.clientY;
      origLeft = parseFloat(wrap.style.left) || (rect.left / window.innerWidth * 100);
      origTop = parseFloat(wrap.style.top) || (rect.top / window.innerHeight * 100);
    });

    document.addEventListener('mousemove', e => {
      if (!dragging) return;
      const dx = (e.clientX - startX) / window.innerWidth * 100;
      const dy = (e.clientY - startY) / window.innerHeight * 100;
      wrap.style.left = Math.max(0, Math.min(85, origLeft + dx)) + '%';
      wrap.style.top = Math.max(5, Math.min(75, origTop + dy)) + '%';
    });

    document.addEventListener('mouseup', () => {
      if (!dragging) return;
      dragging = false; wrap.classList.remove('dragging');
      // Save
      const s = {}; try { s = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch (e) {}
      s[wrap.dataset.id] = { left: wrap.style.left, top: wrap.style.top };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    });

    // Touch support
    wrap.addEventListener('touchstart', e => {
      if (e.target.tagName === 'IMG') e.preventDefault();
      dragging = true; wrap.classList.add('dragging');
      const rect = wrap.getBoundingClientRect();
      startX = e.touches[0].clientX; startY = e.touches[0].clientY;
      origLeft = parseFloat(wrap.style.left) || (rect.left / window.innerWidth * 100);
      origTop = parseFloat(wrap.style.top) || (rect.top / window.innerHeight * 100);
    }, {passive: false});
    document.addEventListener('touchmove', e => {
      if (!dragging) return;
      const dx = (e.touches[0].clientX - startX) / window.innerWidth * 100;
      const dy = (e.touches[0].clientY - startY) / window.innerHeight * 100;
      wrap.style.left = Math.max(0, Math.min(85, origLeft + dx)) + '%';
      wrap.style.top = Math.max(5, Math.min(75, origTop + dy)) + '%';
    });
    document.addEventListener('touchend', () => {
      if (!dragging) return;
      dragging = false; wrap.classList.remove('dragging');
      const s = {}; try { s = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch (e) {}
      s[wrap.dataset.id] = { left: wrap.style.left, top: wrap.style.top };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    });
  });
}
function renderProjects(cat) {
  const grid = document.getElementById('projectsGrid');
  const filtered = cat === 'all' ? projectsData : projectsData.filter(p => p.cat === cat);
  grid.innerHTML = filtered.map(p => `
    <div class="project-card fade-in" onclick="openDetail(${p.id})">
      <div class="card-visual${p.thumb||p.thumbs?' has-thumb':''}">
        ${p.thumbs ? `
        <div class="card-carousel" data-id="${p.id}">
          ${p.thumbs.map((t,i)=>`<img src="${t}" alt="${p.name}" class="card-thumb-img${i===0?' active':''}" loading="lazy">`).join('')}
          <div class="carousel-dots">${p.thumbs.map((_,i)=>`<span class="carousel-dot${i===0?' active':''}" data-index="${i}"></span>`).join('')}</div>
        </div>`
        : p.thumb ? `<img src="${p.thumb}" alt="${p.name}" class="card-thumb-img active" loading="lazy">`
        : `<div class="grid-pattern"></div><span class="arch-icon">${svg(p.icon, 64)}</span>`}
        <span class="card-badge ${p.badgeClass}">${p.badge}</span>
      </div>
      <div class="card-body">
        <h3>${ptext(p.id, 'name')}</h3>
        <div class="stars">${renderStars(p.difficulty)}<span class="difficulty-label">${getDiffLabel(p.difficulty)}</span></div>
        <p class="card-desc">${t('proj_'+p.id+'_short')||p.shortDesc}</p>
        <div class="card-meta">
          ${p.tags.slice(0, 5).map(t => `<span class="tag">${t}</span>`).join('')}
          ${p.tags.length > 5 ? `<span class="tag">+${p.tags.length - 5}</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');
  setTimeout(() => {
    document.querySelectorAll('#projectsGrid .fade-in:not(.visible)').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.88) el.classList.add('visible');
    });
    initCarousels();
  }, 100);
}

// ========== Filter Bar ==========
function renderFilterBar() {
  const categories = [
    { key: 'all', label: t('filter_all') },
    { key: 'ai', label: t('filter_ai') },
    { key: 'web', label: t('filter_web') },
    { key: 'ml', label: t('filter_ml') },
    { key: 'tool', label: t('filter_tool') }
  ];
  document.getElementById('filterBar').innerHTML = categories.map(c =>
    `<button class="filter-btn ${c.key === 'all' ? 'active' : ''}" data-cat="${c.key}" onclick="filterProjects('${c.key}', this)">${c.label}</button>`
  ).join('');
}

function filterProjects(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  clearCarousels();
  renderProjects(cat);
}

// ========== Carousel ==========
let carouselTimers = [];
function clearCarousels() { carouselTimers.forEach(t => clearInterval(t)); carouselTimers = []; }
function initCarousels() {
  clearCarousels();
  document.querySelectorAll('.card-carousel').forEach(carousel => {
    const imgs = carousel.querySelectorAll('.card-thumb-img');
    const dots = carousel.querySelectorAll('.carousel-dot');
    if (imgs.length < 2) return;
    let idx = 0;
    function go(i) {
      imgs[idx].classList.remove('active'); dots[idx].classList.remove('active');
      idx = i; imgs[idx].classList.add('active'); dots[idx].classList.add('active');
    }
    dots.forEach(d => d.addEventListener('click', e => { e.stopPropagation(); go(parseInt(d.dataset.index)); }));
    carouselTimers.push(setInterval(() => go((idx + 1) % imgs.length), 3500));
  });
}

// ========== Detail Panel ==========
function initDetailPanel() {
  document.getElementById('detailOverlay').addEventListener('click', function (e) {
    if (e.target === this) closeDetail();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDetail();
  });
}

function openDetail(id) {
  const p = projectsData.find(x => x.id === id);
  if (!p) return;
  const d = p.detail;
  const pName = ptext(id, 'name');
  const pOverview = ptext(id, 'overview');
  const pBackground = ptext(id, 'background');
  const pFeatures = ptext(id, 'features') || [];
  const pInnovation = ptext(id, 'innovation') || [];
  const pLink = p.link || '';
  const panel = document.getElementById('detailPanel');

  panel.innerHTML = `
    <button class="detail-close" onclick="closeDetail()">&times;</button>
    <div class="detail-panel-inner">
      <div class="detail-header">
        <span class="detail-type-badge ${p.badgeClass}" style="background:${p.badgeClass.includes('ai')?'rgba(99,102,241,0.2)':p.badgeClass.includes('ml')?'rgba(16,185,129,0.2)':p.badgeClass.includes('web')?'rgba(6,182,212,0.2)':'rgba(245,158,11,0.2)'};color:${p.badgeClass.includes('ai')?'#4f46e5':p.badgeClass.includes('ml')?'#059669':p.badgeClass.includes('web')?'#0891b2':'#d97706'}">${p.badge}</span>
        <h2>${svg(p.icon, 28)} ${pName}</h2>
        <div class="stars" style="margin-top:6px">${renderStars(p.difficulty)}<span class="difficulty-label">${getDiffLabel(p.difficulty)}</span></div>
        ${pLink ? `<a href="${pLink}" target="_blank" rel="noopener" class="btn btn-primary detail-try">${t('detail_try')} <span aria-hidden="true">&#8594;</span></a>` : ''}
      </div>

      <div class="detail-block">
        <h3><span class="h3-icon">${svg('info', 18)}</span> ${t('detail_overview')}</h3>
        <p>${pOverview}</p>
      </div>

      ${pBackground ? `
      <div class="detail-block">
        <h3><span class="h3-icon">${svg('target', 18)}</span> ${t('detail_background')}</h3>
        <p>${pBackground}</p>
      </div>` : ''}

      ${d.architecture ? `
      <div class="detail-block">
        <h3><span class="h3-icon">${svg('layers', 18)}</span> ${t('detail_architecture')}</h3>
        <div class="diagram-box">
          <div class="mermaid">${d.architecture}</div>
        </div>
        <div class="diagram-caption">${t('detail_diagram_caption_arch')}：${pName}</div>
      </div>` : ''}

      ${d.flowchart ? `
      <div class="detail-block">
        <h3><span class="h3-icon">${svg('refresh', 18)}</span> ${t('detail_flowchart')}</h3>
        <div class="diagram-box">
          <div class="mermaid">${d.flowchart}</div>
        </div>
        <div class="diagram-caption">${t('detail_diagram_caption_flow')}：${pName}</div>
      </div>` : ''}

      <div class="detail-block">
        <h3><span class="h3-icon">${svg('star', 18)}</span> ${t('detail_features')}</h3>
        <ul>${pFeatures.map(f => `<li>${f}</li>`).join('')}</ul>
      </div>

      <div class="detail-block">
        <h3><span class="h3-icon">${svg('settings', 18)}</span> ${t('detail_techstack')}</h3>
        <div class="tech-stack-grid">
          ${d.techStack.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
        </div>
      </div>

      ${pInnovation && pInnovation.length ? `
      <div class="detail-block">
        <h3><span class="h3-icon">${svg('lightbulb', 18)}</span> ${t('detail_innovation')}</h3>
        <ul>${pInnovation.map(f => `<li>${f}</li>`).join('')}</ul>
      </div>` : ''}

      <div class="detail-block">
        <h3><span class="h3-icon">${svg('play', 18)}</span> ${t('detail_start')}</h3>
        <div class="start-block">${d.startCmd}</div>
      </div>

      ${p.path ? `
      <div class="detail-block">
        <h3><span class="h3-icon">${svg('folder', 22)}</span> ${t('detail_path')}</h3>
        <p style="font-family:var(--font-mono);font-size:0.82rem;word-break:break-all">${p.path.replace(/\\/g,'\\\\')}</p>
      </div>` : ''}
    </div>
  `;

  document.getElementById('detailOverlay').classList.add('open');
  document.getElementById('detailPanel').classList.add('open');
  document.body.style.overflow = 'hidden';

  // Render mermaid diagrams
  setTimeout(() => {
    try {
      if (typeof mermaid !== 'undefined') {
        mermaid.run({ querySelector: '.detail-panel .mermaid' });
      }
    } catch (e) {
      console.log('Mermaid rendering skipped:', e.message);
    }
  }, 200);
}

function closeDetail() {
  document.getElementById('detailOverlay').classList.remove('open');
  document.getElementById('detailPanel').classList.remove('open');
  document.body.style.overflow = '';
}

// ========== Skills ==========
function renderSkills() {
  const skills = [
    { icon: 'brain', name: t('skill_ai'), desc: t('skill_ai_desc') },
    { icon: 'globe', name: t('skill_web'), desc: t('skill_web_desc') },
    { icon: 'server', name: t('skill_backend'), desc: t('skill_backend_desc') },
    { icon: 'database', name: t('skill_db'), desc: t('skill_db_desc') },
    { icon: 'camera', name: t('skill_cv'), desc: t('skill_cv_desc') },
    { icon: 'docker', name: t('skill_devops'), desc: t('skill_devops_desc') }
  ];
  document.getElementById('skillsGrid').innerHTML = skills.map(s => `
    <div class="skill-card fade-in">
      <span class="skill-icon">${svg(s.icon, 48)}</span>
      <h4>${s.name}</h4>
      <p>${s.desc}</p>
    </div>
  `).join('');
}

// ========== Contacts ==========
function renderContacts() {
  const contacts = [
    { icon: 'github', name: t('contact_github'), desc: t('contact_github_desc'), link: 'https://github.com/XYuChen110205', linkText: t('contact_github_link') },
    { icon: 'mail', name: t('contact_mail'), desc: t('contact_mail_desc'), link: 'https://github.com/XYuChen110205', linkText: t('contact_mail_link') },
    { icon: 'star', name: t('contact_about'), desc: t('contact_about_desc') }
  ];
  document.getElementById('contactGrid').innerHTML = contacts.map(c => `
    <div class="contact-card fade-in">
      <span class="cc-icon">${svg(c.icon, 48)}</span>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
      ${c.link ? `<p style="margin-top:8px"><a href="${c.link}" target="_blank">${c.linkText}</a></p>` : ''}
    </div>
  `).join('');
}

// ========== Stats Animation ==========
function animateStats() {
  const allTech = new Set();
  projectsData.forEach(p => p.detail.techStack.forEach(t => allTech.add(t)));
  document.getElementById('countTech').textContent = allTech.size + '+';

  let count = 0;
  const target = projectsData.length;
  const el = document.getElementById('countProjects');
  const interval = setInterval(() => {
    count++;
    el.textContent = count;
    if (count >= target) clearInterval(interval);
  }, 50);
}

// ========== Fade In ==========
function initFadeIn() {
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.88) el.classList.add('visible');
    });
  });
}
