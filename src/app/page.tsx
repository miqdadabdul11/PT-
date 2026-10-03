"use client";

import React from "react";
import Link from "next/link";
import { HeroNetworkCanvas } from "@/components/HeroNetworkCanvas";
import { StatsCounter } from "@/components/StatsCounter";
import { ImageSlot } from "@/components/ImageSlot";
import { useConsultModal } from "@/components/Providers";
import {
  COMPANY_INFO,
  PRODUCTS_DATA,
  SERVICES_DATA,
  SOLUTIONS_DATA,
  PORTFOLIO_DATA,
  INSIGHTS_DATA,
} from "@/data/companyData";
import {
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const { openConsultModal } = useConsultModal();

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* 1. Hero Section */}
      <HeroNetworkCanvas />

      {/* 2. Ringkasan Tentang Kami + Counter */}
      <section id="tentang-kami-ringkasan" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="px-3.5 py-1.5 rounded-full bg-sand/60 dark:bg-dark-surface font-semibold text-xs text-burgundy dark:text-sand border border-sand-dark/40 dark:border-dark-surfaceBorder">
              Profil Perusahaan
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-burgundy dark:text-sand leading-tight">
              Mitra Strategis Transformasi & Perlindungan Aset Digital Indonesia
            </h2>
            <p className="text-sm sm:text-base text-charcoal/80 dark:text-dark-textMuted leading-[1.65]">
              PT AMANI adalah penyedia solusi IT terkemuka yang menghadirkan perpaduan sempurna antara infrastruktur fisik yang andal, pengembangan sistem informasi kustom, serta pengamanan siber berstandar nasional dan internasional.
            </p>
            <div className="space-y-3 pt-2 text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brass flex-shrink-0 mt-0.5" />
                <span className="text-charcoal dark:text-dark-text">
                  Ketaatan Regulasi Keamanan Informasi (ISO 27001 & BSSN)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brass flex-shrink-0 mt-0.5" />
                <span className="text-charcoal dark:text-dark-text">
                  Dukungan Ahli Bersertifikasi Internasional (CISSP, CEH, Cisco CCNA)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brass flex-shrink-0 mt-0.5" />
                <span className="text-charcoal dark:text-dark-text">
                  Implementasi Skalabel Dari Sektor Pendidikan Hingga Korporasi
                </span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/tentang-kami/profil-perusahaan"
                className="px-6 py-3 rounded-full bg-burgundy hover:bg-wine text-stone font-semibold text-xs transition-colors shadow-subtle flex items-center gap-1.5"
              >
                <span>Selengkapnya Profil Perusahaan</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ImageSlot
              name="Infrastruktur & Tim Ahli PT AMANI"
              ratio="4/3"
              caption="Tim spesialis PT AMANI mendampingi perancangan ruang server dan pertahanan siber klien."
            />
          </div>
        </div>

        {/* Counter Stats */}
        <StatsCounter />
      </section>

      {/* 3. Produk Unggulan */}
      <section className="bg-sand/30 dark:bg-dark-surface/40 py-16 border-y border-sand/50 dark:border-dark-surfaceBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="px-3.5 py-1.5 rounded-full bg-sand/60 dark:bg-dark-surface font-semibold text-xs text-burgundy dark:text-sand">
                Ekosistem Produk
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-burgundy dark:text-sand mt-2">
                Produk Perangkat Lunak Unggulan
              </h2>
            </div>
            <Link
              href="/produk"
              className="text-xs font-bold text-burgundy dark:text-brass hover:underline flex items-center gap-1"
            >
              <span>Lihat Semua Produk</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRODUCTS_DATA.map((product) => (
              <div
                key={product.id}
                className="rounded-card-lg bg-stone-light dark:bg-dark-surface border border-sand/70 dark:border-dark-surfaceBorder p-6 flex flex-col justify-between shadow-subtle hover:shadow-elevated transition-all duration-300"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sand/40 dark:bg-dark-surfaceBorder text-burgundy dark:text-sand inline-block mb-3">
                    {product.badge}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-burgundy dark:text-sand mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xs font-semibold text-brass mb-3">
                    {product.tagline}
                  </p>
                  <p className="text-xs text-charcoal/80 dark:text-dark-textMuted leading-relaxed mb-4">
                    {product.shortDesc}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {product.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-charcoal dark:text-dark-text">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brass flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-sand/40 dark:border-dark-surfaceBorder flex items-center justify-between gap-2">
                  <Link
                    href={`/produk/${product.slug}`}
                    className="text-xs font-bold text-burgundy dark:text-sand hover:underline"
                  >
                    Detail Fitur
                  </Link>
                  <button
                    onClick={() => openConsultModal(`Demo Produk: ${product.name}`)}
                    className="px-4 py-2 rounded-full bg-brass hover:bg-brass-hover text-burgundy font-bold text-xs transition-all shadow-subtle flex items-center gap-1"
                  >
                    <span>Minta Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Layanan (Ringkas) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="px-3.5 py-1.5 rounded-full bg-sand/60 dark:bg-dark-surface font-semibold text-xs text-burgundy dark:text-sand">
              Spesialisasi Operasional
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-burgundy dark:text-sand mt-2">
              Layanan Teknologi Terpadu
            </h2>
          </div>
          <Link
            href="/layanan"
            className="text-xs font-bold text-burgundy dark:text-brass hover:underline flex items-center gap-1"
          >
            <span>Buka Penjelajah Layanan Interactive</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.slice(0, 6).map((service) => (
            <Link
              key={service.id}
              href={`/layanan/${service.slug}`}
              className="group p-6 rounded-card bg-stone-light dark:bg-dark-surface border border-sand/60 dark:border-dark-surfaceBorder hover:border-burgundy dark:hover:border-wine transition-all duration-300 shadow-subtle flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sand/50 dark:bg-dark-surfaceBorder text-burgundy dark:text-sand">
                    {service.category}
                  </span>
                  <ChevronRight className="w-4 h-4 text-charcoal/40 group-hover:text-brass group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-heading text-lg font-bold text-burgundy dark:text-sand group-hover:text-wine dark:group-hover:text-brass transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-charcoal/70 dark:text-dark-textMuted leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-sand/30 dark:border-dark-surfaceBorder text-xs font-semibold text-burgundy dark:text-sand flex items-center justify-between">
                <span>Pelajari Cakupan</span>
                <span className="text-brass font-bold group-hover:underline">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Solusi Industri */}
      <section className="bg-stone-light dark:bg-dark-surface/60 py-16 border-y border-sand/50 dark:border-dark-surfaceBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="px-3.5 py-1.5 rounded-full bg-sand/60 dark:bg-dark-surface font-semibold text-xs text-burgundy dark:text-sand">
              Pilihan Sektor Industri
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-burgundy dark:text-sand mt-2">
              Solusi Disesuaikan Dengan Kebutuhan Industri
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/70 dark:text-dark-textMuted mt-2">
              Klik pada sektor di bawah untuk melihat rincian tantangan dan pendekatan strategis PT AMANI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SOLUTIONS_DATA.map((sol) => (
              <div
                key={sol.id}
                className="p-6 rounded-card bg-stone dark:bg-dark-surface border border-sand/70 dark:border-dark-surfaceBorder shadow-subtle space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brass">
                    {sol.targetSector}
                  </span>
                  <Link
                    href={`/solusi/${sol.slug}`}
                    className="text-xs font-bold text-burgundy dark:text-sand hover:underline flex items-center gap-1"
                  >
                    <span>Detail</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <h3 className="font-heading text-xl font-bold text-burgundy dark:text-sand">
                  {sol.title}
                </h3>
                <p className="text-xs text-charcoal/80 dark:text-dark-textMuted leading-relaxed">
                  {sol.subtitle}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {sol.keyFeatures.map((kf, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2.5 py-1 rounded-full bg-sand/40 dark:bg-dark-surfaceBorder text-charcoal dark:text-dark-text"
                    >
                      {kf}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Portofolio Pilihan */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="px-3.5 py-1.5 rounded-full bg-sand/60 dark:bg-dark-surface font-semibold text-xs text-burgundy dark:text-sand">
              Rekam Jejak Eksekusi
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-burgundy dark:text-sand mt-2">
              Studi Kasus & Portofolio Pilihan
            </h2>
          </div>
          <Link
            href="/portofolio"
            className="text-xs font-bold text-burgundy dark:text-brass hover:underline flex items-center gap-1"
          >
            <span>Jelajahi Portofolio Lengkap</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-card bg-stone-light dark:bg-dark-surface border border-sand/70 dark:border-dark-surfaceBorder shadow-subtle space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-semibold text-charcoal/60 dark:text-dark-textMuted mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-sand/40 dark:bg-dark-surfaceBorder text-burgundy dark:text-sand">
                    {item.categoryLabel}
                  </span>
                  <span>{item.year}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-burgundy dark:text-sand mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-brass mb-3">
                  Klien: {item.client}
                </p>
                <p className="text-xs text-charcoal/80 dark:text-dark-textMuted leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-sand/40 dark:border-dark-surfaceBorder">
                <button
                  onClick={() => openConsultModal(`Referensi Portofolio: ${item.title}`)}
                  className="w-full py-2 rounded-full border border-burgundy/30 dark:border-sand/30 text-burgundy dark:text-sand font-semibold text-xs hover:bg-burgundy hover:text-stone transition-colors"
                >
                  Konsultasikan Proyek Serupa
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Insight Terbaru */}
      <section className="bg-sand/30 dark:bg-dark-surface/40 py-16 border-y border-sand/50 dark:border-dark-surfaceBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="px-3.5 py-1.5 rounded-full bg-sand/60 dark:bg-dark-surface font-semibold text-xs text-burgundy dark:text-sand">
                Pengetahuan & Artikel
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-burgundy dark:text-sand mt-2">
                Insight Teknologi & Keamanan Siber
              </h2>
            </div>
            <Link
              href="/insight"
              className="text-xs font-bold text-burgundy dark:text-brass hover:underline flex items-center gap-1"
            >
              <span>Baca Semua Artikel</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INSIGHTS_DATA.slice(0, 3).map((insight) => (
              <article
                key={insight.id}
                className="p-6 rounded-card bg-stone-light dark:bg-dark-surface border border-sand/70 dark:border-dark-surfaceBorder shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-charcoal/60 dark:text-dark-textMuted mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-sand/40 dark:bg-dark-surfaceBorder text-burgundy dark:text-sand font-semibold">
                      {insight.category}
                    </span>
                    <span>{insight.readTime}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-burgundy dark:text-sand hover:text-wine transition-colors mb-2">
                    <Link href={`/insight/${insight.slug}`}>{insight.title}</Link>
                  </h3>
                  <p className="text-xs text-charcoal/75 dark:text-dark-textMuted leading-relaxed line-clamp-3 mb-4">
                    {insight.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand/40 dark:border-dark-surfaceBorder flex items-center justify-between text-xs">
                  <span className="text-charcoal/60 dark:text-dark-textMuted font-medium">
                    {insight.publishedAt}
                  </span>
                  <Link
                    href={`/insight/${insight.slug}`}
                    className="font-bold text-burgundy dark:text-sand hover:underline flex items-center gap-1"
                  >
                    <span>Baca Artikel</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Global CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-card-lg bg-burgundy text-stone shadow-elevated relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-burgundy-light">
          <div className="space-y-4 max-w-xl z-10">
            <span className="px-3 py-1 rounded-full bg-stone/10 text-brass font-bold text-xs uppercase tracking-wider">
              Konsultasi Bebas Biaya
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-stone">
              Siap Memodernisasi Infrastruktur & Keamanan Digital Perusahaan Anda?
            </h2>
            <p className="text-xs sm:text-sm text-sand/90 leading-relaxed">
              Diskusikan tantangan sistem, kebutuhan aplikasi kustom, maupun audit siber bersama pakar berpengalaman PT AMANI.
            </p>
          </div>

          <div className="z-10 flex-shrink-0">
            <button
              onClick={() => openConsultModal("Konsultasi Global CTA Home")}
              className="px-8 py-4 rounded-full bg-brass hover:bg-brass-hover text-burgundy font-bold text-sm transition-all shadow-brass-glow flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone"
            >
              <span>Jadwalkan Konsultasi Gratis</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
