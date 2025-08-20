import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import Typewriter from '@/components/ui/typewriter';

export default function Hero() {
  return (
    <section className="relative section-padding overflow-hidden">
      <Container>
        <div className="text-center">
          <h1 className="text-hero text-foreground mb-6">
            Performance marketing,<br />
            <span className="text-primary">
              <Typewriter text="minus the circus" speed={80} delay={500} />
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Co-founder-led execution, ruthless clarity, results you can actually ship. 
            We work with no more than 20 clients to ensure deep involvement and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-4">
                Book a working session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/work">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Play className="mr-2 h-5 w-5" />
                See our work
              </Button>
            </Link>
          </div>
        </div>
      </Container>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-50 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-orange-50 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-purple-50 rounded-full opacity-15"></div>
      </div>
    </section>
  );
}
