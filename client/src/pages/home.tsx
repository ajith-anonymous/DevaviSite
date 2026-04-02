import { useEffect } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import ServicesGrid from '@/components/sections/services-grid';
import Metrics from '@/components/sections/metrics';
import Container from '@/components/ui/container';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

function CTABand() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-background border-t border-border">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/8 blur-[120px] rounded-full" />
      </div>

      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6">Ready to start?</p>
          <h2 className="text-section text-foreground mb-6">
            Ready to ditch <span className="text-accent">the circus?</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
            Join the founders who chose clarity over chaos. We take on fewer clients on purpose — every account gets our full attention.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground font-semibold px-7 py-4 rounded-full hover:bg-accent/90 transition-all duration-300 hover:gap-4 group text-sm md:text-base"
          >
            Start the conversation
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = 'Devavi Media - Performance Marketing, Minus the Circus';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Co-founder-led performance marketing agency delivering ruthless clarity and results that actually move the needle. Limited clients, unlimited focus.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Co-founder-led performance marketing agency delivering ruthless clarity and results that actually move the needle. Limited clients, unlimited focus.';
      document.head.appendChild(meta);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Devavi Media',
      url: window.location.origin,
      description: 'Performance marketing agency focused on clarity, transparency, and hands-on execution',
      founders: [
        { '@type': 'Person', name: 'Swastik Dubey' },
        { '@type': 'Person', name: 'Anushka Sirohi' },
      ],
      sameAs: [
        'https://linkedin.com/company/devavi-media',
        'https://twitter.com/devavimedia',
      ],
    };

    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.textContent = JSON.stringify(structuredData);
    document.head.appendChild(scriptTag);

    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) document.head.removeChild(existingScript);
    };
  }, []);

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Metrics />
        <ServicesGrid />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
