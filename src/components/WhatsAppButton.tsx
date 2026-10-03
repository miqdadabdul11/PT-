"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export const WhatsAppButton: React.FC = () => {
  const waUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Halo PT AMANI, saya ingin berkonsultasi mengenai solusi teknologi dan infrastruktur."
  )}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-2 p-3.5 bg-burgundy dark:bg-wine text-stone hover:bg-wine dark:hover:bg-wine-hover rounded-full shadow-elevated border border-sand/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
      aria-label="Hubungi kami via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-brass group-hover:scale-110 transition-transform duration-300" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-focus:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold pr-1">
        Chat WhatsApp
      </span>
    </a>
  );
};
