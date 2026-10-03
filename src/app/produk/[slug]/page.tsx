import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS_DATA } from "@/data/companyData";
import { ProductClientPage } from "./ProductClientPage";

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);
  if (!product) return { title: "Produk Tidak Ditemukan" };

  return {
    title: product.name,
    description: product.shortDesc,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);
  if (!product) notFound();

  return <ProductClientPage product={product} />;
}
