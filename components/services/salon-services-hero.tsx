import Link from "next/link"

import { SALON_SERVICES_HERO_JUMP_LINKS } from "@/components/services/salon-services-data"

const jumpBtnClass =
  "inline-flex w-fit max-w-[12.5rem] items-center justify-center rounded-full border border-salon-brown/15 bg-[#f7f7f8]/95 px-3.5 py-2.5 text-center text-[10px] font-semibold uppercase leading-snug tracking-[0.06em] text-salon-brown whitespace-normal break-words shadow-[0_2px_10px_rgba(0,0,0,0.04)] backdrop-blur-sm transition-colors hover:border-salon-raspberry/35 hover:bg-salon-raspberry/[0.08] sm:max-w-none sm:px-5 sm:text-xs sm:tracking-[0.08em]"

export default function SalonServicesHero() {
  return (
    <section className="pt-40 sm:pt-44 pb-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div
          className="text-center space-y-4"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-salon-brown">
            Salon Services
          </h1>
          <div className="w-24 h-1 bg-salon-blue mx-auto mt-4" />
          <p className="text-salon-brown/70 text-xl lg:text-2xl font-light tracking-wide max-w-2xl mx-auto pt-4">
            Hair & Nails
          </p>
          <p className="text-salon-brown/80 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto italic font-light pt-2">
            Explore our full menu of elevated salon services. Please click one of the booking options to see a list of
            services.
          </p>
          <nav
            className="mx-auto flex w-full max-w-4xl flex-wrap justify-center gap-2 pt-6 sm:gap-2.5"
            aria-label="Salon service categories"
          >
            {SALON_SERVICES_HERO_JUMP_LINKS.map((item) => {
              if (item.external) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={jumpBtnClass}
                  >
                    {item.label}
                  </a>
                )
              }
              if (item.href.startsWith("#")) {
                return (
                  <a key={item.label} href={item.href} className={jumpBtnClass}>
                    {item.label}
                  </a>
                )
              }
              return (
                <Link key={item.label} href={item.href} className={jumpBtnClass}>
                  {item.label}
                </Link>
              )
            })}
          </nav>
          <div className="pt-8 flex w-full items-center justify-center">
            <Link
              href="https://booking.mangomint.com/kossofsalonspa"
              className="inline-flex w-full max-w-xs sm:w-auto sm:min-w-[210px] items-center justify-center whitespace-nowrap bg-salon-raspberry text-white px-8 py-3.5 rounded-sm text-sm font-semibold tracking-[0.12em] uppercase hover:bg-salon-raspberry/90 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
