import React from 'react';
import Logo from '../ui/Logo';
import { Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-synaptic-charcoal text-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-4">
            <Logo className="text-white" />
            <p className="text-gray-300 mt-4">
              Future-ready websites. Designed today.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-synaptic-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-synaptic-teal transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-synaptic-teal transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Work', 'Services', 'Process', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-synaptic-teal transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {['Custom Web Design', 'Web Development', 'Branding & UX Strategy'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-300 hover:text-synaptic-teal transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-synaptic-teal mt-1" />
                <div>
                  <p className="text-gray-300">Parklands, Nairobi</p>
                  <p className="text-gray-300">MegaCity, Kisumu</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-synaptic-teal" />
                <a href="tel:+254746220913" className="text-gray-300 hover:text-synaptic-teal transition-colors">
                  +254 746 220 913
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-synaptic-teal" />
                <a href="mailto:osayebilly98@gmail.com" className="text-gray-300 hover:text-synaptic-teal transition-colors">
                  osayebilly98@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Subscribe</h4>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest work and insights.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-white bg-opacity-10 text-white rounded-l-md focus:outline-none flex-1"
              />
              <button
                type="submit"
                className="bg-synaptic-teal px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SynapticWeb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
