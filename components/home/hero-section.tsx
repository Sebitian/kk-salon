import Link from "next/link"
import { VIDEOS } from "@/lib/cloudinary"

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] sm:min-h-[100vh] flex items-center justify-center overflow-hidden bg-white pt-20">
      <div className="absolute inset-0 z-0">
        <video
          src={VIDEOS.services}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 z-[1]" />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full px-4 sm:px-6">
        <div className="mt-8 lg:mt-12 mb-3 sm:mb-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href="https://maps.google.com/maps?q=Salon%20Bennett%2C%20185%20N%20Milwaukee%20Ave%20Suite%20120%2C%20Lincolnshire%2C%20IL%2060069"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-white/90 text-xs sm:text-sm font-medium uppercase drop-shadow-[0_4px_14px_rgba(0,0,0,0.45)] hover:text-white transition-colors"
          >
            <span className="block tracking-[0.2em]">185 Milwaukee Ave</span>
            <span className="block tracking-[0.2em]">Lincolnshire, IL</span>
          </Link>
          <span className="text-white/60 text-xs sm:text-sm">|</span>
          <Link
            href="tel:8478216604"
            className="text-center text-white/90 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase drop-shadow-[0_4px_14px_rgba(0,0,0,0.45)] hover:text-white transition-colors"
          >
            847-821-6604
          </Link>
        </div>
        <div className="w-full max-w-5xl px-4 py-6 sm:px-8 sm:py-8 lg:py-10">
          <div className="flex flex-col items-center gap-1 sm:gap-2">
            <span className="block text-center text-white text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-light leading-none tracking-[0.18em] sm:tracking-[0.3em] uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] pl-[0.18em] sm:pl-[0.3em]">
              Beauty
            </span>
            <span
              className="h-px w-36 sm:w-52 lg:w-64 bg-white/85"
              aria-hidden="true"
            />
            <span className="block text-center text-white text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-light leading-none tracking-[0.18em] sm:tracking-[0.3em] uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] pl-[0.18em] sm:pl-[0.3em]">
              Luxury
            </span>
            <span
              className="h-px w-36 sm:w-52 lg:w-64 bg-white/85"
              aria-hidden="true"
            />
            <span className="block text-center text-white text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-light leading-none tracking-[0.18em] sm:tracking-[0.3em] uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] pl-[0.18em] sm:pl-[0.3em]">
              Experience
            </span>
          </div>

          <div className="mt-9 sm:mt-11 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="https://booking.mangomint.com/kossofsalonspa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-center min-w-[210px] px-8 py-4 text-base sm:text-lg font-semibold tracking-widest uppercase rounded-sm bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              Book Now
            </Link>
            <Link
              href="https://clients.mangomint.com/gift-cards/741141"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-center min-w-[210px] px-8 py-4 text-base sm:text-lg font-semibold tracking-widest uppercase rounded-sm border border-white/80 text-white hover:bg-white hover:text-salon-brown transition-colors"
            >
              Gift Cards
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}