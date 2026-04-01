"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { IMAGES } from "@/lib/cloudinary"

const carouselImages = [
  { src: IMAGES.tymo, alt: "Salon style photo 1" },
  { src: IMAGES.mostafa, alt: "Salon style photo 4" },
  { src: IMAGES.aliPazani, alt: "Salon style photo 2" },
  { src: IMAGES.nathan, alt: "Salon style photo 5" },
  { src: IMAGES.rosa, alt: "Salon style photo 3" },
]

export default function WhyChooseUsSection() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [autoplay, setAutoplay] = React.useState(true)
  const [isMobile, setIsMobile] = React.useState(false)

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
    const mediaQuery = window.matchMedia("(max-width: 768px)")
    const updateIsMobile = () => setIsMobile(mediaQuery.matches)

    updateIsMobile()
    mediaQuery.addEventListener("change", updateIsMobile)

    return () => {
      mediaQuery.removeEventListener("change", updateIsMobile)
    }
  }, [])

  React.useEffect(() => {
    if (!isMobile) return
    stopAutoplay()
  }, [isMobile, stopAutoplay])

  React.useEffect(() => {
    if (!api) return
    if (!autoplay) return
    if (isMobile) return

    autoplayIntervalRef.current = window.setInterval(() => {
      api.scrollNext()
    }, 6500)

    return () => {
      if (autoplayIntervalRef.current !== null) {
        window.clearInterval(autoplayIntervalRef.current)
        autoplayIntervalRef.current = null
      }
    }
  }, [autoplay, api, isMobile])

  const scrollPrev = React.useCallback(() => {
    stopAutoplay()
    api?.scrollPrev()
  }, [api, stopAutoplay])
  const scrollNext = React.useCallback(() => {
    stopAutoplay()
    api?.scrollNext()
  }, [api, stopAutoplay])
  const scrollTo = React.useCallback(
    (index: number) => {
      stopAutoplay()
      api?.scrollTo(index)
    },
    [api, stopAutoplay]
  )

  return (
    <section className="pt-0 pb-8 sm:pb-12 bg-white overflow-hidden">
      {/* Full-bleed carousel (swipe + arrows + dots) */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen mb-0">
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
              duration: 35,
              skipSnaps: false,
              dragFree: false,
              breakpoints: {
                "(max-width: 768px)": {
                  loop: false,
                  duration: 28,
                },
              },
            }}
          >
            <CarouselContent className="!-ml-0 w-full gap-0 will-change-transform transform-gpu">
              {carouselImages.map((image, index) => (
                <CarouselItem key={index} className="!pl-0 w-full transform-gpu">
                  <div className="relative h-[72vh] min-h-[420px] max-h-[760px] w-full bg-salon-brown/10 sm:h-[82vh] sm:min-h-[560px] sm:max-h-[900px] lg:h-[95vh] lg:min-h-[680px] lg:max-h-[1100px]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority={index < 2}
                      loading={index < 3 ? "eager" : "lazy"}
                      quality={90}
                      placeholder={typeof image.src === "string" ? "empty" : "blur"}
                      className="object-cover select-none"
                      sizes="100vw"
                      draggable={false}
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
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-salon-brown rounded-full shadow-lg z-10 hidden md:inline-flex"
            onClick={scrollPrev}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-salon-brown rounded-full shadow-lg z-10 hidden md:inline-flex"
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

    </section>
  )
}
