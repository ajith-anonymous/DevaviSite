import Container from '@/components/ui/container';

export default function ProofBar() {
  return (
    <section className="py-12 bg-muted">
      <Container>
        <div className="text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-8">
            Trusted by teams who value clarity
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="w-24 h-12 bg-slate-300 rounded-md flex items-center justify-center">
                  <span className="text-xs text-slate-600">Client Logo</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
