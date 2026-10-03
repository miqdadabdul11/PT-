"use client";

import React, { useState, useEffect } from "react";
import { useConsultModal } from "./Providers";
import { X, CheckCircle2, Send, ShieldCheck, Loader2, MessageCircle, FileSpreadsheet } from "lucide-react";
import { PRODUCTS_DATA, SERVICES_DATA, SOLUTIONS_DATA, COMPANY_INFO } from "@/data/companyData";

export const ConsultModal: React.FC = () => {
  const { isOpen, selectedTopic, closeConsultModal } = useConsultModal();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [organization, setOrganization] = useState("");
  const [topic, setTopic] = useState(selectedTopic);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (selectedTopic) {
      setTopic(selectedTopic);
    }
  }, [selectedTopic]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeConsultModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeConsultModal]);

  if (!isOpen) return null;

  const topicsList = [
    "Konsultasi Umum TI",
    ...PRODUCTS_DATA.map((p) => p.name),
    ...SERVICES_DATA.map((s) => s.title),
    ...SOLUTIONS_DATA.map((sol) => sol.title),
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = "Nama lengkap wajib diisi.";
    if (!contact.trim()) newErrors.contact = "Nomor WhatsApp atau Email wajib diisi.";
    if (!message.trim()) newErrors.message = "Jelaskan kebutuhan singkat Anda.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contact,
          organization: organization || "-",
          topic,
          message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrors({ form: "Gagal menyimpan data. Silakan coba lagi." });
      }
    } catch (err) {
      setErrors({ form: "Terjadi kesalahan jaringan." });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setContact("");
    setOrganization("");
    setMessage("");
    closeConsultModal();
  };

  const waUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Halo PT AMANI, saya ingin berkonsultasi:\n\n• Topik: ${topic}\n• Nama: ${name}\n• Kontak: ${contact}\n• Instansi: ${
      organization || "-"
    }\n• Detail: ${message}`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-xl bg-stone dark:bg-dark-surface border border-sand/60 dark:border-dark-surfaceBorder rounded-card p-6 sm:p-8 shadow-elevated overflow-hidden max-h-[90vh] overflow-y-auto">
        <button
          onClick={closeConsultModal}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-sand/40 dark:bg-dark-surfaceBorder text-charcoal dark:text-dark-text hover:bg-wine hover:text-stone transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
          aria-label="Tutup Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-brass/20 text-brass mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 id="modal-title" className="font-heading text-2xl font-bold text-burgundy dark:text-sand">
              Permintaan Tersimpan Ke Spreadsheet!
            </h3>
            <p className="text-sm text-charcoal/80 dark:text-dark-textMuted max-w-md mx-auto leading-relaxed">
              Terima kasih <strong className="text-burgundy dark:text-sand">{name}</strong>. Data permintaan konsultasi Anda telah masuk ke tabel database spreadsheet kami.
            </p>

            <div className="p-4 rounded-2xl bg-sand/40 dark:bg-dark-surfaceBorder/60 border border-sand/60 text-left space-y-2 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-burgundy dark:text-sand">
                <FileSpreadsheet className="w-4 h-4 text-brass" />
                <span>Rincian Data Tersimpan:</span>
              </div>
              <p><strong>Topik:</strong> {topic}</p>
              <p><strong>Kontak:</strong> {contact}</p>
              <p><strong>Instansi:</strong> {organization || "-"}</p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-brass hover:bg-brass-hover text-burgundy font-bold text-xs transition-all shadow-subtle flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Follow Up via WhatsApp Langsung</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-sand-dark/60 text-charcoal dark:text-dark-text font-semibold text-xs hover:bg-sand/30"
              >
                Selesai
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/50 dark:bg-dark-surfaceBorder text-xs font-semibold text-burgundy dark:text-sand mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-brass" />
                <span>Konsultasi Bebas Biaya</span>
              </div>
              <h2 id="modal-title" className="font-heading text-2xl font-bold text-burgundy dark:text-sand">
                Jadwalkan Konsultasi Gratis
              </h2>
              <p className="text-xs text-charcoal/70 dark:text-dark-textMuted mt-1">
                Diskusikan kebutuhan jaringan, aplikasi, atau keamanan siber bersama konsultan senior PT AMANI.
              </p>
            </div>

            {errors.form && (
              <div className="p-3 mb-4 rounded-xl bg-wine/10 border border-wine/30 text-wine text-xs font-medium">
                {errors.form}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-charcoal dark:text-dark-text mb-1">
                  Topik Layanan Ditanyakan
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-sand-dark/60 dark:border-dark-surfaceBorder bg-stone-light dark:bg-dark-bg text-charcoal dark:text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-brass"
                >
                  {topicsList.map((t, idx) => (
                    <option key={idx} value={t}>
                      {t}
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
                  placeholder="Misal: Ahmad Fauzi"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-sand-dark/60 dark:border-dark-surfaceBorder bg-stone-light dark:bg-dark-bg text-charcoal dark:text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-brass"
                />
                {errors.name && <p className="text-[11px] text-wine font-medium mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal dark:text-dark-text mb-1">
                    WhatsApp / Email <span className="text-wine">*</span>
                  </label>
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="08123456789 atau email"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-sand-dark/60 dark:border-dark-surfaceBorder bg-stone-light dark:bg-dark-bg text-charcoal dark:text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-brass"
                  />
                  {errors.contact && <p className="text-[11px] text-wine font-medium mt-1">{errors.contact}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal dark:text-dark-text mb-1">
                    Instansi / Perusahaan (Opsional)
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Nama institusi"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-sand-dark/60 dark:border-dark-surfaceBorder bg-stone-light dark:bg-dark-bg text-charcoal dark:text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-brass"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal dark:text-dark-text mb-1">
                  Detail Kebutuhan Singkat <span className="text-wine">*</span>
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ceritakan kendala atau target sistem yang ingin dicapai..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-sand-dark/60 dark:border-dark-surfaceBorder bg-stone-light dark:bg-dark-bg text-charcoal dark:text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-brass"
                />
                {errors.message && <p className="text-[11px] text-wine font-medium mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={closeConsultModal}
                  className="px-5 py-2.5 rounded-full border border-sand-dark/50 dark:border-dark-surfaceBorder text-charcoal/80 dark:text-dark-text text-xs font-semibold hover:bg-sand/30"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 rounded-full bg-brass hover:bg-brass-hover text-burgundy font-bold text-xs transition-all shadow-subtle flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Menyimpan...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Jadwalkan Konsultasi</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
