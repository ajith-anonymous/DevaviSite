import Container from '@/components/ui/container';
import Typewriter from '@/components/ui/typewriter';

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <Container>
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground mb-4 md:mb-6">
            Performance marketing,<br />
            <span className="text-accent">
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
          <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-10 max-w-lg leading-relaxed">
            Co-founder-led execution, ruthless clarity, results you can actually ship. 
            We work with no more than 20 clients to ensure deep involvement and attention to detail.
          </p>
          <div className="mb-12 md:mb-20">
            <div className="text-left mb-6 md:mb-8">
              <p className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Trusted by teams who value clarity
              </p>
            </div>
            
            <div className="overflow-hidden whitespace-nowrap">
              <div className="flex animate-scroll">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-center flex-shrink-0 mx-4 md:mx-8">
                    <div className="w-24 h-12 md:w-32 md:h-16 bg-muted-foreground/20 rounded-md flex items-center justify-center border border-border">
                      <span className="text-xs text-muted-foreground font-medium">Client Logo {i + 1}</span>
                    </div>
                  </div>
                ))}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={`duplicate-${i}`} className="flex items-center justify-center flex-shrink-0 mx-4 md:mx-8">
                    <div className="w-24 h-12 md:w-32 md:h-16 bg-muted-foreground/20 rounded-md flex items-center justify-center border border-border">
                      <span className="text-xs text-muted-foreground font-medium">Client Logo {i + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 md:w-32 md:h-32 bg-accent/10 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-primary/10 rounded-full opacity-15"></div>
      </div>
    </section>
  );
}
