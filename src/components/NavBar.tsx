import React from 'react';
import Logo from '../assets/zerodha.png';
import Logo2 from '../assets/poweredByStreak.9b530bec.png';

const NavBar = () => {
  return (
    <nav className=" bg-white shadow-sm fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-6 lg:pr-28">
        <div className="relative flex items-center justify-between h-16">
          {/* Logos with divider */}
          <div className="flex-shrink-0 flex items-center">
            {/* Logo 1 */}
            <img className="h-3 w-18" src={Logo} alt="Logo 1" />
            {/* Divider */}
            <div className="mx-2 border-r border-gray-300 h-6"></div>
            {/* Logo 2 */}
            <img className="h-6" src={Logo2} alt="Logo 2" />
          </div>
          {/* Navigation Links */}
          <div className="hidden md:block flex-grow">
            <div className="ml-10 flex items-baseline space-x-4 justify-end">
              <a href="#" className="text-gray-900 hover:bg-gray-100  px-5 py-2 rounded-md text-xs font-medium">Home</a>
              <a href="#" className="text-gray-100 bg-[#3f78cd] hover:text-white px-5 py-2 rounded-md text-xs font-medium">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
