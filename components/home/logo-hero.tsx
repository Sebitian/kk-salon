// components/home/logo-hero.tsx
import Image from "next/image"

export default function LogoHero() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-8">
          <Image
            src="/placeholder-logo.svg"
            alt="KK Salon Logo"
            width={300}
            height={300}
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            KK Salon
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Where Beauty Meets Excellence
          </p>
          <div className="flex justify-center gap-2 text-lg text-muted-foreground">
            <span>Hair</span>
            <span>•</span>
            <span>Nails</span>
            <span>•</span>
            <span>Beauty</span>
            <span>•</span>
            <span>Wellness</span>
          </div>
        </div>
      </div>
    </section>
  )
}