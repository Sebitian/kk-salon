import Image from "next/image"
import Link from "next/link"
import { Users, Award, Sparkles } from "lucide-react"

const features = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Expert Talent",
    description: "Our team of certified professionals brings years of experience and creativity to every service.",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=400&fit=crop&crop=focalpoint&auto=format&q=80",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Premium Products",
    description: "We use only the highest quality, luxurious products to ensure the best results for our clients.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop&crop=focalpoint&auto=format&q=80",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Personalized Experience",
    description: "Enjoy a tailored approach to beauty, with services customized to your unique style and needs.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop&crop=focalpoint&auto=format&q=80",
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-salon-brown mb-6">Why Kossof Salon Spa?</h2>
          <div className="w-24 h-1 bg-salon-raspberry mx-auto"></div>
          <p className="text-xl text-salon-brown/60 max-w-3xl mx-auto mt-8 font-light">
            Experience the difference with our commitment to excellence, luxury, and personalized care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col group">
              <div className="relative h-80 w-full mb-8 overflow-hidden rounded-sm shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-salon-brown/20 group-hover:bg-salon-brown/0 transition-all duration-500"></div>
              </div>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-salon-blue/20 rounded-full mr-4 text-salon-raspberry">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-salon-brown">{feature.title}</h3>
              </div>
              <p className="text-salon-brown/70 leading-relaxed font-light">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/about"
            className="inline-flex items-center text-salon-raspberry font-semibold tracking-widest hover:text-salon-raspberry/80 transition-colors uppercase text-sm"
          >
            Learn More About Us
            <svg
              className="ml-3 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
