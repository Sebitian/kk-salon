"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

import tymo from "./tymo.jpg"
import rosa from "./rosa.jpg"

const carouselImages = [
  { src: tymo, alt: "Salon style photo 1" },
  { src: "/ali-pazani.jpg", alt: "Salon style photo 2" },
  { src: rosa, alt: "Salon style photo 3" },
  { src: "/mostafa.jpg", alt: "Salon style photo 4" },
  { src: "/nathan.jpg", alt: "Salon style photo 5" },
]

export default function WhyChooseUsSection() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [autoplay, setAutoplay] = React.useState(true)

  const autoplayIntervalRef = React.useRef<number | null>(null)

  const stopAutoplay = React.useCallback(() => {
    setAutoplay(false)
    if (autoplayIntervalRef.current !== null) {
      window.clearInterval(autoplayIntervalRef.current)
      autoplayIntervalRef.current = null
    }
  }, [])

  React.useEffect(() => {
    if (!api) return

    const onSelect = () => setSelectedIndex(api.selectedScrollSnap())
    const onPointerDown = () => stopAutoplay()

    onSelect()
    api.on("select", onSelect)
    api.on("pointerDown", onPointerDown)

    return () => {
      api.off("select", onSelect)
      api.off("pointerDown", onPointerDown)
    }
  }, [api, stopAutoplay])

  React.useEffect(() => {
    if (!api) return
    if (!autoplay) return

    autoplayIntervalRef.current = window.setInterval(() => {
      api.scrollNext()
    }, 6500)

    return () => {
      if (autoplayIntervalRef.current !== null) {
        window.clearInterval(autoplayIntervalRef.current)
        autoplayIntervalRef.current = null
      }
    }
  }, [autoplay, api])

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api])
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api])
  const scrollTo = React.useCallback(
    (index: number) => {
      stopAutoplay()
      api?.scrollTo(index)
    },
    [api, stopAutoplay]
  )

  return (
    <section className="py-24 bg-white overflow-hidden">
      {/* Full-bleed carousel (swipe + arrows + dots) */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen mb-16">
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "center",
              containScroll: "trimSnaps",
            }}
          >
            <CarouselContent className="ml-0 w-full will-change-transform">
              {carouselImages.map((image, index) => (
                <CarouselItem key={index} className="pl-0 w-full">
                  <div className="relative h-[95vh] min-h-[680px] max-h-[1100px] w-full bg-salon-brown/10">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority={index === 0}
                      quality={100}
                      placeholder={typeof image.src === "string" ? "empty" : "blur"}
                      className="object-cover"
                      sizes="100vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/10" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-salon-brown rounded-full shadow-lg z-10"
            onClick={scrollPrev}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-salon-brown rounded-full shadow-lg z-10"
            onClick={scrollNext}
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Go to image ${index + 1}`}
                className="h-1.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-salon-raspberry/60"
                style={{
                  width: index === selectedIndex ? 28 : 10,
                  backgroundColor: "white",
                  opacity: index === selectedIndex ? 0.95 : 0.55,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-salon-brown mb-6">Why Kossof Salon Spa?</h2>
          <div className="w-24 h-1 bg-salon-raspberry mx-auto"></div>
          <p className="text-xl text-salon-brown/60 max-w-3xl mx-auto mt-8 font-light">
            Experience the difference with our commitment to excellence, luxury, and personalized care.
          </p>
        </div> */}

        <div className="mt-20 text-center">
          <Link
            href="/services"
            className="inline-flex items-center text-salon-raspberry font-semibold tracking-widest hover:text-salon-raspberry/80 transition-colors uppercase text-sm"
          >
            Learn More About Our Services
            <svg
              className="ml-3 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
