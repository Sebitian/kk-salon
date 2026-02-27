export default function JsonLd() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Kossof Salon Spa",
      "url": "https://kossofsalonspa.com",
      "description": "Kossof Salon Spa in Lincolnshire, IL offers luxury hair, nail, and beauty services."
    },
    {
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      "name": "Kossof Salon Spa",
      "image": "https://kossofsalonspa.com/klogo.png",
      "url": "https://kossofsalonspa.com",
      "telephone": "847-821-6604",
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
          "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
          "opens": "09:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Friday",
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "09:00",
          "closes": "15:00"
        }
      ],
      "sameAs": [
        "https://instagram.com",
        "https://facebook.com"
      ],
      "priceRange": "$$"
    }
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  )
}