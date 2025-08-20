import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Container from '@/components/ui/container';

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

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
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <a className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
                  Devavi Media
                </a>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8" aria-label="Main navigation">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a 
                    className={cn(
                      "font-medium transition-colors duration-200",
                      location === item.href 
                        ? "text-primary" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <Link href="/contact">
                <Button className="font-medium">
                  Book a call
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </Container>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b border-border">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a 
                    className={cn(
                      "block px-3 py-2 font-medium transition-colors",
                      location === item.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
              <Link href="/contact">
                <Button className="mx-3 mt-4 w-[calc(100%-1.5rem)]">
                  Book a call
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
