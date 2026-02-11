import HeroSection from "@/components/home/hero-section"
import ServicesOverview from "@/components/home/services-overview"
import WhyChooseUsSection from "@/components/home/why-choose-us-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import MediaSection from "@/components/home/media-section"
import InstagramSection from "@/components/home/instagram-section"
import CTASection from "@/components/home/cta-section"
import BookShopSection from "@/components/home/book-shop-section"
import ShopShowcase from "@/components/home/shop-showcase"
import ShopCollections from "@/components/home/shop-collections"
import ComingSoonPage from "@/components/home/coming-soon"
import CofoundersTeaser from "@/components/home/cofounders-teaser"


export default function Home() {
  return (
    <>
      {/* ===============TEST */}
      <HeroSection />
      <CofoundersTeaser />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <MediaSection />
      
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
