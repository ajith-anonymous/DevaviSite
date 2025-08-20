import { CheckCircle } from 'lucide-react';
import Container from '@/components/ui/container';

const principles = [
  {
    title: 'Fewer clients, deeper work',
    description: 'We work with no more than 20 clients at a time. This means every account gets the attention, strategy, and execution quality it deserves.',
  },
  {
    title: 'Transparent math',
    description: 'We know the benchmarks. We know what\'s actually achievable. We won\'t overpromise because credibility compounds in performance marketing.',
  },
  {
    title: 'Creative that sells',
    description: 'Pretty doesn\'t pay bills. We create and test creative that drives actual conversions, not just engagement or brand awareness.',
  },
  {
    title: 'Compounding learnings',
    description: 'Every test, every campaign, every insight builds on the last. We help you understand not just what works, but why it works.',
  },
];

export default function Approach() {
  return (
    <section className="section-padding">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-section text-foreground mb-4">
            Our approach to performance marketing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We built Devavi in response to the chaos in performance marketing. Here's how we do things differently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="space-y-8">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Abstract geometric illustration */}
            <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-16 h-16 bg-primary opacity-10 rounded-full"></div>
              <div className="absolute bottom-8 left-4 w-24 h-24 bg-accent opacity-10 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <p className="text-primary font-semibold">Quality over quantity</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
