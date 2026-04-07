import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import Container from '@/components/ui/container';
import logoSrc from '@assets/Devavi_1775518074214.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    function handleOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-accent-foreground px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <div className="sticky top-0 z-40" ref={menuRef}>
        <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
          <Container>
            <div className="flex justify-between items-center h-14 md:h-16">
              {/* Wordmark */}
              <Link href="/" className="hover:opacity-80 transition-opacity min-h-[44px] flex items-center gap-1">
                <img
                  src={logoSrc}
                  alt="Devavi logo"
                  className="h-8 w-auto"
                  style={{ mixBlendMode: 'screen' }}
                />
                <span
                  className="text-foreground uppercase tracking-widest font-extrabold text-base md:text-[22px]"
                  style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
                >
                  Devavi Media
                </span>
              </Link>

              {/* Nav — same on all screen sizes */}
              <div className="flex items-center gap-3">
                <a
                  href="https://calendly.com/hello-devavimedia/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors text-xs md:text-sm whitespace-nowrap"
                >
                  <span className="md:hidden">Book a Call</span>
                  <span className="hidden md:inline">Book a Discovery Call</span>
                </a>
                <button
                  onClick={() => setMenuOpen((o) => !o)}
                  aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={menuOpen}
                  className="w-9 h-9 rounded-full bg-muted border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                >
                  {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </Container>
        </header>

        {/* Dropdown — shown on all screen sizes when open */}
        {menuOpen && (
          <div className="absolute left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 px-4 py-3 flex flex-col gap-1">
            <a
              href="/#testimonials"
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="/#our-process"
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
            >
              Our Process
            </a>
            <a
              href="/#request-callback"
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
            >
              Request a Callback
            </a>
          </div>
        )}
      </div>
    </>
  );
}
