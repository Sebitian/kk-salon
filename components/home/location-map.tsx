"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock } from "lucide-react"

// Define salon locations
const locations = [
  {
    name: "Kossof Kraaz Salon - Linconshire",
    address: "410 Milwaukee Ave, Lincolnshire, IL 60069",
    phone: "847-821-6604",
    hours: "Mon: Closed | Tue-Thu: 9:00 AM - 7:00 PM | Fri: 9:00 AM - 6:00 PM | Sat: 9:00 AM - 5:00 PM | Sun: 9:00 AM - 3:00 PM",
  }
]

export default function LocationMap() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Interactive Map */}
      <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.9776895714584!2d-87.92439872347052!3d42.19357847920088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc0e8c9b1785f%3A0x5f7f65cf4fa6d3b8!2s410%20Milwaukee%20Ave%2C%20Lincolnshire%2C%20IL%2060069!5e0!3m2!1sen!2sus!4v1699471547410!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kossof Kraaz Salon Location in Lincolnshire"
        />
      </div>

      {/* Location Details */}
      <div className="space-y-6">
        {locations.map((location, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-3 text-primary">{location.name}</h3>

            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-600">{location.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">{location.phone}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">{location.hours}</span>
              </div>
            </div>

            <Button asChild size="sm" className="bg-primary text-white hover:bg-primary/90">
              <Link href="https://booking.mangomint.com/kossofsalonspa">Book Now</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
