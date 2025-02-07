import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';
import { NAV_ITEMS } from '@/constants/navigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = NAV_ITEMS.filter(item => item.label !== 'JoinNow');

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <Dumbbell className="h-8 w-8 text-red-500 transform transition-transform group-hover:rotate-12" />
            <span className="text-xl font-bold text-white relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 group-hover:after:w-full">
              PowerFit
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 relative
                  ${location.pathname === item.path 
                    ? 'text-red-500' 
                    : 'text-gray-200 hover:text-white'
                  }
                  after:content-[''] after:absolute after:-bottom-1 after:left-1/2 
                  after:w-0 after:h-0.5 after:bg-red-500 
                  after:transition-all after:duration-300 
                  hover:after:w-full hover:after:left-0
                `}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/join-now"
              className="relative overflow-hidden bg-red-500 text-white px-6 py-2 rounded-full font-medium 
                transition-all duration-300 transform hover:scale-105 hover:bg-red-600
                before:content-[''] before:absolute before:top-0 before:left-0 
                before:w-full before:h-full before:bg-white/20 
                before:translate-x-[-100%] hover:before:translate-x-[100%]
                before:transition-transform before:duration-500"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden text-white transition-transform duration-300 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'max-h-96 opacity-100 mt-4' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="space-y-4 pb-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 text-sm transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-red-500'
                    : 'text-gray-200 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/join-now"
              className="block bg-red-500 text-white px-6 py-2 rounded-full text-center font-medium 
                transition-all duration-300 hover:bg-red-600 transform hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;