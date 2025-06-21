import React from 'react';
import { ShoppingBag, Truck, CreditCard, Headphones } from 'lucide-react';

const Store = () => {
  const categories = [
    {
      name: 'Mac',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Desktops and laptops'
    },
    {
      name: 'iPad',
      image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Touch the future'
    },
    {
      name: 'iPhone',
      image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'The ultimate smartphone'
    },
    {
      name: 'Apple Watch',
      image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Health and fitness companion'
    },
    {
      name: 'AirPods',
      image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Wireless audio experience'
    },
    {
      name: 'Accessories',
      image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete your setup'
    }
  ];

  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Free Delivery',
      description: 'Free delivery on all orders over $35'
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Easy Payment',
      description: 'Pay monthly at 0% APR when you choose to check out with Apple Card Monthly Installments'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Expert Support',
      description: 'Get help buying with a Specialist or get technical support'
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: 'Personal Setup',
      description: 'We can set up your new Apple product and get you going'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight text-gray-900">
            Apple Store
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 font-light max-w-3xl mx-auto">
            The best way to buy the products you love. With specialist help, personal setup, and more.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
            Shop now
          </button>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 tracking-tight">
            Shop by Category
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gray-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                    {category.name}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {category.description}
                  </p>
                  
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
                    Shop {category.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 tracking-tight">
            Why shop with Apple
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

export default Store;