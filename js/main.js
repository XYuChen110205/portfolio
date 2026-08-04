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
  initRoleCycle();
  initHometownCarousel();
  initSchoolCarousel();
  renderFeaturedProjects();
  renderChallengesInterests();
  renderTimeline();
  renderContacts();
  applyTexts();
  initFadeIn();
  initImageSkeletons();
  renderExpandedProjects();
});

function toggleMoreProjects() {
  var grid = document.getElementById('expandedProjects');
  var btn = document.getElementById('btnViewAll');
  if (!grid || !btn) return;
  var open = grid.style.display === 'none' || !grid.style.display;
  grid.style.display = open ? 'grid' : 'none';
  btn.textContent = open ? 'Collapse \u25B2' : 'View All Projects \u25BC';
  if (open) { setTimeout(function(){ grid.classList.add('visible'); }, 50); }
}

function renderExpandedProjects() {
  var grid = document.getElementById('expandedProjects');
  if (!grid) return;
  var others = projectsData.filter(function(p) { return FEATURED_IDS.indexOf(p.id) === -1; });
  grid.innerHTML = others.map(function(p) {
    var img = getProjectImg(p);
    var name = ptext(p.id, 'name');
    var badge = p.badge || '';
    var iconSvg = (typeof svg === 'function' && p.icon) ? svg(p.icon, 40) : '';
    return '<div class="more-item fade-in" onclick="window.location.href=\'project-detail.html?id='+p.id+'\'">' +
      '<div class="more-thumb">' +
        (img ? '<img src="'+img+'" alt="'+name+'" loading="lazy">' : '<div class="thumb-icon">'+iconSvg+'</div>') +
      '</div>' +
      '<div class="more-name">'+name+'</div>' +
    '</div>';
  }).join('');
}

// ========== Hero Video — pan & scan on single video ==========
function initHeroVideo() {
  var video = document.getElementById('heroVideo');
  var wrap = document.getElementById('heroVideoWrap');
  if (!video || !wrap) return;
  var hint = wrap.querySelector('.video-drag-hint');

  var posKey = 'hero_video_pos';
  var saved = null;
  try { saved = JSON.parse(localStorage.getItem(posKey)); } catch(e){}
  var posX = (saved && saved.x) || 50;
  var posY = (saved && saved.y) || 50;
  video.style.objectPosition = posX + '% ' + posY + '%';

  var dragging = false, startX, startY, origX, origY;
  wrap.addEventListener('mousedown', function(e) {
    if (e.target.tagName !== 'VIDEO') return;
    dragging = true; origX = posX; origY = posY;
    startX = e.clientX; startY = e.clientY;
    video.classList.add('grabbing');
    if (hint) hint.style.opacity = '0';
    e.preventDefault();
  });
  document.addEventListener('mousemove', function(e) {
    if (!dragging) return;
    var dx = (e.clientX - startX) / wrap.clientWidth * 100;
    var dy = (e.clientY - startY) / wrap.clientHeight * 100;
    posX = Math.max(0, Math.min(100, origX - dx));
    posY = Math.max(0, Math.min(100, origY - dy));
    video.style.objectPosition = posX + '% ' + posY + '%';
  });
  document.addEventListener('mouseup', function() {
    if (!dragging) return;
    dragging = false; video.classList.remove('grabbing');
    localStorage.setItem(posKey, JSON.stringify({x: Math.round(posX), y: Math.round(posY)}));
  });
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
    video.style.objectPosition = posX + '% ' + posY + '%';
  });
  document.addEventListener('touchend', function() {
    if (!dragging) return;
    dragging = false;
    localStorage.setItem(posKey, JSON.stringify({x: Math.round(posX), y: Math.round(posY)}));
  });
  if (hint) setTimeout(function() { hint.style.opacity = '0'; }, 4000);
}

// ========== Role Cycle — rotating subtitle ==========
function initRoleCycle() {
  var el = document.querySelector('.hero-name .grad');
  if (!el) return;
  var titles = ['&lt;Seeyu/&gt;', '&lt;CV Engineer/&gt;', '&lt;AI Explorer/&gt;', '&lt;Web Dev/&gt;'];
  var idx = 0;
  function cycle() {
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';
    el.offsetHeight;
    setTimeout(function() {
      el.innerHTML = titles[idx];
      idx = (idx + 1) % titles.length;
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 400);
  }
  cycle();
  setInterval(cycle, 3200);
}

// ========== Background Circles ==========
function initBgCircles() {
  var box = document.getElementById('bgDecoration');
  if (!box) return;
  var colors = ['#2d6a4f','#40916c','#52b788','#95d5b2','#b7e4c7','#d8f3dc','#74c69d'];
  var blobs = [
    {c:'#2f460ca6',size:500,top:-10,left:-8},
    //c颜色，size是圆球直径，top是垂直位置，left是水平位置
    //透明度由.bg-circle.blob控制，opacity目前是0.12，0是完全透明，1是完全不透明
    {c:'#d595ca',size:440,top:20,left:76},
    {c:'#cd528f7d',size:380,top:62,left:-6},
    {c:'#7499c6',size:340,top:80,left:68},
    {c:'#ba1c80',size:320,top:44,left:42}
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
  var lang = currentLang;
  // Nav links
  var navIds = ['navHome','navHometown','navSchool','navChallenges','navPortfolio'];
  var navKeys = ['nav_home','nav_hometown','nav_school','nav_challenges','nav_portfolio'];
  for (var i=0; i<navIds.length; i++) {
    var el = document.getElementById(navIds[i]);
    if (el) el.textContent = t(navKeys[i]);
  }
  var navRes = document.getElementById('navResources');
  if (navRes) navRes.textContent = t('nav_resources');

  // Hero
  var hl = document.getElementById('heroScrollLabel');
  if (hl) hl.textContent = t('hero_scroll');
  var sp = document.getElementById('heroStatProjects');
  if (sp) sp.textContent = t('hero_stat_projects');

  // Section English labels
  var labels = {
    hometownLabel:'sec_hometown_label', schoolLabel:'sec_school_label',
    challengesLabel:'sec_challenges_label', portfolioLabel:'sec_portfolio_label',
    aboutLabel:'sec_about_label', contactLabel:'sec_contact_label'
  };
  for (var id in labels) {
    var el = document.getElementById(id);
    if (el) el.textContent = t(labels[id]);
  }

  // Section Chinese labels + descs
  var cnLabels = {
    hometownCn:'sec_hometown_title', schoolCn:'sec_school_title',
    challengesCn:'sec_challenges_title', portfolioCn:'sec_portfolio_title',
    aboutCn:'nav_about', contactCn:'sec_contact_title'
  };
  for (var id in cnLabels) {
    var el = document.getElementById(id);
    if (el) el.textContent = t(cnLabels[id]);
  }

  var descs = {
    hometownDesc:'sec_hometown_desc', schoolDesc:'sec_school_desc',
    challengesDesc:'sec_challenges_desc', portfolioDesc:'sec_portfolio_desc',
    contactDesc:'sec_contact_desc'
  };
  for (var id in descs) {
    var el = document.getElementById(id);
    if (el) el.textContent = t(descs[id]);
  }

  document.getElementById('footerText').innerHTML = t('footer_built_v2');
  document.title = t('page_title_v2');
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t('page_desc_v2'));
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;

  var viewAll = document.querySelector('.btn-view-all');
  if (viewAll) viewAll.textContent = t('view_all_projects');
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

  // Create zoom background at body level (needs position:fixed)
  var zoomBg = document.createElement('div');
  zoomBg.className = 'carousel-zoom-bg';
  zoomBg.addEventListener('click', function() { unzoom(); });
  document.body.appendChild(zoomBg);
  container.appendChild(track);

  var N = images.length;
  var active = 0;
  var timer = null;
  var slides = [];
  var transitioning = false;

  for (var i = 0; i < N; i++) {
    var slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.innerHTML = '<img src="'+images[i]+'" alt="Slide '+(i+1)+'"><div class="slide-label">'+(i+1)+' / '+N+'</div>';
    slide.addEventListener('click', function(idx) {
      return function() {
        if (transitioning) return;
        // If zoomed, clicking again dismisses zoom
        if (slides[idx].classList.contains('zoomed')) { unzoom(); return; }
        if (idx === active) return;
        unzoom();
        active = idx;
        positionSlides(function() { zoomActive(); });
        resetTimer();
      };
    }(i));
    track.appendChild(slide);
    slides.push(slide);
  }

  function positionSlides(cb) {
    transitioning = true;
    var w = track.clientWidth || container.clientWidth || 900;
    // 10x base size — clearly visible on curve
    var slideW = 500, slideH = 350;
    if (w < 900) { slideW = 350; slideH = 245; }
    if (w < 600) { slideW = 250; slideH = 175; }

    for (var i = 0; i < N; i++) {
      var offset = i - active;
      if (offset > N/2) offset -= N;
      if (offset < -N/2) offset += N;
      var absOff = Math.abs(offset);
      var sign = offset >= 0 ? 1 : -1;

    // ── Fibonacci Spiral (φ≈1.618, golden angle≈137.5°) ──
    var phi = (1 + Math.sqrt(5)) / 2;
    var goldenAngle = Math.PI * (3 - Math.sqrt(5));
    var angle = sign * absOff * goldenAngle;
    var radiusFactor = Math.pow(phi, absOff * 0.7);
    var radius = (w * 0.3) * radiusFactor;
    var cx = w / 2 - slideW / 2;
    var cy = 200; if (w < 900) cy = 150; if (w < 600) cy = 110;
    var x = cx + Math.cos(angle) * radius;
    var y = cy + Math.sin(angle) * radius * 0.5;

      var phi = (1 + Math.sqrt(5)) / 2;
      // Scale: 1.0 at center (offset=0), drops by φ per step to ~0.04 at far
      var scale = Math.max(0.04, Math.pow(phi, -absOff * 0.85));
      var rot = sign * absOff * 18;
      var rot = sign * absOff * 18;
      var z = absOff <= 1 ? Math.max(3 - absOff, 1) : 0;
      var opacity = absOff <= 1 ? 1 : Math.max(0.1, Math.pow(phi, -absOff * 1.2));

      slides[i].style.cssText =
        'width:'+slideW+'px;height:'+slideH+'px;' +
        'left:0;top:0;' +
        'transform:translate('+x.toFixed(0)+'px,'+y.toFixed(0)+'px) perspective(1200px) rotateY('+rot+'deg) scale('+scale.toFixed(4)+');' +
        'z-index:'+z+';opacity:'+opacity.toFixed(3)+';border-radius:2px;';
      slides[i].classList.remove('active', 'zoomed', 'near');
      if (absOff === 0) slides[i].classList.add('active');
      if (absOff >= 1 && absOff <= 2) slides[i].classList.add('near');
    }
    setTimeout(function() {
      transitioning = false;
      if (cb) cb();
    }, 400);
  }

  // ── Fixed: unzoom only removes class, keeps inline styles ──
  function unzoom() {
    slides.forEach(function(s) {
      s.classList.remove('zoomed');
    });
    if (zoomBg) zoomBg.classList.remove('show');
  }

  // Formula tooltip，公式
  var formulaEl = document.createElement('div');
  formulaEl.className = 'carousel-formula';
  formulaEl.innerHTML = '<span>r = a &middot; &phi;<sup>&theta;/&pi;</sup></span><small>&phi; = ½(1+√5) &asymp; 1.618  |  Golden Spiral</small>';
  track.appendChild(formulaEl);

  function advance() {
    if (transitioning) return;
    unzoom();
    active = (active + 1) % N;
    positionSlides(function() { zoomActive(); });
  }

  function resetTimer(pauseMs) {
    if (timer) clearInterval(timer);
    var interval = 1400;
    timer = setTimeout(function step() {
      advance();
      var nextInterval = interval + 800;
      timer = setTimeout(function() {
        unzoom();
        timer = setTimeout(function() {
          step();
        }, 400);
      }, interval);
    }, pauseMs || 200);
  }

  positionSlides(function() {
    setTimeout(function() { zoomActive(); }, 400);
  });
  resetTimer(1200);

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

// ========== Dynamic image filter ==========
function filterExistingImages(list, callback) {
  var result = [];
  var pending = list.length;
  if (pending === 0) { callback(result); return; }
  list.forEach(function(src) {
    var img = new Image();
    img.onload = function() { result.push(src); check(); };
    img.onerror = function() { check(); };
    img.src = src;
    function check() { pending--; if (pending === 0) callback(result); }
  });
}

function initHometownCarousel() {
  var imgs = ['images/梧州/龙母庙.jpg'];
  filterExistingImages(imgs, function(existing) {
    createFocusCarousel('hometownCarousel', existing);
    addWaterfall('hometownCarousel', existing);
  });
}

function initSchoolCarousel() {
  var imgs = [
    'images/BeiBuGulfUniversity/晚霞.jpg',
    'images/BeiBuGulfUniversity/学校的湖.jpg',
    'images/BeiBuGulfUniversity/校园图.jpg',
    'images/BeiBuGulfUniversity/非常美丽的晚霞，三年只见过一次.jpg',
    'images/BeiBuGulfUniversity/树.jpg',
    'images/BeiBuGulfUniversity/蓝调时刻.jpg',
    'images/BeiBuGulfUniversity/校园一角.jpg',
    'images/BeiBuGulfUniversity/night.jpg',
    'images/BeiBuGulfUniversity/flowersea-格桑.jpg',
    'images/BeiBuGulfUniversity/sky.jpg'
  ];
  filterExistingImages(imgs, function(existing) {
    createFocusCarousel('schoolCarousel', existing);
    addWaterfall('schoolCarousel', existing);
  });
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
      '<img src="'+src+'" alt="Photo '+(i+1)+'" loading="lazy" onerror="this.parentElement.style.display=\'none\'">' +
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

// ========== Challenges & Interests — vertical marquee waterfall ==========
function renderChallengesInterests() {
  var layout = document.getElementById('ciLayout');
  if (!layout) return;

  var challengeImgs = [
    {src:'images/chanllenge/磨铁.png', label:'磨铁'},
    {src:'images/chanllenge/焊接电路.jpg', label:'焊接电路'},
    {src:'images/chanllenge/时间继电器.jpg', label:'时间继电器'},
    {src:'images/chanllenge/电工接线练习.jpg', label:'电工接线'},
    {src:'images/chanllenge/electri-合照.jpg', label:'竞赛合照'}
  ];

  var interestImgs = [
    {src:'images/interesting/book1.jpg', label:'阅读'},
    {src:'images/interesting/esp32.jpg', label:'ESP32'},
    {src:'images/interesting/大头.jpg', label:'大头'},
    {src:'images/interesting/头像.jpg', label:'头像'},
    {src:'images/interesting/日常.jpg', label:'日常'}
  ];

  function buildMarquee(list) {
    var cards = list.map(function(item) {
      return '<div class="ci-mq-card"><img src="'+item.src+'" loading="lazy"><span>'+item.label+'</span></div>';
    }).join('');
    // Duplicate for seamless loop
    return cards + cards + cards;  // duplicate 3x for visible scroll
  }

  layout.innerHTML =
    '<div class="ci-col"><h3>'+t('challenges_label')+'</h3>' +
      '<div class="ci-marquee-wrap"><div class="ci-marquee-track">'+buildMarquee(challengeImgs)+'</div></div>' +
    '</div>' +
    '<div class="ci-col"><h3>'+t('interests_label')+'</h3>' +
      '<div class="ci-marquee-wrap"><div class="ci-marquee-track reverse">'+buildMarquee(interestImgs)+'</div></div>' +
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
  var processed = new WeakSet();
  function process() {
    document.querySelectorAll('.project-thumb img, .ci-grid img, .carousel-slide img').forEach(function(img) {
      if (processed.has(img)) return;
      processed.add(img);
      var parent = img.parentElement;
      if (img.complete && img.naturalWidth > 0) {
        if (parent) parent.classList.add('loaded');
        return;
      }
      if (parent) parent.classList.add('img-skeleton');
      img.addEventListener('load', function() {
        if (parent) parent.classList.add('loaded');
      });
      img.addEventListener('error', function() {
        if (parent) parent.classList.add('loaded');
      });
    });
  }
  process();
  // Observe for dynamically added images, but debounced
  var obsTO = null;
  if (window.MutationObserver) {
    var obs = new MutationObserver(function() {
      if (obsTO) return;
      obsTO = setTimeout(function() { obsTO = null; process(); }, 300);
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
