import Container from '@/components/ui/container';
import Typewriter from '@/components/ui/typewriter';
import logoPath from '/devavi-logo.png';

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 -z-10" />

      {/* Logo watermark */}
      <div className="absolute inset-0 -z-10 flex items-center justify-end pointer-events-none overflow-hidden">
        <img
          src={logoPath}
          alt=""
          aria-hidden="true"
          className="w-[60vw] max-w-[700px] opacity-[0.04] select-none"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </div>

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
            Performance marketing,{' '}
            <br className="hidden sm:block" />
            <span className="text-accent text-glow-amber">
              <Typewriter
                text="minus the circus"
                typeSpeed={80}
                backspaceSpeed={50}
                delay={500}
                pauseDuration={2000}
                loop={true}
              />
            </span>
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
              <div className="flex animate-scroll">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-center flex-shrink-0 mx-4 md:mx-6">
                    <div className="w-24 h-10 md:w-28 md:h-12 glass-card rounded-lg flex items-center justify-center">
                      <span className="text-xs text-muted-foreground/60 font-medium">Client {i + 1}</span>
                    </div>
                  </div>
                ))}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={`dup-${i}`} className="flex items-center justify-center flex-shrink-0 mx-4 md:mx-6">
                    <div className="w-24 h-10 md:w-28 md:h-12 glass-card rounded-lg flex items-center justify-center">
                      <span className="text-xs text-muted-foreground/60 font-medium">Client {i + 1}</span>
                    </div>
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
