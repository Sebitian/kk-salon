"use client"

import type React from "react"


import Image from "next/image"
import { useState, useEffect } from "react"
import { Mail, Github, Twitter, Linkedin, ArrowRight, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import LogoHero from "./logo-hero"
import { IMAGES } from "@/lib/cloudinary"

export default function ComingSoonPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Set launch date to 30 days from now
  useEffect(() => {
    const launchDate = new Date()
    launchDate.setDate(launchDate.getDate() + 126)

    const timer = setInterval(() => {
      const now = new Date()
      const difference = launchDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(timer)
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setCountdown({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setEmail("")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-secondary/20 p-4">
      <div className="w-full max-w-3xl text-center space-y-8">
        
        {/* <LogoHero /> */}
                
        {/* Logo Hero Section */}
          
          {/* <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">KK Salon</h2>
            <p className="text-lg text-muted-foreground">Beauty • Style • Excellence</p>
          </div> */}
        <div className="flex justify-center">
            <Image
              src={IMAGES.logoBold}
              alt="Kossof Salon Spa"
              width={400}
              height={300}
              className="w-80 h-60 md:w-96 md:h-96 lg:w-[400px] lg:h-[300px] object-contain"
            />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-sans">
            Coming Soon
            <br />
            <span className="text-6xl md:text-4xl">Spring 2026</span>
        </h1>

        {/* <p className="text-xl text-muted-foreground max-w-xl mx-auto font-sans">
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
          {/* <a href="https://www.facebook.com/share/17LgiwR1Sy/?mibextid=wwXIfr" className="text-muted-foreground hover:text-foreground transition-colors">
            <Facebook className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </a> */}
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
