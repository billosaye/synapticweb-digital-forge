import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section id="contact" className="section bg-synaptic-gray py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3 p-10 md:p-16">
              <h2 className="text-4xl md:text-5xl font-bold text-synaptic-charcoal mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 text-lg mb-12">
                Whether you're launching your startup or rebranding your platform, we'll help bring your vision to life.
              </p>
              
              <div className="space-y-8">
                <a 
                  href="mailto:osayebilly98@gmail.com"
                  className="flex items-center gap-4 px-8 py-5 bg-synaptic-teal text-white rounded-xl hover:bg-synaptic-teal/90 transition-colors text-lg font-medium"
                >
                  <Mail size={28} />
                  <span>Email Us</span>
                </a>
                
                <a 
                  href="https://wa.me/254746220913"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-8 py-5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors text-lg font-medium"
                >
                  <MessageCircle size={28} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
            
            <div className="md:col-span-2 bg-gradient-to-br from-synaptic-indigo to-synaptic-teal p-10 md:p-16 text-white flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-8">
                Why Work With Us
              </h3>
              
              <ul className="space-y-6">
                {[
                  "Dedicated team of designers & developers",
                  "Transparent communication & process",
                  "Focus on performance & user experience",
                  "Post-launch support & optimization"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <span className="w-6 h-6 rounded-full bg-white text-synaptic-teal flex items-center justify-center text-sm font-bold">
                      ✓
                    </span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <p className="italic text-base">
                  "Working with SynapticWeb was a game-changer for our business. They delivered on time and on budget."
                </p>
                <p className="text-sm mt-3 font-medium">
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
