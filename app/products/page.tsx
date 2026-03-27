import type { Metadata } from "next"
import Link from "next/link"
import { cloudinaryVideo } from "@/lib/cloudinary"

export const metadata: Metadata = {
  title: "Shop - Kossof Salon Spa",
  description: "Shop products from Salon Interactive and Farmhouse Fresh.",
}

export default function ProductsPage() {
  return (
    <section className="pt-40 sm:pt-44 pb-20 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-salon-brown tracking-widest uppercase">
            Shop
          </h1>
          <div className="w-20 h-1 bg-salon-raspberry mx-auto mt-5" />
          <p className="mt-6 text-salon-brown/70 text-base sm:text-lg">
            Shop your favorite products below.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <Link
              href="https://shop.saloninteractive.com/store/kossof-salon-spa-ltd-91277"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm px-6 py-3 text-xs sm:text-sm font-semibold tracking-widest uppercase bg-salon-raspberry text-white hover:bg-salon-raspberry/90 transition-colors w-full"
            >
              Salon Interactive
            </Link>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-2xl">
              <video
                src={cloudinaryVideo("Kossof.Products.Final_1_dvjdyq")}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <Link
              href="https://tidd.ly/3Nn3azv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm px-6 py-3 text-xs sm:text-sm font-semibold tracking-widest uppercase bg-salon-blue text-salon-brown hover:bg-salon-blue/80 transition-colors w-full"
            >
              Farmhouse Fresh
            </Link>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-2xl">
              <video
                src={cloudinaryVideo("Kossof.FarmhouseFresh.Final_1_edwiwv")}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
