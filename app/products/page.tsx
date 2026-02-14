import type { Metadata } from "next"
import Link from "next/link"
import { getBlobUrls } from "@/lib/blob"

export const metadata: Metadata = {
  title: "Professional Hair Care Products - Kossof Salon Spa",
  description: "Explore the professional hair care lines we carry, including Milbon, Moroccanoil, and more at Kossof Salon Spa.",
}

const productLines = [
  {
    name: "Milbon",
    description: "Japan's #1 professional hair care brand, offering sophisticated treatments for every hair type.",
    videoFilename: "Kossof_Products_Final.mov",
  },
  {
    name: "Moroccanoil",
    description: "The pioneer of oil-infused hair care, providing the perfect foundation for all hair types.",
    videoFilename: "Kossof.Moroccan.Final.mov",
  },
  {
    name: "Keratin Complex",
    description: "Revolutionary smoothing treatments and products that eliminate frizz and restore health to hair.",
    videoFilename: "Kossof.FarmhouseFresh.Final.mov",
  },
]

export default async function ProductsPage() {
  const urls = await getBlobUrls(productLines.map((l) => l.videoFilename))
  const productLinesWithUrls = productLines.map((line) => ({
    ...line,
    video: urls[line.videoFilename],
  }))
  return (
    <div className="pt-24 bg-white">
      <section className="py-20 px-6 bg-[#ede7e4]/20">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-salon-brown mb-8 uppercase tracking-widest">
            Products
          </h1>
          <div className="w-24 h-1 bg-salon-raspberry mx-auto mb-8"></div>
          <p className="text-xl text-salon-brown/60 max-w-2xl mx-auto font-light leading-relaxed">
            We curate only the finest professional hair care lines to ensure your hair stays healthy and beautiful long after you leave the salon.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {productLinesWithUrls.map((line) => (
              <div key={line.name} className="flex flex-col group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-8 shadow-2xl [contain:paint]">
                  <video
                    src={line.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out transform-gpu will-change-transform backface-hidden group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-salon-brown/10 group-hover:bg-salon-brown/0 transition-colors duration-500"></div>
                </div>
                <h3 className="text-2xl font-bold text-salon-brown mb-4 tracking-wider uppercase">{line.name}</h3>
                <p className="text-salon-brown/70 font-light leading-relaxed mb-8">
                  {line.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-32 p-12 bg-salon-brown text-white text-center rounded-sm">
            <h2 className="text-3xl font-bold mb-6 uppercase tracking-widest">Shop Online Coming Soon</h2>
            <p className="text-white/70 max-w-xl mx-auto font-light mb-10 leading-relaxed">
              We are currently working on our online boutique. In the meantime, all products are available for purchase at our Lincolnshire location.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="https://booking.mangomint.com/kossofsalonspa"
                className="inline-flex items-center justify-center bg-salon-raspberry text-white px-6 py-3 rounded-sm text-xs sm:text-sm font-semibold tracking-widest uppercase hover:bg-salon-raspberry/90 transition-colors"
              >
                Book A Consultation
              </Link>
              <Link
                href="/salon-services"
                className="inline-flex items-center justify-center bg-white text-salon-brown px-6 py-3 rounded-sm text-xs sm:text-sm font-semibold tracking-widest uppercase hover:bg-white/90 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
