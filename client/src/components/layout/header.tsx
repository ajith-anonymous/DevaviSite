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
            {/* Logo + wordmark */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity min-h-[44px]">
              <img
                src="/devavi-logo.png"
                alt=""
                aria-hidden="true"
                className="h-7 md:h-8 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <span className="text-sm md:text-base font-semibold text-foreground tracking-wide">
                Devavi Media
              </span>
            </Link>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/#services" className="hover:text-foreground transition-colors">Services</Link>
              <Link href="/work" className="hover:text-foreground transition-colors">Work</Link>
              <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link
                href="/contact"
                className="ml-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors"
              >
                Get in touch
              </Link>
            </nav>

            {/* Mobile CTA */}
            <Link
              href="/contact"
              className="md:hidden px-4 py-2 rounded-full bg-accent text-accent-foreground text-xs font-semibold hover:bg-accent/90 transition-colors min-h-[40px] flex items-center"
            >
              Get in touch
            </Link>
          </div>
        </Container>
      </header>
    </>
  );
}
