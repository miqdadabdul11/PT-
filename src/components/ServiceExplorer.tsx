"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SERVICES_DATA, Service } from "@/data/companyData";
import { useConsultModal } from "./Providers";
import { CheckCircle2, ArrowRight, ArrowUpRight, Layers, ShieldCheck, Cpu } from "lucide-react";

interface ServiceExplorerProps {
  initialSlug?: string;
}

export const ServiceExplorer: React.FC<ServiceExplorerProps> = ({ initialSlug }) => {
  const [selectedSlug, setSelectedSlug] = useState<string>(
    initialSlug || SERVICES_DATA[0].slug
  );
  const { openConsultModal } = useConsultModal();

  const activeService =
    SERVICES_DATA.find((s) => s.slug === selectedSlug) || SERVICES_DATA[0];

  return (
    <div className="w-full my-8">
      {/* Category Filter Badges */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
        <span className="text-xs font-semibold text-charcoal/60 dark:text-dark-textMuted uppercase mr-2 flex-shrink-0">
          Filter Bidang:
        </span>
        {Array.from(new Set(SERVICES_DATA.map((s) => s.category))).map((cat) => (
          <button
            key={cat}
            onClick={() => {
              const firstInCat = SERVICES_DATA.find((s) => s.category === cat);
              if (firstInCat) setSelectedSlug(firstInCat.slug);
            }}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sand/50 dark:bg-dark-surface hover:bg-sand dark:hover:bg-wine/40 text-charcoal dark:text-dark-text border border-sand/70 dark:border-dark-surfaceBorder whitespace-nowrap transition-colors"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Master-Detail Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Master List (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/60 dark:text-dark-textMuted mb-2">
            Pilih Layanan Spesifik ({SERVICES_DATA.length}):
          </p>

          <div className="space-y-3">
            {SERVICES_DATA.map((service) => {
              const isSelected = service.slug === selectedSlug;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedSlug(service.slug)}
                  className={`p-5 rounded-card cursor-pointer transition-all duration-200 border text-left ${
                    isSelected
                      ? "bg-burgundy text-stone border-burgundy shadow-elevated dark:bg-wine dark:border-wine"
                      : "bg-stone-light dark:bg-dark-surface border-sand/60 dark:border-dark-surfaceBorder hover:border-sand-dark text-charcoal dark:text-dark-text shadow-subtle"
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setSelectedSlug(service.slug);
                  }}
                  aria-selected={isSelected}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-stone/20 text-brass"
                          : "bg-sand/60 dark:bg-dark-surfaceBorder text-burgundy dark:text-sand"
                      }`}
                    >
                      {service.category}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? "text-brass translate-x-1" : "text-charcoal/40"
                      }`}
                    />
                  </div>
                  <h3
                    className={`font-heading text-lg font-bold ${
                      isSelected ? "text-stone" : "text-burgundy dark:text-sand"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-xs mt-1 line-clamp-2 ${
                      isSelected ? "text-sand/90" : "text-charcoal/70 dark:text-dark-textMuted"
                    }`}
                  >
                    {service.shortDesc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Sticky Detail Pane (7 cols) */}
        <div className="lg:col-span-7 lg:sticky lg:top-28">
          <div className="bg-stone-light dark:bg-dark-surface border border-sand/80 dark:border-dark-surfaceBorder rounded-card-lg p-6 sm:p-8 shadow-elevated space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-sand/50 dark:border-dark-surfaceBorder">
              <div>
                <span className="text-xs font-semibold text-brass uppercase tracking-wider">
                  Detail Layanan Terpilih
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-burgundy dark:text-sand mt-1">
                  {activeService.title}
                </h2>
              </div>
              <Link
                href={`/layanan/${activeService.slug}`}
                className="px-3.5 py-1.5 rounded-full bg-sand/40 dark:bg-dark-surfaceBorder hover:bg-sand text-xs font-semibold text-burgundy dark:text-sand flex items-center gap-1 transition-colors"
                title="Buka halaman penuh layanan ini"
              >
                <span>Halaman Detail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/60 dark:text-dark-textMuted mb-2">
                Gambaran Umum & Tujuan
              </h4>
              <p className="text-sm text-charcoal/90 dark:text-dark-text leading-[1.65]">
                {activeService.overview}
              </p>
            </div>

            {/* Scope */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/60 dark:text-dark-textMuted mb-3">
                Cakupan Kerja Utama
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {activeService.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brass flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80 dark:text-dark-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/60 dark:text-dark-textMuted mb-3">
                Metode & Alur Kerja
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeService.process.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-sand/30 dark:bg-dark-bg/60 border border-sand/40 dark:border-dark-surfaceBorder"
                  >
                    <span className="text-[10px] font-bold text-brass uppercase">
                      Langkah {idx + 1}
                    </span>
                    <h5 className="text-xs font-bold text-burgundy dark:text-sand mb-1">
                      {p.step}
                    </h5>
                    <p className="text-[11px] text-charcoal/70 dark:text-dark-textMuted leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA action pre-filling topic */}
            <div className="pt-4 border-t border-sand/50 dark:border-dark-surfaceBorder flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-burgundy dark:text-sand">
                  Tertarik mengimplementasikan layanan ini?
                </p>
                <p className="text-[11px] text-charcoal/70 dark:text-dark-textMuted">
                  Konsultasikan gratis bersama konsultan spesialis kami.
                </p>
              </div>
              <button
                onClick={() => openConsultModal(`Layanan: ${activeService.title}`)}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-brass hover:bg-brass-hover text-burgundy font-bold text-xs transition-all shadow-subtle flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
              >
                <span>Tanya Layanan Ini</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
