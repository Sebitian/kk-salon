export const DEFAULT_BOOKING_URL = "https://booking.mangomint.com/kossofsalonspa"

export const AUGUST_NEWSLETTER_LINKS = {
  booking: DEFAULT_BOOKING_URL,
  farmhouse: "https://tidd.ly/3Nn3azv",
  haircare: "https://shop.saloninteractive.com/store/kossof-salon-spa-ltd-91277",
  website: "https://kossofsalonspa.com",
  followUs: "https://www.instagram.com/kossof_salonspa/",
  social: {
    facebook: "https://www.facebook.com/people/Kossof-Salon-Spa/61582500130935/",
    x: "https://www.instagram.com/kossof_salonspa/",
    instagram: "https://www.instagram.com/kossof_salonspa/",
    linkedin: "https://www.facebook.com/people/Kossof-Salon-Spa/61582500130935/",
  },
} as const

export type TextSegment = {
  text: string
  bold?: boolean
}

export type AugustSpecialContent =
  | { type: "paragraph"; segments: TextSegment[] }
  | { type: "bullets"; items: TextSegment[][] }
  | { type: "finePrint"; text: string }

export type AugustSpecial = {
  id: string
  title: string
  image: string
  imageAlt: string
  imageFirst: boolean
  content: AugustSpecialContent[]
  bookingUrl?: string
}

export const AUGUST_SPECIALS_ROW_ONE: AugustSpecial[] = [
  {
    id: "spa-day",
    title: "August Spa Day",
    image: "/august-newsletter/spa-day.jpg",
    imageAlt: "Farmhouse Fresh spa products with citrus",
    imageFirst: false,
    content: [
      {
        type: "paragraph",
        segments: [
          { text: "Clients new to booking a massage or facial receive a " },
          {
            text: "complimentary Eye Treatment OR Hand & Foot Treatment",
            bold: true,
          },
          { text: ", plus a " },
          { text: "complimentary blow-dry", bold: true },
          { text: "." },
        ],
      },
      {
        type: "finePrint",
        text: "*Starts August 18th through end of September. Blow-dry can be forfeited but not saved for a later date.",
      },
    ],
  },
  {
    id: "happy-hour",
    title: "Lunch Break Happy Hour",
    image: "/august-newsletter/happy-hour.png",
    imageAlt: "Relaxing spa treatment with citrus",
    imageFirst: false,
    content: [
      {
        type: "paragraph",
        segments: [
          { text: "Tuesdays & Wednesdays from " },
          { text: "11 AM–2 PM only!", bold: true },
          { text: " New clients can enjoy savings on select services:" },
        ],
      },
      {
        type: "bullets",
        items: [
          [{ text: "$5 off Blow-Dry", bold: true }],
          [{ text: "$3 off Manicure", bold: true }],
          [{ text: "$5 off Pedicure", bold: true }],
        ],
      },
      {
        type: "finePrint",
        text: "*New clients only. Select participating staff. Now through the end of September.",
      },
    ],
  },
]

export const AUGUST_SPECIALS_ROW_TWO: AugustSpecial[] = [
  {
    id: "clarifying",
    title: "Clarifying Hair Week",
    image: "/august-newsletter/clarifying.jpg",
    imageAlt: "Styled braid with sunset backdrop",
    imageFirst: true,
    content: [
      {
        type: "paragraph",
        segments: [
          { text: "September 1st–6th, enjoy a " },
          { text: "complimentary Clarifying Cleanse", bold: true },
          {
            text: " with any blow-dry, haircut, or haircut + blow-dry service!",
          },
        ],
      },
      {
        type: "finePrint",
        text: "*Mention when booking or checking-in. $15 value.",
      },
    ],
  },
  {
    id: "mens-phyto",
    title: "Men's Haircut + Phyto Treatment",
    image: "/august-newsletter/mens-phyto.jpg",
    imageAlt: "Man receiving a Phyto scalp treatment",
    imageFirst: true,
    content: [
      {
        type: "paragraph",
        segments: [
          { text: "Every Wednesday, men enjoy a " },
          { text: "complimentary Phyto Scalp Treatment", bold: true },
          { text: " with any haircut appointment—a " },
          { text: "$35 value!", bold: true },
        ],
      },
      {
        type: "finePrint",
        text: "*Mention this offer when booking or checking in. One per client.",
      },
    ],
  },
]

export const AUGUST_HOLIDAY_TEASER = {
  image: "/august-newsletter/holiday-teaser.jpg",
  imageAlt: "Happy Holidays teaser",
  heading: "Something special is coming this Holiday season...",
  lead: "Something special is coming this holiday season! ✨",
  bodySegments: [
    { text: "We're bringing you " },
    { text: "season-long savings starting this October", bold: true },
    {
      text: ", and you won't want to miss it. Keep an eye on your inbox and follow us on social media for all the details.",
    },
  ] satisfies TextSegment[],
}
