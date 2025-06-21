import React from 'react';
import { Headphones, Volume2, Mic, Battery } from 'lucide-react';

const AirPods = () => {
  const airPodsModels = [
    {
      name: 'AirPods Pro (2nd generation)',
      tagline: 'Adaptive Audio. Now playing.',
      price: 'From $249',
      image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Active Noise Cancellation', 'Adaptive Audio', 'Personalized Spatial Audio', 'Up to 6 hours listening']
    },
    {
      name: 'AirPods (3rd generation)',
      tagline: 'All-new design. Spatial Audio.',
      price: 'From $179',
      image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Personalized Spatial Audio', 'Adaptive EQ', 'Sweat and water resistant', 'Up to 6 hours listening']
    },
    {
      name: 'AirPods (2nd generation)',
      tagline: 'Double the magic.',
      price: 'From $129',
      image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Quick access to Siri', 'More than 24 hours total listening', 'Effortless setup', 'Audio Sharing']
    },
    {
      name: 'AirPods Max',
      tagline: 'Computational audio meets luxury.',
      price: 'From $549',
      image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Active Noise Cancellation', 'Transparency mode', 'Spatial Audio', 'Up to 20 hours listening']
    }
  ];

  const features = [
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Immersive Sound',
      description: 'Rich, high-quality audio with Adaptive EQ'
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: 'Spatial Audio',
      description: 'Theater-like sound that surrounds you'
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: 'Clear Calls',
      description: 'Crystal-clear call quality with beamforming microphones'
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: 'All-Day Battery',
      description: 'Up to 30 hours of listening time with charging case'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
            AirPods
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light max-w-3xl mx-auto">
            Wireless. Effortless. Magical. The ultimate personal audio experience.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="bg-white text-indigo-900 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Shop AirPods
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
              Compare models
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="AirPods"
              className="w-full max-w-2xl mx-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* AirPods Models */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 tracking-tight">
            Choose your AirPods
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {airPodsModels.map((airpods, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={airpods.image}
                  alt={airpods.name}
                  className="w-full h-48 object-cover rounded-2xl mb-6"
                />
                
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  {airpods.name}
                </h3>
                
                <p className="text-lg text-gray-600 mb-4">
                  {airpods.tagline}
                </p>
                
                <p className="text-xl font-medium text-indigo-600 mb-6">
                  {airpods.price}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {airpods.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col gap-2">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
                    Buy now
                  </button>
                  <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
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
            Why AirPods
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-indigo-600">
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

export default AirPods;