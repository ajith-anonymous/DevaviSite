import Container from '@/components/ui/container';

const clientLogos = [
  { name: 'Fix My Curls', src: '/client-fixmycurls.png' },
  { name: 'Goat Life', src: '/client-goatlife.png' },
];

export default function Hero() {
  return (
    <section className="relative pt-10 pb-12 md:pt-14 md:pb-16 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 -z-10" />

      {/* Signature watermark */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-end" style={{ zIndex: 0 }}>
        <img
          src="/devavi-signature.png"
          alt=""
          aria-hidden="true"
          className="w-[55vw] max-w-[620px] opacity-[0.35] select-none"
          style={{ filter: 'grayscale(1) brightness(6)', mixBlendMode: 'screen' }}
        />
      </div>

      {/* Ambient glow blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] animate-pulse-slow" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-accent/4 blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] rounded-full bg-accent/3 blur-[80px]" />
      </div>

      <Container className="relative z-10">
        <div className="text-left max-w-5xl">
          {/* Label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 mb-5 md:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
              Performance Marketing Agency
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground mb-6 md:mb-8">
            Performance Marketing<br />Built to Scale Your Brand.
          </h1>

          {/* Trusted by */}
          <div className="mb-0">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6">
              Trusted by teams who value clarity
            </p>
            <div className="overflow-hidden whitespace-nowrap relative">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              <div className="flex items-center animate-scroll">
                {[...clientLogos, ...clientLogos].map((logo, i) => (
                  <div key={i} className="flex items-center justify-center flex-shrink-0 mx-8 md:mx-12">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-8 md:h-10 w-auto max-w-[140px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
