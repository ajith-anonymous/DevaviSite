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
    <section className="py-20 bg-background">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl">
          {metrics.map((metric, index) => (
            <div key={index} className="text-left">
              <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-wide text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}