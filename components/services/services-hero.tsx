import Link from "next/link";
import { Button } from "../ui/button";

export default function ServicesHero() {
  return (
    <section className="relative h-[75vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          src="/services.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/services-poster.jpg"
          className="w-full h-full object-cover"
          aria-hidden="true"
        >
          <track kind="captions" />
        </video>
      </div>

      <div className="absolute inset-0 bg-black/30 z-[1]"></div>

      <div className="relative z-20 flex flex-col justify-center items-center w-full h-full px-4 gap-8">
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase text-center" 
          style={{ 
            fontFamily: 'Montserrat, var(--font-montserrat), sans-serif', 
            fontWeight: 700, 
            letterSpacing: '0.05em', 
            lineHeight: '1.0', 
            color: '#f5f5f0' 
          }}
        >
          Hair, Nails & Spa Services
        </h1>

        <Button 
          asChild
          className="rounded-full px-8 py-6 text-lg font-semibold bg-white text-black hover:bg-primary hover:text-white transition-colors duration-300"
        >
          <Link href="https://booking.mangomint.com/kossofsalonspa">Book Your Appointment</Link>
        </Button>
      </div>
    </section>
  )
}