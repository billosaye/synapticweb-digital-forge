
import React from 'react';

const featuredTestimonial = {
  quote: "SynapticWeb elevated our digital presence — sleek, fast, and on-brand. Their team understood our vision from day one and delivered a website that exceeded our expectations.",
  author: "Sarah Johnson",
  position: "CEO",
  company: "InnovateTech",
};

const testimonials = [
  {
    quote: "Incredible team that delivers results.",
    author: "Alex Chen",
    company: "StartupLabs",
  },
  {
    quote: "Game-changing design and development.",
    author: "Maria Rodriguez",
    company: "FutureScale",
  },
  {
    quote: "Flawless execution and excellent support.",
    author: "David Kim",
    company: "TechNova",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="section bg-gradient-to-br from-synaptic-gray to-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-xl p-8 shadow-lg relative">
            <div className="absolute -top-4 -left-4 text-5xl text-synaptic-coral opacity-20">
              "
            </div>
            <blockquote>
              <p className="text-xl leading-relaxed text-gray-700 mb-6">
                {featuredTestimonial.quote}
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 bg-synaptic-indigo rounded-full flex items-center justify-center text-white font-bold">
                  {featuredTestimonial.author.split(' ')[0][0] + featuredTestimonial.author.split(' ')[1][0]}
                </div>
                <div>
                  <p className="font-bold text-synaptic-charcoal">
                    {featuredTestimonial.author}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {featuredTestimonial.position}, {featuredTestimonial.company}
                  </p>
                </div>
              </footer>
            </blockquote>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-synaptic-charcoal">
              What Our Clients Say
            </h2>
            <div className="grid gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.author}
                  className="bg-white p-6 rounded-xl shadow-md relative overflow-hidden"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-synaptic-teal to-synaptic-coral" />
                  <blockquote>
                    <p className="text-gray-700 mb-4">
                      "{testimonial.quote}"
                    </p>
                    <footer>
                      <p className="font-medium text-synaptic-charcoal">
                        {testimonial.author}, <span className="text-gray-600">{testimonial.company}</span>
                      </p>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
