"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { IMAGES } from "@/lib/cloudinary"

function FacebookLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.348C0 23.405.595 24 1.326 24H12.82v-9.294H9.692V11.08h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.627H16.56V24h6.115C23.405 24 24 23.405 24 22.674V1.326C24 .595 23.405 0 22.675 0z" />
    </svg>
  )
}

function InstagramLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M7.5 0h9C20.642 0 24 3.358 24 7.5v9c0 4.142-3.358 7.5-7.5 7.5h-9C3.358 24 0 20.642 0 16.5v-9C0 3.358 3.358 0 7.5 0zm-.25 2A5.25 5.25 0 0 0 2 7.25v9.5A5.25 5.25 0 0 0 7.25 22h9.5A5.25 5.25 0 0 0 22 16.75v-9.5A5.25 5.25 0 0 0 16.75 2h-9.5zM17.5 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-salon-brown text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Logo and About */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="mb-8">
              <Image
                src={IMAGES.logoWhite}
                alt="Kossof Salon Spa"
                width={200}
                height={80}
                className="w-48 h-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs font-light">
              30+ years of expertise in luxury hair and spa services in Lincolnshire, IL. Experience the art of refinement.
            </p>
            <div className="flex items-start gap-8 mt-8">
              <a
                href="https://www.facebook.com/people/Kossof-Salon-Spa/61582500130935/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center md:items-start gap-2"
                aria-label="Facebook"
              >
                <FacebookLogo className="h-6 w-6 text-[#00a6ff] group-hover:opacity-80 transition-opacity" />
                <span className="text-sm text-white underline underline-offset-4 group-hover:text-salon-blue transition-colors">
                  Kossof Salon Spa
                </span>
              </a>
              <a
                href="https://www.instagram.com/kossof_salonspa/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center md:items-start gap-2"
                aria-label="Instagram"
              >
                <InstagramLogo className="h-6 w-6 text-[#ff2a8e] group-hover:opacity-80 transition-opacity" />
                <span className="text-sm text-white underline underline-offset-4 group-hover:text-salon-blue transition-colors">
                  kossof_salonspa
                </span>
              </a>
            </div>
          </div>

          {/* CONTACT Section */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold uppercase mb-8 tracking-[0.2em] text-salon-blue">CONTACT</h3>
            <div className="space-y-4 text-sm font-light">
              <p className="leading-relaxed">185 MILWAUKEE AVENUE, STE. 120<br />LINCOLNSHIRE, IL 60069</p>
              <div className="pt-4 space-y-2">
                <a href="mailto:info@kossofsalonspa.com" className="block hover:text-salon-blue transition-colors italic">info@kossofsalonspa.com</a>
                <a href="tel:8478216604" className="block hover:text-salon-blue transition-colors font-medium">847-821-6604</a>
              </div>
            </div>
          </div>

          {/* HOURS Section */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold uppercase mb-8 tracking-[0.2em] text-salon-blue">HOURS</h3>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex justify-between md:justify-start md:space-x-4"><span>MONDAY</span> <span className="opacity-40">CLOSED</span></li>
              <li className="flex justify-between md:justify-start md:space-x-4"><span>TUESDAY</span> <span>9AM - 7PM</span></li>
              <li className="flex justify-between md:justify-start md:space-x-4"><span>WEDNESDAY</span> <span>9AM - 7PM</span></li>
              <li className="flex justify-between md:justify-start md:space-x-4"><span>THURSDAY</span> <span>9AM - 7PM</span></li>
              <li className="flex justify-between md:justify-start md:space-x-4"><span>FRIDAY</span> <span>9AM - 6PM</span></li>
              <li className="flex justify-between md:justify-start md:space-x-4"><span>SATURDAY</span> <span>9AM - 5PM</span></li>
              <li className="flex justify-between md:justify-start md:space-x-4"><span>SUNDAY</span> <span>9AM - 3PM</span></li>
            </ul>
          </div>

          {/* QUICK LINKS + CTA */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold uppercase mb-8 tracking-[0.2em] text-salon-blue">EXPLORE</h3>
            <div className="space-y-3 text-sm font-light mb-8">
              <Link
                href="/products"
                className="block hover:text-salon-blue transition-colors"
              >
                Shop
              </Link>
              <Link href="/salon-services" className="block hover:text-salon-blue transition-colors">Salon Services</Link>
              <Link href="/spa-services" className="block hover:text-salon-blue transition-colors">Spa Services</Link>
              <Link href="/weddings-services" className="block hover:text-salon-blue transition-colors">Wedding Services</Link>
              <Link href="/about" className="block hover:text-salon-blue transition-colors">About Us</Link>
              <Link href="/faq" className="block hover:text-salon-blue transition-colors">FAQ</Link>
            </div>
            <Button asChild className="bg-salon-raspberry hover:bg-salon-raspberry/90 text-white rounded-sm tracking-widest text-xs h-11 px-6">
              <Link href="https://booking.mangomint.com/kossofsalonspa" target="_blank" rel="noopener noreferrer">
                BOOK NOW
              </Link>
            </Button>
          </div>
        </div>

        <div className="text-center text-white/40 text-[10px] tracking-[0.2em] pt-12 border-t border-white/10 uppercase">
          <p>&copy; {new Date().getFullYear()} Kossof Salon Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
