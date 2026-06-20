import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.insagas.com.ar"
  ),
  title: "Insagas | Gasista y Distribuidora de Gas",
  description:
    "Insagas: gasistas matriculados en CABA y GBA. Instalaciones, reparaciones, mantenimiento y habilitaciones de gas. Vendedores Platinum en Mercado Libre.",
  keywords: [
    "gasista",
    "gas",
    "instalacion gas",
    "reparacion gas",
    "CABA",
    "GBA",
    "insagas",
    "gasista matriculado",
  ],
  openGraph: {
    title: "Insagas | Gasista y Distribuidora de Gas",
    description:
      "Gasistas matriculados en CABA y GBA. Instalaciones, reparaciones, mantenimiento y habilitaciones de gas.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
