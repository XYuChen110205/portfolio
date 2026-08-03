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
  initHometownCarousel();
  initSchoolCarousel();
  renderFeaturedProjects();
  renderMoreProjects();
  renderChallengesInterests();
  renderTimeline();
  renderContacts();
  applyTexts();
  initFadeIn();
});

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

// ========== Text ==========
function applyTexts() {
  document.getElementById('heroSubtitle').textContent = t('hero_title_v2');
  document.getElementById('heroDesc').textContent = t('hero_desc_v2');
  document.getElementById('heroYears').textContent = t('hero_stat_years_v2');
  document.getElementById('heroToolsLabel').textContent = t('hero_tools_label');
  document.getElementById('heroToolsDesc').textContent = t('hero_tools_desc');
  document.getElementById('hometownCn').textContent = t('sec_hometown_title');
  document.getElementById('hometownDesc').textContent = t('sec_hometown_desc');
  document.getElementById('schoolCn').textContent = t('sec_school_title');
  document.getElementById('schoolDesc').textContent = t('sec_school_desc');
  document.getElementById('portfolioCn').textContent = t('sec_portfolio_title');
  document.getElementById('portfolioDesc').textContent = t('sec_portfolio_desc');
  document.getElementById('moreCn').textContent = t('sec_more_title');
  document.getElementById('moreDesc').textContent = t('sec_more_desc');
  document.getElementById('challengesCn').textContent = t('sec_challenges_title');
  document.getElementById('challengesDesc').textContent = t('sec_challenges_desc');
  document.getElementById('contactCn').textContent = t('sec_contact_title');
  document.getElementById('contactDesc').textContent = t('sec_contact_desc');
  document.getElementById('footerText').innerHTML = t('footer_built_v2');
  document.title = t('page_title_v2');
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t('page_desc_v2'));
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : currentLang;

  // Nav links
  var navAs = document.querySelectorAll('#navLinks a');
  if (navAs[1]) navAs[1].textContent = t('nav_hometown');
  if (navAs[2]) navAs[2].textContent = t('nav_school');
  if (navAs[4]) navAs[4].textContent = t('nav_challenges');
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

// ========== Skewed Carousel ==========
function createSkewCarousel(containerId, images) {
  var container = document.getElementById(containerId);
  if (!container || !images.length) return;

  if (images.length === 1) {
    container.classList.add('single');
    var el = document.createElement('div');
    el.className = 'carousel-track';
    el.innerHTML = '<div class="carousel-slide" style="position:relative;width:100%;max-width:500px;height:320px;margin:0 auto;cursor:default;">' +
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

  for (var i = 0; i < N; i++) {
    var slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.innerHTML = '<img src="'+images[i]+'" alt="Slide '+(i+1)+'"><div class="slide-label">'+(i+1)+' / '+N+'</div>';
    slide.addEventListener('click', function(idx) {
      return function() {
        if (transitioning) return;
        if (idx === active) return;
        active = idx;
        positionSlides();
        resetTimer();
      };
    }(i));
    track.appendChild(slide);
    slides.push(slide);
  }

  function positionSlides() {
    transitioning = true;
    var w = track.clientWidth || container.clientWidth;
    var slideW = 380;
    var slideH = 280;
    if (w < 600) { slideW = 220; slideH = 160; }
    else if (w < 900) { slideW = 280; slideH = 200; }
    var spacing = slideW * 0.62;
    var centerX = w / 2 - slideW / 2;

    for (var i = 0; i < N; i++) {
      var offset = i - active;
      // Wrap for circular
      if (offset > N/2) offset -= N;
      if (offset < -N/2) offset += N;
      var absOff = Math.abs(offset);

      var x = centerX + offset * spacing;
      var scale = Math.max(0.6, 1 - absOff * 0.18);
      var rotY = offset * 20;
      var z = absOff === 0 ? 3 : (absOff <= 1 ? 2 : 1);
      var opacity = absOff <= 1 ? 1 : Math.max(0.3, 1 - (absOff - 1) * 0.6);

      slides[i].style.cssText =
        'width:'+slideW+'px;height:'+slideH+'px;' +
        'transform:translateX('+x.toFixed(0)+'px) perspective(1200px) rotateY('+rotY+'deg) scale('+scale+');' +
        'z-index:'+z+';opacity:'+opacity+';' +
        'border-radius:'+(absOff === 0 ? '8px' : '4px')+';';
      slides[i].classList.toggle('active', absOff === 0);
    }
    setTimeout(function() { transitioning = false; }, 650);
  }

  function resetTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(function() {
      if (transitioning) return;
      active = (active + 1) % N;
      positionSlides();
    }, 1800);
  }

  // Initialize
  positionSlides();
  resetTimer();

  // Pause on hover
  track.addEventListener('mouseenter', function() { if (timer) clearInterval(timer); });
  track.addEventListener('mouseleave', function() { resetTimer(); });

  // Resize
  window.addEventListener('resize', function() {
    clearTimeout(window._carouselResizeTO);
    window._carouselResizeTO = setTimeout(function() { positionSlides(); }, 200);
  });
}

function initHometownCarousel() {
  createSkewCarousel('hometownCarousel', [
    '../images/梧州/龙母庙.jpg'
  ]);
}

function initSchoolCarousel() {
  createSkewCarousel('schoolCarousel', [
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
  ]);
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
    return '<div class="project-item fade-in" onclick="window.location.href=\'project-detail.html?id='+p.id+'\'">' +
      '<div class="project-thumb">' +
        (img ? '<img src="'+img+'" alt="'+name+'" loading="lazy">' :
         '<div class="no-img">'+t('proj_no_image')+'</div>') +
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

// ========== More Projects ==========
function renderMoreProjects() {
  var grid = document.getElementById('moreProjects');
  if (!grid) return;
  var others = projectsData.filter(function(p) { return FEATURED_IDS.indexOf(p.id) === -1; });
  grid.innerHTML = others.map(function(p) {
    var img = getProjectImg(p);
    var name = ptext(p.id, 'name');
    return '<div class="more-item fade-in" onclick="window.location.href=\'project-detail.html?id='+p.id+'\'">' +
      '<div class="more-thumb">' +
        (img ? '<img src="'+img+'" alt="'+name+'" loading="lazy">' :
         '<div style="font-size:0.7rem;color:#999;text-align:center;padding:10px;">No Img</div>') +
      '</div>' +
      '<div class="more-name">'+name+'</div>' +
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
    {icon:'github', name:'GitHub', desc:'XYuChen110205', link:'https://github.com/XYuChen110205', linkText:'github.com/XYuChen110205'},
    {icon:'mail', name:'Email', desc:t('contact_github_desc'), link:'https://github.com/XYuChen110205', linkText:t('contact_github_link')},
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
