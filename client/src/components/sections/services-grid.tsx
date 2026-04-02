import { BarChart3, Search, CheckCircle, Zap, Heart, MessageSquare, ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import Container from '@/components/ui/container';

const services = [
  {
    icon: BarChart3,
    title: 'Paid Social (Meta)',
    description: 'Strategic campaigns that drive real conversions. We know the benchmarks and won\'t overpromise on what\'s achievable.',
  },
  {
    icon: Search,
    title: 'Paid Search (Google)',
    description: 'Capture demand when it matters most. From search to shopping campaigns that actually move your P&L.',
  },
  {
    icon: CheckCircle,
    title: 'Analytics & Tracking',
    description: 'Proper measurement setup so you actually know what\'s working. No vanity metrics, just clear attribution.',
  },
  {
    icon: Zap,
    title: 'Conversion Rate Optimization',
    description: 'Make your existing traffic work harder. We test, measure, and optimize based on actual user behavior.',
  },
  {
    icon: Heart,
    title: 'Creative Strategy',
    description: 'Creative that actually sells, not just looks pretty. We understand performance creative and what drives conversions.',
  },
  {
    icon: MessageSquare,
    title: 'Strategic Consulting',
    description: 'We help you understand how performance marketing impacts your bottom line. Education-first approach to partnership.',
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">What we do</p>
            <h2 className="text-section text-foreground max-w-sm">
              Performance marketing solutions
            </h2>
          </div>
          <p className="text-base text-muted-foreground max-w-sm leading-relaxed">
            Focused on the channels that matter most for your growth stage. Transparent math, realistic expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, index) => (
            <Link
              key={index}
              href="/contact"
              className="group relative bg-card hover:bg-secondary/40 p-7 md:p-8 flex flex-col gap-5 transition-all duration-300 min-h-[44px]"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="w-5 h-5 text-accent" />
              </div>

              <div className="flex-1">
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-accent/60 group-hover:text-accent transition-colors duration-300 uppercase tracking-wider">
                Learn more
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              {/* Subtle top border accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
