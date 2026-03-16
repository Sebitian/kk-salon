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
      <div className="grid grid-cols-2 grid-rows-2">
        <Link
          href="https://booking.mangomint.com/kossofsalonspa"
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square flex items-center justify-center bg-salon-raspberry text-white text-sm sm:text-base font-semibold tracking-widest uppercase hover:bg-salon-raspberry/90 transition-colors"
        >
          Book Now
        </Link>
        <Link
          href="/salon-services"
          className="aspect-square flex items-center justify-center bg-white text-salon-brown border border-salon-brown/10 text-sm sm:text-base font-semibold tracking-widest uppercase hover:bg-gray-50 hover:text-salon-blue transition-colors"
        >
          Salon
        </Link>
        <Link
          href="/spa-services"
          className="aspect-square flex items-center justify-center bg-white text-salon-brown border border-salon-brown/10 text-sm sm:text-base font-semibold tracking-widest uppercase hover:bg-gray-50 hover:text-salon-blue transition-colors"
        >
          Spa
        </Link>
        <Link
          href="/weddings-services"
          className="aspect-square flex items-center justify-center bg-white text-salon-brown border border-salon-brown/10 text-sm sm:text-base font-semibold tracking-widest uppercase hover:bg-gray-50 hover:text-salon-blue transition-colors"
        >
          Weddings
        </Link>
      </div>
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
