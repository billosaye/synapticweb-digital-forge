import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section id="contact" className="section bg-synaptic-gray">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-3 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-synaptic-charcoal mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you're launching your startup or rebranding your platform, we'll help bring your vision to life.
              </p>
              
              <div className="space-y-6">
                <a 
                  href="mailto:osayebilly98@gmail.com"
                  className="flex items-center gap-3 px-6 py-4 bg-synaptic-teal text-white rounded-lg hover:bg-synaptic-teal/90 transition-colors"
                >
                  <Mail size={24} />
                  <span>Email Us</span>
                </a>
                
                <a 
                  href="https://wa.me/254746220913"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageCircle size={24} />
                  <span>Chat on WhatsApp</span>
                </a>
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
