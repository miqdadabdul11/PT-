"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SOLUTIONS_DATA, Solution } from "@/data/companyData";
import { useConsultModal } from "./Providers";
import { ChevronDown, CheckCircle2, ArrowUpRight, GraduationCap, Building2, Landmark, Store } from "lucide-react";

export const SolutionCards: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(SOLUTIONS_DATA[0].id);
  const { openConsultModal } = useConsultModal();

  const getIcon = (id: string) => {
    switch (id) {
      case "pendidikan":
        return <GraduationCap className="w-6 h-6 text-brass" />;
      case "perusahaan":
        return <Building2 className="w-6 h-6 text-brass" />;
      case "pemerintahan":
        return <Landmark className="w-6 h-6 text-brass" />;
      case "umkm":
      default:
        return <Store className="w-6 h-6 text-brass" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      {SOLUTIONS_DATA.map((solution) => {
        const isExpanded = expandedId === solution.id;
        return (
          <div
            key={solution.id}
            className={`rounded-card-lg border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
              isExpanded
                ? "bg-burgundy text-stone border-burgundy shadow-elevated dark:bg-dark-surface dark:border-wine"
                : "bg-stone-light dark:bg-dark-surface border-sand/70 dark:border-dark-surfaceBorder hover:border-sand-dark text-charcoal dark:text-dark-text shadow-subtle"
            }`}
          >
            {/* Header / Clickable Card Title */}
            <div
              onClick={() => setExpandedId(isExpanded ? "" : solution.id)}
              className="p-6 cursor-pointer flex items-start justify-between gap-4"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  setExpandedId(isExpanded ? "" : solution.id);
              }}
              aria-expanded={isExpanded}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    isExpanded
                      ? "bg-stone/10"
                      : "bg-sand/40 dark:bg-dark-surfaceBorder"
                  }`}
                >
                  {getIcon(solution.id)}
                </div>
                <div>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider ${
                      isExpanded ? "text-brass" : "text-burgundy dark:text-sand"
                    }`}
                  >
                    {solution.targetSector}
                  </span>
                  <h3
                    className={`font-heading text-xl font-bold mt-0.5 ${
                      isExpanded ? "text-stone" : "text-burgundy dark:text-sand"
                    }`}
                  >
                    {solution.title}
                  </h3>
                  <p
                    className={`text-xs mt-1 ${
                      isExpanded ? "text-sand/90" : "text-charcoal/70 dark:text-dark-textMuted"
                    }`}
                  >
                    {solution.subtitle}
                  </p>
                </div>
              </div>
              <button
                className={`p-2 rounded-full transition-transform duration-300 ${
                  isExpanded ? "rotate-180 bg-stone/20 text-stone" : "bg-sand/30 text-charcoal/70"
                }`}
                aria-label="Expand solusi"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            {/* Expandable Content */}
            {isExpanded && (
              <div className="px-6 pb-6 pt-2 border-t border-sand/20 dark:border-dark-surfaceBorder space-y-5 animate-fadeIn">
                {/* Tantangan & Solusi */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brass mb-2">
                    Tantangan Utama Sektor
                  </h4>
                  <ul className="space-y-1.5 text-xs text-sand/90">
                    {solution.challenges.map((c, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brass mt-1.5 flex-shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pendekatan AMANI */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brass mb-1">
                    Pendekatan Strategis PT AMANI
                  </h4>
                  <p className="text-xs text-sand/90 leading-relaxed">
                    {solution.approach}
                  </p>
                </div>

                {/* Hasil & Dampak */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brass mb-2">
                    Hasil Yang Dicapai Klien
                  </h4>
                  <div className="space-y-1.5">
                    {solution.results.map((r, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-stone font-medium">
                        <CheckCircle2 className="w-4 h-4 text-brass flex-shrink-0" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex items-center justify-between gap-3 border-t border-sand/20">
                  <Link
                    href={`/solusi/${solution.slug}`}
                    className="text-xs font-bold text-sand hover:text-stone underline underline-offset-4"
                  >
                    Halaman Lengkap Solusi
                  </Link>

                  <button
                    onClick={() => openConsultModal(`Solusi: ${solution.title}`)}
                    className="px-5 py-2.5 rounded-full bg-brass hover:bg-brass-hover text-burgundy font-bold text-xs transition-all shadow-subtle flex items-center gap-1.5"
                  >
                    <span>Konsultasi Solusi Ini</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
