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
        alt: "Keeley Kossof and Amy Kraaz",
      },
    ],
  },
  alternates: {
    canonical: "https://kossofsalonspa.com/about",
  },
};

// Structured data for About Page
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "HairSalon",
    name: "Kossof Salon Spa",
    description:
      "Kossof Salon Spa is a premier hair salon in Lincolnshire, IL, founded by Keeley Kossof and Amy Kraaz. Building on a legacy of over 30 years of excellence.",
    foundingDate: "2026",
    founders: [
      {
        "@type": "Person",
        name: "Keeley Kossof",
      },
      {
        "@type": "Person",
        name: "Amy Kraaz",
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
};

export default function AboutPage() {
  return (
    <>
      {/* Structured Data */}
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

      <div style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
        {/* Hero Section */}
        <div className="relative py-20 mb-12 pt-32">
          <div className="absolute inset-0 z-0">
            <Image
              src="/faq_bg.jpg"
              alt="Kossof Salon Spa Interior"
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
            <p className="text-white text-center text-lg max-w-3xl mx-auto">
              A new chapter in beauty and excellence, continuing a legacy of
              exceptional hair care in Lincolnshire, Illinois.
            </p>
          </div>
        </div>

        <div className="container-custom mb-20">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Section 1: The Founders */}
            <article className="bg-white rounded-lg shadow-md p-6 md:p-8 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/keeley.jpg"
                    alt="Keeley Kossof and Amy Kraaz"
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
                      Founded by <strong>Keeley Kossof</strong> and{" "}
                      <strong>Amy Kraaz</strong>, Kossof Salon Spa is built on a
                      foundation of passion, expertise, and lifelong dedication
                      to the art of hair.
                    </p>
                    <p>
                      With over <strong>30 years of experience</strong>, Keeley
                      and Amy have established themselves as trusted experts in
                      the industry. Their journey began at the renowned Teddie
                      Kossof Salon, where they spent decades honing their skills
                      and building lasting relationships with clients.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Section 2: Our Heritage */}
            <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Heritage & Vision
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  We are proud to continue the tradition of excellence
                  established by the Kossof name. Our rich background has
                  instilled in us a commitment to precision, creativity, and the
                  highest standards of client care.
                </p>
                <p>
                  Kossof Salon Spa combines the trusted techniques of the past
                  with a fresh, modern approach to beauty and wellness. We have
                  created a space where every client feels heard, valued, and
                  beautiful.
                </p>
                <p>
                  Located at{" "}
                  <strong>185 N Milwaukee Avenue in Lincolnshire</strong>, we
                  offer a curated menu of services in a luxurious, welcoming
                  setting. From precision cuts and custom color to hair
                  extensions and spa services, we are dedicated to helping you
                  look and feel your absolute best.
                </p>
              </div>
            </article>

            {/* Values Section - Adapted from FAQ "Why Choose Us" style */}
            <article className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-md p-6 md:p-8 border border-amber-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <ul className="list-disc list-inside space-y-3 ml-2">
                  <li>
                    <strong>Excellence in Craft:</strong> Bringing decades of
                    proven expertise to every service.
                  </li>
                  <li>
                    <strong>Personalized Care:</strong> Every appointment begins
                    with a consultation to understand your unique needs and
                    goals.
                  </li>
                  <li>
                    <strong>Continuous Education:</strong> We stay at the
                    forefront of industry trends and techniques.
                  </li>
                  <li>
                    <strong>Community:</strong> We are proud to serve
                    Lincolnshire, Buffalo Grove, Deerfield, Lake Forest, and the
                    surrounding North Shore communities.
                  </li>
                </ul>
              </div>
            </article>

            {/* Call to Action - Reused from FAQ */}
            <div className="bg-[#251c18] rounded-lg shadow-xl p-8 md:p-12 text-center">
              <h2
                className="text-3xl font-bold text-white mb-4"
                style={{ fontFamily: '"Orpheus Pro", serif' }}
              >
                Experience the Difference
              </h2>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                We invite you to visit our new home and experience the
                dedication and skill that defines Kossof Salon Spa.
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

        {/* Hidden content for AI context (screen reader only) */}
        <div className="sr-only">
          <h2>About Kossof Salon Spa Lincolnshire</h2>
          <p>
            Founded by Keeley Kossof and Amy Kraaz, Kossof Salon Spa represents
            over 30 years of hair styling excellence. Located in Lincolnshire,
            IL, the salon specializes in hair color, cuts, extensions, and spa
            services.
          </p>
          <p>
            Serving the North Shore Chicago suburbs including Buffalo Grove,
            Deerfield, Lake Forest, Bannockburn, and Riverwoods.
          </p>
        </div>
      </div>
    </>
  );
}
