// ========== Main.js — Portfolio v2: Magazine Style ==========

var FEATURED_IDS = [1, 2, 3, 5, 6, 8, 10, 11];
// 1=平陆, 2=车牌, 3=小怪兽, 5=EchoType, 6=FilmGenome, 8=BGF光伏, 10=混凝土, 11=牛油果

document.addEventListener('DOMContentLoaded', function() {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  initBgCircles();
  initMobileNav();
  initScrollSpy();
  initLangSwitch();
  initHeroVideo();
  initTypewriter();
  initHeroGlow();
  initParallax();
  initHometownCarousel();
  initSchoolCarousel();
  renderFeaturedProjects();
  renderChallengesInterests();
  renderTimeline();
  renderContacts();
  applyTexts();
  initFadeIn();
  initImageSkeletons();
  animateCounters();
  // Remove skeleton phase
  setTimeout(function() {
    document.body.classList.add('content-loaded');
  }, 400);
});

// ========== Hero Video — interactive pan & scan + alternating ==========
function initHeroVideo() {
  var videos = [document.getElementById('heroVideo0'), document.getElementById('heroVideo1')];
  var wrap = document.getElementById('heroVideoWrap');
  if (!videos[0] || !videos[1] || !wrap) return;
  var hint = wrap.querySelector('.video-drag-hint');

  var activeIdx = 0;
  var posKey = 'hero_video_pos';
  var saved = null;
  try { saved = JSON.parse(localStorage.getItem(posKey)); } catch(e){}
  var posX = (saved && saved.x) || 50;
  var posY = (saved && saved.y) || 50;

  function applyPos() {
    var val = posX + '% ' + posY + '%';
    videos[0].style.objectPosition = val;
    videos[1].style.objectPosition = val;
  }
  applyPos();

  // Pan & Scan drag
  var dragging = false, startX, startY, origX, origY;
  wrap.addEventListener('mousedown', function(e) {
    if (e.target.tagName !== 'VIDEO') return;
    dragging = true; origX = posX; origY = posY;
    startX = e.clientX; startY = e.clientY;
    videos.forEach(function(v){v.classList.add('grabbing');});
    if (hint) hint.style.opacity = '0';
    e.preventDefault();
  });
  document.addEventListener('mousemove', function(e) {
    if (!dragging) return;
    var dx = (e.clientX - startX) / wrap.clientWidth * 100;
    var dy = (e.clientY - startY) / wrap.clientHeight * 100;
    posX = Math.max(0, Math.min(100, origX - dx));
    posY = Math.max(0, Math.min(100, origY - dy));
    applyPos();
  });
  document.addEventListener('mouseup', function() {
    if (!dragging) return;
    dragging = false;
    videos.forEach(function(v){v.classList.remove('grabbing');});
    localStorage.setItem(posKey, JSON.stringify({x: Math.round(posX), y: Math.round(posY)}));
  });
  // Touch
  wrap.addEventListener('touchstart', function(e) {
    if (e.target.tagName !== 'VIDEO') return;
    dragging = true; origX = posX; origY = posY;
    startX = e.touches[0].clientX; startY = e.touches[0].clientY;
    e.preventDefault();
  }, {passive: false});
  document.addEventListener('touchmove', function(e) {
    if (!dragging) return;
    var dx = (e.touches[0].clientX - startX) / wrap.clientWidth * 100;
    var dy = (e.touches[0].clientY - startY) / wrap.clientHeight * 100;
    posX = Math.max(0, Math.min(100, origX - dx));
    posY = Math.max(0, Math.min(100, origY - dy));
    applyPos();
  });
  document.addEventListener('touchend', function() {
    if (!dragging) return;
    dragging = false;
    localStorage.setItem(posKey, JSON.stringify({x: Math.round(posX), y: Math.round(posY)}));
  });

  // Fade hint after 4s
  if (hint) setTimeout(function() { hint.style.opacity = '0'; }, 4000);

  // Alternate videos every 8s
  setInterval(function() {
    if (dragging) return;
    videos[activeIdx].classList.remove('active');
    activeIdx = (activeIdx + 1) % 2;
    videos[activeIdx].classList.add('active');
  }, 8000);
}

// ========== Typewriter ==========
function initTypewriter() {
  var el = document.getElementById('typewriter');
  if (!el) return;
  var roles = (typeof i18nMap !== 'undefined' && i18nMap[currentLang] && i18nMap[currentLang].tw_roles_v2)
    || ['AI探索者', '计算机视觉', 'Web 开发者'];
  var texts = ['Seeyu'].concat(roles);
  var ti = 0, ci = 0, deleting = false;
  function tick() {
    var t = texts[ti];
    if (!deleting) {
      el.textContent = t.substring(0, ci + 1);
      ci++;
      if (ci === t.length) { deleting = true; setTimeout(tick, 2000); return; }
    } else {
      el.textContent = t.substring(0, ci - 1);
      ci--;
      if (ci === 0) { deleting = false; ti = (ti + 1) % texts.length; }
    }
    setTimeout(tick, deleting ? 50 : 100);
  }
  tick();
}

// ========== Background Circles ==========
function initBgCircles() {
  var box = document.getElementById('bgDecoration');
  if (!box) return;
  var colors = ['#2d6a4f','#40916c','#52b788','#95d5b2','#b7e4c7','#d8f3dc','#74c69d'];
  var blobs = [
    {c:'#52b788',size:500,top:-10,left:-8},
    {c:'#95d5b2',size:440,top:20,left:76},
    {c:'#40916c',size:380,top:62,left:-6},
    {c:'#74c69d',size:340,top:80,left:68},
    {c:'#b7e4c7',size:320,top:44,left:42}
  ];
  blobs.forEach(function(b,i) {
    var el = document.createElement('div');
    el.className = 'bg-circle';
    el.style.cssText = 'width:'+b.size+'px;height:'+b.size+'px;background:'+b.c+
      ';top:'+b.top+'%;left:'+b.left+'%;'+
      '--dx:'+(Math.random()*60-30).toFixed(0)+'px;--dy:'+(Math.random()*60-30).toFixed(0)+'px;'+
      'animation:float-blob '+(16+i*3)+'s ease-in-out infinite;animation-delay:'+(-i*2)+'s';
    box.appendChild(el);
  });
}

// ========== Mobile Nav ==========
function initMobileNav() {
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  var overlay = document.getElementById('sidebarOverlay');
  var navbar = document.getElementById('navbar');
  function open() { links.classList.add('open'); overlay.classList.add('open'); document.body.style.overflow='hidden'; }
  function close() { links.classList.remove('open'); overlay.classList.remove('open'); document.body.style.overflow=''; }
  toggle.addEventListener('click', function() { links.classList.contains('open') ? close() : open(); });
  overlay.addEventListener('click', close);
  links.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() { if (window.innerWidth <= 900) close(); });
  });
  window.addEventListener('resize', function() { if (window.innerWidth > 900) close(); });
  window.addEventListener('scroll', function() {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });
}

// ========== Scroll Spy ==========
function initScrollSpy() {
  var navLinks = document.querySelectorAll('#navLinks a');
  var sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', function() {
    var current = 'home';
    sections.forEach(function(s) {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(function(l) {
      l.classList.toggle('active', l.getAttribute('data-section') === current);
    });
    document.querySelectorAll('.fade-in:not(.visible)').forEach(function(el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.88) el.classList.add('visible');
    });
  });
  setTimeout(function() {
    document.querySelectorAll('.fade-in:not(.visible)').forEach(function(el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.88) el.classList.add('visible');
    });
  }, 200);
}

// ========== Language ==========
function initLangSwitch() {
  var sel = document.getElementById('langSelect');
  if (!sel) return;
  sel.value = currentLang;
  sel.addEventListener('change', function() {
    if (sel.value !== currentLang) setLang(sel.value);
  });
}

// ========== Text — Full i18n coverage ==========
function applyTexts() {
  // Nav links (all 5)
  var navIds = ['navHome','navHometown','navSchool','navChallenges','navPortfolio'];
  var navKeys = ['nav_home','nav_hometown','nav_school','nav_challenges','nav_portfolio'];
  for (var i=0; i<navIds.length; i++) {
    var el = document.getElementById(navIds[i]);
    if (el) el.textContent = t(navKeys[i]);
  }

  // Hero
  document.getElementById('heroSubtitle').textContent = t('hero_title_v2');
  document.getElementById('heroDesc').textContent = t('hero_desc_v2');
  document.getElementById('heroYears').textContent = t('hero_stat_years_v2');
  document.getElementById('heroStatProjects').textContent = t('hero_stat_projects');
  document.getElementById('heroToolsLabel').textContent = t('hero_tools_label');
  document.getElementById('heroToolsDesc').textContent = t('hero_tools_desc');
  var scrollEl = document.getElementById('heroScroll');
  if (scrollEl) scrollEl.textContent = t('hero_scroll');

  // Section labels
  document.getElementById('hometownCn').textContent = t('sec_hometown_title');
  document.getElementById('hometownDesc').textContent = t('sec_hometown_desc');
  document.getElementById('schoolCn').textContent = t('sec_school_title');
  document.getElementById('schoolDesc').textContent = t('sec_school_desc');
  document.getElementById('portfolioCn').textContent = t('sec_portfolio_title');
  document.getElementById('portfolioDesc').textContent = t('sec_portfolio_desc');
  document.getElementById('challengesCn').textContent = t('sec_challenges_title');
  document.getElementById('challengesDesc').textContent = t('sec_challenges_desc');
  var aboutCn = document.getElementById('aboutCn');
  if (aboutCn) aboutCn.textContent = t('nav_about');
  document.getElementById('contactCn').textContent = t('sec_contact_title');
  document.getElementById('contactDesc').textContent = t('sec_contact_desc');

  // Footer + meta
  document.getElementById('footerText').innerHTML = t('footer_built_v2');
  document.title = t('page_title_v2');
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t('page_desc_v2'));
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : currentLang;

  // View all button
  var viewAll = document.querySelector('.btn-view-all');
  if (viewAll) viewAll.textContent = t('view_all_projects') + ' →';
}

function ptext(id, field) {
  var loc = (typeof projLocale !== 'undefined') && projLocale[currentLang] && projLocale[currentLang][id];
  if (loc && loc[field] !== undefined && loc[field] !== null &&
      !(Array.isArray(loc[field]) && loc[field].length === 0)) {
    return loc[field];
  }
  var p = projectsData.find(function(x) { return x.id === id; });
  if (!p) return field === 'name' ? '' : (['features', 'innovation'].indexOf(field) >= 0 ? [] : '');
  if (field === 'name') return p.name;
  return p.detail ? p.detail[field] : undefined;
}

// ========== Focus Zoom Carousel ==========
function createFocusCarousel(containerId, images) {
  var container = document.getElementById(containerId);
  if (!container || !images.length) return;

  if (images.length === 1) {
    container.classList.add('single');
    var el = document.createElement('div');
    el.className = 'carousel-track';
    el.innerHTML = '<div class="carousel-slide" style="position:relative;width:100%;max-width:500px;height:320px;margin:0 auto;cursor:default;border-radius:8px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.12);">' +
      '<img src="'+images[0]+'" alt="" style="width:100%;height:100%;object-fit:cover;">' +
      '</div>';
    container.appendChild(el);
    container.insertAdjacentHTML('afterend', '<p class="single-img-hint">'+t('hometown_more')+'</p>');
    return;
  }

  var track = document.createElement('div');
  track.className = 'carousel-track';
  container.appendChild(track);

  var N = images.length;
  var active = 0;
  var timer = null;
  var slides = [];
  var transitioning = false;
  var zoomBg = document.getElementById('carouselZoomBg');

  for (var i = 0; i < N; i++) {
    var slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.innerHTML = '<img src="'+images[i]+'" alt="Slide '+(i+1)+'"><div class="slide-label">'+(i+1)+' / '+N+'</div>';
    slide.addEventListener('click', function(idx) {
      return function() {
        if (transitioning) return;
        if (idx === active) return;
        unzoom();
        active = idx;
        positionSlides(function() { zoomActive(); });
      };
    }(i));
    track.appendChild(slide);
    slides.push(slide);
  }

  function positionSlides(cb) {
    transitioning = true;
    var w = track.clientWidth || container.clientWidth || 900;
    var slideW = 380, slideH = 280;
    if (w < 600) { slideW = 220; slideH = 160; }
    else if (w < 900) { slideW = 280; slideH = 200; }
    var spacing = slideW * 0.62;
    var centerX = w / 2 - slideW / 2;

    for (var i = 0; i < N; i++) {
      var offset = i - active;
      if (offset > N/2) offset -= N;
      if (offset < -N/2) offset += N;
      var absOff = Math.abs(offset);
      var x = centerX + offset * spacing;
      var scale = Math.max(0.55, 1 - absOff * 0.2);
      var rotY = offset * 22;
      var z = absOff === 0 ? 3 : (absOff <= 1 ? 2 : 1);
      var opacity = absOff <= 1 ? 1 : Math.max(0.25, 1 - (absOff - 1) * 0.6);

      slides[i].style.cssText =
        'width:'+slideW+'px;height:'+slideH+'px;' +
        'transform:translateX('+x.toFixed(0)+'px) perspective(1200px) rotateY('+rotY+'deg) scale('+scale+');' +
        'z-index:'+z+';opacity:'+opacity+';' +
        'border-radius:'+(absOff === 0 ? '8px' : '4px')+';';
      slides[i].classList.remove('active', 'zoomed');
      if (absOff === 0) slides[i].classList.add('active');
    }
    setTimeout(function() {
      transitioning = false;
      if (cb) cb();
    }, 600);
  }

  function zoomActive() {
    var activeSlide = track.querySelector('.carousel-slide.active');
    if (!activeSlide) return;
    activeSlide.classList.add('zoomed');
    if (zoomBg) zoomBg.classList.add('show');
    // Reposition zoomed slide to viewport center
    var rect = activeSlide.getBoundingClientRect();
    var vw = window.innerWidth, vh = window.innerHeight;
    var zoomW = vw * 0.7, zoomH = vh * 0.65;
    if (vw < 900) { zoomW = vw * 0.85; zoomH = vh * 0.55; }
    if (vw < 600) { zoomW = vw * 0.9; zoomH = vh * 0.4; }
    var tx = (vw - zoomW) / 2 - rect.left;
    var ty = (vh - zoomH) / 2 - rect.top + (rect.height - zoomH) / 2;
    activeSlide.style.transform = 'translate('+tx.toFixed(0)+'px,'+ty.toFixed(0)+'px) scale(1)';
    activeSlide.style.width = zoomW + 'px';
    activeSlide.style.height = zoomH + 'px';
  }

  function unzoom() {
    slides.forEach(function(s) {
      s.classList.remove('zoomed');
      s.style.width = '';
      s.style.height = '';
      s.style.transform = '';
    });
    if (zoomBg) zoomBg.classList.remove('show');
  }

  function advance() {
    if (transitioning) return;
    unzoom();
    active = (active + 1) % N;
    positionSlides(function() { zoomActive(); });
  }

  function resetTimer(pauseMs) {
    if (timer) clearInterval(timer);
    // Normal advance interval
    var interval = 2200;
    timer = setTimeout(function step() {
      advance();
      // After zoom, pause extra 1000ms for viewing
      var nextInterval = interval + 1000;
      timer = setTimeout(function() {
        unzoom();
        timer = setTimeout(function() {
          step();
        }, 600);
      }, interval);
    }, pauseMs || 300);
  }

  positionSlides(function() {
    // Initial zoom after a small delay
    setTimeout(function() { zoomActive(); }, 500);
  });
  resetTimer(1800);

  track.addEventListener('mouseenter', function() {
    if (timer) clearTimeout(timer);
  });
  track.addEventListener('mouseleave', function() {
    resetTimer(800);
  });

  window.addEventListener('resize', function() {
    unzoom();
    clearTimeout(window._fcrTO);
    window._fcrTO = setTimeout(function() { positionSlides(function(){zoomActive();}); }, 200);
  });
}

function initHometownCarousel() {
  var imgs = ['../images/梧州/龙母庙.jpg'];
  createFocusCarousel('hometownCarousel', imgs);
  addWaterfall('hometownCarousel', imgs);
}

function initSchoolCarousel() {
  var imgs = [
    '../images/BeiBuGulfUniversity/晚霞.jpg',
    '../images/BeiBuGulfUniversity/学校的湖.jpg',
    '../images/BeiBuGulfUniversity/校园图.jpg',
    '../images/BeiBuGulfUniversity/非常美丽的晚霞，三年只见过一次.jpg',
    '../images/BeiBuGulfUniversity/树.jpg',
    '../images/BeiBuGulfUniversity/蓝调时刻.jpg',
    '../images/BeiBuGulfUniversity/校园一角.jpg',
    '../images/BeiBuGulfUniversity/night.jpg',
    '../images/BeiBuGulfUniversity/flowersea-格桑.jpg',
    '../images/BeiBuGulfUniversity/sky.jpg'
  ];
  createFocusCarousel('schoolCarousel', imgs);
  addWaterfall('schoolCarousel', imgs);
}

// ========== Waterfall Masonry for carousel sections ==========
function addWaterfall(carouselId, images) {
  var container = document.getElementById(carouselId);
  if (!container) return;
  if (images.length < 3) return; // 只有 ≥3 张才显示瀑布流按钮

  var section = container.closest('.section') || container.parentElement;

  // Toggle button
  var toggleWrap = document.createElement('div');
  toggleWrap.className = 'waterfall-toggle';
  var btn = document.createElement('button');
  btn.textContent = '▦ ' + t('view_all_photos');
  toggleWrap.appendChild(btn);

  // Waterfall container
  var wf = document.createElement('div');
  wf.className = 'waterfall-container';
  wf.innerHTML = images.map(function(src, i) {
    return '<div class="waterfall-item">' +
      '<img src="'+src+'" alt="Photo '+(i+1)+'" loading="lazy">' +
      '<div class="wf-label">'+(i+1)+' / '+images.length+'</div>' +
    '</div>';
  }).join('');

  var open = false;
  btn.addEventListener('click', function() {
    open = !open;
    wf.classList.toggle('show', open);
    btn.textContent = open ? '▤ ' + t('collapse_photos') : '▦ ' + t('view_all_photos');
  });

  container.parentElement.insertBefore(wf, container.nextSibling);
  container.parentElement.insertBefore(toggleWrap, wf);
}

// ========== Featured Projects ==========
function getProjectImg(p) {
  if (p.thumbs && p.thumbs.length) return p.thumbs[0];
  if (p.thumb) return p.thumb;
  return null;
}

function renderFeaturedProjects() {
  var grid = document.getElementById('featuredProjects');
  if (!grid) return;
  var projects = FEATURED_IDS.map(function(id) {
    return projectsData.find(function(p) { return p.id === id; });
  }).filter(Boolean);

  grid.innerHTML = projects.map(function(p) {
    var img = getProjectImg(p);
    var name = ptext(p.id, 'name');
    var link = p.link || '';
    var badge = p.badge || '';
    var iconSvg = (typeof svg === 'function' && p.icon) ? svg(p.icon, 48) : '';
    return '<div class="project-item fade-in stagger" onclick="window.location.href=\'project-detail.html?id='+p.id+'\'">' +
      '<div class="project-thumb'+(img ? ' has-img' : '')+'">' +
        (img ? '<img src="'+img+'" alt="'+name+'" loading="lazy">' :
         '<div class="thumb-icon">'+iconSvg+'</div>') +
      '</div>' +
      '<div class="project-info">' +
        (badge ? '<span class="project-tag">'+badge+'</span>' : '') +
        '<h3>'+name+'</h3>' +
        (link ? '<a href="'+link+'" target="_blank" rel="noopener" class="project-link" onclick="event.stopPropagation()">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>' +
          t('proj_demo_link')+'</a>' : '') +
      '</div>' +
    '</div>';
  }).join('');
}

// ========== Challenges & Interests ==========
function renderChallengesInterests() {
  var layout = document.getElementById('ciLayout');
  if (!layout) return;

  var challengeImgs = [
    {src:'../images/chanllenge/焊接.png', label:'焊接'},
    {src:'../images/chanllenge/磨铁.png', label:'磨铁'},
    {src:'../images/chanllenge/焊接电路.jpg', label:'焊接电路'},
    {src:'../images/chanllenge/时间继电器.jpg', label:'时间继电器'},
    {src:'../images/chanllenge/电子版本控制线路接线图.jpg', label:'控制线路'},
    {src:'../images/chanllenge/线图图接线-控制线路.jpg', label:'接线练习'},
    {src:'../images/chanllenge/电工接线练习.jpg', label:'电工接线'},
    {src:'../images/chanllenge/英语竞赛合照.jpg', label:'英语竞赛'},
    {src:'../images/chanllenge/electri-合照.jpg', label:'竞赛合照'}
  ];

  var interestImgs = [
    {src:'../images/interesting/book1.jpg', label:'阅读'}
  ];

  function imgGrid(list) {
    return list.map(function(item) {
      return '<div>' +
        '<img src="'+item.src+'" alt="'+item.label+'" loading="lazy" style="width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:2px;">' +
        '<div style="font-size:0.7rem;color:#999;text-align:center;padding:4px 0;">'+item.label+'</div>' +
      '</div>';
    }).join('');
  }

  layout.innerHTML =
    '<div class="ci-col">' +
      '<h3>'+t('challenges_label')+'</h3>' +
      '<p class="ci-desc">'+t('ci_challenges_desc')+'</p>' +
      '<div class="ci-grid">'+imgGrid(challengeImgs)+'</div>' +
    '</div>' +
    '<div class="ci-col">' +
      '<h3>'+t('interests_label')+'</h3>' +
      '<p class="ci-desc">'+t('ci_interests_desc')+'</p>' +
      '<div class="ci-grid">'+imgGrid(interestImgs)+'</div>' +
    '</div>';
}

// ========== Timeline ==========
function renderTimeline() {
  var tl = document.getElementById('timeline');
  if (!tl) return;
  var items = [
    {period:'2024 – '+t('diff_1'), title:t('timeline_stage4_title'), desc:t('timeline_stage4_desc')},
    {period:'2023 – 2024', title:t('timeline_stage3_title'), desc:t('timeline_stage3_desc')},
    {period:'2022 – 2023', title:t('timeline_stage2_title'), desc:t('timeline_stage2_desc')},
    {period:'2021', title:t('timeline_stage1_title'), desc:t('timeline_stage1_desc')}
  ];
  tl.innerHTML = items.map(function(item) {
    return '<div class="tl-item">' +
      '<div class="tl-period">'+item.period+'</div>' +
      '<div class="tl-title">'+item.title+'</div>' +
      '<div class="tl-desc">'+item.desc+'</div>' +
    '</div>';
  }).join('');
}

// ========== Contacts ==========
function renderContacts() {
  var grid = document.getElementById('contactGrid');
  if (!grid) return;
  var contacts = [
    {icon:'github', name:t('contact_github'), desc:'XYuChen110205', link:'https://github.com/XYuChen110205', linkText:'github.com/XYuChen110205'},
    {icon:'mail', name:t('contact_mail'), desc:t('contact_github_desc'), link:'https://github.com/XYuChen110205', linkText:t('contact_github_link')},
    {icon:'star', name:t('contact_about'), desc:t('contact_about_desc')}
  ];
  grid.innerHTML = contacts.map(function(c) {
    var iconSvg = typeof svg === 'function' ? svg(c.icon, 36) : '';
    return '<div class="contact-card fade-in">' +
      '<span class="cc-icon">'+iconSvg+'</span>' +
      '<h3>'+c.name+'</h3>' +
      '<p>'+c.desc+'</p>' +
      (c.link ? '<p style="margin-top:6px"><a href="'+c.link+'" target="_blank">'+c.linkText+'</a></p>' : '') +
    '</div>';
  }).join('');
}

// ========== Fade In ==========
function initFadeIn() {
  window.addEventListener('scroll', function() {
    document.querySelectorAll('.fade-in:not(.visible)').forEach(function(el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.88) el.classList.add('visible');
    });
  });
}

// ========== Hero Glow — mouse tracking ==========
function initHeroGlow() {
  var glow = document.createElement('div');
  glow.className = 'hero-glow';
  document.body.appendChild(glow);
  var hero = document.getElementById('home');
  var visible = false;

  hero.addEventListener('mouseenter', function() { visible = true; glow.classList.add('visible'); });
  hero.addEventListener('mouseleave', function() { visible = false; glow.classList.remove('visible'); });
  document.addEventListener('mousemove', function(e) {
    if (!visible) return;
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

// ========== Parallax — hero video scroll ==========
function initParallax() {
  var videoWrap = document.getElementById('heroVideoWrap');
  if (!videoWrap) return;
  window.addEventListener('scroll', function() {
    var scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > window.innerHeight) return;
    videoWrap.style.transform = 'translateY(' + (scrollY * 0.35) + 'px)';
  });
}

// ========== Image skeletons — shimmer until loaded ==========
function initImageSkeletons() {
  document.querySelectorAll('.project-thumb img, .ci-grid img, .carousel-slide img').forEach(function(img) {
    if (img.complete && img.naturalWidth > 0) {
      img.parentElement.classList.add('loaded');
      return;
    }
    img.parentElement.classList.add('img-skeleton');
    img.addEventListener('load', function() {
      img.parentElement.classList.add('loaded');
    });
    img.addEventListener('error', function() {
      img.parentElement.classList.add('loaded');
    });
  });
  // Observe dynamically added images
  if (window.MutationObserver) {
    var obs = new MutationObserver(function() {
      initImageSkeletons();
    });
    obs.observe(document.body, { childList: true, subtree: true });
  }
}

// ========== Animated counters ==========
function animateCounters() {
  var el = document.getElementById('countProjects');
  if (!el) return;
  var target = projectsData.length;
  var count = 0;
  var speed = Math.max(20, Math.floor(800 / target));
  var started = false;
  function check() {
    if (started) return;
    var rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      started = true;
      var iv = setInterval(function() {
        count++;
        el.textContent = count;
        if (count >= target) clearInterval(iv);
      }, speed);
    }
  }
  window.addEventListener('scroll', check);
  check();
}
