import type { Metadata } from "next"
import SpaServicesHero from "@/components/services/spa-services-hero"
import ServicesContent from "@/components/services/services-content"
import { SPA_SERVICES_SECTIONS } from "@/components/services/spa-services-data"

export const metadata: Metadata = {
  title: "Spa Services & Pricing | Facials, Massage Therapies, Makeup & Body - Kossof Salon Spa",
  description:
    "Explore our full menu of luxury spa services: waxing, lashes + brows, makeup artistry, facials, advanced facial treatments, body treatments, massage therapies, and spa enhancements.",
  keywords:
    "spa services, makeup artistry, facials, microdermabrasion, LED facial, body treatments, body wrap, body scrub, massage, waxing, lash lift, deep tissue massage, hot stone massage, couples massage, aromatherapy",
  openGraph: {
    title: "Kossof Spa Services & Pricing",
    description:
      "Luxury spa services including makeup artistry, facials, body treatments, and massage therapies. View our full pricing menu and book your appointment.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Luxury spa treatment setting",
      },
    ],
  },
}

export default function SpaServicesPage() {
  return (
    <>
      <SpaServicesHero />
      <ServicesContent
        sections={SPA_SERVICES_SECTIONS}
        schemaName="Kossof Spa Services"
        schemaDescription="Full spa service menu including waxing, lashes + brows, makeup artistry, facials, advanced facial treatments, body treatments, body wraps, and massage therapies."
        searchPlaceholder="Try: massage, facial, makeup, body wrap, scrub..."
      />
    </>
  )
}
