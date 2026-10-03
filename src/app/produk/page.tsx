"use client";

import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImageSlot } from "@/components/ImageSlot";
import { useConsultModal } from "@/components/Providers";
import { PRODUCTS_DATA } from "@/data/companyData";
import { CheckCircle2, ArrowUpRight, ChevronRight } from "lucide-react";

export default function ProdukListPage() {
  const { openConsultModal } = useConsultModal();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <Breadcrumb items={[{ label: "Produk Perangkat Lunak" }]} />

      <header className="space-y-3 max-w-3xl">
        <span className="px-3.5 py-1.5 rounded-full bg-sand/60 dark:bg-dark-surface font-semibold text-xs text-burgundy dark:text-sand">
          Ekosistem SaaS & Aplikasi
        </span>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-burgundy dark:text-sand tracking-tight">
          Produk Perangkat Lunak PT AMANI
        </h1>
        <p className="text-base text-charcoal/80 dark:text-dark-textMuted leading-[1.65]">
          Solusi perangkat lunak siap pakai dan berbasis cloud yang dirancang spesifik untuk menjawab tantangan efisiensi administrasi sekolah, kolaborasi proyek, serta survei analisis data.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRODUCTS_DATA.map((product) => (
          <div
            key={product.id}
            className="rounded-card-lg bg-stone-light dark:bg-dark-surface border border-sand/70 dark:border-dark-surfaceBorder p-6 sm:p-8 flex flex-col justify-between shadow-subtle hover:shadow-elevated transition-all duration-300"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sand/40 dark:bg-dark-surfaceBorder text-burgundy dark:text-sand inline-block mb-4">
                {product.badge}
              </span>
              <h2 className="font-heading text-2xl font-bold text-burgundy dark:text-sand mb-2">
                {product.name}
              </h2>
              <p className="text-xs font-semibold text-brass mb-3">
                {product.tagline}
              </p>

              <ImageSlot name={`Tampilan Antarmuka ${product.name}`} ratio="16/9" />

              <p className="text-xs sm:text-sm text-charcoal/80 dark:text-dark-textMuted leading-relaxed mb-6">
                {product.shortDesc}
              </p>

              <div className="space-y-2 mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal/60 dark:text-dark-textMuted block">
                  Fitur Utama:
                </span>
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-charcoal dark:text-dark-text">
                    <CheckCircle2 className="w-4 h-4 text-brass flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-sand/40 dark:border-dark-surfaceBorder space-y-3">
              <Link
                href={`/produk/${product.slug}`}
                className="w-full py-3 rounded-full bg-burgundy hover:bg-wine text-stone font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Pelajari Selengkapnya</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => openConsultModal(`Demo Produk: ${product.name}`)}
                className="w-full py-3 rounded-full bg-brass hover:bg-brass-hover text-burgundy font-bold text-xs transition-all shadow-subtle flex items-center justify-center gap-1.5"
              >
                <span>Minta Demo & Penawaran</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
