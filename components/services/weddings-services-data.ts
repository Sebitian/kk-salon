import { ServicesSection } from "./services-data"

export const WEDDINGS_SERVICES_SECTIONS: ServicesSection[] = [
  {
    id: "weddings",
    title: "Weddings",
    intro: "Wedding hair and makeup services with in-salon and on-location options.",
    textLeftOnDesktop: true,
    textPanelBgClassName: "bg-[#ede7e4]/20",
    image: {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1200&fit=crop&auto=format&q=85",
      alt: "Bridal hair and makeup styling",
    },
    groups: [
      {
        title: "In-Salon Services - Bride",
        note: "Please come with a clean face for makeup application.",
        items: [
          { name: "Bridal Hair (Trial or Wedding Day)", price: "from $150" },
          { name: "Bridal Makeup", price: "$120" },
          { name: "Bridal Makeup with Lashes", price: "$140" },
        ],
      },
      {
        title: "In-Salon Services - Bridal Party",
        note:
          "Hair must be clean and dry for formal styling. Please come with a clean face for makeup application.",
        items: [
          { name: "Blow Dry", price: "from $65" },
          { name: "Formal Styling", price: "from $95" },
          { name: "Makeup", price: "$100" },
          { name: "Makeup with Lashes", price: "$120" },
        ],
      },
      {
        title: "Out-of-Salon Services - Bride",
        note:
          "Out-of-salon fee: $250 + 18% gratuity added. Please have a clean face for makeup application.",
        items: [
          { name: "Bridal Hair (Wedding Day)", price: "from $200" },
          { name: "Bridal Makeup", price: "$150" },
          { name: "Bridal Makeup with Lashes", price: "$170" },
        ],
      },
      {
        title: "Out-of-Salon Services - Bridal Party",
        note:
          "Out-of-salon fee: $250 + 18% gratuity added. Hair must be clean and dry for formal styling. Please have a clean face for makeup application.",
        items: [
          { name: "Blow Dry", price: "from $85" },
          { name: "Formal Styling", price: "from $125" },
          { name: "Makeup", price: "$120" },
          { name: "Makeup with Lashes", price: "$140" },
        ],
      },
    ],
  },
]
