import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`relative ${solution.bgColor} rounded-2xl p-8 h-80 flex flex-col justify-between border border-border group cursor-pointer transform transition-all duration-500 ease-out
                hover:-translate-y-6 hover:rotate-1 hover:shadow-2xl hover:shadow-accent/20
                ${hoveredCard === index ? 'scale-105' : hoveredCard !== null ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}
                animate-slide-up`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              data-testid={`card-solution-${index + 1}`}
            >
              {/* Floating background element */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex-1 relative z-10">
                <h3 className={`text-2xl font-bold ${solution.textColor} mb-4 transform transition-transform duration-300 group-hover:translate-x-2`}>
                  {solution.title}
                </h3>
                <p className={`${solution.textColor} opacity-80 leading-relaxed transform transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1`}>
                  {solution.description}
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-6 relative z-10">
                <Button 
                  variant={solution.buttonVariant}
                  className="text-sm font-medium transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                  data-testid={`button-view-more-${index + 1}`}
                >
                  View More
                </Button>
                
                <div className={`w-10 h-10 rounded-full ${solution.bgColor === 'bg-accent' ? 'bg-accent-foreground' : 'bg-accent'} flex items-center justify-center transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-90 group-hover:shadow-lg`}>
                  <ArrowRight className={`w-5 h-5 ${solution.bgColor === 'bg-accent' ? 'text-accent' : 'text-accent-foreground'} transform transition-transform duration-300 group-hover:translate-x-0.5`} />
                </div>
              </div>

              {/* Decorative corner element */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent opacity-20 group-hover:opacity-60 group-hover:scale-150 transition-all duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Navigation arrows */}
        <div className="flex justify-center mt-12 gap-4">
          <button 
            className="w-12 h-12 rounded-full border-2 border-accent/30 bg-background hover:bg-accent hover:border-accent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            data-testid="button-nav-previous"
          >
            <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-accent-foreground group-hover:-translate-x-0.5 transition-all duration-300" />
          </button>
          <button 
            className="w-12 h-12 rounded-full border-2 border-accent/30 bg-background hover:bg-accent hover:border-accent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            data-testid="button-nav-next"
          >
            <ChevronRight className="w-6 h-6 text-foreground group-hover:text-accent-foreground group-hover:translate-x-0.5 transition-all duration-300" />
          </button>
        </div>
      </Container>
    </section>
  );
}