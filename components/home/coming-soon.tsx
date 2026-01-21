import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4">
      <div className="w-full max-w-3xl text-center space-y-6 sm:space-y-8 text-white">
        
        {/* <LogoHero /> */}
                
        {/* Logo Hero Section */}
          
          {/* <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">KK Salon</h2>
            <p className="text-lg text-muted-foreground">Beauty • Style • Excellence</p>
          </div> */}
        <div className="flex justify-center">
            <Image
              src="/logo_white.png"
              alt="Kossof Salon Spa"
              width={400}
              height={300}
              className="w-64 h-48 sm:w-80 sm:h-60 md:w-96 md:h-96 lg:w-[400px] lg:h-[300px] object-contain"
            />
        </div>
        <h1 className="font-['Montserrat'] font-bold tracking-tight leading-tight">
          <span className="block text-4xl sm:text-5xl md:text-6xl">Opening soon!</span>
          <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl">February 17, 2026</span>
        </h1>

        <div className="max-w-md mx-auto space-y-2 text-base sm:text-lg text-white/80 font-['Montserrat'] leading-relaxed">
          <p>
            <span className="font-semibold text-white">Address:</span>{" "}
            <a
              href="https://share.google/YhPLLBtUSgkiLQAsT"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-white/80 hover:text-white transition-colors"
            >
              185 Milwaukee Avenue, Suite 120, Lincolnshire, IL 60069
            </a>
          </p>
          <p>
            <span className="font-semibold text-white">Phone:</span>{" "}
            <a
              href="tel:+18478216604"
              className="underline underline-offset-4 hover:text-white transition-colors text-white"
            >
              847-821-6604
            </a>
          </p>
        </div>

        {/* <p className="text-xl text-muted-foreground max-w-xl mx-auto font-['Montserrat']">
          We're working hard to bring you something extraordinary. Stay tuned and be the first to know when we open.
        </p> */}

        {/* <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
          {Object.entries(countdown).map(([unit, value]) => (
            <Card key={unit} className="p-4 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold">{value}</span>
              <span className="text-xs text-muted-foreground capitalize">{unit}</span>
            </Card>
          ))}
        </div> */}

        {/* <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
            />
            <Button type="submit" className="whitespace-nowrap">
              Notify Me <ArrowRight className="ml-2 h-4 w-4 text-bla" />
            </Button>
          </form>
          {isSubmitted && <p className="mt-2 text-sm text-green-600">Thanks! We'll notify you when we launch.</p>}
        </div> */}

        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://www.facebook.com/people/Kossof-Salon-Spa/61582500130935/"
            className="group transition-colors flex flex-col items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="h-6 w-6 text-[#1877F2] group-hover:text-[#3b82f6] transition-colors" />
            <span className="text-xs underline underline-offset-4 text-white/80 group-hover:text-white transition-colors">
              Kossof Salon Spa
            </span>
            <span className="sr-only">Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/kossof_salonspa/"
            className="group transition-colors flex flex-col items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-6 w-6 text-[#E1306C] group-hover:text-[#F77737] transition-colors" />
            <span className="text-xs underline underline-offset-4 text-white/80 group-hover:text-white transition-colors">
              kossof_salonspa
            </span>
            <span className="sr-only">Instagram</span>
          </a>
          {/* <a href="https://www.tiktok.com/@kossofsalonspa?lang=en" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
            <span className="sr-only">TikTok</span>
          </a> */}
          {/* <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a> */}
          {/* <a href="mailto:info@kossofsalonspa.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a> */}
        </div>
      </div>
    </div>
  )
}
