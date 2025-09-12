import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    title: 'Tech Solution',
    description: 'Advanced marketing technology stack that delivers measurable results through data-driven insights and automation.',
    bgColor: 'bg-accent',
    textColor: 'text-accent-foreground',
    buttonVariant: 'secondary' as const,
  },
  {
    title: 'Media Solution', 
    description: 'Strategic media planning and buying across all channels to maximize reach and optimize your advertising investment.',
    bgColor: 'bg-card',
    textColor: 'text-card-foreground',
    buttonVariant: 'outline' as const,
  },
  {
    title: 'Research Solution',
    description: 'Deep market research and consumer insights that inform strategy and drive performance improvements.',
    bgColor: 'bg-card',
    textColor: 'text-card-foreground', 
    buttonVariant: 'outline' as const,
  },
];

export default function Solutions() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`relative ${solution.bgColor} rounded-2xl p-8 h-80 flex flex-col justify-between border border-border group hover:shadow-lg transition-all duration-300`}
              data-testid={`card-solution-${index + 1}`}
            >
              <div className="flex-1">
                <h3 className={`text-2xl font-bold ${solution.textColor} mb-4`}>
                  {solution.title}
                </h3>
                <p className={`${solution.textColor} opacity-80 leading-relaxed`}>
                  {solution.description}
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-6">
                <Button 
                  variant={solution.buttonVariant}
                  className="text-sm font-medium"
                  data-testid={`button-view-more-${index + 1}`}
                >
                  View More
                </Button>
                
                <div className={`w-10 h-10 rounded-full ${solution.bgColor === 'bg-accent' ? 'bg-accent-foreground' : 'bg-accent'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <ArrowRight className={`w-5 h-5 ${solution.bgColor === 'bg-accent' ? 'text-accent' : 'text-accent-foreground'}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation arrows */}
        <div className="flex justify-center mt-8 gap-4">
          <button 
            className="w-10 h-10 rounded-full border border-border bg-background hover:bg-muted flex items-center justify-center transition-colors duration-200"
            data-testid="button-nav-previous"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button 
            className="w-10 h-10 rounded-full border border-border bg-background hover:bg-muted flex items-center justify-center transition-colors duration-200"
            data-testid="button-nav-next"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </Container>
    </section>
  );
}