const grid = document.getElementById('cardsGrid');
const modal = document.getElementById('previewModal');
const frame = document.getElementById('previewFrame');
const modalTitle = document.getElementById('modalTitle');
const standaloneLink = document.getElementById('standaloneLink');
const closeBtn = document.getElementById('closeModalBtn');

let proposals = [];
let activeFilter = 'All';
let lastFocusedTrigger = null;

async function init() {
  const res = await fetch('./proposals.json');
  proposals = await res.json();
  renderCards();
}

function renderCards() {
  const visible = proposals.filter((p) => activeFilter === 'All' || p.category === activeFilter);
  grid.innerHTML = '';

  visible.forEach((p) => {
    const card = document.createElement('article');
    card.className = 'prop-card';
    card.innerHTML = `
      <div>
        <span class="mono">${p.category}</span>
        <h2>${p.title}</h2>
        <p class="prop-summary">${p.summary}</p>
      </div>
      <div class="meta-list">
        <span>TYPE: ${p.typography}</span>
        <span>TOKENS: ${p.palette}</span>
      </div>
      <div class="card-actions">
        <button type="button" class="preview-btn" data-id="${p.id}">Interactive Preview</button>
        <a href="${p.url}" class="action-link" target="_blank" rel="noreferrer">Direct Link ↗</a>
      </div>
    `;
    card.querySelector('.preview-btn').addEventListener('click', (e) => openPreview(p, e.currentTarget));
    grid.appendChild(card);
  });
}

function openPreview(proposal, triggerEl) {
  lastFocusedTrigger = triggerEl;
  modalTitle.textContent = proposal.title;
  standaloneLink.href = proposal.url;
  frame.src = proposal.url;
  modal.hidden = false;
  closeBtn.focus();
}

function closePreview() {
  modal.hidden = true;
  // Unload iframe immediately so WebGL/video memory is freed!
  frame.src = 'about:blank';
  lastFocusedTrigger?.focus();
}

closeBtn.addEventListener('click', closePreview);
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.hidden) closePreview();
});

document.querySelectorAll('.filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderCards();
  });
});

document.querySelectorAll('.vp-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.vp-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    frame.style.width = btn.dataset.width;
  });
});

init();
