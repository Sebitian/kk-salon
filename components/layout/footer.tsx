import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#251c18] text-white pt-16 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* CONTACT Section */}
          <div className="text-center">
            <h3 className="text-lg font-serif uppercase mb-6 tracking-wide">CONTACT</h3>
            <div className="space-y-3 text-sm uppercase font-sans">
              <p className="leading-relaxed">185 N MILWAUKEE AVENUE, STE. 120</p>
              <p className="leading-relaxed">LINCOLNSHIRE, IL 60069</p>
              <p className="mt-4">info@kossofsalonspa.com</p>
              <p className="mt-2">(847) 571-8078</p>
              <Link href="/contact" className="block mt-6 underline hover:text-gray-300 transition-colors">
                FAQ'S
              </Link>
            </div>
          </div>

          {/* Logo and Social Media */}
          <div className="flex flex-col items-center justify-start">
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="Kossof Salon Spa"
                width={200}
                height={200}
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover"
              />
            </div>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* HOURS Section */}
          <div className="text-center">
            <h3 className="text-lg font-serif uppercase mb-6 tracking-wide">HOURS</h3>
            <ul className="space-y-2 text-sm uppercase font-sans">
              <li>MONDAY: CLOSED</li>
              <li>TUESDAY: 9-6</li>
              <li>WEDNESDAY: 9-4</li>
              <li>THURSDAY: 9-6</li>
              <li>FRIDAY: 9-6</li>
              <li>SATURDAY: 9-4</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-xs pt-8 border-t border-gray-700">
          <p>
            &copy; {new Date().getFullYear()} Kossof Salon Spa. Designed by{" "}
            <a
              href="https://www.sebastian-sovailescu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300 transition-colors"
            >
              Sebastian
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
