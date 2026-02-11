import { ServicesSection } from "./services-data"

export const SPA_SERVICES_SECTIONS: ServicesSection[] = [
  {
    id: "facials",
    title: "Facials",
    intro: "Customized skincare treatments designed to restore radiance, clarity, and youthful glow.",
    textLeftOnDesktop: true,
    textPanelBgClassName: "bg-[#cad7de]/20",
    image: {
      src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&h=1200&fit=crop&auto=format&q=85",
      alt: "Spa setting with massage towels and calming ambiance",
    },
    groups: [
      {
        title: "Facials",
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
            name: "Farmhouse Fresh \u201CFreshly Squeezed\u201D Vitamin C Facial",
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
    id: "body-treatments",
    title: "Body Treatments",
    intro: "Luxurious body wraps, scrubs, and polishing treatments for total renewal.",
    textLeftOnDesktop: false,
    textPanelBgClassName: "bg-white",
    image: {
      src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&h=1200&fit=crop&auto=format&q=85",
      alt: "Luxury spa body treatment setting",
    },
    groups: [
      {
        title: "Body Treatments",
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
            name: "Farmhouse Fresh Polished \u201CBack\u201D to Perfection",
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
  {
    id: "massage",
    title: "Massage",
    intro: "Therapeutic and relaxation massage therapies tailored to restore balance and ease tension.",
    textLeftOnDesktop: true,
    textPanelBgClassName: "bg-[#cad7de]/20",
    image: {
      src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1920&h=1200&fit=crop&auto=format&q=85",
      alt: "Relaxing massage therapy in a serene spa environment",
    },
    groups: [
      {
        title: "Massage Therapies",
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
            name: "Neuromuscular therapy",
            price: "$160 | 60min / $200 | 90min",
            description:
              "A corrective, precision-focused treatment that targets trigger points, muscles imbalances, and chronic tension to restore optimal function, relieve pain, and promote deep structural balance.",
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
              "A deeply relaxing scalp ritual using a stainless-steel ball-tipped device to gently stimulate the scalp, ease tension, and calm the nervous system.",
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
              "A deeply conditioning hand & foot treatment infused with Moroccanoil oil to nourish dry skin, improve firmness, and restore softness while promoting relaxation and comfort.",
          },
        ],
      },
    ],
  },
]
