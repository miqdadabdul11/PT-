"use client";

import React from "react";
import { Image as ImageIcon } from "lucide-react";

interface ImageSlotProps {
  name: string;
  ratio?: "16/9" | "4/3" | "1/1" | "21/9";
  className?: string;
  caption?: string;
}

export const ImageSlot: React.FC<ImageSlotProps> = ({
  name,
  ratio = "16/9",
  className = "",
  caption,
}) => {
  const getRatioClass = () => {
    switch (ratio) {
      case "4/3":
        return "aspect-[4/3]";
      case "1/1":
        return "aspect-square";
      case "21/9":
        return "aspect-[21/9]";
      case "16/9":
      default:
        return "aspect-video";
    }
  };

  return (
    <figure className={`w-full my-6 ${className}`}>
      <div
        className={`w-full ${getRatioClass()} rounded-[24px] border-2 border-dashed border-sand-dark/50 dark:border-dark-surfaceBorder bg-stone/50 dark:bg-dark-surface p-6 flex flex-col items-center justify-center text-center transition-colors relative overflow-hidden group`}
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#d8cfc4_1px,transparent_1px)] dark:bg-[radial-gradient(#3b1e24_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-burgundy/10 dark:bg-sand/10 flex items-center justify-center text-burgundy dark:text-sand">
            <ImageIcon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/60 dark:text-dark-textMuted mb-1">
              Slot Gambar Placeholder
            </p>
            <p className="text-sm font-medium text-burgundy dark:text-sand max-w-md">
              {name}
            </p>
          </div>
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-sand/40 dark:bg-dark-surfaceBorder text-charcoal/70 dark:text-dark-textMuted border border-sand-dark/30">
            Rasio: {ratio} &bull; /public/images/{name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.jpg
          </span>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-xs text-charcoal/60 dark:text-dark-textMuted italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
