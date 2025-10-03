import Link from "next/link"
import Image from "next/image"

export default function BookShopSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[500px]">
          {/* BOOK Button - Left Side with Framed Image */}
          <Link 
            href="/booking"
            className="group relative overflow-hidden rounded-2xl bg-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center p-12">
              {/* Frame for the image */}
              <div className="relative w-64 h-80 bg-white rounded-lg shadow-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=500&fit=crop&crop=faces&auto=format&q=80"
                  alt="Hair styling"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* BOOK Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h2 className="text-6xl md:text-7xl font-bold text-white drop-shadow-2xl tracking-wider">
                BOOK
              </h2>
            </div>
          </Link>

          {/* SHOP Button - Right Side with Background Image */}
          <Link 
            href="/shop"
            className="group relative overflow-hidden rounded-2xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
          >
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=600&h=500&fit=crop&auto=format&q=80"
                alt="Beauty products"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Pink/Rose overlay to match the reference */}
              <div className="absolute inset-0 bg-rose-200/60"></div>
            </div>
            {/* SHOP Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h2 className="text-6xl md:text-7xl font-bold text-rose-400 drop-shadow-xl tracking-wider">
                SHOP
              </h2>
            </div>
          </Link>
          
        </div>
      </div>
    </section>
  )
}