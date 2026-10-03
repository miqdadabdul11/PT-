"use client";

import React from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImageSlot } from "@/components/ImageSlot";
import { useConsultModal } from "@/components/Providers";
import { CheckCircle2, ArrowUpRight, Compass, Target } from "lucide-react";

export default function VisiMisiPage() {
  const { openConsultModal } = useConsultModal();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <Breadcrumb
        items={[
          { label: "Tentang Kami", href: "/tentang-kami/profil-perusahaan" },
          { label: "Visi & Misi" },
        ]}
      />

      <header className="space-y-3">
        <span className="px-3.5 py-1.5 rounded-full bg-sand/60 dark:bg-dark-surface font-semibold text-xs text-burgundy dark:text-sand">
          Arah Strategis
        </span>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-burgundy dark:text-sand tracking-tight">
          Visi & Misi PT AMANI
        </h1>
        <p className="text-base text-charcoal/80 dark:text-dark-textMuted max-w-prose">
          Panduan nilai dan arah pengembangan teknologi berkelanjutan untuk mendukung kedaulatan digital Indonesia.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-card-lg bg-burgundy text-stone space-y-4 shadow-elevated border border-burgundy-light">
          <div className="w-12 h-12 rounded-full bg-stone/10 flex items-center justify-center">
            <Compass className="w-6 h-6 text-brass" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-stone">Visi Perusahaan</h2>
          <p className="text-sm text-sand/90 leading-[1.65]">
            &ldquo;Menjadi penyedia solusi infrastruktur jaringan, perangkat lunak kustom, dan keamanan siber terdepan yang paling tepercaya di Asia Tenggara pada tahun 2030, mewujudkan ekosistem digital berdaya saing tinggi dan aman bagi seluruh mitra bisnis.&rdquo;
          </p>
        </div>

        <div className="p-8 rounded-card-lg bg-stone-light dark:bg-dark-surface border border-sand/70 dark:border-dark-surfaceBorder space-y-4 shadow-subtle">
          <div className="w-12 h-12 rounded-full bg-sand/40 dark:bg-dark-surfaceBorder flex items-center justify-center">
            <Target className="w-6 h-6 text-brass" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-burgundy dark:text-sand">Misi Perusahaan</h2>
          <ul className="space-y-3 text-xs sm:text-sm text-charcoal/80 dark:text-dark-textMuted">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brass flex-shrink-0 mt-1" />
              <span>Menyajikan arsitektur jaringan tinggi keandalan dengan standar SLA 99.9%.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brass flex-shrink-0 mt-1" />
              <span>Mengembangkan produk perangkat lunak intuitif yang menyelesaikan masalah nyata klien.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brass flex-shrink-0 mt-1" />
              <span>Memberikan perlindungan siber proaktif berbasis standar audit internasional ISO 27001.</span>
            </li>
          </ul>
        </div>
      </div>

      <ImageSlot
        name="Nilai Utama & Budaya Kerja PT AMANI"
        ratio="16/9"
        caption="Integritas, inovasi tanpa henti, dan ketaatan standar mutu menjadi fondasi setiap proyek kami."
      />

      {/* CTA Box */}
      <div className="p-8 rounded-card-lg bg-burgundy text-stone shadow-elevated flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-heading text-xl font-bold text-stone">
            Diskusi Proyek Berdasarkan Nilai Kemitraan
          </h3>
          <p className="text-xs text-sand/90 mt-1">
            Wujudkan target digitalisasi organisasi Anda bersama PT AMANI.
          </p>
        </div>
        <button
          onClick={() => openConsultModal("Visi Misi - Diskusi Kemitraan")}
          className="px-6 py-3 rounded-full bg-brass hover:bg-brass-hover text-burgundy font-bold text-xs transition-all shadow-subtle flex items-center gap-1.5 whitespace-nowrap"
        >
          <span>Konsultasi Bebas Biaya</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
