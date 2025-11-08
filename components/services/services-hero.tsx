export default function ServicesHero() {
  return (
    <section className="relative h-[75vh] flex items-center justify-center overflow-hidden" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
      <div className="absolute inset-0 z-0">
        <video
          src="/services.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full px-4">
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase text-center" 
          style={{ 
            fontFamily: 'Montserrat, var(--font-montserrat), sans-serif', 
            fontWeight: 700, 
            letterSpacing: '0.05em', 
            lineHeight: '1.0', 
            color: '#f5f5f0' 
          }}
        >
          Services
        </h1>
      </div>
    </section>
  )
}

