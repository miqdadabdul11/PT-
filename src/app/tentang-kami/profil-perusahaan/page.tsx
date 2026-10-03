"use client";

import React from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImageSlot } from "@/components/ImageSlot";
import { useConsultModal } from "@/components/Providers";
import { COMPANY_INFO } from "@/data/companyData";
import { CheckCircle2, ArrowUpRight, ShieldCheck, Award } from "lucide-react";

export default function ProfilPerusahaanPage() {
  const { openConsultModal } = useConsultModal();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <Breadcrumb
        items={[
          { label: "Tentang Kami", href: "/tentang-kami/profil-perusahaan" },
          { label: "Profil Perusahaan" },
        ]}
      />

      <header className="space-y-3">
        <span className="px-3.5 py-1.5 rounded-full bg-sand/60 dark:bg-dark-surface font-semibold text-xs text-burgundy dark:text-sand">
          Tentang PT AMANI
        </span>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-burgundy dark:text-sand tracking-tight">
          Profil Perusahaan & Sejarah PT AMANI
        </h1>
        <p className="text-base sm:text-lg text-charcoal/80 dark:text-dark-textMuted max-w-prose">
          {COMPANY_INFO.description}
        </p>
      </header>

      <ImageSlot
        name="Kantor Pusat & Pusat Keamanan Siber PT AMANI"
        ratio="16/9"
        caption="Gedung AMANI Tower - Fasilitas Pusat Data dan Command Center Keamanan Siber."
      />

      <section className="space-y-6 text-sm sm:text-base text-charcoal/90 dark:text-dark-text leading-[1.65]">
        <h2 className="font-heading text-2xl font-bold text-burgundy dark:text-sand">
          Komitmen Keandalan Teknologi Untuk Indonesia
        </h2>
        <p>
          Didirikan dengan cita-cita memodernisasi infrastruktur teknologi informasi nasional, PT AMANI telah tumbuh menjadi salah satu penyedia solusi IT end-to-end terpercaya di Indonesia. Kami melayani beragam sektor bisnis, mulai dari institusi pendidikan, perusahaan manufaktur dan perbankan, hingga instansi pemerintah daerah.
        </p>
        <p>
          Pendekatan kami bertumpu pada 3 pilar utama: <strong>Infrastruktur Kokoh</strong>, <strong>Perangkat Lunak Terintegrasi</strong>, dan <strong>Perlindungan Keamanan Siber Berlapis</strong>. Dengan kombinasi ini, klien kami tidak hanya mendapatkan sistem yang cepat dan efisien, tetapi juga aset data yang aman dari potensi kejahatan siber.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
          <div className="p-6 rounded-card bg-stone-light dark:bg-dark-surface border border-sand/70 dark:border-dark-surfaceBorder space-y-2">
            <h3 className="font-heading text-lg font-bold text-burgundy dark:text-sand">
              Standar ISO & Sertifikasi BSSN
            </h3>
            <p className="text-xs text-charcoal/80 dark:text-dark-textMuted">
              Seluruh prosedur kerja teknis dan manajemen risiko informasi kami diaudit secara independen berdasarkan standar ISO 27001 dan regulasi BSSN.
            </p>
          </div>
          <div className="p-6 rounded-card bg-stone-light dark:bg-dark-surface border border-sand/70 dark:border-dark-surfaceBorder space-y-2">
            <h3 className="font-heading text-lg font-bold text-burgundy dark:text-sand">
              Dukungan Respon Cepat 24/7
            </h3>
            <p className="text-xs text-charcoal/80 dark:text-dark-textMuted">
              Tim helpdesk dan teknisi jaringan lapangan kami siaga 24 jam sehari untuk memastikan kestabilan koneksi dan layanan tanpa jeda.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <div className="p-8 rounded-card-lg bg-burgundy text-stone shadow-elevated flex flex-col sm:flex-row items-center justify-between gap-6 border border-burgundy-light">
        <div>
          <h3 className="font-heading text-xl font-bold text-stone">
            Konsultasikan Kebutuhan TI Perusahaan Anda
          </h3>
          <p className="text-xs text-sand/90 mt-1">
            Tim konsultan senior PT AMANI siap memberikan analisa awal gratis.
          </p>
        </div>
        <button
          onClick={() => openConsultModal("Profil Perusahaan - Tanya AMANI")}
          className="px-6 py-3 rounded-full bg-brass hover:bg-brass-hover text-burgundy font-bold text-xs transition-all shadow-subtle flex items-center gap-1.5 whitespace-nowrap"
        >
          <span>Jadwalkan Konsultasi</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
