import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sterling & Associates | Expert Legal Services — Free Consultation",
  description:
    "Get free legal advice from experienced solicitors. We specialize in Family Law, Corporate Law, Criminal Defense & Property Law. SRA Regulated, 10+ years experience, 500+ clients served. Book your free consultation today.",
  keywords: [
    "legal services",
    "solicitor",
    "free legal advice",
    "family law",
    "corporate law",
    "criminal defense",
    "property law",
    "SRA regulated",
    "UK solicitors",
  ],
  openGraph: {
    title: "Sterling & Associates | Expert Legal Services",
    description:
      "Speak with experienced solicitors and protect your rights. Free initial consultation available.",
    type: "website",
    locale: "en_GB",
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-[family-name:var(--font-inter)] antialiased bg-white text-navy-900">
        {children}
      </body>
    </html>
  );
}
