import Container from '@/components/ui/container';

const clientLogos = [
  { name: 'Fix My Curls', src: '/client-fixmycurls.png' },
  { name: 'Goat Life', src: '/client-goatlife.png' },
];

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 -z-10" />

      {/* Ambient glow blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] animate-pulse-slow" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-accent/4 blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] rounded-full bg-accent/3 blur-[80px]" />
      </div>

      <Container>
        <div className="text-left max-w-5xl">
          {/* Label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 mb-8 md:mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
              Performance Marketing Agency
            </span>
          </div>

          <h1 className="text-hero text-foreground mb-6 md:mb-8">
            Performance Marketing Built to Scale Your Brand.
          </h1>

          <p className="text-base md:text-xl text-muted-foreground mb-10 md:mb-14 max-w-xl leading-relaxed">
            Co-founder-led execution, ruthless clarity, results you can actually ship.
            We work with no more than 20 clients to ensure deep involvement and attention to detail.
          </p>

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
