import type React from "react"
import type { Metadata } from "next"
import { Poppins, Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WhatsAppWidget from "@/components/widgets/whatsapp-widget"
import GoogleAnalytics from "@/components/analytics/google-analytics"
import MangomintOverlay from "@/components/booking/mangomint-overlay"
import { Analytics } from "@vercel/analytics/next"


import JsonLd from "@/components/json-ld"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: {
    default: "Kossof Salon Spa - Lincolnshire, IL",
    template: "%s | Kossof Salon Spa"
  },
  description: "Kossof Salon Spa in Lincolnshire, IL offers luxury hair, nail, and beauty services. Experience expert haircuts, styling, color, and spa treatments in a relaxing environment.",
  keywords: ["salon Lincolnshire IL", "beauty spa", "haircuts", "hair color", "nail salon", "makeup services", "Kossof Salon", "luxury spa"],
  metadataBase: new URL("https://kossofsalonspa.com"),
  openGraph: {
    title: "Kossof Salon Spa - Lincolnshire, IL",
    description: "Premier salon and spa in Lincolnshire offering expert hair, nail, and beauty services.",
    url: "https://kossofsalonspa.com",
    siteName: "Kossof Salon Spa",
    images: [
      {
        url: "/klogo.png",
        width: 800,
        height: 600,
        alt: "Kossof Salon Spa Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kossof Salon Spa - Lincolnshire, IL",
    description: "Premier salon and spa in Lincolnshire offering expert hair, nail, and beauty services.",
    images: ["/klogo.png"],
  },
  icons: {
    icon: "/klogo.png",
    shortcut: "/klogo.png",
    apple: "/klogo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${montserrat.variable} font-sans`}>
        <JsonLd />
        {/* <GoogleAnalytics /> */}
        <Analytics />
        {/* <MangomintOverlay /> */}
        {/* <Header /> */}
        <main>{children}</main>
        {/* <Footer /> */}
        {/* <WhatsAppWidget /> */}
      </body>
    </html>
  )
}
