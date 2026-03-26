"use client"

import * as React from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { IMAGES } from "@/lib/cloudinary"

const galleryImages = [
  { src: IMAGES.gallery1, alt: "Kossof Salon Spa Gallery 1" },
  { src: IMAGES.gallery2, alt: "Kossof Salon Spa Gallery 2" },
  { src: IMAGES.gallery3, alt: "Kossof Salon Spa Gallery 3" },
  { src: IMAGES.gallery4, alt: "Kossof Salon Spa Gallery 4" },
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80", alt: "Salon Interior" },
  { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80", alt: "Styling" },
]

export default function GalleryCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" })

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-salon-brown mb-6 uppercase tracking-widest">Gallery</h2>
        <div className="w-24 h-1 bg-salon-raspberry mx-auto"></div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-salon-brown rounded-full shadow-lg z-10"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-salon-brown rounded-full shadow-lg z-10"
          onClick={scrollNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}
