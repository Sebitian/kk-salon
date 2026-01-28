import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function MeetTeamSection() {
  // Array of team member data (images and names)
  const teamMembers = [
    { image: "/gif1.gif", name: "Keeley" },
    { image: "/gif2.gif", name: "Amy" },
    { image: "/gif3.gif", name: "Adam" },
    { image: "/gif4.gif", name: "Cynthia" },
    { image: "/gif5.gif", name: "Olivia" },
    { image: "/gif1.gif", name: "Sophie" },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center space-y-16" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
          {/* Title with context */}
          <div className="text-center space-y-4">
            <h2 
              className="text-5xl lg:text-7xl font-bold tracking-tight text-salon-brown"
            >
              Talent
            </h2>
            <div className="w-24 h-1 bg-salon-blue mx-auto mt-4"></div>
            <p className="text-salon-brown/70 text-xl lg:text-2xl font-light tracking-wide max-w-2xl mx-auto pt-4">
              30+ Years of Expertise in Hair & Spa Services
            </p>
          </div>

          {/* Description */}
          <p className="text-salon-brown text-lg lg:text-xl leading-relaxed text-center max-w-3xl mx-auto font-light">
            Kossof Salon Spa was created by <strong className="font-semibold">Keeley Kossof</strong> and <strong className="font-semibold">Amy Kraaz</strong> and built on a Kossof legacy of excellence spanning over <strong className="font-semibold">50 years</strong>.
            Our purpose is simple: create a destination where every guest feels confident, cared for, and truly valued.
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-full">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 group cursor-pointer"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-full border-4 border-salon-blue/30 group-hover:border-salon-blue transition-all duration-500 shadow-lg">
                  <Image
                    src={member.image}
                    alt={`${member.name} - Talent at Kossof Salon Spa`}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-110"
                    unoptimized
                  />
                </div>
                <span 
                  className="text-salon-brown font-medium text-lg tracking-wider"
                >
                  {member.name}
                </span>
              </div>
            ))}
          </div>

          {/* Brand Voice */}
          <p className="text-salon-brown/80 text-base lg:text-lg leading-relaxed text-center max-w-2xl mx-auto italic font-light">
            Our vision is to deliver <strong>Luxury, Beauty, and Experience</strong> in every visit—within a welcoming, fun, and social environment supported by top-notch hospitality and exceptional service.
          </p>

          {/* Button */}
          <div>
            <Button
              asChild
              size="lg"
              className="text-sm tracking-[0.2em] px-10 py-6 bg-salon-raspberry hover:bg-salon-raspberry/90 text-white transition-all duration-300 rounded-sm uppercase"
            >
              <Link href="/about">About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}