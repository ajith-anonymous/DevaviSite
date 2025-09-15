import { 
  BarChart3, 
  Search, 
  CheckCircle, 
  Zap, 
  Heart, 
  MessageSquare 
} from 'lucide-react';
import { Link } from 'wouter';
import Container from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: BarChart3,
    title: 'Paid Social (Meta)',
    description: 'Strategic campaigns that drive real conversions. We know the benchmarks and won\'t overpromise on what\'s achievable.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Search,
    title: 'Paid Search (Google)',
    description: 'Capture demand when it matters most. From search to shopping campaigns that actually move your P&L.',
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: CheckCircle,
    title: 'Analytics & Tracking',
    description: 'Proper measurement setup so you actually know what\'s working. No vanity metrics, just clear attribution.',
    color: 'bg-muted text-foreground',
  },
  {
    icon: Zap,
    title: 'Conversion Rate Optimization',
    description: 'Make your existing traffic work harder. We test, measure, and optimize based on actual user behavior.',
    color: 'bg-primary/20 text-primary',
  },
  {
    icon: Heart,
    title: 'Creative Strategy',
    description: 'Creative that actually sells, not just looks pretty. We understand performance creative and what drives conversions.',
    color: 'bg-accent/20 text-accent',
  },
  {
    icon: MessageSquare,
    title: 'Strategic Consulting',
    description: 'We help you understand how performance marketing impacts your bottom line. Education-first approach to partnership.',
    color: 'bg-muted text-muted-foreground',
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-16">
      <Container>
        <div className="text-left mb-16">
          <h2 className="text-section text-foreground mb-4">
            Performance marketing solutions
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-lg">
            We focus on the channels that matter most for your growth stage, with transparent math and realistic expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Link href="/contact">
                  <a className="text-primary font-medium hover:text-primary/80 transition-colors">
                    Learn more →
                  </a>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
