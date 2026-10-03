"use client";

import React, { useEffect, useState, useRef } from "react";
import { COMPANY_INFO } from "@/data/companyData";

export const StatsCounter: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [counts, setCounts] = useState<number[]>(COMPANY_INFO.stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          COMPANY_INFO.stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 1500;
            const stepTime = 30;
            const totalSteps = duration / stepTime;
            const increment = end / totalSteps;

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCounts((prev) => {
                  const updated = [...prev];
                  updated[index] = end;
                  return updated;
                });
                clearInterval(timer);
              } else {
                setCounts((prev) => {
                  const updated = [...prev];
                  updated[index] = Number(start.toFixed(1));
                  return updated;
                });
              }
            }, stepTime);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-card bg-sand/40 dark:bg-dark-surface border border-sand/60 dark:border-dark-surfaceBorder shadow-subtle my-12"
    >
      {COMPANY_INFO.stats.map((stat, idx) => (
        <div key={idx} className="flex flex-col">
          <span className="font-heading font-extrabold text-3xl sm:text-4xl text-burgundy dark:text-brass tracking-tight">
            {counts[idx]}
            <span className="text-wine dark:text-sand text-2xl font-bold ml-0.5">
              {stat.suffix}
            </span>
          </span>
          <span className="text-xs sm:text-sm font-semibold text-charcoal/80 dark:text-dark-textMuted mt-1">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
};
