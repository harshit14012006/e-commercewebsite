import React from 'react';
import heroImage from '../images/heroimage.jpg';  // Correct path after importing the image

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for better text readability */}
        
        <div className="relative z-10 max-w-2xl mx-auto text-center text-white px-4 md:px-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Discover the Latest in Fashion
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Explore our new arrivals, trendy collections, and exclusive deals.
          </p>
          <a href="/shop" className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold text-lg shadow-md hover:bg-blue-500 transition duration-200">
            Shop Now
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
