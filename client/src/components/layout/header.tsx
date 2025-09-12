import { Link } from 'wouter';
import Container from '@/components/ui/container';
import devaviLogo from '@assets/Devavi Logo_1757677815048.png';

export default function Header() {

  return (
    <>
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <Container>
          <div className="flex justify-end items-center h-16">
            {/* Logo moved to right */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                <img 
                  src={devaviLogo}
                  alt="Devavi Media"
                  className="h-12 w-auto"
                  data-testid="logo-devavi"
                />
              </Link>
            </div>
          </div>
        </Container>

      </header>
    </>
  );
}
