import Image from "next/image"
import { Metadata } from "next"

// SEO Metadata Export
export const metadata: Metadata = {
  title: "Hair Salon Services & Pricing | Haircuts, Color, Treatments",
  description: "Professional salon services including women's and men's haircuts from $45, balayage from $160, keratin treatments from $55. Expert stylists specializing in color, highlights, and scalp treatments.",
  keywords: "hair salon services, haircut prices, balayage, hair color, keratin treatment, scalp treatment, women's haircut, men's haircut, hair highlights, ombre hair",
  openGraph: {
    title: "Professional Hair Salon Services & Pricing",
    description: "Expert haircuts, color services, and treatments. Women's cuts from $65, balayage from $160, luxury treatments from $55.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Professional hair salon services"
      }
    ]
  }
}

interface ServiceItemProps {
  name: string
  price: string
  description?: string
}

function ServiceItem({ name, price, description }: ServiceItemProps) {
  return (
    <div className="mb-6 group" itemScope itemType="https://schema.org/Service">
      <div className="flex items-baseline justify-between gap-4 mb-2">
        <h3 className="text-base font-semibold text-salon-brown uppercase tracking-wider group-hover:text-salon-raspberry transition-colors" itemProp="name">
          {name}
        </h3>
        <div className="flex-grow border-b border-dotted border-salon-brown/20 mx-2"></div>
        <span className="text-base font-medium text-salon-brown" itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="priceCurrency" content="USD" />
          <span itemProp="price">{price}</span>
        </span>
      </div>
      {description && (
        <p className="text-sm text-salon-brown/60 leading-relaxed font-light italic" itemProp="description">
          {description}
        </p>
      )}
    </div>
  )
}

export default function ServicesContent() {
  const haircutServices = [
    { name: "Girls Haircut & Style 10 & Under", price: "from $40" },
    { name: "Boys Haircut & Style 10 & Under", price: "from $35" },
    { name: "Women's Haircut & Style", price: "from $65" },
    { name: "Men's Haircut & Style", price: "from $45" },
    { name: "Blow-Dry Style", price: "from $45" },
    { name: "Hot Tool Add On", price: "from $10" },
    { name: "Braiding", price: "from $30" },
    { name: "Bang Trim", price: "from $10" },
    { name: "Beard Trim & Shaping", price: "from $15" },
    { name: "Neck Trim", price: "from $10" },
    { name: "Special Occasion Hair", price: "from $85" },
    { name: "Updo Hairstyle", price: "from $95" },
    { name: "Half Updo with Curls", price: "from $85" },
  ]

  const colorServices = [
    {
      name: "Single Process Root Touch-Up",
      price: "from $80",
      description: "Professional gray coverage at the roots only, preserving your existing color without processing the ends. Ideal for maintaining your current shade between full color services."
    },
    {
      name: "Single Process Full Color",
      price: "from $95",
      description: "Complete gray coverage from roots to ends with color refreshment throughout. Perfect for changing your base color or achieving all-over coverage and vibrancy."
    },
    {
      name: "Partial Foil Highlight or Lowlight",
      price: "from $120",
      description: "Strategic placement of lighter or darker tones on the top and sides of your hair. Adds brightness around the face or creates depth and dimension without coloring the entire head."
    },
    {
      name: "Full Foil Highlight or Lowlight",
      price: "from $150",
      description: "Comprehensive highlighting or lowlighting throughout your entire head including top, sides, crown, and underneath layers. Creates all-over brightness, depth, and multidimensional color."
    },
    {
      name: "Face Frame Highlight",
      price: "from $60",
      description: "Targeted lightening around your face to brighten and enhance facial features. Creates a soft, sun-kissed glow that illuminates your complexion naturally."
    },
    {
      name: "Root Blending Shadow Root",
      price: "from $60",
      description: "Seamless color technique that softens the transition between natural regrowth and highlighted hair. Creates a natural, blended gradient from roots to ends for a low-maintenance look."
    },
    {
      name: "Partial Balayage or Ombre",
      price: "from $160",
      description: "Hand-painted highlights on select sections, typically around the face and upper layers. Creates a soft, natural gradient from darker roots to lighter ends with a sun-kissed, low-maintenance finish."
    },
    {
      name: "Full Balayage or Ombre",
      price: "from $200",
      description: "Full head hand-painted color technique from roots to ends. Creates a seamless, blended transition from darker roots to lighter ends for an all-over sun-kissed or dramatically brightened appearance."
    },
    {
      name: "Hair Gloss or Toner",
      price: "from $50",
      description: "Color-enhancing treatment that refines tone, adds brilliant shine, and neutralizes unwanted brassy or ashy tones for a vibrant, polished finish."
    },
    {
      name: "Gloss or Toner with Color Service",
      price: "from $30",
      description: "Add-on toning service to perfect your color result. Neutralizes brassiness, enhances shine, and locks in vibrant tones when combined with highlighting or coloring."
    },
    {
      name: "Double Process Bleach & Tone",
      price: "from $125",
      description: "Two-step lightening process using bleach to lift natural pigment, followed by custom toner application to achieve your desired shade and eliminate unwanted tones for even, customized color."
    },
    {
      name: "Men's Gray Blending",
      price: "from $50",
      description: "Subtle gray coverage technique that blends gray hair with your natural color for a natural, distinguished look. Low-maintenance solution for modern men."
    },
    {
      name: "Beard Color & Gray Coverage",
      price: "from $40",
      description: "Professional beard coloring service that blends or fully covers gray hair in facial hair to achieve a natural, even tone that complements your hair color."
    },
    {
      name: "Specialty Color & Corrective Color",
      price: "pricing based on consultation",
      description: "Custom color solutions for complex needs including color correction, vivid fashion colors, and specialty techniques. Pricing determined during personalized consultation."
    },
  ]

  const treatmentServices = [
    {
      name: "Milbon Moisture Replenishing Treatment",
      price: "from $55",
      description: "Luxurious 5-step moisture ritual that replenishes hydration from inside out, reviving dry, porous, or color-treated hair. Seals in moisture and boosts shine for up to 5 weeks. Includes take-home weekly booster."
    },
    {
      name: "Milbon Smooth Deep Conditioning Treatment",
      price: "from $55",
      description: "Luxurious 3-step smoothing ritual that infuses moisture and smooths hair structure. Ideal for fine to coarse hair, leaving hair soft, silky, and frizz-free for up to 5 weeks. Includes take-home booster."
    },
    {
      name: "Milbon Repair Treatment",
      price: "from $55",
      description: "Luxurious 4-step reconstructive ritual for severely damaged or over-processed hair. Rebuilds internal structure and restores shine. Includes take-home booster for smooth, resilient hair lasting up to 5 weeks."
    },
    {
      name: "Milbon Reawaken Renewal Ritual",
      price: "from $55",
      description: "Luxurious 4-step deep conditioning treatment for aging hair. Replenishes hydration, restores shine, smooths hair structure, and locks in lasting manageability. Includes take-home weekly booster."
    },
    {
      name: "Moroccanoil Moisture Treatment",
      price: "from $25",
      description: "Indulgent conditioning treatment infused with argan oil and nourishing antioxidants. Deeply hydrates, restores softness, smoothness, and shine while improving manageability. Perfect for dry, color-treated, or damaged hair."
    },
    {
      name: "Milbon Scalp Detox Ritual",
      price: "from $40",
      description: "Detoxifying head spa treatment that deeply cleanses, exfoliates, and hydrates the scalp to relieve buildup and irritation. Finished with luxurious scalp massage and aromatherapy for total relaxation and healthier hair growth."
    },
    {
      name: "Moroccanoil Scalp Treatment",
      price: "from $40",
      description: "Revitalizing pre-shampoo scalp treatment infused with antioxidant-rich argan oil. Deeply nourishes and soothes while promoting a healthier scalp environment. Targets dryness, flakiness, or excess oil, leaving scalp purified and hair soft and shiny."
    },
    {
      name: "Keratin Vanilla Bean Treatment",
      price: "from $20",
      description: "Aromatic keratin and vanilla bean conditioning treatment that restores softness, strength, and shine. Deeply hydrates dry or chemically treated hair while replenishing essential proteins for a silky, frizz-free finish with warm vanilla aroma."
    },
  ]

  // JSON-LD Structured Data for AI and Search Engines
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Hair Salon Services",
    "description": "Professional hair salon services including haircuts, color treatments, and hair care treatments",
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "Haircut Services",
        "description": "Professional haircuts for women, men, and children including styling, blow-dry, and specialty cuts",
        "provider": {
          "@type": "HairSalon",
          "name": "Your Salon Name"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "10",
          "highPrice": "95",
          "offerCount": haircutServices.length
        }
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "Hair Color Services",
        "description": "Expert hair coloring including highlights, balayage, ombre, single process, and color correction",
        "provider": {
          "@type": "HairSalon",
          "name": "Your Salon Name"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "30",
          "highPrice": "200",
          "offerCount": colorServices.length
        }
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "Hair & Scalp Treatments",
        "description": "Luxury hair treatments including Milbon moisture treatments, Moroccanoil treatments, keratin treatments, and scalp detox rituals",
        "provider": {
          "@type": "HairSalon",
          "name": "Your Salon Name"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "20",
          "highPrice": "55",
          "offerCount": treatmentServices.length
        }
      }
    ]
  }

  return (
    <>
      {/* JSON-LD Structured Data for AI Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article className="w-full bg-white" itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Hair Salon Services & Pricing" />
        <meta itemProp="description" content="Professional hair salon services including haircuts, color, highlights, balayage, and luxury treatments" />

        {/* Section 1: Haircuts - Text left, Image right */}
        <section className="w-full flex flex-col lg:flex-row" aria-labelledby="haircuts-heading">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 py-20 lg:py-32 px-8 lg:px-20 flex items-center order-2 lg:order-1 bg-[#ede7e4]/20">
            <div className="w-full max-w-xl mx-auto">
              <div className="mb-12">
                <h2 
                  id="haircuts-heading"
                  className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-widest text-salon-brown" 
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Haircuts
                </h2>
                <div className="w-20 h-1 bg-salon-raspberry"></div>
              </div>
              <div itemScope itemType="https://schema.org/ItemList">
                {haircutServices.map((service, index) => (
                  <ServiceItem key={index} {...service} />
                ))}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 h-[60vh] lg:h-auto overflow-hidden order-1 lg:order-2">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&h=1200&fit=crop&auto=format&q=85"
                alt="Modern hair salon interior with styling stations"
                fill
                className="object-cover object-center"
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Color - Image left, Text right */}
        <section className="w-full flex flex-col lg:flex-row" aria-labelledby="color-heading">
          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 h-[60vh] lg:h-auto overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&h=1200&fit=crop&auto=format&q=85"
                alt="Professional hair color application and foiling technique"
                fill
                className="object-cover object-center"
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 py-20 lg:py-32 px-8 lg:px-20 flex items-center bg-white">
            <div className="w-full max-w-xl mx-auto">
              <div className="mb-12">
                <h2 
                  id="color-heading"
                  className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-widest text-salon-brown" 
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Color
                </h2>
                <div className="w-20 h-1 bg-salon-raspberry"></div>
              </div>
              <div itemScope itemType="https://schema.org/ItemList">
                {colorServices.map((service, index) => (
                  <ServiceItem key={index} {...service} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Treatments - Text left, Image right */}
        <section className="w-full flex flex-col lg:flex-row" aria-labelledby="treatments-heading">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 py-20 lg:py-32 px-8 lg:px-20 flex items-center order-2 lg:order-1 bg-[#cad7de]/20">
            <div className="w-full max-w-xl mx-auto">
              <div className="mb-12">
                <h2 
                  id="treatments-heading"
                  className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-widest text-salon-brown" 
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Treatments
                </h2>
                <div className="w-20 h-1 bg-salon-raspberry"></div>
              </div>
              <div itemScope itemType="https://schema.org/ItemList">
                {treatmentServices.map((service, index) => (
                  <ServiceItem key={index} {...service} />
                ))}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 h-[60vh] lg:h-auto overflow-hidden order-1 lg:order-2">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=1920&h=1200&fit=crop&auto=format&q=85"
                alt="Luxury hair treatment application at professional salon"
                fill
                className="object-cover object-center"
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
      </article>
    </>
  )
}