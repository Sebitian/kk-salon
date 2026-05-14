import type { Metadata } from "next"
import SalonServicesHero from "@/components/services/salon-services-hero"
import ServicesContent from "@/components/services/services-content"
import { SALON_SERVICES_SECTIONS } from "@/components/services/salon-services-data"

export const metadata: Metadata = {
  title: "Salon Services & Pricing | Hair & Nails - Kossof Salon Spa",
  description:
    "Explore our full menu of luxury salon services: haircuts, color, treatments, retexturizing, and nails.",
  keywords:
    "salon services, haircuts, hair color, balayage, keratin treatments, nails, manicure, pedicure",
  openGraph: {
    title: "Kossof Salon Services & Pricing",
    description:
      "Luxury salon services across hair, nails, and beauty. View our full pricing menu and book your appointment.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Professional hair salon services",
      },
    ],
  },
}

export default function SalonServicesPage() {
  return (
    <>
      <SalonServicesHero />
      <ServicesContent
        sections={SALON_SERVICES_SECTIONS}
        schemaName="Kossof Salon Services"
        schemaDescription="Full salon service menu including haircuts, color, treatments, and nails."
        searchPlaceholder="Try: balayage, keratin, manicure, waxing..."
        showSectionNav={false}
      />
    </>
  )
}
