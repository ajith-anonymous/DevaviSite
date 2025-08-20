import { cn } from '@/lib/utils';

interface StatProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
  variant?: 'primary' | 'accent' | 'success' | 'default';
}

const variantClasses = {
  primary: 'text-primary',
  accent: 'text-accent',
  success: 'text-green-600',
  default: 'text-foreground',
};

export default function Stat({ 
  value, 
  label, 
  description, 
  className,
  variant = 'primary' 
}: StatProps) {
  return (
    <div className={cn('text-center p-4 bg-background rounded-lg', className)}>
      <div className={cn('text-3xl font-bold mb-1', variantClasses[variant])}>
        {value}
      </div>
      <div className="text-sm font-medium text-muted-foreground mb-1">
        {label}
      </div>
      {description && (
        <div className="text-xs text-muted-foreground">
          {description}
        </div>
      )}
    </div>
  );
}
