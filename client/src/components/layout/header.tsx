import { Link } from 'wouter';
import Container from '@/components/ui/container';

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
          <div className="flex justify-between items-center h-14 md:h-16">
            {/* Wordmark */}
            <Link href="/" className="hover:opacity-80 transition-opacity min-h-[44px] flex items-center">
              <span
                className="text-foreground uppercase tracking-widest text-base md:text-lg font-bold"
                style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
              >
                Devavi Media
              </span>
            </Link>

          </div>
        </Container>
      </header>
    </>
  );
}
