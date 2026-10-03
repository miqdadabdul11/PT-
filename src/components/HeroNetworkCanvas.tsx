"use client";

import React, { useRef, useEffect, useState } from "react";
import { useConsultModal } from "./Providers";
import { ArrowUpRight, Network, ShieldCheck, Database } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

type Mode = "network" | "security" | "data";

interface NodePoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse?: number;
}

export const HeroNetworkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { openConsultModal } = useConsultModal();
  const [activeMode, setActiveMode] = useState<Mode>("network");
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Initialize nodes
    const nodeCount = Math.floor((width * height) / 14000);
    const nodes: NodePoint[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 2,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        };
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    let step = 0;

    const render = () => {
      step += 0.03;
      ctx.clearRect(0, 0, width, height);

      // Render lines & connections
      const maxDist = activeMode === "network" ? 130 : activeMode === "security" ? 110 : 140;

      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];

        // Move node
        n1.x += n1.vx;
        n1.y += n1.vy;

        if (n1.x < 0 || n1.x > width) n1.vx *= -1;
        if (n1.y < 0 || n1.y > height) n1.vy *= -1;

        // Check distance to mouse
        const dxMouse = n1.x - mouseRef.current.x;
        const dyMouse = n1.y - mouseRef.current.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.45;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);

            if (activeMode === "security") {
              ctx.strokeStyle = `rgba(216, 207, 196, ${alpha * 0.7})`;
              ctx.lineWidth = 1;
            } else if (activeMode === "data") {
              ctx.strokeStyle = `rgba(216, 207, 196, ${alpha})`;
              ctx.lineWidth = 1;

              // Pulse particle traveling on line
              if ((i + j) % 3 === 0) {
                const progress = (Math.sin(step + i) + 1) / 2;
                const px = n1.x + (n2.x - n1.x) * progress;
                const py = n1.y + (n2.y - n1.y) * progress;
                ctx.fillStyle = "rgba(201, 154, 61, 0.8)";
                ctx.fillRect(px - 1.5, py - 1.5, 3, 3);
              }
            } else {
              ctx.strokeStyle = `rgba(216, 207, 196, ${alpha})`;
              ctx.lineWidth = 1;
            }
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        const isNearMouse = distMouse < 120;
        const nodeRadius = isNearMouse ? n1.radius + 2 : n1.radius;

        ctx.arc(n1.x, n1.y, nodeRadius, 0, Math.PI * 2);

        if (isNearMouse) {
          // Glow Brass near cursor
          ctx.fillStyle = "#c99a3d";
          ctx.shadowColor = "#c99a3d";
          ctx.shadowBlur = 12;
        } else {
          ctx.fillStyle = "#d8cfc4";
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0;

        // Security shield pulse around mouse if security mode
        if (activeMode === "security" && isNearMouse) {
          ctx.beginPath();
          ctx.arc(mouseRef.current.x, mouseRef.current.y, 60 + Math.sin(step * 2) * 10, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(201, 154, 61, 0.35)";
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("touchmove", handleTouchMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeMode]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[580px] lg:min-h-[660px] bg-burgundy text-sand overflow-hidden flex items-center py-16"
    >
      {/* Background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto cursor-crosshair z-0"
      />

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(53,16,24,0.7)_100%)] pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Mode Switcher Chips */}
          <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-burgundy-dark/80 border border-sand/30 backdrop-blur-sm">
            <button
              onClick={() => setActiveMode("network")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeMode === "network"
                  ? "bg-sand text-burgundy font-bold shadow-sm"
                  : "text-sand/80 hover:text-sand"
              }`}
            >
              <Network className="w-3.5 h-3.5" />
              <span>Mode Jaringan</span>
            </button>
            <button
              onClick={() => setActiveMode("security")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeMode === "security"
                  ? "bg-sand text-burgundy font-bold shadow-sm"
                  : "text-sand/80 hover:text-sand"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-brass" />
              <span>Mode Keamanan</span>
            </button>
            <button
              onClick={() => setActiveMode("data")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeMode === "data"
                  ? "bg-sand text-burgundy font-bold shadow-sm"
                  : "text-sand/80 hover:text-sand"
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>Mode Data</span>
            </button>
          </div>

          {/* Headline - Single word accent avoided per rules! */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone leading-[1.15]">
            Arsitektur Teknologi Informasi & Keamanan Siber Terintegrasi Nasional
          </h1>

          {/* Body */}
          <p className="text-base sm:text-lg text-sand/90 font-normal leading-[1.65] max-w-2xl">
            {COMPANY_INFO.description}
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => openConsultModal("Konsultasi Infrastruktur & Keamanan")}
              className="px-7 py-3.5 rounded-full bg-brass hover:bg-brass-hover text-burgundy font-bold text-sm transition-all duration-200 shadow-brass-glow flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone"
            >
              <span>Jadwalkan Konsultasi</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="#tentang-kami-ringkasan"
              className="px-6 py-3.5 rounded-full border border-sand/50 text-stone font-semibold text-sm hover:bg-sand/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
            >
              Eksplor Solusi Kami
            </a>
          </div>

          {/* Key badge indicators */}
          <div className="pt-6 border-t border-sand/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium text-sand/80">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brass animate-pulse" />
              <span>SLA Uptime 99.9%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brass" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brass" />
              <span>Mitra Resmi BSSN</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brass" />
              <span>Support 24/7 Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
