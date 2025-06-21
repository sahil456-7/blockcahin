import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, Brain, Blocks } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();

  const menuItems = [
    { name: 'Blockchain', path: '/blockchain' },
    { name: 'AI/ML', path: '/ai-ml' },
    { name: 'Deep Learning', path: '/deep-learning' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Products', path: '/products' },
    { name: 'Research', path: '/research' },
    { name: 'About', path: '/about' },
    { name: 'Support', path: '/support' }
  ];

  return (
    <header className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white sticky top-0 z-50 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center">
                <Blocks className="w-8 h-8 text-cyan-400" />
                <Brain className="w-8 h-8 text-purple-400 -ml-2" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                BlockchainAI
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium hover:text-cyan-400 transition-colors duration-200 ${
                  location.pathname === item.path ? 'text-cyan-400' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 cursor-pointer hover:text-cyan-400 transition-colors duration-200" />
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-cyan-400 transition-colors duration-200" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium hover:text-cyan-400 transition-colors duration-200 ${
                    location.pathname === item.path ? 'text-cyan-400' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;