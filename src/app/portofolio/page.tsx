"use client";

import React from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { useConsultModal } from "@/components/Providers";
import { ArrowUpRight } from "lucide-react";

export default function PortofolioPage() {
  const { openConsultModal } = useConsultModal();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <Breadcrumb items={[{ label: "Portofolio & Studi Kasus" }]} />

      <header className="space-y-3 max-w-3xl">
        <span className="px-3.5 py-1.5 rounded-full bg-sand/60 dark:bg-dark-surface font-semibold text-xs text-burgundy dark:text-sand">
          Rekam Jejak Eksekusi
        </span>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-burgundy dark:text-sand tracking-tight">
          Portofolio Proyek PT AMANI
        </h1>
        <p className="text-base text-charcoal/80 dark:text-dark-textMuted leading-[1.65]">
          Eksplorasi implementasi nyata dari solusi infrastruktur, software kustom, audit keamanan siber, dan analisis data yang telah kami kerjakan untuk berbagai industri.
        </p>
      </header>

      <PortfolioGrid />

      {/* Global CTA */}
      <div className="p-8 rounded-card-lg bg-burgundy text-stone shadow-elevated flex flex-col sm:flex-row items-center justify-between gap-6 border border-burgundy-light">
        <div>
          <h3 className="font-heading text-xl font-bold text-stone">
            Ingin Mengukur Kebutuhan Proyek Serupa?
          </h3>
          <p className="text-xs text-sand/90 mt-1">
            Tim teknis kami dapat melakukan studi kelayakan dan estimasi awal gratis.
          </p>
        </div>
        <button
          onClick={() => openConsultModal("Portofolio Page - Tanya Proyek")}
          className="px-6 py-3 rounded-full bg-brass hover:bg-brass-hover text-burgundy font-bold text-xs transition-all shadow-subtle flex items-center gap-1.5 whitespace-nowrap"
        >
          <span>Diskusi Rencana Proyek</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
