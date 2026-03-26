import { ServicesSection } from "./services-data"
import { cloudinaryImage } from "@/lib/cloudinary"

const SPA_BASE_SERVICES_SECTIONS: ServicesSection[] = [
  {
    id: "waxing",
    title: "Waxing",
    intro: "Precision body waxing services for facial, upper-body, and lower-body areas.",
    textLeftOnDesktop: true,
    textPanelBgClassName: "bg-[#cad7de]/20",
    image: {
      src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&h=1200&fit=crop&auto=format&q=85",
      alt: "Spa waxing and skincare setup",
    },
    groups: [
      {
        title: "Body Waxing - Facial & Detail Areas",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=12",
        bookingEmbedTitle: "Kossof Salon Spa face and detail body waxing Mangomint booking menu",
        items: [
          {
            name: "Brow Wax",
            price: "$20",
            description:
              "A precision brow shaping service designed to enhance your natural features. This luxury treatment gently removes unwanted hair while creating clean, balanced arches for a polished, refined finish.",
          },
          {
            name: "Brow Tweeze",
            price: "$22",
            description:
              "A meticulous brow shaping service using precision tweezing to refine and define your natural brow shape. Ideal for sensitive skin, this luxury treatment delivers clean, balanced brows with a polished, natural finish.",
          },
          {
            name: "Unibrow",
            price: "$10",
            description:
              "A precise, gentle service focused on removing unwanted hair between the brows for a clean, refined appearance while maintaining your natural brow shape.",
          },
          {
            name: "Lip",
            price: "$17",
            description:
              "A gentle, precision waxing service to remove unwanted hair from the upper lip, leaving skin smooth, clean, and beautifully refined.",
          },
          {
            name: "Chin",
            price: "$17",
            description:
              "A gentle, precision waxing service to remove unwanted hair from the chin area, leaving skin smooth, clean, and beautifully refined.",
          },
          {
            name: "Side of Face",
            price: "$22",
            description:
              "A gentle, precision waxing service to remove unwanted hair along the sides of the face, creating a smooth, clean, and beautifully refined finish.",
          },
          {
            name: "Nose",
            price: "$20",
            description:
              "A quick, precise grooming service to safely remove unwanted hair from the nose area, leaving a clean, polished, and well-groomed appearance.",
          },
          {
            name: "Ears",
            price: "$17",
            description:
              "A precise grooming service to gently remove unwanted hair from the ears, leaving a clean, polished, and well-groomed appearance.",
          },
          {
            name: "Neck",
            price: "$17",
            description:
              "A gentle, precision waxing service to remove unwanted hair from the neck area, leaving skin smooth, clean, and beautifully refined.",
          },
        ],
      },
      {
        title: "Body Waxing - Upper Body",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=17",
        bookingEmbedTitle: "Kossof Salon Spa upper body waxing Mangomint booking menu",
        items: [
          {
            name: "Half Arm",
            price: "$40",
            description:
              "A luxurious waxing service designed to remove unwanted hair from the lower or upper half of the arm with precision, leaving skin smooth, soft, and beautifully refined.",
          },
          {
            name: "Full Arm",
            price: "$53",
            description:
              "A luxury waxing service that removes unwanted hair from the entire arm with precision, leaving skin smooth, soft, and beautifully polished.",
          },
          {
            name: "Under Arm",
            price: "$22",
            description:
              "A gentle, precision waxing service to remove unwanted hair from the underarm area, leaving skin smooth, clean, and refreshed.",
          },
          {
            name: "Chest",
            price: "$65",
            description:
              "A precision waxing service to remove unwanted hair from the chest area, leaving skin smooth, clean, and beautifully refined.",
          },
          {
            name: "Shoulders",
            price: "$35",
            description:
              "A gentle, precision waxing service to remove unwanted hair from the shoulder area, leaving skin smooth, clean, and beautifully refined.",
          },
          {
            name: "Half Back",
            price: "$45",
            description:
              "A luxurious waxing service targeting the upper or lower half of the back, removing unwanted hair with precision for smooth, soft, and beautifully refined skin.",
          },
          {
            name: "Full Back",
            price: "$65",
            description:
              "A luxury waxing service that removes unwanted hair from the entire back with precision, leaving skin smooth, soft, and perfectly polished.",
          },
          {
            name: "Stomach / Abdominal",
            price: "$25",
            description:
              "A gentle, precision waxing service to remove unwanted hair from the stomach area, leaving skin smooth, soft, and beautifully refined.",
          },
          {
            name: "Fingers",
            price: "$17",
            description:
              "A precise waxing service to remove unwanted hair from the fingers, leaving skin smooth, clean, and perfectly polished.",
          },
        ],
      },
      {
        title: "Body Waxing - Lower Body",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=18",
        bookingEmbedTitle: "Kossof Salon Spa lower body waxing Mangomint booking menu",
        items: [
          {
            name: "Toes",
            price: "$17",
            description:
              "A gentle, precision waxing service to remove unwanted hair from the toes, leaving skin smooth, clean, and beautifully refined.",
          },
          {
            name: "Half Leg",
            price: "$55",
            description:
              "A luxurious waxing service to remove unwanted hair from either the upper or lower half of the leg, leaving skin smooth, soft, and beautifully refined.",
          },
          {
            name: "Full Leg",
            price: "$75",
            description:
              "A luxury waxing service that removes unwanted hair from the entire leg with precision, leaving skin smooth, soft, and perfectly polished.",
          },
          {
            name: "Inner Thigh",
            price: "$25",
            description:
              "A precise and gentle waxing service to remove unwanted hair from the inner thigh area, leaving skin smooth, soft, and beautifully refined.",
          },
          {
            name: "Bikini Line",
            price: "$40",
            description:
              "A luxury waxing service designed to remove unwanted hair along the bikini line with precision, leaving skin smooth, clean, and beautifully refined.",
          },
          {
            name: "French Bikini",
            price: "$55",
            description:
              "A precise and luxurious waxing service that removes hair beyond the standard bikini line for a smooth, polished, and elegant finish.",
          },
          {
            name: "Brazilian Bikini",
            price: "$65",
            description:
              "A luxury, full-service waxing treatment that removes all unwanted hair from the bikini area, leaving skin smooth, clean, and impeccably polished for a refined, long-lasting finish.",
          },
        ],
      },
    ],
  },
  {
    id: "lashes-brows",
    title: "Lashes & Brows",
    intro: "Enhancing lash and brow services for shape, lift, and definition.",
    textLeftOnDesktop: false,
    textPanelBgClassName: "bg-white",
    image: {
      src: cloudinaryImage("UWAXING_dyi8kr"),
      alt: "Eyelash and eyebrow services at Kossof Salon Spa",
    },
    groups: [
      {
        title: "Lashes, Brows & Beauty",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=23",
        bookingEmbedTitle: "Kossof Salon Spa lashes brows and beauty Mangomint booking menu",
        items: [
          { name: "Brow Tint", price: "$22", description: "Enhances fullness and definition." },
          { name: "Lash Tint", price: "$35", description: "Darkens and enhances natural lashes." },
          {
            name: "Lash Lift",
            price: "$70",
            description:
              "A semi-permanent treatment that lifts and curls your natural lashes for a longer, brighter look. Results last 6-8 weeks with no extensions or daily curling needed.",
          },
          {
            name: "Brow Lamination",
            price: "$70",
            description:
              "A smoothing treatment that shapes and sets brow hairs for a fuller, more defined look. Results last 6-8 weeks.",
          },
        ],
      },
    ],
  },
  {
    id: "facials",
    title: "Facials",
    intro: "Core facials, advanced facials, and enhancements for healthy, radiant skin.",
    textLeftOnDesktop: true,
    textPanelBgClassName: "bg-[#cad7de]/20",
    image: {
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&h=1200&fit=crop&auto=format&q=85",
      alt: "Relaxing facial treatment at the spa",
    },
    groups: [
      {
        title: "Facials",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=7",
        bookingEmbedTitle: "Kossof Salon Spa facials Mangomint booking menu",
        items: [
          {
            name: "Skin Analysis",
            price: "Pricing based on consultation",
            description:
              "A personalized, in-depth skin assessment designed to understand your skin's unique needs. During this consultation, your provider will evaluate your skin type, concerns, and goals while reviewing your current routine and lifestyle factors. You'll receive expert recommendations for treatments and home care creating a tailored plan to support healthy, radiant skin.",
          },
          {
            name: "Farmhouse Fresh Glow Facial",
            price: "$95",
            description:
              "A customized calming moisture infusion treatment that brightens, smooths and deeply hydrates dry, sensitive, or depleted skin.",
          },
          {
            name: "Farmhouse Fresh Age-Defying Firming Facial",
            price: "$140",
            description:
              "A collagen-rich ritual that improves tone, elasticity, and youthful firmness.",
          },
          {
            name: "Pure Clarity Acne Detox",
            price: "$120",
            description:
              "Clarifying treatment with enzymatic exfoliation and extractions to clear congestion.",
          },
          {
            name: "Back Facial Renewal",
            price: "$125",
            description:
              "A purifying and exfoliating treatment designed to clarify the back.",
          },
          {
            name: "Farmhouse Fresh Gentleman's Facial",
            price: "$95",
            description:
              "A deep-cleansing, restorative facial tailored to men's skin needs.",
          },
          {
            name: "Express Glow Facial",
            price: "$65",
            description:
              "A condensed radiance treatment for instant refresh and hydration.",
          },
          {
            name: 'Farmhouse Fresh "Freshly Squeezed" Vitamin C Facial',
            price: "$140",
            description:
              "A potent brightening treatment infused with concentrated vitamin C to illuminate the complexion, improve clarity, and restore a youthful, radiant glow.",
          },
          {
            name: "Farmhouse Fresh CBD Calming Facial",
            price: "$120",
            description:
              "A deeply soothing facial infused with premium CBD to calm inflammation, reduce redness, and restore balance to stressed or sensitive skin, leaving the complexion relaxed, nourished, and radiant.",
          },
          {
            name: "Farmhouse Fresh Organic Glow Facial",
            price: "$130",
            description:
              "A deeply nourishing facial designed to restore balance, hydration, and natural radiance using pure organic botanicals and plant-based ingredients.",
          },
          {
            name: "Dermaplaning Treatment",
            price: "$120",
            description:
              "A refined exfoliating facial that gently removes surface buildup and fine facial hair using a precision blade, instantly revealing smoother texture, enhanced radiance and a flawless canvas for skincare absorption and makeup application.",
          },
        ],
      },
      {
        title: "Advanced Facials",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=19",
        bookingEmbedTitle: "Kossof Salon Spa advanced facials Mangomint booking menu",
        items: [
          {
            name: "Signature Microdermabrasion Facial",
            price: "$175",
            description:
              "Microdermabrasion is paired with a targeted serum infusion for refined, radiant skin.",
          },
          {
            name: "LED Regeneration Facial",
            price: "$150",
            description:
              "LED therapy reduces inflammation and boosts collagen for balanced, healthy skin.",
          },
        ],
      },
      {
        title: "Facial Enhancements",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=26",
        bookingEmbedTitle: "Kossof Salon Spa facial enhancements Mangomint booking menu",
        items: [
          {
            name: "Gua Sha Sculpting",
            price: "$10",
            description:
              "A soothing Gua Sha massage using a smooth stone to enhance circulation, relieve tension, and promote lymphatic drainage for a more sculpted, radiant complexion.",
          },
          {
            name: "Cryo Globe Cooling",
            price: "$10",
            description:
              "Chilled cryo globes soothe inflammation, calm redness, tighten pores, and refresh the skin while enhancing circulation for an instant cooling, lifted glow.",
          },
          {
            name: "Cranial Sensory Experience",
            price: "$10",
            description:
              "A deeply relaxing scalp ritual using a stainless-steel ball-tipped device to gently stimulate the scalp, ease tension, and calm the nervous system. This soothing sensory treatment promotes circulation, releases stress and delivers an immediate sense of tranquility.",
          },
          {
            name: "Farmhouse Fresh Bright Eyes Treatment",
            price: "$25",
            description:
              "A targeted eye treatment that hydrates, smooths, and brightens the delicate eye area-helping reduce the appearance of dark circles, puffiness, and fine lines for a refreshed, youthful look.",
          },
          {
            name: "Farmhouse Fresh Hand & Foot Treatment",
            price: "$35",
            description:
              "An indulgent luxury treatment featuring a refreshing hand and foot soak, gentle exfoliation, and a nourishing Farmhouse Fresh mask. Finished with a soothing hand and foot massage, leaving skin soft, hydrated, and beautifully revitalized.",
          },
        ],
      },
    ],
  },
  {
    id: "massages",
    title: "Massages",
    intro: "Therapeutic and relaxation massage services with optional enhancements.",
    textLeftOnDesktop: false,
    textPanelBgClassName: "bg-white",
    image: {
      src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1920&h=1200&fit=crop&auto=format&q=85",
      alt: "Massage therapy in a serene spa room",
    },
    groups: [
      {
        title: "Massage Therapies",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=5",
        bookingEmbedTitle: "Kossof Salon Spa massage therapies Mangomint booking menu",
        items: [
          {
            name: "Kossof Signature Massage",
            price: "$100 | 60min / $130 | 90min",
            description:
              "Light-to-medium pressure for soothing, classic relaxation.",
          },
          {
            name: "Deep Focus Therapeutic Massage",
            price: "$115 | 60min / $145 | 90min",
            description:
              "Firm, targeted work to relieve muscular tension and chronic tightness.",
          },
          {
            name: "Relax & Release Massage (Deep + Swedish)",
            price: "$115 | 60min / $145 | 90min",
            description:
              "A balanced combination of relaxation and therapeutic pressure.",
          },
          {
            name: "Hot Stone Melt Massage",
            price: "$125 | 60min / $165 | 90min",
            description:
              "Warm basalt stones ease muscles and melt stress.",
          },
          {
            name: "Himalayan Salt Stone Massage",
            price: "$125 | 60min / $165 | 90min",
            description:
              "Warm mineral-rich stones promote deep grounding and detoxification.",
          },
          {
            name: "Moroccanoil Mediterranean Escape Massage",
            price: "$130 | 60min / $160 | 90min",
            description:
              "A nourishing full-body massage using antioxidant-rich oils.",
          },
          {
            name: "Moroccanoil Mind Melt Scalp & Shoulder Ritual",
            price: "$65 | 30min",
            description:
              "Tension-relief treatment for the scalp, neck, shoulders, and arms.",
          },
          {
            name: "Aromatherapy Essence Massage",
            price: "$110 | 60min / $140 | 90min",
            description:
              "A calming sensory massage enhanced with curated essential oil blends.",
          },
          {
            name: "CBD Healing Relief Massage",
            price: "$140 | 60min / $180 | 90min",
            description:
              "CBD-infused therapy to reduce inflammation and promote deep comfort.",
          },
          {
            name: "Expectant Mother Massage",
            price: "$120 | 60min / $160 | 90min",
            description:
              "A soothing, supportive treatment tailored for pregnancy. Doctor's note required.",
          },
          {
            name: "Reflexology Renewal",
            price: "$60 | 30min",
            description:
              "Targeted foot and hand pressure-point therapy to restore balance.",
          },
          {
            name: "Clarity Tension Relief Massage",
            price: "$75 | 30min",
            description:
              "Focused neck, shoulder, and scalp work to ease headaches and mental fatigue.",
          },
          {
            name: "Neuromuscular Therapy",
            price: "$160 | 60min / $200 | 90min",
            description:
              "A corrective, precision-focused treatment that targets trigger points, muscle imbalances, and chronic tension to restore optimal function, relieve pain, and promote deep structural balance.",
          },
          {
            name: "Couples Massage",
            price: "$200 | 60min / $260 | 90min",
            description:
              "Unwind together with a luxurious couple's massage designed to relax the body, calm the mind, and restore balance. Side-by-side in a serene private setting, you and your guest will enjoy a customized massage experience tailored to your preferred pressure and focus areas for total relaxation and connection. Final pricing based on massage service selection.",
          },
        ],
      },
      {
        title: "Massage Enhancements",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=21",
        bookingEmbedTitle: "Kossof Salon Spa massage enhancements Mangomint booking menu",
        items: [
          {
            name: "Farmhouse Fresh Hand & Foot Treatment",
            price: "$35",
            description:
              "An indulgent luxury treatment featuring a refreshing hand and foot soak, gentle exfoliation, and a nourishing Farmhouse Fresh mask. Finished with a soothing hand and foot massage, leaving skin soft, hydrated, and beautifully revitalized.",
          },
          {
            name: "Gua Sha Sculpting",
            price: "$25 / 15min",
            description:
              "A soothing Gua Sha massage using a smooth stone to enhance circulation, relieve tension, and promote lymphatic drainage for a more sculpted, radiant complexion.",
          },
          {
            name: "Cranial Sensory Experience",
            price: "$10 / 15min",
            description:
              "A deeply relaxing scalp ritual using a stainless-steel ball-tipped device to gently stimulate the scalp, ease tension, and calm the nervous system. This soothing sensory treatment promotes circulation, releases stress and delivers an immediate sense of tranquility.",
          },
          {
            name: "Hot Stone",
            price: "$25",
            description:
              "A luxurious add-on featuring warm, smooth stones placed on key areas to deeply relax muscles, improve circulation, and enhance overall tension relief for a profoundly soothing and rejuvenating experience.",
          },
          {
            name: "Himalayan Salt Stone",
            price: "$25",
            description:
              "A luxurious enhancement to your massage, using warm Himalayan salt stones to soothe sore muscles, promote circulation, and deeply relax the body, leaving you feeling rejuvenated, balanced, and serene.",
          },
          {
            name: "Morocconoil Nourish/Firm - Hand & Foot Wrap",
            price: "$35",
            description:
              "A deeply conditioning hand and foot treatment infused with Moroccanoil oil to nourish dry skin, improve firmness, and restore softness while promoting relaxation and comfort.",
          },
        ],
      },
    ],
  },
  {
    id: "body-treatments",
    title: "Body Treatments",
    intro: "Exfoliating, hydrating, and detoxifying body rituals for full-body renewal.",
    textLeftOnDesktop: true,
    textPanelBgClassName: "bg-[#cad7de]/20",
    image: {
      src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&h=1200&fit=crop&auto=format&q=85",
      alt: "Luxury body treatment setup in spa",
    },
    groups: [
      {
        title: "Body Treatments",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=11",
        bookingEmbedTitle: "Kossof Salon Spa body treatments Mangomint booking menu",
        items: [
          {
            name: "Farmhouse Fresh Citrus Glow Body Polish",
            price: "$120 | 60min",
            description:
              "Botanical exfoliation revealing silky, radiant skin.",
          },
          {
            name: "Moroccanoil Body Scrub",
            price: "$130 | 60min",
            description:
              "Argan oil-infused exfoliation with uplifting signature scents.",
          },
          {
            name: "Moroccanoil Hydration Body Wrap",
            price: "$130 | 60min",
            description:
              "A deeply moisturizing full-body ritual using a blend of nutrient-rich moisturizers.",
          },
          {
            name: "Farmhouse Fresh Pure Himalayan Detox Wrap",
            price: "$140 | 60min",
            description:
              "A purifying salt-infused wrap that cleanses and re-energizes.",
          },
          {
            name: "Rebalancing Mud Wrap",
            price: "$140 | 60min",
            description:
              "Detoxifying volcanic mud for renewed vitality.",
          },
          {
            name: 'Farmhouse Fresh Polished "Back" to Perfection',
            price: "$80 | 30min",
            description:
              "A smoothing exfoliation and hydration treatment for the back.",
          },
          {
            name: "Farmhouse Fresh Bronzed Babe Scrub & Glow",
            price: "$135 | 60min",
            description:
              "A full-body exfoliating scrub to refresh and smooth the skin, followed by a professional light self-tanner application for an even, sun kissed glow within hours. To continue to achieve the best results follow with bronzed fox tanning drops at home added to your favorite Farmhouse Fresh moisturizer.",
          },
        ],
      },
    ],
  },
]

const SPA_SPLIT_SECTION_META: Record<string, { id: string; title?: string; intro: string; image?: { src: string; alt: string } }> = {
  "Body Waxing - Facial & Detail Areas": {
    id: "waxing-face-detail",
    title: "Face & Detail Body Waxing",
    image: {
      src: cloudinaryImage("WAXING_njr9va"),
      alt: "Face and body waxing at Kossof Salon Spa",
    },
    intro: "Precision body waxing services for facial and detail areas.",
  },
  "Body Waxing - Upper Body": {
    id: "waxing-upper-body",
    image: {
      src: cloudinaryImage("UWAXING_dyi8kr"),
      alt: "Upper body waxing at Kossof Salon Spa",
    },
    title: "Upper Body Waxing",
    intro: "Precision body waxing services for upper-body areas.",
  },
  "Body Waxing - Lower Body": {
    id: "waxing-lower-body",
    image: {
      src: cloudinaryImage("LWAXING_vy8juo"),
      alt: "Lower body waxing at Kossof Salon Spa",
    },
    title: "Lower Body Waxing",
    intro: "Precision body waxing services for lower-body areas.",
  },
  Facials: {
    id: "facials",
    intro: "Core facials for healthy, radiant skin.",
  },
  "Advanced Facials": {
    id: "advanced-facials",
    intro: "Advanced facial treatments focused on tone, texture, and renewal.",
    image: {
      src: cloudinaryImage("AFACIALL_csvucq"),
      alt: "Advanced facial treatments at Kossof Salon Spa",
    },
  },
  "Facial Enhancements": {
    id: "facial-enhancements",
    intro: "Targeted facial add-ons and enhancements for glow and balance.",
  },
  "Massage Therapies": {
    id: "massage",
    title: "Massage",
    intro: "Therapeutic and relaxation massage services.",
  },
  "Massage Enhancements": {
    id: "massage-enhancements",
    intro: "Optional massage enhancements for deeper restoration.",
  },
}

const splitSectionGroups = (section: ServicesSection, fallbackPrefix: string): ServicesSection[] =>
  section.groups.map((group, index) => {
    const meta = SPA_SPLIT_SECTION_META[group.title]

    return {
      id: meta?.id ?? `${fallbackPrefix}-${index + 1}`,
      title: meta?.title ?? group.title,
      intro: meta?.intro ?? section.intro,
      textLeftOnDesktop: index % 2 === 0,
      textPanelBgClassName: index % 2 === 0 ? "bg-[#cad7de]/20" : "bg-white",
      image: meta?.image ?? section.image,
      groups: [group],
    }
  })

const getSpaSectionById = (id: string): ServicesSection => {
  const section = SPA_BASE_SERVICES_SECTIONS.find((item) => item.id === id)
  if (!section) {
    throw new Error(`Missing spa section: ${id}`)
  }
  return section
}

export const SPA_SERVICES_SECTIONS: ServicesSection[] = [
  ...splitSectionGroups(getSpaSectionById("waxing"), "waxing"),
  getSpaSectionById("lashes-brows"),
  ...splitSectionGroups(getSpaSectionById("facials"), "facials"),
  ...splitSectionGroups(getSpaSectionById("massages"), "massages"),
  getSpaSectionById("body-treatments"),
]
