"use client"

import { useMemo, useState } from "react"
import Fuse from "fuse.js"
import Image from "next/image"
import Link from "next/link"
import { CalendarPlus } from "lucide-react"
import { ServicesSection, ServiceItem } from "@/components/services/services-data"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

interface ServiceItemProps {
  name: string
  price?: string
  description?: string
  bookingUrl?: string
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
  bookingEmbedUrl?: string
  bookingEmbedTitle?: string
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

function formatDisplayPrice(price?: string) {
  if (!price) return price
  if (/pricing based on consultation/i.test(price)) return "Consultation based"
  return price
}

function BookingIconLink({ bookingUrl }: { bookingUrl?: string }) {
  if (!bookingUrl) return null

  return (
    <Link
      href={bookingUrl}
      aria-label="Book this service"
      title="Book this service"
      className="inline-flex h-8 w-8 md:h-9 md:w-9 shrink-0 items-center justify-center rounded-md bg-salon-raspberry text-white transition-colors hover:bg-salon-raspberry/90"
    >
      <CalendarPlus className="h-4 w-4" aria-hidden="true" />
      <span className="sr-only">Book this service</span>
    </Link>
  )
}

function BookingMenuOverlayCta({ bookingEmbedUrl, bookingEmbedTitle }: { bookingEmbedUrl: string; bookingEmbedTitle?: string }) {
  return (
    <div className="border-t border-salon-brown/10 pt-6">
      <div className="mx-auto max-w-md rounded-xl border border-salon-brown/15 bg-[#f8f6f5] px-5 py-5 text-center shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
        <Link
          href={bookingEmbedUrl}
          aria-label={bookingEmbedTitle ?? "Open online booking"}
          className="inline-flex w-full items-center justify-center rounded-md bg-salon-raspberry px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-salon-raspberry/90"
        >
          Book in Online Booking
        </Link>
      </div>
    </div>
  )
}

function ServiceRow({ name, price, bookingUrl, anchorId }: Pick<ServiceItemProps, "name" | "price" | "bookingUrl" | "anchorId">) {
  const displayPrice = formatDisplayPrice(price)

  return (
    <div id={anchorId} className="py-3 scroll-mt-28" itemScope itemType="https://schema.org/Service">
      <div className="grid w-full min-w-0 grid-cols-[minmax(0,1fr)_auto_auto] items-start gap-x-3">
        <h4
          className="min-w-0 pr-2 text-[14px] md:text-sm font-semibold text-salon-brown uppercase tracking-[0.08em] md:tracking-[0.14em] font-sans break-words"
          itemProp="name"
        >
          {name}
        </h4>
        {displayPrice ? (
          <span
            className="max-w-[10.5rem] justify-self-end text-right text-[15px] md:text-sm font-semibold text-salon-brown font-sans break-words leading-tight"
            itemProp="offers"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <meta itemProp="priceCurrency" content="USD" />
            <span itemProp="price">{displayPrice}</span>
          </span>
        ) : null}
        <div className="shrink-0 self-start">
          <BookingIconLink bookingUrl={bookingUrl} />
        </div>
      </div>
    </div>
  )
}

function ServiceItemAccordion({ name, price, description, bookingUrl, defaultOpen = false, anchorId }: ServiceItemProps) {
  const displayPrice = formatDisplayPrice(price)

  if (!description) {
    return <ServiceRow name={name} price={price} bookingUrl={bookingUrl} anchorId={anchorId} />
  }

  return (
    <Accordion type="multiple" defaultValue={defaultOpen ? [name] : undefined}>
      <AccordionItem value={name} id={anchorId} className="scroll-mt-28">
        <div className="flex w-full items-start gap-2">
          <div className="flex-1">
            <AccordionTrigger className="py-3 hover:no-underline">
              <div className="grid w-full min-w-0 grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 pr-3">
                <h4 className="min-w-0 pr-2 text-[14px] md:text-sm font-semibold text-salon-brown uppercase tracking-[0.08em] md:tracking-[0.14em] font-sans break-words">
                  {name}
                </h4>
                {displayPrice ? (
                  <span className="max-w-[10.5rem] justify-self-end text-right text-[15px] md:text-sm font-semibold text-salon-brown font-sans break-words leading-tight">
                    {displayPrice}
                  </span>
                ) : null}
              </div>
            </AccordionTrigger>
          </div>
          <div className="shrink-0 pt-3">
            <BookingIconLink bookingUrl={bookingUrl} />
          </div>
        </div>
        <AccordionContent className="pt-0 pb-4">
          <p className="text-[15px] md:text-sm leading-7 text-salon-brown/75 font-normal">
            {description}
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

function ServiceTile({ item, onClick }: { item: ServiceItem; onClick: () => void }) {
  const displayPrice = formatDisplayPrice(item.price)

  return (
    <button
      type="button"
      onClick={onClick}
      className="relative aspect-square flex flex-col items-center justify-center gap-1.5 rounded-xl border border-salon-brown/12 bg-white p-2.5 text-center shadow-sm transition-all duration-150 active:scale-[0.96] active:bg-salon-raspberry/5 hover:border-salon-raspberry/40 hover:shadow-md select-none [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none]"
    >
      <span className="text-[15px] font-semibold uppercase leading-[1.15] tracking-[0.01em] text-salon-brown font-sans">
        {item.name}
      </span>
      {displayPrice ? (
        <span className="text-[12px] font-semibold leading-tight text-salon-raspberry">
          {displayPrice}
        </span>
      ) : null}
    </button>
  )
}

function ServiceDetailModal({
  item,
  open,
  onOpenChange,
}: {
  item: ServiceItem | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  if (!item) return null
  const displayPrice = formatDisplayPrice(item.price)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[92vw] rounded-xl sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-base font-bold uppercase tracking-[0.1em] text-salon-brown font-sans">
            {item.name}
          </DialogTitle>
          {displayPrice ? (
            <p className="mt-1 text-sm font-semibold text-salon-raspberry">{displayPrice}</p>
          ) : null}
          {item.duration ? (
            <p className="text-sm font-medium text-salon-brown/70">Duration: {item.duration}</p>
          ) : null}
        </DialogHeader>
        {item.description ? (
          <DialogDescription className="text-[14px] leading-relaxed text-salon-brown/75">
            {item.description}
          </DialogDescription>
        ) : null}
        {item.bookingUrl ? (
          <div className="mt-2">
            <Link
              href={item.bookingUrl}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-salon-raspberry px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-salon-raspberry/90"
            >
              <CalendarPlus className="h-4 w-4" aria-hidden="true" />
              Book Now
            </Link>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}

interface ServicesContentProps {
  sections: ServicesSection[]
  schemaName?: string
  schemaDescription?: string
  searchPlaceholder?: string
  showSectionNav?: boolean
  /** When set, footer shows a phone CTA instead of online booking. */
  footerCallSchedule?: { tel: string; numberDisplay: string }
}

export default function ServicesContent({
  sections,
  schemaName = "Kossof Salon Spa Services",
  schemaDescription = "Full service menu including hair, nails, facials, massage therapies, waxing, lashes + brows, and makeup services.",
  searchPlaceholder = "Try: balayage, bridal makeup, deep tissue...",
  showSectionNav = true,
  footerCallSchedule,
}: ServicesContentProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const trimmedQuery = searchQuery.trim()
  const [modalItem, setModalItem] = useState<ServiceItem | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

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
            bookingEmbedUrl: group.bookingEmbedUrl,
            bookingEmbedTitle: group.bookingEmbedTitle,
            groupIndex,
            items: group.items
              .map((item, itemIndex) => ({ item, itemIndex }))
              .filter(({ itemIndex }) =>
                matchingServiceIds
                  ? matchingServiceIds.has(getServiceId(section.id, groupIndex, itemIndex))
                  : true,
              ),
          }))
          .filter(
            (group) => group.items.length > 0 || Boolean(group.bookingEmbedUrl),
          )

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
          content="Full service menu including haircuts, color, treatments, nails, facials, massage therapies, waxing, lashes + brows, wedding services, and makeup."
        />

        {showSectionNav && sections.length > 1 ? (
          <nav
            className="w-full border-b border-salon-brown/10 bg-white px-4 py-4 sm:px-6 sm:py-5"
            aria-label="Service categories"
          >
            <div className="mx-auto max-w-7xl">
              <ul className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      type="button"
                      onClick={() => scrollToTarget(section.id)}
                      className="inline-flex w-fit max-w-[12.5rem] items-center justify-center rounded-full border border-salon-brown/15 bg-[#f7f7f8]/95 px-3.5 py-2 text-center text-[10px] font-semibold uppercase leading-snug tracking-[0.06em] text-salon-brown whitespace-normal break-words shadow-[0_2px_10px_rgba(0,0,0,0.04)] backdrop-blur-sm transition-colors hover:border-salon-raspberry/35 hover:bg-salon-raspberry/[0.08] sm:max-w-none sm:px-4 sm:text-xs sm:tracking-[0.08em]"
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        ) : null}

        <section className="hidden">
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
                      className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight tracking-[0.06em] sm:tracking-[0.08em] md:tracking-[0.14em] text-salon-brown font-sans break-words"
                    >
                      {section.title}
                    </h2>
                    <div className="w-20 h-1 bg-salon-raspberry"></div>
                    {section.intro && (
                      <p className="mt-6 whitespace-pre-line text-[15px] md:text-base text-salon-brown/70 leading-relaxed font-normal">
                        {section.intro}
                      </p>
                    )}
                  </div>

                  {/* ── Mobile: list view (tiles temporarily removed) ── */}
                  <div className="block md:hidden">
                    {section.groups.map((group) => (
                      <div key={group.title} className="mb-6">
                        <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-salon-brown/70 font-sans">
                          {group.title}
                        </h3>
                        {group.note && (
                          /Out-of-salon fee/i.test(group.note) ? (
                            <div className="mb-3 rounded-md border border-salon-raspberry/40 bg-salon-raspberry/10 px-3 py-2">
                              <p className="text-xs text-salon-brown/80 font-semibold">{group.note}</p>
                            </div>
                          ) : (
                            <p className="mb-3 text-xs text-salon-brown/65 font-medium">{group.note}</p>
                          )
                        )}
                        {/* <div className="grid grid-cols-2 gap-2.5">
                          {group.items.map(({ item, itemIndex }) => (
                            <ServiceTile
                              key={`tile-${group.title}-${itemIndex}`}
                              item={item}
                              onClick={() => {
                                setModalItem(item)
                                setModalOpen(true)
                              }}
                            />
                          ))}
                        </div> */}
                        <div className="pl-2" itemScope itemType="https://schema.org/ItemList">
                          {group.items.map(({ item, itemIndex }) => (
                            <ServiceItemAccordion
                              key={`${group.title}-mobile-${itemIndex}`}
                              name={item.name}
                              price={item.price}
                              description={item.description}
                              bookingUrl={item.bookingUrl}
                              anchorId={getServiceAnchorId(section.id, group.groupIndex, itemIndex)}
                            />
                          ))}
                        </div>
                        {group.bookingEmbedUrl ? (
                          <div className="mt-8">
                            <BookingMenuOverlayCta
                              bookingEmbedUrl={group.bookingEmbedUrl}
                              bookingEmbedTitle={group.bookingEmbedTitle}
                            />
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>

                  {/* ── Desktop: accordion ── */}
                  {singleGroup ? (
                    <div className="hidden md:block w-full pt-1">
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
                            bookingUrl={item.bookingUrl}
                            anchorId={getServiceAnchorId(section.id, singleGroup.groupIndex, itemIndex)}
                            defaultOpen
                          />
                        ))}
                      </div>
                      {singleGroup.bookingEmbedUrl ? (
                        <div className="mt-8">
                          <BookingMenuOverlayCta
                            bookingEmbedUrl={singleGroup.bookingEmbedUrl}
                            bookingEmbedTitle={singleGroup.bookingEmbedTitle}
                          />
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <Accordion
                      type="multiple"
                      className="hidden md:block w-full"
                      defaultValue={autoExpandAll ? section.groups.map((group) => group.title) : undefined}
                    >
                      {section.groups.map((group) => (
                        <AccordionItem key={group.title} value={group.title}>
                          <AccordionTrigger className="hover:no-underline">
                            <span className="text-sm font-semibold tracking-[0.20em] uppercase text-salon-brown/85 font-sans">
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
                                  bookingUrl={item.bookingUrl}
                                  anchorId={getServiceAnchorId(section.id, group.groupIndex, itemIndex)}
                                  defaultOpen={autoExpandAll}
                                />
                              ))}
                            </div>
                            {group.bookingEmbedUrl ? (
                              <div className="mt-8">
                                <BookingMenuOverlayCta
                                  bookingEmbedUrl={group.bookingEmbedUrl}
                                  bookingEmbedTitle={group.bookingEmbedTitle}
                                />
                              </div>
                            ) : null}
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
            {footerCallSchedule ? (
              <Link
                href={`tel:${footerCallSchedule.tel}`}
                className="inline-flex w-full max-w-xs sm:w-auto sm:min-w-[220px] flex-col items-center justify-center gap-1 bg-salon-raspberry text-white px-8 py-4 rounded-sm text-sm font-semibold tracking-[0.12em] uppercase hover:bg-salon-raspberry/90 transition-colors text-center"
              >
                <span>Call to schedule</span>
                <span className="text-base font-semibold tracking-[0.08em] normal-case tabular-nums">
                  {footerCallSchedule.numberDisplay}
                </span>
              </Link>
            ) : (
              <Link
                href="https://booking.mangomint.com/kossofsalonspa"
                className="inline-flex w-full max-w-xs sm:w-auto sm:min-w-[220px] items-center justify-center whitespace-nowrap bg-salon-raspberry text-white px-8 py-3.5 rounded-sm text-sm font-semibold tracking-[0.12em] uppercase hover:bg-salon-raspberry/90 transition-colors"
              >
                Book Now
              </Link>
            )}
          </div>
        </section>
      </article>

      <ServiceDetailModal item={modalItem} open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}