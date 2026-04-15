"use client"

import Image from "next/image"
import Link from "next/link"
import { cloudinaryImage } from "@/lib/cloudinary"

const COMMUNITY_PARTNERS = [
  {
    name: "Alloy Personal Training Lincolnshire",
    logoSrc: cloudinaryImage("alloy_big_cww2p3"),
    websiteUrl: "https://lincolnshire.alloypersonaltraining.com/lincolnshire/main",
  },
  {
    name: "Lincolnshire Marriott Resort",
    logoSrc: cloudinaryImage("mariott_gucbqk"),
    websiteUrl:
      "https://www.marriott.com/en-us/hotels/chiln-lincolnshire-marriott-resort/overview/?cid=NAT_google_hotel_url",
  },
]

export default function CommunityPartnersSection() {
  return (
    <section className="bg-white px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">Community Partners</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-black/70 sm:text-lg">
            We are proud to collaborate with local partners who support our guests and community.
          </p>
          <div className="mx-auto mt-5 h-1 w-24 bg-salon-blue" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {COMMUNITY_PARTNERS.map((partner) => (
            <Link
              key={partner.name}
              href={partner.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center rounded-2xl border border-black/10 bg-white p-4 shadow-sm transition hover:border-primary/40 hover:shadow-md"
              aria-label={`Visit ${partner.name}`}
            >
              <div className="relative h-24 w-full max-w-[320px]">
                <Image
                  src={partner.logoSrc}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 85vw, 320px"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
