import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { IMAGES } from "@/lib/cloudinary"

export default function CofoundersTeaser() {
  return (
    <section className="bg-white py-12 sm:py-20 lg:py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-salon-brown">
              About Us
            </h2>
            <div className="w-16 h-1 bg-salon-raspberry mx-auto mt-4" />
          </div>

          <div className="mt-8 sm:mt-10">
            <div className="relative h-56 sm:h-64 lg:h-72 w-full max-w-4xl mx-auto overflow-hidden border border-salon-blue/40 border-b-0 rounded-t-sm">
              <Image
                src={IMAGES.kyAmy}
                alt="Keeley Kossof and Amy Kraaz"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1280px) 896px, (min-width: 1024px) 80vw, 100vw"
              />
            </div>
          </div>

          {/* About Us paragraph content hidden for now */}
        </div>
      </div>
    </section>
  )
}

