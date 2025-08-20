import { cn } from '@/lib/utils';
import Container from './container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'default' | 'muted' | 'dark';
  id?: string;
}

const backgroundClasses = {
  default: 'bg-background',
  muted: 'bg-muted',
  dark: 'bg-slate-900 text-white',
};

export default function Section({ 
  children, 
  className, 
  containerClassName,
  background = 'default',
  id 
}: SectionProps) {
  return (
    <section 
      id={id}
      className={cn('section-padding', backgroundClasses[background], className)}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
