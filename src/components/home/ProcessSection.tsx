
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Kickoff',
    description: 'We start with a discovery session to understand your goals, audience, and requirements.'
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our design team creates mockups and prototypes focused on user experience and your brand.'
  },
  {
    number: '03',
    title: 'Build',
    description: 'Our developers bring the designs to life with clean, efficient, and maintainable code.'
  },
  {
    number: '04',
    title: 'Launch',
    description: 'After thorough testing, we deploy your site and ensure everything runs smoothly.'
  },
  {
    number: '05',
    title: 'Support',
    description: 'We provide ongoing support and optimization to keep your site performing at its best.'
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="section bg-synaptic-charcoal text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Design Process
            </h2>
            <p className="text-gray-300">
              Discovery, design, and development — streamlined into a collaborative, agile workflow. 
              We keep you involved every step of the way.
            </p>
            <a href="#contact" className="inline-block btn-primary">
              Start Your Project
            </a>
          </div>
          
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-gradient-to-b from-synaptic-teal to-synaptic-coral" />
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.number} className="relative pl-16">
                  <div className="absolute left-0 flex items-center justify-center w-16 h-16">
                    <div className="absolute w-4 h-4 bg-synaptic-teal rounded-full z-10" />
                    <div className="absolute w-4 h-4 bg-synaptic-teal rounded-full animate-ping opacity-75" />
                  </div>
                  <div>
                    <span className="text-synaptic-teal opacity-60 text-lg font-medium">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-bold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
