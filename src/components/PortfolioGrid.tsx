"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, PortfolioItem } from "@/data/companyData";
import { useConsultModal } from "./Providers";
import { ImageSlot } from "./ImageSlot";
import { CheckCircle2, ArrowUpRight, Tag } from "lucide-react";

export const PortfolioGrid: React.FC<{ limit?: number }> = ({ limit }) => {
  const [filter, setFilter] = useState<string>("semua");
  const { openConsultModal } = useConsultModal();

  const categories = [
    { id: "semua", label: "Semua Sektor" },
    { id: "pendidikan", label: "Pendidikan" },
    { id: "perusahaan", label: "Perusahaan" },
    { id: "pemerintahan", label: "Pemerintahan" },
    { id: "umkm", label: "UMKM & Bisnis" },
  ];

  const filteredItems = PORTFOLIO_DATA.filter((item) => {
    if (filter === "semua") return true;
    return item.category === filter;
  }).slice(0, limit || PORTFOLIO_DATA.length);

  return (
    <div className="w-full my-8">
      {/* Category Tabs */}
      {!limit && (
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                filter === cat.id
                  ? "bg-burgundy text-sand dark:bg-brass dark:text-burgundy font-bold shadow-subtle"
                  : "bg-sand/40 dark:bg-dark-surface text-charcoal dark:text-dark-text hover:bg-sand/70 border border-sand/60 dark:border-dark-surfaceBorder"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Grid of Portfolio Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="rounded-card-lg bg-stone-light dark:bg-dark-surface border border-sand/70 dark:border-dark-surfaceBorder p-6 flex flex-col justify-between shadow-subtle hover:shadow-elevated transition-all duration-300"
          >
            <div>
              {/* Category & Year */}
              <div className="flex items-center justify-between text-[11px] font-semibold text-charcoal/60 dark:text-dark-textMuted mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-sand/50 dark:bg-dark-surfaceBorder text-burgundy dark:text-sand uppercase">
                  {item.categoryLabel}
                </span>
                <span>{item.year}</span>
              </div>

              {/* Title & Client */}
              <h3 className="font-heading text-lg font-bold text-burgundy dark:text-sand mb-1">
                {item.title}
              </h3>
              <p className="text-xs font-semibold text-brass mb-3">
                Klien: {item.client}
              </p>

              {/* ImageSlot placeholder */}
              <ImageSlot name={`Portofolio: ${item.title}`} ratio="16/9" />

              {/* Summary */}
              <p className="text-xs text-charcoal/80 dark:text-dark-text leading-relaxed mb-4">
                {item.summary}
              </p>

              {/* Key Impact */}
              <div className="space-y-1.5 mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal/60 dark:text-dark-textMuted block">
                  Dampak Nyata:
                </span>
                {item.impact.slice(0, 2).map((imp, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-xs text-charcoal dark:text-dark-text">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brass flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{imp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags & Action */}
            <div className="pt-4 border-t border-sand/40 dark:border-dark-surfaceBorder space-y-3">
              <div className="flex flex-wrap gap-1">
                {item.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-sand/30 dark:bg-dark-bg text-charcoal/70 dark:text-dark-textMuted"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => openConsultModal(`Portofolio Referensi: ${item.title}`)}
                className="w-full py-2.5 rounded-full border border-burgundy/40 dark:border-sand/40 text-burgundy dark:text-sand hover:bg-burgundy hover:text-stone dark:hover:bg-wine font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Diskusi Proyek Serupa</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
