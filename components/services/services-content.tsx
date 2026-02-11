import Image from "next/image"
import { ServicesSection } from "@/components/services/services-data"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface ServiceItemProps {
  name: string
  price: string
  description?: string
}

function ServiceRow({ name, price }: Pick<ServiceItemProps, "name" | "price">) {
  return (
    <div className="py-3" itemScope itemType="https://schema.org/Service">
      <div className="flex items-baseline justify-between gap-4">
        <h4
          className="text-[15px] md:text-sm font-semibold text-salon-brown uppercase tracking-[0.14em] font-gotham flex-1 pr-4"
          itemProp="name"
        >
          {name}
        </h4>
        <span
          className="text-[15px] md:text-sm font-semibold text-salon-brown font-gotham"
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <meta itemProp="priceCurrency" content="USD" />
          <span itemProp="price">{price}</span>
        </span>
      </div>
    </div>
  )
}

function ServiceItemAccordion({ name, price, description }: ServiceItemProps) {
  if (!description) {
    return <ServiceRow name={name} price={price} />
  }

  return (
    <Accordion type="multiple">
      <AccordionItem value={name}>
        <AccordionTrigger className="py-3 hover:no-underline">
          <div className="flex w-full items-baseline justify-between gap-4 pr-3">
            <h4 className="text-[15px] md:text-sm font-semibold text-salon-brown uppercase tracking-[0.14em] font-gotham flex-1 pr-4">
              {name}
            </h4>
            <span className="text-[15px] md:text-sm font-semibold text-salon-brown font-gotham whitespace-nowrap">
              {price}
            </span>
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
  /** Name used in structured data, e.g. "Kossof Salon Services" */
  schemaName?: string
  /** Description used in structured data */
  schemaDescription?: string
}

export default function ServicesContent({
  sections,
  schemaName = "Kossof Salon Spa Services",
  schemaDescription = "Full service menu including hair, nails, facials, massage, waxing, lashes & brows, and makeup services.",
}: ServicesContentProps) {
  // JSON-LD Structured Data for AI and Search Engines
  const allItemsCount = sections.reduce((sectionAcc, section) => {
    return (
      sectionAcc +
      section.groups.reduce((groupAcc, group) => groupAcc + group.items.length, 0)
    )
  }, 0)

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
      {/* JSON-LD Structured Data for AI Engines */}
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

        {sections.map((section) => {
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
              {/* Text Section */}
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

                  <Accordion type="multiple" className="w-full">
                    {section.groups.map((group) => (
                      <AccordionItem key={group.title} value={group.title}>
                        <AccordionTrigger className="hover:no-underline">
                          <span className="text-sm font-semibold tracking-[0.20em] uppercase text-salon-brown/85 font-gotham">
                            {group.title}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                          {group.note && (
                            <p className="text-[15px] md:text-sm text-salon-brown/65 font-medium mb-4">
                              {group.note}
                            </p>
                          )}
                          <div itemScope itemType="https://schema.org/ItemList">
                            {group.items.map((service, idx) => (
                              <ServiceItemAccordion
                                key={`${group.title}-${idx}`}
                                name={service.name}
                                price={service.price}
                                description={service.description}
                              />
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              {/* Image Section */}
              <div
                className={`relative w-full lg:w-1/2 overflow-hidden ${imageColOrder}`}
              >
                {/* Soft background fill so expanded accordions don't reveal awkward empty space */}
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

                {/* Foreground image (fixed height, no sticky movement) */}
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
      </article>
    </>
  )
}