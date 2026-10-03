"use client";

import React from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImageSlot } from "@/components/ImageSlot";
import { useConsultModal } from "@/components/Providers";
import { COMPANY_INFO } from "@/data/companyData";
import { ShieldCheck, Award, FileCheck, ArrowUpRight } from "lucide-react";

export default function LegalitasPartnershipPage() {
  const { openConsultModal } = useConsultModal();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <Breadcrumb
        items={[
          { label: "Tentang Kami", href: "/tentang-kami/profil-perusahaan" },
          { label: "Legalitas & Kemitraan" },
        ]}
      />

      <header className="space-y-3">
        <span className="px-3.5 py-1.5 rounded-full bg-sand/60 dark:bg-dark-surface font-semibold text-xs text-burgundy dark:text-sand">
          Kepatuhan & Sertifikasi
        </span>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-burgundy dark:text-sand tracking-tight">
          Legalitas Perusahaan & Mitra Strategis
        </h1>
        <p className="text-base text-charcoal/80 dark:text-dark-textMuted max-w-prose">
          PT AMANI beroperasi sepenuhnya secara sah berlandaskan hukum Republik Indonesia dan memegang sertifikasi kepatuhan sistem informasi bernilai internasional.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-card bg-stone-light dark:bg-dark-surface border border-sand/70 dark:border-dark-surfaceBorder space-y-3">
          <div className="flex items-center gap-2 text-burgundy dark:text-sand">
            <FileCheck className="w-5 h-5 text-brass" />
            <h3 className="font-heading text-lg font-bold">Identitas Legalitas PT</h3>
          </div>
          <ul className="space-y-2 text-xs text-charcoal/80 dark:text-dark-textMuted">
            <li><strong>Nama Badan Hukum:</strong> {COMPANY_INFO.legalName}</li>
            <li><strong>NIB (Nomor Induk Berusaha):</strong> 9120408123491</li>
            <li><strong>NPWP:</strong> 81.340.912.4-015.000</li>
            <li><strong>Izin Operasional Kominfo:</strong> Terdaftar PSE Privat RI</li>
          </ul>
        </div>

        <div className="p-6 rounded-card bg-stone-light dark:bg-dark-surface border border-sand/70 dark:border-dark-surfaceBorder space-y-3">
          <div className="flex items-center gap-2 text-burgundy dark:text-sand">
            <Award className="w-5 h-5 text-brass" />
            <h3 className="font-heading text-lg font-bold">Sertifikasi Internasional</h3>
          </div>
          <ul className="space-y-2 text-xs text-charcoal/80 dark:text-dark-textMuted">
            {COMPANY_INFO.certifications.map((c, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brass mt-1.5 flex-shrink-0" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ImageSlot
        name="Dokumen Sertifikasi ISO & Kemitraan Vendor TI Global"
        ratio="16/9"
        caption="PT AMANI memegang status kemitraan resmi dengan principal teknologi global ternama."
      />

      {/* CTA Box */}
      <div className="p-8 rounded-card-lg bg-burgundy text-stone shadow-elevated flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-heading text-xl font-bold text-stone">
            Verifikasi Dokumen Legalitas & Penawaran Kerjasama
          </h3>
          <p className="text-xs text-sand/90 mt-1">
            Hubungi divisi legal & business development kami untuk informasi lebih lanjut.
          </p>
        </div>
        <button
          onClick={() => openConsultModal("Legalitas - Permintaan Dokumen")}
          className="px-6 py-3 rounded-full bg-brass hover:bg-brass-hover text-burgundy font-bold text-xs transition-all shadow-subtle flex items-center gap-1.5 whitespace-nowrap"
        >
          <span>Minta Penawaran Resmi</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
