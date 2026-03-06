import type { Metadata } from "next"
import ProductsVideoTabs from "@/components/products/products-video-tabs"
import { getBlobUrls } from "@/lib/blob"

export const metadata: Metadata = {
  title: "Shop - Kossof Salon Spa",
  description: "Explore product videos for Salon Interactive and Farmhouse Fresh.",
}

export default async function ProductsPage() {
  const filenames = ["Kossof_Products_Final.mov", "Kossof.FarmhouseFresh.Final.mov"]
  const urls = await getBlobUrls(filenames)

  const items = [
    {
      id: "salon-interactive",
      label: "Salon Interactive",
      videoUrl: urls["Kossof_Products_Final.mov"],
    },
    {
      id: "farmhouse-fresh",
      label: "Farmhouse Fresh",
      videoUrl: urls["Kossof.FarmhouseFresh.Final.mov"],
    },
  ]

  return <ProductsVideoTabs items={items} />
}
