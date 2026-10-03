"use client";

import React from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImageSlot } from "@/components/ImageSlot";
import { useConsultModal } from "@/components/Providers";
import { SOLUTIONS_DATA } from "@/data/companyData";
import { CheckCircle2, ArrowUpRight, Landmark } from "lucide-react";

export default function SolusiPemerintahanPage() {
  const { openConsultModal } = useConsultModal();
  const solution = SOLUTIONS_DATA.find((s) => s.id === "pemerintahan")!;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <Breadcrumb
        items={[
          { label: "Solusi", href: "/solusi" },
          { label: solution.title },
        ]}
      />

      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/60 dark:bg-dark-surface text-xs font-bold text-burgundy dark:text-sand">
          <Landmark className="w-4 h-4 text-brass" />
          <span>{solution.targetSector}</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-burgundy dark:text-sand tracking-tight">
          {solution.title}
        </h1>
        <p className="text-lg font-semibold text-brass">
          {solution.subtitle}
        </p>
        <p className="text-sm sm:text-base text-charcoal/80 dark:text-dark-textMuted max-w-prose leading-[1.65]">
          {solution.approach}
        </p>
      </header>

      <ImageSlot
        name="Aplikasi Survei AmaniPulse & Audit SPBE Instansi Pemerintah"
        ratio="16/9"
        caption="Pendataan publik terenkripsi dan audit ketaatan SPBE Kementerian/Dinas."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-card bg-stone-light dark:bg-dark-surface border border-sand/70 dark:border-dark-surfaceBorder space-y-4">
          <h2 className="font-heading text-xl font-bold text-burgundy dark:text-sand">
            Tantangan Pelayanan Publik & SPBE
          </h2>
          <ul className="space-y-3">
            {solution.challenges.map((c, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal dark:text-dark-text">
                <span className="w-2 h-2 rounded-full bg-brass mt-1.5 flex-shrink-0" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-card bg-stone-light dark:bg-dark-surface border border-sand/70 dark:border-dark-surfaceBorder space-y-4">
          <h2 className="font-heading text-xl font-bold text-burgundy dark:text-sand">
            Hasil & Akuntabilitas SPBE
          </h2>
          <ul className="space-y-3">
            {solution.results.map((r, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal dark:text-dark-text">
                <CheckCircle2 className="w-4 h-4 text-brass flex-shrink-0 mt-0.5" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Subpage CTA */}
      <div className="p-8 rounded-card-lg bg-burgundy text-stone shadow-elevated flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-heading text-xl font-bold text-stone">
            Dukung Akselerasi SPBE & Audit ISO 27001 Dinas Anda
          </h3>
          <p className="text-xs text-sand/90 mt-1">
            Tim konsultan SPBE & Cyber Security PT AMANI siap mendampingi.
          </p>
        </div>
        <button
          onClick={() => openConsultModal(`Solusi: ${solution.title}`)}
          className="px-6 py-3 rounded-full bg-brass hover:bg-brass-hover text-burgundy font-bold text-xs transition-all shadow-subtle flex items-center gap-1.5 whitespace-nowrap"
        >
          <span>Konsultasi Solusi SPBE</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
