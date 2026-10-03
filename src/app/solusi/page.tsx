"use client";

import React from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SolutionCards } from "@/components/SolutionCards";

export default function SolusiListPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ label: "Solusi Industri" }]} />

      <header className="space-y-3 max-w-3xl">
        <span className="px-3.5 py-1.5 rounded-full bg-sand/60 dark:bg-dark-surface font-semibold text-xs text-burgundy dark:text-sand">
          Pendekatan Sektoral
        </span>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-burgundy dark:text-sand tracking-tight">
          Solusi Teknologi Sesuai Bidang Industri
        </h1>
        <p className="text-base text-charcoal/80 dark:text-dark-textMuted leading-[1.65]">
          Setiap sektor memiliki karakteristik operasional dan aturan regulasi yang berbeda. Klik kartu di bawah untuk mengeksplorasi tantangan, strategi, dan paket solusi teruji dari PT AMANI.
        </p>
      </header>

      <SolutionCards />
    </div>
  );
}
