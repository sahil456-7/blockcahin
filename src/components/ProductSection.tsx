import React from 'react';

interface ProductSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  bgColor?: string;
  textColor?: string;
  reverse?: boolean;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  subtitle,
  description,
  image,
  bgColor = 'bg-white',
  textColor = 'text-black',
  reverse = false
}) => {
  return (
    <section className={`${bgColor} ${textColor} py-16 md:py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
          
          <div className={`${reverse ? 'lg:col-start-2' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
              {title}
            </h2>
            <p className="text-xl md:text-2xl mb-6 opacity-80 font-light">
              {subtitle}
            </p>
            <p className="text-lg mb-8 opacity-70 leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                Learn more
              </button>
              <button className="border border-current opacity-60 hover:opacity-100 px-6 py-3 rounded-full font-medium transition-all duration-300">
                Buy
              </button>
            </div>
          </div>

          <div className={`${reverse ? 'lg:col-start-1' : ''}`}>
            <img
              src={image}
              alt={title}
              className="w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;