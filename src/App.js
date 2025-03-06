import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import About from './Pages/About'; 
import Navbar from './Components/Navbar'; // Import Navbar
import Footer from './Components/Footer'; // Import Footer

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Add Navbar here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer /> {/* Add Footer here */}
    </Router>
  );
};

export default App;