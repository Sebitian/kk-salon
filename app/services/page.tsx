import type { Metadata } from "next"
import ServicesHero from "@/components/services/services-hero"
import ServicesContent from "@/components/services/services-content"

export const metadata: Metadata = {
  title: "Our Services - Kossof Salon Spa",
  description:
    "Explore our comprehensive range of haircut, color, and treatment services. From precision cuts to luxurious treatments, we offer expert care for all your hair needs.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesContent />
    </>
  )
}
