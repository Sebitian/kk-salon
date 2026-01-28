import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
  telephone: "+18475718078",
  email: "info@kossofsalonspa.com",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Saturday"],
      opens: "09:00",
      closes: "16:00",
    },
  ],
  priceRange: "$$",
  url: "https://kossofsalonspa.com",
  sameAs: [
    "https://www.facebook.com/kossofsalonspa",
    "https://www.instagram.com/kossofsalonspa"
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

      <div style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
        {/* Hero Section */}
        <div className="relative py-20 mb-12 pt-32">
          <div className="absolute inset-0 z-0">
            <Image
              src="/faq_bg.jpg"
              alt="Kossof Salon Spa Interior - Lincolnshire IL Hair Salon"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
          </div>

          <div className="container-custom relative z-10">
            <h1
              className="heading-xl text-white text-center mb-4"
              style={{ fontFamily: '"Orpheus Pro", serif' }}
            >
              About Kossof Salon Spa
            </h1>
            <p className="text-white text-center text-lg md:text-xl max-w-3xl mx-auto">
              Kossof Salon Spa was created by Keeley Kossof and Amy Kraaz—built on a Kossof legacy of excellence spanning over 50 years and a shared commitment to Luxury, Beauty, and Experience in every visit.
            </p>
          </div>
        </div>

        <div className="container-custom mb-20">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Section 1: The Founders - Enhanced */}
            <article className="bg-white rounded-lg shadow-md p-6 md:p-8 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/keeley.jpg"
                    alt="Keeley Kossof and Amy Kraaz - Master Stylists and Founders"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: '"Orpheus Pro", serif' }}
                  >
                    Meet the Founders
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>
                      <strong>Kossof Salon Spa</strong> was created by <strong>Keeley Kossof</strong> and <strong>Amy Kraaz</strong>, two experienced hairstylists who built their careers working alongside Keeley’s father, <strong>Teddie Kossof</strong>, at the renowned <strong>Teddie Kossof Salon Spa</strong>.
                    </p>
                    <p>
                      With a legacy of excellence spanning over <strong>50 years</strong>, the Kossof name has long been trusted for beauty, professionalism, and an elevated guest experience. For several years, Keeley and Amy also managed <strong>Teddie Kossof Salon Spa</strong> together—strengthening their leadership skills and deepening their shared commitment to running a salon with excellence and integrity.
                    </p>
                    <p>
                      Through years of working together, Keeley and Amy not only refined their craft—they also became close friends. Their personalities balance each other perfectly, creating a dynamic partnership built on trust, passion, and a shared commitment to excellence. Together, they founded Kossof Salon Spa with one clear purpose: to create a destination where every guest feels confident, cared for, and truly valued.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Section 2: Our Heritage - Enhanced */}
            <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Heritage & Vision
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  At Kossof Salon Spa, our vision is simple—to deliver <strong>Luxury, Beauty, and Experience</strong> in every visit.
                </p>
                <p>
                  We are proud to offer a welcoming, fun, and social environment where clients can relax, connect, and enjoy an elevated salon and spa experience supported by top-notch hospitality and exceptional service.
                </p>
                <p>
                  Located at <strong>185 N Milwaukee Avenue, Suite 120 in Lincolnshire, IL</strong>, we’re here to make every guest feel confident, cared for, and truly valued.
                </p>
              </div>
            </article>

            {/* Values Section - Enhanced with Specifics */}
            <article className="bg-[#ede7e4]/30 rounded-lg shadow-md p-6 md:p-8 border border-[#ede7e4]">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Kossof Salon Spa
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <ul className="list-disc list-inside space-y-3 ml-2">
                  <li>
                    <strong>Legacy of Excellence:</strong> Built on the Kossof name—trusted for beauty, professionalism, and an elevated guest experience for over 50 years.
                  </li>
                  <li>
                    <strong>Leadership & Integrity:</strong> Founded by Keeley Kossof and Amy Kraaz, who led and managed Teddie Kossof Salon Spa together for years.
                  </li>
                  <li>
                    <strong>Elevated Hospitality:</strong> Top-notch service and care designed to make every guest feel confident, cared for, and truly valued.
                  </li>
                  <li>
                    <strong>Welcoming Atmosphere:</strong> A fun, social environment where clients can relax, connect, and enjoy the experience.
                  </li>
                  <li>
                    <strong>Built on Partnership:</strong> A dynamic founder duo whose personalities balance perfectly—creating a culture rooted in trust and excellence.
                  </li>
                  <li>
                    <strong>Luxury, Beauty, Experience:</strong> Our simple promise—delivered with intention, every visit.
                  </li>
                </ul>
              </div>
            </article>

            {/* Call to Action */}
            <div className="bg-[#251c18] rounded-lg shadow-xl p-8 md:p-12 text-center">
              <h2
                className="text-3xl font-bold text-white mb-4"
                style={{ fontFamily: '"Orpheus Pro", serif' }}
              >
                Experience Master-Level Hair Care
              </h2>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                Book your appointment and experience Luxury, Beauty, and Experience in every visit—supported by top-notch hospitality and exceptional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:8475718078"
                  className="bg-salon-raspberry hover:bg-salon-raspberry/90 text-white font-bold py-4 px-8 rounded-sm transition-colors text-lg shadow-lg tracking-widest uppercase"
                >
                  Call (847) 571-8078
                </a>
                <Link
                  href="/booking"
                  className="bg-white hover:bg-white/90 text-[#251c18] font-bold py-4 px-8 rounded-sm transition-colors text-lg shadow-lg tracking-widest uppercase"
                >
                  Book Online
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