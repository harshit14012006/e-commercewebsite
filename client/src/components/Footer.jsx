// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">About E-Shop</h4>
            <p className="text-sm text-gray-200">
              E-Shop is a leading online store offering a wide range of products to meet all your needs, from electronics to clothing, sports, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
              <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/electronics" className="hover:text-gray-300">Electronics</Link></li>
              <li><Link to="/clothing" className="hover:text-gray-300">Clothing</Link></li>
              <li><Link to="/home-garden" className="hover:text-gray-300">Home & Garden</Link></li>
              <li><Link to="/sports" className="hover:text-gray-300">Sports</Link></li>
              <li><Link to="/toys" className="hover:text-gray-300">Toys</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <p className="text-sm text-gray-200">123 Market St, San Francisco, CA 94103</p>
            <p className="text-sm text-gray-200">Email: support@eshop.com</p>
            <p className="text-sm text-gray-200">Phone: +1 (123) 456-7890</p>

            {/* Social Media Icons */}
            <div className="mt-4 flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-gray-300">
                {/* Facebook Icon */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.022 3.67 9.167 8.438 9.875V14.89h-2.54v-2.92h2.54V9.797c0-2.509 1.492-3.89 3.78-3.89 1.093 0 2.237.195 2.237.195v2.46h-1.26c-1.242 0-1.627.772-1.627 1.562v1.82h2.773l-.443 2.92h-2.33v7.04C18.33 21.168 22 17.023 22 12z"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="text-white hover:text-gray-300">
                {/* Twitter Icon */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.569c-.885.392-1.833.656-2.828.775a4.92 4.92 0 0 0 2.163-2.724 9.86 9.86 0 0 1-3.127 1.184 4.92 4.92 0 0 0-8.384 4.482A13.978 13.978 0 0 1 1.671 3.149a4.93 4.93 0 0 0 1.523 6.573A4.904 4.904 0 0 1 .96 8.825v.064a4.93 4.93 0 0 0 3.946 4.827 4.93 4.93 0 0 1-2.224.084 4.93 4.93 0 0 0 4.604 3.419 9.868 9.868 0 0 1-6.115 2.105c-.398 0-.79-.023-1.177-.069A13.945 13.945 0 0 0 7.548 21c9.057 0 14.004-7.496 14.004-13.985 0-.21-.005-.42-.014-.63A10.012 10.012 0 0 0 24 4.59a9.997 9.997 0 0 1-2.047-.021z"/>
                </svg>
              </a>
              <a href="https://instagram.com" className="text-white hover:text-gray-300">
                {/* Instagram Icon */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5zm4.25 3.75a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11zm0 1.5a4 4 0 1 0 0 8a4 4 0 0 0 0-8zm5.75-.25a1 1 0 1 1 0-2a1 1 0 0 1 0 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-600 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} E-Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
