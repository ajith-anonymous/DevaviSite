import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Container from '@/components/ui/container';
import MetricPill from '@/components/ui/metric-pill';
import { caseStudies } from '@/content/case-studies';

export default function CaseStudies() {
  return (
    <section id="work" className="section-padding bg-muted">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-section text-foreground mb-4">
            Results that actually matter
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We measure success by the metrics that impact your P&L. Here's what clarity-first execution looks like.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.id} className="hover:shadow-lg transition-shadow duration-300">
              {/* Abstract gradient background */}
              <div className={`h-48 bg-gradient-to-br ${
                study.id === '1' ? 'from-blue-500 to-purple-600' :
                study.id === '2' ? 'from-green-500 to-teal-600' :
                'from-orange-500 to-red-600'
              } relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                  {study.industry}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {study.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {study.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {study.results.metrics.slice(0, 2).map((metric, index) => (
                    <MetricPill
                      key={index}
                      value={metric.value}
                      label={metric.label}
                      variant={metric.variant}
                    />
                  ))}
                </div>
                
                <Link href={`/work/${study.slug}`}>
                  <a className="text-primary font-medium hover:text-primary/80 transition-colors">
                    Read full case study →
                  </a>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/work">
            <Button size="lg">
              View all case studies
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
