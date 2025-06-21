import React from 'react';
import { Smartphone, Camera, Battery, Shield } from 'lucide-react';

const iPhone = () => {
  const iPhoneModels = [
    {
      name: 'iPhone 15 Pro',
      tagline: 'Titanium. So strong. So light. So Pro.',
      price: 'From $999',
      image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['A17 Pro chip', 'Pro camera system', 'Titanium design', 'Action Button']
    },
    {
      name: 'iPhone 15',
      tagline: 'New camera. New design. Newphoria.',
      price: 'From $799',
      image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['A16 Bionic chip', '48MP Main camera', 'Dynamic Island', 'USB-C']
    },
    {
      name: 'iPhone 14',
      tagline: 'Big and bigger.',
      price: 'From $699',
      image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['A15 Bionic chip', 'Advanced camera system', 'Crash Detection', 'Emergency SOS']
    },
    {
      name: 'iPhone SE',
      tagline: 'Lots to love. Less to spend.',
      price: 'From $429',
      image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['A15 Bionic chip', 'Home button with Touch ID', '4.7" Retina HD display', 'Wireless charging']
    }
  ];

  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Advanced Display',
      description: 'Super Retina XDR display with ProMotion technology'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Pro Camera System',
      description: 'Capture stunning photos and videos in any light'
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: 'All-Day Battery',
      description: 'Up to 29 hours of video playback'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Privacy & Security',
      description: 'Your data stays private with advanced security features'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
            iPhone
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light max-w-3xl mx-auto">
            Designed to be loved. Built to last. Created to make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Shop iPhone
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
              Compare models
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="iPhone"
              className="w-full max-w-2xl mx-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* iPhone Models */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 tracking-tight">
            Find the iPhone that's right for you
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {iPhoneModels.map((iphone, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={iphone.image}
                  alt={iphone.name}
                  className="w-full h-48 object-cover rounded-2xl mb-6"
                />
                
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  {iphone.name}
                </h3>
                
                <p className="text-lg text-gray-600 mb-4">
                  {iphone.tagline}
                </p>
                
                <p className="text-xl font-medium text-blue-600 mb-6">
                  {iphone.price}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {iphone.features.map((feature, featureIndex) => (
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
            Why iPhone
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

export default iPhone;