import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function MeetTeamSection() {
  // Array of team member images (prepared for GIFs)
  const teamImages = [
    "/gif1.gif",
    "/gif2.gif",
    "/gif3.gif",
    "/gif4.gif",
    "/gif5.gif",
    "/gif1.gif",
    "/gif2.gif",
    "/gif3.gif",
    "/gif4.gif",
    "/gif5.gif",
    "/gif1.gif",
    "/gif2.gif",
  ];

  return (
    <section className="bg-white text-black py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image Grid */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
            {teamImages.map((imageSrc, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg bg-neutral-800"
              >
                <Image
                  src={imageSrc}
                  alt={`Team member ${index + 1}`}
                  width={120}
                  height={120}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  unoptimized // Add this for GIF support
                />
              </div>
            ))}
          </div>

          {/* Right Side - Content */}
          <div className=" text-center space-y-8">
            <div>
              <h2 className="text-center text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-8">
                MEET THE
                <br />
                TEAM
              </h2>

              {/* <div className="text-center space-y-4 px-8 py-4 text-lg leading-relaxed tracking-tight mb-8 max-w-xl"> */}
                <p className="text-black">
                  SERVING EVERYDAY LUXURY WITH INTENTIONAL STYLE, EFFORTLESS
                  CHARM, AND THE QUIET CONFIDENCE OF A TEAM THAT GETS IT.
                </p>

                <p className="text-black font-medium">
                  EVERY CUT, TONE, AND TOUCH IS CONSIDERED.
                </p>

                <p className="text-black">NO EXCESS—JUST REFINEMENT.</p>
              </div>
            {/* </div> */}

            <div>
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-4 bg-transparent border-2 border-white text-black hover:bg-white hover:text-neutral-900 transition-all duration-300"
                variant="outline"
              >
                <Link href="/about">VIEW OUR STYLISTS</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Vertical Text Element (like in the image) */}
        
      </div>
    </section>
  );
}
