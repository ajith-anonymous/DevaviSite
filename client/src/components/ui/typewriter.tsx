import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  text: string;
  typeSpeed?: number;
  backspaceSpeed?: number;
  delay?: number;
  pauseDuration?: number;
  loop?: boolean;
  className?: string;
  cursor?: boolean;
}

export default function Typewriter({ 
  text, 
  typeSpeed = 100, 
  backspaceSpeed = 50,
  delay = 0,
  pauseDuration = 1500,
  loop = false,
  className, 
  cursor = true 
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isBackspacing, setIsBackspacing] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    const startCycle = () => {
      setIsTyping(true);
      setIsBackspacing(false);
      let index = 0;
      
      // Typing phase
      intervalId = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          clearInterval(intervalId);
          
          if (loop) {
            // Pause before backspacing
            timeoutId = setTimeout(() => {
              setIsBackspacing(true);
              let backIndex = text.length;
              
              // Backspacing phase
              intervalId = setInterval(() => {
                if (backIndex > 0) {
                  setDisplayText(text.slice(0, backIndex - 1));
                  backIndex--;
                } else {
                  setIsBackspacing(false);
                  clearInterval(intervalId);
                  
                  // Pause before starting again
                  timeoutId = setTimeout(startCycle, pauseDuration);
                }
              }, backspaceSpeed);
            }, pauseDuration);
          }
        }
      }, typeSpeed);
    };

    const delayTimeout = setTimeout(startCycle, delay);
    
    return () => {
      clearTimeout(delayTimeout);
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, typeSpeed, backspaceSpeed, delay, pauseDuration, loop]);

  return (
    <span className={cn(className)}>
      {displayText}
      {cursor && (
        <span 
          className={cn(
            "inline-block w-0.5 h-[1em] bg-current ml-1 animate-pulse"
          )}
        />
      )}
    </span>
  );
}