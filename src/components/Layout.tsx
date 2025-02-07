import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/classes', label: 'Classes' },
    { path: '/membership', label: 'Membership' },
    { path: '/trainers', label: 'Trainers' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/join-now', label: 'JoinNow' },
  ];

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-red-500" />
            <span className="text-xl font-bold text-white">PowerFit</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-red-500'
                    : 'text-gray-200 hover:text-red-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/join"
              className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition-colors"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 text-sm ${
                  location.pathname === item.path
                    ? 'text-red-500'
                    : 'text-gray-200'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/join"
              className="block mt-4 bg-red-500 text-white px-6 py-2 rounded-full text-center font-medium"
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="h-6 w-6 text-red-500" />
              <span className="text-lg font-bold text-white">PowerFit</span>
            </div>
            <p className="text-sm">
              Transform your life through fitness. Join our community and achieve
              your health goals.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/classes" className="hover:text-red-400">Classes</Link></li>
              <li><Link to="/membership" className="hover:text-red-400">Membership</Link></li>
              <li><Link to="/schedule" className="hover:text-red-400">Schedule</Link></li>
              <li><Link to="/trainers" className="hover:text-red-400">Trainers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>123 Fitness Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@powerfit.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Hours</h3>
            <ul className="space-y-2 text-sm">
              <li>Monday - Friday: 5am - 11pm</li>
              <li>Saturday: 7am - 8pm</li>
              <li>Sunday: 8am - 6pm</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} PowerFit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
}