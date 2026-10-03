"use client";

import React from "react";
import Link from "next/link";
import { COMPANY_INFO, PRODUCTS_DATA, SERVICES_DATA, SOLUTIONS_DATA } from "@/data/companyData";
import { Shield, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { useConsultModal } from "./Providers";

export const Footer: React.FC = () => {
  const { openConsultModal } = useConsultModal();

  return (
    <footer className="bg-burgundy text-stone border-t border-burgundy-light pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Company Profile (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-sand text-burgundy flex items-center justify-center font-heading font-extrabold text-xl">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl tracking-tight text-stone">
                  PT AMANI
                </span>
                <span className="text-[10px] tracking-wider text-sand/80 uppercase font-semibold -mt-1">
                  IT & Security Solutions
                </span>
              </div>
            </Link>

            <p className="text-xs text-sand/90 leading-relaxed max-w-sm">
              {COMPANY_INFO.description}
            </p>

            <div className="space-y-2 pt-2 text-xs text-sand/90">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brass flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brass flex-shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brass flex-shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openConsultModal("Konsultasi Footer")}
                className="px-5 py-2.5 rounded-full bg-brass hover:bg-brass-hover text-burgundy font-bold text-xs transition-all shadow-brass-glow flex items-center gap-1.5"
              >
                <span>Konsultasi Gratis</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col 2: Tentang Kami & Produk */}
          <div className="space-y-4">
            <div>
              <h4 className="font-heading text-sm font-bold text-stone mb-3 uppercase tracking-wider text-brass">
                Tentang Kami
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/tentang-kami/profil-perusahaan" className="text-sand/80 hover:text-stone">
                    Profil Perusahaan
                  </Link>
                </li>
                <li>
                  <Link href="/tentang-kami/visi-misi" className="text-sand/80 hover:text-stone">
                    Visi & Misi
                  </Link>
                </li>
                <li>
                  <Link href="/tentang-kami/tim-kami" className="text-sand/80 hover:text-stone">
                    Tim Manajemen
                  </Link>
                </li>
                <li>
                  <Link href="/tentang-kami/legalitas-partnership" className="text-sand/80 hover:text-stone">
                    Legalitas & Kemitraan
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <h4 className="font-heading text-sm font-bold text-stone mb-3 uppercase tracking-wider text-brass">
                Produk Unggulan
              </h4>
              <ul className="space-y-2 text-xs">
                {PRODUCTS_DATA.map((p) => (
                  <li key={p.id}>
                    <Link href={`/produk/${p.slug}`} className="text-sand/80 hover:text-stone">
                      {p.name.split("-")[0]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 3: Layanan TI */}
          <div>
            <h4 className="font-heading text-sm font-bold text-stone mb-3 uppercase tracking-wider text-brass">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <Link href={`/layanan/${s.slug}`} className="text-sand/80 hover:text-stone">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Solusi, Portofolio & Insight */}
          <div className="space-y-4">
            <div>
              <h4 className="font-heading text-sm font-bold text-stone mb-3 uppercase tracking-wider text-brass">
                Solusi Industri
              </h4>
              <ul className="space-y-2 text-xs">
                {SOLUTIONS_DATA.map((sol) => (
                  <li key={sol.id}>
                    <Link href={`/solusi/${sol.slug}`} className="text-sand/80 hover:text-stone">
                      {sol.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <h4 className="font-heading text-sm font-bold text-stone mb-3 uppercase tracking-wider text-brass">
                Navigasi Lain
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/portofolio" className="text-sand/80 hover:text-stone">
                    Portofolio Proyek
                  </Link>
                </li>
                <li>
                  <Link href="/insight" className="text-sand/80 hover:text-stone">
                    Artikel & Insight TI
                  </Link>
                </li>
                <li>
                  <Link href="/kontak" className="text-sand/80 hover:text-stone">
                    Hubungi Kontak
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications Banner */}
        <div className="p-4 rounded-2xl bg-burgundy-dark/60 border border-sand/20 flex flex-wrap items-center justify-between gap-4 text-xs text-sand/80">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-brass" />
            <span className="font-semibold text-stone">Kepatuhan Standar Nasional:</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {COMPANY_INFO.certifications.map((cert, idx) => (
              <span key={idx} className="bg-sand/10 px-3 py-1 rounded-full text-[11px]">
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-sand/20 flex flex-col sm:flex-row items-center justify-between text-xs text-sand/70 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/kontak" className="hover:text-stone">
              Kebijakan Privasi
            </Link>
            <Link href="/kontak" className="hover:text-stone">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
