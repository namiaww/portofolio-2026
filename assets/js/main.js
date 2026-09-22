/**
 * Main Interactive Logic - Nadhin Awwali Fari Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  initLenis();
  initStats();
  initSkills();
  initProjects();
  initTimeline();
  initContact();
  initMobileMenu();
  initScrollEffects();
  initScrollSpy();
});

/* ==========================================================================
   1. STATS
   ========================================================================== */
function initStats() {
  const container = document.getElementById('stats-grid');
  if (!container || !PORTFOLIO_DATA.stats) return;

  container.innerHTML = PORTFOLIO_DATA.stats.map(item => `
    <div class="glass-card rounded-2xl p-6 text-center border border-white/10 hover:border-white/20 transition duration-300">
      <div class="font-display text-4xl lg:text-5xl font-extrabold text-chrome mb-2">${item.value}</div>
      <div class="text-xs uppercase tracking-wider text-slate-400 font-medium">${item.label}</div>
    </div>
  `).join('');
}

/* ==========================================================================
   2. SKILLS
   ========================================================================== */
function initSkills() {
  const container = document.getElementById('skills-container');
  if (!container || !PORTFOLIO_DATA.skillCategories) return;

  const categoryIcons = {
    layout: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>',
    code: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>',
    cpu: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>',
    tool: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>'
  };

  container.innerHTML = PORTFOLIO_DATA.skillCategories.map(cat => `
    <div class="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-3 mb-5 border-b border-white/10 pb-4">
          <div class="p-2.5 rounded-xl bg-white/5 text-slate-200 border border-white/10">
            ${categoryIcons[cat.icon] || categoryIcons.code}
          </div>
          <h3 class="font-display text-lg font-bold text-white tracking-wide">${cat.name}</h3>
        </div>
        <ul class="space-y-2.5">
          ${cat.skills.map(s => `
            <li class="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium py-1 px-2 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/15 hover:text-white transition">
              <span class="chrome-star text-[10px] text-slate-400">✦</span>
              <span>${s.name}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   3. PROJECTS & MODAL
   ========================================================================== */
let currentCategory = 'all';

function initProjects() {
  const container = document.getElementById('projects-grid');
  const tabs = document.querySelectorAll('.tab-btn');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.dataset.category;
      renderProjects(currentCategory);
    });
  });

  renderProjects('all');
  initModalListeners();
}

function renderProjects(filter) {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  if (filter === 'datascience') {
    container.innerHTML = `
      <div class="col-span-full glass-card rounded-3xl p-8 sm:p-10 border border-white/10 text-center max-w-xl mx-auto my-6">
        <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 text-white">
          <svg class="w-7 h-7 text-chrome" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        </div>
        <h3 class="font-display text-xl font-bold text-white mb-2">Data Science & Analytics</h3>
        <p class="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5 text-justify">
          Riset dan studi kasus komputasi data science sedang dalam tahap pengembangan aktif, berfokus pada analitik telemetri sensor, pengolahan deret waktu (time-series), dan pemodelan prediktif berbasis kurikulum Computer Science di UGM.
        </p>
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-white/5 text-slate-300 border border-white/15">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Projek Dalam Proses Publikasi
        </span>
      </div>
    `;
    return;
  }

  const filtered = filter === 'all' 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-500">
        Tidak ada proyek dalam kategori ini.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => {
    // Determine preview mockup/badge styling
    const isIot = p.category === 'iot';

    return `
      <div class="glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group transition-all duration-300 hover:border-white/25">
        <div>
          ${p.image ? `
            <div class="w-full h-48 ${p.imageFit === 'contain' ? 'bg-[#0a0a0f] flex items-center justify-center p-6' : 'bg-black/40'} overflow-hidden relative border-b border-white/5">
              ${p.imageFit === 'contain' ? `
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)] pointer-events-none"></div>
                <img src="${p.image}" alt="${p.shortTitle}" class="max-h-full max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl">
              ` : `
                <img src="${p.image}" alt="${p.shortTitle}" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-[#0d0d11] via-transparent to-transparent"></div>
              `}
            </div>
          ` : ''}

          <!-- Card Header / Meta Banner -->
          <div class="p-6 pb-4 border-b border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent">
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider ${isIot ? 'bg-white/15 text-white border border-white/30' : 'bg-white/5 text-slate-300 border border-white/10'}">
                ${p.badge || p.categoryLabel}
              </span>
              <span class="text-xs text-slate-500 font-mono">${p.period}</span>
            </div>
            
            <h3 class="font-display text-xl font-bold text-white group-hover:text-chrome transition duration-200 line-clamp-2">
              ${p.title}
            </h3>
            <p class="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              ${p.institution}
            </p>
          </div>

          <!-- Card Body Description -->
          <div class="p-6">
            <p class="text-sm text-slate-300 leading-relaxed line-clamp-3 mb-5 text-justify">
              ${p.summary}
            </p>

            <!-- Tech Badges -->
            <div class="flex flex-wrap gap-1.5 mb-2">
              ${p.techStack.slice(0, 5).map(tech => `
                <span class="badge-tech">${tech}</span>
              `).join('')}
              ${p.techStack.length > 5 ? `<span class="badge-tech text-slate-500">+${p.techStack.length - 5}</span>` : ''}
            </div>
          </div>
        </div>

        <!-- Card Actions -->
        <div class="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between gap-3">
          <!-- Button Lihat Projek (User-Friendly Button Style) -->
          <button onclick="openProjectModal('${p.id}')" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-bold text-xs hover:bg-slate-200 active:scale-95 transition-all shadow-md group/btn cursor-pointer">
            <span>Lihat Projek</span>
            <svg class="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>

          <div class="flex items-center gap-2">
            ${isIot ? `
              <a href="https://drive.google.com/drive/folders/1qEYP24gsXWX51LhYeTfHanyZu7u2StwM?usp=sharing" target="_blank" rel="noopener noreferrer" title="Buka Video Demo di Google Drive" class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-500/15 hover:bg-red-500/25 text-red-300 hover:text-white border border-red-500/30 text-xs font-semibold transition active:scale-95">
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                <span>Demo(Video)</span>
              </a>
            ` : ''}
            ${p.links?.figma ? `
              <a href="${p.links.figma}" target="_blank" rel="noopener noreferrer" title="Buka Prototype Figma" class="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm-3 6a3 3 0 0 1-3-3 3 3 0 0 1 3-3h3v3a3 3 0 0 1-3 3Zm0-6a3 3 0 0 1-3-3 3 3 0 0 1 3-3h3v6Zm6-6a3 3 0 0 1 3 3 3 3 0 0 1-3 3h-3V6Zm-3 12a3 3 0 0 1-3-3 3 3 0 0 1 3-3v6Z"/>
                </svg>
              </a>
            ` : ''}
            ${p.links?.github ? `
              <a href="${p.links.github}" target="_blank" rel="noopener noreferrer" title="GitHub Repository" class="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   4. MODAL MANAGEMENT (Projects, Video Demo, Photo Lightbox)
   ========================================================================== */
function updateScrollLock() {
  const isProjectOpen = !document.getElementById('project-modal')?.classList.contains('hidden');
  const isVideoOpen = !document.getElementById('video-demo-modal')?.classList.contains('hidden');
  const isPhotoOpen = !document.getElementById('photo-viewer-modal')?.classList.contains('hidden');

  if (isProjectOpen || isVideoOpen || isPhotoOpen) {
    document.body.style.overflow = 'hidden';
    if (window.lenis) window.lenis.stop();
  } else {
    document.body.style.overflow = 'auto';
    if (window.lenis) window.lenis.start();
  }
}

function initModalListeners() {
  const projectModal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  const backdrop = document.getElementById('modal-backdrop');

  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
  if (backdrop) backdrop.addEventListener('click', closeProjectModal);

  // Video Demo backdrop listener
  const videoBackdrop = document.getElementById('video-modal-backdrop');
  if (videoBackdrop) videoBackdrop.addEventListener('click', closeVideoDemoModal);

  // Photo Lightbox backdrop listener
  const photoBackdrop = document.getElementById('photo-viewer-backdrop');
  if (photoBackdrop) photoBackdrop.addEventListener('click', closePhotoViewer);

  // Global escape key listener handling modals in reverse order (topmost first)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const photoModal = document.getElementById('photo-viewer-modal');
      if (photoModal && !photoModal.classList.contains('hidden')) {
        closePhotoViewer();
        return;
      }
      const videoModal = document.getElementById('video-demo-modal');
      if (videoModal && !videoModal.classList.contains('hidden')) {
        closeVideoDemoModal();
        return;
      }
      if (projectModal && !projectModal.classList.contains('hidden')) {
        closeProjectModal();
        return;
      }
    }
  });
}

function openProjectModal(projectId) {
  const modal = document.getElementById('project-modal');
  const body = document.getElementById('modal-content');
  if (!modal || !body) return;

  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const isIot = project.category === 'iot' || project.id === 'project-iot-ugm';

  body.innerHTML = `
    <div>
      <!-- Modal Header -->
      <div class="flex items-center gap-2 mb-2">
        <span class="px-3 py-0.5 text-xs font-semibold rounded-full bg-white/10 text-white border border-white/20">
          ${project.categoryLabel}
        </span>
        <span class="text-xs text-slate-400 font-mono">${project.period}</span>
      </div>
      
      <h2 class="font-display text-2xl lg:text-3xl font-bold text-white mb-2">${project.title}</h2>
      <p class="text-sm text-slate-400 mb-6 flex items-center gap-1.5">
        <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
        ${project.institution}
      </p>

      <!-- Overview Box -->
      <div class="glass-card rounded-xl p-5 mb-6 border border-white/10">
        <h4 class="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">Deskripsi & Peran</h4>
        <p class="text-sm text-slate-300 leading-relaxed text-justify">${project.description}</p>
      </div>

      <!-- Technical Specifications Table -->
      <div class="mb-6">
        <h4 class="text-xs uppercase tracking-wider text-slate-400 font-bold mb-3">Spesifikasi Arsitektur & Perancangan</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          ${project.specs.map(s => `
            <div class="p-3 rounded-lg bg-white/[0.03] border border-white/10">
              <div class="text-xs text-slate-400 font-semibold mb-0.5">${s.label}</div>
              <div class="text-sm text-white font-medium">${s.value}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Tech Stack -->
      <div class="mb-8">
        <h4 class="text-xs uppercase tracking-wider text-slate-400 font-bold mb-3">Teknologi & Tools Digunakan</h4>
        <div class="flex flex-wrap gap-2">
          ${project.techStack.map(t => `<span class="badge-tech py-1 px-3 text-xs">${t}</span>`).join('')}
        </div>
      </div>

      <!-- Photo Album / Showcase Mockup (Semua Projek yang memiliki album/mockup) -->
      ${project.album && project.album.length ? `
        <div class="mb-8 pt-6 border-t border-white/10">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-xs uppercase tracking-wider text-slate-300 font-bold flex items-center gap-2">
              <svg class="w-4 h-4 text-chrome" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              ${isIot ? 'Album Dokumentasi &amp; Hardware' : 'Preview Mockup Desain'}
            </h4>
            <span class="text-[11px] text-slate-400 font-mono">Klik foto untuk memperbesar</span>
          </div>

          <div class="grid grid-cols-1 ${project.album.length > 1 ? 'sm:grid-cols-3' : 'max-w-xl mx-auto'} gap-3.5">
            ${project.album.map((item) => {
              const safeTitle = item.title.replace(/"/g, '&quot;').replace(/'/g, "\\'");
              const safeDesc = item.desc.replace(/"/g, '&quot;').replace(/'/g, "\\'");
              return `
                <div onclick="openPhotoViewer('${item.src}', '${safeTitle}', '${safeDesc}')" class="group/photo rounded-2xl overflow-hidden bg-black/40 border border-white/10 hover:border-white/30 cursor-pointer transition-all duration-300 flex flex-col shadow-lg">
                  <div class="relative w-full ${project.album.length > 1 ? 'h-44 sm:h-48' : 'h-64 sm:h-72'} bg-black/60 flex items-center justify-center p-3 overflow-hidden">
                    <img src="${item.src}" alt="${item.title}" class="max-h-full max-w-full object-contain group-hover/photo:scale-105 transition-transform duration-500">
                    <div class="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/70 text-white/90 opacity-0 group-hover/photo:opacity-100 transition shadow border border-white/10">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                    </div>
                  </div>
                  <div class="p-3.5 bg-white/[0.02] border-t border-white/5">
                    <div class="text-xs font-bold text-white line-clamp-1 group-hover/photo:text-chrome transition">${item.title}</div>
                    <div class="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-relaxed">${item.desc}</div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Modal Footer CTA -->
      <div class="flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-white/10">
        <div class="flex flex-wrap items-center gap-3">
          ${isIot ? `
            <a href="https://drive.google.com/drive/folders/1qEYP24gsXWX51LhYeTfHanyZu7u2StwM?usp=sharing" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-200 hover:text-white font-semibold text-sm border border-red-500/40 transition shadow-lg active:scale-95 cursor-pointer">
              <svg class="w-4 h-4 fill-current text-red-400" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              <span>Demo(Video)</span>
            </a>
          ` : ''}
          ${project.links?.figma ? `
            <a href="${project.links.figma}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-slate-200 transition shadow-lg">
              <span>Buka Prototype di Figma</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          ` : ''}
          ${project.links?.github ? `
            <a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 text-white font-semibold text-sm hover:bg-white/20 border border-white/20 transition">
              <span>Lihat di GitHub</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          ` : ''}
        </div>

        <button onclick="closeProjectModal()" class="px-5 py-2.5 rounded-xl bg-transparent hover:bg-white/5 text-slate-400 hover:text-white text-sm font-medium transition border border-white/10 cursor-pointer">
          Tutup
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  updateScrollLock();
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) modal.classList.add('hidden');
  updateScrollLock();
}

/* --- VIDEO DEMO MODAL HANDLERS --- */
function openVideoDemoModal() {
  const modal = document.getElementById('video-demo-modal');
  const video = document.getElementById('iot-demo-video');
  if (!modal) return;

  modal.classList.remove('hidden');
  updateScrollLock();
  if (video) {
    video.currentTime = 0;
  }
}

function closeVideoDemoModal() {
  const modal = document.getElementById('video-demo-modal');
  const video = document.getElementById('iot-demo-video');
  if (modal) modal.classList.add('hidden');
  if (video) {
    try { video.pause(); } catch(e) {}
  }
  updateScrollLock();
}

/* --- PHOTO VIEWER LIGHTBOX HANDLERS --- */
function openPhotoViewer(src, title, desc) {
  const modal = document.getElementById('photo-viewer-modal');
  const img = document.getElementById('viewer-img');
  const titleEl = document.getElementById('viewer-title');
  const descEl = document.getElementById('viewer-desc');
  if (!modal || !img) return;

  img.src = src;
  img.alt = title || 'Foto Projek';
  if (titleEl) titleEl.textContent = title || '';
  if (descEl) descEl.textContent = desc || '';

  modal.classList.remove('hidden');
  updateScrollLock();
}

function closePhotoViewer() {
  const modal = document.getElementById('photo-viewer-modal');
  if (modal) modal.classList.add('hidden');
  updateScrollLock();
}

// Expose handlers globally
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.openVideoDemoModal = openVideoDemoModal;
window.closeVideoDemoModal = closeVideoDemoModal;
window.openPhotoViewer = openPhotoViewer;
window.closePhotoViewer = closePhotoViewer;

/* ==========================================================================
   5. WORK EXPERIENCE & EDUCATION (Separated)
   ========================================================================== */
function initTimeline() {
  const workContainer = document.getElementById('work-container');
  const eduContainer = document.getElementById('education-container');

  if (workContainer && PORTFOLIO_DATA.workExperiences) {
    workContainer.innerHTML = PORTFOLIO_DATA.workExperiences.map(item => `
      <div class="glass-card rounded-2xl p-6 border border-white/10 group hover:border-white/25 transition flex flex-col justify-between">
        <div>
          <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span class="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
              ${item.period}
            </span>
            <span class="text-xs text-slate-500 font-medium">${item.location}</span>
          </div>

          <h3 class="font-display text-lg font-bold text-white mb-1 group-hover:text-chrome transition">${item.role}</h3>
          <div class="text-sm font-semibold text-slate-300 mb-3">${item.institution}</div>
          <div class="w-12 h-0.5 bg-white rounded-full my-3"></div>
          <p class="text-sm text-slate-400 leading-relaxed text-justify">${item.description}</p>
        </div>
      </div>
    `).join('');
  }

  if (eduContainer && PORTFOLIO_DATA.education) {
    eduContainer.innerHTML = PORTFOLIO_DATA.education.map(item => `
      <div class="glass-card rounded-2xl p-6 border border-white/10 group hover:border-white/25 transition flex flex-col">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span class="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
            ${item.period}
          </span>
          <span class="text-xs text-slate-500 font-medium">${item.location}</span>
        </div>

        <h3 class="font-display text-lg font-bold text-white mb-1 group-hover:text-chrome transition">${item.role}</h3>
        <div class="text-sm font-semibold text-slate-300 mb-3">${item.institution}</div>
        <div class="w-12 h-0.5 bg-white rounded-full mb-3.5"></div>
        <p class="text-sm text-slate-400 leading-relaxed text-justify flex-1">${item.description}</p>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   6. CONTACT FORM & ACTIONS
   ========================================================================== */
function initContact() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !message) {
      showNotification('Mohon lengkapi nama dan pesan Anda.', 'error');
      return;
    }

    // Build WhatsApp message format
    const text = `Halo Nadhin, saya ${name} (${email}).%0A%0APesan:%0A${encodeURIComponent(message)}`;
    const waUrl = `https://wa.me/6285727008860?text=${text}`;

    window.open(waUrl, '_blank');
    showNotification('Membuka WhatsApp untuk mengirim pesan...', 'success');
    form.reset();
  });
}

function showNotification(msg, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl text-sm font-medium shadow-2xl transition-all duration-300 transform translate-y-5 opacity-0 ${
    type === 'success' ? 'bg-white text-black' : 'bg-red-500 text-white'
  }`;
  toast.innerText = msg;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('translate-y-5', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('translate-y-5', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==========================================================================
   7. MOBILE MENU & SCROLL EFFECTS
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  links.forEach(l => {
    l.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

function initScrollEffects() {
  const navbar = document.getElementById('main-navbar');
  if (!navbar) return;

  const handleScroll = (scrollY) => {
    if (scrollY > 40) {
      navbar.classList.add('bg-black/80', 'backdrop-blur-md', 'border-b', 'border-white/10', 'py-3');
      navbar.classList.remove('py-5');
    } else {
      navbar.classList.remove('bg-black/80', 'backdrop-blur-md', 'border-b', 'border-white/10', 'py-3');
      navbar.classList.add('py-5');
    }
  };

  if (window.lenis) {
    window.lenis.on('scroll', (e) => handleScroll(e.scroll));
  }
  window.addEventListener('scroll', () => handleScroll(window.scrollY));
}

/* ==========================================================================
   8. LENIS SMOOTH SCROLL INITIALIZATION & ANCHORS
   ========================================================================== */
function initLenis() {
  if (typeof Lenis === 'undefined') {
    console.warn('Lenis library not loaded, falling back to default scrolling.');
    return;
  }

  window.lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
    infinite: false,
  });

  function raf(time) {
    window.lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Smooth scroll for all internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        window.lenis.scrollTo(targetEl, {
          offset: -80, // Offset for sticky navbar
          duration: 1.2
        });
      }
    });
  });
}

/* ==========================================================================
   9. SCROLLSPY (Active Navigation Link Indicator)
   ========================================================================== */
function initScrollSpy() {
  const navSections = [
    { id: 'about', el: document.getElementById('about') || document.querySelector('header') },
    { id: 'education', el: document.getElementById('education') },
    { id: 'skills', el: document.getElementById('skills') },
    { id: 'projects', el: document.getElementById('projects') },
    { id: 'experience', el: document.getElementById('experience') },
    { id: 'contact', el: document.getElementById('contact') }
  ].filter(s => s.el);

  const desktopLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function updateActive(activeId) {
    desktopLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${activeId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    mobileLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${activeId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  function handleScrollSpy() {
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // If near top of page, activate 'about'
    if (scrollY < 150) {
      updateActive('about');
      return;
    }

    // If near bottom of page, activate 'contact'
    if (scrollY + windowHeight >= documentHeight - 100) {
      updateActive('contact');
      return;
    }

    // Section in view calculation
    let currentId = 'about';
    const offsetThreshold = 220; // Navbar height + buffer

    for (let i = 0; i < navSections.length; i++) {
      const section = navSections[i];
      const rect = section.el.getBoundingClientRect();
      const top = rect.top;
      const height = rect.height;

      if (top <= offsetThreshold && (top + height) > offsetThreshold) {
        currentId = section.id;
        break;
      } else if (top <= offsetThreshold) {
        currentId = section.id;
      }
    }

    updateActive(currentId);
  }

  window.addEventListener('scroll', handleScrollSpy, { passive: true });
  if (window.lenis) {
    window.lenis.on('scroll', handleScrollSpy);
  }

  // Handle immediate click updates
  desktopLinks.forEach(link => {
    link.addEventListener('click', () => {
      const targetId = link.getAttribute('href')?.replace('#', '');
      if (targetId) updateActive(targetId);
    });
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      const targetId = link.getAttribute('href')?.replace('#', '');
      if (targetId) updateActive(targetId);
    });
  });

  // Initial trigger
  handleScrollSpy();
}


