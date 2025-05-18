
import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section id="contact" className="section bg-synaptic-gray">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-3 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-synaptic-charcoal mb-4">
                Ready to Build Something Great?
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you're launching your startup or rebranding your platform, we'll help bring your vision to life.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring focus:ring-synaptic-teal/20 focus:border-synaptic-teal outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring focus:ring-synaptic-teal/20 focus:border-synaptic-teal outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="project" className="block text-sm font-medium mb-1">
                    Project Details
                  </label>
                  <textarea
                    id="project"
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring focus:ring-synaptic-teal/20 focus:border-synaptic-teal outline-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <div>
                  <button type="submit" className="btn-primary w-full">
                    Request a Free Quote
                  </button>
                </div>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-gray-500 text-sm">
                  or <a href="#" className="text-synaptic-teal hover:underline">schedule a discovery call</a>
                </p>
              </div>
            </div>
            
            <div className="md:col-span-2 bg-gradient-to-br from-synaptic-indigo to-synaptic-teal p-8 md:p-12 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">
                Why Work With Us
              </h3>
              
              <ul className="space-y-4">
                {[
                  "Dedicated team of designers & developers",
                  "Transparent communication & process",
                  "Focus on performance & user experience",
                  "Post-launch support & optimization"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-white text-synaptic-teal flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="italic text-sm">
                  "Working with SynapticWeb was a game-changer for our business. They delivered on time and on budget."
                </p>
                <p className="text-xs mt-2 font-medium">
                  — Recent Client
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
