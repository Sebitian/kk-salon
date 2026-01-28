"use client"

import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    name: "Rachel M.",
    source: "Google Review",
    rating: 5,
    quote:
      "I love this salon! The stylists do an incredible job with color and cuts. They are really wonderful people with whom to spend time. Truly, my favorite hair cut ever - right out of the salon.",
  },
  {
    id: 2,
    name: "Sarah L.",
    source: "Google Review",
    rating: 5,
    quote:
      "Best salon experience I've ever had! The team is incredibly talented and makes you feel so welcome. Every visit feels like a luxury experience.",
  },
  {
    id: 3,
    name: "Michael T.",
    source: "Yelp Review",
    rating: 5,
    quote:
      "Outstanding service from start to finish. The stylists really listen to what you want and deliver beyond expectations. Highly recommend!",
  },
  {
    id: 4,
    name: "Emma R.",
    source: "Google Review",
    rating: 5,
    quote:
      "I've been coming here for years and wouldn't go anywhere else. The attention to detail and personalized service is unmatched.",
  },
  {
    id: 5,
    name: "James K.",
    source: "Facebook Review",
    rating: 5,
    quote:
      "Professional, friendly, and talented team. They transformed my look and I couldn't be happier. The atmosphere is relaxing and the results speak for themselves.",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay])

  const handleDotClick = (index: number) => {
    setAutoplay(false)
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

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
          {/* Fixed Height Container for Testimonial */}
          <div className="min-h-[350px] lg:min-h-[400px] flex flex-col justify-center space-y-10">
            {/* Quote with Schema Markup */}
            <blockquote 
              className="text-2xl lg:text-3xl leading-relaxed max-w-3xl mx-auto px-4 font-light italic"
              style={{ color: '#251c18' }}
              itemProp="review"
              itemScope
              itemType="https://schema.org/Review"
            >
              <meta itemProp="itemReviewed" content="Kossof Salon Spa" />
              <meta itemProp="author" content={currentTestimonial.name} />
              <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content={currentTestimonial.rating.toString()} />
                <meta itemProp="bestRating" content="5" />
              </div>
              <span itemProp="reviewBody">
                "{currentTestimonial.quote}"
              </span>
            </blockquote>

            {/* Star Rating Visual */}
            <div className="flex justify-center items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i}
                  className="text-2xl lg:text-3xl"
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
                className="text-base lg:text-lg font-semibold tracking-widest text-salon-brown"
              >
                {currentTestimonial.name} — <span className="font-light opacity-60">{currentTestimonial.source}</span>
              </p>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center space-x-4 pt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className="transition-all duration-300 focus:outline-none"
                aria-label={`Go to testimonial ${index + 1}`}
                style={{
                  width: index === currentIndex ? '32px' : '10px',
                  height: '4px',
                  borderRadius: '2px',
                  backgroundColor: index === currentIndex ? '#c21887' : '#251c18',
                  opacity: index === currentIndex ? 1 : 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}