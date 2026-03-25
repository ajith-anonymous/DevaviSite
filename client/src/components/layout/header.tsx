import { Link } from 'wouter';
import Container from '@/components/ui/container';
import devaviLogo from '@assets/Devavi Logo_1757677815048.png';

export default function Header() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-accent-foreground px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <Container>
          <div className="flex justify-end items-center h-14 md:h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center hover:opacity-80 transition-opacity p-2 -m-2 min-h-[44px]">
                <img
                  src={devaviLogo}
                  alt="Devavi Media"
                  className="h-9 md:h-11 w-auto"
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
