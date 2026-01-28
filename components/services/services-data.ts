export type ServiceItem = {
  name: string
  price: string
  description?: string
}

export type ServiceGroup = {
  title: string
  note?: string
  items: ServiceItem[]
}

export type ServicesSection = {
  /** Used for anchor links like /services#hair */
  id: string
  title: string
  /** Optional short intro under the section title */
  intro?: string
  /** Alternating layout: if true, text is left and image is right on desktop */
  textLeftOnDesktop: boolean
  /** Tailwind classes to color the text panel background */
  textPanelBgClassName: string
  image: {
    src: string
    alt: string
  }
  groups: ServiceGroup[]
}

export const SERVICES_SECTIONS: ServicesSection[] = [
  {
    id: "hair",
    title: "Hair",
    intro:
      "Luxury cutting, styling, color, treatments, and retexturizing services. Pricing may vary based on consultation.",
    textLeftOnDesktop: true,
    textPanelBgClassName: "bg-[#ede7e4]/20",
    image: {
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&h=1200&fit=crop&auto=format&q=85",
      alt: "Modern hair salon interior with styling stations",
    },
    groups: [
      {
        title: "Haircuts",
        items: [
          {
            name: "Consultation",
            price: "Pricing based on consultation",
            description:
              "A one-on-one consultation designed to create a thoughtful and personalized hair experience. Your stylist will assess your hair’s texture, density, condition, and history while discussing your lifestyle, styling routine, and long-term goals. This intentional session allows us to create a tailored plan for cutting, styling, or treatment services - ensuring seamless executions and beautiful results.",
          },
          {
            name: "Girls Haircut & Style 10 & Under",
            price: "from $40",
            description:
              "A luxury service for girls 10 and under, featuring a gentle shampoo, precision haircut, and expert styling for soft, polished, and beautifully finished hair.",
          },
          {
            name: "Boys Haircut 10 & Under",
            price: "from $35",
            description:
              "A gentle shampoo and precision haircut designed for boys 10 and under, finished with light styling for a clean polished look.",
          },
          {
            name: "Women’s Haircut & Style",
            price: "from $65",
            description:
              "A luxury haircut and style for guests 11 and up, featuring expert precision cutting, customized shaping, and professional styling for a polished, sophisticated finish.",
          },
          {
            name: "Woman’s Haircut Only",
            price: "from $55",
            description:
              "A luxury haircut for guests ages 11 and up, featuring expert precision cutting and customized shaping to enhance your natural beauty with a polished, refined look.",
          },
          {
            name: "Men’s Haircut & Style",
            price: "from $40",
            description:
              "A luxury shampoo and precision haircut tailored to your style, for ages 11 and up, finished with expert styling for a clean, polished look.",
          },
          {
            name: "Blow-dry Style",
            price: "from $45",
            description:
              "A luxury service begins with a relaxing shampoo, followed by blow-dry and styling for beautifully finished hair.",
          },
          {
            name: "Hot Tool Add-On",
            price: "$10",
            description:
              "Enhance your blow-dry with professional hot tool styling for added volume, curl or a sleek finish.",
          },
          {
            name: "Braiding",
            price: "from $30",
            description:
              "Luxurious braiding service is designed to create beautifully crafted, polished styles. Expertly styled for lasting wear, each braid enhances texture, shape, and elegance.",
          },
          {
            name: "Bang Trim",
            price: "$10",
            description:
              "A quick, precise trimming service designed to maintain the perfect shape, length, and style of your fringe. It also includes refreshing face-framing layers to keep your look balanced and polished.",
          },
          {
            name: "Beard Trim & Shaping",
            price: "$15",
            description:
              "A tailored trim and precise shaping to refine your beard and enhance your natural features.",
          },
          {
            name: "Neck Trim",
            price: "$10",
            description:
              "A refined finishing service focused on precise cleanup and contouring of the neckline. This luxury touch creates a crisp, polished appearance, enhancing overall balance while maintaining a clean, well-groomed look.",
          },
          {
            name: "Curly Hair Certified Haircut/Style with Joanna",
            price: "from $140",
            description:
              "This luxury curly haircut is expertly crafted by Joanna, a certified curly hair stylist trained in Rezo Cut, Ouidad Cut, and Mizani AirCut techniques. Each cut is tailored to enhance curl definition, minimize frizz, and shape curls for long-lasting balance, movement, and health. Pricing based on consultation.",
          },
          {
            name: "Wigs & Hairpieces",
            price: "Pricing based on consultation",
            description:
              "A personalized consultation to discuss wig or hairpiece options, fit, customization, and care - designed to achieve a natural, seamless result.",
          },
        ],
      },
      {
        title: "Special Occasion or Formal Hair Styling",
        note: "Hair must be clean and dry for formal styling.",
        items: [
          {
            name: "Updo",
            price: "from $95",
            description:
              "A luxury styling service featuring expertly crafted updos tailored for elegance and sophistication. Perfect for special occasions, each style is designed with precision to ensure a polished, long-lasting, and beautifully finished look.",
          },
          {
            name: "Downstyle",
            price: "from $95",
            description:
              "A luxury hair styling service designed to enhance natural texture and movement. Expertly crafted for a polished, elegant, and effortlessly refined look, perfect for any occasion.",
          },
        ],
      },
      {
        title: "Color",
        items: [
          {
            name: "Single Process",
            price: "from $80",
            description:
              "Intended to cover gray hair at the roots only, without being pulled through the ends.",
          },
          {
            name: "Single Process thru the Ends",
            price: "from $95",
            description:
              "Formulated to cover gray hair throughout and refresh or change the overall base color.",
          },
          {
            name: "Root Blending",
            price: "from $60",
            description:
              "A color technique that softens the line between natural regrowth and highlighted or colored hair, creating a seamless, more natural transition from roots to ends.",
          },
          {
            name: "Womans Grey Blending",
            price: "from $80",
            description:
              "A refined, natural approach to softening grey. Our colorist expertly blends custom tones to add dimension and subtle coverage, creating a seamless, low-maintenance finish that enhances your look with understated elegance.",
          },
          {
            name: "Mens Grey Blending",
            price: "from $50",
            description:
              "Softens gray hair by subtly blending it with the natural color for a natural, low-maintenance look.",
          },
          {
            name: "Beard Color",
            price: "from $40",
            description:
              "A service that blends or fully covers gray hair in the beard to achieve a natural, even tone.",
          },
          {
            name: "Partial Foil",
            price: "from $120",
            description:
              "Lightens or darkens select sections – typically the crown and sides – to add brightness or depth and dimension without coloring the entire head.",
          },
          {
            name: "Full Foil",
            price: "from $150",
            description:
              "Lightens or darkens the entire head – including the crown, sides, and underneath – to create all-over brightness, depth and dimension.",
          },
          {
            name: "Face Frame highlight",
            price: "from $60",
            description:
              "Focuses on lightening the strands around the face to brighten and accentuate facial features, creating a soft, sun kissed glow.",
          },
          {
            name: "Partial Balayage/Ombre",
            price: "from $160",
            description:
              "Lightens select sections of the hair – typically around the face and upper layers – using a hand-painted technique for a soft, natural gradient from darker roots to lighter ends. It gives a sun-kissed, low-maintenance look without fully coloring the entire head.",
          },
          {
            name: "Full Balayage/Ombre",
            price: "from $200",
            description:
              "Lightens the hair from roots to ends across the entire head using a hand-painted technique. It creates a seamless, blended transition from darker roots to lighter ends for an all-over sun-kissed or dramatically brightened look.",
          },
          {
            name: "Gloss/Toner",
            price: "from $50",
            description:
              "Refines color and enhances tone adding shine for a vibrant finish.",
          },
          {
            name: "Gloss/Toner with Color Service",
            price: "from $30",
            description:
              "Refines color and enhances tone adding shine for a vibrant finish.",
          },
          {
            name: "Double Process (bleach & tone)",
            price: "from $125",
            description:
              "Lightens the hair with bleach, then applies a toner to achieve the desired shade and remove unwanted tones for an even, customized color.",
          },
          {
            name: "Specialty color and corrective color",
            price: "Pricing based on consultation",
            description: "Pricing based on consultation.",
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
              "A detoxifying experience that gently yet effectively removes product buildup, hard water minerals, and environmental impurities from the hair and scalp. Restores clarity, balance, and natural shine while creating the ideal foundation for color, smoothing, or conditioning services. Hair feels lighter, refreshed and revitalized.",
          },
          {
            name: "Milbon Moisture Replenishing Treatment",
            price: "$75",
            description:
              "A luxurious 5-step ritual that replenishes moisture from inside out, reviving dry, porous, or color-processed hair. Seals in hydration and boosts shine for up to 5 weeks. Includes a take-home weekly booster to maintain results between visits.",
          },
          {
            name: "Milbon Smooth Deep Conditioning Treatment",
            price: "$65",
            description:
              "A luxurious 3-step smoothing ritual that infuses moisture and smooths hair structure and is ideal for fine to coarse hair. This treatment leaves hair soft, silky, and frizz-free for up to 5 weeks. Includes a take-home booster to keep results fresh between salon visits.",
          },
          {
            name: "Milbon Repair Treatment",
            price: "$85",
            description:
              "A luxurious 4-step reconstructive ritual designed for severely damaged or over-processed hair. Rebuilds internal structure and adds shine. Includes a take-home booster so clients can enjoy smooth, resilient hair for up to 5 weeks.",
          },
          {
            name: "Milbon Scalp Ritual",
            price: "$50",
            description:
              "A detoxifying head spa that deeply cleanses, exfoliates, and hydrates the scalp to relieve buildup and scalp irritation. Finished with a luxurious scalp massage and aromatherapy for total relaxation and healthier hair from the root.",
          },
          {
            name: "Moroccanoil Moisture Treatment",
            price: "$25",
            description:
              "Indulge your hair in a luxurious conditioning experience infused with rich argan oil and nourishing antioxidants. This deeply hydrating treatment restores softness, smoothness, and shine while improving manageability and strength. Perfect for dry, color-treated, or damaged hair in need of moisture and revitalization.",
          },
          {
            name: "Moroccanoil Scalp Treatment",
            price: "$40",
            description:
              "Revitalize your scalp and restore balance with this luxurious Moroccanoil pre-shampoo treatment. Infused with antioxidant-rich argan oil and essential nutrients, it deeply nourishes and soothes while promoting a healthier scalp environment. Whether targeting dryness, flakiness, or excess oil, this customized treatment gently rebalances and refreshes- leaving the scalp purified and the hair soft, shiny, and full of vitality.",
          },
          {
            name: "Keratin Vanilla Bean Treatment",
            price: "$20",
            description:
              "Indulge your hair in the rich nourishment of this aromatic vanilla bean and keratin infused conditioning treatment. Designed to restore softness, strength, and shine, it deeply hydrates dry or chemically treated hair while replenishing essential proteins for a silky, frizz-free finish. The warm vanilla aroma enhances the experience, leaving hair smooth, luminous, and luxuriously revitalized.",
          },
          {
            name: "Brazilian Blowout Split End Corrector",
            price: "$25",
            description:
              "A powerful reparative treatment designed to instantly seal, strengthen, and protect fragile ends. This luxe therapy uses Brazilian Blowout’s signature bonding technology to mend split fibers, prevent future breakage, and create a smooth, polished finish. Hair is left silky, resilient, and beautifully refined.",
          },
          {
            name: "Rene Furterer Scalp Treatment",
            price: "$35",
            description:
              "A revitalizing pre-shampoo scalp treatment designed to energize the scalp, boost circulation, and help rebalance the scalp environment. This luxurious blend of essential oils leaves the scalp feeling refreshed and purified while supporting healthier-looking, stronger hair from root to ends.",
          },
          {
            name: "Keune Vital Nutrition Mask",
            price: "$25",
            description:
              "Deeply restores dry, damaged hair with essential minerals and moisture-replenishing technology for softness, strength and renewed elasticity.",
          },
          {
            name: "Keune Keratin Smooth Mask",
            price: "$25",
            description:
              "A keratin-rich smoothing treatment that tames frizz, softens coarse texture, and seals the cuticle for sleek, controlled, humidity-resistant shine.",
          },
          {
            name: "Keune Color Brillianz Mask",
            price: "$25",
            description:
              "A color-preserving mask that hydrates, enhances vibrancy, and shields hair from UV fading, leaving color-treated hair luminous and supple.",
          },
          {
            name: "Keune Satin Oil Mask",
            price: "$25",
            description:
              "Lightweight hydration powered by a blend of nourishing oils that boosts softness, smoothness, and reflective shine without weighting hair down.",
          },
          {
            name: "Keune Blonde Savior Mask",
            price: "$25",
            description:
              "A bond-repairing mask for compromised blondes, strengthening and restoring softness while reducing breakage and enhancing brightness.",
          },
          {
            name: "Keune Bond Builder System",
            price: "$20",
            description:
              "A professional bond-strengthening system that repairs and protects the hair’s internal structure during and after color or chemical services. This advanced treatment rebuilds broken bonds, reduces breakage, and improves strength, elasticity, and shine- leaving hair healthier, smoother, and more resilient. Suitable for all hair types.",
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
              "Smooth, sleek, and radiant hair in just one hour. This express keratin treatment eliminates frizz, defies humidity, enhances shine, and reduces styling time for up to 6 weeks of effortless beauty.",
          },
          {
            name: "Keratin Complex Smoothing Treatment",
            price: "from $395",
            description:
              "Experience the ultimate hair refinement. This professional keratin treatment infuses every strand with rich, smoothing proteins to eliminate frizz, repair damage, and unveil luminous shine. Hair is left silky, resilient, and perfectly polished – dramatically reducing blow-dry time and maintaining flawless smoothness for up to 5 months.",
          },
          {
            name: "Brazilian Express Treatment",
            price: "from $145",
            description:
              "Experience the beauty of smooth, glossy hair in a fraction of the time. This advanced express formula infuses the hair with Brazilian keratin and nutrient-rich conditioners to eliminate frizz, boost shine, and improve manageability. In just one hour, achieve long-lasting smoothness and radiant, healthy movement that endures for up to 4 to 6 weeks with no down time.",
          },
          {
            name: "Brazilian Smoothing Treatment",
            price: "from $395",
            description:
              "Renowned for its transformative results, the Brazilian Blowout Smoothing Treatment delivers the smoothest, most radiant version of your hair. This professional smoothing system creates a protective protein layer around each strand, eliminating frizz and sealing in luxurious shine. Enjoy silky, weightless movement, humidity resistance, and effortless styling that lasts up to 12 weeks with no down time.",
          },
          {
            name: "Perm/Body Wave",
            price: "from $150",
            description:
              "Revive your hair with timeless texture and effortless movement. Our Perm and Body Wave service expertly tailored to your hair type and desired look- from loose, beachy waves to full, bouncy curls. Gentle, conditioning formulas add body and dimension while maintaining softness and shine, leaving you with beautifully defined, natural- looking texture that lasts.",
          },
          {
            name: "Virgin Relaxer",
            price: "from $200",
            description:
              "Perfect for first-time smoothing, our Virgin Relaxer gently restructures natural texture for sleek, frizz-free hair that’s soft, shiny, and easy to style. This full-head application uses conditioning ingredients to protect the hair’s strength and moisture, leaving each strand silky, polished, and luxuriously smooth.",
          },
          {
            name: "Retouch Relaxer",
            price: "from $150",
            description:
              "Refresh and maintain sleek, straight results. This precision retouch relaxer smooths new growth while preserving the integrity and shine of previously relaxed hair.",
          },
        ],
      },
    ],
  },
  {
    id: "nails",
    title: "Nails",
    intro: "Luxury manicures and pedicures with polished finishes and indulgent care.",
    textLeftOnDesktop: false,
    textPanelBgClassName: "bg-white",
    image: {
      src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=1920&h=1200&fit=crop&auto=format&q=85",
      alt: "Nail care and manicure tools on a clean workstation",
    },
    groups: [
      {
        title: "Manicure",
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
            name: "Men’s Manicure",
            price: "$28",
            description:
              "A luxury grooming service for hands, including nail shaping, cuticle care, and a revitalizing hand massage, leaving nails clean, healthy, and polished with a natural, refined finish.",
          },
          {
            name: "Structured Gel Manicure",
            price: "$75",
            description:
              "A luxury gel manicure that includes a strengthening builder gel layer to reinforce the natural nail. This service adds support, durability, and a smooth, flawless finish, helping prevent breakage while extending the life of your manicure – perfect for clients who want stronger, longer-lasting nails.",
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
            description:
              "A gentle, luxury service to safely remove no-chip polish, followed by nail prep to leave nails clean, smooth, and ready for your next manicure or treatment. Removal fee applies if prior no chip was not performed in house.",
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
        title: "Pedicure",
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
            name: "Men’s Pedicure",
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
            name: "Express “Mini” Pedicure",
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
    id: "spa",
    title: "Spa",
    intro: "Facials, body treatments, and massage therapies designed for restoration and glow.",
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
              "A personalized, in-depth skin assessment designed to understand your skin’s unique needs. During this consultation, your provider will evaluate your skin type, concerns, and goals while reviewing your current routine and lifestyle factors. You’ll receive expert recommendations for treatments and home care creating a tailored plan to support healthy, radiant skin.",
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
            name: "Farmhouse Fresh Gentleman’s Facial",
            price: "$95",
            description:
              "A deep-cleansing, restorative facial tailored to men’s skin needs.",
          },
          {
            name: "Express Glow Facial",
            price: "$65",
            description:
              "A condensed radiance treatment for instant refresh and hydration.",
          },
          {
            name: "Farmhouse Fresh “Freshly Squeezed” Vitamin C Facial",
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
            name: "Farmhouse Fresh Polished “Back” to Perfection",
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
              "A soothing, supportive treatment tailored for pregnancy. Doctor’s note required.",
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
              "Unwind together with a luxurious couple’s massage designed to relax the body, calm the mind, and restore balance. Side-by-side in a serene private setting, you and your guest will enjoy a customized massage experience tailored to your preferred pressure and focus areas for total relaxation and connection. Final pricing based on massage service selection.",
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
  {
    id: "beauty",
    title: "Beauty",
    intro: "Wedding services, waxing, lashes & brows, and makeup artistry.",
    textLeftOnDesktop: false,
    textPanelBgClassName: "bg-[#ede7e4]/20",
    image: {
      src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&h=1200&fit=crop&auto=format&q=85",
      alt: "Makeup artistry and beauty tools in a studio setting",
    },
    groups: [
      {
        title: "Wedding Hair and Make-Up (In Salon Pricing)",
        note: "Please come with a clean face for make-up application. Hair must be clean and dry for formal styling.",
        items: [
          {
            name: "Bride Hair – Trial Run or Wedding Day",
            price: "from $150",
          },
          {
            name: "Bride Make-Up",
            price: "$120",
          },
          {
            name: "Bride Make-Up with Lashes",
            price: "$140",
          },
          {
            name: "Bridal Party Hair – Blow dry",
            price: "from $65",
          },
          {
            name: "Bridal Party Hair – Formal styling",
            price: "from $95",
          },
          {
            name: "Bridal Party Make-Up",
            price: "$100",
          },
          {
            name: "Bridal Party Make-Up with Lashes",
            price: "$120",
          },
        ],
      },
      {
        title: "Wedding Hair and Make-Up (Out of Salon Pricing)",
        note: "Out of salon fee: $250 + 18% gratuity added. Please have a clean face for make-up application. Hair must be clean and dry for formal styling.",
        items: [
          {
            name: "Bride Hair – Wedding Day",
            price: "from $200",
          },
          {
            name: "Bride Make-Up",
            price: "$150",
          },
          {
            name: "Bride Make-Up with Lashes",
            price: "$170",
          },
          {
            name: "Bridal Party Hair – Blow dry",
            price: "from $85",
          },
          {
            name: "Bridal Party Hair – Formal styling",
            price: "from $125",
          },
          {
            name: "Bridal Party Make-Up",
            price: "$120",
          },
          {
            name: "Bridal Party Make-Up with Lashes",
            price: "$140",
          },
        ],
      },
      {
        title: "Body Waxing – Facial & Detail Areas",
        items: [
          {
            name: "Brow wax",
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
          { name: "Unibrow", price: "$10", description: "A precise, gentle service focused on removing unwanted hair between the brows for a clean, refined appearance while maintaining your natural brow shape." },
          { name: "Lip", price: "$17", description: "A gentle, precision waxing service to remove unwanted hair from the upper lip, leaving skin smooth, clean, and beautifully refined." },
          { name: "Chin", price: "$17", description: "A gentle, precision waxing service to remove unwanted hair from the chin area, leaving skin smooth, clean, and beautifully refined." },
          { name: "Side of Face", price: "$22", description: "A gentle, precision waxing service to remove unwanted hair along the sides of the face, creating a smooth, clean, and beautifully refined finish." },
          { name: "Nose", price: "$20", description: "A quick, precise grooming service to safely remove unwanted hair from the nose area, leaving a clean, polished, and well-groomed appearance." },
          { name: "Ears", price: "$17", description: "A precise grooming service to gently remove unwanted hair from the ears, leaving a clean, polished, and well-groomed appearance." },
          { name: "Neck", price: "$17", description: "A gentle, precision waxing service to remove unwanted hair from the neck area, leaving skin smooth, clean, and beautifully refined." },
        ],
      },
      {
        title: "Body Waxing – Upper Body",
        items: [
          { name: "Half Arm", price: "$40", description: "A luxurious waxing service designed to remove unwanted hair from the lower or upper half of the arm with precision, leaving skin smooth, soft, and beautifully refined." },
          { name: "Full Arm", price: "$53", description: "A luxury waxing service that removes unwanted hair from the entire arm with precision, leaving skin smooth, soft, and beautifully polished." },
          { name: "Under Arm", price: "$22", description: "A gentle, precision waxing service to remove unwanted hair from the underarm area, leaving skin smooth, clean, and refreshed." },
          { name: "Chest", price: "$65", description: "A precision waxing service to remove unwanted hair from the chest area, leaving skin smooth, clean, and beautifully refined." },
          { name: "Shoulders", price: "$35", description: "A gentle, precision waxing service to remove unwanted hair from the shoulder area, leaving skin smooth, clean, and beautifully refined." },
          { name: "Half Back", price: "$45", description: "A luxurious waxing service targeting the upper or lower half of the back. Removing unwanted hair with precision for smooth, soft, and beautifully refined skin." },
          { name: "Full Back", price: "$65", description: "A luxury waxing service that removes unwanted hair from the entire back with precision, leaving skin smooth, soft, and perfectly polished." },
          { name: "Stomach/Abdominal", price: "$25", description: "A gentle, precision waxing service to remove unwanted hair from the stomach area, leaving skin smooth, soft, and beautifully refined." },
          { name: "Fingers", price: "$17", description: "A precise waxing service to remove unwanted hair from the fingers, leaving skin smooth, clean, and perfectly polished." },
        ],
      },
      {
        title: "Body Waxing – Lower Body",
        items: [
          { name: "Toes", price: "$17", description: "A gentle, precision waxing service to remove unwanted hair from the toes, leaving skin smooth, clean, and beautifully refined." },
          { name: "Half Leg", price: "$55", description: "A luxurious waxing service to remove unwanted hair from either the upper or lower half of the leg, leaving skin smooth, soft, and beautifully refined." },
          { name: "Full Leg", price: "$75", description: "A luxury waxing service that removes unwanted hair from the entire leg with precision, leaving skin smooth, soft, and perfectly polished." },
          { name: "Inner Thigh", price: "$25", description: "A precise and gentle waxing service to remove unwanted hair from the inner thigh area, leaving skin smooth, soft, and beautifully refined." },
          { name: "Bikini Line", price: "$40", description: "A luxury waxing service designed to remove unwanted hair along the bikini line with precision, leaving skin smooth, clean, and beautifully refined." },
          { name: "French Bikini", price: "$55", description: "A precise and luxurious waxing service that removes hair beyond the standard bikini line for a smooth, polished, and elegant finish." },
          { name: "Brazilian Bikini", price: "$65", description: "A luxury, full-service waxing treatment that removes all unwanted hair from the bikini area, leaving skin smooth, clean, and impeccably polished for a refined, long-lasting finish." },
        ],
      },
      {
        title: "Lashes, Brows & Beauty",
        items: [
          { name: "Brow Tint", price: "$22", description: "Enhances fullness and definition." },
          { name: "Lash Tint", price: "$35", description: "Darkens and enhances natural lashes." },
          { name: "Lash Lift", price: "$70", description: "A semi-permanent treatment that lifts and curls your natural lashes for a longer, brighter look. Results last 6-8 weeks with no extensions or daily curling needed." },
          { name: "Brow Lamination", price: "$70", description: "A smoothing treatment that shapes and sets brow hairs for a fuller, more defined look. Results last 6-8 weeks." },
        ],
      },
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
            name: "“Eyes Only” Makeup",
            price: "$75",
            description:
              "A luxury service focused on enhancing your eyes, including expertly blended eyeshadow, eyeliner, and mascara.",
          },
          {
            name: "“Eyes Only” Makeup with Lashes",
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

