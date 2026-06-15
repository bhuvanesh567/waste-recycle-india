"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function EarthGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Renderer ──────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // ── Scene & Camera ────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 8);

    // ── Lights ────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight("#1a4a2e", 0.4));
    const sun = new THREE.DirectionalLight("#ffffff", 2.2);
    sun.position.set(5, 5, 5);
    scene.add(sun);
    const greenFill = new THREE.PointLight("#22c55e", 0.7);
    greenFill.position.set(-5, -5, -5);
    scene.add(greenFill);
    const topLight = new THREE.PointLight("#16a34a", 0.9);
    topLight.position.set(0, 8, 0);
    scene.add(topLight);

    // ── Stars ─────────────────────────────────────────────────
    const starPositions = new Float32Array(6000);
    for (let i = 0; i < 6000; i++) {
      starPositions[i] = (Math.random() - 0.5) * 300;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const stars = new THREE.Points(
      starGeo,
      new THREE.PointsMaterial({ size: 0.08, color: "#ffffff", transparent: true, opacity: 0.7 })
    );
    scene.add(stars);

    // ── Earth ─────────────────────────────────────────────────
    const earthGroup = new THREE.Group();
    scene.add(earthGroup);

    // Core
    const earthMesh = new THREE.Mesh(
      new THREE.SphereGeometry(2, 64, 64),
      new THREE.MeshStandardMaterial({
        color: "#0f4c28",
        emissive: "#021a0a",
        emissiveIntensity: 0.4,
        roughness: 0.85,
        metalness: 0.05,
      })
    );
    earthGroup.add(earthMesh);

    // Ocean
    earthGroup.add(
      new THREE.Mesh(
        new THREE.SphereGeometry(2.01, 64, 64),
        new THREE.MeshStandardMaterial({
          color: "#0c2d4a",
          transparent: true,
          opacity: 0.45,
          roughness: 0.1,
          metalness: 0.9,
        })
      )
    );

    // Atmosphere
    earthGroup.add(
      new THREE.Mesh(
        new THREE.SphereGeometry(2.15, 32, 32),
        new THREE.MeshStandardMaterial({
          color: "#22c55e",
          transparent: true,
          opacity: 0.04,
          side: THREE.BackSide,
        })
      )
    );

    // ── Orbit rings (particle trails) ─────────────────────────
    const rings: { group: THREE.Group; speed: number }[] = [];

    const addRing = (radius: number, speed: number, color: string, count: number, tilt: number) => {
      const group = new THREE.Group();
      group.rotation.x = tilt;
      scene.add(group);

      const mat = new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 1,
      });
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.028, 6, 6), mat);
        mesh.position.set(
          Math.cos(angle) * radius,
          Math.sin(angle * 2) * 0.15,
          Math.sin(angle) * radius
        );
        group.add(mesh);
      }
      rings.push({ group, speed });
    };

    addRing(3, 0.22, "#22c55e", 40, 0);
    addRing(3.8, -0.15, "#4ade80", 28, 0.5);
    addRing(4.5, 0.1, "#86efac", 18, -0.3);

    // ── Recycle icons (torus) ─────────────────────────────────
    const torusMat = new THREE.MeshStandardMaterial({
      color: "#22c55e",
      emissive: "#16a34a",
      emissiveIntensity: 0.6,
      metalness: 0.5,
      roughness: 0.3,
    });
    const torusPositions: [number, number, number][] = [
      [3.5, 0.5, 0],
      [-3, 1, 1.5],
      [0.5, 3, 2],
    ];
    const toruses = torusPositions.map((pos) => {
      const m = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.04, 12, 32), torusMat);
      m.position.set(...pos);
      scene.add(m);
      return { mesh: m, baseY: pos[1] };
    });

    // ── Trucks ────────────────────────────────────────────────
    const truckMat = new THREE.MeshStandardMaterial({ color: "#16a34a", metalness: 0.4, roughness: 0.5 });
    const cabMat = new THREE.MeshStandardMaterial({ color: "#15803d", metalness: 0.5, roughness: 0.4 });
    const wheelMat = new THREE.MeshStandardMaterial({ color: "#0f172a" });

    const makeTruck = () => {
      const g = new THREE.Group();
      g.scale.setScalar(0.13);
      // body
      const body = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.6, 0.65), truckMat);
      body.position.set(0, 0.2, 0);
      g.add(body);
      const cab = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.48, 0.6), cabMat);
      cab.position.set(0.65, 0.48, 0);
      g.add(cab);
      for (const x of [-0.45, 0.35]) {
        for (const z of [-0.32, 0.32]) {
          const w = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.07, 12), wheelMat);
          w.rotation.x = Math.PI / 2;
          w.position.set(x, -0.1, z);
          g.add(w);
        }
      }
      scene.add(g);
      return g;
    };

    const trucks = [
      { mesh: makeTruck(), radius: 4, speed: 0.28, yOff: 0 },
      { mesh: makeTruck(), radius: 5, speed: -0.18, yOff: 0.5 },
    ];

    // ── Green particles ───────────────────────────────────────
    const pPositions = new Float32Array(1800);
    for (let i = 0; i < 1800; i++) {
      pPositions[i] = (Math.random() - 0.5) * 14;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
    const particles = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({ size: 0.04, color: "#22c55e", transparent: true, opacity: 0.6 })
    );
    scene.add(particles);

    // ── Mouse interaction ─────────────────────────────────────
    const mouse = { x: 0, y: 0 };
    const camTarget = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    // ── Resize ────────────────────────────────────────────────
    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // ── Animation loop ────────────────────────────────────────
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Earth rotation
      earthMesh.rotation.y = t * 0.12;

      // Rings
      rings.forEach(({ group, speed }) => {
        group.rotation.y = t * speed;
      });

      // Toruses float
      toruses.forEach(({ mesh, baseY }, i) => {
        mesh.position.y = baseY + Math.sin(t * 1.2 + i * 1.5) * 0.3;
        mesh.rotation.z = t * 0.3;
      });

      // Trucks orbit
      trucks.forEach(({ mesh, radius, speed, yOff }) => {
        const a = t * speed;
        mesh.position.set(Math.cos(a) * radius, yOff, Math.sin(a) * radius);
        mesh.rotation.y = -a + Math.PI / 2;
      });

      // Stars slow rotation
      stars.rotation.y = t * 0.008;

      // Green particles drift
      particles.rotation.y = t * 0.02;
      particles.rotation.x = Math.sin(t * 0.01) * 0.05;

      // Camera mouse parallax
      camTarget.x += (mouse.x * 1.5 - camTarget.x) * 0.04;
      camTarget.y += (mouse.y * 1.0 - camTarget.y) * 0.04;
      camera.position.x = camTarget.x;
      camera.position.y = camTarget.y;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // ── Cleanup ───────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full"
      style={{ minHeight: "400px" }}
    />
  );
}
