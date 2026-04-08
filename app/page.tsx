import Link from "next/link"
import Image from "next/image"
import { Dancing_Script } from "next/font/google"
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
import { IMAGES } from "@/lib/cloudinary"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["500", "700"],
})


export default function Home() {
  return (
    <>
      {/* ===============TEST */}
      <HeroSection />
      <div className="bg-black py-4 sm:py-5">
        <div className="mx-auto flex max-w-3xl flex-col gap-3 px-3 sm:px-5">
          <Link
            href="/products"
            className="w-full inline-flex items-center justify-center rounded-full px-7 sm:px-9 py-4 sm:py-5 bg-black text-white shadow-[0_10px_26px_rgba(0,0,0,0.45)] ring-1 ring-white/30 text-base sm:text-lg font-semibold tracking-[0.12em] uppercase"
          >
            Shop Our Brands
          </Link>
          <Link
            href="/salon-services"
            className="w-full inline-flex items-center justify-center rounded-full px-7 sm:px-9 py-4 sm:py-5 bg-black text-white shadow-[0_10px_26px_rgba(0,0,0,0.45)] ring-1 ring-white/30 text-base sm:text-lg font-semibold tracking-[0.12em] uppercase"
          >
            Salon Services
          </Link>
          <Link
            href="/spa-services"
            className="w-full inline-flex items-center justify-center rounded-full px-7 sm:px-9 py-4 sm:py-5 bg-black text-white shadow-[0_10px_26px_rgba(0,0,0,0.45)] ring-1 ring-white/30 text-base sm:text-lg font-semibold tracking-[0.12em] uppercase"
          >
            Spa Services
          </Link>
          <Link
            href="/weddings-services"
            className="w-full inline-flex items-center justify-center rounded-full px-7 sm:px-9 py-4 sm:py-5 bg-black text-white shadow-[0_10px_26px_rgba(0,0,0,0.45)] ring-1 ring-white/30 text-base sm:text-lg font-semibold tracking-[0.12em] uppercase"
          >
            Weddings Services
          </Link>
        </div>
      </div>
      <WhyChooseUsSection />
      <section className="py-16 px-4 bg-white" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-4">
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-black">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-salon-blue mx-auto mt-4"></div>
          </div>

          <div className="mt-10 rounded-2xl overflow-hidden shadow-xl bg-white">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10]">
              <Image
                src={IMAGES.keeleyAmy}
                alt="Keeley and Amy"
                fill
                className="object-cover object-[center_18%]"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
            <div className="px-6 py-8 sm:px-10 sm:py-10 space-y-5 text-black text-center">
              <p className={`${dancingScript.className} text-4xl sm:text-5xl font-semibold leading-tight tracking-normal`}>
                It's About the Little Things...
              </p>
              <p className="text-lg sm:text-xl leading-relaxed font-light text-black">
                We believe taking time for yourself isn't a luxury - it's essential. It's the quiet moments, the
                thoughtful details, and the care behind every service that make all the difference.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed font-light text-black">
                Our team works together with respect, trust, and heart to create an experience that feels both elevated
                and personal.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed font-light text-black">
                Here, luxury meets beauty, and together they become an experience - one designed just for you.
              </p>
              <p className={`${dancingScript.className} text-4xl sm:text-5xl leading-tight font-semibold pt-1`}>
                With love,
                <br />
                Keeley & Amy
              </p>
              <div className="pt-3 flex justify-center">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center text-center min-w-[210px] px-8 py-4 text-base sm:text-lg font-semibold tracking-widest uppercase rounded-sm bg-primary text-white hover:bg-primary/90 transition-colors"
                >
                  Meet The Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <ProductsVideoShowcase /> */}
      <TestimonialsSection />
      {/* <MediaSection /> */}
      
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
