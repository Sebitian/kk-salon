"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Scissors, Palette, Sparkles, Users } from "lucide-react"

// Gallery data with size specifications for mosaic layout
const galleryItems = {
  all: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop&crop=focalpoint&auto=format&q=80",
      alt: "Salon interior",
      category: "interior",
      size: "large", // 2x2
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop&crop=focalpoint&auto=format&q=80",
      alt: "Hairstyling",
      category: "hair",
      size: "wide", // 2x1
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&h=600&fit=crop&crop=focalpoint&auto=format&q=80",
      alt: "Nail art design",
      category: "nails",
      size: "small", // 1x1
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop&crop=focalpoint&auto=format&q=80",
      alt: "Makeup look",
      category: "makeup",
      size: "tall", // 1x2
    },
    {
      id: 5,
      src: "/gallery4.jpg",
      alt: "Beard trimming",
      category: "hair",
      size: "small", // 1x1
    },
    {
      id: 6,
      src: "/gallery1.jpg",
      alt: "Bridal makeup",
      category: "makeup",
      size: "wide", // 2x1
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&h=600&fit=crop&crop=focalpoint&auto=format&q=80",
      alt: "Nail art design",
      category: "nails",
      size: "small", // 1x1
    },
    {
      id: 8,
      src: "/gallery2.jpg",
      alt: "Men's hair coloring",
      category: "hair",
      size: "large", // 2x2
    },
    {
      id: 9,
      src: "/gallery3.jpg",
      alt: "Women's hair coloring",
      category: "hair",
      size: "small", // 1x1
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&h=600&fit=crop&crop=focalpoint&auto=format&q=80",
      alt: "Pedicure",
      category: "nails",
      size: "tall", // 1x2
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop&crop=focalpoint&auto=format&q=80",
      alt: "Party makeup",
      category: "makeup",
      size: "small", // 1x1
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=800&h=600&fit=crop&crop=focalpoint&auto=format&q=80",
      alt: "Women's haircut",
      category: "hair",
      size: "wide", // 2x1
    },
  ],
  get hair() {
    return this.all.filter((item) => item.category === "hair")
  },
  get nails() {
    return this.all.filter((item) => item.category === "nails")
  },
  get makeup() {
    return this.all.filter((item) => item.category === "makeup")
  },
}

// Helper function to get grid span classes based on size
const getSizeClasses = (size: string) => {
  switch (size) {
    case "large":
      return "col-span-1 row-span-2 md:col-span-2 md:row-span-2"
    case "wide":
      return "col-span-1 row-span-1 md:col-span-2 md:row-span-1"
    case "tall":
      return "col-span-1 row-span-2 md:col-span-1 md:row-span-2"
    case "small":
    default:
      return "col-span-1 row-span-1"
  }
}

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedAlt, setSelectedAlt] = useState<string>("")

  return (
    <>
      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>All</span>
            </TabsTrigger>
            <TabsTrigger value="hair" className="flex items-center gap-2">
              <Scissors className="h-4 w-4" />
              <span>Hair</span>
            </TabsTrigger>
            <TabsTrigger value="nails" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              <span>Nails</span>
            </TabsTrigger>
            <TabsTrigger value="makeup" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span>Makeup</span>
            </TabsTrigger>
          </TabsList>
        </div>

        {Object.keys(galleryItems).map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-3 md:gap-4">
              {galleryItems[category as keyof typeof galleryItems].map((item) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <div
                      className={`relative overflow-hidden rounded-lg cursor-pointer group transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${getSizeClasses(item.size)}`}
                      onClick={() => {
                        setSelectedImage(item.src)
                        setSelectedAlt(item.alt)
                      }}
                    >
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white font-medium text-sm md:text-base">{item.alt}</span>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <div className="relative aspect-video w-full">
                      <Image src={item.src || "/placeholder.svg"} alt={item.alt} fill className="object-contain" />
                    </div>
                    <p className="text-center text-gray-700 mt-2 font-medium">{item.alt}</p>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </>
  )
}
