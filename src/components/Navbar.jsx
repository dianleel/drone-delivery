import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img src="/logo_drone.svg" alt="Logo" className="h-8 w-auto" />
            </Link>
            <div className="hidden md:ml-6 md:flex space-x-8">
              <Link to="/" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md">
                Home
              </Link>
              <Link to="/order" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md">
                Order Now
              </Link>
              <Link to="/advantages" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md">
                Advantages
              </Link>
              <Link to="/partners" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md">
                Our Partners
              </Link>
              <Link to="/how-it-works" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md">
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;