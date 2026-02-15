"use client"

import { useMemo, useState } from "react"
import Fuse from "fuse.js"
import Image from "next/image"
import Link from "next/link"
import { ServicesSection } from "@/components/services/services-data"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface ServiceItemProps {
  name: string
  price?: string
  description?: string
  defaultOpen?: boolean
  anchorId?: string
}

type IndexedService = {
  id: string
  anchorId: string
  name: string
  description: string
  groupTitle: string
  sectionTitle: string
}

type SearchSuggestion = {
  id: string
  type: "service" | "section"
  label: string
  subLabel: string
  targetId: string
  searchableText: string
}

type RenderService = {
  item: ServicesSection["groups"][number]["items"][number]
  itemIndex: number
}

type RenderGroup = {
  title: string
  note?: string
  groupIndex: number
  items: RenderService[]
}

type RenderSection = Omit<ServicesSection, "groups"> & {
  groups: RenderGroup[]
}

function getServiceId(sectionId: string, groupIndex: number, itemIndex: number) {
  return `${sectionId}:${groupIndex}:${itemIndex}`
}

function getServiceAnchorId(sectionId: string, groupIndex: number, itemIndex: number) {
  return `service-${sectionId}-${groupIndex}-${itemIndex}`
}

function scrollToTarget(targetId: string) {
  const element = document.getElementById(targetId)
  if (!element) return
  element.scrollIntoView({ behavior: "smooth", block: "start" })
  window.history.replaceState(null, "", `#${targetId}`)
}

function ServiceRow({ name, price, anchorId }: Pick<ServiceItemProps, "name" | "price" | "anchorId">) {
  return (
    <div id={anchorId} className="py-3 scroll-mt-28" itemScope itemType="https://schema.org/Service">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4">
        <h4
          className="min-w-0 pr-3 text-[15px] md:text-sm font-semibold text-salon-brown uppercase tracking-[0.14em] font-gotham"
          itemProp="name"
        >
          {name}
        </h4>
        {price ? (
          <span
            className="max-w-[11rem] text-right text-[15px] md:text-sm font-semibold text-salon-brown font-gotham break-words"
            itemProp="offers"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <meta itemProp="priceCurrency" content="USD" />
            <span itemProp="price">{price}</span>
          </span>
        ) : null}
      </div>
    </div>
  )
}

function ServiceItemAccordion({ name, price, description, defaultOpen = false, anchorId }: ServiceItemProps) {
  if (!description) {
    return <ServiceRow name={name} price={price} anchorId={anchorId} />
  }

  return (
    <Accordion type="multiple" defaultValue={defaultOpen ? [name] : undefined}>
      <AccordionItem value={name} id={anchorId} className="scroll-mt-28">
        <AccordionTrigger className="py-3 hover:no-underline">
          <div className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 pr-3">
            <h4 className="min-w-0 pr-3 text-[15px] md:text-sm font-semibold text-salon-brown uppercase tracking-[0.14em] font-gotham">
              {name}
            </h4>
            {price ? (
              <span className="max-w-[11rem] text-right text-[15px] md:text-sm font-semibold text-salon-brown font-gotham break-words">
                {price}
              </span>
            ) : null}
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-0 pb-4">
          <p className="text-[15px] md:text-sm leading-7 text-salon-brown/75 font-normal">
            {description}
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

interface ServicesContentProps {
  sections: ServicesSection[]
  schemaName?: string
  schemaDescription?: string
  searchPlaceholder?: string
}

export default function ServicesContent({
  sections,
  schemaName = "Kossof Salon Spa Services",
  schemaDescription = "Full service menu including hair, nails, facials, massage, waxing, lashes & brows, and makeup services.",
  searchPlaceholder = "Try: balayage, bridal makeup, deep tissue...",
}: ServicesContentProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const trimmedQuery = searchQuery.trim()

  const indexedServices = useMemo<IndexedService[]>(() => {
    return sections.flatMap((section) =>
      section.groups.flatMap((group, groupIndex) =>
        group.items.map((item, itemIndex) => ({
          id: getServiceId(section.id, groupIndex, itemIndex),
          anchorId: getServiceAnchorId(section.id, groupIndex, itemIndex),
          name: item.name,
          description: item.description ?? "",
          groupTitle: group.title,
          sectionTitle: section.title,
        })),
      ),
    )
  }, [sections])

  const servicesSearchEngine = useMemo(() => {
    return new Fuse(indexedServices, {
      keys: [
        { name: "name", weight: 0.55 },
        { name: "description", weight: 0.25 },
        { name: "groupTitle", weight: 0.12 },
        { name: "sectionTitle", weight: 0.08 },
      ],
      threshold: 0.35,
      ignoreLocation: true,
      minMatchCharLength: 2,
    })
  }, [indexedServices])

  const matchingServiceIds = useMemo(() => {
    if (!trimmedQuery) return null
    return new Set(servicesSearchEngine.search(trimmedQuery).map((result) => result.item.id))
  }, [servicesSearchEngine, trimmedQuery])

  const visibleSections = useMemo<RenderSection[]>(() => {
    return sections
      .map((section) => {
        const visibleGroups: RenderGroup[] = section.groups
          .map((group, groupIndex) => ({
            title: group.title,
            note: group.note,
            groupIndex,
            items: group.items
              .map((item, itemIndex) => ({ item, itemIndex }))
              .filter(({ itemIndex }) =>
                matchingServiceIds
                  ? matchingServiceIds.has(getServiceId(section.id, groupIndex, itemIndex))
                  : true,
              ),
          }))
          .filter((group) => group.items.length > 0)

        return {
          ...section,
          groups: visibleGroups,
        }
      })
      .filter((section) => section.groups.length > 0)
  }, [matchingServiceIds, sections])

  const visibleItemsCount = useMemo(() => {
    return visibleSections.reduce((sectionAcc, section) => {
      return sectionAcc + section.groups.reduce((groupAcc, group) => groupAcc + group.items.length, 0)
    }, 0)
  }, [visibleSections])

  const allItemsCount = useMemo(() => {
    return sections.reduce((sectionAcc, section) => {
      return sectionAcc + section.groups.reduce((groupAcc, group) => groupAcc + group.items.length, 0)
    }, 0)
  }, [sections])

  const suggestionSource = useMemo<SearchSuggestion[]>(() => {
    const sectionSuggestions: SearchSuggestion[] = sections.map((section) => ({
      id: `section:${section.id}`,
      type: "section",
      label: section.title,
      subLabel: "Section",
      targetId: section.id,
      searchableText: `${section.title} ${section.intro ?? ""}`,
    }))

    const serviceSuggestions: SearchSuggestion[] = indexedServices.map((service) => ({
      id: `service:${service.id}`,
      type: "service",
      label: service.name,
      subLabel: `${service.sectionTitle} • ${service.groupTitle}`,
      targetId: service.anchorId,
      searchableText: `${service.name} ${service.description} ${service.groupTitle} ${service.sectionTitle}`,
    }))

    return [...serviceSuggestions, ...sectionSuggestions]
  }, [indexedServices, sections])

  const suggestionEngine = useMemo(() => {
    return new Fuse(suggestionSource, {
      keys: [
        { name: "label", weight: 0.55 },
        { name: "searchableText", weight: 0.35 },
        { name: "subLabel", weight: 0.1 },
      ],
      threshold: 0.35,
      ignoreLocation: true,
      minMatchCharLength: 2,
    })
  }, [suggestionSource])

  const autocompleteOptions = useMemo(() => {
    if (!trimmedQuery) return []
    return suggestionEngine
      .search(trimmedQuery)
      .map((result) => result.item)
      .slice(0, 4)
  }, [suggestionEngine, trimmedQuery])

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": schemaName,
    "description": schemaDescription,
    "numberOfItems": allItemsCount,
    "itemListElement": sections.map((section, idx) => ({
      "@type": "Service",
      "position": idx + 1,
      "name": section.title,
      "description": section.intro ?? "",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Kossof Salon Spa",
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article className="w-full bg-white" itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Salon & Spa Services & Pricing" />
        <meta
          itemProp="description"
          content="Full service menu including haircuts, color, treatments, nails, facials, massage, waxing, lashes & brows, wedding services, and makeup."
        />

        <section className="w-full border-y border-salon-brown/10 bg-[#f7f4f2]">
          <div className="mx-auto w-full max-w-7xl px-6 py-6 sm:px-8">
            <label htmlFor="services-search" className="block text-xs font-semibold uppercase tracking-[0.2em] text-salon-brown/75">
              Search Services
            </label>
            <div className="relative mt-2">
              <div className="flex items-center gap-2">
                <input
                  id="services-search"
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder={searchPlaceholder}
                  className="h-11 w-full rounded-sm border border-salon-brown/25 bg-white px-3 text-[15px] text-salon-brown placeholder:text-salon-brown/45 focus:outline-none focus:ring-2 focus:ring-salon-raspberry/35"
                  aria-label="Search services"
                />
                {trimmedQuery ? (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="inline-flex h-11 shrink-0 items-center justify-center rounded-md bg-salon-raspberry px-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-salon-raspberry/90"
                  >
                    Clear
                  </button>
                ) : null}
              </div>

              {autocompleteOptions.length > 0 ? (
                <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-md border border-salon-brown/10 bg-white shadow-md">
                  {autocompleteOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => {
                        setSearchQuery(option.label)
                        requestAnimationFrame(() => scrollToTarget(option.targetId))
                      }}
                      className="flex w-full flex-col items-start gap-0.5 border-b border-salon-brown/10 px-4 py-3 text-left transition-colors last:border-b-0 hover:bg-salon-raspberry/5"
                    >
                      <span className="text-sm font-semibold text-salon-brown">{option.label}</span>
                      <span className="text-xs text-salon-brown/65">
                        {option.type === "service" ? "Service" : "Section"} - {option.subLabel}
                      </span>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
            <p className="mt-2 text-sm text-salon-brown/70" aria-live="polite">
              {trimmedQuery
                ? `${visibleItemsCount} matching service${visibleItemsCount === 1 ? "" : "s"}`
                : `${allItemsCount} total services`}
            </p>
          </div>
        </section>

        {trimmedQuery && visibleSections.length === 0 ? (
          <section className="w-full px-8 py-16">
            <div className="mx-auto w-full max-w-3xl rounded-md border border-salon-brown/15 bg-[#fdfbf9] px-6 py-7 text-center">
              <p className="text-[15px] text-salon-brown/80">
                No services found for <span className="font-semibold">"{trimmedQuery}"</span>.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="mt-4 inline-flex items-center justify-center rounded-md bg-salon-raspberry px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-salon-raspberry/90"
              >
                Clear Search
              </button>
            </div>
          </section>
        ) : null}

        {visibleSections.map((section) => {
          const autoExpandAll = trimmedQuery ? true : section.groups.length <= 2
          const singleGroup = section.groups.length === 1 ? section.groups[0] : null
          const textColOrder = section.textLeftOnDesktop
            ? "order-2 lg:order-1"
            : "order-2 lg:order-2"
          const imageColOrder = section.textLeftOnDesktop
            ? "order-1 lg:order-2"
            : "order-1 lg:order-1"
          const headingId = `${section.id}-heading`

          return (
            <section
              key={section.id}
              id={section.id}
              className="w-full flex flex-col lg:flex-row scroll-mt-24"
              aria-labelledby={headingId}
            >
              <div
                className={`w-full lg:w-1/2 py-20 lg:py-28 px-8 lg:px-20 flex items-center ${textColOrder} ${section.textPanelBgClassName}`}
              >
                <div className="w-full max-w-xl mx-auto">
                  <div className="mb-10">
                    <h2
                      id={headingId}
                      className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-widest text-salon-brown font-gotham"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {section.title}
                    </h2>
                    <div className="w-20 h-1 bg-salon-raspberry"></div>
                    {section.intro && (
                      <p className="mt-6 text-[15px] md:text-base text-salon-brown/70 leading-relaxed font-normal">
                        {section.intro}
                      </p>
                    )}
                  </div>

                  {singleGroup ? (
                    <div className="w-full pt-1">
                      {singleGroup.note && (
                        /Out-of-salon fee/i.test(singleGroup.note) ? (
                          <div className="mb-4 rounded-md border border-salon-raspberry/40 bg-salon-raspberry/10 px-4 py-3">
                            <p className="text-[15px] md:text-sm text-salon-brown/80 font-semibold">
                              {singleGroup.note}
                            </p>
                          </div>
                        ) : (
                          <p className="text-[15px] md:text-sm text-salon-brown/65 font-medium mb-4">
                            {singleGroup.note}
                          </p>
                        )
                      )}
                      <div className="pl-3 sm:pl-4" itemScope itemType="https://schema.org/ItemList">
                        {singleGroup.items.map(({ item, itemIndex }) => (
                          <ServiceItemAccordion
                            key={`${singleGroup.title}-${itemIndex}`}
                            name={item.name}
                            price={item.price}
                            description={item.description}
                            anchorId={getServiceAnchorId(section.id, singleGroup.groupIndex, itemIndex)}
                            defaultOpen
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Accordion
                      type="multiple"
                      className="w-full"
                      defaultValue={autoExpandAll ? section.groups.map((group) => group.title) : undefined}
                    >
                      {section.groups.map((group) => (
                        <AccordionItem key={group.title} value={group.title}>
                          <AccordionTrigger className="hover:no-underline">
                            <span className="text-sm font-semibold tracking-[0.20em] uppercase text-salon-brown/85 font-gotham">
                              {group.title}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="pt-2">
                            {group.note && (
                              /Out-of-salon fee/i.test(group.note) ? (
                                <div className="mb-4 rounded-md border border-salon-raspberry/40 bg-salon-raspberry/10 px-4 py-3">
                                  <p className="text-[15px] md:text-sm text-salon-brown/80 font-semibold">
                                    {group.note}
                                  </p>
                                </div>
                              ) : (
                                <p className="text-[15px] md:text-sm text-salon-brown/65 font-medium mb-4">
                                  {group.note}
                                </p>
                              )
                            )}
                            <div className="pl-3 sm:pl-4" itemScope itemType="https://schema.org/ItemList">
                              {group.items.map(({ item, itemIndex }) => (
                                <ServiceItemAccordion
                                  key={`${group.title}-${itemIndex}`}
                                  name={item.name}
                                  price={item.price}
                                  description={item.description}
                                  anchorId={getServiceAnchorId(section.id, group.groupIndex, itemIndex)}
                                  defaultOpen={autoExpandAll}
                                />
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  )}
                </div>
              </div>

              <div className={`relative w-full lg:w-1/2 overflow-hidden ${imageColOrder}`}>
                <div className="absolute inset-0" aria-hidden="true">
                  <Image
                    src={section.image.src}
                    alt=""
                    fill
                    className="object-cover object-center blur-md scale-110 opacity-30"
                    quality={70}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-white/35"></div>
                </div>

                <div className="relative h-[42vh] sm:h-[50vh] lg:h-[560px]">
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    fill
                    className="object-cover object-center"
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={section.id === "hair"}
                  />
                </div>
              </div>
            </section>
          )
        })}

        <section className="w-full bg-white border-t border-salon-brown/10">
          <div className="container mx-auto max-w-7xl px-8 py-14 sm:py-16 flex justify-center">
            <Link
              href="https://booking.mangomint.com/kossofsalonspa"
              className="inline-flex w-full max-w-xs sm:w-auto sm:min-w-[220px] items-center justify-center whitespace-nowrap bg-salon-raspberry text-white px-8 py-3.5 rounded-sm text-sm font-semibold tracking-[0.12em] uppercase hover:bg-salon-raspberry/90 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}