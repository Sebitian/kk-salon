"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, ShoppingCart, User } from "lucide-react"

const navItems = [
  { name: "BOOK", href: "/booking" },
  { name: "ABOUT", href: "/about" },
  { name: "GALLERY", href: "/gallery" },
  { name: "SERVICES", href: "/services" },
  { name: "FAQ", href: "/faq" },
  { name: "CONTACT", href: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 animate-fadeIn ${
        isScrolled ? "bg-[#251c18]/95 backdrop-blur-md shadow-md py-2" : "bg-[#251c18]/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between relative">
          {/* Left side - Navigation (desktop) and hamburger (mobile) */}
          <div className="flex items-center flex-1 max-w-[calc(50%-120px)]">
            {/* Mobile hamburger menu */}
            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden text-white hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 overflow-hidden">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-primary whitespace-nowrap ${
                    pathname === item.href ? "text-primary" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Center - Title */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10 px-4">
            <Link
              href="/"
              className="font-['Montserrat'] text-white text-lg xl:text-xl font-bold tracking-wider hover:text-primary transition-colors whitespace-nowrap"
            >
              Kossof Salon Spa  (v.1.0)
            </Link>
          </div>

          {/* Right side - Icons */}
          <div className="flex items-center space-x-2 xl:space-x-3 flex-1 justify-end max-w-[calc(50%-120px)]">
            {/* Currency selector (desktop only) */}
            <div className="hidden xl:flex items-center space-x-1 text-white text-sm">
              <span className="text-xs">🇺🇸</span>
              <span className="text-sm">USD $</span>
            </div>

            {/* User icon */}
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-primary"
              aria-label="User account"
            >
              <User size={18} />
            </Button>

            {/* Search icon */}
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-primary"
              aria-label="Search"
            >
              <Search size={18} />
            </Button>

            {/* Shopping cart icon */}
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-primary"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={18} />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-[#251c18]/95 rounded-lg shadow-lg p-4 border border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded text-base font-medium mb-2 transition-colors ${
                  pathname === item.href
                    ? "text-primary bg-white/10"
                    : "text-white hover:text-primary hover:bg-white/5"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}