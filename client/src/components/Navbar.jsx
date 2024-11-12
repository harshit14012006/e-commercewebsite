// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-200 via-white to-blue-200 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-3xl font-semibold text-gray-900 flex items-center space-x-1 transform hover:text-blue-700 transition duration-300 ease-in-out"
              aria-label="E-commerce Home"
            >
              <span className="text-blue-600">E</span>
              <span className="text-blue-500">Shop</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-800 hover:text-blue-600 transition duration-200"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-800 hover:text-blue-600 transition duration-200"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-blue-600 transition duration-200"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-blue-600 transition duration-200"
            >
              Contact
            </Link>
            {/* Dropdown Menu for Women's Clothing Categories */}
            <div className="relative group">
              <button className="text-gray-800 hover:text-blue-600 transition duration-200 focus:outline-none">
                Women
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg hidden group-hover:block">
                <Link
                  to="/women/dresses"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Dresses
                </Link>
                <Link
                  to="/women/tops"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Tops
                </Link>
                <Link
                  to="/women/skirts"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Skirts
                </Link>
                <Link
                  to="/women/pants"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Pants
                </Link>
                <Link
                  to="/women/accessories"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Accessories
                </Link>
              </div>
            </div>
          </div>

          {/* Cart Icon & Call-to-Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/cart"
              className="text-gray-800 hover:text-blue-600 transition duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h2l.4 2M7 13h10l1-5H6L7 13zm-1.4-7h15.8l-1.2 6H6.6l-.7-4h13.4M5 21c.83 0 1.5-.67 1.5-1.5S5.83 18 5 18s-1.5.67-1.5 1.5S4.17 21 5 21zm14 0c.83 0 1.5-.67 1.5-1.5S19.83 18 19 18s-1.5.67-1.5 1.5S18.17 21 19 21z" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-200"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L12 10.586l6.293-6.293a1 1 0 011.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12 4.293 5.707a1 1 0 010-1.414z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16a1 1 0 100-2H4a1 1 0 000 2zm0 6h16a1 1 0 100-2H4a1 1 0 000 2zm0 6h16a1 1 0 100-2H4a1 1 0 000 2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition duration-200"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition duration-200"
          >
            Contact
          </Link>
          <Link
            to="/women/dresses"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition duration-200"
          >
            Dresses
          </Link>
          <Link
            to="/women/tops"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition duration-200"
          >
            Tops
          </Link>
          <Link
            to="/women/skirts"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition duration-200"
          >
            Skirts
          </Link>
          <Link
            to="/women/pants"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition duration-200"
          >
            Pants
          </Link>
          <Link
            to="/women/accessories"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition duration-200"
          >
            Accessories
          </Link>
          {/* CTA Button in Mobile Menu */}
          <Link
            to="/contact"
            className="block px-4 py-2 text-center text-white bg-blue-600 rounded-full my-2 mx-4 hover:bg-blue-700 transition duration-200"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
