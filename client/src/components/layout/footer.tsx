import Container from '@/components/ui/container';
import { SiLinkedin, SiInstagram } from 'react-icons/si';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <Container>
        <div className="py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <p
              className="text-foreground uppercase tracking-widest font-extrabold text-[18px] mb-1"
              style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
            >
              Devavi Media
            </p>
            <a
              href="mailto:hello@devavimedia.com"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors justify-center sm:justify-start"
            >
              <Mail className="w-3.5 h-3.5" />
              hello@devavimedia.com
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/105331753/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/50 transition-all duration-200"
            >
              <SiLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/devavimedia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/50 transition-all duration-200"
            >
              <SiInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="border-t border-border/40 py-4 text-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Devavi Media. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
