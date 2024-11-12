// Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import heroimage from "../images/heroimage.png";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-700 text-white py-40 md:py-48 overflow-hidden cursor-default">
        <img
          src={heroimage}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-900 opacity-70"></div>{" "}
        {/* Gradient overlay */}
        <div className="relative z-10 text-center px-6 md:px-8 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight drop-shadow-lg">
            <ReactTyped
              strings={["Welcome to "]} // Only type "Welcome to"
              typeSpeed={60}
              backSpeed={30}
              loop={false}
              showCursor={false}
            />
            <span className="text-yellow-500 drop-shadow-lg">
              Trendy Apparel
            </span>
          </h1>

          <p className="text-base md:text-lg mb-8 max-w-xl mx-auto text-gray-200 leading-relaxed drop-shadow-md">
            Discover the latest trends in fashion with our exclusive
            collections. Shop the newest styles for every season, tailored just
            for you.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-transparent bg-yellow-500 text-gray-900 rounded-full font-medium text-base shadow-lg hover:shadow-2xl hover:bg-yellow-600 hover:border-yellow-600 transition-all duration-300 ease-in-out transform hover:scale-105 relative group"
          >
            {/* Icon with refined hover color */}
            <i className="fas fa-shopping-cart text-xl mr-2 transition-colors duration-300 ease-in-out group-hover:text-gray-900"></i>

            {/* Centered and responsive Shop Now text */}
            <span className="transition-all duration-300 ease-in-out transform group-hover:translate-x-2">
              Shop Now
            </span>
          </Link>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="py-20 px-8 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">
          Featured Categories
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Category 1 - Dresses */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src="/path-to-dresses-image.jpg"
              alt="Dresses"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Dresses</h3>
              <p className="text-gray-600 mt-2">
                Explore our elegant and stylish dresses for every occasion.
              </p>
              <Link
                to="/women/dresses"
                className="text-blue-600 hover:text-blue-800 font-medium mt-4 inline-block"
              >
                Shop Dresses
              </Link>
            </div>
          </div>

          {/* Category 2 - Tops */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src="/path-to-tops-image.jpg"
              alt="Tops"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Tops</h3>
              <p className="text-gray-600 mt-2">
                Find the perfect tops to complete your look.
              </p>
              <Link
                to="/women/tops"
                className="text-blue-600 hover:text-blue-800 font-medium mt-4 inline-block"
              >
                Shop Tops
              </Link>
            </div>
          </div>

          {/* Category 3 - Accessories */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src="/path-to-accessories-image.jpg"
              alt="Accessories"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                Accessories
              </h3>
              <p className="text-gray-600 mt-2">
                Add the perfect finishing touches with our stylish accessories.
              </p>
              <Link
                to="/women/accessories"
                className="text-blue-600 hover:text-blue-800 font-medium mt-4 inline-block"
              >
                Shop Accessories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-8 bg-gradient-to-b from-gray-50 to-white text-center shadow-md rounded-lg">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-tight">
          About Trendy Apparel
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
          At Trendy Apparel, we believe fashion should be fun, accessible, and
          of the highest quality. Explore our variety of stylish clothing for
          every occasion, crafted with care and exceptional attention to detail.
        </p>
        <Link
  to="/about"
  className="group inline-block px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-full shadow-lg transform transition duration-300 ease-out hover:bg-yellow-500 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 relative overflow-hidden"
>
  <span className="absolute inset-0 bg-yellow-500 transform -translate-x-full transition-all duration-300 ease-in-out group-hover:translate-x-0"></span>
  <span className="relative z-10">Learn More About Us</span>
</Link>

      </section>

      {/* CTA Section - Newsletter */}
      <section className="relative py-20 px-8 text-white text-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-800 opacity-90"></div>

        {/* Isometric 3D background cubes */}
        <div className="absolute inset-0 z-0 isometric-bg"></div>

        <h2 className="text-4xl font-bold mb-6 drop-shadow-lg relative z-10">
          Stay Updated!
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto text-gray-200 leading-relaxed relative z-10">
          Sign up for our newsletter and be the first to know about new
          arrivals, exclusive offers, and more!
        </p>
        <div className="flex justify-center items-center relative z-10">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 w-64 md:w-80 rounded-l-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 shadow-lg"
          />
          <button className="px-6 py-3 bg-yellow-500 text-gray-900 rounded-r-full font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-lg">
            Subscribe
          </button>
        </div>

        {/* Custom styles for isometric cube background */}
        <style jsx>{`
          .isometric-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: none;
          }

          .isometric-bg::before,
          .isometric-bg::after {
            content: "";
            position: absolute;
            width: 150%;
            height: 150%;
            top: -20%;
            left: -20%;
            background-image: linear-gradient(
                45deg,
                rgba(255, 255, 255, 0.1) 25%,
                transparent 25%
              ),
              linear-gradient(
                -45deg,
                rgba(255, 255, 255, 0.1) 25%,
                transparent 25%
              );
            background-size: 100px 100px;
            opacity: 0.3;
            transform: skewY(-10deg) rotate(-10deg);
          }

          .isometric-bg::after {
            opacity: 0.15;
            transform: skewY(10deg) rotate(10deg) translate(30px, 30px);
          }
        `}</style>
      </section>
    </div>
  );
}

export default Home;
