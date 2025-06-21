import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Blocks, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Technology',
      links: [
        { name: 'Blockchain', path: '/blockchain' },
        { name: 'AI/ML', path: '/ai-ml' },
        { name: 'Deep Learning', path: '/deep-learning' },
        { name: 'Research', path: '/research' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise', path: '/solutions' },
        { name: 'Products', path: '/products' },
        { name: 'Services', path: '/services' },
        { name: 'Consulting', path: '/services' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', path: '/support' },
        { name: 'Documentation', path: '/support' },
        { name: 'API Reference', path: '/support' },
        { name: 'Community', path: '/support' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                <Blocks className="w-8 h-8 text-cyan-400" />
                <Brain className="w-8 h-8 text-purple-400 -ml-2" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                BlockchainAI
              </span>
            </Link>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Leading the future of technology with innovative blockchain and AI solutions.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-400">contact@blockchainai.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-400">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-400">San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 BlockchainAI. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200">Terms of Service</Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;