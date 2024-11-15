import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between animate-fade-in">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-2">
          <span
            className="text-3xl font-bold text-blue-800 tracking-wider hover:text-blue-600 transition duration-300 transform hover:scale-105"
            style={{ fontFamily: '"Italian Plate No2 Expanded", sans-serif' }}
          >
          <i>  TRENDY APPAREL</i>
          </span>
        </div>

        {/* Center Section: Search Bar */}
        <div className="hidden md:flex flex-grow mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full border border-gray-300 rounded-lg py-2 px-4 pl-10 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-800 transition duration-200"
            />
            <span className="absolute left-3 top-2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.414-1.414l5.387 5.386-1.414 1.415-5.387-5.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Right Section: Icons */}
        <div className="flex items-center space-x-6 text-gray-600">
          <Link to="#" className="hover:text-blue-800 transition duration-200 transform hover:scale-110">
            <FontAwesomeIcon icon={faUser} className="h-6 w-6" />
          </Link>
          <Link to="#" className="hover:text-blue-800 transition duration-200 transform hover:scale-110">
            <FontAwesomeIcon icon={faHeart} className="h-6 w-6" />
          </Link>
          <Link to="#" className="hover:text-blue-800 transition duration-200 transform hover:scale-110">
            <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />
          </Link>
        </div>
      </div>

      {/* Bottom Section: Navigation Links */}
      <div className="navbar border-t border-gray-200 bg-gray-50 animate-slide-up">
        <div className="container mx-auto px-6 py-3">
          <div className="links flex flex-wrap gap-4 justify-center md:justify-start md:space-x-6 text-blue-800 text-sm font-semibold">
            <Link to="/t-shirts" className="link">
              T-Shirts
            </Link>
            <Link to="/shirts" className="link">
              Shirts
            </Link>
            <Link to="/hoodies" className="link">
              Hoodies
            </Link>
            <Link to="/sweaters" className="link">
              Sweaters
            </Link>
            <Link to="/jackets" className="link">
              Jackets
            </Link>
            <Link to="/blazers" className="link text-red-500">
              Blazers
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Animations */
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-slide-up {
          animation: slideUp 0.5s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Navbar Styling */
        .navbar {
          border-top: 1px solid #e5e7eb;
          background-color: #f9fafb;
        }
        .container {
          max-width: 1280px;
          margin: 0 auto;
        }
        .links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }
        .link {
          background-color: #e5e7eb;
          color: #1d4ed8;
          padding: 0.5rem 1rem;
          border-radius: 9999px; /* Fully rounded button */
          transition: color 0.15s, background-color 0.15s, transform 0.2s;
          text-align: center;
          min-width: 100px;
          white-space: nowrap;
        }
        .link:hover {
          background-color: #1d4ed8;
          color: #fff;
          transform: translateY(-2px);
        }
        .link.text-red-500 {
          color: #ef4444; /* Red color for Blazers */
        }
        .link.text-red-500:hover {
          background-color: #ef4444;
          color: #fff;
        }

        /* Mobile-specific styling */
        @media (max-width: 768px) {
          .link {
            font-size: 0.875rem;
            padding: 0.5rem 0.75rem;
            flex-grow: 1;
            min-width: auto;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
