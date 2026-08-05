// ========== Main.js — Portfolio v2 ==========

var FEATURED_IDS = [1, 3, 5, 8, 10];
// 1=平陆, 3=小怪兽, 5=EchoType, 8=BGF光伏, 10=混凝土

var HOMETOWN_THEMES = [
  {name:'骑楼城',nameEn:'Qilou Old Street',location:'中国 . 广西 . 梧州',locationEn:'Wuzhou, Guangxi, China',desc:'梧州骑楼城是中国规模最大的骑楼建筑群，始建于上世纪20年代，融合了中西建筑风格。',descEn:'The largest arcade complex in China, dating back to the 1920s, blending Chinese and Western styles.',mainImg:'images/梧州/中国梧州骑楼城.jpg',subImgs:['images/梧州/骑楼夜1.jpg','images/梧州/骑楼白1.jpg']},
  {name:'龙母庙',nameEn:'Dragon Mother Temple',location:'中国 . 广西 . 梧州',locationEn:'Wuzhou, Guangxi, China',desc:'龙母庙是珠江流域最古老的庙宇之一，始建于北宋，纪念龙母——西江流域的守护神。',descEn:'One of the oldest temples along the Pearl River, dating to the Northern Song Dynasty.',mainImg:'images/梧州/龙母庙.jpg',subImgs:[]},
  {name:'宝石节',nameEn:'Gemstone Festival',location:'中国 . 广西 . 梧州',locationEn:'Wuzhou, Guangxi, China',desc:'梧州是世界人工宝石之都，全球70%以上人工宝石在此加工。每年宝石节展示璀璨工艺。',descEn:'The world capital of artificial gemstones, processing over 70% of global production.',mainImg:'images/梧州/宝石节-展品.jpg',subImgs:['images/梧州/宝石手链.jpg','images/梧州/宝石手链2.jpg']},
  {name:'白云山',nameEn:'Baiyun Mountain',location:'中国 . 广西 . 梧州',locationEn:'Wuzhou, Guangxi, China',desc:'白云山是梧州市最高峰，山顶西江明珠塔可俯瞰三江汇流壮丽景观。',descEn:'The highest peak in Wuzhou, with the Pearl Tower overlooking three converging rivers.',mainImg:'images/梧州/白云山顶-西江明珠塔.jpg',subImgs:[]},
  {name:'龟苓膏',nameEn:'Guilinggao',location:'中国 . 广西 . 梧州',locationEn:'Wuzhou, Guangxi, China',desc:'龟苓膏是梧州传统药膳美食，以鹰嘴龟和土茯苓为原料，清热祛湿，广西非遗。',descEn:'A traditional medicinal dessert with cooling properties, Guangxi intangible heritage.',mainImg:'images/梧州/龟苓膏.jpg',subImgs:['images/梧州/梧州龟苓膏.jpg']}
];

var SCHOOL_IMAGES = [
  {src:'images/BeiBuGulfUniversity/校园图.jpg',label:'校园全景'},
  {src:'images/BeiBuGulfUniversity/night.jpg',label:'夜色'},
  {src:'images/BeiBuGulfUniversity/sky.jpg',label:'天空'},
  {src:'images/BeiBuGulfUniversity/road.jpg',label:'校道'},
  {src:'images/BeiBuGulfUniversity/flowersea-格桑.jpg',label:'格桑花海'},
  {src:'images/BeiBuGulfUniversity/校园一角.jpg',label:'校园一角'},
  {src:'images/BeiBuGulfUniversity/云.jpg',label:'云'},
  {src:'images/BeiBuGulfUniversity/学校的湖.jpg',label:'学校湖'},
  {src:'images/BeiBuGulfUniversity/树.jpg',label:'树'}
];

document.addEventListener('DOMContentLoaded', function() {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  initBgCircles();
  initMobileNav();
  initScrollSpy();
  initLangSwitch();
  initHeroVideo();
  initHeroTypewriter();
  initHometownShowcase();
  initSchoolLissajous();
  renderFeaturedProjects();
  renderMarquee();
  renderChallengesInterests();
  renderTimeline();
  renderContacts();
  applyTexts();
  initFadeIn();
});

// ===== Hero Video =====
function initHeroVideo() {
  var video = document.getElementById('heroVideo'), wrap = document.getElementById('heroVideoWrap');
  if (!video || !wrap) return;
  var hint = wrap.querySelector('.video-drag-hint');
  var posKey = 'hero_video_pos', saved = null;
  try { saved = JSON.parse(localStorage.getItem(posKey)); } catch(e){}
  var posX = (saved && saved.x) || 50, posY = (saved && saved.y) || 50;
  video.style.objectPosition = posX + '% ' + posY + '%';
  var dragging = false, startX, startY, origX, origY;
  wrap.addEventListener('mousedown', function(e) {
    if (e.target.tagName !== 'VIDEO') return;
    dragging = true; origX = posX; origY = posY; startX = e.clientX; startY = e.clientY;
    video.classList.add('grabbing'); if (hint) hint.style.opacity = '0'; e.preventDefault();
  });
  document.addEventListener('mousemove', function(e) {
    if (!dragging) return;
    posX = Math.max(0, Math.min(100, origX - (e.clientX - startX) / wrap.clientWidth * 100));
    posY = Math.max(0, Math.min(100, origY - (e.clientY - startY) / wrap.clientHeight * 100));
    video.style.objectPosition = posX + '% ' + posY + '%';
  });
  document.addEventListener('mouseup', function() {
    if (!dragging) return; dragging = false; video.classList.remove('grabbing');
    localStorage.setItem(posKey, JSON.stringify({x:Math.round(posX),y:Math.round(posY)}));
  });
  if (hint) setTimeout(function() { hint.style.opacity = '0'; }, 4000);
}

// ===== Hero Typewriter =====
function initHeroTypewriter() {
  var el = document.querySelector('.hero-name .grad');
  if (!el) return;
  var text = el.textContent;
  el.textContent = '';
  el.style.borderRight = '2px solid rgba(255,255,255,0.7)';
  var i = 0;
  var timer = setInterval(function() {
    el.textContent += text[i]; i++;
    if (i >= text.length) { clearInterval(timer); setTimeout(function(){el.style.borderRight='none';},2000); }
  }, 120);
}

// ===== Background Circles =====
function initBgCircles() {
  var box = document.getElementById('bgDecoration');
  if (!box) return;
  var blobs = [
    {c:'rgba(45,106,79,0.08)',size:500,top:-10,left:-8},
    {c:'rgba(82,183,136,0.06)',size:440,top:20,left:76},
    {c:'rgba(45,106,79,0.05)',size:380,top:62,left:-6}
  ];
  blobs.forEach(function(b,i) {
    var el = document.createElement('div');
    el.className = 'bg-circle blob';
    el.style.cssText = 'width:'+b.size+'px;height:'+b.size+'px;background:'+b.c+
      ';top:'+b.top+'%;left:'+b.left+'%;'+
      '--dx:'+(Math.random()*60-30).toFixed(0)+'px;--dy:'+(Math.random()*60-30).toFixed(0)+'px;'+
      'animation:float-blob '+(20+i*5)+'s ease-in-out infinite;animation-delay:'+(-i*2)+'s';
    box.appendChild(el);
  });
}

// ===== Mobile Nav =====
function initMobileNav() {
  var t=document.getElementById('navToggle'),l=document.getElementById('navLinks'),
      o=document.getElementById('sidebarOverlay'),n=document.getElementById('navbar');
  function op(){l.classList.add('open');o.classList.add('open');document.body.style.overflow='hidden';}
  function cl(){l.classList.remove('open');o.classList.remove('open');document.body.style.overflow='';}
  t.addEventListener('click',function(){l.classList.contains('open')?cl():op();});
  o.addEventListener('click',cl);
  l.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){if(window.innerWidth<=900)cl();});});
  window.addEventListener('scroll',function(){n.classList.toggle('scrolled',window.scrollY>10);});
}

// ===== Scroll Spy =====
function initScrollSpy() {
  var n=document.querySelectorAll('#navLinks a[data-section]'),s=document.querySelectorAll('section[id]');
  window.addEventListener('scroll',function(){
    var c='home';s.forEach(function(v){if(window.scrollY>=v.offsetTop-120)c=v.id;});
    n.forEach(function(l){l.classList.toggle('active',l.getAttribute('data-section')===c);});
    document.querySelectorAll('.fade-in:not(.visible)').forEach(function(e){var r=e.getBoundingClientRect();if(r.top<window.innerHeight*.88)e.classList.add('visible');});
  });
  setTimeout(function(){document.querySelectorAll('.fade-in:not(.visible)').forEach(function(e){var r=e.getBoundingClientRect();if(r.top<window.innerHeight*.88)e.classList.add('visible');});},200);
}

// ===== Language =====
function initLangSwitch() {
  var s=document.getElementById('langSelect');if(!s)return;s.value=currentLang;
  s.addEventListener('change',function(){if(s.value!==currentLang)setLang(s.value);});
}

// ===== Text i18n =====
function applyTexts() {
  var ids=['navHome','navHometown','navSchool','navChallenges','navPortfolio','navAbout'];
  var keys=['nav_home','nav_hometown','nav_school','nav_challenges','nav_portfolio','nav_about'];
  for(var i=0;i<ids.length;i++){var e=document.getElementById(ids[i]);if(e)e.textContent=t(keys[i]);}
  var r=document.getElementById('navResources');if(r)r.textContent=t('nav_resources');
  var labels={hometownCn:'sec_hometown_title',schoolCn:'sec_school_title',challengesCn:'sec_challenges_title',portfolioCn:'sec_portfolio_title',aboutCn:'nav_about',contactCn:'sec_contact_title'};
  for(var id in labels){var e=document.getElementById(id);if(e)e.textContent=t(labels[id]);}
  var descs={hometownDesc:'sec_hometown_desc',schoolDesc:'sec_school_desc',challengesDesc:'sec_challenges_desc',portfolioDesc:'sec_portfolio_desc',contactDesc:'sec_contact_desc'};
  for(var id in descs){var e=document.getElementById(id);if(e)e.textContent=t(descs[id]);}
  document.getElementById('footerText').innerHTML=t('footer_built_v2');
  document.title=t('page_title_v2');
  var m=document.querySelector('meta[name="description"]');if(m)m.setAttribute('content',t('page_desc_v2'));
  document.documentElement.lang=currentLang==='zh'?'zh-CN':currentLang;
}

function ptext(id, field) {
  var loc=(typeof projLocale!=='undefined')&&projLocale[currentLang]&&projLocale[currentLang][id];
  if(loc&&loc[field]!==undefined&&loc[field]!==null&&!(Array.isArray(loc[field])&&loc[field].length===0))return loc[field];
  var p=projectsData.find(function(x){return x.id===id;});
  if(!p)return field==='name'?'':(['features','innovation'].indexOf(field)>=0?[]:'');
  if(field==='name')return p.name;
  return p.detail?p.detail[field]:undefined;
}

function getProjectImg(p){if(p.thumbs&&p.thumbs.length)return p.thumbs[0];if(p.thumb)return p.thumb;return null;}

// ===== Hometown Showcase =====
function initHometownShowcase() {
  var c=document.getElementById('hometownShowcase');if(!c)return;
  var themes=HOMETOWN_THEMES,cur=0,isEn=(currentLang==='en');
  c.innerHTML='<div class="ht-location" id="htLocation"></div><div class="ht-desc" id="htDesc"></div>'+
    '<div class="ht-main-wrap"><button class="carousel-btn prev" id="htPrev">&#8249;</button>'+
    '<div class="ht-main-img-wrap"><img id="htMainImg" src="" alt=""></div>'+
    '<button class="carousel-btn next" id="htNext">&#8250;</button></div>'+
    '<div class="carousel-dots" id="htDots"></div><div class="ht-sub-gallery" id="htSubGallery"></div>';
  var dots=document.getElementById('htDots');
  themes.forEach(function(_,i){var d=document.createElement('span');d.addEventListener('click',function(){go(i);});dots.appendChild(d);});
  function render(){
    var t=themes[cur];
    document.getElementById('htLocation').textContent=(isEn?t.locationEn:t.location)+' : '+(isEn?t.nameEn:t.name);
    document.getElementById('htDesc').textContent=isEn?t.descEn:t.desc;
    var mi=document.getElementById('htMainImg');mi.style.opacity='0';
    setTimeout(function(){mi.src=t.mainImg;mi.alt=isEn?t.nameEn:t.name;mi.onload=function(){mi.style.opacity='1';};},200);
    var s=document.getElementById('htSubGallery');s.innerHTML='';
    if(t.subImgs&&t.subImgs.length)t.subImgs.forEach(function(v){var im=document.createElement('img');im.src=v;im.alt=isEn?t.nameEn:t.name;im.loading='lazy';s.appendChild(im);});
    dots.querySelectorAll('span').forEach(function(d,i){d.className=(i===cur)?'active':'';});
  }
  function go(i){cur=((i%themes.length)+themes.length)%themes.length;render();}
  document.getElementById('htPrev').addEventListener('click',function(){go(cur-1);});
  document.getElementById('htNext').addEventListener('click',function(){go(cur+1);});
  var at=setInterval(function(){go(cur+1);},6000);
  c.addEventListener('mouseenter',function(){clearInterval(at);});
  c.addEventListener('mouseleave',function(){at=setInterval(function(){go(cur+1);},6000);});
  var ts=0;c.addEventListener('touchstart',function(e){ts=e.touches[0].clientX;},{passive:true});
  c.addEventListener('touchend',function(e){var d=ts-e.changedTouches[0].clientX;if(Math.abs(d)>50)d>0?go(cur+1):go(cur-1);},{passive:true});
  render();
}

// ===== School Lissajous =====
function initSchoolLissajous() {
  var c=document.getElementById('schoolLissajous');if(!c)return;
  var imgs=SCHOOL_IMAGES,total=imgs.length;
  c.innerHTML='<div class="lissa-track" id="lissaTrack"></div><div class="lissa-info"><h3 id="lissaLabel"></h3><p>北部湾大学 · Beibu Gulf University</p><p class="lissa-addr">中国 · 广西 · 钦州</p></div>';
  var track=document.getElementById('lissaTrack');
  imgs.forEach(function(item,i){var e=document.createElement('div');e.className='lissa-item';e.dataset.index=i;e.innerHTML='<img src="'+item.src+'" alt="'+item.label+'" loading="lazy">';track.appendChild(e);});
  var items=track.querySelectorAll('.lissa-item'),angle=0,ci=0,fA=3,fB=2,spd=0.008,running=true;
  function layout(){
    var w=c.clientWidth,A=Math.min(380,w*.38),B=Math.min(80,w*.08);
    items.forEach(function(el,i){
      var t=angle+(i/total)*Math.PI*2,x=A*Math.sin(fA*t),y=B*Math.sin(fB*t),z=Math.cos(fA*t);
      var sc=0.5+0.5*((z+1)/2),op=0.4+0.6*((z+1)/2);
      el.style.transform='translate('+x+'px,'+y+'px) scale('+sc.toFixed(3)+')';
      el.style.opacity=op.toFixed(2);el.style.zIndex=Math.round(z*100)+100;
      if(sc>0.95){el.classList.add('lissa-center');ci=i;}else el.classList.remove('lissa-center');
    });
    var l=document.getElementById('lissaLabel');if(l)l.textContent=imgs[ci].label;
  }
  function anim(){if(running)angle+=spd;layout();requestAnimationFrame(anim);}
  c.addEventListener('mouseenter',function(){running=false;});
  c.addEventListener('mouseleave',function(){running=true;});
  track.addEventListener('click',function(e){var it=e.target.closest('.lissa-item');if(!it)return;
    var idx=parseInt(it.dataset.index),targetA=Math.PI/2-(idx/total)*Math.PI*2;
    var diff=targetA-angle;diff-=Math.round(diff/(2*Math.PI))*2*Math.PI;
    var sa=angle,st=performance.now(),dur=600;running=false;
    function tw(now){var et=now-st,prog=Math.min(et/dur,1);angle=sa+diff*(1-Math.pow(1-prog,3));layout();if(prog<1)requestAnimationFrame(tw);else running=true;}
    requestAnimationFrame(tw);
  });
  layout();anim();
}

// ===== Featured Projects =====
function renderFeaturedProjects() {
  var grid=document.getElementById('featuredProjects');if(!grid)return;
  var projects=FEATURED_IDS.map(function(id){return projectsData.find(function(p){return p.id===id;});}).filter(Boolean);
  grid.innerHTML=projects.map(function(p){
    var img=getProjectImg(p),name=ptext(p.id,'name'),link=p.link||'',badge=p.badge||'';
    var iconSvg=(typeof svg==='function'&&p.icon)?svg(p.icon,48):'';
    var linkBtn='';if(link){linkBtn='<a href="'+link+'" target="_blank" rel="noopener" class="project-demo-link" onclick="event.stopPropagation()">'+
      ((typeof svg==='function')?svg('play',12):'')+' '+(currentLang==='en'?'Live Demo':'在线体验')+'</a>';}
    return '<div class="project-item fade-in stagger" onclick="window.location.href=\'project-detail.html?id='+p.id+'\'">'+
      '<div class="project-thumb'+(img?' has-img':'')+'">'+(img?'<img src="'+img+'" alt="'+name+'" loading="lazy">':'<div class="thumb-icon">'+iconSvg+'</div>')+'</div>'+
      '<div class="project-info">'+(badge?'<span class="project-tag">'+badge+'</span>':'')+'<h3>'+name+'</h3>'+linkBtn+'</div></div>';
  }).join('');
}

// ===== Marquee (走马灯) =====
function renderMarquee(){
  var track=document.getElementById('marqueeTrack');if(!track)return;
  var others=projectsData.filter(function(p){return FEATURED_IDS.indexOf(p.id)===-1;});if(!others.length)return;
  var html='';for(var copy=0;copy<3;copy++){others.forEach(function(p){
    var img=getProjectImg(p),name=ptext(p.id,'name');
    var iconSvg=(typeof svg==='function'&&p.icon)?svg(p.icon,32):'';
    html+='<div class="marquee-card" onclick="window.location.href=\'project-detail.html?id='+p.id+'\'">'+
      '<div class="marquee-thumb">'+(img?'<img src="'+img+'" alt="'+name+'" loading="lazy">':'<div class="marquee-icon">'+iconSvg+'</div>')+'</div>'+
      '<div class="marquee-name">'+name+'</div>'+(p.link?'<span class="marquee-link-badge">DEMO</span>':'')+'</div>';
  });}
  track.innerHTML=html;
}

// ===== Challenges & Interests — Waterfall =====
function renderChallengesInterests(){
  var container=document.getElementById('ciLayout');if(!container)return;
  var challenges=[{src:'images/chanllenge/时间继电器.jpg',label:'时间继电器'},{src:'images/chanllenge/焊接电路.jpg',label:'焊接电路板'},{src:'images/chanllenge/焊接铁.jpg',label:'焊接实操'},{src:'images/chanllenge/电工接线练习.jpg',label:'电工接线'},{src:'images/chanllenge/磨铁.png',label:'钳工磨铁'},{src:'images/chanllenge/最简单的双联灯泡电路.jpg',label:'双联电路'},{src:'images/chanllenge/英语竞赛-小品.jpg',label:'英语小品'},{src:'images/chanllenge/英语竞赛合照.jpg',label:'英语竞赛合照'}];
  var interests=[{src:'images/interesting/esp32.jpg',label:'ESP32'},{src:'images/interesting/与硬件相关的无人驾驶实验小车.jpg',label:'无人驾驶小车'},{src:'images/interesting/book1.jpg',label:'读书日常'},{src:'images/interesting/run.jpg',label:'跑步'},{src:'images/interesting/日常.jpg',label:'日常生活'}];
  function build(title,items,cls){
    var h='<div class="ci-col '+cls+'"><h3>'+title+'</h3><div class="ci-scroll-wrap"><div class="ci-scroll-track">';
    for(var copy=0;copy<2;copy++){h+='<div class="ci-waterfall">';items.forEach(function(it){h+='<div class="ci-wf-item"><img src="'+it.src+'" alt="'+it.label+'" loading="lazy"><span>'+it.label+'</span></div>';});h+='</div>';}
    h+='</div></div></div>';return h;
  }
  var isEn=(currentLang==='en');
  container.innerHTML=build(isEn?'Challenges':'挑战',challenges,'ci-challenges')+build(isEn?'Interests':'兴趣',interests,'ci-interests');
}

// ===== Timeline =====
function renderTimeline(){
  var tl=document.getElementById('timeline');if(!tl)return;
  var items=[{period:'2024 – '+t('diff_1'),title:t('timeline_stage4_title'),desc:t('timeline_stage4_desc')},{period:'2023 – 2024',title:t('timeline_stage3_title'),desc:t('timeline_stage3_desc')},{period:'2022 – 2023',title:t('timeline_stage2_title'),desc:t('timeline_stage2_desc')},{period:'2021',title:t('timeline_stage1_title'),desc:t('timeline_stage1_desc')}];
  tl.innerHTML=items.map(function(i){return '<div class="tl-item"><div class="tl-period">'+i.period+'</div><div class="tl-title">'+i.title+'</div><div class="tl-desc">'+i.desc+'</div></div>';}).join('');
}

// ===== Contacts =====
function renderContacts(){
  var grid=document.getElementById('contactGrid');if(!grid)return;
  var contacts=[{icon:'github',name:t('contact_github'),desc:'XYuChen110205',link:'https://github.com/XYuChen110205',linkText:'github.com/XYuChen110205'},{icon:'mail',name:t('contact_mail'),desc:t('contact_github_desc'),link:'https://github.com/XYuChen110205',linkText:t('contact_github_link')},{icon:'star',name:t('contact_about'),desc:t('contact_about_desc')}];
  grid.innerHTML=contacts.map(function(c){var ic=(typeof svg==='function')?svg(c.icon,36):'';return '<div class="contact-card fade-in"><span class="cc-icon">'+ic+'</span><h3>'+c.name+'</h3><p>'+c.desc+'</p>'+(c.link?'<p style="margin-top:6px"><a href="'+c.link+'" target="_blank">'+c.linkText+'</a></p>':'')+'</div>';}).join('');
}

// ===== Fade In =====
function initFadeIn(){
  function check(){document.querySelectorAll('.fade-in:not(.visible)').forEach(function(e){var r=e.getBoundingClientRect();if(r.top<window.innerHeight*.92)e.classList.add('visible');});}
  window.addEventListener('scroll',check);
  // First visible elements appear immediately
  setTimeout(check,50);
  setTimeout(check,300);
}

// ===== Language change — re-render without page reload =====
window.addEventListener('langchange', function() {
  applyTexts();
  renderFeaturedProjects();
  renderMarquee();
  renderChallengesInterests();
  renderTimeline();
  renderContacts();
  // Re-init hometown with new language texts
  var hs=document.getElementById('hometownShowcase');
  if(hs) initHometownShowcase();
});
