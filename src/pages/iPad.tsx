import React from 'react';
import { Tablet, Pencil, Keyboard, Camera } from 'lucide-react';

const iPad = () => {
  const iPadModels = [
    {
      name: 'iPad Pro',
      tagline: 'Supercharged by M4',
      price: 'From $999',
      image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['M4 chip', '12.9" Liquid Retina XDR', 'Apple Pencil Pro support', 'Thunderbolt connectivity']
    },
    {
      name: 'iPad Air',
      tagline: 'Light. Bright. Full of might.',
      price: 'From $599',
      image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['M2 chip', '10.9" Liquid Retina', 'Apple Pencil (2nd gen)', 'USB-C connectivity']
    },
    {
      name: 'iPad',
      tagline: 'Colorfully reimagined',
      price: 'From $329',
      image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['A14 Bionic chip', '10.9" Liquid Retina', 'Apple Pencil (1st gen)', 'Available in 4 colors']
    },
    {
      name: 'iPad mini',
      tagline: 'Mega power. Mini size.',
      price: 'From $499',
      image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['A15 Bionic chip', '8.3" Liquid Retina', 'Apple Pencil (2nd gen)', 'Ultra-portable design']
    }
  ];

  const features = [
    {
      icon: <Tablet className="w-8 h-8" />,
      title: 'Versatile Design',
      description: 'Thin, light, and powerful - perfect for work and play'
    },
    {
      icon: <Pencil className="w-8 h-8" />,
      title: 'Apple Pencil',
      description: 'Precision drawing and note-taking with pixel-perfect accuracy'
    },
    {
      icon: <Keyboard className="w-8 h-8" />,
      title: 'Magic Keyboard',
      description: 'Transform your iPad into a laptop-like experience'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Pro Cameras',
      description: 'Advanced camera system for stunning photos and videos'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
            iPad
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light max-w-3xl mx-auto">
            Touch the future. Your next computer is not a computer.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Shop iPad
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
              Compare models
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="iPad"
              className="w-full max-w-3xl mx-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* iPad Models */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 tracking-tight">
            Which iPad is right for you?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {iPadModels.map((ipad, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={ipad.image}
                  alt={ipad.name}
                  className="w-full h-48 object-cover rounded-2xl mb-6"
                />
                
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  {ipad.name}
                </h3>
                
                <p className="text-lg text-gray-600 mb-4">
                  {ipad.tagline}
                </p>
                
                <p className="text-xl font-medium text-purple-600 mb-6">
                  {ipad.price}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {ipad.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col gap-2">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
                    Buy now
                  </button>
                  <button className="border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
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
            What makes iPad so versatile
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-purple-600">
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

export default iPad;