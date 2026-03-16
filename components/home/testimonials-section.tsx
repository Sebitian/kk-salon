"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"

const testimonials = [
  {
    id: 1,
    name: "Deanna",
    source: "Google Review",
    sourceUrl: "https://share.google/5dFFCjpqnv3nfmgr7",
    rating: 5,
    quote:
      "When I moved from the city to the suburbs, I had a difficult time finding a stylist I was comfortable with until I discovered Keeley. I was thrilled to learn that she had opened her own salon. The new salon is incredible and was packed within just two weeks of its opening. This success is a testament to the exceptional talent and dedication of the staff who have consistently provided exceptional service to so many clients, leading them to follow her to her new location.",
  },
  {
    id: 2,
    name: "Merrilee",
    source: "Google Review",
    sourceUrl: "https://share.google/10PLPmkspGOLqbyez",
    rating: 5,
    quote:
      "I loved my experience at Kossof Salon! I had struggled to find a high-quality salon at a reasonable price, but they truly exceeded my expectations. They were able to fix my hair color and give me a great haircut, all while really listening to what I wanted. I felt heard, cared for, and so happy with the results. There great with color and cut.",
  },
  {
    id: 3,
    name: "Madison",
    source: "Google Review",
    sourceUrl: "https://share.google/opZCzE07mHvX4fTSb",
    rating: 5,
    quote:
      "I followed the Kossof team to their new home! The environment is very energetic and welcoming! I absolutely love the new space and some of the new faces that are there as well. Lisette did my hair cut and Galina did my nails. They are very professional and made me feel like the queen I am! What are you waiting for? Book your appointment queen!",
  },
]

export default function TestimonialsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

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
    const stopAutoplayOnInteract = () => setAutoplay(false)

    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("pointerDown", stopAutoplayOnInteract)

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("pointerDown", stopAutoplayOnInteract)
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    if (!autoplay) return

    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      setAutoplay(false)
      emblaApi?.scrollTo(index)
    },
    [emblaApi]
  )

  return (
    <section 
      className="py-24 px-4 relative overflow-hidden"
      style={{ 
        backgroundColor: '#ede7e4',
        fontFamily: 'var(--font-montserrat), sans-serif'
      }}
    >
      {/* Subtle shadow effect in bottom right */}
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at bottom right, rgba(194, 24, 135, 0.1), transparent 70%)'
        }}
      />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Main Heading with Context */}
        <div className="text-center mb-12 space-y-4">
          <h2 
            className="text-3xl lg:text-4xl font-bold tracking-[0.2em] text-salon-brown"
          >
            TESTIMONIALS
          </h2>
          <div className="w-16 h-1 bg-salon-raspberry mx-auto mt-4"></div>
          <p 
            className="text-lg lg:text-xl text-salon-brown/60 pt-4"
          >
            Rated 5 Stars by Lincolnshire Clients
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="text-center">
          {/* Swipeable carousel (mobile-friendly) */}
          <div className="relative isolate w-full overflow-hidden" ref={emblaRef} style={{ touchAction: "pan-y" }}>
            <div className="flex w-full will-change-transform">
              {testimonials.map((t) => (
                <div key={t.id} className="w-full shrink-0 grow-0 basis-full">
                  {/* Fixed Height Container for Testimonial */}
                  <div className="min-h-[350px] lg:min-h-[400px] flex flex-col justify-center space-y-10 select-none">
                    {/* Quote with Schema Markup */}
                    <blockquote 
                      className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto px-4 font-light italic"
                      style={{ color: '#251c18' }}
                      itemProp="review"
                      itemScope
                      itemType="https://schema.org/Review"
                    >
                      <meta itemProp="itemReviewed" content="Kossof Salon Spa" />
                      <meta itemProp="author" content={t.name} />
                      <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                        <meta itemProp="ratingValue" content={t.rating.toString()} />
                        <meta itemProp="bestRating" content="5" />
                      </div>
                      <a
                        href={t.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        itemProp="reviewBody"
                        className="hover:text-salon-raspberry transition-colors"
                      >
                        "{t.quote}"
                      </a>
                    </blockquote>

                    {/* Star Rating Visual */}
                    <div className="flex justify-center items-center space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i}
                          className="text-xl lg:text-2xl"
                          style={{ color: '#c21887' }}
                          aria-hidden="true"
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Client Attribution */}
                    <div className="flex flex-col items-center space-y-1">
                      <p 
                        className="text-sm lg:text-base font-semibold tracking-widest text-salon-brown"
                      >
                        {t.name} —{" "}
                        <a
                          href={t.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-light opacity-60 hover:opacity-100"
                        >
                          {t.source}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center space-x-4 pt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className="transition-all duration-300 focus:outline-none"
                aria-label={`Go to testimonial ${index + 1}`}
                style={{
                  width: index === selectedIndex ? '32px' : '10px',
                  height: '4px',
                  borderRadius: '2px',
                  backgroundColor: index === selectedIndex ? '#c21887' : '#251c18',
                  opacity: index === selectedIndex ? 1 : 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}