import { cn } from '@/lib/utils';

interface MetricPillProps {
  value: string;
  label: string;
  variant?: 'primary' | 'accent' | 'success' | 'warning';
  className?: string;
}

const variantClasses = {
  primary: 'bg-blue-50 text-primary',
  accent: 'bg-orange-50 text-accent',
  success: 'bg-green-50 text-green-600',
  warning: 'bg-yellow-50 text-yellow-600',
};

export default function MetricPill({ 
  value, 
  label, 
  variant = 'primary',
  className 
}: MetricPillProps) {
  return (
    <div className={cn(
      'text-center p-3 rounded-lg',
      variantClasses[variant],
      className
    )}>
      <div className="text-2xl font-bold">
        {value}
      </div>
      <div className="text-sm font-medium">
        {label}
      </div>
    </div>
  );
}
