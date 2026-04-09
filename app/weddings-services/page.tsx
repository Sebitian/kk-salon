import type { Metadata } from "next"
import WeddingsServicesHero from "@/components/services/weddings-services-hero"
import ServicesContent from "@/components/services/services-content"
import { WEDDINGS_SERVICES_SECTIONS } from "@/components/services/weddings-services-data"

export const metadata: Metadata = {
  title: "Wedding Services | Bridal Hair & Makeup - Kossof Salon Spa",
  description:
    "Explore our wedding services menu with in-salon and on-location bridal hair and makeup for brides and bridal parties.",
  keywords:
    "wedding services, bridal hair, bridal makeup, wedding day hair, wedding day makeup, on-location bridal services",
  openGraph: {
    title: "Kossof Wedding Services",
    description:
      "Bridal hair and makeup services for weddings, with in-salon and on-location options.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Bridal hair and makeup styling",
      },
    ],
  },
}

export default function WeddingsServicesPage() {
  return (
    <>
      <WeddingsServicesHero />
      <ServicesContent
        sections={WEDDINGS_SERVICES_SECTIONS}
        schemaName="Kossof Wedding Services"
        schemaDescription="Wedding service menu including in-salon and on-location bridal hair and makeup."
        searchPlaceholder="Try: bridal hair, bridal makeup, on-location..."
        footerCallSchedule={{ tel: "8478216604", numberDisplay: "847-821-6604" }}
      />
    </>
  )
}
