import { useEffect } from 'react';
import { useParams, useLocation } from 'wouter';
import { ArrowLeft, Calendar, Tag, TrendingUp } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Stat from '@/components/ui/stat';
import { caseStudies } from '@/content/case-studies';
import NotFound from './not-found';

export default function WorkDetail() {
  const { slug } = useParams();
  const [, setLocation] = useLocation();
  
  const caseStudy = caseStudies.find(study => study.slug === slug);

  useEffect(() => {
    if (caseStudy) {
      document.title = `${caseStudy.title} Case Study | Devavi Media`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', caseStudy.description);
      }

      // Add structured data for the case study
      const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: caseStudy.title,
        description: caseStudy.description,
        url: window.location.href,
        author: {
          '@type': 'Organization',
          name: 'Devavi Media'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Devavi Media'
        },
        articleSection: 'Case Studies',
        keywords: caseStudy.tags.join(', ')
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
    }
  }, [caseStudy]);

  if (!caseStudy) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Breadcrumb */}
        <Section className="pt-24 pb-8">
          <Link href="/work">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to case studies
            </Button>
          </Link>
        </Section>

        {/* Hero */}
        <Section className="pt-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <Badge variant="secondary">{caseStudy.industry}</Badge>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {caseStudy.duration}
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                {caseStudy.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                {caseStudy.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {caseStudy.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {caseStudy.results.metrics.map((metric, index) => (
                <Stat
                  key={index}
                  value={metric.value}
                  label={metric.label}
                  variant={metric.variant}
                  className="border border-border"
                />
              ))}
            </div>
          </div>
        </Section>

        {/* Challenge */}
        <Section background="muted">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                The Challenge
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>
            <div className="bg-background p-8 rounded-xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Key Issues Identified
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Low conversion rates despite good traffic volume
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Unsustainable customer acquisition costs
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Lack of proper attribution and measurement
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Strategy */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Strategy
            </h2>
          </div>
          
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {caseStudy.strategy}
              </p>
            </CardContent>
          </Card>
        </Section>

        {/* Execution */}
        <Section background="muted">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Execution & Implementation
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {caseStudy.execution}
            </p>
            
            <div className="bg-background p-8 rounded-xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Timeline & Key Milestones
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <div>
                    <span className="font-medium text-foreground">Week 1-2:</span>
                    <span className="text-muted-foreground ml-2">Initial audit and strategy development</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <div>
                    <span className="font-medium text-foreground">Week 3-4:</span>
                    <span className="text-muted-foreground ml-2">Campaign setup and tracking implementation</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <div>
                    <span className="font-medium text-foreground">Week 5+:</span>
                    <span className="text-muted-foreground ml-2">Optimization and scaling based on performance data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Results */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Results Achieved
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are the concrete results we achieved over the {caseStudy.duration} project timeline.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {caseStudy.results.metrics.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-muted rounded-xl">
                <div className={`text-4xl font-bold mb-2 ${
                  metric.variant === 'primary' ? 'text-primary' :
                  metric.variant === 'accent' ? 'text-accent' :
                  metric.variant === 'success' ? 'text-green-600' :
                  'text-foreground'
                }`}>
                  {metric.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Key Success Factors
              </h3>
              <p className="text-muted-foreground">
                The success of this campaign was driven by systematic testing, data-driven decisions, 
                and close collaboration with the client team. Every optimization was based on actual 
                user behavior and performance data rather than assumptions.
              </p>
            </CardContent>
          </Card>
        </Section>

        {/* Next Steps */}
        <Section background="muted">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              What's Next
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {caseStudy.nextSteps}
            </p>
            
            <div className="bg-background p-6 rounded-xl border border-border">
              <p className="text-sm text-muted-foreground italic">
                "We don't just deliver campaigns and move on. We think about the long-term growth trajectory 
                and help our clients understand what comes next in their marketing evolution." - Anushka, Co-founder
              </p>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section background="dark">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for similar results?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Every business is different, but our approach to clarity and performance remains consistent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Discuss your project
                </Button>
              </Link>
              <Link href="/work">
                <Button variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800">
                  View more case studies
                </Button>
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
