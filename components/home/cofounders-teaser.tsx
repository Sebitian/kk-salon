import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CofoundersTeaser() {
  return (
    <section className="bg-white py-12 sm:py-20 lg:py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div className="mb-6">
              <Button
                asChild
                size="lg"
                className="text-xs sm:text-sm tracking-[0.2em] px-8 sm:px-10 py-6 bg-salon-raspberry hover:bg-salon-raspberry/90 text-white transition-all duration-300 rounded-sm uppercase w-full sm:w-auto"
              >
                <Link href="https://booking.mangomint.com/kossofsalonspa">Book Online</Link>
              </Button>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-salon-brown">
              About Us
            </h2>
            <div className="w-16 h-1 bg-salon-raspberry mx-auto mt-4" />
          </div>

          <div className="mt-8 sm:mt-10">
            <div className="relative h-56 sm:h-64 lg:h-72 w-full max-w-4xl mx-auto overflow-hidden border border-salon-blue/40 border-b-0 rounded-t-sm">
              <Image
                src="/ky_amy.jpeg"
                alt="Keeley Kossof and Amy Kraaz"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1280px) 896px, (min-width: 1024px) 80vw, 100vw"
              />
            </div>
          </div>

          <div className="mt-0 bg-salon-taupe/40 border border-salon-blue/40 rounded-b-sm shadow-md p-5 sm:p-10 text-left">
            <div className="space-y-5 text-salon-brown/80 leading-relaxed text-base sm:text-lg font-light">
              <p>
                <strong className="font-semibold text-salon-brown">
                  Kossof Salon Spa
                </strong>{" "}
                was created by{" "}
                <strong className="font-semibold text-salon-brown">
                  Keeley Kossof
                </strong>{" "}
                and{" "}
                <strong className="font-semibold text-salon-brown">
                  Amy Kraaz
                </strong>
                , two
                experienced hairstylists who built their careers working alongside
                Keeley’s father,{" "}
                <strong className="font-semibold text-salon-brown">
                  Teddie Kossof
                </strong>
                , at the renowned{" "}
                <strong className="font-semibold text-salon-brown">
                  Teddie Kossof Salon Spa
                </strong>
                . With a legacy of excellence spanning over 50 years, the Kossof
                name has long been trusted for beauty, professionalism, and an
                elevated guest experience. For several years, Keeley and Amy also
                managed Teddie Kossof Salon Spa together, strengthening their
                leadership skills and deepening their shared commitment to running
                a salon with excellence and integrity.
              </p>
              <p>
                Through years of working together, Keeley and Amy not only refined
                their craft — they also became close friends. Their personalities
                balance each other perfectly, creating a dynamic partnership built
                on trust, passion, and a shared commitment to excellence. Together, they founded{" "}
                <strong className="font-semibold text-salon-brown">
                  Kossof Salon Spa
                </strong>{" "}
                with one clear purpose: to create a destination where every guest
                feels confident, cared for, and truly valued.
              </p>
              <p>
                At{" "}
                <strong className="font-semibold text-salon-brown">
                  Kossof Salon Spa
                </strong>
                , our vision is simple — to deliver Luxury, Beauty, and Experience
                in every visit. We are proud to offer a welcoming, fun, and social
                environment where clients can relax, connect, and enjoy an elevated
                salon and spa experience supported by top-notch hospitality and
                exceptional service.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 flex justify-center">
              <Button
                asChild
                size="lg"
                className="text-xs sm:text-sm tracking-[0.2em] px-8 sm:px-10 py-6 bg-salon-raspberry hover:bg-salon-raspberry/90 text-white transition-all duration-300 rounded-sm uppercase w-full sm:w-auto"
              >
                <Link href="/about">Talent</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

