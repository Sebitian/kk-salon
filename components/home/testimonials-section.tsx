"use client"

import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    name: "Rachel",
    source: "Google Review",
    quote:
      "I love this salon! I've had both Stevie and Angelica for color, and not only do they both do an incredible job, but they are really wonderful people with whom to spend time. I also just started getting my hair cut by Lindsay and she is also amazing! Truly, my favorite hair cut ever- right out of the salon. Go see the folks at The Lane salon- you, and your hair, will love them.",
  },
  {
    id: 2,
    name: "Sarah",
    source: "Google Review",
    quote:
      "Best salon experience I've ever had! The team is incredibly talented and makes you feel so welcome. Every visit feels like a luxury experience.",
  },
  {
    id: 3,
    name: "Michael",
    source: "Yelp Review",
    quote:
      "Outstanding service from start to finish. The stylists really listen to what you want and deliver beyond expectations. Highly recommend!",
  },
  {
    id: 4,
    name: "Emma",
    source: "Google Review",
    quote:
      "I've been coming here for years and wouldn't go anywhere else. The attention to detail and personalized service is unmatched.",
  },
  {
    id: 5,
    name: "James",
    source: "Facebook Review",
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
      className="py-20 px-4 relative overflow-hidden"
      style={{ 
        backgroundColor: '#f5f5dc',
        fontFamily: 'var(--font-montserrat), sans-serif'
      }}
    >
      {/* Subtle shadow effect in bottom right */}
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at bottom right, rgba(37, 28, 24, 0.1), transparent 70%)'
        }}
      />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Main Heading */}
        <h2 
          className="text-center text-2xl lg:text-3xl font-semibold uppercase tracking-wider mb-12"
          style={{ color: '#251c18', letterSpacing: '0.15em' }}
        >
          FROM OUR CLIENTS
        </h2>

        {/* Testimonial Content */}
        <div className="text-center">
          {/* Fixed Height Container for Testimonial */}
          <div className="min-h-[400px] lg:min-h-[450px] flex flex-col justify-center space-y-8">
            {/* Quote */}
            <blockquote 
              className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto px-4"
              style={{ color: '#251c18' }}
            >
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Separator Line */}
            <div 
              className="w-20 h-px mx-auto"
              style={{ backgroundColor: '#251c18' }}
            />

            {/* Client Attribution */}
            <div className="flex flex-col items-center space-y-1">
              <p 
                className="text-sm lg:text-base uppercase tracking-wider"
                style={{ color: '#251c18' }}
              >
                {currentTestimonial.name} |{" "}
                <span className="underline">{currentTestimonial.source}</span>
              </p>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center space-x-3 pt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className="transition-all duration-300 focus:outline-none"
                aria-label={`Go to testimonial ${index + 1}`}
                style={{
                  width: index === currentIndex ? '12px' : '8px',
                  height: index === currentIndex ? '12px' : '8px',
                  borderRadius: '50%',
                  backgroundColor: index === currentIndex ? 'transparent' : '#251c18',
                  border: index === currentIndex ? '2px solid #251c18' : 'none',
                  opacity: index === currentIndex ? 1 : 0.6,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
