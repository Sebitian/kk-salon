import { VIDEOS } from "@/lib/cloudinary"

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-white pt-20">
      <div className="absolute inset-0 z-0">
        <video
          src={VIDEOS.services}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for contrast - subtle to keep it airy */}
        <div className="absolute inset-0 bg-black/20 z-[1]" />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full px-6">
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <span className="block text-center text-white text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-light tracking-[0.25em] sm:tracking-[0.35em] uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] pl-[0.25em] sm:pl-[0.35em]">
            Luxury
          </span>
          <span className="block text-center text-white text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-light tracking-[0.25em] sm:tracking-[0.35em] uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] pl-[0.25em] sm:pl-[0.35em]">
            Beauty
          </span>
          <span className="block text-center text-white text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-light tracking-[0.25em] sm:tracking-[0.35em] uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] pl-[0.25em] sm:pl-[0.35em]">
            Experience
          </span>
        </div>
      </div>
    </section>
  )
}