import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MessageSquare, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Container from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { contactFormSchema, type ContactForm } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const benefits = [
  {
    icon: MessageSquare,
    title: 'Free strategy call',
    description: 'We\'ll audit your current setup and give you honest feedback',
  },
  {
    icon: CheckCircle,
    title: 'Realistic projections',
    description: 'No inflated promises, just honest numbers based on your industry',
  },
  {
    icon: Clock,
    title: 'Quick response',
    description: 'We\'ll get back to you within 24 hours, guaranteed',
  },
];

const adSpendOptions = [
  { value: 'under_50k', label: 'Under ₹50k' },
  { value: '50k_2l', label: '₹50k - ₹2L' },
  { value: '2l_5l', label: '₹2L - ₹5L' },
  { value: '5l_10l', label: '₹5L - ₹10L' },
  { value: 'above_10l', label: 'Above ₹10L' },
];

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      adSpend: '',
      message: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: 'Message sent successfully!',
        description: data.message,
      });
      form.reset();
      setIsSubmitted(true);
      // Invalidate and refetch any contact-related queries
      queryClient.invalidateQueries({ queryKey: ['/api/contacts'] });
    },
    onError: (error) => {
      toast({
        title: 'Error sending message',
        description: 'Something went wrong. Please try again or email us directly.',
        variant: 'destructive',
      });
      console.error('Contact form error:', error);
    },
  });

  const onSubmit = (data: ContactForm) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="section-padding bg-slate-900 text-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-section text-white mb-6">
              Ready for clarity-first performance marketing?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              We work with no more than 20 clients at a time. If you're looking for an agency that prioritizes results over rhetoric, let's talk.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card>
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Thank you for reaching out!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We'll get back to you within 24 hours with next steps.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Send another message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Work Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="adSpend"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Monthly Ad Spend *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {adSpendOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your business and marketing goals..."
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full"
                      size="lg"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Form>
              )}

              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Prefer to schedule directly?
                </p>
                <a 
                  href="#" 
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Book a 30-minute call →
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
