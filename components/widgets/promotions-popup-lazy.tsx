"use client"

import dynamic from "next/dynamic"

const PromotionsPopup = dynamic(
  () => import("@/components/widgets/promotions-popup"),
  { ssr: false }
)

export default function PromotionsPopupLazy() {
  return <PromotionsPopup />
}
