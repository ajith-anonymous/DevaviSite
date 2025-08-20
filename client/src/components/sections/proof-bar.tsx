import Container from '@/components/ui/container';

export default function ProofBar() {
  const logoItems = Array.from({ length: 8 }).map((_, i) => (
    <div key={i} className="flex items-center justify-center flex-shrink-0 mx-8">
      <div className="w-32 h-16 bg-muted-foreground/20 rounded-md flex items-center justify-center border border-border">
        <span className="text-xs text-muted-foreground font-medium">Client Logo {i + 1}</span>
      </div>
    </div>
  ));

  return (
    <section className="py-16 bg-muted">
      <Container>
        <div className="text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-12">
            Trusted by teams who value clarity
          </p>
        </div>
      </Container>
      
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex animate-scroll">
          {logoItems}
          {logoItems}
        </div>
      </div>
    </section>
  );
}
