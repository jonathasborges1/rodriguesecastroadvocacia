import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

// Substitutos temporários até o recebimento dos arquivos licenciados
// de Argue e Geometria em formato web (.woff2).
const argueFallback = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--rc-heading",
  display: "swap",
});

const geometriaFallback = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--rc-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rodrigues e Castro Advocacia | Direito Civil, Trabalhista e do Consumidor — AM",
  description:
    "Escritório de advocacia com atuação em Direito Civil, Trabalhista e do Consumidor. Anne Castro (OAB/AM-11421) e Juliana Rodrigues (OAB/AM-10547). Atendimento online e presencial em Manaus.",
  keywords:
    "advocacia Amazonas, advogado Manaus, direito civil AM, direito trabalhista AM, direito consumidor AM, Rodrigues e Castro Advocacia, OAB AM",
  openGraph: {
    title: "Rodrigues e Castro Advocacia | Direito Civil · Trabalhista · Consumidor",
    description:
      "Advocacia com atuação em Direito Civil, Trabalhista e do Consumidor. Atendimento online e presencial em Manaus.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-rodrigues-e-castro.png",
        width: 1200,
        height: 630,
        alt: "Rodrigues e Castro Advocacia — Direito Civil, Trabalhista e do Consumidor",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodrigues e Castro Advocacia",
    description:
      "Advocacia com atendimento online e presencial nas áreas Civil, Trabalhista e do Consumidor.",
    images: ["/images/og-rodrigues-e-castro.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${argueFallback.variable} ${geometriaFallback.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
