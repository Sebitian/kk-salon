"use client"

import { useState } from "react"

type ProductVideoItem = {
  id: string
  label: string
  videoUrl: string
}

interface ProductsVideoTabsProps {
  items: ProductVideoItem[]
}

export default function ProductsVideoTabs({ items }: ProductsVideoTabsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "")
  const activeItem = items.find((item) => item.id === activeId) ?? items[0]

  if (!activeItem) return null

  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-salon-brown tracking-widest uppercase">
            Shop
          </h1>
          <div className="w-20 h-1 bg-salon-raspberry mx-auto mt-5" />
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          {items.map((item) => {
            const isActive = item.id === activeItem.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className={`inline-flex items-center justify-center rounded-sm px-6 py-3 text-xs sm:text-sm font-semibold tracking-widest uppercase transition-colors ${
                  isActive
                    ? "bg-salon-raspberry text-white"
                    : "bg-white text-salon-brown border border-salon-brown/20 hover:border-salon-blue/60"
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </div>

        <div className="mt-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-2xl">
            <video
              key={activeItem.id}
              src={activeItem.videoUrl}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controls
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
