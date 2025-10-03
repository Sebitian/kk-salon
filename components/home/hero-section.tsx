import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          src="/home_vid.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10 flex justify-center w-full px-4">
        <div className="w-full text-white text-center">
          
          {/* Header Bar with Hours, Logo, and Phone */}
          <div className="flex items-center justify-between mb-8 max-w-4xl mx-auto px-4">
            {/* Left - Hours */}
            <div className="text-left text-sm md:text-base lg:text-lg xl:text-xl font-medium leading-tight text-white">
              <div>MON through THU 9a-9p</div>
              <div>FRI 9a-6p • SAT 8a-5p</div>
              <div>SUN 9a-4p</div>
            </div>

            {/* Center - Logo */}
            <div className="flex-shrink-0 mx-4">
              <div className="text-center">
                <div className="text-lg md:text-xl lg:text-2xl font-bold leading-tight text-white">
                  Bliss
                </div>
                <div className="text-sm md:text-base lg:text-lg text-white tracking-wider">
                  Hair • Nails • Body
                </div>
              </div>
            </div>

            {/* Right - Phone */}
            <div className="text-right text-sm md:text-base lg:text-lg xl:text-xl font-medium leading-tight text-white">
              <div className="font-bold">(847) 336-4554</div>
              <div className="text-xs md:text-sm lg:text-base italic">Call for an appointment!</div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold leading-none tracking-tight font-sans uppercase" 
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', fontWeight: 700 }}>
            KOSSOF ● KRAAZ
            <br />
          </h1>

          <div className="mt-8">
            <Button asChild size="lg" className="text-lg px-6 py-6 text-bold bg-white text-black hover:bg-[#E8C5C5]">
                <Link href="/booking">Book Your Experience</Link>
            </Button>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}
