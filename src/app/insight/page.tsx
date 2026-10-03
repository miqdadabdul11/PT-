"use client";

import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImageSlot } from "@/components/ImageSlot";
import { INSIGHTS_DATA } from "@/data/companyData";
import { ArrowUpRight, Clock, User } from "lucide-react";
import { useConsultModal } from "@/components/Providers";

export default function InsightListPage() {
  const { openConsultModal } = useConsultModal();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <Breadcrumb items={[{ label: "Insight & Artikel" }]} />

      <header className="space-y-3 max-w-3xl">
        <span className="px-3.5 py-1.5 rounded-full bg-sand/60 dark:bg-dark-surface font-semibold text-xs text-burgundy dark:text-sand">
          Wawasan Industri TI
        </span>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-burgundy dark:text-sand tracking-tight">
          Insight Teknologi & Keamanan Siber
        </h1>
        <p className="text-base text-charcoal/80 dark:text-dark-textMuted leading-[1.65]">
          Kumpulan tulisan praktis dan analisis mendalam dari praktisi PT AMANI mengenai mitigasi risiko siber, optimalisasi data bisnis, dan digitalisasi sektor publik.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {INSIGHTS_DATA.map((article) => (
          <article
            key={article.id}
            className="rounded-card-lg bg-stone-light dark:bg-dark-surface border border-sand/70 dark:border-dark-surfaceBorder p-6 flex flex-col justify-between shadow-subtle hover:shadow-elevated transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between text-[11px] text-charcoal/60 dark:text-dark-textMuted mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-sand/40 dark:bg-dark-surfaceBorder text-burgundy dark:text-sand font-semibold">
                  {article.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-brass" />
                  <span>{article.readTime}</span>
                </span>
              </div>

              <h2 className="font-heading text-xl font-bold text-burgundy dark:text-sand hover:text-wine transition-colors mb-3">
                <Link href={`/insight/${article.slug}`}>{article.title}</Link>
              </h2>

              <ImageSlot name={`Gambar Ilustrasi Artikel: ${article.title}`} ratio="16/9" />

              <p className="text-xs sm:text-sm text-charcoal/75 dark:text-dark-textMuted leading-relaxed line-clamp-3 mb-4">
                {article.excerpt}
              </p>

              <div className="flex items-center gap-2 text-xs text-charcoal/60 dark:text-dark-textMuted mb-4">
                <User className="w-3.5 h-3.5 text-brass" />
                <span>{article.author.name}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-sand/40 dark:border-dark-surfaceBorder flex items-center justify-between text-xs">
              <span className="text-charcoal/60 dark:text-dark-textMuted">
                {article.publishedAt}
              </span>
              <Link
                href={`/insight/${article.slug}`}
                className="font-bold text-burgundy dark:text-sand hover:underline flex items-center gap-1"
              >
                <span>Baca Lengkap</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Global CTA */}
      <div className="p-8 rounded-card-lg bg-burgundy text-stone shadow-elevated flex flex-col sm:flex-row items-center justify-between gap-6 border border-burgundy-light">
        <div>
          <h3 className="font-heading text-xl font-bold text-stone">
            Konsultasikan Masalah Siber & IT Organisasi Anda
          </h3>
          <p className="text-xs text-sand/90 mt-1">
            Penulis dan pakar teknis PT AMANI siap membantu menganalisis kendala Anda.
          </p>
        </div>
        <button
          onClick={() => openConsultModal("Insight Page - Konsultasi Topik")}
          className="px-6 py-3 rounded-full bg-brass hover:bg-brass-hover text-burgundy font-bold text-xs transition-all shadow-subtle flex items-center gap-1.5 whitespace-nowrap"
        >
          <span>Jadwalkan Sesi Konsultasi</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
