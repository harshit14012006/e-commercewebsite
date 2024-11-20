import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dresses from "./pages/women/Dresses";
import Tops from "./pages/women/Tops";
import Skirts from "./pages/women/Skirts";
import Pants from "./pages/women/Pants";
import Accessories from "./pages/women/Accessories.js";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Women's clothing routes */}
        <Route path="/women/dresses" element={<Dresses />} />
        <Route path="/women/tops" element={<Tops />} />
        <Route path="/women/skirts" element={<Skirts />} />
        <Route path="/women/pants" element={<Pants />} />
        <Route path="/women/accessories" element={<Accessories />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
