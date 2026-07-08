"use client"

import { useEffect, useRef } from "react"
import { VIDEOS } from "@/lib/cloudinary"

export default function SalonTourVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="mt-5 sm:mt-7 w-full">
      <h2
        className="text-center text-2xl sm:text-3xl font-bold text-salon-raspberry tracking-[0.2em] uppercase"
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >
        Salon Tour
      </h2>
      <div className="w-16 h-1 bg-salon-raspberry mx-auto mt-4 mb-5 sm:mb-6" />

      <div ref={containerRef} className="w-full overflow-hidden">
        <div className="relative aspect-[3/4] w-full sm:mx-auto sm:max-w-xl sm:aspect-[4/5]">
          <video
            ref={videoRef}
            src={VIDEOS.salonTour}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 h-full w-full object-cover object-center"
            aria-label="Kossof Salon Spa tour"
          />
        </div>
      </div>
    </div>
  )
}
