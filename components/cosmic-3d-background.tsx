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

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - width / 2) * 0.05;
      mouseY = (e.clientY - height / 2) * 0.05;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // 3D Star Particle System
    const starCount = 280;
    const stars: Array<{
      x: number;
      y: number;
      z: number;
      size: number;
      color: string;
      speed: number;
    }> = [];

    const colors = ["#ffffff", "#fde047", "#d4af37", "#f59e0b", "#7dd3fc"];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: (Math.random() - 0.5) * width * 2,
        y: (Math.random() - 0.5) * height * 2,
        z: Math.random() * width,
        size: Math.random() * 1.8 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.5 + 0.2
      });
    }

    // 3D Rotating Saturn Planet
    let saturnAngle = 0;

    // Shooting Stars
    const shootingStars: Array<{
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
    }> = [];

    const createShootingStar = () => {
      if (Math.random() < 0.03 && shootingStars.length < 3) {
        shootingStars.push({
          x: Math.random() * width,
          y: Math.random() * (height / 2),
          length: Math.random() * 80 + 40,
          speed: Math.random() * 8 + 6,
          opacity: 1
        });
      }
    };

    // Main 3D Render Loop
    const render = () => {
      ctx.fillStyle = "rgba(9, 9, 11, 0.4)";
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

        const k = 250 / star.z;
        const px = star.x * k + cx;
        const py = star.y * k + cy;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const alpha = Math.min(1, (1 - star.z / width) * 1.2);
          ctx.beginPath();
          ctx.arc(px, py, Math.max(0.5, star.size * k), 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = alpha;
          ctx.fill();
        }
      });

      // 2. Draw 3D Floating Saturn Planet (Top Right Depth)
      saturnAngle += 0.005;
      const saturnX = width * 0.85 + Math.sin(saturnAngle) * 15 + mouseX * 0.5;
      const saturnY = height * 0.2 + Math.cos(saturnAngle) * 10 + mouseY * 0.5;
      const saturnRadius = Math.min(width, height) * 0.04 + 20;

      // Saturn Glow
      const glowGrad = ctx.createRadialGradient(
        saturnX, saturnY, saturnRadius * 0.2,
        saturnX, saturnY, saturnRadius * 2
      );
      glowGrad.addColorStop(0, "rgba(212, 175, 55, 0.4)");
      glowGrad.addColorStop(0.5, "rgba(234, 179, 8, 0.15)");
      glowGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = glowGrad;
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.arc(saturnX, saturnY, saturnRadius * 2, 0, Math.PI * 2);
      ctx.fill();

      // Saturn Sphere Body
      const bodyGrad = ctx.createRadialGradient(
        saturnX - saturnRadius * 0.3, saturnY - saturnRadius * 0.3, saturnRadius * 0.1,
        saturnX, saturnY, saturnRadius
      );
      bodyGrad.addColorStop(0, "#fde047");
      bodyGrad.addColorStop(0.5, "#d4af37");
      bodyGrad.addColorStop(1, "#451a03");
      ctx.fillStyle = bodyGrad;
      ctx.beginPath();
      ctx.arc(saturnX, saturnY, saturnRadius, 0, Math.PI * 2);
      ctx.fill();

      // Saturn 3D Rings
      ctx.save();
      ctx.translate(saturnX, saturnY);
      ctx.rotate(0.35);
      ctx.beginPath();
      ctx.ellipse(0, 0, saturnRadius * 2.2, saturnRadius * 0.55, 0, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(253, 224, 71, 0.65)";
      ctx.lineWidth = 4;
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(0, 0, saturnRadius * 2.6, saturnRadius * 0.65, 0, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(212, 175, 55, 0.35)";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

      // 3. Draw 3D Floating Mystical Blue Nebula Planet (Bottom Left Depth)
      const planet2X = width * 0.15 - Math.sin(saturnAngle * 0.8) * 20 + mouseX * 0.3;
      const planet2Y = height * 0.75 + Math.cos(saturnAngle * 0.8) * 15 + mouseY * 0.3;
      const planet2Radius = Math.min(width, height) * 0.035 + 15;

      const p2Grad = ctx.createRadialGradient(
        planet2X - planet2Radius * 0.3, planet2Y - planet2Radius * 0.3, planet2Radius * 0.1,
        planet2X, planet2Y, planet2Radius
      );
      p2Grad.addColorStop(0, "#38bdf8");
      p2Grad.addColorStop(0.6, "#0284c7");
      p2Grad.addColorStop(1, "#030712");
      ctx.fillStyle = p2Grad;
      ctx.beginPath();
      ctx.arc(planet2X, planet2Y, planet2Radius, 0, Math.PI * 2);
      ctx.fill();

      // 4. Draw Shooting Stars
      createShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += ss.speed * 1.2;
        ss.y += ss.speed * 0.8;
        ss.opacity -= 0.015;

        if (ss.opacity <= 0 || ss.x > width || ss.y > height) {
          shootingStars.splice(i, 1);
          continue;
        }

        const grad = ctx.createLinearGradient(
          ss.x, ss.y,
          ss.x - ss.length, ss.y - ss.length * 0.6
        );
        grad.addColorStop(0, "rgba(255, 255, 255, " + ss.opacity + ")");
        grad.addColorStop(0.5, "rgba(253, 224, 71, " + ss.opacity * 0.5 + ")");
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(ss.x - ss.length, ss.y - ss.length * 0.6);
        ctx.stroke();
      }

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
      className="fixed inset-0 pointer-events-none z-0 w-full h-full opacity-80"
    />
  );
}
