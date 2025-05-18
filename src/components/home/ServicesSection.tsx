
import React from 'react';
import { Layout, Code, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-10 h-10 text-synaptic-teal" />,
    title: 'Custom Web Design',
    description: 'Bespoke, user-first designs tailored to your brand identity and business goals.'
  },
  {
    icon: <Code className="w-10 h-10 text-synaptic-teal" />,
    title: 'Web Development',
    description: 'Responsive, scalable, and high-performance websites built with modern technologies.'
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-synaptic-teal" />,
    title: 'Branding & UX Strategy',
    description: 'From wireframes to full digital identity, creating cohesive brand experiences.'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-synaptic-charcoal">
            What We Do Best
          </h2>
          <p className="text-gray-600">
            We combine strategic thinking with technical expertise to deliver digital solutions 
            that drive results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-synaptic-gray bg-opacity-30 rounded-xl p-8 hover:shadow-lg transition-all group"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="mb-6 transform transition-transform group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-synaptic-charcoal">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
