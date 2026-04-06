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
                className="text-foreground uppercase tracking-widest md:text-lg font-bold text-[22px]"
                style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
              >
                Devavi Media
              </span>
            </Link>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
              <Link href="/process" className="hover:text-foreground transition-colors">Process</Link>
              <Link href="/work" className="hover:text-foreground transition-colors">Work</Link>
              <Link href="/contact" className="px-4 py-2 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors">Contact</Link>
            </nav>

            {/* Mobile nav toggle placeholder — collapsed on small screens */}
            <nav className="md:hidden flex items-center gap-4 text-xs text-muted-foreground">
              <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            </nav>
          </div>
        </Container>
      </header>
    </>
  );
}
