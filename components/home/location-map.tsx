"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock } from "lucide-react"

// Define salon locations
const locations = [
  {
    name: "Glow Salon - Bandra",
    address: "Shop 12, Hill Road, Bandra West, Mumbai - 400050",
    phone: "+91 98765 43210",
    hours: "10:00 AM - 9:00 PM",
  },
  {
    name: "Glow Salon - Andheri",
    address: "Unit 5, Lokhandwala Complex, Andheri West, Mumbai - 400053",
    phone: "+91 98765 43211",
    hours: "10:00 AM - 9:00 PM",
  },
  {
    name: "Glow Salon - Powai",
    address: "Ground Floor, Hiranandani Gardens, Powai, Mumbai - 400076",
    phone: "+91 98765 43212",
    hours: "10:00 AM - 9:00 PM",
  },
]

export default function LocationMap() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Interactive Map */}
      <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.082177513380943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Glow Salon Locations in Mumbai"
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
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
