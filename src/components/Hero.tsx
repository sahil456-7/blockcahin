import React from 'react';

const Hero = () => {
  return (
    <section className="bg-black text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4 tracking-tight">
          iPhone 15 Pro
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light">
          Titanium. So strong. So light. So Pro.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
            Learn more
          </button>
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300">
            Buy
          </button>
        </div>

        <div className="relative">
          <img
            src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="iPhone 15 Pro"
            className="w-full max-w-2xl mx-auto rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;