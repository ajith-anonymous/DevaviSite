import { useEffect } from 'react';
import { Heart, Users, Target, Award } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const values = [
  {
    icon: Heart,
    title: 'Integrity First',
    description: 'Named after our fathers, we carry their values of honesty and ethical work into every client relationship.',
  },
  {
    icon: Users,
    title: 'Limited & Focused',
    description: 'We work with no more than 20 clients to ensure every account gets the attention it deserves.',
  },
  {
    icon: Target,
    title: 'Results Over Rhetoric',
    description: 'We measure success by metrics that actually impact your bottom line, not vanity numbers.',
  },
  {
    icon: Award,
    title: 'Education-First',
    description: 'We don\'t just run campaigns—we help you understand the why behind every decision.',
  },
];

const stats = [
  { value: '18', label: 'Active Clients', description: 'Carefully selected partnerships' },
  { value: '650%', label: 'Avg Revenue Growth', description: 'Results from our case studies' },
  { value: '4.2x', label: 'Average ROAS', description: 'Performance across all campaigns' },
  { value: '95%', label: 'Client Retention', description: 'Long-term partnerships' },
];

export default function About() {
  useEffect(() => {
    document.title = 'About Us - Meet the Founders | Devavi Media';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Meet Swastik and Anushka, the co-founders of Devavi Media. Learn about our story, values, and why we built an agency focused on transparency and results.');
    }

    // Add structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Devavi Media',
      description: 'Learn about Devavi Media founders and company values',
      url: `${window.location.origin}/about`,
      mainEntity: {
        '@type': 'Organization',
        name: 'Devavi Media',
        founders: [
          {
            '@type': 'Person',
            name: 'Swastik Dubey',
            jobTitle: 'Co-founder'
          },
          {
            '@type': 'Person', 
            name: 'Anushka Sirohi',
            jobTitle: 'Co-founder'
          }
        ]
      }
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
              Meet the team behind <span className="text-primary">Devavi</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're Swastik and Anushka, and we built Devavi to bring clarity and integrity to performance marketing. 
              Here's our story and why we do what we do.
            </p>
          </div>
        </Section>

        {/* Founders Section */}
        <Section background="muted">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                S
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Swastik Dubey
              </h3>
              <p className="text-primary font-medium mb-4">Co-founder</p>
              <p className="text-muted-foreground leading-relaxed">
                Swastik's journey in performance marketing began with a simple belief: transparency builds trust. Named after his father Devendra Kumar Dubey, who rose to the Reserve Bank of India through sheer perseverance, Swastik brings the same dedication to every client relationship. He ensures that every campaign decision is backed by data and every expectation is grounded in reality.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                A
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Anushka Sirohi
              </h3>
              <p className="text-primary font-medium mb-4">Co-founder</p>
              <p className="text-muted-foreground leading-relaxed">
                Anushka personally oversees every single account at Devavi, bringing years of experience from industry-leading brands. The "Ravi" in Devavi honors her late father, Ravi Prakash Sirohi, whose values of hard work and integrity guide every client interaction. She believes that performance marketing isn't just about numbers - it's about building sustainable growth that founders can be proud of.
              </p>
            </div>
          </div>
        </Section>

        {/* Story Section */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-section text-foreground mb-4">
                The story behind Devavi
              </h2>
            </div>
            
            <Card className="mb-12">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                  Why we built Devavi
                </h3>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Performance marketing has become a space where inflated promises and high retainers often go hand-in-hand. Too many agencies operate on a model where the focus is solely on signing clients, locking them in for 3-month retainers, without ever being equipped to deliver on their claims.
                  </p>
                  <p>
                    Then there's another breed of agencies that run on undertrained account managers — freshers with little to no understanding of the performance ecosystem, often tasked with acquiring and managing clients. As expected, this rarely leads to lasting results or relationships.
                  </p>
                  <p>
                    At Devavi, we built a model in response to this chaos. We're clear about what we do: offer top-tier performance marketing services to a limited set of clients with realistic goals, transparent conversations, and hands-on execution.
                  </p>
                  <p>
                    We believe our biggest strength is our talent. Our co-founder, Anushka, has worked with industry-leading brands in her previous agency stints — and at Devavi, she personally oversees every single account we take on.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-primary/5 p-8 rounded-xl text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                The name "Devavi"
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Devavi is an emotional amalgamation of our fathers' names — <strong>Devendra</strong> and <strong>Ravi</strong>. 
                For Swastik, his father has always been a guiding force, reaching the Reserve Bank of India through perseverance and integrity. 
                For Anushka, naming the company Devavi was a way to keep her late father's values and energy alive in everything we do.
              </p>
            </div>
          </div>
        </Section>

        {/* Values Section */}
        <Section background="muted">
          <div className="text-center mb-12">
            <h2 className="text-section text-foreground mb-4">
              Our values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Stats Section */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-section text-foreground mb-4">
              Devavi by the numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A snapshot of our impact and approach to performance marketing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Team Culture */}
        <Section background="muted">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-section text-foreground mb-6">
              Our approach to clients
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We don't just see ourselves as a service provider. We see ourselves as an extension of your team—invested in your success, transparent about challenges, and committed to building something sustainable together. 
              Our retention rate speaks for itself: clients don't just stay because of results, but because of the partnership we build.
            </p>
            
            <blockquote className="text-xl italic text-primary border-l-4 border-primary pl-6 my-8">
              "We work with no more than 20 clients because we believe deep involvement trumps broad reach. 
              Every account deserves senior attention, not junior execution."
            </blockquote>
            
            <p className="text-muted-foreground">
              — Anushka & Swastik, Co-founders
            </p>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="dark">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Want to work with us?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              We're selective about partnerships, but if our approach resonates with you, let's have a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Start a conversation
                </Button>
              </Link>
              <Link href="/work">
                <Button variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800">
                  See our work
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
