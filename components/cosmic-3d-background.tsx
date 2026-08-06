"use client";

import { useEffect, useRef } from "react";

export function Cosmic3DBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - width / 2) * 0.03;
      mouseY = (e.clientY - height / 2) * 0.03;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // Lightweight 3D Star Particle System (150 Stars for 0 CPU lag)
    const starCount = 160;
    const stars: Array<{
      x: number;
      y: number;
      z: number;
      size: number;
      color: string;
      speed: number;
    }> = [];

    const starColors = ["#ffffff", "#fde047", "#d4af37", "#60a5fa", "#f59e0b"];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: (Math.random() - 0.5) * width * 2,
        y: (Math.random() - 0.5) * height * 2,
        z: Math.random() * width + 10,
        size: Math.random() * 2 + 0.8,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        speed: Math.random() * 0.6 + 0.3
      });
    }

    let saturnAngle = 0;

    // 3D Render Loop (Lightweight & Smooth 60fps)
    const render = () => {
      // Clear canvas with space background
      ctx.fillStyle = "#060608";
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2 + mouseX;
      const cy = height / 2 + mouseY;

      // 1. Draw 3D Perspective Stars
      stars.forEach((star) => {
        star.z -= star.speed;
        if (star.z <= 0) {
          star.z = width;
          star.x = (Math.random() - 0.5) * width * 2;
          star.y = (Math.random() - 0.5) * height * 2;
        }

        const k = 220 / star.z;
        const px = star.x * k + cx;
        const py = star.y * k + cy;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const alpha = Math.min(1, (1 - star.z / width) * 1.5);
          ctx.beginPath();
          ctx.arc(px, py, Math.max(0.6, star.size * k), 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = alpha;
          ctx.fill();
        }
      });

      // 2. Render High-Contrast 3D Floating Saturn Planet (Top Right)
      saturnAngle += 0.006;
      const saturnX = width * 0.88 + Math.sin(saturnAngle) * 12 + mouseX * 0.4;
      const saturnY = height * 0.22 + Math.cos(saturnAngle) * 8 + mouseY * 0.4;
      const saturnRadius = Math.min(width, height) * 0.05 + 24;

      // Saturn Ambient Glow
      const glowGrad = ctx.createRadialGradient(
        saturnX, saturnY, saturnRadius * 0.2,
        saturnX, saturnY, saturnRadius * 2.2
      );
      glowGrad.addColorStop(0, "rgba(212, 175, 55, 0.5)");
      glowGrad.addColorStop(0.5, "rgba(234, 179, 8, 0.2)");
      glowGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = glowGrad;
      ctx.globalAlpha = 0.9;
      ctx.beginPath();
      ctx.arc(saturnX, saturnY, saturnRadius * 2.2, 0, Math.PI * 2);
      ctx.fill();

      // Saturn Sphere Body
      const bodyGrad = ctx.createRadialGradient(
        saturnX - saturnRadius * 0.35, saturnY - saturnRadius * 0.35, saturnRadius * 0.1,
        saturnX, saturnY, saturnRadius
      );
      bodyGrad.addColorStop(0, "#fef08a");
      bodyGrad.addColorStop(0.4, "#d4af37");
      bodyGrad.addColorStop(0.8, "#854d0e");
      bodyGrad.addColorStop(1, "#1c1917");
      ctx.fillStyle = bodyGrad;
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.arc(saturnX, saturnY, saturnRadius, 0, Math.PI * 2);
      ctx.fill();

      // Saturn 3D Golden Rings
      ctx.save();
      ctx.translate(saturnX, saturnY);
      ctx.rotate(0.38);

      // Outer Ring
      ctx.beginPath();
      ctx.ellipse(0, 0, saturnRadius * 2.3, saturnRadius * 0.6, 0, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(253, 224, 71, 0.85)";
      ctx.lineWidth = 5;
      ctx.stroke();

      // Inner Accent Ring
      ctx.beginPath();
      ctx.ellipse(0, 0, saturnRadius * 2.7, saturnRadius * 0.7, 0, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(212, 175, 55, 0.45)";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

      // 3. Render 3D Floating Blue Cosmic Planet (Bottom Left)
      const planet2X = width * 0.12 - Math.sin(saturnAngle * 0.7) * 15 + mouseX * 0.3;
      const planet2Y = height * 0.78 + Math.cos(saturnAngle * 0.7) * 10 + mouseY * 0.3;
      const planet2Radius = Math.min(width, height) * 0.04 + 18;

      const p2Grad = ctx.createRadialGradient(
        planet2X - planet2Radius * 0.3, planet2Y - planet2Radius * 0.3, planet2Radius * 0.1,
        planet2X, planet2Y, planet2Radius
      );
      p2Grad.addColorStop(0, "#60a5fa");
      p2Grad.addColorStop(0.6, "#0284c7");
      p2Grad.addColorStop(1, "#030712");
      ctx.fillStyle = p2Grad;
      ctx.beginPath();
      ctx.arc(planet2X, planet2Y, planet2Radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
}
