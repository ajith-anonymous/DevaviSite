import { Star } from 'lucide-react';
import Container from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/content/testimonials';

export default function Testimonials() {
  return (
    <section className="section-padding bg-muted">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-section text-foreground mb-4">
            What our clients say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what founders and marketing leads say about working with Devavi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${
                    testimonial.id === '1' ? 'from-blue-500 to-purple-600' :
                    testimonial.id === '2' ? 'from-green-500 to-teal-600' :
                    testimonial.id === '3' ? 'from-purple-500 to-pink-600' :
                    'from-orange-500 to-red-600'
                  } rounded-full flex items-center justify-center text-white font-semibold`}>
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex text-yellow-400">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
