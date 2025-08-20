import { useEffect } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import MetricPill from '@/components/ui/metric-pill';
import { caseStudies } from '@/content/case-studies';

export default function Work() {
  useEffect(() => {
    document.title = 'Case Studies - Our Work | Devavi Media';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'See real results from our performance marketing campaigns. Detailed case studies showing how we help brands scale with transparent metrics and honest insights.');
    }

    // Add structured data for case studies
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Devavi Media Case Studies',
      description: 'Performance marketing case studies and results',
      url: `${window.location.origin}/work`,
      mainEntity: caseStudies.map(study => ({
        '@type': 'Article',
        headline: study.title,
        description: study.description,
        url: `${window.location.origin}/work/${study.slug}`,
        author: {
          '@type': 'Organization',
          name: 'Devavi Media'
        }
      }))
    };

    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.textContent = JSON.stringify(structuredData);
    document.head.appendChild(scriptTag);

    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <Section className="pt-24">
          <div className="text-center mb-16">
            <h1 className="text-hero text-foreground mb-6">
              Real results from <span className="text-primary">real campaigns</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in transparent reporting and honest case studies. Here's exactly how we help brands scale—with the good, the challenging, and the lessons learned.
            </p>
          </div>
        </Section>

        {/* Case Studies Grid */}
        <Section background="muted">
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="hover:shadow-lg transition-shadow duration-300">
                {/* Gradient background */}
                <div className={`h-48 bg-gradient-to-br ${
                  study.id === '1' ? 'from-blue-500 to-purple-600' :
                  study.id === '2' ? 'from-green-500 to-teal-600' :
                  'from-orange-500 to-red-600'
                } relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {study.industry}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {study.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-white/10 text-white text-xs border-white/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {study.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {study.results.metrics.map((metric, index) => (
                      <MetricPill
                        key={index}
                        value={metric.value}
                        label={metric.label}
                        variant={metric.variant}
                        className="text-center"
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {study.duration} project
                    </span>
                    <Link href={`/work/${study.slug}`}>
                      <Button variant="ghost" className="p-0 h-auto">
                        Read case study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              More case studies coming soon. We only publish detailed studies with client permission.
            </p>
          </div>
        </Section>

        {/* Results Summary */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-section text-foreground mb-4">
              By the numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Aggregate results from our client campaigns over the past 12 months.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">650%</div>
              <div className="text-muted-foreground">Average revenue growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">4.2x</div>
              <div className="text-muted-foreground">Average ROAS achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">-45%</div>
              <div className="text-muted-foreground">Average CAC reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">18</div>
              <div className="text-muted-foreground">Active clients</div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="dark">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to become our next case study?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              We're currently accepting 2 new clients for Q1 2024. Let's discuss if we're the right fit for your growth goals.
            </p>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Apply to work with us
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
