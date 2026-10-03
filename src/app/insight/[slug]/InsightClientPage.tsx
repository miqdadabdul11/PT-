"use client";

import React from "react";
import { InsightItem } from "@/data/companyData";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImageSlot } from "@/components/ImageSlot";
import { useConsultModal } from "@/components/Providers";
import { Clock, User, ArrowUpRight, Tag } from "lucide-react";

export const InsightClientPage: React.FC<{ article: InsightItem }> = ({ article }) => {
  const { openConsultModal } = useConsultModal();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <Breadcrumb
        items={[
          { label: "Insight", href: "/insight" },
          { label: article.title },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3 text-xs">
          <span className="px-3.5 py-1 rounded-full bg-sand/60 dark:bg-dark-surface font-semibold text-burgundy dark:text-sand">
            {article.category}
          </span>
          <span className="text-charcoal/60 dark:text-dark-textMuted flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-brass" />
            <span>{article.readTime}</span>
          </span>
          <span className="text-charcoal/60 dark:text-dark-textMuted">
            &bull; {article.publishedAt}
          </span>
        </div>

        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-burgundy dark:text-sand tracking-tight leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center gap-3 p-3 rounded-2xl bg-sand/30 dark:bg-dark-surface border border-sand/50 dark:border-dark-surfaceBorder text-xs text-charcoal/80 dark:text-dark-text">
          <div className="w-8 h-8 rounded-full bg-brass/20 text-brass flex items-center justify-center font-bold">
            <User className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-burgundy dark:text-sand">{article.author.name}</p>
            <p className="text-[11px] text-charcoal/60 dark:text-dark-textMuted">{article.author.role}</p>
          </div>
        </div>
      </header>

      <ImageSlot
        name={`Gambar Utama: ${article.title}`}
        ratio="16/9"
        caption={article.excerpt}
      />

      {/* Main Article Content */}
      <article className="prose dark:prose-invert max-w-none text-charcoal/90 dark:text-dark-text text-sm sm:text-base leading-[1.75] space-y-4">
        {article.content.split("\n\n").map((paragraph, idx) => {
          if (paragraph.startsWith("### ")) {
            return (
              <h3 key={idx} className="font-heading text-xl font-bold text-burgundy dark:text-sand mt-6 mb-2">
                {paragraph.replace("### ", "")}
              </h3>
            );
          }
          return <p key={idx}>{paragraph}</p>;
        })}
      </article>

      {/* Article Tags */}
      <div className="pt-6 border-t border-sand/40 dark:border-dark-surfaceBorder flex flex-wrap items-center gap-2">
        <Tag className="w-4 h-4 text-brass" />
        {article.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs px-3 py-1 rounded-full bg-sand/40 dark:bg-dark-surface text-charcoal dark:text-dark-text font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Subpage CTA pre-selecting topic */}
      <div className="p-8 rounded-card-lg bg-burgundy text-stone shadow-elevated flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-heading text-xl font-bold text-stone">
            Konsultasikan Implementasi Topik Ini Pada Organisasi Anda
          </h3>
          <p className="text-xs text-sand/90 mt-1">
            Penulis artikel dan tim spesialis PT AMANI siap mendampingi eksekusi teknis.
          </p>
        </div>
        <button
          onClick={() => openConsultModal(`Artikel: ${article.title}`)}
          className="px-6 py-3 rounded-full bg-brass hover:bg-brass-hover text-burgundy font-bold text-xs transition-all shadow-subtle flex items-center gap-1.5 whitespace-nowrap"
        >
          <span>Diskusi Bersama Penulis</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
