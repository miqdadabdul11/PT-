import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { INSIGHTS_DATA } from "@/data/companyData";
import { InsightClientPage } from "./InsightClientPage";

export async function generateStaticParams() {
  return INSIGHTS_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHTS_DATA.find((a) => a.slug === slug);
  if (!article) return { title: "Artikel Tidak Ditemukan" };

  return {
    title: `${article.title} - Insight PT AMANI`,
    description: article.excerpt,
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = INSIGHTS_DATA.find((a) => a.slug === slug);
  if (!article) notFound();

  return <InsightClientPage article={article} />;
}
