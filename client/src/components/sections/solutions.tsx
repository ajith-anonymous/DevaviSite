import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';

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
    bgColor: 'bg-background',
    textColor: 'text-muted-foreground',
    buttonVariant: 'ghost' as const,
  },
  {
    title: 'Research Solution',
    description: 'Deep market research and consumer insights that inform strategy and drive performance improvements.',
    bgColor: 'bg-background',
    textColor: 'text-muted-foreground', 
    buttonVariant: 'ghost' as const,
  },
];

export default function Solutions() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafId = useRef<number>();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      rafId.current = requestAnimationFrame(() => {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
          
          cardRefs.current.forEach((card, index) => {
            if (card) {
              const baseOffset = (index - 1) * 20;
              const parallaxStrength = 30;
              const offsetX = x * parallaxStrength + baseOffset;
              card.style.transform = `translateX(${offsetX}px)`;
            }
          });
        }
      });
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => {
        section.removeEventListener('mousemove', handleMouseMove);
        if (rafId.current) {
          cancelAnimationFrame(rafId.current);
        }
      };
    }
  }, [isMobile]);

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-background overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`relative ${solution.bgColor} p-8 md:p-12 min-h-[320px] md:h-96 flex flex-col justify-between group cursor-pointer transition-all duration-500 ease-out
                ${hoveredCard === index ? 'z-10' : hoveredCard !== null ? 'md:opacity-40 opacity-100' : 'opacity-100'}
                animate-slide-up`}
              style={{
                animationDelay: `${index * 150}ms`,
                willChange: isMobile ? 'auto' : 'transform',
              }}
              onMouseEnter={() => !isMobile && setHoveredCard(index)}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
              data-testid={`card-solution-${index + 1}`}
            >
              <div className="flex-1 relative z-10">
                <h3 className={`text-3xl md:text-4xl font-bold ${solution.textColor} mb-4 md:mb-6 transition-all duration-500 
                  ${hoveredCard === index ? 'opacity-100' : hoveredCard !== null ? 'md:opacity-30 opacity-80' : 'opacity-80'}`}>
                  {solution.title}
                </h3>
                <p className={`${solution.textColor} text-sm md:text-base leading-relaxed transition-all duration-500 
                  ${hoveredCard === index || isMobile ? 'opacity-100' : 'opacity-0'}`}>
                  {solution.description}
                </p>
              </div>
              
              <div className={`flex items-center justify-end mt-6 relative z-10 transition-all duration-500 
                ${hoveredCard === index || isMobile ? 'opacity-100' : 'opacity-0'}`}>
                <div className={`w-12 h-12 md:w-12 md:h-12 rounded-full ${solution.bgColor === 'bg-accent' ? 'bg-accent-foreground' : 'bg-foreground'} flex items-center justify-center transition-all duration-500 group-hover:scale-110`}>
                  <ArrowRight className={`w-6 h-6 ${solution.bgColor === 'bg-accent' ? 'text-accent' : 'text-background'}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Navigation arrows */}
        <div className="flex justify-center mt-8 md:mt-12 gap-3 md:gap-4">
          <button 
            className="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-accent/30 bg-background hover:bg-accent hover:border-accent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group active:scale-95"
            data-testid="button-nav-previous"
            aria-label="Previous solution"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground group-hover:text-accent-foreground group-hover:-translate-x-0.5 transition-all duration-300" />
          </button>
          <button 
            className="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-accent/30 bg-background hover:bg-accent hover:border-accent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group active:scale-95"
            data-testid="button-nav-next"
            aria-label="Next solution"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground group-hover:text-accent-foreground group-hover:translate-x-0.5 transition-all duration-300" />
          </button>
        </div>
      </Container>
    </section>
  );
}
