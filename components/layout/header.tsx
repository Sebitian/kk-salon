"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { SALON_SERVICES_SECTIONS } from "@/components/services/salon-services-data"
import { SPA_SERVICES_SECTIONS } from "@/components/services/spa-services-data"

import Image from "next/image"
import { IMAGES } from "@/lib/cloudinary"

type CategoryLink = {
  name: string
  href: string
}

const salonCategoryLinks: CategoryLink[] = SALON_SERVICES_SECTIONS.map((section) => ({
  name: section.title,
  href: `/salon-services#${section.id}`,
}))

const spaCategoryLinks: CategoryLink[] = SPA_SERVICES_SECTIONS.map((section) => ({
  name: section.title,
  href: `/spa-services#${section.id}`,
}))

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"
  const useLightHeader = !isHome || isScrolled

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 animate-fadeIn ${
        useLightHeader
          ? "bg-white/95 backdrop-blur-md shadow-lg py-4" 
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
              ABOUT US
            </Link>

            {[
              { name: "SALON", href: "/salon-services", categories: salonCategoryLinks },
              { name: "SPA", href: "/spa-services", categories: spaCategoryLinks },
            ].map((item) => (
              <div key={item.name} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1 text-sm font-semibold tracking-widest transition-colors hover:text-primary",
                    useLightHeader ? "text-salon-brown" : "text-white",
                    pathname === item.href && "text-primary"
                  )}
                >
                  {item.name}
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                <div className="invisible absolute left-0 top-full z-50 mt-3 w-80 rounded-md border border-salon-brown/15 bg-white p-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <Link
                    href={item.href}
                    className="block rounded-sm px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-salon-brown hover:bg-salon-raspberry/10"
                  >
                    View all {item.name.toLowerCase()} services
                  </Link>
                  <div className="mt-1 h-px bg-salon-brown/10" />
                  {item.categories.map((category) => (
                    <Link
                      key={category.href}
                      href={category.href}
                      className="block rounded-sm px-3 py-2 text-xs font-medium tracking-[0.04em] text-salon-brown hover:bg-salon-raspberry/10"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link
              href="/weddings-services"
              className={cn(
                "text-sm font-semibold tracking-widest transition-colors hover:text-primary",
                useLightHeader ? "text-salon-brown" : "text-white",
                pathname === "/weddings-services" && "text-primary"
              )}
            >
              WEDDINGS
            </Link>
          </div>

          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
            <Link href="/" className="block">
              <div className="relative w-48 h-20 sm:w-52 sm:h-24 lg:w-56 lg:h-24">
                <Image
                  src={useLightHeader ? IMAGES.logoBlackNobg : IMAGES.logoWhite}
                  alt="Kossof Salon Spa"
                  fill
                  className="object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Right side - Navigation (desktop) */}
          <div className="hidden lg:flex flex-1 items-center justify-end space-x-8">
            <Link
              href="/products"
              className={cn(
                "text-sm font-semibold tracking-widest transition-colors hover:text-primary",
                useLightHeader ? "text-salon-brown" : "text-white"
              )}
            >
              SHOP
            </Link>
            <Link
              href="https://clients.mangomint.com/gift-cards/741141"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-sm font-semibold tracking-widest transition-colors hover:text-primary",
                useLightHeader ? "text-salon-brown" : "text-white"
              )}
            >
              GIFT CARDS
            </Link>
            <Link
              href="https://booking.mangomint.com/kossofsalonspa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold tracking-widest transition-colors bg-primary text-white px-4 py-2 rounded-sm hover:bg-primary/90"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex-1 flex justify-end">
            <Button
              size="icon"
              variant="ghost"
              className="text-primary hover:text-primary/90"
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
              ABOUT US
            </Link>

            <details className="border-b border-gray-50">
              <summary className="cursor-pointer list-none px-8 py-4 text-sm font-semibold tracking-widest text-salon-brown">
                SALON
              </summary>
              <div className="pb-3">
                <Link
                  href="/salon-services"
                  className="block px-12 py-2 text-xs font-semibold tracking-[0.1em] uppercase text-salon-brown/85"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View all salon services
                </Link>
                {salonCategoryLinks.map((category) => (
                  <Link
                    key={category.href}
                    href={category.href}
                    className="block px-12 py-2 text-xs text-salon-brown/80"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </details>

            <details className="border-b border-gray-50">
              <summary className="cursor-pointer list-none px-8 py-4 text-sm font-semibold tracking-widest text-salon-brown">
                SPA
              </summary>
              <div className="pb-3">
                <Link
                  href="/spa-services"
                  className="block px-12 py-2 text-xs font-semibold tracking-[0.1em] uppercase text-salon-brown/85"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View all spa services
                </Link>
                {spaCategoryLinks.map((category) => (
                  <Link
                    key={category.href}
                    href={category.href}
                    className="block px-12 py-2 text-xs text-salon-brown/80"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </details>

            <Link
              href="/weddings-services"
              className={cn(
                "block px-8 py-4 text-sm font-semibold tracking-widest border-b border-gray-50",
                pathname === "/weddings-services" ? "text-primary" : "text-salon-brown"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              WEDDINGS
            </Link>

            <Link
              href="/products"
              className="block px-8 py-4 text-sm font-semibold tracking-widest text-salon-brown border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SHOP
            </Link>
            <Link
              href="https://clients.mangomint.com/gift-cards/741141"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-8 py-4 text-sm font-semibold tracking-widest text-salon-brown border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GIFT CARDS
            </Link>
            <Link
              href="https://booking.mangomint.com/kossofsalonspa"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-8 py-4 text-sm font-semibold tracking-widest text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BOOK NOW
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
