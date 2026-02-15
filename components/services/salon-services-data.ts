import { ServicesSection } from "./services-data"

const SALON_HAIR_BASE_SECTION: ServicesSection = {
  id: "hair",
  title: "Salon Services",
  intro:
    "Haircuts, styling, color, treatments, and retexturizing services from the final service menu.",
  textLeftOnDesktop: true,
  textPanelBgClassName: "bg-[#ede7e4]/20",
  image: {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&h=1200&fit=crop&auto=format&q=85",
    alt: "Modern hair salon interior with styling stations",
  },
  groups: [
      {
        title: "Haircuts & Styling",
        items: [
          {
            name: "Consultation",
            price: "Pricing based on consultation",
            description:
              "A one-on-one consultation designed to create a thoughtful and personalized hair experience. Your stylist will assess your hair texture, density, condition, and history while discussing your lifestyle, styling routine, and long-term goals.",
          },
          {
            name: "Girls Haircut & Style (10 & Under)",
            price: "from $40",
            description:
              "A luxury service for girls 10 and under, featuring a gentle shampoo, precision haircut, and expert styling for a polished finish.",
          },
          {
            name: "Boys Haircut (10 & Under)",
            price: "from $35",
            description:
              "A gentle shampoo and precision haircut for boys 10 and under, finished with light styling.",
          },
          {
            name: "Women's Haircut & Style",
            price: "from $65",
            description:
              "A luxury haircut and style for guests 11 and up with customized shaping and professional styling.",
          },
          {
            name: "Women's Haircut Only",
            price: "from $55",
            description:
              "A precision haircut for guests 11 and up with customized shaping and a polished result.",
          },
          {
            name: "Men's Haircut & Style",
            price: "from $40",
            description:
              "A luxury shampoo and precision haircut tailored to your style, finished with expert styling.",
          },
          {
            name: "Blow-Dry Style",
            price: "from $45",
            description:
              "A relaxing shampoo followed by blow-dry and styling for beautifully finished hair.",
          },
          {
            name: "Hot Tool Add-On",
            price: "$10",
            description:
              "Enhance your blow-dry with professional hot tool styling for added volume, curl, or a sleek finish.",
          },
          {
            name: "Braiding",
            price: "from $30",
            description:
              "Beautifully crafted, polished braiding designed for texture, shape, and elegant wear.",
          },
          {
            name: "Bang Trim",
            price: "$10",
            description:
              "A quick fringe refresh to maintain shape, length, and face-framing balance.",
          },
          {
            name: "Beard Trim & Shaping",
            price: "$15",
            description:
              "A tailored beard trim and precise shaping to refine your look.",
          },
          {
            name: "Neck Trim",
            price: "$10",
            description:
              "A detailed neckline cleanup and contouring service for a crisp, polished finish.",
          },
          {
            name: "Curly Hair Certified Haircut/Style with Joanna",
            price: "from $140",
            description:
              "Certified curly haircut service using Rezo Cut, Ouidad Cut, and Mizani AirCut techniques. Final pricing based on consultation.",
          },
          {
            name: "Wigs & Hairpieces Consultation",
            price: "Pricing based on consultation",
            description:
              "Personalized consultation to discuss wig or hairpiece options, fit, customization, and care for a seamless result.",
          },
        ],
      },
      {
        title: "Special Occasion & Formal Hair Styling",
        note: "Hair must be clean and dry for formal styling.",
        items: [
          {
            name: "Updo",
            price: "from $95",
            description:
              "Expertly crafted updo styling tailored for elegance and long-lasting hold.",
          },
          {
            name: "Downstyle",
            price: "from $95",
            description:
              "A polished downstyle that enhances natural texture and movement.",
          },
        ],
      },
      {
        title: "Hair Color",
        items: [
          {
            name: "Single Process",
            price: "from $80",
            description:
              "Covers gray hair at the roots only, without pulling through the ends.",
          },
          {
            name: "Single Process Through the Ends",
            price: "from $95",
            description:
              "Covers gray throughout and refreshes or changes the overall base color.",
          },
          {
            name: "Root Blending",
            price: "from $60",
            description:
              "Softens the regrowth line for a seamless transition from roots to ends.",
          },
          {
            name: "Women's Grey Blending",
            price: "from $80",
            description:
              "Custom grey blending that adds soft coverage and dimension with a low-maintenance finish.",
          },
          {
            name: "Men's Grey Blending",
            price: "from $50",
            description:
              "Subtly blends gray with natural color for a natural, low-maintenance look.",
          },
          {
            name: "Beard Color",
            price: "from $40",
            description:
              "Blends or fully covers gray in the beard to create an even tone.",
          },
          {
            name: "Partial Foil",
            price: "from $120",
            description:
              "Adds brightness or depth to selected sections, typically crown and sides.",
          },
          {
            name: "Full Foil",
            price: "from $150",
            description:
              "All-over foil service for full-head brightness, depth, and dimension.",
          },
          {
            name: "Face Frame Highlight",
            price: "from $60",
            description:
              "Lightens face-framing strands to brighten and accentuate features.",
          },
          {
            name: "Partial Balayage / Ombre",
            price: "from $160",
            description:
              "Hand-painted lightening around the face and upper layers for a soft gradient.",
          },
          {
            name: "Full Balayage / Ombre",
            price: "from $200",
            description:
              "Full-head hand-painted lightening for a seamless darker-to-lighter blend.",
          },
          {
            name: "Gloss / Toner",
            price: "from $50",
            description:
              "Refines color and tone while adding shine for a vibrant finish.",
          },
          {
            name: "Gloss / Toner with Color Service",
            price: "from $30",
            description:
              "Add-on gloss or toner to refine tone and boost shine.",
          },
          {
            name: "Double Process (Bleach & Tone)",
            price: "from $125",
            description:
              "Bleach and tone service to lighten and refine to your target shade.",
          },
          {
            name: "Specialty / Corrective Color",
            price: "Pricing based on consultation",
            description:
              "Specialty and corrective color services are priced after consultation.",
          },
        ],
      },
      {
        title: "Hair & Scalp Treatments",
        items: [
          {
            name: "Pure Balance Clarifying Treatment",
            price: "$15",
            description:
              "Detoxifies buildup, hard water minerals, and impurities while restoring clarity and shine.",
          },
          {
            name: "Milbon Moisture Replenishing Treatment",
            price: "$75",
            description:
              "A 5-step ritual that replenishes moisture and includes a take-home weekly booster.",
          },
          {
            name: "Milbon Smooth Treatment",
            price: "$65",
            description:
              "A 3-step smoothing ritual for soft, silky, frizz-free hair with take-home booster support.",
          },
          {
            name: "Milbon Repair Treatment",
            price: "$85",
            description:
              "A 4-step reconstructive ritual for severely damaged hair with take-home booster.",
          },
          {
            name: "Milbon Scalp Ritual",
            price: "$50",
            description:
              "A detoxifying scalp ritual with exfoliation, hydration, massage, and aromatherapy.",
          },
          {
            name: "Moroccanoil Moisture Treatment",
            price: "$25",
            description:
              "Argan oil-infused moisture treatment that restores softness, shine, and manageability.",
          },
          {
            name: "Moroccanoil Scalp Treatment",
            price: "$40",
            description:
              "Customized pre-shampoo scalp treatment that nourishes, rebalances, and refreshes.",
          },
          {
            name: "Keratin Vanilla Bean Treatment",
            price: "$20",
            description:
              "Keratin-infused conditioning treatment for softness, strength, and frizz control.",
          },
          {
            name: "Brazilian Blowout Split End Corrector",
            price: "$25",
            description:
              "Seals and protects fragile ends while improving smoothness and resilience.",
          },
          {
            name: "Rene Furterer Scalp Treatment",
            price: "$35",
            description:
              "Energizing pre-shampoo scalp treatment that boosts circulation and scalp balance.",
          },
          {
            name: "Keune Vital Nutrition Mask",
            price: "$25",
            description:
              "Restores dry, damaged hair with moisture and minerals for improved elasticity.",
          },
          {
            name: "Keune Keratin Smooth Mask",
            price: "$25",
            description:
              "Keratin-rich mask that smooths frizz and seals the cuticle for sleek shine.",
          },
          {
            name: "Keune Color Brillianz Mask",
            price: "$25",
            description:
              "Color-preserving hydration mask that enhances vibrancy and protects from UV fade.",
          },
          {
            name: "Keune Satin Oil Mask",
            price: "$25",
            description:
              "Lightweight oil-infused hydration for softness, smoothness, and reflective shine.",
          },
          {
            name: "Keune Blonde Savior Mask",
            price: "$25",
            description:
              "Bond-repairing mask for compromised blonde hair to reduce breakage and add brightness.",
          },
          {
            name: "Keune Bond Builder System",
            price: "$20",
            description:
              "Professional bond-strengthening system that protects and repairs internal hair structure.",
          },
        ],
      },
      {
        title: "Retexturizing Services",
        items: [
          {
            name: "Keratin Complex Blowout Treatment",
            price: "from $145",
            description:
              "Express keratin service that smooths frizz, boosts shine, and reduces styling time.",
          },
          {
            name: "Keratin Complex Smoothing Treatment",
            price: "from $395",
            description:
              "Professional smoothing treatment for long-lasting frizz control and enhanced shine.",
          },
          {
            name: "Brazilian Express Treatment",
            price: "from $145",
            description:
              "Express smoothing formula for glossy, manageable hair with no downtime.",
          },
          {
            name: "Brazilian Smoothing Treatment",
            price: "from $395",
            description:
              "Transformative smoothing system for silky, humidity-resistant hair.",
          },
          {
            name: "Perm / Body Wave",
            price: "from $150",
            description:
              "Custom texture service from loose waves to fuller curls while maintaining softness.",
          },
          {
            name: "Virgin Relaxer",
            price: "from $200",
            description:
              "First-time smoothing service for sleek, frizz-free hair with conditioning support.",
          },
          {
            name: "Retouch Relaxer",
            price: "from $150",
            description:
              "Precision relaxer retouch for new growth while preserving previously relaxed hair.",
          },
        ],
      },
  ],
}

const SALON_HAIR_SECTION_META: Record<string, { id: string; intro: string }> = {
  "Haircuts & Styling": {
    id: "haircuts-styling",
    intro: "Precision cuts, styling, and finishing services tailored to your look.",
  },
  "Special Occasion or Formal Hair Styling": {
    id: "special-occasion-hair",
    intro: "Event-ready updos and downstyles crafted for elegant, long-lasting wear.",
  },
  "Hair Color": {
    id: "hair-color",
    intro: "Custom color, highlights, balayage, and corrective options from our color team.",
  },
  "Hair & Scalp Treatments": {
    id: "hair-scalp-treatments",
    intro: "Nourishing and restorative treatments for healthier hair and scalp balance.",
  },
  "Retexturizing Services": {
    id: "retexturizing-services",
    intro: "Smoothing, keratin, relaxer, and texture services for manageability and shine.",
  },
}

const SALON_HAIR_SPLIT_SECTIONS: ServicesSection[] = SALON_HAIR_BASE_SECTION.groups.map((group, index) => {
  const meta = SALON_HAIR_SECTION_META[group.title]

  return {
    id: meta?.id ?? `hair-section-${index + 1}`,
    title: group.title,
    intro: meta?.intro,
    textLeftOnDesktop: index % 2 === 0,
    textPanelBgClassName: index % 2 === 0 ? "bg-[#ede7e4]/20" : "bg-white",
    image: SALON_HAIR_BASE_SECTION.image,
    groups: [group],
  }
})

export const SALON_SERVICES_SECTIONS: ServicesSection[] = [
  ...SALON_HAIR_SPLIT_SECTIONS,
  {
    id: "nails",
    title: "Nail Services",
    intro: "Luxury manicures and pedicures from the final menu.",
    textLeftOnDesktop: false,
    textPanelBgClassName: "bg-white",
    image: {
      src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=1920&h=1200&fit=crop&auto=format&q=85",
      alt: "Nail care and manicure tools on a clean workstation",
    },
    groups: [
      {
        title: "Manicures",
        items: [
          {
            name: "Classic Manicure",
            price: "$28",
            description:
              "A luxury hand treatment featuring nail shaping, cuticle care, and a relaxing hand massage, finished with your choice of polish for perfectly polished, healthy-looking nails.",
          },
          {
            name: "French Manicure",
            price: "$33",
            description:
              "A luxury hand treatment featuring nail shaping, cuticle care, and a soothing hand massage, finished with a timeless French tip for a polished, elegant, and sophisticated look.",
          },
          {
            name: "Men's Manicure",
            price: "$28",
            description:
              "A luxury grooming service for hands, including nail shaping, cuticle care, and a revitalizing hand massage, leaving nails clean, healthy, and polished with a natural, refined finish.",
          },
          {
            name: "Structured Gel Manicure",
            price: "$75",
            description:
              "A luxury gel manicure that includes a strengthening builder gel layer to reinforce the natural nail. This service adds support, durability, and a smooth, flawless finish, helping prevent breakage while extending the life of your manicure.",
          },
          {
            name: "Spa Manicure",
            price: "$42",
            description:
              "A luxurious hand treatment features a soothing soak, nail shaping, cuticle care, and gentle exfoliation. Includes a nourishing hand mask and a relaxing hand and arm massage, finished with your choice of polish for soft, hydrated, and perfectly polished hands.",
          },
          {
            name: "Farmhouse Fresh Honey Nectar Whip Manicure",
            price: "$42",
            description:
              "A luxurious, nourishing manicure infused with soothing and hydrating properties of honey nectar. This indulgent treatment includes nail shaping, cuticle care, and a rich hand massage with whipped honey-scented cream, leaving hands soft, revitalized, and beautifully polished.",
          },
          {
            name: "No Chip Manicure",
            price: "$54",
            description:
              "A luxury manicure featuring nail shaping, cuticle care, and a relaxing hand massage, finished with long-lasting, chip-resistant polish for beautifully polished nails that stay flawless.",
          },
          {
            name: "No Chip French Manicure",
            price: "$59",
            description:
              "A luxury manicure featuring nail shaping, cuticle care, and a soothing hand massage, finished with a long-lasting, chip-resistant French tip for a polished elegant, and enduring look.",
          },
          {
            name: "No Chip Removal",
            price: "$10",
            description: "Removal fee applies if prior no chip was not performed in house.",
          },
          {
            name: "Polish Change Hands",
            price: "$20",
            description:
              "A quick luxury service to refresh your nails with a flawless new polish application, leaving hands polished, vibrant, and perfectly finished.",
          },
          {
            name: "Nail Repair",
            price: "$10",
            description:
              "A luxury service to restore and strengthen a damaged or broken nail, expertly repaired for a seamless, polished, and natural looking finish.",
          },
        ],
      },
      {
        title: "Pedicures",
        items: [
          {
            name: "Classic Pedicure",
            price: "$56",
            description:
              "A luxurious foot treatment featuring a soothing soak, nail shaping, cuticle care, and gentle exfoliation, finished with a relaxing foot and calf massage and your choice of polish for soft, polished, and perfectly pampered feet.",
          },
          {
            name: "French Pedicure",
            price: "$61",
            description:
              "A luxurious foot treatment featuring a soothing soak, nail shaping, cuticle care, and gentle exfoliation, finished with a relaxing foot and calf massage and a timeless French tip for polished, elegant, and beautifully refined feet.",
          },
          {
            name: "Men's Pedicure",
            price: "$56",
            description:
              "A luxury grooming treatment for feet, including a soothing soak, nail shaping, cuticle care, and exfoliation, finished with a revitalizing foot and calf massage for clean, healthy, and well-groomed feet.",
          },
          {
            name: "Spa Pedicure",
            price: "$75",
            description:
              "A luxurious foot treatment features a soothing soak, exfoliation, nail shaping, cuticle care, and a nourishing foot mask, followed by a relaxing foot and calf massage. Finished with your choice of polish, leaving feet soft, hydrated, and perfectly pampered.",
          },
          {
            name: "Farmhouse Fresh Honey Nectar Whip Pedicure",
            price: "$75",
            description:
              "A luxurious and indulgent foot treatment infused with the hydrating and soothing properties of fresh honey nectar. This pampering experience includes a soothing soak, gentle exfoliation, nail shaping, cuticle care, and a rich whipped honey-scented mask, finished with a relaxing foot and calf massage and your choice of polish for soft, nourished, and beautifully polished feet.",
          },
          {
            name: 'Express "Mini" Pedicure',
            price: "$45",
            description:
              "A luxury foot treatment designed for a quick refresh, including a soothing soak, nail shaping, and a light polish application, leaving feet clean, polished, and perfectly refreshed.",
          },
          {
            name: "Polish Change Toes",
            price: "$35",
            description:
              "A quick luxury service to refresh your pedicure with a flawless polish application, leaving feet polished, vibrant, and perfectly finished.",
          },
        ],
      },
    ],
  },
  {
    id: "beauty",
    title: "Makeup Artistry (Non-Wedding)",
    intro: "Professional makeup services for events and special occasions.",
    textLeftOnDesktop: true,
    textPanelBgClassName: "bg-[#ede7e4]/20",
    image: {
      src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&h=1200&fit=crop&auto=format&q=85",
      alt: "Makeup artistry and beauty tools",
    },
    groups: [
      {
        title: "Makeup Artistry",
        items: [
          {
            name: "Full Face Makeup",
            price: "$100",
            description:
              "A luxurious customized makeup application designed to enhance your natural features and create a flawless, radiant look. Includes expertly applied foundation, eye makeup, contouring, blush, and lips, finished with a polished, long-lasting finish perfect for any special occasion.",
          },
          {
            name: "Full Face Makeup with Lashes",
            price: "$120",
            description:
              "A luxury, customized makeup experience that includes full-face application and expertly applies lashes. Enhance your features with flawless foundation, eyeshadow, eyeliner, contouring, blush, and lip color, finishing with beautifully defined, eye-opening lashes for a polished, glamorous look.",
          },
          {
            name: "Eyes Only Makeup",
            price: "$75",
            description:
              "A luxury service focused on enhancing your eyes, including expertly blended eyeshadow, eyeliner, and mascara.",
          },
          {
            name: "Eyes Only Makeup with Lashes",
            price: "$95",
            description:
              "A luxurious service focused on the eyes, featuring expertly blended eyeshadow, eyeliner, and mascara, finished with professional lash application for beautifully defined, glamorous, and polished eyes.",
          },
          {
            name: "Lash Application Only",
            price: "$30",
            description:
              "A luxury service for flawless, professionally applied lashes, enhancing the eyes with added length, volume, and definition for a polished, glamorous look.",
          },
        ],
      },
    ],
  },
]
