import { useEffect } from 'react';
import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import Container from '@/components/ui/container';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "I genuinely think getting Swastik and Anushka onboard was one of the earliest and best decisions we made at Goat Life. The reason it worked from day one is because we were aligned in how we think — execution first, everything else later. Truly grateful to have you guys on the same boat.",
    author: "Yash Kalra",
    role: "Founder - Goat Life",
  },
  {
    quote: "Performance has been great. We've been able to scale with Flighted in a way that we haven't before.",
  },
  {
    quote: "It's been an absolute pleasure working with Swastik and Anushka. The warmth, focus, and humour you bring make every interaction memorable. Truly appreciate the way you approach things with clarity and intent. Always rooting for Devavi, onwards and upwards! :)",
    author: "Jayant Shah",
    role: "Head Of Business - Fix My Curls",
  },
  {
    quote: "The team at Devavi Media is highly competent and agile. The servicing team, in particular, did an excellent job of delivering solutions to our business challenges and helping us extract maximum value from our digital campaigns. I would definitely recommend Devavi Media to brands looking to grow.",
    author: "Durba Mandal",
    role: "Head Of Marketing - Bioveda",
  },
];

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
    <section id="services" className="md:pt-16 pb-16 md:pb-24 bg-background pt-[10px]">
      <Container>
        {/* Testimonials carousel */}
        <div className="mb-8 md:mb-10 rounded-2xl border border-border/70 bg-transparent p-5 md:p-7">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center flex-shrink-0">
              <Quote className="w-4 h-4 text-muted-foreground" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">Testimonials</p>
          </div>
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background/80 to-transparent z-10 pointer-events-none" />
            <div className="flex animate-scroll">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-72 md:w-80 mr-4 rounded-xl border border-border/70 p-4 md:p-5 flex flex-col gap-3"
                >
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{t.quote}</p>
                  {t.author && (
                    <div className="border-t border-border/40 pt-2">
                      <p className="text-xs font-bold text-foreground">{t.author}</p>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-0.5">{t.role}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
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
