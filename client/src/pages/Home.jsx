import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

// Import your images for the slider
import img1 from "../images/slider1.jpg";
import img2 from "../images/slider2.jpg";
import img3 from "../images/slider3.jpg";
import img4 from "../images/slider4.jpg";

const Home = () => {
  // State to control the current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [img1, img2, img3, img4];

  // Auto slide change interval (3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      {/* Hero Section with Slider */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden cursor-default">
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${images.length * 100}%`, // Ensure the total width equals the number of images
            }}
          >
            {images.map((img, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[300px] md:h-[400px] object-cover" // Adjust image height and use object-cover
                />
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full ${
                  currentSlide === index ? "bg-yellow-500" : "bg-white"
                } cursor-pointer`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        {/* Animated Text Overlay */}
        <div className="relative z-10 text-center px-6 md:px-8 max-w-3xl mx-auto">
          <ReactTyped
            strings={["Welcome to Our Store", "Discover Elegant Styles", "Shop Your Favorite Items"]}
            typeSpeed={50}
            backSpeed={30}
            loop
            className="text-3xl md:text-4xl font-bold text-white"
          />
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="py-20 px-8 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Featured Categories</h2>
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
              <h3 className="text-2xl font-semibold text-gray-800">Accessories</h3>
              <p className="text-gray-600 mt-2">
                Complete your outfit with the perfect accessories.
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
    </div>
  );
};

export default Home;
