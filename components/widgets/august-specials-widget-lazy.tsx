"use client"

import dynamic from "next/dynamic"

const AugustSpecialsWidget = dynamic(
  () => import("@/components/widgets/august-specials-widget"),
  { ssr: false }
)

export default function AugustSpecialsWidgetLazy() {
  return <AugustSpecialsWidget />
}
