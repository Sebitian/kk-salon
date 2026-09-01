"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { IMAGES } from "@/lib/cloudinary"

const DISMISSED_KEY = "current-promotions-dismissed"

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
  )
}
