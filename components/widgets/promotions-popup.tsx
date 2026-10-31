"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { IMAGES } from "@/lib/cloudinary"

const DISMISSED_KEY = "november-newsletter-popup-dismissed"

export default function PromotionsPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (window.location.hash === "#august-specials") {
      return
    }

    if (sessionStorage.getItem(DISMISSED_KEY) === "true") {
      return
    }

    const timer = window.setTimeout(() => setOpen(true), 400)
    return () => window.clearTimeout(timer)
  }, [])

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen)
    if (!nextOpen) {
      sessionStorage.setItem(DISMISSED_KEY, "true")
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent
        className="max-h-[min(92vh,920px)] w-[calc(100%-1rem)] max-w-[640px] overflow-hidden border-0 bg-white p-0 sm:rounded-[20px]"
        closeClassName="right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border-0 bg-transparent text-salon-raspberry opacity-100 shadow-none ring-0 ring-offset-0 hover:bg-transparent hover:text-salon-raspberry hover:opacity-100 focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 data-[state=open]:bg-transparent data-[state=open]:text-salon-raspberry [&_svg]:h-[18px] [&_svg]:w-[18px] [&_svg]:stroke-[2.75] [&_svg]:text-salon-raspberry"
      >
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
  )
}
