import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Blocks, Zap, Shield, TrendingUp, Users, ArrowRight, Play } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Blocks className="w-12 h-12" />,
      title: 'Blockchain Technology',
      description: 'Secure, transparent, and decentralized solutions for the future of digital transactions.',
      link: '/blockchain'
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'Artificial Intelligence',
      description: 'Advanced AI and machine learning algorithms that transform data into actionable insights.',
      link: '/ai-ml'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Deep Learning',
      description: 'Neural networks and deep learning models that push the boundaries of what\'s possible.',
      link: '/deep-learning'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Enterprise Security',
      description: 'Military-grade security solutions powered by blockchain and AI technologies.',
      link: '/solutions'
    }
  ];

  const stats = [
    { number: '500+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50M+', label: 'Transactions Processed' },
    { number: '24/7', label: 'Global Support' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            The Future of
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Technology
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 font-light max-w-4xl mx-auto leading-relaxed">
            Harness the power of blockchain, artificial intelligence, and deep learning to transform your business and unlock unprecedented possibilities.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link
              to="/solutions"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Solutions
            </Link>
            <button className="flex items-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="AI Technology"
              className="w-full max-w-5xl mx-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Revolutionary Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our cutting-edge solutions are reshaping industries and creating new possibilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:border-purple-300"
              >
                <div className="flex justify-center mb-6 text-purple-600 group-hover:text-purple-700 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-purple-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center justify-center text-purple-600 group-hover:text-purple-700 font-medium">
                  Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our solutions power some of the world's most innovative companies.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-cyan-300">
                  {stat.number}
                </div>
                <div className="text-lg text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join thousands of companies already using our blockchain and AI solutions to drive innovation and growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/about"
              className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;