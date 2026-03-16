import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const faqItems = [
  {
    question: "How do I book an appointment at Kossof Salon Spa?",
    answer:
      "You can book online at booking.mangomint.com/kossofsalonspa or call 847-821-6604. For updates and social contact options, you can also use the links in our website footer.",
  },
  {
    question: "What services do you offer at Kossof Salon Spa?",
    answer:
      "We offer salon services (haircuts, color, treatments, retexturizing, nails, waxing, lashes and brows, and makeup), spa services (facials, advanced facials, body treatments, body wraps, and massage therapies), and wedding services (bridal hair and makeup with in-salon and on-location options).",
  },
  {
    question: "Do new color or extension clients need a consultation?",
    answer:
      "Yes. We provide a complimentary 15-minute consultation for new color and extension clients to review hair history, goals, and service planning before booking major color or extension work.",
  },
  {
    question: "How should I prepare for wedding hair and makeup appointments?",
    answer:
      "For makeup appointments, please arrive with a clean face. For formal hair styling in bridal party services, hair should be clean and dry.",
  },
  {
    question: "Is there an extra fee for on-location wedding services?",
    answer:
      "Yes. Out-of-salon wedding services include a $250 out-of-salon fee plus 18% gratuity.",
  },
  {
    question: "What is your cancellation and rescheduling policy?",
    answer:
      "We require at least 24 hours notice for cancellations or rescheduling. Changes made with less than 24 hours notice, including no-shows, incur a 50% service charge that must be paid before future appointments are booked.",
  },
  {
    question: "Where is Kossof Salon Spa located?",
    answer:
      "Kossof Salon Spa is located at 185 N Milwaukee Avenue, Suite 120, Lincolnshire, IL 60069.",
  },
  {
    question: "What are your salon hours?",
    answer:
      "We are closed Monday. Tuesday, Wednesday, and Thursday: 9:00 AM to 7:00 PM. Friday: 9:00 AM to 6:00 PM. Saturday: 9:00 AM to 5:00 PM. Sunday: 9:00 AM to 3:00 PM.",
  },
];

export const metadata: Metadata = {
  title:
    "Kossof Salon Spa FAQ | Salon, Spa, and Wedding Services in Lincolnshire, IL",
  description:
    "Frequently asked questions about Kossof Salon Spa in Lincolnshire, IL, including booking, consultations, cancellation policy, salon services, spa services, wedding services, and business hours.",
  keywords: [
    "Kossof Salon Spa FAQ",
    "Lincolnshire salon FAQ",
    "salon services Lincolnshire IL",
    "spa services Lincolnshire IL",
    "wedding hair and makeup Lincolnshire",
    "hair color consultation",
    "salon cancellation policy",
    "bridal hair and makeup pricing",
  ],
  openGraph: {
    title: "Kossof Salon Spa FAQ",
    description:
      "Answers to common questions about appointments, policies, and salon, spa, and wedding services at Kossof Salon Spa.",
    type: "website",
    locale: "en_US",
    siteName: "Kossof Salon Spa",
  },
  alternates: {
    canonical: "https://kossofsalonspa.com/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Kossof Salon Spa",
  image: "https://kossofsalonspa.com/faq_bg.jpg",
  url: "https://kossofsalonspa.com",
  telephone: "847-821-6604",
  email: "info@kossofsalonspa.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "185 N Milwaukee Avenue, Suite 120",
    addressLocality: "Lincolnshire",
    addressRegion: "IL",
    postalCode: "60069",
    addressCountry: "US",
  },
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
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <main style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
        <section className="relative py-20 mb-12 pt-40 sm:pt-44">
          <div className="absolute inset-0 z-0">
            <Image
              src="/faq_bg.jpg"
              alt="Kossof Salon Spa in Lincolnshire, Illinois"
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
              Frequently Asked Questions
            </h1>
            <p className="text-white text-center text-lg max-w-3xl mx-auto">
              Answers about appointments, policies, and our salon, spa, and
              wedding service menus in Lincolnshire, Illinois.
            </p>
          </div>
        </section>

        <div className="container-custom mb-20">
          <section className="max-w-5xl mx-auto mb-8 bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Explore Our Service Menus
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              For the latest categories and pricing structure, visit the
              dedicated service pages:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Link
                href="/salon-services"
                className="inline-flex items-center justify-center rounded-md border border-salon-brown/20 px-4 py-3 text-sm font-semibold tracking-[0.08em] uppercase text-salon-brown hover:border-salon-blue/60 transition-colors"
              >
                Salon Services
              </Link>
              <Link
                href="/spa-services"
                className="inline-flex items-center justify-center rounded-md border border-salon-brown/20 px-4 py-3 text-sm font-semibold tracking-[0.08em] uppercase text-salon-brown hover:border-salon-blue/60 transition-colors"
              >
                Spa Services
              </Link>
              <Link
                href="/weddings-services"
                className="inline-flex items-center justify-center rounded-md border border-salon-brown/20 px-4 py-3 text-sm font-semibold tracking-[0.08em] uppercase text-salon-brown hover:border-salon-blue/60 transition-colors"
              >
                Wedding Services
              </Link>
            </div>
          </section>

          <section className="max-w-5xl mx-auto space-y-6">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="bg-white rounded-lg shadow-md p-6 md:p-8"
                itemScope
                itemType="https://schema.org/Question"
              >
                <h2
                  className="text-xl md:text-2xl font-bold text-gray-900 mb-3"
                  itemProp="name"
                >
                  {item.question}
                </h2>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p className="text-gray-600 leading-relaxed" itemProp="text">
                    {item.answer}
                  </p>
                </div>
              </article>
            ))}
          </section>

          <section className="max-w-5xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Kossof Salon Spa
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-2">
                <p className="font-semibold text-gray-900">Address</p>
                <p>185 N Milwaukee Avenue, Suite 120</p>
                <p>Lincolnshire, IL 60069</p>
                <p className="mt-4 font-semibold text-gray-900">Email</p>
                <p>
                  <a
                    href="mailto:info@kossofsalonspa.com"
                    className="text-primary hover:text-primary-dark transition-colors font-medium"
                  >
                    info@kossofsalonspa.com
                  </a>
                </p>
                <p className="mt-4 font-semibold text-gray-900">Phone</p>
                <p>
                  <a
                    href="tel:8478216604"
                    className="text-primary hover:text-primary-dark transition-colors font-medium text-lg"
                  >
                    847-821-6604
                  </a>
                </p>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Salon Hours
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-2">
                <div className="flex justify-between border-b border-gray-200 py-2">
                  <span className="font-semibold text-gray-900">MONDAY:</span>
                  <span>CLOSED</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 py-2">
                  <span className="font-semibold text-gray-900">TUESDAY:</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 py-2">
                  <span className="font-semibold text-gray-900">WEDNESDAY:</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 py-2">
                  <span className="font-semibold text-gray-900">THURSDAY:</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 py-2">
                  <span className="font-semibold text-gray-900">FRIDAY:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 py-2">
                  <span className="font-semibold text-gray-900">SATURDAY:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-semibold text-gray-900">SUNDAY:</span>
                  <span>9:00 AM - 3:00 PM</span>
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}
