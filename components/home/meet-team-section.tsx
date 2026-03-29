"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { IMAGES } from "@/lib/cloudinary"

export default function MeetTeamSection() {
  const categories = useMemo(
    () =>
      [
        {
          id: "hair",
          label: "Hair",
          members: [
            {
              image: IMAGES.gif1,
              name: "Cheryl",
              title: "Master Hairstylist",
              description:
                "Master Hairstylist specializing in precision cuts for men and women, expert perms, and professional keratin & Brazilian smoothing treatments — delivering refined, modern results backed by decades of experience.",
            },
            {
              image: IMAGES.gif1,
              name: "Joanna",
              title: "Stylist",
              description:
                "Joanna is a highly skilled hairstylist with over two decades of experience, specializing in precision cuts, advanced color techniques, keratin treatments, hair extensions, and curly hair design. Her artistry with color includes balayage, foilyage, air touch, ombré, highlights, lowlights, color corrections, and creative transformations—all tailored to each client's personality and style. She's known for creating natural, multidimensional tones that make hair shine with life and movement.\n\nA true master of curly and textured hair, Joanna is certified in Ouidad, Advanced Rëzo, and Mizani AirCut cutting methods. She's passionate about empowering clients to embrace their natural texture, offering expert techniques that define curls, enhance shape, and bring out their healthiest, most vibrant look. Whether it's soft waves or tight ringlets, Joanna customizes every cut to highlight each client's unique beauty.\n\nKnown for her warmth and professionalism, Joanna takes pride in her personalized approach—ensuring every guest leaves her chair not only loving their hair, but also feeling confident and renewed.",
              instagram: "https://www.instagram.com/joanna_artistry",
            },
            {
              image: IMAGES.gif1,
              name: "Zack",
              title: "Master Stylist",
              description:
                "With over 44 years of experience, hairstyling has been part of my life from the very beginning. I grew up in a salon family—both of my parents were salon owners—so the art of hair has always been in my blood.\n\nI am a two-time winner of the Polish Hairdressing Championships and a finalist in the European Hairdressing Championships in Athens. My career has included advanced training in Germany, France, and Spain, and I served as Creative Director for Londa in Germany, appearing in national television campaigns for the brand.\n\nFor 22 years, I worked alongside Teddie Kossof in Northfield, Illinois, building lasting client relationships and delivering high-level, personalized hairstyling.\n\nI have judged international competitions, hosted a television program in Poland, and had my work featured in 12 Polish women's magazines. I've also created hairstyles for leading fashion designers and worked with international celebrities, including Mira Sorvino and Adriana Sklenarikova.\n\nWhile I'm proud of the awards and global experience, my greatest joy remains simple: helping every woman feel confident, radiant, and beautiful.",
            },
            {
              image: IMAGES.gif1,
              name: "Grace",
              title: "Stylist",
              description:
                "I believe a great haircut is a masterpiece in motion. With over 30 years of experience, I have transformed my lifelong passion for hair into a dedicated craft. My journey began in my early twenties, and that same creative fire continues to inspire every transformation I create today.\n\nOriginally from Poland and fluent in both Polish and English, I bring an international, artistic perspective to my work behind the chair. While I enjoy all aspects of hairstyling, my true specialty is short, precision cutting. I see hair as a canvas and love the challenge of creating styles that are both bold and effortlessly wearable.\n\nFor me, it's not just about a haircut—it's about the artistry of helping you look and feel like your very best self.",
            },
            {
              image: IMAGES.gif1,
              name: "Lisette",
              title: "Master Hairstylist",
              description:
                "Hi, I'm Lisette Norris.\n\nI'm a Master Hairstylist with over 40 years of experience, proudly serving the North Shore. My work blends timeless foundations with modern techniques, and I'm committed to continuous education and growth.\n\nI offer a full range of services including classic and creative haircuts for men and women, perms, relaxers, keratin treatments, extensions, special event styling, and wig services. I've also been honored with multiple industry awards throughout my career.\n\nI believe great hair starts with truly understanding each client. My goal is simple: to know your hair better than you do and help you look and feel your very best.",
            },
            {
              image: IMAGES.gif1,
              name: "Brentley",
              title: "Stylist",
              description:
                "Your long hair is safe with me. I specialize in cutting and styling long hair and truly understand the journey it takes to grow it. I had hair past my waist and didn't get my first haircut until I was 18, so I know the time, patience, and care that goes into keeping it long, healthy, and beautiful.\n\nI'm certified in Brazilian Blowout and Keratin Complex treatments, helping you achieve smooth, manageable results while maintaining your length.\n\nWhen I'm not behind the chair, I'm usually into photography or working on cars—two passions that reflect my attention to detail and love for craftsmanship.",
            },
          ],
        },
        {
          id: "spa",
          label: "Spa",
          members: [
            {
              image: IMAGES.gif1,
              name: "Matt",
              title: "Licensed Massage Therapist",
              description:
                "With over 10 years in innovative health and wellness industries, licensed massage therapist Matt Polakow helps clients effectively manage pain and boost wellbeing. He specializes in deep tissue and Swedish massage through a therapeutic lens that tackles discomfort head-on, minimizes stress, and promotes better mobility. Dedicated to personalized, results-oriented sessions, he enhances his practice with personal interests in exercise, reading books, and meditation for a truly holistic perspective.",
            },
            {
              image: IMAGES.gif1,
              name: "Carol Marie",
              title: "Skincare Specialist & Makeup Artist",
              description:
                "My new chapter begins at Kossof Salon Spa\n\nHi, I'm Carol Marie Everett, and I'm thrilled to be joining the team! With 35 years of experience, I've dedicated my career to helping clients feel confident and refreshed through personalized skincare and beauty services.\n\nIn addition to skincare and waxing, I've had the privilege of working as a makeup artist for photoshoots, productions, television, film, and commercials, bringing both experience and creativity to every look.\n\nI'm excited to welcome new clients and would love to help you achieve your skincare goals.",
            },
          ],
        },
      ] as { id: string; label: string; members: { image: string; name: string; title: string; description: string; instagram?: string }[] }[],
    [],
  )

  const allMembers = useMemo(
    () => categories.flatMap((c) => c.members.map((m) => ({ ...m, categoryId: c.id }))),
    [categories],
  )

  const [activeMemberKey, setActiveMemberKey] = useState<string | null>(null)

  const itemElsRef = useRef(new Map<string, HTMLElement>())
  const setItemEl = useCallback(
    (key: string) => (el: HTMLElement | null) => {
      if (el) itemElsRef.current.set(key, el)
      else itemElsRef.current.delete(key)
    },
    [],
  )

  useEffect(() => {
    const els = Array.from(itemElsRef.current.values())
    if (els.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length === 0) return

        // Pick the most-visible card as "active"
        const best = visible.reduce((a, b) => (b.intersectionRatio > a.intersectionRatio ? b : a))
        const key = (best.target as HTMLElement).dataset.memberKey
        if (key) setActiveMemberKey(key)
      },
      {
        // Trigger when a card is mostly in view (mobile scroll friendly)
        threshold: [0.25, 0.4, 0.55, 0.7, 0.85],
        rootMargin: "-10% 0px -25% 0px",
      },
    )

    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [allMembers])

  return (
    <section className="pt-0 pb-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div
          className="flex flex-col items-center space-y-16"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          {/* Title with context */}
          <div className="text-center space-y-4">
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-salon-brown">
              Our Experts
            </h2>
            <div className="w-24 h-1 bg-salon-blue mx-auto mt-4"></div>
            <p className="text-salon-brown/80 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto italic font-light pt-2">
              Our vision is to deliver <strong>Luxury, Beauty, and Experience</strong> in every visit—within a welcoming,
              fun, and social environment supported by top-notch hospitality and exceptional service.
            </p>
          </div>

          {/* People list (Pascal-style) */}
          <div className="w-full space-y-6">
            {allMembers.map((member) => (
              // "Active" card is driven by scroll position (IntersectionObserver)
              <article
                key={`${member.categoryId}-${member.name}`}
                ref={setItemEl(`${member.categoryId}-${member.name}`)}
                data-member-key={`${member.categoryId}-${member.name}`}
                onMouseEnter={() => setActiveMemberKey(`${member.categoryId}-${member.name}`)}
                onFocus={() => setActiveMemberKey(`${member.categoryId}-${member.name}`)}
                className={cn(
                  "bg-white border rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 md:p-8",
                  activeMemberKey === `${member.categoryId}-${member.name}`
                    ? "border-salon-raspberry/30"
                    : "border-salon-brown/10",
                )}
              >
                <div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-salon-brown tracking-widest uppercase">
                      {member.name}
                      <span className="font-light text-salon-brown/60"> / {member.title}</span>
                    </h3>
                    <div className="mt-3 text-black leading-relaxed text-base lg:text-lg font-light space-y-3">
                      {member.description.split("\n\n").map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 text-salon-raspberry hover:text-salon-raspberry/80 text-sm font-semibold tracking-widest uppercase transition-colors"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        @joanna_artistry
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/about"
              className="inline-flex items-center justify-center bg-white text-salon-brown border border-salon-brown/20 px-6 py-3 rounded-sm text-xs sm:text-sm font-semibold tracking-widest uppercase hover:border-salon-blue/60 transition-colors"
            >
              Meet Our Experts
            </Link>
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
    </section>
  )
}