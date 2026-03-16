import type { Metadata } from "next"
import Link from "next/link"

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
            Choose a product partner below.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="https://shop.saloninteractive.com/store/kossof-salon-spa-ltd-91277"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm px-6 py-3 text-xs sm:text-sm font-semibold tracking-widest uppercase bg-salon-raspberry text-white hover:bg-salon-raspberry/90 transition-colors min-w-[230px]"
          >
            Salon Interactive
          </Link>
          <Link
            href="https://tidd.ly/3Nn3azv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm px-6 py-3 text-xs sm:text-sm font-semibold tracking-widest uppercase bg-white text-salon-brown border border-salon-brown/20 hover:bg-salon-brown/5 transition-colors min-w-[230px]"
          >
            Farmhouse Fresh
          </Link>
        </div>
      </div>
    </section>
  )
}
