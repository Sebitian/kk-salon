import type { Metadata } from "next"
import HeroSection from "@/components/home/hero-section"
import ServicesOverview from "@/components/home/services-overview"
import WhyChooseUsSection from "@/components/home/why-choose-us-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import InstagramSection from "@/components/home/instagram-section"
import CTASection from "@/components/home/cta-section"
import BookShopSection from "@/components/home/book-shop-section"
import ShopShowcase from "@/components/home/shop-showcase"
import MeetTeamSection from "@/components/home/meet-team-section"
import ShopCollections from "@/components/home/shop-collections"
import ComingSoonPage from "@/components/home/coming-soon"

export const metadata: Metadata = {
  title: "Kossof Salon Spa - Lincolnshire, IL",
  openGraph: {
    title: "Kossof Salon Spa - Lincolnshire, IL",
    description:
      "",
    images: ["/public/logo.png"],
    type: "website",
    locale: "en_US",
  },
}

export default function Home() {
  return (
    <>
      {/* ===============TEST */}
      <HeroSection />
      <MeetTeamSection />
      <TestimonialsSection />
      {/* <WhyChooseUsSection /> */}
      {/* =============== */}
      
      {/* <SalonBlissHomepage /> */}
      {/* <ComingSoonPage /> */}
      {/* <HeroSection /> */}
      {/* <BookShopSection /> */}
      {/* <ShopShowcase /> */}
      {/* <ShopCollections /> */}
      {/* <MeetTeamSection /> */}
      {/* <ServicesOverview /> */}
      {/* <WhyChooseUsSection />
      <TestimonialsSection />
      <InstagramSection /> */}
      {/* <CTASection /> */}
    </>
  )
}
