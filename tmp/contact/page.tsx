import type { Metadata } from "next"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import LocationMap from "@/components/contact/location-map"

export const metadata: Metadata = {
  title: "Contact Us - Kossof Salon Spa",
  description: "Get in touch with Kossof Salon Spa. Find our location, contact information, and business hours.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero / Header Section */}
      <div className="relative py-24 mb-12 overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          {/* Dark overlay similar to hero section */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          {/* Optional: You could use an image here instead of a solid color if available */}
           <div 
            className="absolute inset-0 bg-[url('/faq_bg.jpg')] bg-cover bg-center opacity-50 blur-sm"
            aria-hidden="true"
          />
        </div>
        
        <div className="relative z-20 container-custom text-center px-4">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase mb-6"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif', color: '#f5f5f0' }}
          >
            Contact Us
          </h1>
          <p 
            className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
          >
            Ready to transform your look? Connect with Kossof Salon Spa in Lincolnshire, IL. 
            Whether you have questions about our services or want to book an appointment, we are here to assist you.
          </p>
        </div>
      </div>

      <div className="container-custom mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
        <div className="mt-20">
          <h2 className="heading-md mb-6">Find Us</h2>
          <LocationMap />
        </div>
      </div>
    </>
  )
}
