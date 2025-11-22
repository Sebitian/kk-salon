"use client"

export default function LocationMap() {
  return (
    <div className="rounded-lg overflow-hidden shadow-md h-[400px]">
      <iframe
        src="https://maps.google.com/maps?q=Salon%20Bennett%2C%20185%20N%20Milwaukee%20Ave%20Suite%20120%2C%20Lincolnshire%2C%20IL%2060069&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Kossof Salon Spa Location - 185 N Milwaukee Ave Suite 120, Lincolnshire, IL 60069"
      />
    </div>
  )
}
