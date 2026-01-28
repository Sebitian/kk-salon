
"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import { Users, Award, Sparkles } from "lucide-react"
import brownHair from "./brown-hair.jpeg"

const features = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Expert Talent",
    description: "Our team of certified professionals brings years of experience and creativity to every service.",
    image: brownHair,
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Premium Products",
    description: "We use only the highest quality, luxurious products to ensure the best results for our clients.",
    image: brownHair,
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Personalized Experience",
    description: "Enjoy a tailored approach to beauty, with services customized to your unique style and needs.",
    image: brownHair,
  },
]

export default function WhyChooseUsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel(
    useMemo(
      () => ({
        loop: true,
        align: "center",
        containScroll: "trimSnaps",
      }),
      []
    )
  )

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on("select", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-salon-brown mb-6">Why Kossof Salon Spa?</h2>
          <div className="w-24 h-1 bg-salon-raspberry mx-auto"></div>
          <p className="text-xl text-salon-brown/60 max-w-3xl mx-auto mt-8 font-light">
            Experience the difference with our commitment to excellence, luxury, and personalized care.
          </p>
        </div>
      </div>

      {/* Mobile-first full-width carousel */}
      <div className="relative w-full">
        <div className="overflow-hidden" ref={emblaRef} style={{ touchAction: "pan-y" }}>
          <div className="flex will-change-transform">
            {features.map((feature, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className="relative w-full h-[82vh] sm:h-[620px] lg:h-[700px] overflow-hidden">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={index === 0}
                  />

                  {/* bottom caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="max-w-xl">
                      <div className="flex items-center gap-3 mb-3 text-white">
                        <div className="p-2 bg-white/10 rounded-full backdrop-blur-sm">{feature.icon}</div>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-widest uppercase font-gotham">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-white/90 text-[15px] sm:text-base leading-6 sm:leading-7 font-normal">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination (matches Testimonials) */}
        <div className="flex justify-center items-center space-x-4 pt-8 px-6">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className="transition-all duration-300 focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
              style={{
                width: index === selectedIndex ? "32px" : "10px",
                height: "4px",
                borderRadius: "2px",
                backgroundColor: index === selectedIndex ? "#c21887" : "#251c18",
                opacity: index === selectedIndex ? 1 : 0.2,
              }}
            />
          ))}
        </div>

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
