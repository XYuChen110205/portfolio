// ========== Visual Mode — Smile-Curve Carousel ==========

let visualModeActive = false
let vmSlides = []
let vmCurrent = 0
let vmTimer = null
let vmTotalSlides = 0

const COVER_IMAGE = 'images/suolvtu/封面.png'

function initVisualMode() {
  const btnGrid = document.querySelector('.view-btn[data-view="grid"]')
  const btnVisual = document.querySelector('.view-btn[data-view="visual"]')
  if (!btnGrid || !btnVisual) return

  btnGrid.addEventListener('click', () => setViewMode('grid'))
  btnVisual.addEventListener('click', () => setViewMode('visual'))

  const saved = localStorage.getItem('seeyu_view_mode')
  if (saved === 'visual') setViewMode('visual')
}

function setViewMode(mode) {
  document.querySelectorAll('.view-btn').forEach(b => b.classList.toggle('active', b.dataset.view === mode))
  localStorage.setItem('seeyu_view_mode', mode)

  const section = document.getElementById('projects')
  const sectionHeader = section.querySelector('.section-header')
  const grid = document.getElementById('projectsGrid')
  const filterBar = document.getElementById('filterBar')
  const vmEl = document.getElementById('visualModeContainer')

  if (mode === 'grid') {
    visualModeActive = false; stopVMAutoPlay()
    if (vmEl) vmEl.remove()
    sectionHeader.style.display = ''; grid.style.display = ''; filterBar.style.display = ''
    return
  }

  visualModeActive = true
  sectionHeader.style.display = 'none'; grid.style.display = 'none'; filterBar.style.display = 'none'
  if (vmEl) vmEl.remove()
  renderVisualMode()
}

function renderVisualMode() {
  buildSlides()

  const section = document.getElementById('projects')
  const container = document.createElement('div')
  container.id = 'visualModeContainer'
  container.className = 'vm-container'
  container.innerHTML = `
    <div class="vm-cover">
      <img src="${COVER_IMAGE}" alt="Cover" class="vm-cover-img">
      <div class="vm-cover-overlay"></div>
    </div>
    <div class="vm-reel-wrap">
      <div class="vm-mask" id="vmMask">
        <div class="vm-track" id="vmTrack">
          ${vmSlides.map((s, i) => `
            <div class="vm-slide" data-index="${i}" onclick="vmClickSlide(${s.id})">
              <div class="vm-slide-inner" data-img="${s.img}">
                <img src="${s.img}" alt="${s.name}" class="vm-slide-img">
              </div>
            </div>
          `).join('')}
        </div>
        <svg class="vm-mask-svg" viewBox="0 0 800 300" preserveAspectRatio="none">
          <defs>
            <clipPath id="smileClip">
              <path d="M 0,150 C 100,30 300,20 400,30 C 500,20 700,30 800,150 L 800,300 L 0,300 Z"/>
            </clipPath>
          </defs>
        </svg>
      </div>
      <button class="vm-nav vm-prev" onclick="vmPrev()">&#10094;</button>
      <button class="vm-nav vm-next" onclick="vmNext()">&#10095;</button>
      <div class="vm-dots" id="vmDots">
        ${vmSlides.map((_, i) => `<span class="vm-dot${i === 0 ? ' active' : ''}" data-index="${i}" onclick="vmGoTo(${i})"></span>`).join('')}
      </div>
    </div>
  `
  section.appendChild(container)
  vmTotalSlides = vmSlides.length
  vmCurrent = 0
  updateVM()
  startVMAutoPlay()
}

function buildSlides() {
  vmSlides = []
  projectsData.forEach(p => {
    const img = p.thumbs ? p.thumbs[0] : (p.thumb || null)
    if (!img) return
    vmSlides.push({ id: p.id, name: p.name, img, icon: p.icon })
  })
}

function updateVM() {
  const track = document.getElementById('vmTrack')
  if (!track) return
  const slides = track.querySelectorAll('.vm-slide')
  const dots = document.querySelectorAll('.vm-dot')
  const total = slides.length
  if (!total) return

  const trackW = track.offsetWidth || 800
  const spacing = Math.min(180, trackW * 0.22)
  const curveH = Math.min(60, trackW * 0.07)

  slides.forEach((el, i) => {
    let offset = i - vmCurrent
    if (offset < -Math.floor(total / 2)) offset += total
    if (offset > Math.floor(total / 2)) offset -= total

    const abs = Math.abs(offset)
    const x = offset * spacing
    const y = Math.pow(abs, 1.2) * curveH * 0.5
    const scale = 1 - abs * 0.15
    const opacity = abs > 2 ? 0 : Math.max(1 - abs * 0.35, 0.15)
    const zIdx = total - abs

    el.style.transform = `translateX(${x}px) translateY(${y}px) scale(${Math.max(scale, 0.3)})`
    el.style.opacity = opacity
    el.style.zIndex = zIdx
    el.classList.toggle('active', i === vmCurrent)

    const inner = el.querySelector('.vm-slide-inner')
    if (inner) {
      const clip = abs === 0 ? '' : `inset(0 ${abs * 8}px ${abs * 4}px ${abs * 8}px round ${abs * 8}px)`
      inner.style.clipPath = clip
    }
  })

  dots.forEach((d, i) => d.classList.toggle('active', i === vmCurrent))
}

function vmGoTo(i) { stopVMAutoPlay(); vmCurrent = ((i % vmTotalSlides) + vmTotalSlides) % vmTotalSlides; updateVM(); startVMAutoPlay() }
function vmNext() { vmGoTo(vmCurrent + 1) }
function vmPrev() { vmGoTo(vmCurrent - 1) }
function vmClickSlide(id) { stopVMAutoPlay(); openDetail(id) }

function startVMAutoPlay() {
  stopVMAutoPlay()
  if (!visualModeActive) return
  vmTimer = setInterval(() => vmGoTo(vmCurrent + 1), 4000)
}

function stopVMAutoPlay() {
  if (vmTimer) { clearInterval(vmTimer); vmTimer = null }
}

document.addEventListener('click', function _vmRestart(e) {
  if (visualModeActive && e.target.closest('#detailOverlay, .detail-close')) {
    setTimeout(startVMAutoPlay, 500)
  }
})
