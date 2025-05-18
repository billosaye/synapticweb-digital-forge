import React from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f',
    title: 'Nyanga Law Firm',
    category: 'Legal Services',
    description: 'A professional law firm providing comprehensive legal services with expertise in corporate, family, and civil law matters.',
    link: 'https://www.nyangalaw.org/'
  },
  {
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8',
    title: 'Billy Essays',
    category: 'Academic Writing',
    description: 'Professional essay writing and academic assistance platform helping students achieve their educational goals.',
    link: 'https://billyessays.vercel.app/'
  },
  {
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
    title: 'Imara Mediplus Hospital',
    category: 'Healthcare',
    description: 'A multi-specialty healthcare facility providing world-class medical services with a focus on patient care and comfort.',
    link: 'https://imaramed.org/'
  },
  {
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433',
    title: 'Citizens Impart',
    category: 'Charity Organization',
    description: 'Dedicated to empowering communities through education, healthcare, and sustainable development initiatives.',
    link: 'https://www.citizens-impart.org/'
  },
  {
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09',
    title: 'Arrow Dental',
    category: 'Dental Care',
    description: 'Premier dental clinic offering comprehensive oral healthcare services with state-of-the-art facilities and expert care.',
    link: 'https://arrowdental.co.ke/'
  },
  {
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae',
    title: 'Mirenz Music School',
    category: 'Music Education',
    description: 'Inspiring musical excellence through comprehensive education and practice in various instruments and vocal training.',
    link: 'https://mirenzmusic.vercel.app/'
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
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-synaptic-indigo font-medium hover:text-synaptic-teal transition-colors"
                >
                  View Project <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>    
      </div>
    </section>
  );
};

export default PortfolioSection;
