import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#1F2937] text-white p-4 flex items-center justify-between shadow-lg fixed w-full z-50 border-b border-[#4B5563]">
      {/* Left section for logo and brand name */}
      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:text-indigo-500 font-semibold transition duration-200">
          Trendy Apparel
        </Link>
      </div>

      {/* Mobile menu button */}
      <button 
        className="md:hidden block text-gray-300 focus:outline-none" 
        onClick={toggleMenu}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 5h16M4 12h16m-7 7h7" />
        </svg>
      </button>

      {/* Center section for menu items */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-8 mx-auto w-full md:w-auto`}>
        <Link to="/services" className="block md:inline-block px-4 py-2 md:p-0 hover:text-indigo-500 transition duration-200">
          Services
        </Link>
        <Link to="/about" className="block md:inline-block px-4 py-2 md:p-0 hover:text-indigo-500 transition duration-200">
          About
        </Link>
        <Link to="/contact" className="block md:inline-block px-4 py-2 md:p-0 hover:text-indigo-500 transition duration-200">
          Contact
        </Link>

        {/* Dropdown Menu for Women's Clothing Categories */}
        <div className="relative group">
          <button className="block md:inline-block px-4 py-2 md:p-0 hover:text-indigo-500 transition duration-200 focus:outline-none font-semibold">
            Women
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 border border-gray-200 rounded-lg shadow-xl hidden group-hover:block">
            <Link to="/women/dresses" className="block px-4 py-2 hover:bg-gray-100">
              Dresses
            </Link>
            <Link to="/women/tops" className="block px-4 py-2 hover:bg-gray-100">
              Tops
            </Link>
            <Link to="/women/skirts" className="block px-4 py-2 hover:bg-gray-100">
              Skirts
            </Link>
            <Link to="/women/pants" className="block px-4 py-2 hover:bg-gray-100">
              Pants
            </Link>
            <Link to="/women/accessories" className="block px-4 py-2 hover:bg-gray-100">
              Accessories
            </Link>
          </div>
        </div>
      </div>

      {/* Right section: Search, Cart */}
      <div className="hidden md:flex items-center space-x-6">
        {/* Search bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#292929] text-gray-300 rounded-full pl-10 pr-4 py-2 border border-gray-600 shadow-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10 2a8 8 0 105.292 14.708l4.366 4.367 1.415-1.415-4.367-4.366A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
          </svg>
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="hover:text-indigo-500">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h2l.4 2M7 13h10l1-5H6L7 13zm-1.4-7h15.8l-1.2 6H6.6l-.7-4h13.4M5 21c.83 0 1.5-.67 1.5-1.5S5.83 18 5 18s-1.5.67-1.5 1.5S4.17 21 5 21zm14 0c.83 0 1.5-.67 1.5-1.5S19.83 18 19 18s-1.5.67-1.5 1.5S18.17 21 19 21z" />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;