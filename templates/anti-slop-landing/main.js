const rpsSlider = document.getElementById('rpsSlider');
const rpsVal = document.getElementById('rpsVal');
const p50Out = document.getElementById('p50Out');
const p99Out = document.getElementById('p99Out');
const bootOut = document.getElementById('bootOut');
const pills = document.querySelectorAll('.pill');
const copyBtn = document.getElementById('copyCmdBtn');
const copyStatus = document.getElementById('copyStatus');

let currentMode = 'edge';

function renderTelemetry() {
  const rps = Number(rpsSlider.value);
  rpsVal.textContent = rps.toLocaleString('en-US');

  if (currentMode === 'edge') {
    const loadDelta = (rps / 50000) * 1.6;
    p50Out.textContent = `${(2.9 + loadDelta * 0.4).toFixed(1)} ms`;
    p99Out.textContent = `${(8.8 + loadDelta).toFixed(1)} ms`;
    bootOut.textContent = '0.4 ms';
  } else {
    const loadDelta = (rps / 50000) * 48;
    p50Out.textContent = `${(64.0 + loadDelta * 0.45).toFixed(1)} ms`;
    p99Out.textContent = `${(188.0 + loadDelta).toFixed(1)} ms`;
    bootOut.textContent = '420.0 ms';
  }
}

rpsSlider?.addEventListener('input', renderTelemetry);

pills.forEach((btn) => {
  btn.addEventListener('click', () => {
    pills.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    currentMode = btn.dataset.mode || 'edge';
    renderTelemetry();
  });
});

copyBtn?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('npx kestrel@latest ship --edge');
    copyStatus.textContent = 'Copied';
    setTimeout(() => { copyStatus.textContent = 'Copy'; }, 1600);
  } catch {
    copyStatus.textContent = 'Ready';
  }
});

renderTelemetry();
