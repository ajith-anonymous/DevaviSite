import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursor?: boolean;
}

export default function Typewriter({ 
  text, 
  speed = 100, 
  delay = 0, 
  className, 
  cursor = true 
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTyping = () => {
      setIsTyping(true);
      let index = 0;
      
      const typeInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          clearInterval(typeInterval);
        }
      }, speed);

      return () => clearInterval(typeInterval);
    };

    const delayTimeout = setTimeout(startTyping, delay);
    return () => clearTimeout(delayTimeout);
  }, [text, speed, delay]);

  return (
    <span className={cn(className)}>
      {displayText}
      {cursor && (
        <span 
          className={cn(
            "inline-block w-0.5 h-[1em] bg-current ml-1 animate-pulse",
            !isTyping && displayText.length === text.length && "opacity-0"
          )}
        />
      )}
    </span>
  );
}