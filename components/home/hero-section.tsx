import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-white pt-20">
      <div className="absolute inset-0 z-0">
        <video
          src="/home_vid.mp4"
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
        <div className="w-full max-w-[85vw] sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl animate-fade-in">
          <Image
            src="/logo-white.png"
            alt="Kossof Salon Spa"
            width={1800}
            height={900}
            priority
            className="w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(0,0,0,0.3)]"
          />
        </div>
      </div>
    </section>
  )
}