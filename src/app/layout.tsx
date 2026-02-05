import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/ui/Preloader";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Pixelogik | Media & Advertising | Abu Dhabi",
    template: "%s | Pixelogik",
  },
  description:
    "Pixelogik is a premium media production house in Abu Dhabi specializing in photography, videography, events, live streaming, and creative content production.",
  metadataBase: new URL("https://pixelogik.ae"),
  openGraph: {
    type: "website",
    url: "https://pixelogik.ae",
    title: "Pixelogik | Media & Advertising | Abu Dhabi",
    description:
      "Visually stunning media production: photography, videography, events, live streaming, and creative content production in Abu Dhabi.",
    siteName: "Pixelogik",
    locale: "en_US",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <Preloader />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
