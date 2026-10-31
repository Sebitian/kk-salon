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
        aria-label="View November Newsletter"
      >
        <NewsletterIcon className="h-[1.65rem] w-[1.65rem]" />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[min(92vh,920px)] w-[calc(100%-1rem)] max-w-[640px] overflow-hidden border-0 bg-white p-0 sm:rounded-[20px]">
          <DialogTitle className="sr-only">November Newsletter</DialogTitle>
          <div className="max-h-[min(92vh,920px)] overflow-y-auto">
            <Image
              src={IMAGES.currentPromotions}
              alt="Kossof Salon Spa November Newsletter: Holiday Preview Week Nov 3-8, Gratitude Week Nov 17-21, Veterans Day 20% off services for active duty military or veterans, and Black Friday gift card bonus. Call 847-821-6604 or visit kossofsalonspa.com."
              width={1545}
              height={1999}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
