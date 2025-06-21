import React from 'react';
import { Cpu, Monitor, Zap, Shield } from 'lucide-react';

const Mac = () => {
  const macModels = [
    {
      name: 'MacBook Air',
      tagline: 'Supercharged by M3',
      price: 'From $1,099',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['M3 chip', '18-hour battery', '13.6" Liquid Retina display', 'Up to 24GB memory']
    },
    {
      name: 'MacBook Pro 14"',
      tagline: 'Mind-blowing performance',
      price: 'From $1,999',
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      features: ['M3 Pro or M3 Max', '22-hour battery', '14.2" Liquid Retina XDR', 'Up to 128GB memory']
    },
    {
      name: 'iMac 24"',
      tagline: 'Packed with power',
      price: 'From $1,299',
      image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['M3 chip', '24" 4.5K Retina display', '7 vibrant colors', 'Up to 24GB memory']
    },
    {
      name: 'Mac Studio',
      tagline: 'Outrageous performance',
      price: 'From $1,999',
      image: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=800',
      features: ['M2 Max or M2 Ultra', 'Extensive connectivity', 'Compact design', 'Up to 192GB memory']
    }
  ];

  const features = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Apple Silicon',
      description: 'Revolutionary performance and efficiency with M3 chip technology'
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Stunning Displays',
      description: 'Brilliant Retina displays with incredible color accuracy'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'All-Day Battery',
      description: 'Up to 22 hours of battery life for uninterrupted productivity'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Built-in Security',
      description: 'Advanced security features built into every Mac'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
            Mac
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light max-w-3xl mx-auto">
            If you can dream it, Mac can do it. Supercharged by Apple silicon.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Shop Mac
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
              Compare models
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="MacBook"
              className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Mac Models */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 tracking-tight">
            Choose your Mac
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {macModels.map((mac, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={mac.image}
                  alt={mac.name}
                  className="w-full h-48 object-cover rounded-2xl mb-6"
                />
                
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  {mac.name}
                </h3>
                
                <p className="text-lg text-gray-600 mb-4">
                  {mac.tagline}
                </p>
                
                <p className="text-xl font-medium text-blue-600 mb-6">
                  {mac.price}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {mac.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col gap-2">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
                    Buy now
                  </button>
                  <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 tracking-tight">
            Why Mac
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mac;