import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "FAQ - Hair Salon Questions Answered | Kossof Salon Spa Lincolnshire",
  description:
    "Get answers about appointments, consultations, cancellation policies, and services at Kossof Salon Spa in Lincolnshire, IL. 24-hour cancellation policy, complimentary consultations for color clients.",
  openGraph: {
    title: "Frequently Asked Questions - Kossof Salon Spa",
    description:
      "Find answers about booking, consultations, policies, and services at our Lincolnshire hair salon.",
    type: "website",
    locale: "en_US",
    siteName: "Kossof Salon Spa",
  },
  alternates: {
    canonical: "https://kossofsalonspa.com/faq",
  },
};

// Structured data for FAQ
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best way to make an appointment at Kossof Salon Spa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book an appointment by calling 847-821-6604, messaging us on Facebook or Instagram, or contacting your stylist directly through their Instagram page. All social media links are available on our website.",
      },
    },
    {
      "@type": "Question",
      name: "Do you require consultations for new clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we require a complimentary 15-minute consultation for new color and extension clients. During the consultation, we discuss your hair history, goals, budget, and schedule. We recommend bringing inspiration pictures to help us understand your vision.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Kossof Salon Spa located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are located at 185 N Milwaukee Avenue, Suite 120, Lincolnshire, IL 60069.",
      },
    },
    {
      "@type": "Question",
      name: "How can I cancel or reschedule my appointment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can cancel or reschedule by replying to your confirmation text or calling 847-821-6604. We require 24-hour notice for cancellations or rescheduling to avoid a 50% service charge.",
      },
    },
    {
      "@type": "Question",
      name: "What is your cancellation policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We require 24 hours notice for all cancellations or rescheduling. Cancellations, reschedules, or no-shows with less than 24 hours notice will be charged 50% of the scheduled service cost. This fee must be paid before booking future appointments.",
      },
    },
    {
      "@type": "Question",
      name: "What is your product return policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Products can be returned for exchange or store credit within 10 days of purchase. We do not offer cash refunds, only salon credit.",
      },
    },
    {
      "@type": "Question",
      name: "What if I'm not satisfied with my service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you're not fully satisfied, please let us know at the end of your service or within 1 week. We will schedule a complimentary corrective service. All services are non-refundable, but we'll make every effort to find a solution.",
      },
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Kossof Salon Spa",
  image: "https://kossofsalonspa.com/faq_bg.jpg",
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

export default function FAQ() {
  return (
    <>
      {/* Structured Data */}
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

      <div style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
        {/* Hero Section */}
        <div className="relative py-20 mb-12 pt-32">
          <div className="absolute inset-0 z-0">
            <Image
              src="/faq_bg.jpg"
              alt="Kossof Salon Spa interior - Lincolnshire hair salon"
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
              Everything you need to know about booking appointments,
              consultations, and policies at Kossof Salon Spa in Lincolnshire,
              Illinois.
            </p>
          </div>
        </div>

        <div className="container-custom mb-20">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* FAQ Item 1 - Booking */}
            <article
              className="bg-white rounded-lg shadow-md p-6 md:p-8"
              itemScope
              itemType="https://schema.org/Question"
            >
              <h2
                className="text-2xl font-bold text-gray-900 mb-4"
                itemProp="name"
              >
                What is the best way to make an appointment at Kossof Salon Spa?
              </h2>
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p className="text-gray-600 leading-relaxed" itemProp="text">
                  We're excited to have you! You can book an appointment by
                  calling{" "}
                  <a
                    href="tel:8478216604"
                    className="text-primary hover:text-primary-dark font-semibold"
                  >
                    847-821-6604
                  </a>
                  , messaging us on Facebook or Instagram, or contacting your
                  stylist directly through their Instagram page. All social
                  media links are available at the top of our website and on our
                  "Meet the Team" page.
                </p>
              </div>
            </article>

            {/* FAQ Item 2 - Consultations */}
            <article
              className="bg-white rounded-lg shadow-md p-6 md:p-8"
              itemScope
              itemType="https://schema.org/Question"
            >
              <h2
                className="text-2xl font-bold text-gray-900 mb-4"
                itemProp="name"
              >
                Do you require consultations for new clients?
              </h2>
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p className="text-gray-600 leading-relaxed" itemProp="text">
                  Yes, we require a{" "}
                  <strong>complimentary 15-minute consultation</strong> for new
                  color and extension clients. During the consultation, we
                  discuss your hair history, hair goals, budget, and schedule.
                  This is a great way to get to know your stylist and vice
                  versa! We recommend bringing inspiration pictures to help us
                  understand your vision.
                </p>
              </div>
            </article>

            {/* FAQ Item 3 - Location */}
            <article
              className="bg-white rounded-lg shadow-md p-6 md:p-8"
              itemScope
              itemType="https://schema.org/Question"
            >
              <h2
                className="text-2xl font-bold text-gray-900 mb-4"
                itemProp="name"
              >
                Where is Kossof Salon Spa located?
              </h2>
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p className="text-gray-600 leading-relaxed" itemProp="text">
                  We are located in <strong>Lincolnshire, Illinois</strong>. Our
                  address is{" "}
                  <strong>
                    185 N Milwaukee Avenue, Suite 120, Lincolnshire, IL 60069
                  </strong>
                  . We serve clients throughout the North Shore area including
                  Buffalo Grove, Deerfield, and Lake Forest.
                </p>
              </div>
            </article>

            {/* FAQ Item 4 - Cancellation */}
            <article
              className="bg-white rounded-lg shadow-md p-6 md:p-8"
              itemScope
              itemType="https://schema.org/Question"
            >
              <h2
                className="text-2xl font-bold text-gray-900 mb-4"
                itemProp="name"
              >
                How can I cancel or reschedule my appointment?
              </h2>
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p className="text-gray-600 leading-relaxed" itemProp="text">
                  You can request a rescheduling when you receive your
                  confirmation text, or call us at{" "}
                  <a
                    href="tel:8478216604"
                    className="text-primary hover:text-primary-dark font-semibold"
                  >
                    847-821-6604
                  </a>{" "}
                  and we're happy to assist.{" "}
                  <strong>
                    We require 24-hour notice for cancellations or rescheduling
                    without penalty.
                  </strong>{" "}
                  Cancellations or reschedules with less than 24 hours notice
                  will incur a 50% service charge.
                </p>
              </div>
            </article>

            {/* FAQ Item 5 - Policies */}
            <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What policies do you have in place?
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-6">
                <div itemScope itemType="https://schema.org/Question">
                  <h3
                    className="font-semibold text-gray-900 mb-2 text-lg"
                    itemProp="name"
                  >
                    Cancellation and Rescheduling Policy
                  </h3>
                  <div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text">
                      We require <strong>24 hours notice</strong> for all
                      cancellations or rescheduling. If your appointment is
                      cancelled, rescheduled, or no-showed with less than 24
                      hours notice, you will be charged{" "}
                      <strong>50% of the scheduled services</strong>. This fee
                      must be paid before booking future appointments. We
                      understand that life happens and some things are out of
                      your control. We do our best to be gracious and sensitive
                      to all situations while protecting our stylists' time.
                    </p>
                  </div>
                </div>

                <div itemScope itemType="https://schema.org/Question">
                  <h3
                    className="font-semibold text-gray-900 mb-2 text-lg"
                    itemProp="name"
                  >
                    Product Returns and Exchanges
                  </h3>
                  <div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text">
                      We love our products and know you will too! If for any
                      reason you're dissatisfied with your purchase, please
                      return the product for an exchange or store credit{" "}
                      <strong>within 10 days of purchase</strong>. We do not
                      offer cash refunds, only salon credit.
                    </p>
                  </div>
                </div>

                <div itemScope itemType="https://schema.org/Question">
                  <h3
                    className="font-semibold text-gray-900 mb-2 text-lg"
                    itemProp="name"
                  >
                    Client Satisfaction Guarantee
                  </h3>
                  <div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <div itemProp="text">
                      <p>
                        No stone is left unturned to ensure you're fully
                        satisfied with your experience at Kossof Salon Spa. If
                        you're not fully satisfied, please let us know at the
                        end of your service or <strong>within 1 week</strong> of
                        your service being completed. All services are
                        non-refundable, but we'll be more than happy to schedule
                        a <strong>complimentary corrective service</strong>. We
                        will always make every effort to find a solution.
                      </p>
                      <p className="mt-3">
                        If we're contacted within the 1-week window, we're more
                        than happy to provide a complimentary service to correct
                        any issues. However, if you've simply changed your mind
                        about what you want for your hair color, there will be a
                        charge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Contact Section */}
            <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Kossof Salon Spa
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-2">
                <p className="font-semibold text-gray-900">Address:</p>
                <p>185 N Milwaukee Avenue, Suite 120</p>
                <p>Lincolnshire, IL 60069</p>
                <p className="mt-4 font-semibold text-gray-900">Email:</p>
                <p>
                  <a
                    href="mailto:info@kossofsalonspa.com"
                    className="text-primary hover:text-primary-dark transition-colors font-medium"
                  >
                    info@kossofsalonspa.com
                  </a>
                </p>
                <p className="mt-4 font-semibold text-gray-900">Phone:</p>
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
            {/* Hours Section */}
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
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 py-2">
                  <span className="font-semibold text-gray-900">
                    WEDNESDAY:
                  </span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 py-2">
                  <span className="font-semibold text-gray-900">THURSDAY:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 py-2">
                  <span className="font-semibold text-gray-900">FRIDAY:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-semibold text-gray-900">SATURDAY:</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
              </div>
            </article>

            {/* Additional SEO Content for AI */}
            <article className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-md p-6 md:p-8 border border-amber-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Kossof Salon Spa?
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  Located in the heart of{" "}
                  <strong>Lincolnshire, Illinois</strong>, Kossof Salon Spa has
                  been serving the North Shore community with exceptional hair
                  and spa services. Our expert stylists specialize in:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Hair Coloring & Balayage</strong> - Custom color
                    consultations included
                  </li>
                  <li>
                    <strong>Hair Extensions</strong> - Complimentary
                    consultation for new clients
                  </li>
                  <li>
                    <strong>Precision Haircuts</strong> - For all hair types and
                    styles
                  </li>
                  <li>
                    <strong>Keratin Treatments</strong> - Smooth, frizz-free
                    results
                  </li>
                  <li>
                    <strong>Spa Services</strong> - Facials, massages, and more
                  </li>
                </ul>
                <p className="mt-4">
                  We proudly serve clients from{" "}
                  <strong>
                    Buffalo Grove, Deerfield, Lake Forest, Bannockburn,
                    Riverwoods, and throughout Lake County
                  </strong>
                  . Our 24-hour cancellation policy ensures fair scheduling for
                  all clients while our complimentary consultations guarantee
                  you'll love your results.
                </p>
              </div>
            </article>

            {/* Call to Action */}
            <div className="bg-[#251c18] rounded-lg shadow-xl p-8 md:p-12 text-center">
              <h2
                className="text-3xl font-bold text-white mb-4"
                style={{ fontFamily: '"Orpheus Pro", serif' }}
              >
                Ready to Book Your Appointment?
              </h2>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                Call us today or visit our booking page to schedule your
                complimentary consultation. Our expert stylists are ready to
                bring your hair vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:8478216604"
                  className="bg-amber-300 hover:bg-amber-400 text-[#251c18] font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg"
                >
                  Call 847-821-6604
                </a>
                <a
                  href="https://booking.mangomint.com/kossofsalonspa"
                  className="bg-white hover:bg-gray-100 text-[#251c18] font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg"
                >
                  Book Online
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hidden content for AI context (screen reader only) */}
        <div className="sr-only">
          <h2>About Kossof Salon Spa Lincolnshire</h2>
          <p>
            Kossof Salon Spa is a full-service hair salon and day spa located at
            185 N Milwaukee Avenue, Suite 120 in Lincolnshire, Illinois 60069.
            We specialize in hair coloring, balayage, hair extensions, precision
            haircuts, keratin treatments, and spa services. We serve clients
            throughout Lake County including Buffalo Grove, Deerfield, Lake
            Forest, Bannockburn, and Riverwoods.
          </p>
          <p>
            Our policies include: 24-hour cancellation notice required,
            complimentary 15-minute consultations for new color and extension
            clients, 10-day product return window for store credit, and a 1-week
            satisfaction guarantee with complimentary corrective services.
          </p>
          <p>
            Hours: Tuesday, Thursday, Friday 9am-6pm. Wednesday and Saturday
            9am-4pm. Closed Monday. Contact: 847-821-6604 or
            info@kossofsalonspa.com
          </p>
        </div>
      </div>
    </>
  );
}
