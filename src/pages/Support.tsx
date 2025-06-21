import React from 'react';
import { Phone, MessageCircle, Book, PenTool as Tool, Users, Clock, Mail, HelpCircle } from 'lucide-react';

const Support = () => {
  const supportOptions = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      action: 'Call +1 (555) 123-4567',
      available: '24/7 Available'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Live Chat',
      description: 'Get instant help through our chat system',
      action: 'Start Chat',
      available: 'Online Now'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      action: 'Send Email',
      available: '< 2 hour response'
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      action: 'Browse Docs',
      available: 'Always Available'
    }
  ];

  const resources = [
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: 'FAQ',
      description: 'Find answers to commonly asked questions',
      link: '/faq'
    },
    {
      icon: <Tool className="w-8 h-8" />,
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      link: '/api-docs'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Forum',
      description: 'Connect with other developers and users',
      link: '/community'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'System Status',
      description: 'Check the current status of our services',
      link: '/status'
    }
  ];

  const popularTopics = [
    'Getting started with blockchain development',
    'AI model training and deployment',
    'Deep learning best practices',
    'API authentication and security',
    'Performance optimization tips',
    'Troubleshooting common issues',
    'Integration with existing systems',
    'Billing and account management'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Support Center
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light max-w-3xl mx-auto">
            Get the help you need to succeed with our blockchain and AI solutions. Our expert support team is here to assist you 24/7.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help topics, documentation, or FAQs..."
                className="w-full px-6 py-4 text-lg rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-lg text-gray-900"
              />
              <button className="absolute right-2 top-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">
            Get Support
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex justify-center mb-4 text-purple-600">
                  {option.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {option.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {option.description}
                </p>
                
                <p className="text-sm text-green-600 mb-4 font-medium">
                  {option.available}
                </p>
                
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 w-full">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">
            Self-Service Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 hover:border-purple-300"
              >
                <div className="flex justify-center mb-4 text-purple-600">
                  {resource.icon}
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-gray-900">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {resource.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">
            Popular Help Topics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularTopics.map((topic, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300 cursor-pointer border border-gray-200 hover:border-purple-300"
              >
                <p className="text-gray-800 font-medium">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Support */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            Enterprise Support
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Need dedicated support for your enterprise? Our premium support plans include priority assistance, dedicated account managers, and custom SLAs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Contact Sales
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;