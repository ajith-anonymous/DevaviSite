import Container from '@/components/ui/container';

const clientLogos = [
  { name: 'Fix My Curls', src: '/client-fixmycurls.png' },
  { name: 'Goat Life', src: '/client-goatlife.png' },
  { name: 'ekatra', src: '/client-ekatra.png' },
  { name: 'A Toddler Thing', src: '/client-toddlerthing.png' },
  { name: 'suvāa', src: '/client-suvaa.png' },
  { name: 'born plus', src: '/client-bornplus.png' },
  { name: 'Angel & Rocket', src: '/client-angelrocket.png' },
];

export default function Hero() {
  return (
    <section className="relative pt-10 pb-32 md:pt-14 md:pb-48 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 -z-10" />

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

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground mb-6 md:mb-8">
            Performance Marketing<br />Built to{' '}
            <span
              className="relative inline-block"
              style={{
                background: 'linear-gradient(135deg, hsl(265,90%,72%) 0%, hsl(280,85%,65%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 24px hsl(265,90%,68% / 0.55))',
              }}
            >
              Scale Your Brand.
            </span>
          </h1>

          {/* Trusted by */}
          <div className="mb-0">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6">
              Brands we've helped scale
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
