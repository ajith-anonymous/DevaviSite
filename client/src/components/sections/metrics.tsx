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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-foreground mb-2">
                {metric.value}
              </div>
              <div className="text-sm uppercase tracking-wide text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}