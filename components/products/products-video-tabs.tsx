"use client"

import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type ProductVideoItem = {
  id: string
  label: string
  videoUrl: string
}

interface ProductsVideoTabsProps {
  items: ProductVideoItem[]
  salonInteractiveUrl: string
}

export default function ProductsVideoTabs({ items, salonInteractiveUrl }: ProductsVideoTabsProps) {
  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-salon-brown tracking-widest uppercase">
            Shop
          </h1>
          <div className="w-20 h-1 bg-salon-raspberry mx-auto mt-5" />
        </div>

        <div className="mt-10 px-2 sm:px-12">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {items.map((item) => (
                <CarouselItem key={item.id}>
                  <div className="space-y-3">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-2xl">
                      <video
                        src={item.videoUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        controls
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                    <p className="text-center text-salon-brown text-sm sm:text-base font-semibold tracking-widest uppercase">
                      {item.label}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 sm:left-4 bg-white/90 hover:bg-white text-salon-brown border-salon-brown/20" />
            <CarouselNext className="right-2 sm:right-4 bg-white/90 hover:bg-white text-salon-brown border-salon-brown/20" />
          </Carousel>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={salonInteractiveUrl}
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
