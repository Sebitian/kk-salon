import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Professional Hair Care Products - Kossof Salon Spa",
  description: "Explore the professional hair care lines we carry, including Milbon, Moroccanoil, and more at Kossof Salon Spa.",
}

const productLines = [
  {
    name: "Milbon",
    description: "Japan's #1 professional hair care brand, offering sophisticated treatments for every hair type.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop&q=80",
  },
  {
    name: "Moroccanoil",
    description: "The pioneer of oil-infused hair care, providing the perfect foundation for all hair types.",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&h=600&fit=crop&q=80",
  },
  {
    name: "Keratin Complex",
    description: "Revolutionary smoothing treatments and products that eliminate frizz and restore health to hair.",
    image: "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?w=800&h=600&fit=crop&q=80",
  }
]

export default function ProductsPage() {
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
            {productLines.map((line) => (
              <div key={line.name} className="flex flex-col group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-8 shadow-2xl">
                  <Image
                    src={line.image}
                    alt={line.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
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
            {/* <Button asChild className="bg-salon-raspberry hover:bg-salon-raspberry/90 text-white px-10 py-6 rounded-none tracking-widest uppercase">
              <Link href="/contact">Inquire About Products</Link>
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  )
}
