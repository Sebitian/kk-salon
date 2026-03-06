import Link from "next/link"
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
import ProductsVideoShowcase from "@/components/home/products-video-showcase"


export default function Home() {
  return (
    <>
      {/* ===============TEST */}
      <HeroSection />
      <section className="bg-white py-6 sm:py-8">
        <div className="container-custom">
          <div className="mx-auto flex w-full max-w-md flex-col items-center gap-3 sm:max-w-2xl sm:flex-row sm:flex-wrap sm:justify-center">
            <Link
              href="https://booking.mangomint.com/kossofsalonspa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-64 items-center justify-center bg-salon-raspberry text-white px-8 py-3 rounded-sm text-xs sm:text-sm font-semibold tracking-widest uppercase hover:bg-salon-raspberry/90 transition-colors"
            >
              Book Now
            </Link>
            <Link
              href="/salon-services"
              className="inline-flex w-64 items-center justify-center bg-white text-salon-brown border border-salon-brown/20 px-8 py-3 rounded-sm text-xs sm:text-sm font-semibold tracking-widest uppercase hover:border-salon-blue/60 transition-colors"
            >
              Salon
            </Link>
            <Link
              href="/spa-services"
              className="inline-flex w-64 items-center justify-center bg-white text-salon-brown border border-salon-brown/20 px-8 py-3 rounded-sm text-xs sm:text-sm font-semibold tracking-widest uppercase hover:border-salon-blue/60 transition-colors"
            >
              Spa
            </Link>
            <Link
              href="/weddings-services"
              className="inline-flex w-64 items-center justify-center bg-white text-salon-brown border border-salon-brown/20 px-8 py-3 rounded-sm text-xs sm:text-sm font-semibold tracking-widest uppercase hover:border-salon-blue/60 transition-colors"
            >
              Weddings Services
            </Link>
          </div>
        </div>
      </section>
      <WhyChooseUsSection />
      {/* <ProductsVideoShowcase /> */}
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
