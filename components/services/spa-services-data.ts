import { ServicesSection } from "./services-data"
import { cloudinaryImage } from "@/lib/cloudinary"

export const SPA_SERVICES_SECTIONS: ServicesSection[] = [
  {
    id: "facials",
    title: "Facials",
    intro:
      "At Kossof Salon Spa, we proudly feature FarmHouse Fresh skincare and customize each treatment to your skin type, concerns, goals, and lifestyle.",
    textLeftOnDesktop: true,
    textPanelBgClassName: "bg-[#cad7de]/20",
    image: {
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&h=1200&fit=crop&auto=format&q=85",
      alt: "Facial services at Kossof Salon Spa",
    },
    groups: [
      {
        title: "Facials",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=7",
        bookingEmbedTitle: "Kossof Salon Spa facials booking menu",
        items: [
          { name: "Glow Facial", price: "$95" },
          { name: "Age-Defying Firming Facial", price: "$140" },
          { name: "Pure Clarity Acne Detox", price: "$120" },
          { name: "Back Facial Renewal", price: "$125" },
          { name: "Gentleman's Facial", price: "$95" },
          { name: "Express Facial", price: "$65" },
          { name: '"Freshly Squeezed" Vitamin C Facial', price: "$140" },
          { name: "CBD Calming Facial", price: "$120" },
          { name: "Organic Glow Facial", price: "$130" },
          { name: "Early Apple Facial Peel", price: "$95 | 30min / $140 | 60min" },
          { name: "Snow Mushroom Facial Peel", price: "$95 | 30min / $140 | 60min" },
          { name: "Sage Arnica Facial Peel", price: "$95 | 30min / $140 | 60min" },
        ],
      },
    ],
  },
  {
    id: "advanced-facial-treatments",
    title: "Advanced Facial Treatments",
    textLeftOnDesktop: false,
    textPanelBgClassName: "bg-white",
    image: {
      src: cloudinaryImage("AFACIALL_csvucq"),
      alt: "Advanced facial treatments at Kossof Salon Spa",
    },
    groups: [
      {
        title: "Advanced Facial Treatments",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=19",
        bookingEmbedTitle: "Kossof Salon Spa advanced facial treatments booking menu",
        note: "A $50 non-refundable deposit will be applied towards the service for Microneedling.",
        items: [
          { name: "Aqua Glow Hydra Facial", price: "$175" },
          { name: "Dermaplaning Treatment", price: "$95" },
          { name: "Dermaplaning Facial", price: "$175" },
          { name: "Signature Microdermabrasion Facial", price: "$175" },
          { name: "LED Regeneration Facial", price: "$150" },
          { name: "Microneedling (2 hour session)", price: "$150" },
        ],
      },
      {
        title: "Facial Enhancements",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=19",
        bookingEmbedTitle: "Kossof Salon Spa facial enhancements booking menu",
        items: [
          { name: "Cryo Globe or Gua Sha Sculpting", price: "$10" },
          { name: "Bright Eyes Treatment", price: "$25" },
          { name: "Refreshing Hand + Foot Treatment", price: "$35" },
        ],
      },
    ],
  },
  {
    id: "waxing-facial-detail-areas",
    title: "Waxing Facial + Detail Areas",
    textLeftOnDesktop: true,
    textPanelBgClassName: "bg-[#cad7de]/20",
    image: {
      src: cloudinaryImage("WAXING_njr9va"),
      alt: "Facial waxing and detail services at Kossof Salon Spa",
    },
    groups: [
      {
        title: "Waxing Facial + Detail Areas",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=12",
        bookingEmbedTitle: "Kossof Salon Spa facial and detail waxing booking menu",
        items: [
          { name: "Brow Wax or Tweeze", price: "$25" },
          { name: "Unibrow", price: "$10" },
          { name: "Lip, Chin, Ears or Neck", price: "$18" },
          { name: "Side of Face", price: "$22" },
          { name: "Nose", price: "$20" },
        ],
      },
    ],
  },
  {
    id: "body-waxing",
    title: "Body Waxing",
    textLeftOnDesktop: false,
    textPanelBgClassName: "bg-white",
    image: {
      src: cloudinaryImage("UWAXING_dyi8kr"),
      alt: "Body waxing at Kossof Salon Spa",
    },
    groups: [
      {
        title: "Body",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=17",
        bookingEmbedTitle: "Kossof Salon Spa upper body waxing booking menu",
        items: [
          { name: "Half Arm", price: "$40" },
          { name: "Full Arm", price: "$53" },
          { name: "Under Arm", price: "$22" },
          { name: "Chest", price: "$65" },
          { name: "Shoulders", price: "$35" },
          { name: "Half Back", price: "$45" },
          { name: "Full Back", price: "$65" },
          { name: "Stomach/Abdomen", price: "$25" },
          { name: "Fingers", price: "$17" },
        ],
      },
      {
        title: "Lower Body",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=18",
        bookingEmbedTitle: "Kossof Salon Spa lower body waxing booking menu",
        items: [
          { name: "Toes", price: "$17" },
          { name: "Half Leg", price: "$55" },
          { name: "Full Leg", price: "$75" },
          { name: "Inner Thigh", price: "$25" },
          { name: "Bikini Line", price: "$40" },
          { name: "French Bikini", price: "$55" },
          { name: "Brazilian Bikini", price: "$65" },
        ],
      },
    ],
  },
  {
    id: "lashes-brows",
    title: "Lashes + Brows",
    textLeftOnDesktop: true,
    textPanelBgClassName: "bg-[#cad7de]/20",
    image: {
      src: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=1920&h=1200&fit=crop&auto=format&q=85",
      alt: "Lashes and brows services at Kossof Salon Spa",
    },
    groups: [
      {
        title: "Lashes + Brows",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=23",
        bookingEmbedTitle: "Kossof Salon Spa lashes and brows booking menu",
        items: [
          { name: "Brow Tint", price: "$22" },
          { name: "Lash Tint", price: "$35" },
          { name: "Lash Lift", price: "$80" },
          { name: "Brow Lamination", price: "$70" },
        ],
      },
    ],
  },
  {
    id: "makeup-artistry",
    title: "Makeup Artistry",
    textLeftOnDesktop: false,
    textPanelBgClassName: "bg-white",
    image: {
      src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&h=1200&fit=crop&auto=format&q=85",
      alt: "Makeup artistry at Kossof Salon Spa",
    },
    groups: [
      {
        title: "Makeup Artistry",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=22",
        bookingEmbedTitle: "Kossof Salon Spa makeup artistry booking menu",
        items: [
          { name: "Full Face Makeup", price: "$100" },
          { name: '"Eyes Only" Makeup', price: "$75" },
          { name: "Lash Application with Makeup", price: "$20" },
          { name: "Lash Application Only", price: "$30" },
        ],
      },
      {
        title: "Permanent Makeup",
        note: "A $50 non-refundable consultation fee will be applied towards the service.",
        items: [{ name: "Service price based on consultation", price: "Consultation" }],
      },
    ],
  },
  {
    id: "massage-therapies",
    title: "Massage Therapies",
    textLeftOnDesktop: true,
    textPanelBgClassName: "bg-[#cad7de]/20",
    image: {
      src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1920&h=1200&fit=crop&auto=format&q=85",
      alt: "Massage therapies at Kossof Salon Spa",
    },
    groups: [
      {
        title: "Massage Therapies",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=5",
        bookingEmbedTitle: "Kossof Salon Spa massage therapies booking menu",
        note: "Expectant Mother Massage requires a doctor's note.",
        items: [
          { name: "Kossof Signature Massage", price: "$100 | 60min / $130 | 90min" },
          { name: "Deep Focus Therapeutic Massage", price: "$115 | 60min / $145 | 90min" },
          { name: "Hot Stone Melt Massage", price: "$125 | 60min / $165 | 90min" },
          { name: "Himalayan Salt Stone Massage", price: "$125 | 60min / $165 | 90min" },
          { name: "Moroccanoil Mind Melt Scalp & Shoulder Ritual", price: "$65 | 30min" },
          { name: "CBD Healing Relief Massage", price: "$140 | 60min / $180 | 90min" },
          { name: "Expectant Mother Massage", price: "$120 | 60min / $160 | 90min" },
          { name: "Neuromuscular Therapy", price: "$80 | 30min / $160 | 60min / $200 | 90min" },
        ],
      },
      {
        title: "Massage Enhancements",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=5",
        bookingEmbedTitle: "Kossof Salon Spa massage enhancements booking menu",
        items: [
          { name: "Refreshing Hand & Foot Treatment", price: "$35" },
          { name: "Gua Sha Sculpting", price: "$25" },
          { name: "Hot Stone or Himalayan Salt Stone", price: "$25" },
        ],
      },
    ],
  },
  {
    id: "body-treatments",
    title: "Body Treatments",
    textLeftOnDesktop: false,
    textPanelBgClassName: "bg-white",
    image: {
      src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&h=1200&fit=crop&auto=format&q=85",
      alt: "Body treatments at Kossof Salon Spa",
    },
    groups: [
      {
        title: "Body Treatments",
        bookingEmbedUrl: "https://booking.mangomint.com/741141?showOnlyScId=11",
        bookingEmbedTitle: "Kossof Salon Spa body treatments booking menu",
        items: [
          { name: "Citrus Glow Body Polish", price: "$120" },
          { name: "Moroccanoil Body Scrub", price: "$130" },
          { name: "Pure Himalayan Detox Wrap", price: "$140" },
          { name: "Re-balancing Mud Wrap", price: "$140" },
          { name: 'Polished "Back" to Perfection', price: "$80 | 30min" },
        ],
      },
    ],
  },
]
