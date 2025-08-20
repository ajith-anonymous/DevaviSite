import { useEffect } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ContactForm from '@/components/sections/contact-form';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us - Get in Touch | Devavi Media';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ready for clarity-first performance marketing? Contact Devavi Media for a free strategy consultation. We work with a limited number of clients for deeper involvement.');
    }
  }, []);

  return (
    <>
      <Header />
      <main id="main-content">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
