"use client";

import React from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ServiceExplorer } from "@/components/ServiceExplorer";

export default function LayananMasterPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ label: "Layanan Teknologi" }]} />

      <header className="space-y-3 max-w-3xl">
        <span className="px-3.5 py-1.5 rounded-full bg-sand/60 dark:bg-dark-surface font-semibold text-xs text-burgundy dark:text-sand">
          Penjelajah Layanan Interactive
        </span>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-burgundy dark:text-sand tracking-tight">
          Cakupan Layanan IT & Keamanan Siber
        </h1>
        <p className="text-base text-charcoal/80 dark:text-dark-textMuted leading-[1.65]">
          Pilih salah satu dari 9 domain spesialisasi di panel kiri untuk mengeksplorasi cakupan kerja, tahapan eksekusi, serta luaran proyek yang dihasilkan.
        </p>
      </header>

      <ServiceExplorer />
    </div>
  );
}
