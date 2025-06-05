import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
<<<<<<< HEAD
import { GoogleAnalytics } from '@next/third-parties/google'
 
=======
import { GoogleAnalytics } from "@next/third-parties/google";
import { DynamicSchema } from "@/components/DynamicSchema"; // ⬅️ new client component

>>>>>>> b214e5e (first commit)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Organic Ads - Digital Marketing Company in Bangalore",
  description:
    "We provide the best digital marketing services in Bangalore including SEO, Google Ads, Social Media, and more. Grow your business with Organic Ads.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
        
        {/* Dynamic canonical URL script */}
=======
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="fdD6fl5cXCKKEUwPxLxT1gXLOSeUDz0F5Pa1RrvSlB0"
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://organicads.in/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* ✅ Google Tag Manager (head) */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KDZZX9M3');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KDZZX9M3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* ✅ Dynamic JSON-LD Schema injected here */}
        <DynamicSchema />

        {children}

        {/* ✅ Canonical Fix Script */}
>>>>>>> b214e5e (first commit)
        <Script id="dynamic-canonical">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              const canonicalLink = document.querySelector('link[rel="canonical"]');
              if (canonicalLink) {
                const currentPath = canonicalLink.getAttribute('href');
                const protocol = window.location.protocol;
                const host = window.location.host;
                if (!currentPath.startsWith('http')) {
                  canonicalLink.href = protocol + '//' + host + currentPath;
                }
              }
            });
          `}
        </Script>
<<<<<<< HEAD
=======

        <GoogleAnalytics gaId="G-QQZXPCK2FW" />
>>>>>>> b214e5e (first commit)
      </body>
       <GoogleAnalytics gaId="G-QQZXPCK2FW" />
    </html>
  );
}