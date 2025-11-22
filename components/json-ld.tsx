export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Kossof Salon Spa",
    "image": "https://kossofsalonspa.com/klogo.png",
    "url": "https://kossofsalonspa.com",
    "telephone": "(847) 571-8078",
    "email": "info@kossofsalonspa.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "185 N Milwaukee Avenue, Ste. 120",
      "addressLocality": "Lincolnshire",
      "addressRegion": "IL",
      "postalCode": "60069",
      "addressCountry": "US"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday",
        "opens": "09:00",
        "closes": "16:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://instagram.com",
      "https://facebook.com"
    ],
    "priceRange": "$$"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

