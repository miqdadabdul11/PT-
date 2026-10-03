"use client";

import React from "react";
import { Service } from "@/data/companyData";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImageSlot } from "@/components/ImageSlot";
import { useConsultModal } from "@/components/Providers";
import { CheckCircle2, ArrowUpRight, ShieldCheck, Clock } from "lucide-react";

export const ServiceClientPage: React.FC<{ service: Service }> = ({ service }) => {
  const { openConsultModal } = useConsultModal();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <Breadcrumb
        items={[
          { label: "Layanan", href: "/layanan" },
          { label: service.title },
        ]}
      />

      <header className="space-y-4">
        <span className="px-3.5 py-1.5 rounded-full bg-sand/60 dark:bg-dark-surface font-semibold text-xs text-burgundy dark:text-sand">
          Kategori: {service.category}
        </span>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-burgundy dark:text-sand tracking-tight">
          {service.title}
        </h1>
        <p className="text-sm sm:text-base text-charcoal/80 dark:text-dark-textMuted max-w-prose leading-[1.65]">
          {service.overview}
        </p>
      </header>

      <ImageSlot
        name={`Pelaksanaan Layanan: ${service.title}`}
        ratio="16/9"
        caption={`Implementasi proyek ${service.title} oleh spesialis teknis PT AMANI.`}
      />

      {/* Scope & Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-card bg-stone-light dark:bg-dark-surface border border-sand/70 dark:border-dark-surfaceBorder space-y-4">
          <h2 className="font-heading text-xl font-bold text-burgundy dark:text-sand">
            Cakupan Pekerjaan Lengkap
          </h2>
          <ul className="space-y-3">
            {service.scope.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal dark:text-dark-text">
                <CheckCircle2 className="w-4 h-4 text-brass flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-card bg-stone-light dark:bg-dark-surface border border-sand/70 dark:border-dark-surfaceBorder space-y-4">
          <h2 className="font-heading text-xl font-bold text-burgundy dark:text-sand">
            Manfaat & Nilai Tambah
          </h2>
          <ul className="space-y-3">
            {service.benefits.map((ben, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal dark:text-dark-text">
                <CheckCircle2 className="w-4 h-4 text-brass flex-shrink-0 mt-0.5" />
                <span>{ben}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Process Workflow */}
      <div className="space-y-4">
        <h2 className="font-heading text-2xl font-bold text-burgundy dark:text-sand">
          Tahapan & Alur Pelaksanaan Proyek
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {service.process.map((stepItem, idx) => (
            <div
              key={idx}
              className="p-5 rounded-card bg-sand/30 dark:bg-dark-surface border border-sand/60 dark:border-dark-surfaceBorder space-y-2"
            >
              <span className="text-[11px] font-bold text-brass uppercase">
                Tahap 0{idx + 1}
              </span>
              <h3 className="font-heading text-base font-bold text-burgundy dark:text-sand">
                {stepItem.step}
              </h3>
              <p className="text-xs text-charcoal/75 dark:text-dark-textMuted leading-relaxed">
                {stepItem.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Deliverables */}
      <div className="p-6 rounded-card bg-stone-light dark:bg-dark-surface border border-sand/70 dark:border-dark-surfaceBorder space-y-3">
        <h3 className="font-heading text-lg font-bold text-burgundy dark:text-sand">
          Luaran Proyek (Deliverables):
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-charcoal dark:text-dark-text">
          {service.deliverables.map((del, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brass flex-shrink-0" />
              <span>{del}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Subpage CTA pre-selecting topic */}
      <div className="p-8 rounded-card-lg bg-burgundy text-stone shadow-elevated flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-heading text-xl font-bold text-stone">
            Tertarik Menggunakan Layanan {service.title}?
          </h3>
          <p className="text-xs text-sand/90 mt-1">
            Konsultasikan gratis ruang lingkup dan estimasi anggaran bersama pakar PT AMANI.
          </p>
        </div>
        <button
          onClick={() => openConsultModal(`Layanan: ${service.title}`)}
          className="px-6 py-3 rounded-full bg-brass hover:bg-brass-hover text-burgundy font-bold text-xs transition-all shadow-subtle flex items-center gap-1.5 whitespace-nowrap"
        >
          <span>Tanya Layanan Ini</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
