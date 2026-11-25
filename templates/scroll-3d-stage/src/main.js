import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById('stageCanvas');
const actLabel = document.getElementById('actLabel');
const scrollPct = document.getElementById('scrollPct');

// 1. Scene & DPR-Clamped Renderer
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x0a0908, 0.065);

const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;

// 2. Three-Point Studio Lighting Rig (Combo 3 Law)
const keyLight = new THREE.DirectionalLight(0xffe2b0, 2.8);
keyLight.position.set(5, 6, 5);
const rimLight = new THREE.DirectionalLight(0xe2a336, 2.2);
rimLight.position.set(-6, 3, -5);
const fillLight = new THREE.HemisphereLight(0xdbeafe, 0x1c1917, 0.65);
scene.add(keyLight, rimLight, fillLight);

// 3. Procedural Gyroscopic Core Assembly
const rig = new THREE.Group();
rig.position.set(1.1, 0, 0);
scene.add(rig);

const goldMat = new THREE.MeshStandardMaterial({ color: 0xe2a336, metalness: 0.88, roughness: 0.22 });
const obsidianMat = new THREE.MeshStandardMaterial({ color: 0x1c1a17, metalness: 0.65, roughness: 0.32 });

const coreMesh = new THREE.Mesh(new THREE.IcosahedronGeometry(0.95, 1), obsidianMat);
const ringOuter = new THREE.Mesh(new THREE.TorusGeometry(2.05, 0.045, 24, 128), goldMat);
const ringMid = new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.035, 24, 128), goldMat);
ringMid.rotation.x = Math.PI / 3;
const ringInner = new THREE.Mesh(new THREE.TorusGeometry(1.22, 0.03, 24, 96), obsidianMat);
ringInner.rotation.y = Math.PI / 4;
rig.add(coreMesh, ringOuter, ringMid, ringInner);

// 4. Catmull-Rom Camera Spline across 4 Acts
const cameraSpline = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0.0, 0.4, 7.2),
  new THREE.Vector3(2.4, 1.1, 4.8),
  new THREE.Vector3(-1.8, -0.6, 4.2),
  new THREE.Vector3(0.0, 0.2, 5.6),
]);

const scrollState = { progress: 0 };
const pointer = { x: 0, y: 0, curX: 0, curY: 0 };

window.addEventListener('pointermove', (e) => {
  pointer.x = (e.clientX / window.innerWidth - 0.5) * 0.5;
  pointer.y = (e.clientY / window.innerHeight - 0.5) * 0.5;
});

// 5. Reduced-Motion Safe Scroll Choreography + Lenis Sync
const mm = gsap.matchMedia();
mm.add('(prefers-reduced-motion: no-preference)', () => {
  const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  gsap.to(scrollState, {
    progress: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: '.scroll-chapters',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.7,
      onUpdate: (self) => {
        scrollPct.textContent = `${String(Math.round(self.progress * 100)).padStart(3, '0')}%`;
      },
    },
  });

  document.querySelectorAll('.chapter').forEach((sec) => {
    ScrollTrigger.create({
      trigger: sec,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => { actLabel.textContent = sec.dataset.act; },
      onEnterBack: () => { actLabel.textContent = sec.dataset.act; },
    });
  });
});

// 6. IntersectionObserver Render-Loop Pause
let isVisible = true;
const io = new IntersectionObserver(([entry]) => { isVisible = entry.isIntersecting; });
io.observe(canvas);

const lookTarget = new THREE.Vector3(0.8, 0, 0);
function animate(now) {
  requestAnimationFrame(animate);
  if (!isVisible) return;

  const t = now * 0.001;
  pointer.curX += (pointer.x - pointer.curX) * 0.06;
  pointer.curY += (pointer.y - pointer.curY) * 0.06;

  const camPos = cameraSpline.getPointAt(scrollState.progress);
  camera.position.set(camPos.x + pointer.curX, camPos.y - pointer.curY, camPos.z);
  camera.lookAt(lookTarget);

  const explode = Math.sin(scrollState.progress * Math.PI);
  ringOuter.rotation.z = t * 0.18 + scrollState.progress * Math.PI;
  ringMid.rotation.y = t * 0.25 - scrollState.progress * Math.PI * 1.4;
  ringInner.rotation.x = t * 0.32 + scrollState.progress * Math.PI * 2;
  ringOuter.scale.setScalar(1 + explode * 0.22);
  coreMesh.rotation.y = t * 0.2;

  renderer.render(scene, camera);
}
requestAnimationFrame(animate);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
