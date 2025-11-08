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
    // { image: "/gif2.gif", name: "Sophia" },
    // { image: "/gif3.gif", name: "Ryan" },
    // { image: "/gif4.gif", name: "Isabella" },
    // { image: "/gif5.gif", name: "Matthew" },
    // { image: "/gif1.gif", name: "Ava" },
    // { image: "/gif2.gif", name: "Christopher" },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#251c18' }}>
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center space-y-12" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
          {/* Title */}
          <h2 
            className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-center"
            style={{ color: '#f5f5dc' }}
          >
            The Team
          </h2>

          {/* First Description */}
          <p className="text-white text-lg lg:text-xl leading-relaxed text-center max-w-3xl mx-auto">
            Our talented stylists bring years of experience and passion to every appointment. 
            Each member of our team is dedicated to delivering exceptional service and helping 
            you look and feel your absolute best.
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto w-full">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg relative group cursor-pointer"
                style={{ border: '2px solid #f5f5dc' }}
              >
                <Image
                  src={member.image}
                  alt={`Team member ${member.name}`}
                  width={120}
                  height={120}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized // Add this for GIF support
                />
                {/* Name Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#f5f5dc] bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300">
                  <span 
                    className="text-black font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    {member.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Second Description */}
          <p className="text-white text-base lg:text-lg leading-relaxed text-center max-w-2xl mx-auto">
            Serving everyday luxury with intentional style, effortless charm, and the quiet confidence 
            of a team that gets it. Every cut, tone, and touch is considered. No excess—just refinement.
          </p>

          {/* Button */}
          <div>
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-4 bg-transparent border-2 transition-all duration-300 hover:bg-[#89cff0] hover:text-[#251c18]"
              style={{ 
                borderColor: '#89cff0',
                color: '#89cff0'
              }}
              variant="outline"
            >
              <Link href="/about">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
