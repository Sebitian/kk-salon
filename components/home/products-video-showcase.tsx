import { getBlobUrls } from "@/lib/blob"

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

export default async function ProductsVideoShowcase() {
  const urls = await getBlobUrls(productLines.map((line) => line.videoFilename))
  const productLinesWithUrls = productLines.map((line) => ({
    ...line,
    video: urls[line.videoFilename],
  }))

  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-salon-brown uppercase tracking-widest">
            Products
          </h2>
          <div className="w-24 h-1 bg-salon-raspberry mx-auto mt-6"></div>
        </div>

        <div
          className="md:hidden -mx-6 px-6 overflow-x-scroll snap-x snap-mandatory scroll-smooth touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="flex gap-6 pb-2">
            {productLinesWithUrls.map((line) => (
              <div key={line.name} className="flex-none w-[85vw] max-w-sm snap-center flex flex-col group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-8 shadow-2xl [contain:paint]">
                  <video
                    src={line.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out transform-gpu will-change-transform backface-hidden group-hover:scale-110 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-salon-brown/10 group-hover:bg-salon-brown/0 transition-colors duration-500"></div>
                </div>
                <h3 className="text-2xl font-bold text-salon-brown mb-4 tracking-wider uppercase">{line.name}</h3>
                <p className="text-salon-brown/70 font-light leading-relaxed">{line.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-16">
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
              <p className="text-salon-brown/70 font-light leading-relaxed">{line.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://shop.saloninteractive.com/store/kossof-salon-spa-ltd-91277"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-salon-raspberry text-white px-8 py-3 rounded-sm text-sm font-semibold tracking-widest uppercase hover:bg-salon-raspberry/90 transition-colors"
          >
            Shop Products
          </a>
        </div>
      </div>
    </section>
  )
}
