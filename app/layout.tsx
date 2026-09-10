import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mdworks.example.com"),
  title: {
    default: "MD Works | Construction & Engineering Excellence",
    template: "%s | MD Works",
  },
  description:
    "MD Works delivers reliable, safety-focused construction, civil engineering, and infrastructure solutions for residential, commercial, and industrial projects.",
  openGraph: {
    title: "MD Works | Construction & Engineering Excellence",
    description:
      "Trusted construction partner for residential, commercial, and infrastructure projects.",
    url: "https://mdworks.example.com",
    siteName: "MD Works",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-body text-secondary-500 bg-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}