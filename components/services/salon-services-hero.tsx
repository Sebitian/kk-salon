export default function SalonServicesHero() {
  return (
    <section className="pt-32 sm:pt-36 pb-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div
          className="text-center space-y-4"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-salon-brown">
            Salon Services
          </h1>
          <div className="w-24 h-1 bg-salon-blue mx-auto mt-4" />
          <p className="text-salon-brown/70 text-xl lg:text-2xl font-light tracking-wide max-w-2xl mx-auto pt-4">
            Hair, Nails, Wedding & Beauty
          </p>
          <p className="text-salon-brown/80 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto italic font-light pt-2">
            Explore our full menu of elevated salon services—from precision cuts and custom color
            to nail care, waxing, makeup artistry, and bridal styling—delivered with top-notch
            hospitality and exceptional service.
          </p>
        </div>
      </div>
    </section>
  )
}
