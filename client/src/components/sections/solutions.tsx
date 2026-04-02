import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/container';
import { useState, useEffect, useRef } from 'react';

const solutions = [
  {
    title: 'Tech Solution',
    description: 'Advanced marketing technology stack that delivers measurable results through data-driven insights and automation.',
    accent: true,
  },
  {
    title: 'Media Solution',
    description: 'Strategic media planning and buying across all channels to maximize reach and optimize your advertising investment.',
    accent: false,
  },
  {
    title: 'Research Solution',
    description: 'Deep market research and consumer insights that inform strategy and drive performance improvements.',
    accent: false,
  },
];

export default function Solutions() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafId = useRef<number>();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
          cardRefs.current.forEach((card, index) => {
            if (card) {
              card.style.transform = `translateX(${x * 30 + (index - 1) * 20}px)`;
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
        if (rafId.current) cancelAnimationFrame(rafId.current);
      };
    }
  }, [isMobile]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-background overflow-hidden">
      <Container>
        <div className="mb-10 md:mb-14">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Our Approach</p>
          <h2 className="text-section text-foreground">Three ways we drive results</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {solutions.map((solution, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`relative p-8 md:p-10 min-h-[300px] md:h-[400px] flex flex-col justify-between group cursor-pointer transition-all duration-500 ease-out
                ${solution.accent
                  ? 'bg-accent'
                  : 'bg-card hover:bg-secondary/50'
                }
                ${hoveredCard !== null && hoveredCard !== index ? 'opacity-50' : 'opacity-100'}`}
              style={{ willChange: isMobile ? 'auto' : 'transform' }}
              onMouseEnter={() => !isMobile && setHoveredCard(index)}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
              data-testid={`card-solution-${index + 1}`}
            >
              <div>
                <span className={`text-xs font-bold uppercase tracking-widest mb-6 block ${solution.accent ? 'text-accent-foreground/60' : 'text-muted-foreground'}`}>
                  0{index + 1}
                </span>
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 transition-all duration-300 ${solution.accent ? 'text-accent-foreground' : 'text-foreground'}`}>
                  {solution.title}
                </h3>
                <p className={`text-sm md:text-base leading-relaxed transition-all duration-500 ${solution.accent ? 'text-accent-foreground/80' : 'text-muted-foreground'}
                  ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  {solution.description}
                </p>
              </div>

              <div className={`mt-8 transition-all duration-500 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center
                  ${solution.accent ? 'bg-accent-foreground' : 'bg-accent'}`}>
                  <ArrowRight className={`w-5 h-5 ${solution.accent ? 'text-accent' : 'text-accent-foreground'}`} />
                </div>
              </div>

              {/* Subtle corner dot */}
              <div className={`absolute top-8 right-8 w-1.5 h-1.5 rounded-full ${solution.accent ? 'bg-accent-foreground/40' : 'bg-accent/40'}`} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
