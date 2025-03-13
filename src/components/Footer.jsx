import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint as Paw, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Paw className="h-6 w-6 text-rose-500" />
              <span className="ml-2 text-xl font-bold">PawStay</span>
            </div>
            <p className="text-gray-300 text-sm">
              Find the perfect home away from home for your furry friend.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">PawStay</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white text-sm">Careers</Link></li>
              <li><Link to="/press" className="text-gray-300 hover:text-white text-sm">Press</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white text-sm">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Host</h3>
            <ul className="space-y-2">
              <li><Link to="/become-host" className="text-gray-300 hover:text-white text-sm">Become a Host</Link></li>
              <li><Link to="/responsible-hosting" className="text-gray-300 hover:text-white text-sm">Responsible Hosting</Link></li>
              <li><Link to="/host-resources" className="text-gray-300 hover:text-white text-sm">Resources</Link></li>
              <li><Link to="/community-forum" className="text-gray-300 hover:text-white text-sm">Community Forum</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-300 hover:text-white text-sm">Help Center</Link></li>
              <li><Link to="/safety" className="text-gray-300 hover:text-white text-sm">Safety Information</Link></li>
              <li><Link to="/cancellation" className="text-gray-300 hover:text-white text-sm">Cancellation Options</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white text-sm">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">© 2025 PawStay, Inc. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-300 hover:text-white text-sm">Privacy</Link>
              <Link to="/terms" className="text-gray-300 hover:text-white text-sm">Terms</Link>
              <Link to="/sitemap" className="text-gray-300 hover:text-white text-sm">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;