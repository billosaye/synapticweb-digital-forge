
import React from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    title: 'TechCloud Platform',
    category: 'Web Application',
    description: 'A cloud services dashboard with analytics and real-time monitoring.'
  },
  {
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    title: 'FutureBrand',
    category: 'Branding & Website',
    description: 'Complete digital rebrand and website for tech startup.'
  },
  {
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    title: 'CodeConnect',
    category: 'Developer Platform',
    description: 'Community platform connecting developers with collaborative projects.'
  }
];

const PortfolioSection: React.FC = () => {
  return (
    <section id="work" className="section bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-synaptic-charcoal">
              Selected Work
            </h2>
            <p className="text-gray-600 mt-2">
              Explore a few of our favorite client builds
            </p>
          </div>
          <a 
            href="#" 
            className="hidden md:flex items-center gap-2 text-synaptic-indigo hover:text-synaptic-teal transition-colors"
          >
            See Full Portfolio <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group overflow-hidden rounded-xl bg-synaptic-gray bg-opacity-20 hover:shadow-lg transition-all"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-synaptic-teal">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-1 mb-2 text-synaptic-charcoal">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-synaptic-indigo font-medium hover:text-synaptic-teal transition-colors"
                >
                  View Project <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-synaptic-indigo hover:text-synaptic-teal transition-colors"
          >
            See Full Portfolio <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
