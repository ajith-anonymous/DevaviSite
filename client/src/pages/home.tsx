import { useEffect } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import ProofBar from '@/components/sections/proof-bar';
import ServicesGrid from '@/components/sections/services-grid';
import CaseStudies from '@/components/sections/case-studies';
import Approach from '@/components/sections/approach';
import Testimonials from '@/components/sections/testimonials';
import Founders from '@/components/sections/founders';
import ContactForm from '@/components/sections/contact-form';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import { Link } from 'wouter';

// CTA Band Component
function CTABand() {
  return (
    <section className="py-16 bg-primary">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to ditch the circus?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the founders who chose clarity over chaos. Let's build performance marketing that actually performs.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Start the conversation
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    // Set page title and meta description
    document.title = 'Devavi Media - Performance Marketing, Minus the Circus';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Co-founder-led performance marketing agency delivering ruthless clarity and results that actually move the needle. Limited clients, unlimited focus.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Co-founder-led performance marketing agency delivering ruthless clarity and results that actually move the needle. Limited clients, unlimited focus.';
      document.head.appendChild(meta);
    }

    // Add structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Devavi Media',
      url: window.location.origin,
      description: 'Performance marketing agency focused on clarity, transparency, and hands-on execution',
      founders: [
        {
          '@type': 'Person',
          name: 'Swastik Dubey'
        },
        {
          '@type': 'Person', 
          name: 'Anushka Sirohi'
        }
      ],
      sameAs: [
        'https://linkedin.com/company/devavi-media',
        'https://twitter.com/devavimedia'
      ]
    };

    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.textContent = JSON.stringify(structuredData);
    document.head.appendChild(scriptTag);

    return () => {
      // Cleanup structured data on unmount
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
        <Hero />
        <ProofBar />
        <ServicesGrid />
        <CaseStudies />
        <Approach />
        <Testimonials />
        <Founders />
        <ContactForm />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
