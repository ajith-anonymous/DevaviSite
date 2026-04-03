import { useEffect } from 'react';
import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import Container from '@/components/ui/container';

const googleItems = [
  'Search Campaigns',
  'Performance Max',
  'Shopping Campaigns',
  'Display & Remarketing',
  'Campaign Setup & Structure',
  'Ongoing Optimisation',
  'Budget Management',
  'Performance Reporting',
];

const metaItems = [
  'Feed & Story Ads',
  'Reels Campaigns',
  'Retargeting & Lookalikes',
  'Audience Strategy',
  'Campaign Setup & Structure',
  'Ongoing Optimisation',
  'Budget Management',
  'Performance Reporting',
];

function ServicesSection() {
  return (
    <section id="services" className="md:pt-16 pb-16 md:pb-24 bg-background pt-[30px]">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">Our Services</h2>
        <p className="text-muted-foreground text-base md:text-lg mb-10">
          Google and Meta, managed end-to-end. No handoffs, no gaps, no guesswork.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Google Ads */}
          <div className="rounded-xl border border-accent/40 bg-secondary/30 p-7 backdrop-blur-sm">
            <p className="font-bold text-accent uppercase tracking-widest mb-1 text-[36px]">Google Ads</p>
            <p className="text-muted-foreground mb-5 text-[20px]">Search, Shopping & Display</p>
            <ul className="space-y-2">
              {googleItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-foreground text-[20px] text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Meta Ads */}
          <div className="rounded-xl border border-accent/40 bg-secondary/30 p-7 backdrop-blur-sm">
            <p className="font-bold text-accent uppercase tracking-widest mb-1 text-[36px]">Meta Ads</p>
            <p className="text-muted-foreground mb-5 text-[18px]">Feed, Reels & Retargeting</p>
            <ul className="space-y-2 text-[20px]">
              {metaItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-foreground text-[18px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
        <ServicesSection />
      </main>
    </>
  );
}
