import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Container from '@/components/ui/container';
import { Quote, Workflow, Phone, CheckCircle } from 'lucide-react';
import { contactFormSchema, type ContactForm } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';

const testimonials = [
  {
    quote: "I genuinely think getting Swastik and Anushka onboard was one of the earliest and best decisions we made at Goat Life. The reason it worked from day one is because we were aligned in how we think — execution first, everything else later. Truly grateful to have you guys on the same boat.",
    author: "Yash Kalra",
    role: "Founder - Goat Life",
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
  {
    quote: "Working with Devavi has been one of the best decisions for Ekatra. We've seen a clear shift from stagnant ROAS to consistent, measurable growth. Beyond performance, what stands out is their energy and ownership. They don't just execute — they guide, challenge our thinking, and truly care about long-term brand building. It feels less like an agency and more like an extended growth team.",
    author: "Aishwarya Jhawar",
    role: "Founder - Ekatra",
  },
  {
    quote: "We partnered with Devavi to scale our sales through paid media, and their expertise has been evident from day one. They understand the brand and its nuances extremely well. We've seen a clear uptick in sales and are glad to have them as partners early in our journey.",
    quote2: "Sundar aur suvidha waali partnership hai yeh.",
    author: "Chhaya Dabas",
    role: "Founder - Suvaa",
  },
  {
    quote: "It's been great working with Anushka on Google Ads for ATT. She brings clarity in planning and consistently delivers realistic, feasible strategies aligned with our objectives and budget. What stands out is how she ensures we understand the context behind each campaign. We've been able to see real-time improvements.",
    author: "Ashwanth Suresh Babu",
    role: "Founder - A Toddler Thing",
  },
];


const SERVICE_OPTIONS = [
  'Performance Marketing — Google',
  'Performance Marketing — Meta',
  'Performance Marketing — Google & Meta',
] as const;

function RequestCallbackForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: '', email: '', phone: '', company: '', message: '' },
  });

  const selectedService = watch('service');

  const mutation = useMutation({
    mutationFn: (data: ContactForm) => apiRequest('POST', '/api/contact', data),
    onSuccess: () => setSubmitted(true),
  });

  if (submitted) {
    return (
      <div className="mb-8 md:mb-10 rounded-2xl border border-border/70 bg-transparent p-8 md:p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-5 h-5 text-accent" />
        </div>
        <p className="text-foreground font-bold text-lg mb-1">Thank you!</p>
        <p className="text-muted-foreground text-sm">We'll be in touch shortly.</p>
      </div>
    );
  }

  const inputClass = "w-full bg-background border border-border/70 rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent/60";
  const labelClass = "block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5";

  return (
    <div className="mb-8 md:mb-10 rounded-2xl border border-border/70 bg-transparent p-5 md:p-7">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center flex-shrink-0">
          <Phone className="w-4 h-4 text-muted-foreground" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">Request a Callback</p>
      </div>

      <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Full Name</label>
            <input {...register('name')} placeholder="Jane Doe" className={inputClass} />
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Email Address</label>
            <input {...register('email')} type="email" placeholder="jane@brand.com" className={inputClass} />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Phone Number</label>
            <input {...register('phone')} type="tel" placeholder="+91 98765 43210" className={inputClass} />
            {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Company Name</label>
            <input {...register('company')} placeholder="Your Brand" className={inputClass} />
            {errors.company && <p className="text-xs text-red-400 mt-1">{errors.company.message}</p>}
          </div>
        </div>

        <div>
          <label className={labelClass}>Services of Interest</label>
          <div className="flex flex-col sm:flex-row gap-2">
            {SERVICE_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setValue('service', option, { shouldValidate: true })}
                className={`flex-1 text-left px-3 py-2.5 rounded-lg border text-sm transition-all duration-150 ${
                  selectedService === option
                    ? 'border-accent/70 bg-accent/10 text-foreground font-medium ring-1 ring-accent/50'
                    : 'border-border/70 text-muted-foreground hover:border-border hover:text-foreground'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          {errors.service && <p className="text-xs text-red-400 mt-1">{errors.service.message}</p>}
        </div>

        <div>
          <label className={labelClass}>Tell us about your business and current stage</label>
          <textarea
            {...register('message')}
            rows={4}
            placeholder="Share a bit about your brand, where you are currently with paid ads, and what you're hoping to achieve..."
            className={`${inputClass} resize-none`}
          />
          {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full bg-accent text-accent-foreground font-semibold rounded-lg py-2.5 hover:bg-accent/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? 'Submitting…' : 'Request a Callback'}
        </button>

        {mutation.isError && (
          <p className="text-xs text-red-400 text-center">Something went wrong. Please try again or email us at hello@devavimedia.com</p>
        )}
      </form>
    </div>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="md:pt-16 pb-16 md:pb-24 bg-background pt-[10px]">
      <Container>
        {/* Testimonials carousel */}
        <div id="testimonials" className="mb-8 md:mb-10 rounded-2xl border border-border/70 bg-transparent p-5 md:p-7">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center flex-shrink-0">
              <Quote className="w-4 h-4 text-muted-foreground" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">Testimonials</p>
          </div>
          <div className="overflow-hidden relative group">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background/80 to-transparent z-10 pointer-events-none" />
            <div className="flex animate-scroll group-hover:[animation-play-state:paused]" style={{ willChange: 'transform', width: 'max-content' }}>
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-72 md:w-80 mr-4 rounded-xl border border-border/70 p-4 md:p-5 flex flex-col gap-3"
                >
                  <div className="flex-1 flex flex-col gap-2">
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.quote}</p>
                    {t.quote2 && <p className="text-sm text-muted-foreground leading-relaxed">{t.quote2}</p>}
                  </div>
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

        {/* Our Process */}
        <div id="our-process" className="mb-8 md:mb-10 rounded-2xl border border-border/70 bg-transparent p-5 md:p-7">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center flex-shrink-0">
              <Workflow className="w-4 h-4 text-muted-foreground" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">Our Process</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: '01',
                title: '30-Minute Discovery Call',
                body: "We'll review your current performance, growth goals, and operational readiness in a focused conversation to assess strategic alignment.",
              },
              {
                step: '02',
                title: 'Comprehensive Audit',
                body: "If there is mutual interest, we carry out a detailed analysis of your current performance across ad accounts, analytics infrastructure, creatives, and conversion flows. This is followed by clear, initial recommendations on priority areas to address.",
              },
              {
                step: '03',
                title: 'Partnership Decision',
                body: "You evaluate whether the strategy aligns with your goals. We assess whether we have the capacity and resources to deliver meaningful outcomes. We move forward only when both sides are fully confident in the partnership.",
              },
              {
                step: '04',
                title: 'Onboarding & Execution',
                body: "Once engaged, onboarding is completed within two weeks. Month 1 focuses on establishing the right infrastructure and initial optimisations. Months 2–3 are typically centred around measurable performance improvements. From Month 4 onward, the focus shifts to accelerated scaling.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="rounded-xl border border-border/70 p-5 flex flex-col gap-3">
                <span
                  className="self-start text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full border"
                  style={{ color: 'hsl(265,90%,68%)', borderColor: 'hsl(265,90%,68% / 0.35)', backgroundColor: 'hsl(265,90%,68% / 0.08)' }}
                >
                  Step {step}
                </span>
                <p className="text-sm font-bold text-foreground leading-snug">{title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <RequestCallbackForm />

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
      <Footer />
    </>
  );
}
