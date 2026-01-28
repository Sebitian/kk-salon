import type { Metadata } from "next"
import { Suspense } from "react"
import MangomintScript from "@/components/booking/mangomint-script"
import BookingBanner from "@/components/booking/booking-banner"

export const metadata: Metadata = {
  title: "Book an Appointment - Kossof Salon Spa",
  description:
    "Book your appointment at Kossof Salon Spa. Choose your service and reserve a time that works best for you.",
}

function BookingFormSkeleton() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="animate-pulse">
        <div className="bg-gray-200 h-32 rounded-t-lg mb-8"></div>
        <div className="space-y-6 p-8">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
          <div className="h-12 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  )
}

export default function BookingPage() {
  return (
    <>
      <BookingBanner />
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <Suspense fallback={<BookingFormSkeleton />}>
            <MangomintScript />
            {/* <BookingMangomint /> */}
          </Suspense>
        </div>
      </div>
    </>
  )
}
