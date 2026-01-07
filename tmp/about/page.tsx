import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - Kossof Salon Spa | Lincolnshire Hair Salon",
  description:
    "Learn about Kossof Salon Spa, founded by Keeley Kossof and Amy Kraaz. Over 30 years of hair styling expertise in Lincolnshire, IL. Continuing a legacy of excellence.",
  openGraph: {
    title: "About Kossof Salon Spa - Lincolnshire's Premier Hair Salon",
    description:
      "Discover the story behind Kossof Salon Spa. Founded by industry experts Keeley Kossof and Amy Kraaz, bringing over 30 years of excellence to Lincolnshire.",
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
      yearsOfExperience: "30+",
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
      yearsOfExperience: "30+",
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
      "Premier hair salon in Lincolnshire, IL, founded by master stylists Keeley Kossof and Amy Kraaz. Specializing in custom color, precision cuts, hair extensions, and spa services with over 30 years of combined expertise.",
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
        text: "Kossof Salon Spa was founded by Keeley Kossof and Amy Kraaz, master stylists with over 30 years of combined experience. Both trained at the renowned Teddie Kossof Salon before opening their own location in Lincolnshire, IL."
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
              Founded by master stylists Keeley Kossof and Amy Kraaz. Over 30 years of expertise in custom color, precision cuts, and hair extensions. Serving Lincolnshire and the North Shore.
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
                      <strong>Keeley Kossof</strong> and{" "}
                      <strong>Amy Kraaz</strong> are master stylists who founded Kossof Salon Spa with a shared vision: to bring world-class hair services to Lincolnshire, Illinois.
                    </p>
                    <p>
                      With over <strong>30 years of combined experience</strong>, both trained at the prestigious <strong>Teddie Kossof Salon</strong>, where they mastered advanced techniques in <strong>custom color</strong>, <strong>precision cutting</strong>, <strong>balayage</strong>, and <strong>hair extensions</strong>.
                    </p>
                    <p>
                      Their expertise spans everything from <strong>color correction</strong> and <strong>highlights</strong> to <strong>bridal styling</strong> and <strong>keratin treatments</strong>. They've built lasting relationships with clients throughout the North Shore by delivering consistently exceptional results.
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
                  We continue the tradition of excellence established by the <strong>Kossof name</strong>—a legacy synonymous with precision, artistry, and uncompromising quality in hair care.
                </p>
                <p>
                  Kossof Salon Spa blends time-tested techniques with modern innovation. We specialize in <strong>lived-in color</strong>, <strong>dimensional highlights</strong>, <strong>textured cuts</strong>, and <strong>seamless extensions</strong>—services that enhance your natural beauty while reflecting your personal style.
                </p>
                <p>
                  Located at{" "}
                  <strong>185 N Milwaukee Avenue, Suite 120 in Lincolnshire, IL</strong>, we serve clients from <strong>Buffalo Grove</strong>, <strong>Deerfield</strong>, <strong>Lake Forest</strong>, <strong>Bannockburn</strong>, <strong>Riverwoods</strong>, and throughout the <strong>North Shore Chicago suburbs</strong>.
                </p>
                <p>
                  Whether you're seeking a <strong>transformative color service</strong>, a <strong>precision haircut</strong>, or <strong>luxury extensions</strong>, our team provides personalized consultations and expert execution in a welcoming, upscale environment.
                </p>
              </div>
            </article>

            {/* Values Section - Enhanced with Specifics */}
            <article className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-md p-6 md:p-8 border border-amber-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Kossof Salon Spa
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <ul className="list-disc list-inside space-y-3 ml-2">
                  <li>
                    <strong>Master-Level Expertise:</strong> Over 30 years of experience in advanced color techniques, precision cutting, and hair extensions.
                  </li>
                  <li>
                    <strong>Teddie Kossof Legacy:</strong> Trained at one of Chicago's most respected salons, bringing that caliber of service to Lincolnshire.
                  </li>
                  <li>
                    <strong>Personalized Consultations:</strong> Every appointment begins with an in-depth discussion of your hair goals, lifestyle, and maintenance preferences.
                  </li>
                  <li>
                    <strong>Advanced Techniques:</strong> Specializing in balayage, color melting, lived-in color, and seamless extension methods.
                  </li>
                  <li>
                    <strong>North Shore Convenience:</strong> Serving Lincolnshire, Buffalo Grove, Deerfield, Lake Forest, Bannockburn, and surrounding communities.
                  </li>
                  <li>
                    <strong>Luxury Experience:</strong> Upscale salon environment with spa-quality amenities and attentive service.
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
                Book your appointment with Keeley, Amy, or one of our talented stylists. Serving Lincolnshire and the North Shore with over 30 years of expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:8475718078"
                  className="bg-amber-300 hover:bg-amber-400 text-[#251c18] font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg"
                >
                  Call (847) 571-8078
                </a>
                <Link
                  href="/booking"
                  className="bg-white hover:bg-gray-100 text-[#251c18] font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg"
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