import Link from "next/link"

export default function ShopCollections() {
  const collections = [
    {
      name: "SHAMPOO",
      slug: "shampoo"
    },
    {
      name: "CONDITIONER", 
      slug: "conditioner"
    },
    {
      name: "STYLING",
      slug: "styling"
    },
    {
      name: "TREATMENTS",
      slug: "treatments"
    },
    {
      name: "LIFESTYLE",
      slug: "lifestyle"
    }
  ]

  return (
    <section className="bg-neutral-50 py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="text-xs font-medium tracking-[0.2em] text-neutral-600 mb-6 uppercase">
              ■ SHOP COLLECTIONS
            </div>
          </div>
        </div>

        {/* Collections Grid */}
        <div className="space-y-8">
          {collections.map((collection, index) => (
            <div key={collection.slug} className="text-center">
              <Link 
                href={`/collections/${collection.slug}`}
                className="group inline-block"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wide text-neutral-800 hover:text-neutral-600 transition-colors duration-300 cursor-pointer">
                  {collection.name}
                </h2>
              </Link>
              
              {/* Divider line (except for last item) */}
              {index < collections.length - 1 && (
                <div className="mt-8 w-full h-px bg-neutral-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}