"use client";

import React, { useState } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImageSlot } from "@/components/ImageSlot";
import { useConsultModal } from "@/components/Providers";
import { COMPANY_INFO, PRODUCTS_DATA, SERVICES_DATA } from "@/data/companyData";
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2, ShieldCheck } from "lucide-react";

export default function KontakPage() {
  const { openConsultModal } = useConsultModal();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [subject, setSubject] = useState("Konsultasi Umum TI");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = "Nama lengkap wajib diisi.";
    if (!contact.trim()) newErrors.contact = "WhatsApp atau Email wajib diisi.";
    if (!message.trim()) newErrors.message = "Pesan pertanyaan wajib diisi.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <Breadcrumb items={[{ label: "Kontak" }]} />

      <header className="space-y-3 max-w-3xl">
        <span className="px-3.5 py-1.5 rounded-full bg-sand/60 dark:bg-dark-surface font-semibold text-xs text-burgundy dark:text-sand">
          Hubungi Kami
        </span>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-burgundy dark:text-sand tracking-tight">
          Hubungi PT AMANI
        </h1>
        <p className="text-base text-charcoal/80 dark:text-dark-textMuted leading-[1.65]">
          Tim spesialis kami siap menjawab pertanyaan teknis, menjadwalkan audit keamanan, maupun memberikan penawaran lisensi perangkat lunak.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Contact Info (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-card-lg bg-burgundy text-stone shadow-elevated border border-burgundy-light space-y-6">
            <h2 className="font-heading text-2xl font-bold text-stone">
              Kantor Pusat & Informasi Layanan
            </h2>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brass flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-stone">Alamat Kantor:</p>
                  <p className="text-sand/90 mt-0.5">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brass flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-stone">Telepon Hotline:</p>
                  <p className="text-sand/90 mt-0.5">{COMPANY_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brass flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-stone">Email Resmi:</p>
                  <p className="text-sand/90 mt-0.5">{COMPANY_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-sand/20">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Halo PT AMANI, saya ingin menanyakan mengenai solusi TI."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-brass hover:bg-brass-hover text-burgundy font-bold text-xs transition-all shadow-subtle flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Langsung via WhatsApp</span>
              </a>
            </div>
          </div>

          <ImageSlot
            name="Peta Lokasi Kantor Pusat PT AMANI Jakarta"
            ratio="16/9"
            caption="Lokasi strategis di kawasan bisnis TB Simatupang, Jakarta Selatan."
          />
        </div>

        {/* Right Column: Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-stone-light dark:bg-dark-surface border border-sand/80 dark:border-dark-surfaceBorder rounded-card-lg p-6 sm:p-8 shadow-elevated">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-brass/20 text-brass mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-burgundy dark:text-sand">
                Pesan Anda Telah Terkirim!
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/80 dark:text-dark-textMuted max-w-md mx-auto leading-relaxed">
                Terima kasih <strong className="text-burgundy dark:text-sand">{name}</strong>. Tim spesialis kami telah menerima pesan Anda dan akan merespons dalam kurun waktu 1x24 jam kerja.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName("");
                  setContact("");
                  setMessage("");
                }}
                className="px-6 py-2.5 rounded-full bg-brass hover:bg-brass-hover text-burgundy font-bold text-xs shadow-subtle"
              >
                Kirim Pesan Lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-burgundy dark:text-sand mb-2">
                Kirim Pesan Pertanyaan / Penawaran
              </h2>
              <p className="text-xs text-charcoal/70 dark:text-dark-textMuted mb-4">
                Isi formulir di bawah untuk mendapatkan konsultasi langsung dari tim konsultan senior PT AMANI.
              </p>

              <div>
                <label className="block text-xs font-semibold text-charcoal dark:text-dark-text mb-1">
                  Topik Layanan / Pertanyaan
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-sand-dark/60 dark:border-dark-surfaceBorder bg-stone-light dark:bg-dark-bg text-charcoal dark:text-dark-text text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brass"
                >
                  <option value="Konsultasi Umum TI">Konsultasi Umum TI</option>
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={`Layanan: ${s.title}`}>
                      Layanan: {s.title}
                    </option>
                  ))}
                  {PRODUCTS_DATA.map((p) => (
                    <option key={p.id} value={`Produk: ${p.name}`}>
                      Produk: {p.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal dark:text-dark-text mb-1">
                  Nama Lengkap <span className="text-wine">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama lengkap"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-sand-dark/60 dark:border-dark-surfaceBorder bg-stone-light dark:bg-dark-bg text-charcoal dark:text-dark-text text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brass"
                />
                {errors.name && <p className="text-[11px] text-wine font-medium mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal dark:text-dark-text mb-1">
                  WhatsApp / Email Kontak <span className="text-wine">*</span>
                </label>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Nomor WA atau alamat email aktif"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-sand-dark/60 dark:border-dark-surfaceBorder bg-stone-light dark:bg-dark-bg text-charcoal dark:text-dark-text text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brass"
                />
                {errors.contact && <p className="text-[11px] text-wine font-medium mt-1">{errors.contact}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal dark:text-dark-text mb-1">
                  Pesan / Rincian Kebutuhan <span className="text-wine">*</span>
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan gambaran singkat kendala atau target sistem Anda..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-sand-dark/60 dark:border-dark-surfaceBorder bg-stone-light dark:bg-dark-bg text-charcoal dark:text-dark-text text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brass"
                />
                {errors.message && <p className="text-[11px] text-wine font-medium mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-brass hover:bg-brass-hover text-burgundy font-bold text-xs transition-all shadow-subtle flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Pesan Ke Tim PT AMANI</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
