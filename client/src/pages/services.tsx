import { useEffect } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'wouter';

const services = [
  {
    id: 'paid-social',
    title: 'Paid Social (Meta)',
    description: 'Strategic campaigns that drive real conversions across Facebook and Instagram.',
    features: [
      'Advanced audience segmentation and lookalike modeling',
      'Creative testing framework with 15+ variations per week',
      'Performance creative that drives actual conversions',
      'Proper attribution setup and ROAS optimization',
    ],
    results: 'Average 4.2x ROAS with 35% lower CAC',
  },
  {
    id: 'paid-search',
    title: 'Paid Search (Google)',
    description: 'Capture demand when it matters most with search and shopping campaigns.',
    features: [
      'High-intent keyword research and negative list optimization',
      'Shopping campaign setup for e-commerce brands',
      'Landing page alignment for maximum conversion rates',
      'Bid strategy optimization based on actual LTV data',
    ],
    results: 'Average 60% improvement in Quality Score',
  },
  {
    id: 'analytics',
    title: 'Analytics & Tracking',
    description: 'Proper measurement setup so you know what\'s actually working.',
    features: [
      'GA4 and conversion tracking implementation',
      'Attribution modeling for multi-touch journeys',
      'Custom dashboards for real-time performance monitoring',
      'UTM strategy and campaign tagging systems',
    ],
    results: '100% attribution accuracy with clear ROI reporting',
  },
  {
    id: 'cro',
    title: 'Conversion Rate Optimization',
    description: 'Make your existing traffic work harder through systematic testing.',
    features: [
      'Landing page audit and optimization recommendations',
      'A/B testing framework for systematic improvements',
      'User behavior analysis and friction point identification',
      'Mobile-first optimization for better conversions',
    ],
    results: 'Average 25% conversion rate improvement',
  },
  {
    id: 'creative',
    title: 'Creative Strategy',
    description: 'Performance creative that sells, not just looks pretty.',
    features: [
      'Creative briefs based on performance data insights',
      'Video and static ad creative for social platforms',
      'Creative testing methodology and winner scaling',
      'Brand guideline development for consistent messaging',
    ],
    results: 'Creative refresh reduces CPM by 40% on average',
  },
];

const process = [
  {
    step: '1',
    title: 'Discovery & Audit',
    description: 'We audit your current setup, analyze your data, and identify immediate opportunities for improvement.',
    timeline: 'Week 1',
  },
  {
    step: '2',
    title: 'Strategy Development',
    description: 'Based on our findings, we create a comprehensive performance marketing strategy with realistic projections.',
    timeline: 'Week 2',
  },
  {
    step: '3',
    title: 'Implementation',
    description: 'We set up campaigns, tracking, and optimization frameworks. All work is done by senior team members.',
    timeline: 'Week 3-4',
  },
  {
    step: '4',
    title: 'Optimization & Scale',
    description: 'Continuous testing, optimization, and scaling based on performance data and learnings.',
    timeline: 'Ongoing',
  },
  {
    step: '5',
    title: 'Reporting & Education',
    description: 'Monthly reports with clear insights and education on how marketing impacts your P&L.',
    timeline: 'Monthly',
  },
];

const faqs = [
  {
    question: 'What\'s your minimum budget requirement?',
    answer: 'We typically work with clients spending at least ₹2L per month on advertising. This ensures we can run meaningful tests and achieve statistically significant results.',
  },
  {
    question: 'How quickly can we see results?',
    answer: 'Initial improvements are often visible within 2-4 weeks, but meaningful performance optimization typically takes 8-12 weeks as we gather data and refine strategies.',
  },
  {
    question: 'Do you work with agencies or in-house teams?',
    answer: 'We prefer working directly with founders and marketing heads. Our limited client model means we need close collaboration and quick decision-making.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We work primarily with D2C e-commerce, SaaS, and fintech companies. Our experience in these sectors helps us bring relevant benchmarks and strategies.',
  },
  {
    question: 'How is your pricing structured?',
    answer: 'We work on a monthly retainer basis with performance bonuses. Pricing depends on scope and ad spend, but we\'re always transparent about costs upfront.',
  },
  {
    question: 'What makes you different from other agencies?',
    answer: 'Three things: we limit our client roster to 20, every account is managed by senior talent, and we focus on educating clients rather than just running campaigns.',
  },
];

export default function Services() {
  useEffect(() => {
    document.title = 'Services - Performance Marketing Solutions | Devavi Media';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete performance marketing services including paid social, search, analytics, CRO, and creative strategy. Transparent pricing and realistic expectations.');
    }
  }, []);

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <Section className="pt-24">
          <div className="text-center mb-16">
            <h1 className="text-hero text-foreground mb-6">
              Performance marketing services that actually <span className="text-primary">perform</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We focus on the channels and tactics that matter most for your growth stage. No fluff, no vanity metrics—just results that impact your bottom line.
            </p>
          </div>
        </Section>

        {/* Services Grid */}
        <Section background="muted">
          <div className="text-center mb-12">
            <h2 className="text-section text-foreground mb-4">
              Our service offerings
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each service is designed to work together as part of a comprehensive growth strategy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} id={service.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-medium text-foreground">
                      Typical Results: {service.results}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Process Timeline */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-section text-foreground mb-4">
              Our process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How we work with you from initial audit to ongoing optimization.
            </p>
          </div>

          <div className="space-y-8">
            {process.map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <span className="text-sm text-primary bg-blue-50 px-3 py-1 rounded-full">
                      {item.timeline}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* FAQs */}
        <Section background="muted">
          <div className="text-center mb-12">
            <h2 className="text-section text-foreground mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about working with us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="dark">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your specific needs and see if we're a good fit for each other.
            </p>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Schedule a strategy call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
