import type { Metadata } from "next";
import Link from "next/link";
import MeetTeamSection from "@/components/home/meet-team-section";

export const metadata: Metadata = {
  title: "About Us - Kossof Salon Spa | Lincolnshire Hair Salon",
  description:
    "Learn about Kossof Salon Spa, created by Keeley Kossof and Amy Kraaz. Built on the Kossof legacy of excellence spanning over 50 years and a commitment to Luxury, Beauty, and Experience in every visit.",
  openGraph: {
    title: "About Kossof Salon Spa - Lincolnshire's Premier Hair Salon",
    description:
      "Discover the story behind Kossof Salon Spa—created by Keeley Kossof and Amy Kraaz and built on the Kossof legacy of excellence spanning over 50 years.",
    type: "website",
    locale: "en_US",
    siteName: "Kossof Salon Spa",
    images: [
      {
        url: "https://kossofsalonspa.com/keeley.jpg",
        width: 1200,
        height: 630,
        alt: "Keeley Kossof and Amy Kraaz - Founders of Kossof Salon Spa",
      },
    ],
  },
  alternates: {
    canonical: "https://kossofsalonspa.com/about",
  },
};

// Enhanced Structured Data with Person Schemas
const foundersSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://kossofsalonspa.com/about#keeley-kossof",
      name: "Keeley Kossof",
      jobTitle: "Co-Founder & Master Stylist",
      worksFor: {
        "@type": "HairSalon",
        name: "Kossof Salon Spa",
      },
      knowsAbout: [
        "Hair Coloring",
        "Precision Cutting",
        "Hair Extensions",
        "Balayage",
        "Hair Styling"
      ],
      alumniOf: "Teddie Kossof Salon",
      yearsOfExperience: "Experienced",
    },
    {
      "@type": "Person",
      "@id": "https://kossofsalonspa.com/about#amy-kraaz",
      name: "Amy Kraaz",
      jobTitle: "Co-Founder & Master Stylist",
      worksFor: {
        "@type": "HairSalon",
        name: "Kossof Salon Spa",
      },
      knowsAbout: [
        "Hair Coloring",
        "Precision Cutting",
        "Hair Extensions",
        "Balayage",
        "Hair Styling"
      ],
      alumniOf: "Teddie Kossof Salon",
      yearsOfExperience: "Experienced",
    }
  ]
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "HairSalon",
    name: "Kossof Salon Spa",
    description:
      "Kossof Salon Spa was created by Keeley Kossof and Amy Kraaz and is built on the Kossof legacy of excellence spanning over 50 years—delivering Luxury, Beauty, and Experience in every visit.",
    foundingDate: "2024",
    founders: [
      {
        "@id": "https://kossofsalonspa.com/about#keeley-kossof"
      },
      {
        "@id": "https://kossofsalonspa.com/about#amy-kraaz"
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "185 N Milwaukee Avenue, Suite 120",
      addressLocality: "Lincolnshire",
      addressRegion: "IL",
      postalCode: "60069",
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Lincolnshire",
        containedInPlace: {
          "@type": "State",
          name: "Illinois"
        }
      },
      {
        "@type": "City",
        name: "Buffalo Grove",
        containedInPlace: {
          "@type": "State",
          name: "Illinois"
        }
      },
      {
        "@type": "City",
        name: "Deerfield",
        containedInPlace: {
          "@type": "State",
          name: "Illinois"
        }
      },
      {
        "@type": "City",
        name: "Lake Forest",
        containedInPlace: {
          "@type": "State",
          name: "Illinois"
        }
      },
      {
        "@type": "City",
        name: "Bannockburn",
        containedInPlace: {
          "@type": "State",
          name: "Illinois"
        }
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hair & Spa Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Hair Color",
            description: "Expert color services including balayage, highlights, and color correction"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Precision Hair Cuts",
            description: "Custom cutting techniques for all hair types"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hair Extensions",
            description: "Professional hair extension installation and maintenance"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Spa Services",
            description: "Relaxing spa treatments and wellness services"
          }
        }
      ]
    }
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Kossof Salon Spa",
  image: "https://kossofsalonspa.com/keeley.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "185 N Milwaukee Avenue, Suite 120",
    addressLocality: "Lincolnshire",
    addressRegion: "IL",
    postalCode: "60069",
    addressCountry: "US",
  },
  telephone: "847-821-6604",
  email: "info@kossofsalonspa.com",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "15:00",
    },
  ],
  priceRange: "$$",
  url: "https://kossofsalonspa.com",
  sameAs: [
    "https://www.facebook.com/kossofsalonspa",
    "https://www.instagram.com/kossofsalonspa",
    "https://www.tiktok.com/@kossof.salon.spa"
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who founded Kossof Salon Spa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kossof Salon Spa was created by Keeley Kossof and Amy Kraaz. They built their careers working alongside Keeley’s father, Teddie Kossof, at the renowned Teddie Kossof Salon Spa, and went on to found a destination built on excellence, integrity, and an elevated guest experience."
      }
    },
    {
      "@type": "Question",
      name: "What services does Kossof Salon Spa offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in custom hair color (including balayage and highlights), precision cuts, hair extensions, and spa services. Our team brings over 30 years of expertise to every appointment."
      }
    },
    {
      "@type": "Question",
      name: "Where is Kossof Salon Spa located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're located at 185 N Milwaukee Avenue, Suite 120, Lincolnshire, IL 60069. We serve Lincolnshire and surrounding North Shore communities including Buffalo Grove, Deerfield, Lake Forest, and Bannockburn."
      }
    },
    {
      "@type": "Question",
      name: "What areas does Kossof Salon Spa serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We proudly serve Lincolnshire, Buffalo Grove, Deerfield, Lake Forest, Bannockburn, Riverwoods, and the surrounding North Shore Chicago suburbs."
      }
    }
  ]
};

export default function AboutPage() {
  return (
    <>
      {/* Enhanced Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(foundersSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="pt-32 sm:pt-36 bg-[#faf8f5]" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
        <MeetTeamSection />

        <div className="container-custom mb-20 bg-white pt-10 pb-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Call to Action */}
            <div className="bg-[#251c18] rounded-lg shadow-xl p-8 md:p-12 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:8478216604"
                  className="bg-salon-raspberry hover:bg-salon-raspberry/90 text-white font-bold py-4 px-8 rounded-sm transition-colors text-lg shadow-lg tracking-widest uppercase"
                >
                  Call 847-821-6604
                </a>
                <Link
                  href="https://booking.mangomint.com/kossofsalonspa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-white/90 text-salon-brown font-bold py-4 px-8 rounded-sm transition-colors text-lg shadow-lg tracking-widest uppercase"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced AI Context (screen reader only) */}
        <div className="sr-only">
          <h2>Kossof Salon Spa - Lincolnshire IL Hair Salon</h2>
          <p>
            Founded by master stylists Keeley Kossof and Amy Kraaz. Over 30 years of expertise in custom hair color, precision cuts, balayage, highlights, hair extensions, and spa services.
          </p>
          <p>
            Trained at Teddie Kossof Salon. Specializing in color correction, lived-in color, dimensional highlights, textured cuts, and seamless extension methods.
          </p>
          <p>
            Located at 185 N Milwaukee Avenue, Suite 120, Lincolnshire, IL 60069. Serving Lincolnshire, Buffalo Grove, Deerfield, Lake Forest, Bannockburn, Riverwoods, and the North Shore Chicago suburbs.
          </p>
          <p>
            Services: Custom color, balayage, highlights, precision haircuts, hair extensions, color correction, keratin treatments, bridal styling, and spa services.
          </p>
        </div>
      </div>
    </>
  );
}