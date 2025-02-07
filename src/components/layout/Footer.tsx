import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';
import { FOOTER_LINKS, CONTACT_INFO, BUSINESS_HOURS } from '@/constants/footer';

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
              {FOOTER_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-red-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              {CONTACT_INFO.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Hours</h3>
            <ul className="space-y-2 text-sm">
              {BUSINESS_HOURS.map((hours, index) => (
                <li key={index}>{hours}</li>
              ))}
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

export default Footer;