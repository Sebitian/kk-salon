"use client"

import { useEffect, useState, type ReactNode } from "react"
import Image from "next/image"
import { Dela_Gothic_One, Nunito } from "next/font/google"
import NewsletterIcon from "@/components/icons/newsletter-icon"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import {
  AUGUST_HOLIDAY_TEASER,
  AUGUST_NEWSLETTER_LINKS,
  AUGUST_SPECIALS_ROW_ONE,
  AUGUST_SPECIALS_ROW_TWO,
  DEFAULT_BOOKING_URL,
  type AugustSpecial,
  type AugustSpecialContent,
  type TextSegment,
} from "@/lib/august-specials"

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

const delaGothicOne = Dela_Gothic_One({
  subsets: ["latin"],
  weight: ["400"],
})

type AugustSpecialsWidgetProps = {
  bookingUrl?: string
}

function RichText({ segments }: { segments: TextSegment[] }) {
  return (
    <>
      {segments.map((segment, index) =>
        segment.bold ? (
          <strong key={index} className="font-semibold">
            {segment.text}
          </strong>
        ) : (
          <span key={index}>{segment.text}</span>
        )
      )}
    </>
  )
}

function SpecialContent({ content }: { content: AugustSpecialContent[] }) {
  return (
    <div className="space-y-4 text-center text-[#293333]">
      {content.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <p key={index} className="text-[15px] leading-relaxed md:text-base">
              <RichText segments={block.segments} />
            </p>
          )
        }

        if (block.type === "bullets") {
          return (
            <ul key={index} className="space-y-1 text-[15px] leading-relaxed md:text-base">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  • <RichText segments={item} />
                </li>
              ))}
            </ul>
          )
        }

        return (
          <p key={index} className="text-sm leading-relaxed text-[#293333]">
            {block.text}
          </p>
        )
      })}
    </div>
  )
}

function BookNowButton({
  href,
  label = "Book Now",
  className = "",
}: {
  href: string
  label?: string
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-[#ffdf8b] px-8 py-2.5 text-sm font-normal text-[#293333] transition-colors hover:bg-[#f5d56f] ${className}`}
    >
      {label}
    </a>
  )
}

function ShopButton({
  href,
  children,
  className = "",
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-[3.25rem] w-full max-w-[8.5rem] items-center justify-center rounded bg-[#3aaee0] px-4 py-2 text-sm font-normal leading-tight text-white transition-colors hover:bg-[#2ea2d4] ${className}`}
    >
      {children}
    </a>
  )
}

function SpecialCard({
  special,
  bookingUrl,
}: {
  special: AugustSpecial
  bookingUrl: string
}) {
  const href = special.bookingUrl ?? bookingUrl

  const image = (
    <div className="mx-auto w-full max-w-[255px]">
      <Image
        src={special.image}
        alt={special.imageAlt}
        width={255}
        height={255}
        className="h-auto w-full object-contain"
      />
    </div>
  )

  const title = (
    <h3 className="text-[26px] font-normal leading-tight text-[#293333]">
      {special.title}
    </h3>
  )

  return (
    <article className="flex flex-col bg-[#f9feff] px-4 py-8 text-center sm:px-6 md:px-8">
      {special.imageFirst ? (
        <>
          <div className="pb-6">{image}</div>
          <div className="pb-4">{title}</div>
        </>
      ) : (
        <>
          <div className="pb-4">{title}</div>
          <div className="pb-6">{image}</div>
        </>
      )}

      <SpecialContent content={special.content} />

      <div className="mt-6 flex justify-center">
        <BookNowButton href={href} />
      </div>
    </article>
  )
}

function PromoRow({ specials, bookingUrl }: { specials: AugustSpecial[]; bookingUrl: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {specials.map((special) => (
        <SpecialCard key={special.id} special={special} bookingUrl={bookingUrl} />
      ))}
    </div>
  )
}

export default function AugustSpecialsWidget({
  bookingUrl = DEFAULT_BOOKING_URL,
}: AugustSpecialsWidgetProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (window.location.hash === "#august-specials") {
      setOpen(true)
    }
  }, [])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`fixed bottom-5 right-[5.75rem] z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-salon-brown text-white shadow-[0_10px_24px_rgba(37,28,24,0.35)] transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-salon-brown ${open ? "pointer-events-none opacity-0" : ""}`}
        aria-label="View August Newsletter"
      >
        <NewsletterIcon className="h-[1.65rem] w-[1.65rem]" />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={`${nunito.className} max-h-[min(92vh,920px)] w-[calc(100%-1rem)] max-w-[600px] overflow-hidden border-0 bg-[#fff0c8] p-0 sm:rounded-[20px] [&>button]:absolute [&>button]:right-3 [&>button]:top-3 [&>button]:z-30 [&>button]:flex [&>button]:h-10 [&>button]:w-10 [&>button]:items-center [&>button]:justify-center [&>button]:rounded-full [&>button]:border-0 [&>button]:bg-[#f7f2ea] [&>button]:text-salon-raspberry [&>button]:opacity-100 [&>button]:shadow-sm [&>button]:transition-colors hover:[&>button]:bg-[#f7f2ea] hover:[&>button]:opacity-100 [&>button]:focus:outline-none [&>button]:focus:ring-2 [&>button]:focus:ring-salon-raspberry/30 [&>button_svg]:h-[18px] [&>button_svg]:w-[18px] [&>button_svg]:stroke-[2.75]`}
        >
          <DialogTitle className="sr-only">August Newsletter</DialogTitle>
          <div className="max-h-[min(92vh,920px)] overflow-y-auto">
            <div className="overflow-hidden rounded-[20px]">
            {/* Header */}
            <div className="bg-[#d36b6b] px-6 pb-2 pt-12 text-center sm:px-8">
              <div className="mx-auto mb-5 w-[189px]">
                <Image
                  src="/august-newsletter/logo-white.png"
                  alt="Kossof Salon Spa"
                  width={189}
                  height={80}
                  className="mx-auto h-auto w-full object-contain"
                  priority
                />
              </div>
              <h2
                className={`${delaGothicOne.className} text-[2.35rem] leading-none text-[#293333] sm:text-[2.75rem]`}
              >
                August Newsletter
              </h2>
            </div>

            {/* Hero */}
            <div className="bg-[#8be3ed]">
              <Image
                src="/august-newsletter/hero.jpg"
                alt="Autumn leaves over a wooden deck"
                width={600}
                height={260}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            {/* Book + shop links */}
            <div className="bg-[#f9feff] px-6 py-8 sm:px-8">
              <div className="flex justify-center pb-8">
                <BookNowButton href={bookingUrl} />
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4">
                <div className="flex flex-col items-center gap-5">
                  <Image
                    src="/august-newsletter/farmhouse-logo.png"
                    alt="Farmhouse Fresh"
                    width={160}
                    height={160}
                    className="h-40 w-40 object-contain"
                  />
                  <ShopButton href={AUGUST_NEWSLETTER_LINKS.farmhouse}>
                    <span>
                      Shop
                      <br />
                      Farmhouse
                    </span>
                  </ShopButton>
                </div>

                <div className="flex flex-col items-center gap-5">
                  <Image
                    src="/august-newsletter/haircare.jpg"
                    alt="Milbon haircare products"
                    width={160}
                    height={160}
                    className="h-40 w-auto object-contain"
                  />
                  <ShopButton href={AUGUST_NEWSLETTER_LINKS.haircare}>
                    Shop Haircare
                  </ShopButton>
                </div>

                <div className="flex flex-col items-center gap-5">
                  <Image
                    src="/august-newsletter/kossof-logo.png"
                    alt="Kossof Salon Spa"
                    width={160}
                    height={64}
                    className="h-16 w-auto object-contain"
                  />
                  <div className="hidden h-[60px] sm:block" aria-hidden />
                  <ShopButton href={AUGUST_NEWSLETTER_LINKS.website}>
                    View Website
                  </ShopButton>
                </div>
              </div>
            </div>

            <PromoRow specials={AUGUST_SPECIALS_ROW_ONE} bookingUrl={bookingUrl} />
            <PromoRow specials={AUGUST_SPECIALS_ROW_TWO} bookingUrl={bookingUrl} />

            {/* Holiday teaser */}
            <div className="bg-[#d36b6b] px-6 py-8 text-center sm:px-8">
              <div className="mx-auto mb-8 max-w-[540px]">
                <Image
                  src={AUGUST_HOLIDAY_TEASER.image}
                  alt={AUGUST_HOLIDAY_TEASER.imageAlt}
                  width={540}
                  height={240}
                  className="h-auto w-full object-contain"
                />
              </div>

              <h3 className="mb-5 text-[1.65rem] font-normal leading-tight text-[#293333] sm:text-[2rem]">
                {AUGUST_HOLIDAY_TEASER.heading}
              </h3>

              <div className="mx-auto max-w-lg space-y-4 text-base leading-relaxed text-[#293333]">
                <p>
                  <strong>{AUGUST_HOLIDAY_TEASER.lead}</strong>
                </p>
                <p>
                  <RichText segments={AUGUST_HOLIDAY_TEASER.bodySegments} />
                </p>
              </div>

              <div className="mt-6 flex justify-center">
                <BookNowButton
                  href={AUGUST_NEWSLETTER_LINKS.followUs}
                  label="Follow Us"
                />
              </div>

              <div className="mt-6 flex items-center justify-center gap-1.5">
                {(
                  [
                    ["facebook", AUGUST_NEWSLETTER_LINKS.social.facebook],
                    ["x", AUGUST_NEWSLETTER_LINKS.social.x],
                    ["instagram", AUGUST_NEWSLETTER_LINKS.social.instagram],
                    ["linkedin", AUGUST_NEWSLETTER_LINKS.social.linkedin],
                  ] as const
                ).map(([network, href]) => (
                  <a
                    key={network}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={network === "x" ? "X" : network.charAt(0).toUpperCase() + network.slice(1)}
                    className="transition-opacity hover:opacity-85"
                  >
                    <Image
                      src={`/august-newsletter/social-${network}.png`}
                      alt=""
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t-2 border-[#fff0c8] bg-[#f9feff] py-3" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
