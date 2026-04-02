import { Link } from 'wouter';
import Container from '@/components/ui/container';

const footerNavigation = {
  services: [
    { name: 'Paid Social', href: '/services#paid-social' },
    { name: 'Paid Search', href: '/services#paid-search' },
    { name: 'Analytics', href: '/services#analytics' },
    { name: 'CRO', href: '/services#cro' },
    { name: 'Creative Strategy', href: '/services#creative' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/work' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/legal/privacy' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <Container>
        <div className="py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-14 md:mb-16">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="text-lg font-bold text-foreground mb-3">Devavi Media</div>
              <p className="text-sm text-muted-foreground mb-6 max-w-xs leading-relaxed">
                Performance marketing with ruthless clarity. Co-founder-led. Limited clients. Unlimited focus.
              </p>
              <div className="flex gap-2">
                {footerNavigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-label={item.name}
                    className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 transition-all duration-200"
                  >
                    <item.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">Services</h3>
              <ul className="space-y-2.5">
                {footerNavigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">Company</h3>
              <ul className="space-y-2.5">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <p className="text-xs text-muted-foreground">
              © 2024 Devavi Media. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Made by founders, for founders.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
