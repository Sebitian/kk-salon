import type React from "react"
import type { Metadata } from "next"
import { Poppins, Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WhatsAppWidget from "@/components/widgets/whatsapp-widget"
import GoogleAnalytics from "@/components/analytics/google-analytics"

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
  title: "Kossof Salon Spa - Lincolnshire, IL",
  description:
    "",
  // keywords: "unisex salon, beauty salon Lincolnshire, haircuts, hairstyling, nail care, beauty treatments, makeup services",
  icons: {
    icon: [
      { url: "/klogo.png" },
      { url: "/kogo.png", type: "image/png", sizes: "64x64" }
    ],
    apple: "/images/venegas-logo.jpeg",
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
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
        {/* <WhatsAppWidget /> */}
      </body>
    </html>
  )
}
