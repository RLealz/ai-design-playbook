import * as THREE from 'three';

clearTimeout(window.__stageFailsafe);

const canvas = document.getElementById('glslCanvas');
const poster = document.getElementById('posterLayer');
const gpuStatus = document.getElementById('gpuStatus');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const VERTEX_SHADER = `
  uniform float uScroll;
  uniform vec2 uPointer;
  varying vec2 vUv;
  varying float vElev;

  void main() {
    vUv = uv;
    vec3 pos = position;
    float d = distance(uv, uPointer);
    float ripple = sin(d * 18.0 - uScroll * 6.2831) * exp(-d * 4.5) * 0.28;
    float fold = sin(pos.x * 2.1 + uScroll * 4.0) * 0.18 + cos(pos.y * 1.7 + uScroll * 3.0) * 0.14;
    pos.z += ripple + fold;
    vElev = pos.z;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  varying vec2 vUv;
  varying float vElev;

  void main() {
    vec3 base = vec3(0.09, 0.10, 0.14);
    vec3 gold = vec3(0.83, 0.64, 0.35);
    float weave = step(0.94, fract(vUv.x * 48.0)) + step(0.94, fract(vUv.y * 48.0));
    float sheen = smoothstep(-0.28, 0.36, vElev);
    vec3 col = mix(base, gold, sheen * 0.62) + weave * 0.035;
    gl_FragColor = vec4(col, 1.0);
  }
`;

let renderer, scene, camera, material, geometry, mesh;
let rafPending = false;
let settleFrames = 0;

const state = {
  targetScroll: 0,
  curScroll: 0,
  targetPtr: new THREE.Vector2(0.5, 0.5),
  curPtr: new THREE.Vector2(0.5, 0.5),
};

function buildScene() {
  scene = new THREE.Scene();
  const w = canvas.clientWidth || 600;
  const h = canvas.clientHeight || 600;
  camera = new THREE.PerspectiveCamera(38, w / h, 0.1, 50);
  camera.position.set(0, -0.55, 3.3);
  camera.lookAt(0, 0, 0);

  if (!renderer) {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  }
  const dprCap = window.innerWidth < 768 ? 1.5 : 1.75;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, dprCap));
  renderer.setSize(w, h, false);

  geometry = new THREE.PlaneGeometry(3.4, 3.4, 96, 96);
  material = new THREE.ShaderMaterial({
    vertexShader: VERTEX_SHADER,
    fragmentShader: FRAGMENT_SHADER,
    uniforms: {
      uScroll: { value: state.curScroll },
      uPointer: { value: state.curPtr },
    },
  });
  mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = -0.28;
  scene.add(mesh);

  renderer.render(scene, camera);
  poster.classList.add('hidden');
  gpuStatus.textContent = 'GPU · IDLE (0 FPS)';
}

// Demand-Driven Render Loop: Sleeps at 0 FPS once damped values settle
function requestRender() {
  if (reducedMotion || rafPending || !renderer) return;
  rafPending = true;
  settleFrames = 28;
  gpuStatus.textContent = 'GPU · ACTIVE RENDER';
  requestAnimationFrame(step);
}

function step() {
  rafPending = false;
  state.curScroll += (state.targetScroll - state.curScroll) * 0.14;
  state.curPtr.lerp(state.targetPtr, 0.14);

  material.uniforms.uScroll.value = state.curScroll;
  material.uniforms.uPointer.value.copy(state.curPtr);
  renderer.render(scene, camera);

  const delta =
    Math.abs(state.targetScroll - state.curScroll) +
    state.targetPtr.distanceTo(state.curPtr);

  if (delta > 0.0015 || --settleFrames > 0) {
    rafPending = true;
    requestAnimationFrame(step);
  } else {
    gpuStatus.textContent = 'GPU · IDLE (0 FPS)';
  }
}

// WebGL Context Loss & Restoration Immunity
canvas.addEventListener('webglcontextlost', (e) => {
  e.preventDefault();
  rafPending = false;
  poster.classList.remove('hidden');
  gpuStatus.textContent = 'GPU · CONTEXT RECOVERING';
});

canvas.addEventListener('webglcontextrestored', () => {
  buildScene();
  requestRender();
});

window.addEventListener('scroll', () => {
  const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  state.targetScroll = window.scrollY / max;
  requestRender();
}, { passive: true });

canvas.addEventListener('pointermove', (e) => {
  const r = canvas.getBoundingClientRect();
  state.targetPtr.set((e.clientX - r.left) / r.width, 1.0 - (e.clientY - r.top) / r.height);
  requestRender();
});

window.addEventListener('resize', () => {
  if (!renderer || !camera) return;
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h, false);
  requestRender();
});

try {
  buildScene();
} catch {
  poster.classList.remove('hidden');
  gpuStatus.textContent = 'GPU · STATIC FALLBACK';
}
