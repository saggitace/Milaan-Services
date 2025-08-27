import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import WhatsAppChat from "@/components/whatsapp-chat";
import { Toaster } from "@/components/ui/toaster";
import { Partytown } from "@builder.io/partytown/react";
import { partytownConfig } from "@/lib/partytown";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Milaan Services - Leading Digital Transformation Partner",
  description: "Milaan Infotech provides comprehensive IT and digital marketing services to drive business growth and digital transformation.",
  generator: "Milaan Services",
  icons: { icon: "/images/milaan-logo.jpg" },
  keywords: [
    "digital marketing",
    "web development",
    "SEO",
    "lead generation",
    "political campaign management",
    "branding",
    "tech solutions",
    "business growth"
  ],
  // viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Milaan Services - Leading Digital Transformation Partner",
    description: "Comprehensive IT and digital marketing services to drive business growth",
    url: "https://www.milaanservices.com",
    siteName: "Milaan Services",
    images: [{ url: "https://www.milaanservices.com/images/milaan-logo.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Milaan Services",
    description: "Comprehensive IT and digital marketing services",
    images: ["https://www.milaanservices.com/images/milaan-logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Partytown script to offload 3rd party scripts to Web Worker */}
        <Partytown forward={partytownConfig.forward} />
        {/* Add any other <head> elements here if needed */}
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <WhatsAppChat />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
