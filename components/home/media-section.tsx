"use client"

import { useEffect } from "react"

// Instagram post URLs
const instagramPosts = [
  { url: "https://www.instagram.com/p/DT5w6sAgPnG/" },
  { url: "https://www.instagram.com/p/DTN34J-gMNJ/" },
  { url: "https://www.instagram.com/p/DSX7WwmAOT4/" },
  { url: "https://www.instagram.com/p/DS1lGOjgDkH/" },
]

function getInstagramEmbedUrl(url: string) {
  try {
    const u = new URL(url)
    const parts = u.pathname.split("/").filter(Boolean)
    // Expected: /p/{shortcode}/
    const shortcode = parts[0] === "p" ? parts[1] : undefined
    if (!shortcode) return url
    return `https://www.instagram.com/p/${shortcode}/embed/`
  } catch {
    return url
  }
}

export default function MediaSection() {
  const openPost = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  // Tuning knobs:
  // We want to see the *entire* picture, so avoid "cover" style cropping/zooming.
  const IFRAME_CROP_TOP_PX = 0
  const IFRAME_CROP_BOTTOM_PX = 0
  const IFRAME_COVER_SCALE = 1

  useEffect(() => {
    // Add custom styles to make embeds show only images in cards
    const style = document.createElement('style')
    style.id = 'instagram-media-styles'
    style.textContent = `
      .instagram-media-card {
        background: rgba(255, 255, 255, 0.05) !important;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        border-radius: 12px !important;
        box-shadow: none !important;
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
        height: 100% !important;
        overflow: hidden !important;
      }
      .instagram-media-card iframe {
        border: none !important;
        margin: 0 !important;
        display: block !important;
      }
    `
    if (!document.getElementById('instagram-media-styles')) {
      document.head.appendChild(style)
    }
    
    return () => {
      const existingStyle = document.getElementById('instagram-media-styles')
      if (existingStyle) {
        document.head.removeChild(existingStyle)
      }
    }
  }, [])

  return (
    <section 
      className="pt-12 pb-24 px-4 relative overflow-hidden"
      style={{ 
        backgroundColor: '#cad7de',
        fontFamily: 'var(--font-montserrat), sans-serif'
      }}
    >
      {/* Subtle shadow effect */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top right, rgba(37, 28, 24, 0.08), transparent 70%)'
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-12 space-y-4">
          <h2 
            className="text-3xl lg:text-4xl font-bold tracking-[0.2em] text-salon-brown"
          >
            MEDIA
          </h2>
          <div className="w-16 h-1 bg-salon-raspberry mx-auto mt-4"></div>
          <p 
            className="text-lg lg:text-xl text-salon-brown/60 pt-4"
          >
            Follow Our Journey on Social Media
          </p>
        </div>

        {/* Instagram Posts Grid - Equal sized cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {instagramPosts.map((post, index) => (
            <div
              key={index}
              role="link"
              tabIndex={0}
              aria-label={`Open Instagram post ${index + 1} in a new tab`}
              className="group relative w-full aspect-[4/5] overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
              onClick={() => openPost(post.url)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  openPost(post.url)
                }
              }}
            >
              <div className="absolute inset-0 w-full h-full">
                <div className="instagram-media-card w-full h-full">
                  <iframe
                    src={getInstagramEmbedUrl(post.url)}
                    title={`Instagram post ${index + 1}`}
                    loading="lazy"
                    scrolling="no"
                    className="pointer-events-none absolute left-0 w-full"
                    style={{
                      top: `-${IFRAME_CROP_TOP_PX}px`,
                      height: `calc(100% + ${IFRAME_CROP_TOP_PX + IFRAME_CROP_BOTTOM_PX}px)`,
                      transform: `scale(${IFRAME_COVER_SCALE})`,
                      transformOrigin: "center",
                      border: "none",
                    }}
                  />
                </div>
              </div>
              
              {/* Instagram icon overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="mt-auto mb-4">
                  <svg
                    className="w-10 h-10 text-white drop-shadow-lg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
