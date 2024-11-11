import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';      // Import Navbar
import Footer from './components/Footer';      // Import Footer
import Home from './pages/Home';   // Import Home page
import About from './pages/About'; // Import About page
import Services from './pages/Services'; // Import Services page
import Contact from './pages/Contact';   // Import Contact page

const Layout = () => {
  return (
    <Router>
      <div>
       <Navbar />   {/* Render Navbar */}

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />  {/* Render Footer */}
      </div>
    </Router>
  );
};

export default Layout;
