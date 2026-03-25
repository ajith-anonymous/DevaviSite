import Container from '@/components/ui/container';

const metrics = [
  {
    value: '340%',
    label: 'Average ROI Increase',
  },
  {
    value: '$50M+',
    label: 'Revenue Generated',
  },
  {
    value: '200+',
    label: 'Brands Scaled',
  },
];

export default function Metrics() {
  return (
    <section className="py-14 md:py-20 border-y border-border/50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 max-w-4xl">
          {metrics.map((metric, index) => (
            <div key={index} className="text-left md:pl-10 first:pl-0 md:border-l md:first:border-l-0 border-border/40">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-1 text-glow-amber">
                {metric.value}
              </div>
              <div className="text-xs md:text-sm font-medium uppercase tracking-widest text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
