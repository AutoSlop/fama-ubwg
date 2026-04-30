import type { Metadata } from "next";
import { Sora, DM_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "FAMA — Tu CFO Personal con IA | Análisis Financiero para Profesionales en Colombia",
  description:
    "Simula decisiones reales sobre tu dinero en Colombia y ve su impacto mes a mes en liquidez, deuda, margen y patrimonio. Prueba gratis 7 días.",
  keywords: [
    "CFO personal",
    "finanzas personales Colombia",
    "simulador financiero",
    "análisis financiero IA",
    "gestión de deudas",
    "patrimonio",
  ],
  openGraph: {
    title: "FAMA — El CFO personal que no puedes contratar",
    description:
      "Simula decisiones reales sobre tu dinero en Colombia. Liquidez, deuda, margen y patrimonio con rigor analítico.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${sora.variable} ${dmMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
