"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="py-3 px-4 mb-6 rounded-full bg-sand/30 dark:bg-dark-surface/60 border border-sand/50 dark:border-dark-surfaceBorder inline-flex items-center text-xs text-charcoal/70 dark:text-dark-textMuted overflow-x-auto max-w-full"
    >
      <ol className="flex items-center space-x-2 whitespace-nowrap">
        <li>
          <Link
            href="/"
            className="flex items-center hover:text-burgundy dark:hover:text-sand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass rounded-sm"
          >
            <Home className="w-3.5 h-3.5 mr-1" />
            <span>Beranda</span>
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <ChevronRight className="w-3.5 h-3.5 text-sand-dark dark:text-dark-surfaceBorder flex-shrink-0" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-burgundy dark:hover:text-sand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass rounded-sm"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-burgundy dark:text-sand" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
