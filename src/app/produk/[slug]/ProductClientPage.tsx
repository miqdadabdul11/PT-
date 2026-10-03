"use client";

import React from "react";
import { Product } from "@/data/companyData";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImageSlot } from "@/components/ImageSlot";
import { useConsultModal } from "@/components/Providers";
import { CheckCircle2, ArrowUpRight, ShieldCheck, Users } from "lucide-react";

export const ProductClientPage: React.FC<{ product: Product }> = ({ product }) => {
  const { openConsultModal } = useConsultModal();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <Breadcrumb
        items={[
          { label: "Produk", href: "/produk" },
          { label: product.name },
        ]}
      />

      <header className="space-y-4">
        <span className="px-3.5 py-1.5 rounded-full bg-sand/60 dark:bg-dark-surface font-semibold text-xs text-burgundy dark:text-sand">
          {product.badge}
        </span>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-burgundy dark:text-sand tracking-tight">
          {product.name}
        </h1>
        <p className="text-lg font-semibold text-brass">
          {product.tagline}
        </p>
        <p className="text-sm sm:text-base text-charcoal/80 dark:text-dark-textMuted max-w-prose leading-[1.65]">
          {product.fullDesc}
        </p>
      </header>

      <ImageSlot
        name={`Maket Antarmuka Dasbor ${product.name}`}
        ratio="16/9"
        caption={`Tampilan dasbor utama ${product.name} yang responsif dan intuitif.`}
      />

      {/* Benefits & Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-card bg-stone-light dark:bg-dark-surface border border-sand/70 dark:border-dark-surfaceBorder space-y-4">
          <h2 className="font-heading text-xl font-bold text-burgundy dark:text-sand">
            Fitur Unggulan Sistem
          </h2>
          <ul className="space-y-3">
            {product.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal dark:text-dark-text">
                <CheckCircle2 className="w-4 h-4 text-brass flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-card bg-stone-light dark:bg-dark-surface border border-sand/70 dark:border-dark-surfaceBorder space-y-4">
          <h2 className="font-heading text-xl font-bold text-burgundy dark:text-sand">
            Manfaat Langsung Klien
          </h2>
          <ul className="space-y-3">
            {product.benefits.map((ben, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal dark:text-dark-text">
                <CheckCircle2 className="w-4 h-4 text-brass flex-shrink-0 mt-0.5" />
                <span>{ben}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Target Users */}
      <div className="p-6 rounded-card bg-sand/30 dark:bg-dark-surface/40 border border-sand/60 dark:border-dark-surfaceBorder space-y-3">
        <h3 className="font-heading text-base font-bold text-burgundy dark:text-sand">
          Target Pengguna Ideal:
        </h3>
        <div className="flex flex-wrap gap-2">
          {product.targetUsers.map((user, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-stone dark:bg-dark-surface border border-sand/60 dark:border-dark-surfaceBorder text-xs font-semibold text-charcoal dark:text-dark-text"
            >
              {user}
            </span>
          ))}
        </div>
      </div>

      {/* Subpage CTA pre-selecting topic */}
      <div className="p-8 rounded-card-lg bg-burgundy text-stone shadow-elevated flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-heading text-xl font-bold text-stone">
            Minta Penawaran Lisensi & Uji Coba Demo {product.name}
          </h3>
          <p className="text-xs text-sand/90 mt-1">
            Tim spesialis produk PT AMANI siap membantu penyiapan akun demo gratis.
          </p>
        </div>
        <button
          onClick={() => openConsultModal(`Produk: ${product.name}`)}
          className="px-6 py-3 rounded-full bg-brass hover:bg-brass-hover text-burgundy font-bold text-xs transition-all shadow-subtle flex items-center gap-1.5 whitespace-nowrap"
        >
          <span>Minta Demo & Konsultasi</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
