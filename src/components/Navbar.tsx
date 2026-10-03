"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Shield, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useConsultModal } from "./Providers";
import { PRODUCTS_DATA, SERVICES_DATA, SOLUTIONS_DATA } from "@/data/companyData";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { openConsultModal } = useConsultModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const toggleAccordion = (key: string) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  const menuItems = [
    {
      label: "Tentang Kami",
      key: "tentang-kami",
      children: [
        { label: "Profil Perusahaan", href: "/tentang-kami/profil-perusahaan" },
        { label: "Visi & Misi", href: "/tentang-kami/visi-misi" },
        { label: "Tim Kami", href: "/tentang-kami/tim-kami" },
        { label: "Legalitas & Partnership", href: "/tentang-kami/legalitas-partnership" },
      ],
    },
    {
      label: "Produk",
      key: "produk",
      children: [
        { label: "Daftar Produk", href: "/produk" },
        ...PRODUCTS_DATA.map((p) => ({
          label: p.name,
          href: `/produk/${p.slug}`,
        })),
      ],
    },
    {
      label: "Layanan",
      key: "layanan",
      children: [
        { label: "Semua Layanan (Interactive)", href: "/layanan" },
        ...SERVICES_DATA.map((s) => ({
          label: s.title,
          href: `/layanan/${s.slug}`,
        })),
      ],
    },
    {
      label: "Solusi",
      key: "solusi",
      children: [
        { label: "Ikhtisar Solusi Industri", href: "/solusi" },
        ...SOLUTIONS_DATA.map((sol) => ({
          label: sol.title,
          href: `/solusi/${sol.slug}`,
        })),
      ],
    },
    { label: "Portofolio", href: "/portofolio" },
    { label: "Insight", href: "/insight" },
    { label: "Kontak", href: "/kontak" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-stone/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-subtle py-3 border-b border-sand/40 dark:border-dark-surfaceBorder"
          : "bg-stone dark:bg-dark-bg py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass rounded-lg p-1"
        >
          <div className="w-9 h-9 rounded-xl bg-burgundy text-sand dark:bg-sand dark:text-burgundy flex items-center justify-center font-heading font-extrabold text-lg shadow-sm group-hover:bg-wine transition-colors">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-lg tracking-tight text-burgundy dark:text-sand">
              PT AMANI
            </span>
            <span className="text-[10px] tracking-wider text-charcoal/60 dark:text-dark-textMuted uppercase font-semibold -mt-1">
              IT & Security
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1" aria-label="Navigasi Utama">
          {menuItems.map((item) => {
            if (item.children) {
              const active = item.children.some((child) => isActive(child.href));
              return (
                <div key={item.key} className="relative group">
                  <button
                    className={`px-3 py-2 rounded-full text-xs font-semibold flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass ${
                      active
                        ? "bg-sand/60 dark:bg-dark-surface text-burgundy dark:text-sand font-bold"
                        : "text-charcoal/80 dark:text-dark-text hover:text-burgundy dark:hover:text-sand hover:bg-sand/30"
                    }`}
                    aria-expanded="false"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50 pt-2">
                    <div className="bg-stone dark:bg-dark-surface border border-sand/60 dark:border-dark-surfaceBorder rounded-card p-2 shadow-elevated">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                            pathname === child.href
                              ? "bg-burgundy text-sand dark:bg-sand dark:text-burgundy font-semibold"
                              : "text-charcoal/90 dark:text-dark-text hover:bg-sand/40 dark:hover:bg-wine/30 hover:text-burgundy dark:hover:text-sand"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            const active = isActive(item.href!);
            return (
              <Link
                key={item.href}
                href={item.href!}
                className={`px-3 py-2 rounded-full text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass ${
                  active
                    ? "bg-sand/60 dark:bg-dark-surface text-burgundy dark:text-sand font-bold"
                    : "text-charcoal/80 dark:text-dark-text hover:text-burgundy dark:hover:text-sand hover:bg-sand/30"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions (Theme toggle + CTA) */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => openConsultModal("Konsultasi Umum TI")}
            className="px-5 py-2.5 rounded-full bg-brass hover:bg-brass-hover text-burgundy font-bold text-xs transition-all duration-200 shadow-subtle flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
          >
            <span>Konsultasi Gratis</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl bg-sand/40 dark:bg-dark-surface text-charcoal dark:text-dark-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
            aria-label="Buka Menu Mobile"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-stone dark:bg-dark-bg border-b border-sand/60 dark:border-dark-surfaceBorder p-4 shadow-elevated max-h-[85vh] overflow-y-auto z-50">
          <div className="flex flex-col space-y-2">
            {menuItems.map((item) => {
              if (item.children) {
                const isOpen = activeAccordion === item.key;
                return (
                  <div key={item.key} className="border-b border-sand/30 dark:border-dark-surfaceBorder pb-2">
                    <button
                      onClick={() => toggleAccordion(item.key)}
                      className="w-full flex items-center justify-between py-2 text-sm font-semibold text-charcoal dark:text-dark-text"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180 text-brass" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="pl-4 space-y-1.5 mt-1 border-l-2 border-sand/60 dark:border-dark-surfaceBorder">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block py-1.5 text-xs ${
                              pathname === child.href
                                ? "text-burgundy dark:text-sand font-bold"
                                : "text-charcoal/70 dark:text-dark-textMuted"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`block py-2.5 text-sm font-semibold border-b border-sand/30 dark:border-dark-surfaceBorder ${
                    isActive(item.href!)
                      ? "text-burgundy dark:text-sand font-bold"
                      : "text-charcoal dark:text-dark-text"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  openConsultModal("Konsultasi Umum TI");
                }}
                className="w-full py-3 rounded-full bg-brass hover:bg-brass-hover text-burgundy font-bold text-sm transition-all shadow-subtle flex items-center justify-center gap-2"
              >
                <span>Konsultasi Gratis</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
