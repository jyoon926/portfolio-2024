import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { vertexShader, fluidShader, displayShader } from '../utils/shaders';
import { getBlendedColors } from '../App';
import { ColorSchemes } from '../utils/Data';

const config = {
  brushSize: 50.0,
  brushStrength: 0.5,
  distortionAmount: 2.5,
  fluidDecay: 0.98,
  trailLength: 1.0,
  stopDecay: 0.85,
  colorIntensity: 1.0,
  softness: 1.0,
  grainStrength: 0.02,
};

/* ---------------- Color Utils ---------------- */

function rgbStringToVec3(rgb: string, target: THREE.Vector3) {
  const [r, g, b] = rgb.split(',').map(v => parseFloat(v.trim()) / 255);
  target.set(r, g, b);
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return [h, s, l];
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  if (s === 0) return [l, l, l];

  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;

  return [
    hue2rgb(p, q, h + 1 / 3),
    hue2rgb(p, q, h),
    hue2rgb(p, q, h - 1 / 3),
  ];
}

function adjustColor(
  base: THREE.Vector3,
  lightnessDelta: number,
  saturationMultiplier: number,
  target: THREE.Vector3
) {
  const [h, s, l] = rgbToHsl(base.x, base.y, base.z);

  const newL = THREE.MathUtils.clamp(l + lightnessDelta, 0, 1);
  const newS = THREE.MathUtils.clamp(s * saturationMultiplier, 0, 1);

  const [r, g, b] = hslToRgb(h, newS, newL);
  target.set(r, g, b);
}

/* ---------------- Component ---------------- */

export default function Fluid({ colorScheme }: { colorScheme: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const displayMaterialRef = useRef<THREE.ShaderMaterial | null>(null);

  const color1 = useRef(new THREE.Vector3());
  const color2 = useRef(new THREE.Vector3());
  const color3 = useRef(new THREE.Vector3());
  const color4 = useRef(new THREE.Vector3());

  // mouse tracking
  const mouseRef = useRef({ x: 0, y: 0, px: 0, py: 0, lastMove: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const rtOptions = {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
    };

    const targetA = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, rtOptions);
    const targetB = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, rtOptions);

    let current = targetA;
    let previous = targetB;
    let frame = 0;

    const fluidMaterial = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iFrame: { value: 0 },
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        iMouse: { value: new THREE.Vector4() },
        iPreviousFrame: { value: null },
        uBrushSize: { value: config.brushSize },
        uBrushStrength: { value: config.brushStrength },
        uFluidDecay: { value: config.fluidDecay },
        uTrailLength: { value: config.trailLength },
        uStopDecay: { value: config.stopDecay },
      },
      vertexShader,
      fragmentShader: fluidShader,
    });

    const displayMaterial = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        iFluid: { value: null },
        uDistortionAmount: { value: config.distortionAmount },
        uColor1: { value: color1.current },
        uColor2: { value: color2.current },
        uColor3: { value: color3.current },
        uColor4: { value: color4.current },
        uColorIntensity: { value: config.colorIntensity },
        uSoftness: { value: config.softness },
        uGrainStrength: { value: config.grainStrength },
      },
      vertexShader,
      fragmentShader: displayShader,
    });

    displayMaterialRef.current = displayMaterial;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const fluidQuad = new THREE.Mesh(geometry, fluidMaterial);
    const displayQuad = new THREE.Mesh(geometry, displayMaterial);

    /* ---------------- Mouse Handling ---------------- */

    const onMouseMove = (e: MouseEvent) => {
      if (!renderer.domElement) return;
      const rect = renderer.domElement.getBoundingClientRect();
      const m = mouseRef.current;

      m.px = m.x;
      m.py = m.y;
      m.x = e.clientX - rect.left;
      m.y = rect.height - (e.clientY - rect.top);
      m.lastMove = performance.now();

      fluidMaterial.uniforms.iMouse.value.set(m.x, m.y, m.px, m.py);
    };

    const onMouseLeave = () => {
      fluidMaterial.uniforms.iMouse.value.set(0, 0, 0, 0);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    /* ---------------- Resize ---------------- */

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      renderer.setSize(w, h);
      fluidMaterial.uniforms.iResolution.value.set(w, h);
      displayMaterial.uniforms.iResolution.value.set(w, h);
      targetA.setSize(w, h);
      targetB.setSize(w, h);
      frame = 0;
    };
    window.addEventListener('resize', onResize);

    /* ---------------- Animation Loop ---------------- */

    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const time = performance.now() * 0.001;

      if (performance.now() - mouseRef.current.lastMove > 100) {
        fluidMaterial.uniforms.iMouse.value.set(0, 0, 0, 0);
      }

      fluidMaterial.uniforms.iTime.value = time;
      fluidMaterial.uniforms.iFrame.value = frame++;
      fluidMaterial.uniforms.iPreviousFrame.value = previous.texture;

      renderer.setRenderTarget(current);
      renderer.render(fluidQuad, camera);

      displayMaterial.uniforms.iTime.value = time;
      displayMaterial.uniforms.iFluid.value = current.texture;

      renderer.setRenderTarget(null);
      renderer.render(displayQuad, camera);

      [current, previous] = [previous, current];
    };

    animate();

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', onResize);

      geometry.dispose();
      fluidMaterial.dispose();
      displayMaterial.dispose();
      targetA.dispose();
      targetB.dispose();
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  /* ---------------- Color Updates ---------------- */

  useEffect(() => {
    if (!displayMaterialRef.current) return;

    const theme = getBlendedColors(colorScheme);

    const baseColor = new THREE.Vector3();
    rgbStringToVec3(theme.background, baseColor);

    adjustColor(baseColor, -0.1, 1.5, color1.current);
    adjustColor(baseColor, 0.1, 1.0, color2.current);
    adjustColor(baseColor, -0.1, 1.5, color3.current);
    adjustColor(baseColor, 0.1, 1.0, color4.current);

    displayMaterialRef.current.uniformsNeedUpdate = true;
  }, [colorScheme]);

  return <div ref={containerRef} className={`fixed inset-0 z-[-1] ${colorScheme === 0 || colorScheme === ColorSchemes.length - 1 ? "opacity-90" : "opacity-30"}`} />;
}