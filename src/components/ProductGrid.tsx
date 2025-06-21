import React from 'react';

const ProductGrid = () => {
  const products = [
    {
      name: 'MacBook Air',
      tagline: 'Supercharged by M2',
      price: 'From $1,199',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgColor: 'bg-gray-100'
    },
    {
      name: 'iPad Pro',
      tagline: 'Supercharged by M2',
      price: 'From $799',
      image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgColor: 'bg-purple-100'
    },
    {
      name: 'Apple Watch',
      tagline: 'Series 9',
      price: 'From $399',
      image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgColor: 'bg-blue-100'
    },
    {
      name: 'AirPods Pro',
      tagline: '2nd generation',
      price: 'From $249',
      image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgColor: 'bg-green-100'
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 tracking-tight">
          Explore the lineup
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`${product.bgColor} rounded-3xl p-8 text-center group cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500"
              />
              
              <h3 className="text-2xl font-semibold mb-2">
                {product.name}
              </h3>
              
              <p className="text-lg text-gray-600 mb-4">
                {product.tagline}
              </p>
              
              <p className="text-xl font-medium text-blue-600 mb-6">
                {product.price}
              </p>
              
              <div className="flex flex-col gap-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300">
                  Learn more
                </button>
                <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;