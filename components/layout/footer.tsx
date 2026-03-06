"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-salon-brown text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Logo and About */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="mb-8">
              <Image
                src="/logo-white.png"
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
                <Facebook className="h-6 w-6 text-[#00a6ff] group-hover:opacity-80 transition-opacity" />
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
                <Instagram className="h-6 w-6 text-[#ff2a8e] group-hover:opacity-80 transition-opacity" />
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
              <p className="leading-relaxed">185 N MILWAUKEE AVENUE, STE. 120<br />LINCOLNSHIRE, IL 60069</p>
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

        {/* Copyright */}
        {/* <div className="text-center text-white/20 text-[10px] tracking-[0.2em] pt-12 border-t border-white/5 uppercase">
          <p>
            &copy; {new Date().getFullYear()} Kossof Salon Spa. Site by{" "}
            <a
              href="https://www.sebastian-sovailescu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Sebastian
            </a>
          </p>
        </div> */}
      </div>
    </footer>
  )
}
