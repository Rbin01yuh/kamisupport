import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "KAMIDUKUNG - Platform & Agensi Teknologi Modern",
  description:
    "Mendukung digitalisasi bisnis tanpa batas. Dari UMKM hingga Enterprise, solusi teknologi modern untuk semua.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/pictures/kamidukung.png", sizes: "any" },
      { url: "/pictures/kamidukung.png", sizes: "16x16", type: "image/png" },
      { url: "/pictures/kamidukung.png", sizes: "32x32", type: "image/png" },
      { url: "/pictures/kamidukung.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/pictures/kamidukung.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/pictures/kamidukung.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${plusJakartaSans.variable} ${plusJakartaSans.className} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
        
        {/* Tawk.to Live Chat Script */}
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                
                // Suppress Tawk.to internal errors
                window.addEventListener('error', function(e) {
                  if (e.filename && e.filename.includes('tawk.to')) {
                    e.preventDefault();
                    return true;
                  }
                }, true);
                
                (function(){
                  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                  s1.async=true;
                  s1.src='https://embed.tawk.to/694ca95c477298197c6e136d/1jd9nb530';
                  s1.charset='UTF-8';
                  s1.setAttribute('crossorigin','*');
                  s1.onerror = function() {
                    console.warn('Tawk.to failed to load');
                  };
                  s0.parentNode.insertBefore(s1,s0);
                })();
              } catch(err) {
                console.warn('Tawk.to initialization error:', err);
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
