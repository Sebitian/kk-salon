"use client"

import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { TEAM_CATEGORIES, type TeamMember } from "@/lib/team-data"

export default function MeetTeamSection() {
  const pathname = usePathname()
  const onAboutPage = pathname === "/about"
  const [bioMember, setBioMember] = useState<TeamMember | null>(null)

  return (
    <section id="our-experts" className="pt-0 pb-24 px-4 bg-[#faf8f5]">
      <div className="container mx-auto max-w-7xl">
        <div
          className="flex flex-col items-center space-y-14"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-salon-brown">
              Our Experts
            </h2>
            <div className="w-24 h-1 bg-salon-blue mx-auto mt-3" />
            <p className="text-salon-brown/80 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto italic font-light pt-2">
              Our vision is to deliver <strong>Luxury, Beauty, and Experience</strong> in every visit—within a welcoming,
              fun, and social environment supported by top-notch hospitality and exceptional service.
            </p>
          </div>

          <div className="w-full space-y-16">
            {TEAM_CATEGORIES.map((category) => (
              <div key={category.id} className="w-full">
                <div className="flex items-center gap-4 justify-center mb-10">
                  <span className="h-px flex-1 max-w-[120px] bg-salon-brown/40" aria-hidden />
                  <h3 className="text-sm sm:text-base font-semibold tracking-[0.2em] uppercase text-salon-brown whitespace-nowrap px-2">
                    {category.label}
                  </h3>
                  <span className="h-px flex-1 max-w-[120px] bg-salon-brown/40" aria-hidden />
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 list-none p-0 m-0">
                  {category.members.map((member) => {
                    const hasBio = member.description.trim().length > 0
                    return (
                      <li key={member.id} className="flex flex-col items-center text-center">
                        <div className="w-full max-w-[220px] overflow-hidden rounded-sm shadow-md border border-salon-brown/10 bg-white">
                          <button
                            type="button"
                            onClick={() => setBioMember(member)}
                            className="relative block w-full cursor-pointer aspect-[4/5] focus:outline-none focus-visible:ring-2 focus-visible:ring-salon-blue focus-visible:ring-offset-2"
                            aria-label={
                              hasBio ? `Read bio for ${member.name}` : `View ${member.name}`
                            }
                          >
                            <Image
                              src={member.imageUrl}
                              alt=""
                              fill
                              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              className="object-cover object-top pointer-events-none select-none"
                              draggable={false}
                            />
                          </button>
                        </div>
                        <p className="mt-4 font-bold text-black text-sm sm:text-base leading-tight">{member.name}</p>
                        <p className="mt-1 text-black/90 text-xs sm:text-sm font-normal leading-snug px-1">
                          {member.title}
                        </p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            {!onAboutPage && (
              <Link
                href="/about#our-experts"
                className="inline-flex items-center justify-center bg-white text-salon-brown border border-salon-brown/20 px-6 py-3 rounded-sm text-xs sm:text-sm font-semibold tracking-widest uppercase hover:border-salon-blue/60 transition-colors"
              >
                Meet Our Experts
              </Link>
            )}
            <Link
              href="https://booking.mangomint.com/kossofsalonspa"
              className="inline-flex items-center justify-center bg-salon-raspberry text-white px-6 py-3 rounded-sm text-xs sm:text-sm font-semibold tracking-widest uppercase hover:bg-salon-raspberry/90 transition-colors"
            >
              Book With Our Team
            </Link>
            <Link
              href="/salon-services"
              className="inline-flex items-center justify-center bg-white text-salon-brown border border-salon-brown/20 px-6 py-3 rounded-sm text-xs sm:text-sm font-semibold tracking-widest uppercase hover:border-salon-blue/60 transition-colors"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </div>

      <Dialog open={bioMember !== null} onOpenChange={(open) => !open && setBioMember(null)}>
        <DialogContent className="max-h-[min(85vh,720px)] overflow-y-auto max-w-lg sm:max-w-xl border-salon-brown/15">
          {bioMember && (
            <>
              <DialogHeader>
                <DialogTitle className="text-salon-brown text-xl font-bold tracking-wide">
                  {bioMember.name}
                  <span className="block text-sm font-normal text-salon-brown/70 mt-1">{bioMember.title}</span>
                </DialogTitle>
              </DialogHeader>
              {bioMember.description.trim() ? (
                <div className="text-black leading-relaxed text-sm sm:text-base font-light space-y-3 pt-2">
                  {bioMember.description.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
              {bioMember.instagram && (
                <a
                  href={bioMember.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-salon-raspberry hover:text-salon-raspberry/80 text-sm font-semibold tracking-widest uppercase transition-colors"
                >
                  Instagram
                </a>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
