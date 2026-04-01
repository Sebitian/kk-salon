"use client"

import { Facebook, Instagram } from "lucide-react"
import { TikTokLogo } from "@/components/icons/tiktok-logo"

export default function MediaSection() {
  return (
    <section
      className="pt-10 sm:pt-12 pb-20 sm:pb-24 px-4 relative overflow-hidden"
      style={{
        backgroundColor: "#cad7de",
        fontFamily: "var(--font-montserrat), sans-serif",
      }}
    >
      {/* Subtle shadow effect */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at top right, rgba(37, 28, 24, 0.08), transparent 70%)",
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-10 sm:mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[0.15em] sm:tracking-[0.2em] text-salon-brown">
            MEDIA
          </h2>
          <div className="w-16 h-1 bg-salon-raspberry mx-auto mt-4"></div>
          <p className="text-base sm:text-lg lg:text-xl text-salon-brown/60 pt-3 sm:pt-4">
            Follow Our Journey on Social Media
          </p>
        </div>

        <div className="mb-10 sm:mb-12 flex flex-col items-center gap-4 sm:gap-5">
          <p className="text-xs sm:text-sm uppercase tracking-[0.14em] text-salon-brown/70">Follow us on social</p>
          <div className="w-full max-w-md sm:max-w-none flex flex-col sm:flex-row items-stretch sm:items-start justify-center gap-3 sm:gap-8">
            <a
              href="https://www.facebook.com/people/Kossof-Salon-Spa/61582500130935/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full sm:w-auto items-center sm:items-center justify-start sm:justify-center gap-3 sm:gap-2 rounded-2xl border border-white/90 bg-white/65 px-4 sm:px-5 py-3.5 sm:py-4 shadow-[0_10px_22px_-16px_rgba(37,28,24,0.5)] transition-all hover:-translate-y-0.5 hover:bg-white/85 active:translate-y-0 active:scale-[0.995]"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-6 w-6 text-[#00a6ff] group-hover:opacity-80 transition-opacity" />
              <span className="text-sm sm:text-[15px] text-salon-brown underline underline-offset-4 group-hover:text-salon-blue transition-colors">
                Follow us on Facebook
              </span>
            </a>
            <a
              href="https://www.instagram.com/kossof_salonspa/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full sm:w-auto items-center sm:items-center justify-start sm:justify-center gap-3 sm:gap-2 rounded-2xl border border-white/90 bg-white/65 px-4 sm:px-5 py-3.5 sm:py-4 shadow-[0_10px_22px_-16px_rgba(37,28,24,0.5)] transition-all hover:-translate-y-0.5 hover:bg-white/85 active:translate-y-0 active:scale-[0.995]"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-6 w-6 text-[#ff2a8e] group-hover:opacity-80 transition-opacity" />
              <span className="text-sm sm:text-[15px] text-salon-brown underline underline-offset-4 group-hover:text-salon-blue transition-colors">
                Follow us on Instagram
              </span>
            </a>
            <a
              href="https://www.tiktok.com/@kossof.salon.spa"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full sm:w-auto items-center sm:items-center justify-start sm:justify-center gap-3 sm:gap-2 rounded-2xl border border-white/90 bg-white/65 px-4 sm:px-5 py-3.5 sm:py-4 shadow-[0_10px_22px_-16px_rgba(37,28,24,0.5)] transition-all hover:-translate-y-0.5 hover:bg-white/85 active:translate-y-0 active:scale-[0.995]"
              aria-label="Follow us on TikTok"
            >
              <TikTokLogo className="h-6 w-6 shrink-0 group-hover:opacity-90 transition-opacity" />
              <span className="text-sm sm:text-[15px] text-salon-brown underline underline-offset-4 group-hover:text-salon-blue transition-colors">
                Follow us on TikTok
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
