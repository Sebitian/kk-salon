import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Shop Products - Kossof Salon Spa",
  description: "Shop Kossof Salon Spa products online with SalonInteractive.",
}

export default function ProductsPage() {
  redirect("https://shop.saloninteractive.com/store/kossof-salon-spa-ltd-91277")
}
