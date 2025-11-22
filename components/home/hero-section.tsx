import Link from "next/link"
import Image from "next/image"
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

      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full px-4 pt-24 md:pt-32 pb-24 md:pb-24">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <Image
              src="/logo.png"
              alt="Kossof Salon Spa - Lincolnshire IL Hair Salon"
              width={200}
              height={200}
              priority
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover shadow-[0_0_30px_rgba(255,255,255,0.6),0_0_60px_rgba(255,255,255,0.4),0_0_90px_rgba(255,255,255,0.2)]"
            />
          </div>
          
          {/* Keep your bold name as the visual hero, but add semantic context */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-bold uppercase text-center mb-4" 
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, letterSpacing: '0.08em', lineHeight: '1.0', color: '#f5f5f0' }}>
            <span className="block">Kossof</span>
            <span className="block">Salon</span>
            <span className="block">Spa</span>
          </h1>
          
          {/* NEW: Subheadline with personality + context */}
          <p className="text-white text-center text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl px-4"
             style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300, letterSpacing: '0.05em', lineHeight: '1.4' }}>
            Intentional style. Everyday luxury. <span className="block mt-2">Lincolnshire, IL</span>
          </p>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <Button 
              asChild
              className="rounded-full px-8 py-6 text-lg font-semibold bg-white text-black hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <Link href="https://booking.mangomint.com/kossofsalonspa">Book Your Appointment</Link>
            </Button>
            <Button 
              asChild
              className="rounded-full px-8 py-6 text-lg font-semibold bg-white text-black hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <Link href="/services">View Services & Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}