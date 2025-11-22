import { MapPin, Phone, Mail, Clock, Facebook } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="salon-card p-8 shadow-salon" itemScope itemType="https://schema.org/HairSalon">
      {/* Hidden structured data for AI */}
      <meta itemProp="name" content="Kossof Salon Spa" />
      <meta itemProp="priceRange" content="$$" />
      
      <h2 className="heading-md mb-6 flex items-center">
        <span className="w-8 h-0.5 bg-primary mr-2"></span>
        Get In Touch
      </h2>

      <div className="space-y-6">
        {/* Address with structured data */}
        <div className="flex items-start" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <MapPin className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
          <div>
            <h3 className="font-semibold mb-1">Address</h3>
            <p className="text-gray-600">
              <span itemProp="streetAddress">185 N Milwaukee Ave Suite 120</span>, <span itemProp="addressLocality">Lincolnshire</span>, <span itemProp="addressRegion">IL</span> <span itemProp="postalCode">60069</span>, <span itemProp="addressCountry">United States</span>
            </p>
          </div>
        </div>

        {/* Phone with clickable link */}
        <div className="flex items-start">
          <Phone className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
          <div>
            <h3 className="font-semibold mb-1">Phone</h3>
            <a 
              href="tel:+18475718078"
              className="text-gray-600 hover:text-primary transition-colors"
              itemProp="telephone"
            >
              +1 (847) 571-8078
            </a>
          </div>
        </div>

        {/* Email with clickable link */}
        <div className="flex items-start">
          <Mail className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <a 
              href="mailto:info@kossofsalonspa.com"
              className="text-gray-600 hover:text-primary transition-colors"
              itemProp="email"
            >
              info@kossofsalonspa.com
            </a>
          </div>
        </div>

        {/* Hours with structured data */}
        <div className="flex items-start">
          <Clock className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
          <div>
            <h3 className="font-semibold mb-1">Business Hours</h3>
            <div className="text-gray-600">
              <p>Monday: CLOSED</p>
              <p>
                <meta itemProp="openingHours" content="Tu 09:00-18:00" />
                Tuesday: 9:00 AM - 6:00 PM
              </p>
              <p>
                <meta itemProp="openingHours" content="We 09:00-16:00" />
                Wednesday: 9:00 AM - 4:00 PM
              </p>
              <p>
                <meta itemProp="openingHours" content="Th 09:00-18:00" />
                Thursday: 9:00 AM - 6:00 PM
              </p>
              <p>
                <meta itemProp="openingHours" content="Fr 09:00-18:00" />
                Friday: 9:00 AM - 6:00 PM
              </p>
              <p>
                <meta itemProp="openingHours" content="Sa 09:00-16:00" />
                Saturday: 9:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100">
        <h3 className="font-semibold mb-3">Connect With Us</h3>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=61582500130935"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
            aria-label="Follow Kossof Salon Spa on Facebook"
            itemProp="sameAs"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}