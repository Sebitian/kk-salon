import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CofoundersTeaser() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div
          className="flex flex-col items-center text-center gap-8"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-salon-brown">
              Our Cofounders
            </h2>
            <div className="w-20 h-1 bg-salon-blue mx-auto" />
          </div>

          <p className="text-salon-brown text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl font-light">
            Kossof Salon Spa was created by{" "}
            <strong className="font-semibold">Keeley Kossof</strong> and{" "}
            <strong className="font-semibold">Amy Kraaz</strong> and built on a
            Kossof legacy of excellence spanning over{" "}
            <strong className="font-semibold">50 years</strong>.
          </p>

          {/* Amy placeholder uses Keeley for now */}
          <div className="flex items-center justify-center gap-6">
            <div className="flex flex-col items-center gap-3">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-salon-blue/30 shadow-md">
                <Image
                  src="/keeley.jpg"
                  alt="Keeley Kossof"
                  fill
                  className="object-cover object-center"
                  sizes="96px"
                />
              </div>
              <span className="text-salon-brown font-semibold tracking-widest uppercase text-sm">
                Keeley
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-salon-blue/30 shadow-md">
                <Image
                  src="/keeley.jpg"
                  alt="Amy Kraaz"
                  fill
                  className="object-cover object-center"
                  sizes="96px"
                />
              </div>
              <span className="text-salon-brown font-semibold tracking-widest uppercase text-sm">
                Amy
              </span>
            </div>
          </div>

          <p className="text-salon-brown/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl italic font-light">
            Our vision is to deliver <strong>Luxury, Beauty, and Experience</strong>{" "}
            in every visit—within a welcoming, fun, and social environment supported
            by top-notch hospitality and exceptional service.
          </p>

          <Button
            asChild
            size="lg"
            className="text-sm tracking-[0.2em] px-10 py-6 bg-salon-raspberry hover:bg-salon-raspberry/90 text-white transition-all duration-300 rounded-sm uppercase"
          >
            <Link href="/about">Meet Our Cofounders</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

