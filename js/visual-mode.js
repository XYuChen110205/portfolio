// ========== Visual Mode — 3D Film-Reel Carousel ==========

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

  const grid = document.getElementById('projectsGrid')
  const filterBar = document.getElementById('filterBar')
  const vmEl = document.getElementById('visualModeContainer')

  if (mode === 'grid') {
    visualModeActive = false
    stopVMAutoPlay()
    if (vmEl) vmEl.remove()
    grid.style.display = ''
    filterBar.style.display = ''
    return
  }

  visualModeActive = true
  grid.style.display = 'none'
  filterBar.style.display = 'none'
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
      <div class="vm-reel-bg"></div>
      <div class="vm-reel">
        <div class="vm-track" id="vmTrack">
          ${vmSlides.map((s, i) => `
            <div class="vm-slide" data-index="${i}" onclick="vmClickSlide(${s.id})">
              <div class="vm-slide-inner">
                ${s.img ? `<img src="${s.img}" alt="${s.name}" class="vm-slide-img">`
                : `<div class="vm-slide-placeholder"><span class="arch-icon">${svg(s.icon, 40)}</span></div>`}
              </div>
              <div class="vm-slide-label">${s.name}</div>
            </div>
          `).join('')}
        </div>
        <div class="vm-sprocket vm-sprocket-top"></div>
        <div class="vm-sprocket vm-sprocket-bot"></div>
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
    vmSlides.push({ id: p.id, name: p.name, img, icon: p.icon, cat: p.cat, badge: p.badge, badgeClass: p.badgeClass })
  })
}

function updateVM() {
  const track = document.getElementById('vmTrack')
  if (!track) return
  const slides = track.querySelectorAll('.vm-slide')
  const dots = document.querySelectorAll('.vm-dot')
  const total = slides.length
  if (!total) return

  slides.forEach((el, i) => {
    let offset = i - vmCurrent
    if (offset < -Math.floor(total / 2)) offset += total
    if (offset > Math.floor(total / 2)) offset -= total

    const abs = Math.abs(offset)
    const scale = 1 - abs * 0.12
    const z = -abs * 180
    const rotateY = offset * 18
    const x = offset * 130

    el.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${rotateY}deg) scale(${Math.max(scale, 0.4)})`
    el.style.opacity = abs > 2 ? '0' : '1'
    el.style.zIndex = total - abs
    el.classList.toggle('active', i === vmCurrent)
  })

  dots.forEach((d, i) => d.classList.toggle('active', i === vmCurrent))
}

function vmGoTo(i) {
  stopVMAutoPlay()
  vmCurrent = ((i % vmTotalSlides) + vmTotalSlides) % vmTotalSlides
  updateVM()
  startVMAutoPlay()
}

function vmNext() { vmGoTo(vmCurrent + 1) }
function vmPrev() { vmGoTo(vmCurrent - 1) }

function vmClickSlide(id) {
  stopVMAutoPlay()
  openDetail(id)
}

function startVMAutoPlay() {
  stopVMAutoPlay()
  if (!visualModeActive) return
  vmTimer = setInterval(() => { vmGoTo(vmCurrent + 1) }, 4000)
}

function stopVMAutoPlay() {
  if (vmTimer) { clearInterval(vmTimer); vmTimer = null }
}

// Restart auto-play when detail panel closes in visual mode
document.addEventListener('click', function _vmRestart(e) {
  if (visualModeActive && e.target.closest('#detailOverlay, .detail-close')) {
    setTimeout(startVMAutoPlay, 500)
  }
})
