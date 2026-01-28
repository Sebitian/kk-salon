 "use client"

import { useMemo, useState } from "react"
import Image from "next/image"

export default function MeetTeamSection() {
  const categories = useMemo(
    () =>
      [
        {
          id: "management",
          label: "Management",
          members: [
            {
              image: "/gif1.gif",
              name: "Keeley",
              title: "Co-Founder / Master Stylist",
              description:
                "Keeley brings decades of experience in precision cutting, custom color, and elevated guest care—carrying forward the Kossof legacy.",
            },
          ],
        },
        {
          id: "hair",
          label: "Hair",
          members: [
            {
              image: "/gif2.gif",
              name: "Amy",
              title: "Co-Founder / Master Stylist",
              description:
                "Amy is known for lived-in color, dimensional highlights, and a warm, detail-driven approach that makes every guest feel at home.",
            },
            {
              image: "/gif3.gif",
              name: "Adam",
              title: "Master Stylist",
              description:
                "From modern cuts to polished finishing, Adam focuses on clean technique, consultation, and results that fit your lifestyle.",
            },
          ],
        },
        {
          id: "spa",
          label: "Spa",
          members: [
            {
              image: "/gif5.gif",
              name: "Olivia",
              title: "Esthetician",
              description:
                "Olivia specializes in relaxing, results-focused skincare and services designed to leave you glowing and refreshed.",
            },
            {
              image: "/gif1.gif",
              name: "Sophie",
              title: "Spa Coordinator",
              description:
                "Sophie helps create a seamless experience—matching guests to the right services and supporting a calm, welcoming visit.",
            },
          ],
        },
        {
          id: "nails",
          label: "Nails",
          members: [
            {
              image: "/gif4.gif",
              name: "Cynthia",
              title: "Nail Technician",
              description:
                "Cynthia delivers meticulous manicures and pedicures with an eye for detail—clean, classic, and always polished.",
            },
          ],
        },
      ] as const,
    [],
  )

  const allMembers = useMemo(
    () => categories.flatMap((c) => c.members.map((m) => ({ ...m, categoryId: c.id }))),
    [categories],
  )

  const [activeCategory, setActiveCategory] = useState<string>("all")
  const visibleMembers = activeCategory === "all"
    ? allMembers
    : allMembers.filter((m) => m.categoryId === activeCategory)

  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div
          className="flex flex-col items-center space-y-16"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          {/* Title with context */}
          <div className="text-center space-y-4">
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-salon-brown">
              Talent
            </h2>
            <div className="w-24 h-1 bg-salon-blue mx-auto mt-4"></div>
            <p className="text-salon-brown/70 text-xl lg:text-2xl font-light tracking-wide max-w-2xl mx-auto pt-4">
              30+ Years of Expertise in Hair & Spa Services
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase transition-colors border ${
                activeCategory === "all"
                  ? "bg-salon-raspberry text-white border-salon-raspberry"
                  : "bg-white text-salon-brown border-salon-brown/20 hover:border-salon-blue/60"
              }`}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCategory(c.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase transition-colors border ${
                  activeCategory === c.id
                    ? "bg-salon-raspberry text-white border-salon-raspberry"
                    : "bg-white text-salon-brown border-salon-brown/20 hover:border-salon-blue/60"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* People list (Pascal-style) */}
          <div className="w-full space-y-6">
            {visibleMembers.map((member) => (
              <article
                key={`${member.categoryId}-${member.name}`}
                className="bg-white border border-salon-brown/10 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 md:p-8"
              >
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start">
                  <div className="shrink-0">
                    <div className="relative h-40 w-40 sm:h-44 sm:w-44 overflow-hidden rounded-full border-4 border-salon-blue/30 shadow-lg">
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.title} at Kossof Salon Spa`}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-110"
                        unoptimized
                        sizes="176px"
                      />
                    </div>
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-salon-brown tracking-widest uppercase">
                      {member.name}
                      <span className="font-light text-salon-brown/60"> / {member.title}</span>
                    </h3>
                    <p className="mt-3 text-salon-brown/75 leading-relaxed text-base lg:text-lg font-light">
                      {member.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Brand Voice */}
          <p className="text-salon-brown/80 text-base lg:text-lg leading-relaxed text-center max-w-2xl mx-auto italic font-light">
            Our vision is to deliver <strong>Luxury, Beauty, and Experience</strong>{" "}
            in every visit—within a welcoming, fun, and social environment supported
            by top-notch hospitality and exceptional service.
          </p>

        </div>
      </div>
    </section>
  )
}