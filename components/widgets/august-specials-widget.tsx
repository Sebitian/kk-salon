"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import NewsletterIcon from "@/components/icons/newsletter-icon"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { IMAGES } from "@/lib/cloudinary"

export default function AugustSpecialsWidget() {
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
        aria-label="View current promotions"
      >
        <NewsletterIcon className="h-[1.65rem] w-[1.65rem]" />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-h-[min(92vh,920px)] w-[calc(100%-1rem)] max-w-[640px] overflow-hidden border-0 bg-white p-0 sm:rounded-[20px] [&>button]:absolute [&>button]:right-3 [&>button]:top-3 [&>button]:z-30 [&>button]:flex [&>button]:h-10 [&>button]:w-10 [&>button]:items-center [&>button]:justify-center [&>button]:rounded-full [&>button]:border-0 [&>button]:bg-[#f7f2ea] [&>button]:text-salon-raspberry [&>button]:opacity-100 [&>button]:shadow-sm [&>button]:transition-colors hover:[&>button]:bg-[#f7f2ea] hover:[&>button]:opacity-100 [&>button]:focus:outline-none [&>button]:focus:ring-2 [&>button]:focus:ring-salon-raspberry/30 [&>button_svg]:h-[18px] [&>button_svg]:w-[18px] [&>button_svg]:stroke-[2.75]"
        >
          <DialogTitle className="sr-only">Current Promotions</DialogTitle>
          <div className="max-h-[min(92vh,920px)] overflow-y-auto">
            <Image
              src={IMAGES.currentPromotions}
              alt="Kossof Salon Spa current promotions: Men's Haircut plus Phyto Treatment, Spa Day Special, Clarifying Hair Week, and Lunch Break Happy Hour. Call 847-821-6604 to schedule."
              width={600}
              height={500}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
