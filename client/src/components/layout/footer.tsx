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
    <footer className="bg-slate-900 text-white">
      <Container>
        <div className="section-padding">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">Devavi Media</div>
              <p className="text-slate-300 mb-6 max-w-md">
                Performance marketing agency focused on clarity, transparency, and results that actually move the needle.
              </p>
              <div className="flex space-x-4">
                {footerNavigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label={item.name}
                  >
                    <item.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-300">
                {footerNavigation.services.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}>
                      <a className="hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-300">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}>
                      <a className="hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Devavi Media. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm mt-4 md:mt-0">
              Made with ❤️ by founders, for founders.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
