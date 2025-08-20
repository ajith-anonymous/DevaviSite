export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    title: 'Founder',
    company: 'StyleCo',
    quote: 'Finally, an agency that doesn\'t oversell. Anushka personally managed our account and delivered exactly what she promised. Our ROAS improved 40% in the first quarter.',
    avatar: 'S',
    rating: 5,
  },
  {
    id: '2',
    name: 'Rohit Sharma',
    title: 'Marketing Head',
    company: 'TechFlow',
    quote: 'Devavi helped us understand our unit economics for the first time. Their transparent approach and realistic projections saved us from making costly mistakes.',
    avatar: 'R',
    rating: 5,
  },
  {
    id: '3',
    name: 'Priya Patel',
    title: 'Co-founder',
    company: 'HealthPlus',
    quote: 'The limited client approach really shows. We get response times and attention to detail that we never experienced with larger agencies.',
    avatar: 'P',
    rating: 5,
  },
  {
    id: '4',
    name: 'Arjun Kumar',
    title: 'Founder',
    company: 'EduTech Solutions',
    quote: 'Swastik and Anushka don\'t just run campaigns - they educate us on the \'why\' behind every decision. It\'s like having in-house experts.',
    avatar: 'A',
    rating: 5,
  },
];
