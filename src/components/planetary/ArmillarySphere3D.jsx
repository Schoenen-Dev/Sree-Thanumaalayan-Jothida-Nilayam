import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
/**
 * Renders the 3D Golden Armillary Sphere / Astrolabe Gyroscope
 * using Three.js WebGL with metallic brass shaders, concentric rotating rings,
 * central axis, and radiant specular lighting matching the celestial reference.
 */
export default function ArmillarySphere3D({
  reducedMotion = false,
  size = 520,
  rotationSpeed = 0.45
}) {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || size;
    const height = container.clientHeight || size;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 24);
    camera.lookAt(0, 0, 0);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // renderer.toneMapping = THREE.ACESFilmicToneMapping;
    // renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // Master group for the entire armillary sphere
    const masterGroup = new THREE.Group();
    // Tilt the whole sphere toward camera like in the image (tilted forward ~18°)
    masterGroup.rotation.x = THREE.MathUtils.degToRad(18);
    masterGroup.rotation.y = THREE.MathUtils.degToRad(-10);
    scene.add(masterGroup);

    // 1. Brilliant Polished Gold Rings (Lines 48–54)
    /// 1. Polished Golden Brass Rings
    // --- Vibrant Metallic Gold Materials (MeshPhong for bright highlights) ---
    const goldMaterial = new THREE.MeshPhongMaterial({
      color: 0xe5ac43,
      emissive: 0x4a3000,
      specular: 0xfff2a3,
      shininess: 100
    });
    const brightGoldMaterial = new THREE.MeshPhongMaterial({
      color: 0xffdb78,
      emissive: 0x664400,
      specular: 0xffffff,
      shininess: 150
    });
    const darkBrassMaterial = new THREE.MeshPhongMaterial({
      color: 0xca8a04,
      emissive: 0x332000,
      specular: 0xffd978,
      shininess: 80
    });
    // Helper to create a smooth circular torus ring
    const createRing = (radius, tube, radialSegments = 16, tubularSegments = 120, mat = goldMaterial) => {
      const geom = new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments);
      return new THREE.Mesh(geom, mat);
    };

    // Helper to create a flat circular band with depth (like the wide ecliptic zodiac band)
    const createFlatBand = (innerR, outerR, depth, mat = goldMaterial) => {
      const shape = new THREE.Shape();
      shape.absarc(0, 0, outerR, 0, Math.PI * 2, false);
      const hole = new THREE.Path();
      hole.absarc(0, 0, innerR, 0, Math.PI * 2, true);
      shape.holes.push(hole);
      const geom = new THREE.ExtrudeGeometry(shape, {
        depth: depth,
        bevelEnabled: true,
        bevelThickness: 0.04,
        bevelSize: 0.04,
        curveSegments: 96
      });
      geom.center();
      return new THREE.Mesh(geom, mat);
    };

    // --- 1. Outer Meridian Ring (Fixed Outer Cage) ---
    const meridianRing = createRing(7.2, 0.18, 16, 120, brightGoldMaterial);
    meridianRing.rotation.y = Math.PI / 2;
    masterGroup.add(meridianRing);

    // Outer horizon ring
    const horizonRing = createRing(7.2, 0.18, 16, 120, goldMaterial);
    horizonRing.rotation.x = Math.PI / 2;
    masterGroup.add(horizonRing);

    // --- 2. Rotating Inner Gyroscope Cage 1 (Ecliptic / Main Rotator) ---
    const innerCage1 = new THREE.Group();
    masterGroup.add(innerCage1);

    // Wide Ecliptic Band with engraved feel
    const eclipticBand = createFlatBand(6.1, 6.75, 0.35, brightGoldMaterial);
    eclipticBand.rotation.x = Math.PI / 2;
    innerCage1.add(eclipticBand);

    // Inner bevel ring on the ecliptic
    const eclipticTrim1 = createRing(6.78, 0.06, 12, 100, goldMaterial);
    eclipticTrim1.rotation.x = Math.PI / 2;
    innerCage1.add(eclipticTrim1);
    const eclipticTrim2 = createRing(6.08, 0.06, 12, 100, goldMaterial);
    eclipticTrim2.rotation.x = Math.PI / 2;
    innerCage1.add(eclipticTrim2);

    // --- 3. Rotating Inner Gyroscope Cage 2 (Tilted Celestial Equator) ---
    const innerCage2 = new THREE.Group();
    innerCage2.rotation.z = THREE.MathUtils.degToRad(23.5); // Earth axial tilt
    masterGroup.add(innerCage2);
    const equatorialRing = createRing(5.6, 0.14, 16, 100, goldMaterial);
    equatorialRing.rotation.x = Math.PI / 2;
    innerCage2.add(equatorialRing);
    const colureRing1 = createRing(5.6, 0.12, 16, 100, goldMaterial);
    colureRing1.rotation.y = Math.PI / 2;
    innerCage2.add(colureRing1);
    const colureRing2 = createRing(5.6, 0.12, 16, 100, goldMaterial);
    innerCage2.add(colureRing2);

    // --- 4. Rotating Inner Core Cage 3 (Polar Tropics & Celestial Sphere) ---
    const innerCage3 = new THREE.Group();
    innerCage2.add(innerCage3);
    const tropicCancer = createRing(4.3, 0.08, 12, 90, darkBrassMaterial);
    tropicCancer.position.y = 2.1;
    tropicCancer.rotation.x = Math.PI / 2;
    innerCage3.add(tropicCancer);
    const tropicCapricorn = createRing(4.3, 0.08, 12, 90, darkBrassMaterial);
    tropicCapricorn.position.y = -2.1;
    tropicCapricorn.rotation.x = Math.PI / 2;
    innerCage3.add(tropicCapricorn);

    // Polar Circle
    const polarCircle = createRing(2.6, 0.07, 12, 80, goldMaterial);
    polarCircle.position.y = 3.6;
    polarCircle.rotation.x = Math.PI / 2;
    innerCage3.add(polarCircle);

    // --- 5. Central Polar Axis Rod & Center Golden Sun Sphere ---
    const axisGeom = new THREE.CylinderGeometry(0.12, 0.12, 15.5, 32);
    const axisMesh = new THREE.Mesh(axisGeom, brightGoldMaterial);
    innerCage2.add(axisMesh);

    // Polar decorative finials (top and bottom brass knobs)
    const finialTop = new THREE.Mesh(new THREE.SphereGeometry(0.35, 24, 24), brightGoldMaterial);
    finialTop.position.y = 7.8;
    innerCage2.add(finialTop);
    const finialBottom = new THREE.Mesh(new THREE.SphereGeometry(0.35, 24, 24), brightGoldMaterial);
    finialBottom.position.y = -7.8;
    innerCage2.add(finialBottom);

    // Center radiant Golden Sun / Celestial Core
    const sunGeom = new THREE.SphereGeometry(1.25, 32, 32);
    const sunMat = new THREE.MeshPhongMaterial({
      color: 0xffc44d,
      emissive: 0xff9900,
      specular: 0xffffff,
      shininess: 120
    });
    const sunSphere = new THREE.Mesh(sunGeom, sunMat);
    masterGroup.add(sunSphere);

    // Mini planetary orbit markers / beads on the rings
    const bead1 = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 16), new THREE.MeshPhongMaterial({
      color: 0x38bdf8,
      emissive: 0x00aaff,
      specular: 0xffffff,
      shininess: 100
    }));
    bead1.position.set(5.6, 0, 0);
    innerCage2.add(bead1);
    const bead2 = new THREE.Mesh(new THREE.SphereGeometry(0.24, 16, 16), new THREE.MeshPhongMaterial({
      color: 0xef4444,
      emissive: 0xff0000,
      specular: 0xffffff,
      shininess: 100
    }));
    bead2.position.set(0, 0, 6.4);
    innerCage1.add(bead2);

    // --- Lighting Setup matching the reference image ---
    // 1. Ambient cosmic light
    // Top-Right Focused Specular Spotlight (Matches the bright flare in your reference image)
    const keyLight = new THREE.PointLight(0xfffae6, 12.0, 100);
    keyLight.position.set(3, 11, 12);
    scene.add(keyLight);

    // Warm Ambient Fill
    const ambientLight = new THREE.AmbientLight(0xffe6b3, 1.4);
    scene.add(ambientLight);

    // Subtle Rim Light
    const rimLight = new THREE.PointLight(0xffd700, 3.5, 40);
    rimLight.position.set(-8, -6, 8);
    scene.add(rimLight);

    // 4. Cool cyan fill light from space depth
    const spaceLight = new THREE.PointLight(0x0284c7, 1.6, 40);
    spaceLight.position.set(-8, -6, 5);
    scene.add(spaceLight);

    // Subtle interactive tilt tracking
    let targetTiltX = 0;
    let targetTiltY = 0;
    const handleMouseMove = e => {
      const rect = container.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width * 2 - 1;
      const ny = (e.clientY - rect.top) / rect.height * 2 - 1;
      targetTiltX = ny * 0.15;
      targetTiltY = nx * 0.25;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop: Concentric rings moving round and round
    let animationFrameId;
    let clock = new THREE.Clock();
    const animate = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();
      if (!reducedMotion) {
        // Continuous rotation on multiple axes ("moving round and round")
        const speed = rotationSpeed;

        // Master slow cosmic rotation
        masterGroup.rotation.y += delta * 0.12 * speed;

        // Inner armillary ecliptic band rotates continuously
        innerCage1.rotation.y += delta * 0.45 * speed;
        innerCage1.rotation.z = Math.sin(elapsed * 0.3) * 0.15;

        // Inner cage 2 rotates in opposite direction
        innerCage2.rotation.y -= delta * 0.35 * speed;
        innerCage2.rotation.x = THREE.MathUtils.degToRad(23.5) + Math.sin(elapsed * 0.2) * 0.08;

        // Core tropical ring spins
        innerCage3.rotation.y += delta * 0.6 * speed;

        // Subtle tilt easing towards mouse
        masterGroup.rotation.x += (THREE.MathUtils.degToRad(18) + targetTiltX - masterGroup.rotation.x) * 0.05;
        masterGroup.rotation.z += (-targetTiltY - masterGroup.rotation.z) * 0.05;
      }
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Handle Container Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [reducedMotion, size, rotationSpeed]);
  return <div ref={containerRef} className="armillary-sphere-3d w-full h-full flex items-center justify-center pointer-events-none" style={{
    width: `${size}px`,
    height: `${size}px`,
    maxWidth: '100%',
    maxHeight: '100%'
  }} />;
}