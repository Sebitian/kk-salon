import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          src="/home_vid.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover blur-sm md:blur-md"
        />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[14rem] 2xl:text-[18rem] font-bold uppercase text-center mb-8" 
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, letterSpacing: '0.08em', lineHeight: '1.0', color: '#f5f5f0' }}>
            <span className="block">Kossof</span>
            <span className="block">Salon</span>
            <span className="block">Spa</span>
          </h1>
          <Button 
            asChild
            className="rounded-full px-8 py-6 text-lg font-semibold bg-white text-black hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <Link href="/booking">SERVICES</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
