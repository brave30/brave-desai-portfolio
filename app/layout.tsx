import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import FloatingSocial from "@/components/ui/FloatingSocial";
import Script from "next/script";

const manrope = Manrope({ subsets: ["latin"], weight: ["300","400","500","600","700","800"] });

export const metadata: Metadata = {
  title: "Brave Desai",
  description: "Personal portfolio of Brave Desai — a curated selection of projects, case studies, resume, and ways to get in touch.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        {/* Google Analytics scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C2CR79G320"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C2CR79G320');
          `}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <FloatingSocial />
        </ThemeProvider>
      </body>
    </html>
  );
}
