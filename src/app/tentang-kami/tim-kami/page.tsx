"use client";

import React from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImageSlot } from "@/components/ImageSlot";
import { useConsultModal } from "@/components/Providers";
import { COMPANY_INFO } from "@/data/companyData";
import { Users, Shield, ArrowUpRight } from "lucide-react";

export default function TimKamiPage() {
  const { openConsultModal } = useConsultModal();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <Breadcrumb
        items={[
          { label: "Tentang Kami", href: "/tentang-kami/profil-perusahaan" },
          { label: "Tim Kami" },
        ]}
      />

      <header className="space-y-3">
        <span className="px-3.5 py-1.5 rounded-full bg-sand/60 dark:bg-dark-surface font-semibold text-xs text-burgundy dark:text-sand">
          Kepemimpinan & Ahli
        </span>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-burgundy dark:text-sand tracking-tight">
          Tim Ahli & Manajemen PT AMANI
        </h1>
        <p className="text-base text-charcoal/80 dark:text-dark-textMuted max-w-prose">
          Didukung oleh 45+ profesional bersertifikasi internasional di bidang arsitektur awan, pengembangan software, dan keamanan siber.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {COMPANY_INFO.leadership.map((leader, idx) => (
          <div
            key={idx}
            className="p-6 rounded-card-lg bg-stone-light dark:bg-dark-surface border border-sand/70 dark:border-dark-surfaceBorder space-y-4 shadow-subtle"
          >
            <ImageSlot name={`Foto: ${leader.name}`} ratio="1/1" />
            <div>
              <h3 className="font-heading text-lg font-bold text-burgundy dark:text-sand">
                {leader.name}
              </h3>
              <p className="text-xs font-semibold text-brass mb-2">{leader.role}</p>
              <p className="text-xs text-charcoal/80 dark:text-dark-textMuted leading-relaxed">
                {leader.bio}
              </p>
            </div>
          </div>
        ))}
      </div>

      <ImageSlot
        name="Tim Teknisi Operasional & Helpdesk 24/7 PT AMANI"
        ratio="16/9"
        caption="Tim helpdesk dan teknisi lapangan PT AMANI saat beroperasi di pusat kendali."
      />

      {/* CTA Box */}
      <div className="p-8 rounded-card-lg bg-burgundy text-stone shadow-elevated flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-heading text-xl font-bold text-stone">
            Konsultasi Langsung Bersama Tim Spesialis Kami
          </h3>
          <p className="text-xs text-sand/90 mt-1">
            Dapatkan solusi tepat dari praktisi yang berpengalaman di bidangnya.
          </p>
        </div>
        <button
          onClick={() => openConsultModal("Tim Kami - Konsultasi Spesialis")}
          className="px-6 py-3 rounded-full bg-brass hover:bg-brass-hover text-burgundy font-bold text-xs transition-all shadow-subtle flex items-center gap-1.5 whitespace-nowrap"
        >
          <span>Jadwalkan Konsultasi</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
