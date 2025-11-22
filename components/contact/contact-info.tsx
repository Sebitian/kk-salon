import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="salon-card p-8 shadow-salon">
      <h2 className="heading-md mb-6 flex items-center">
        <span className="w-8 h-0.5 bg-primary mr-2"></span>
        Get In Touch
      </h2>

      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
          <div>
            <h3 className="font-semibold mb-1">Address</h3>
            <p className="text-gray-600">185 N Milwaukee Ave Suite 120, Lincolnshire, IL 60069, United States</p>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
          <div>
            <h3 className="font-semibold mb-1">Phone</h3>
            <p className="text-gray-600">+1 (847) 571-8078</p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-gray-600">info@kossofsalonspa.com</p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
          <div>
            <h3 className="font-semibold mb-1">Business Hours</h3>
            <div className="text-gray-600">
              <p>Monday: CLOSED</p>
              <p>Tuesday: 9:00 AM - 6:00 PM</p>
              <p>Wednesday: 9:00 AM - 4:00 PM</p>
              <p>Thursday: 9:00 AM - 6:00 PM</p>
              <p>Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100">
        <h3 className="font-semibold mb-3">Connect With Us</h3>
        <div className="flex space-x-4">
          {/* <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a> */}
          <a
            href="https://www.facebook.com/profile.php?id=61582500130935"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          {/* <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a> */}
        </div>
      </div>
    </div>
  )
}
