import { ServicesSection } from "./services-data"
import { cloudinaryImage } from "@/lib/cloudinary"

const SALON_HAIR_BASE_SECTION: ServicesSection = {
  id: "hair",
  title: "Salon Services",
  intro:
    "Haircuts, styling, color, treatments, and retexturizing services from the final service menu.",
  textLeftOnDesktop: true,
  textPanelBgClassName: "bg-[#ede7e4]/20",
  image: {
    src: cloudinaryImage("HAIRCUT_zic5ay"),
    alt: "Haircut styling at Kossof Salon Spa",
  },
  groups: [
      {
        title: "Haircuts",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=13",
        bookingEmbedTitle: "Kossof Salon Spa full Mangomint booking menu",
        items: [
          {
            name: "Consultation",
            duration: "15 min",
            price: "",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=181",
            description:
              "A one-on-one consultation designed to create a thoughtful and personalized hair experience. Your stylist will assess your hair's texture, density, condition, and history while discussing your lifestyle, styling routine, and long-term goals. This intentional session allows us to create a tailored plan for cutting, styling, or treatment services - ensuring seamless executions and beautiful results.",
          },
          {
            name: "Curly Hair Specialty Haircut",
            price: "$140.00",
            duration: "1 hr 30 min",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=180",
            description:
              "This luxury curly haircut is expertly crafted by Joanna, a certified curly hair stylist trained in Rezo Cut, Ouidad Cut, and Mizani AirCut techniques. Each cut is tailored to enhance curl definition, minimize frizz, and shape curls for long-lasting balance, movement, and health. Pricing based on consultation.",
          },
          {
            name: "Girls Haircut & Style (10 & Under)",
            price: "from $40",
            duration: "30 min",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=21",
            description:
              "A luxury service for girls 10 and under, featuring a gentle shampoo, precision haircut, and expert styling for a polished finish.",
          },{
            name: "Women's Haircut & Blowdry",
            price: "from $65",
            duration: "30 min",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=23",
            description:
              "A luxury haircut and style for guests 11 and up, featuring expert precision cutting, customized shaping, and professional styling for a polished, sophisticated finish.",
          },
          {
            name: "Women's Haircut Only",
            price: "from $55",
            duration: "30 min",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=24",
            description:
              "A luxury haircut for guests ages 11 and up, featuring expert precision cutting and customized shaping to enhance your natural beauty with a polished, refined look.",
          },
          {
            name: "Bang Trim",
            price: "$10",
            duration: "15 min",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=26",
            description:
              "A quick, precise trimming service designed to maintain the perfect shape, length, and style of your fringe. It also includes refreshing face-framing layers to keep your look balanced and polished.",
          },
          {
            name: "Boys Haircut (10 & Under)",
            price: "from $35",
            duration: "30 min",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=22",
            description:
              "A gentle shampoo and precision haircut designed for boys 10 and under, finished with light styling for a clean polished look.",
          },
          {
            name: "Men's Haircut",
            price: "from $40",
            duration: "30 min",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=25",
            description:
              "A luxury shampoo and precision haircut tailored to your style, finished with expert styling.",
          },
          {
            name: "Beard Trim & Shaping",
            price: "$15",
            duration: "30 min",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=27",
            description:
              "A tailored trim and precise shaping to refine your beard and enhance your natural features.",
          },
          {
            name: "Neck Trim",
            price: "$10",
            duration: "15 min",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=28",
            description:
              "A refined finishing service focused on precise cleanup and contouring of the neckline. This luxury touch creates a crisp, polished appearance, enhancing overall balance while maintaining a clean, well-groomed look.",
          },
          
        ],
      },
      {
        title: "Styling",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=16",
        bookingEmbedTitle: "Kossof Salon Spa styling Mangomint booking menu",
        note: "",
        items: [
          {
            name: "Woman's Blowout Styling",
            price: "from $45",
            duration: "30 min",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=99",
            description:
              "A luxury service begins with a relaxing shampoo, followed by blow-dry and styling for beautifully finished hair.",
          },
          {
            name: "Hot Tool Add-On",
            price: "$10",
            duration: "15 min",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=30",
            description:
              "Enhance your blow-dry with professional hot tool styling for added volume, curl or a sleek finish.",
          },
          {
            name: "Downstyle",
            price: "from $95",
            duration: "1 hr",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=168",
            description:
              "A luxury hair styling service designed to enhance natural texture and movement. Expertly crafted for a polished, elegant, and effortlessly refined look, perfect for any occasion. *Hair must be clean and dry for formal styling*",
          },
          {
            name: "Updo",
            price: "from $95",
            duration: "1 hr",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=32",
            description:
              "A luxury styling service featuring expertly crafted updos tailored for elegance and sophistication. Perfect for special occasions, each style is designed with precision to ensure a polished, long-lasting, and beautifully finished look. *Hair must be clean and dry for formal styling*",
          },
          {
            name: "Braiding",
            price: "from $30",
            duration: "30 min",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=31",
            description:
              "Luxurious braiding service is designed to create beautifully crafted, polished styles. Expertly styled for lasting wear, each braid enhances texture, shape, and elegance.",
          },
          {
            name: "Wigs & Hairpieces Consultation",
            price: "Pricing based on consultation",
            duration: "30 min",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=186",
            description:
              "A private, personalized consultation to discuss wig or hairpiece options, fit, customization, and care - designed to achieve a natural, seamless result. *Pricing based on consultation*",
          },
        ]
      },
      {
        title: "Color",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=8",
        bookingEmbedTitle: "Kossof Salon Spa color Mangomint booking menu",
        items: [
          {
            name: "Color Consultation",
            price: "Complimentary",
            duration: "15 min",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=182",
            description:
              "A one-on-one consultation with an expert colorist to discuss your hair goals, assess hair health, and creates a customized color plan designed specifically for you.",
          },
          {
            name: "Single Process",
            price: "from $80",
            duration: "30 min",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=34",
            description:
              "Intended to cover gray hair at the roots only, without being pulled through the ends.",
          },
          {
            name: "Single Process Thru the Ends",
            price: "from $95",
            duration: "30 min",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=35",
            description:
              "Formulated to cover gray hair throughout and refresh or change the overall base color.",
          },
          {
            name: "Woman's Grey Blending",
            price: "$80.00",
            duration: "30 min",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=47",
            description:
              "A refined, natural approach to softening gray. Our colorist expertly blends custom tones to add dimension and subtle coverage, creating a seamless, low-maintenance finish that enhances your look with understated elegance.",
          },
          {
            name: "Men's Grey Blending",
            price: "$50.00",
            duration: "30 min",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=45",
            description:
              "Sortens gray hair by subtly blending it with the natural color for a natural, low-maintenance look.",
          },
          {
            name: "Partial Highlight",
            price: "$120.00",
            duration: "1 hr 30 min",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=36",
            description:
              "Lightens or darkens select sections - typically the crown and sides - to add brightness or depth and dimension without coloring the entire head.",
          },
          {
            name: "Full Highlight",
            price: "$150.00",
            duration: "1 hr 15 min",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=37",
            description:
              "Lightens or darkens the entire head - including the crown, sides, and underneath to create all-over brightness, depth and dimension.",
          },
          {
            name: "Face Frame Highlight",
            price: "$60.00",
            duration: "30 min",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=38",
            description:
              "Focuses on lightening the strands around the face to brighten and accentuate facial features, creating a soft, sun-kissed glow.",
          },
          {
            name: "Gloss / Toner",
            price: "$50.00",
            duration: "30 min",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=42",
            description:
              "Refines color and enhances tone adding shine for a vibrant finish.",
          },

          {
            name: "Gloss / Toner with Color Service",
            price: "$30.00",
            duration: "30 min",
            bookingUrl: "https://booking.mangomint.com/kossofsalonspa?serviceId=43",
            description:
              "Refines color and enhances tone adding shien for a vibrant finish.",
          },
        ],
      },
      {
        title: "Hair & Scalp Treatments",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=9",
        bookingEmbedTitle: "Kossof Salon Spa hair and scalp treatments Mangomint booking menu",
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
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=10",
        bookingEmbedTitle: "Kossof Salon Spa retexturizing services Mangomint booking menu",
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

const SALON_HAIR_SECTION_META: Record<string, { id: string; intro: string; image?: { src: string; alt: string } }> = {
  "Haircuts": {
    id: "haircuts-styling",
    intro: "Precision cuts, styling, and finishing services tailored to your look.",
  },
  "Styling": {
    id: "styling",
    intro: "Blowouts, updos, and finishing touches for every occasion.",
    image: {
      src: cloudinaryImage("HAIRSTYLE_wir8yz"),
      alt: "Hairstyling at Kossof Salon Spa",
    },
  },
  "Special Occasion or Formal Hair Styling": {
    id: "special-occasion-hair",
    intro: "Event-ready updos and downstyles crafted for elegant, long-lasting wear.",
  },
  "Color": {
    id: "hair-color",
    intro: "Custom color, highlights, balayage, and corrective options from our color team.",
    image: {
      src: cloudinaryImage("COLOR_rnziuz"),
      alt: "Hair color services at Kossof Salon Spa",
    },
  },
  "Hair & Scalp Treatments": {
    id: "hair-scalp-treatments",
    intro: "Nourishing and restorative treatments for healthier hair and scalp balance.",
    image: {
      src: cloudinaryImage("SCALP_pjtzku"),
      alt: "Hair and scalp treatments at Kossof Salon Spa",
    },
  },
  "Retexturizing Services": {
    id: "retexturizing-services",
    intro: "Smoothing, keratin, relaxer, and texture services for manageability and shine.",
    image: {
      src: cloudinaryImage("RETEXTURIZING_zfmr01"),
      alt: "Retexturizing services at Kossof Salon Spa",
    },
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
    image: meta?.image ?? SALON_HAIR_BASE_SECTION.image,
    groups: [group],
  }
})

const SALON_NAIL_BASE_SECTION: ServicesSection = {
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
      bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=14",
      bookingEmbedTitle: "Kossof Salon Spa manicure Mangomint booking menu",
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
      bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=15",
      bookingEmbedTitle: "Kossof Salon Spa pedicure Mangomint booking menu",
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
}

const SALON_NAIL_SECTION_META: Record<string, { id: string; intro: string; image?: { src: string; alt: string } }> = {
  Manicures: {
    id: "manicures",
    intro: "Luxury manicures from the final menu.",
  },
  Pedicures: {
    id: "pedicures",
    intro: "Luxury pedicures from the final menu.",
    image: {
      src: cloudinaryImage("PEDICURE_nlvtoz"),
      alt: "Pedicure services at Kossof Salon Spa",
    },
  },
}

const SALON_NAIL_SPLIT_SECTIONS: ServicesSection[] = SALON_NAIL_BASE_SECTION.groups.map((group, index) => {
  const meta = SALON_NAIL_SECTION_META[group.title]

  return {
    id: meta?.id ?? `nail-section-${index + 1}`,
    title: group.title,
    intro: meta?.intro,
    textLeftOnDesktop: index % 2 === 0,
    textPanelBgClassName: index % 2 === 0 ? "bg-white" : "bg-[#ede7e4]/20",
    image: meta?.image ?? SALON_NAIL_BASE_SECTION.image,
    groups: [group],
  }
})

const withDefaultDuration = (sections: ServicesSection[]): ServicesSection[] =>
  sections.map((section) => ({
    ...section,
    groups: section.groups.map((group) => ({
      ...group,
      items: group.items.map((item) => ({
        ...item,
        duration: item.duration ?? "",
      })),
    })),
  }))

export const SALON_SERVICES_SECTIONS: ServicesSection[] = withDefaultDuration([
  ...SALON_HAIR_SPLIT_SECTIONS,
  ...SALON_NAIL_SPLIT_SECTIONS,
  {
    id: "beauty",
    title: "Makeup Artistry",
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
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=22",
        bookingEmbedTitle: "Kossof Salon Spa makeup artistry Mangomint booking menu",
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
  {
    id: "permanent-make-up",
    title: "Permanent Make Up",
    intro: "Permanent makeup services from the final menu.",
    textLeftOnDesktop: false,
    textPanelBgClassName: "bg-white",
    image: {
      src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&h=1200&fit=crop&auto=format&q=85",
      alt: "Makeup artistry and beauty tools",
    },
    groups: [
      {
        title: "Permanent Make Up",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=27",
        bookingEmbedTitle: "Kossof Salon Spa permanent make up Mangomint booking menu",
        items: [],
      },
    ],
  },
])
