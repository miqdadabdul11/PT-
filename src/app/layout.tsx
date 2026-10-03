import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ConsultModal } from "@/components/ConsultModal";
import { COMPANY_INFO } from "@/data/companyData";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description: COMPANY_INFO.description,
  keywords: [
    "PT AMANI",
    "Infrastruktur Jaringan",
    "Cyber Security",
    "Software Development Custom",
    "SIM Sekolah AmaniEdu",
    "SaaS Project Management",
    "ISO 27001",
    "Audit Keamanan Siber Indonesia",
  ],
  authors: [{ name: COMPANY_INFO.legalName }],
  openGraph: {
    title: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className={`${bricolage.variable} ${jakarta.variable}`}>
      <body className="bg-stone dark:bg-dark-bg text-charcoal dark:text-dark-text min-h-screen flex flex-col antialiased selection:bg-brass/30 selection:text-burgundy">
        <Providers>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <WhatsAppButton />
          <ConsultModal />
        </Providers>
      </body>
    </html>
  );
}
