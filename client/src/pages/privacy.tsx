import { useEffect } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Container from '@/components/ui/container';
import Section from '@/components/ui/section';

export default function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Devavi Media';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Privacy Policy for Devavi Media. Learn how we collect, use, and protect your personal information.');
    }
  }, []);

  return (
    <>
      <Header />
      <main id="main-content">
        <Section className="pt-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: January 1, 2024
            </p>

            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Information We Collect
              </h2>
              <p className="text-muted-foreground mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li>Fill out our contact form</li>
                <li>Subscribe to our newsletter</li>
                <li>Communicate with us via email</li>
                <li>Use our website and services</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Information Sharing
              </h2>
              <p className="text-muted-foreground mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li>Service providers who assist us in operating our website</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your explicit consent</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Data Security
              </h2>
              <p className="text-muted-foreground mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Cookies and Analytics
              </h2>
              <p className="text-muted-foreground mb-6">
                We use cookies and similar technologies to enhance your browsing experience and analyze website traffic. We use Google Analytics to understand how visitors interact with our website. You can opt out of Google Analytics by installing the Google Analytics opt-out browser add-on.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Your Rights
              </h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Contact Information
              </h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-foreground font-medium">Devavi Media</p>
                <p className="text-muted-foreground">Email: privacy@devavimedia.com</p>
                <p className="text-muted-foreground">We will respond to your inquiry within 30 days.</p>
              </div>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-muted-foreground mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
