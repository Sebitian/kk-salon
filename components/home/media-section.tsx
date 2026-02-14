"use client"

import { useEffect } from "react"
import { Facebook, Instagram } from "lucide-react"

// Instagram post URLs
const FALLBACK_INSTAGRAM_POSTS = [
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
  const instagramPosts = FALLBACK_INSTAGRAM_POSTS

  const openPost = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  // Tuning knobs:
  // Crop the Instagram header strip (profile + button) from embeds.
  const IFRAME_CROP_TOP_PX = 52
  // Keep extra embed height so the caption area can appear in the tile.
  const IFRAME_CROP_BOTTOM_PX = 120
  const IFRAME_COVER_SCALE = 1

  useEffect(() => {
    const style = document.createElement("style")
    style.id = "instagram-media-styles"
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
      .media-collage-card {
        opacity: 0;
        transform: translateY(28px) scale(0.97);
        transition: opacity 520ms ease, transform 620ms cubic-bezier(0.2, 0.9, 0.2, 1);
        will-change: transform, opacity;
      }
      .media-collage-card.is-visible {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    `
    if (!document.getElementById("instagram-media-styles")) {
      document.head.appendChild(style)
    }

    const cards = Array.from(document.querySelectorAll<HTMLElement>(".media-collage-card"))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        threshold: 0.22,
        rootMargin: "0px 0px -8% 0px",
      }
    )

    cards.forEach((card) => observer.observe(card))

    return () => {
      observer.disconnect()
      const existingStyle = document.getElementById("instagram-media-styles")
      if (existingStyle) {
        document.head.removeChild(existingStyle)
      }
    }
  }, [instagramPosts.length])

  return (
    <section
      className="pt-10 sm:pt-12 pb-20 sm:pb-24 px-4 relative overflow-hidden"
      style={{
        backgroundColor: "#cad7de",
        fontFamily: "var(--font-montserrat), sans-serif",
      }}
    >
      {/* Subtle shadow effect */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at top right, rgba(37, 28, 24, 0.08), transparent 70%)",
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-10 sm:mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[0.15em] sm:tracking-[0.2em] text-salon-brown">
            MEDIA
          </h2>
          <div className="w-16 h-1 bg-salon-raspberry mx-auto mt-4"></div>
          <p className="text-base sm:text-lg lg:text-xl text-salon-brown/60 pt-3 sm:pt-4">
            Follow Our Journey on Social Media
          </p>
        </div>

        {/* Scroll-reveal tile wall */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {instagramPosts.map((post, index) => {
            return (
              <div
                key={index}
                role="link"
                tabIndex={0}
                aria-label={`Open Instagram post ${index + 1} in a new tab`}
                className="media-collage-card group relative mx-auto w-full max-w-[460px] sm:max-w-none aspect-[3/4] overflow-hidden rounded-[28px] border border-white/90 bg-[#eef2f4] p-2.5 shadow-[0_18px_36px_-22px_rgba(37,28,24,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_42px_-20px_rgba(37,28,24,0.52)] active:translate-y-0 active:scale-[0.995]"
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
                onClick={() => openPost(post.url)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    openPost(post.url)
                  }
                }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-[22px] border border-slate-200/75 bg-white">
                  <div className="instagram-media-card h-full w-full rounded-[22px]">
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

                <div className="pointer-events-none absolute inset-x-2.5 bottom-2.5 z-10 flex items-end justify-between rounded-b-[20px] bg-gradient-to-t from-black/45 via-black/10 to-transparent px-3 pb-3 pt-8 opacity-100 sm:opacity-0 transition-opacity duration-300 sm:group-hover:opacity-100">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90">
                    Instagram
                  </span>
                  <span className="rounded-full bg-salon-blue px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white shadow-md">
                    View Post
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 sm:mt-12 flex flex-col items-center gap-4 sm:gap-5">
          <p className="text-xs sm:text-sm uppercase tracking-[0.14em] text-salon-brown/70">Follow us on social</p>
          <div className="w-full max-w-md sm:max-w-none flex flex-col sm:flex-row items-stretch sm:items-start justify-center gap-3 sm:gap-8">
            <a
              href="https://www.facebook.com/people/Kossof-Salon-Spa/61582500130935/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full sm:w-auto items-center sm:items-center justify-start sm:justify-center gap-3 sm:gap-2 rounded-2xl border border-white/90 bg-white/65 px-4 sm:px-5 py-3.5 sm:py-4 shadow-[0_10px_22px_-16px_rgba(37,28,24,0.5)] transition-all hover:-translate-y-0.5 hover:bg-white/85 active:translate-y-0 active:scale-[0.995]"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-6 w-6 text-[#00a6ff] group-hover:opacity-80 transition-opacity" />
              <span className="text-sm sm:text-[15px] text-salon-brown underline underline-offset-4 group-hover:text-salon-blue transition-colors">
                Follow us on Facebook
              </span>
            </a>
            <a
              href="https://www.instagram.com/kossof_salonspa/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full sm:w-auto items-center sm:items-center justify-start sm:justify-center gap-3 sm:gap-2 rounded-2xl border border-white/90 bg-white/65 px-4 sm:px-5 py-3.5 sm:py-4 shadow-[0_10px_22px_-16px_rgba(37,28,24,0.5)] transition-all hover:-translate-y-0.5 hover:bg-white/85 active:translate-y-0 active:scale-[0.995]"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-6 w-6 text-[#ff2a8e] group-hover:opacity-80 transition-opacity" />
              <span className="text-sm sm:text-[15px] text-salon-brown underline underline-offset-4 group-hover:text-salon-blue transition-colors">
                Follow us on Instagram
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
