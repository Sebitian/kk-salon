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
        <p className="text-center text-white/95 text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-[0.1em] sm:tracking-[0.18em] uppercase drop-shadow-[0_6px_20px_rgba(0,0,0,0.55)]">
          Luxury | Beauty | Experience
        </p>
      </div>
    </section>
  )
}