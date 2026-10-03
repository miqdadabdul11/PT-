import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES_DATA } from "@/data/companyData";
import { ServiceClientPage } from "./ServiceClientPage";

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) return { title: "Layanan Tidak Ditemukan" };

  return {
    title: `${service.title} - Layanan PT AMANI`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) notFound();

  return <ServiceClientPage service={service} />;
}
