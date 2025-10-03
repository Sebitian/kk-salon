'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "K18 HEATBOUNCE",
    price: "$47.60",
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&h=300&fit=crop&auto=format&q=80",
    category: "K18",
  },
  {
    id: 2,
    name: "ASTRO LIFT REPARATIVE VOLUME SPRAY",
    price: "$45.98",
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop&auto=format&q=80",
    category: "K18",
  },
  {
    id: 3,
    name: "AIRWASH DRY SHAMPOO",
    price: "$47.60",
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=300&h=300&fit=crop&auto=format&q=80",
    category: "K18",
  },
  {
    id: 4,
    name: "ASH WEDNESDAY HAIR PERFUME",
    price: "$38.64",
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1594736797933-d0d501ba2fe6?w=300&h=300&fit=crop&auto=format&q=80",
    category: "UNIVERSAL FLOWERING",
  },
  {
    id: 5,
    name: "CLUB BLOWDRY X THE PALM SCALP EXFOLIANT",
    price: "$50.00",
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=300&fit=crop&auto=format&q=80",
    category: "PALM SUNDAY SALON",
  },
  {
    id: 6,
    name: "PSA: PALM SCALP ANALYSIS",
    price: "$110.52",
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=300&fit=crop&auto=format&q=80",
    category: "PALM SUNDAY SALON",
  },
  {
    id: 7,
    name: "BABYLIGHTS 5 PANEL HAT",
    price: "$16.21",
    originalPrice: "$22.10",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=300&h=300&fit=crop&auto=format&q=80",
    category: "PALM SUNDAY SALON",
  },
]

export default function ShopShowcase() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const handleAddToCart = (productId: number) => {
    // Placeholder function - does nothing for now as requested
    console.log(`Add to cart: Product ${productId}`)
  }

  return (
    <section className="section-padding text-gray-900" style={{ backgroundColor: '#E8C5C5' }}>
      
      <div className="container-custom">
        {/* Products Grid with Sunday Selects as first card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background to-transparent"></div> */}

          
          {/* Sunday Selects Card - First Item */}
          <Card className="bg-gray-900 text-white border-gray-800 overflow-hidden group hover-lift">
            
            <CardContent className="p-8 flex flex-col justify-center aspect-square">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider leading-tight">
                SUNDAY<br />
                SELECTS
              </h2>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                OUR MOST-LOVED, MOST-USED,<br />
                MOST-YOU.
              </p>
              <Button 
                asChild 
                variant="outline" 
                size="default"
                className="border-white text-black hover:bg-white w-fit"
              >
                <Link href="/shop">VIEW MORE</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Product Cards */}
          {products.map((product) => (
            <Card 
              key={product.id}
              className="bg-transparent border-gray-400 overflow-hidden group hover-lift"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <CardContent className="p-0 relative">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-white rounded-t-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Add to Cart Button - appears on hover */}
                  {hoveredProduct === product.id && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-all duration-300">
                      <Button
                        onClick={() => handleAddToCart(product.id)}
                        className="bg-white text-black hover:bg-gray-100 font-semibold"
                      >
                        ADD TO CART
                      </Button>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4 bg-white">
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
                    {product.category}
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2 leading-tight">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}