import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-white pt-20">
      <div className="absolute inset-0 z-0">
        <video
          src="/services.mp4"
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
        <div className="w-full max-w-[70vw] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl animate-fade-in">
          <Image
            src="/logo-white.png"
            alt="Kossof Salon Spa"
            width={900}
            height={900}
            priority
            className="w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(0,0,0,0.3)]"
          />
        </div>
      </div>
      <div className="absolute bottom-24 sm:bottom-20 left-1/2 -translate-x-1/2 z-10 px-4 flex flex-col items-center gap-4">
        <p className="whitespace-nowrap text-center text-white/90 text-base sm:text-lg font-medium tracking-[0.08em] sm:tracking-[0.25em] uppercase drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
          Luxury | Beauty | Experience
        </p>
      </div>
    </section>
  )
}