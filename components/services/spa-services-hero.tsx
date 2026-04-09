import Link from "next/link"

export default function SpaServicesHero() {
  return (
    <section className="pt-40 sm:pt-44 pb-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div
          className="text-center space-y-4"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-salon-brown">
            Spa Services
          </h1>
          <div className="w-24 h-1 bg-salon-blue mx-auto mt-4" />
          <p className="text-salon-brown/70 text-xl lg:text-2xl font-light tracking-wide max-w-2xl mx-auto pt-4">
            Waxing, Makeup, Facials, Body Treatments & Massage Therapies
          </p>
          <p className="text-salon-brown/80 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto italic font-light pt-2">
            Indulge in our curated spa experiences.
          </p>
          <div className="pt-8 flex w-full items-center justify-center">
            <Link
              href="https://booking.mangomint.com/kossofsalonspa"
              target="_blank"
              rel="noopener noreferrer"
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
