"use client";
import React, { useEffect, useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
};

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrameId: number;
    const particles: Particle[] = [];

    // Set canvas dimensions
    const handleResize = () => {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;

      // Reset particles on resize
      particles.length = 0;
      initParticles();
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Initialize particles
    function initParticles() {
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);

      for (let i = 0; i < particleCount; i++) {
        const primaryColor = "#384D90";
        const secondaryColor = "#38bdf8";

        particles.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: Math.random() > 0.5 ? primaryColor : secondaryColor,
        });
      }
    }

    // Draw particles
    function drawParticles() {
      context!.clearRect(0, 0, canvas!.width, canvas!.height);

      particles.forEach((p, index) => {
        // update particle position
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around the screen
        if (p.x < 0) p.x = canvas!.width;
        if (p.x > canvas!.width) p.x = 0;
        if (p.y < 0) p.y = canvas!.height;
        if (p.y > canvas!.height) p.y = 0;

        // Draw particle
        context!.beginPath();
        context!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        context!.fillStyle = p.color;
        context!.fill();

        // Draw lines between particles that are close
        particles.forEach((p2, index2) => {
          if (index !== index2) {
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              context!.beginPath();
              context!.strokeStyle = `${p.color}${Math.floor(
                (1 - distance / 120) * 30
              ).toString(16)}`;
              context!.lineWidth = (1 - distance / 120) * 0.8;
              context!.moveTo(p.x, p.y);
              context!.lineTo(p2.x, p2.y);
              context!.stroke();
            }
          }
        });
      });
      animationFrameId = requestAnimationFrame(drawParticles);
    }

    initParticles();
    drawParticles();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    />
  );
};

export default ParticlesBackground;
