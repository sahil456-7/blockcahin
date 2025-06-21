import React from 'react';
import { Heart, Activity, Navigation, Phone } from 'lucide-react';

const Watch = () => {
  const watchModels = [
    {
      name: 'Apple Watch Series 9',
      tagline: 'Smarter. Brighter. Mightier.',
      price: 'From $399',
      image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['S9 SiP', 'Double Tap gesture', 'Brighter display', 'Carbon neutral']
    },
    {
      name: 'Apple Watch Ultra 2',
      tagline: 'Next-level adventure.',
      price: 'From $799',
      image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['S9 SiP', '49mm titanium case', 'Action Button', '36-hour battery']
    },
    {
      name: 'Apple Watch SE',
      tagline: 'A great deal to love.',
      price: 'From $249',
      image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['S8 SiP', 'Crash Detection', 'Sleep tracking', 'Water resistant']
    }
  ];

  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health Monitoring',
      description: 'Track your heart rate, ECG, blood oxygen, and more'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Fitness Tracking',
      description: 'Built-in GPS and comprehensive workout tracking'
    },
    {
      icon: <Navigation className="w-8 h-8" />,
      title: 'Always-On Display',
      description: 'See your information at a glance, even when your wrist is down'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Stay Connected',
      description: 'Make calls, send texts, and use apps right from your wrist'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 to-pink-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
            Apple Watch
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light max-w-3xl mx-auto">
            Your essential companion for a healthy life. Now with more ways to stay connected.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="bg-white text-red-900 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Shop Apple Watch
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-red-900 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
              Compare models
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Apple Watch"
              className="w-full max-w-2xl mx-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Watch Models */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 tracking-tight">
            Find your perfect Apple Watch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {watchModels.map((watch, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="w-full h-48 object-cover rounded-2xl mb-6"
                />
                
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  {watch.name}
                </h3>
                
                <p className="text-lg text-gray-600 mb-4">
                  {watch.tagline}
                </p>
                
                <p className="text-xl font-medium text-red-600 mb-6">
                  {watch.price}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {watch.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col gap-2">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
                    Buy now
                  </button>
                  <button className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
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
            Why Apple Watch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-red-600">
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

export default Watch;