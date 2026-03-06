"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

import Image from "next/image"

const servicesDropdown = [
  { name: "SALON", href: "/salon-services" },
  { name: "SPA", href: "/spa-services" },
  { name: "WEDDINGS", href: "/weddings-services" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"
  const useLightHeader = !isHome || isScrolled

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 animate-fadeIn ${
        useLightHeader
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between relative h-24">
          {/* Left side - Navigation (desktop) */}
          <div className="hidden lg:flex flex-1 items-center justify-start space-x-8">
            <Link
              href="/about"
              className={cn(
                "text-sm font-semibold tracking-widest transition-colors hover:text-primary",
                useLightHeader ? "text-salon-brown" : "text-white",
                pathname === "/about" && "text-primary"
              )}
            >
              TALENT
            </Link>

            {servicesDropdown.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold tracking-widest transition-colors hover:text-primary",
                  useLightHeader ? "text-salon-brown" : "text-white",
                  pathname === item.href && "text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
            <Link href="/" className="block">
              <div className="relative w-48 h-24 sm:w-56 sm:h-28 lg:w-64 lg:h-32">
                <Image
                  src={useLightHeader ? "/logo-black-nobg.png" : "/logo-white.png"}
                  alt="Kossof Salon Spa"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Right side - Navigation (desktop) */}
          <div className="hidden lg:flex flex-1 items-center justify-end space-x-8">
            <Link
              href="https://shop.saloninteractive.com/store/kossof-salon-spa-ltd-91277"
              className={cn(
                "text-sm font-semibold tracking-widest transition-colors hover:text-primary",
                useLightHeader ? "text-salon-brown" : "text-white"
              )}
            >
              PRODUCTS
            </Link>
            <Link
              href="/faq"
              className={cn(
                "text-sm font-semibold tracking-widest transition-colors hover:text-primary",
                useLightHeader ? "text-salon-brown" : "text-white",
                pathname === "/faq" && "text-primary"
              )}
            >
              FAQ
            </Link>
            <Link
              href="https://booking.mangomint.com/kossofsalonspa"
              className="text-sm font-semibold tracking-widest transition-colors bg-primary text-white px-4 py-2 rounded-sm hover:bg-primary/90"
            >
              BOOK ONLINE
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex-1 flex justify-end">
            <Button
              size="icon"
              variant="ghost"
              className={useLightHeader ? "text-salon-brown" : "text-white"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 border-t border-gray-100">
            <Link
              href="/about"
              className="block px-8 py-4 text-sm font-semibold tracking-widest text-salon-brown border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              TALENT
            </Link>

            {servicesDropdown.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-8 py-4 text-sm font-semibold tracking-widest border-b border-gray-50",
                  pathname === item.href ? "text-primary" : "text-salon-brown"
                )}
                onClick={() => {
                  setIsMobileMenuOpen(false)
                }}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="https://shop.saloninteractive.com/store/kossof-salon-spa-ltd-91277"
              className="block px-8 py-4 text-sm font-semibold tracking-widest text-salon-brown border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              PRODUCTS
            </Link>
            <Link
              href="/faq"
              className="block px-8 py-4 text-sm font-semibold tracking-widest text-salon-brown border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="https://booking.mangomint.com/kossofsalonspa"
              className="block px-8 py-4 text-sm font-semibold tracking-widest text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BOOK ONLINE
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
