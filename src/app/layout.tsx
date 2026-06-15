import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ecocycle.com"),
  title: {
    default: "EcoCycle Waste Solutions | Smart Waste Management",
    template: "%s | EcoCycle Waste Solutions",
  },
  description:
    "EcoCycle Waste Solutions is a leading waste management and recycling company providing residential, commercial, industrial, and municipal waste collection, recycling, and sustainability consulting services.",
  keywords: [
    "waste management",
    "recycling",
    "sustainability",
    "eco-friendly",
    "green solutions",
    "waste collection",
    "environmental services",
    "EcoCycle",
  ],
  authors: [{ name: "EcoCycle Waste Solutions" }],
  creator: "EcoCycle Waste Solutions",
  publisher: "EcoCycle Waste Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ecocycle.com",
    siteName: "EcoCycle Waste Solutions",
    title: "EcoCycle Waste Solutions | Smart Waste Management",
    description:
      "Transforming Waste Into A Sustainable Future. Leading waste management and recycling solutions for residential, commercial, and industrial clients.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EcoCycle Waste Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoCycle Waste Solutions | Smart Waste Management",
    description:
      "Transforming Waste Into A Sustainable Future. Leading waste management and recycling solutions.",
    images: ["/og-image.jpg"],
    creator: "@ecocycle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#16A34A" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
