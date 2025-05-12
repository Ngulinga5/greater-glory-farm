import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
//import './Home.css'; // Import the CSS file for styling

function Home() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Greater Glory Farm</h1>
          <p className="hero-subtitle">We specialize in fresh <strong>Goats, Bananas, and Maize</strong>.</p>
          <button className="cta-button" onClick={() => navigate('/products')}>
            Explore Our Products
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <h2 className="section-title">About Us</h2>
          <p className="section-text">
            At Greater Glory Farm, we are committed to sustainable farming practices, providing high-quality produce, and supporting our local community. Our mission is to deliver fresh, organic, and nutritious products straight from our farm to your table.
          </p>
          <img src="https://eu-images.contentstack.com/v3/assets/bltdd43779342bd9107/blt7665079e8f06da66/638fb62c4b7973049e9909a2/0128H1-1080A-1540x800.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale" alt="Farm" className="about-image" />
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <h2 className="section-title">Our Products</h2>
        <div className="products-grid">
          <div className="product-card">
            <img src="https://www.sierraclub.org/sites/default/files/styles/sierra_full_page_width/public/2022-09/SIERRA-GOATS-WB_0.png.webp?itok=u7T6uulH" alt="Goats" className="product-image" />
            <h3 className="product-name">Goats</h3>
            <p className="product-desc">Healthy and well-fed goats.</p>
          </div>
          <div className="product-card">
            <img src="https://www.datocms-assets.com/75077/1656653215-monika-guzikowska-bf8wyxuqobe-unsplash-crop.jpg?auto=format&w=1600" alt="Bananas" className="product-image" />
            <h3 className="product-name">Bananas</h3>
            <p className="product-desc">Fresh organic bananas.</p>
          </div>
          <div className="product-card">
            <img src="https://agroandmoreug.com/wp-content/uploads/2024/04/Maize.jpg" alt="Maize" className="product-image" />
            <h3 className="product-name">Maize</h3>
            <p className="product-desc">High-quality maize produce.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2 className="cta-title">Join Us in Our Journey</h2>
        <p className="cta-text">Discover the taste of fresh, organic produce. Let’s grow together!</p>
        <button className="cta-button" onClick={() => navigate('/contact')}>
          Contact Us
        </button>
      </section>
    </div>
  );
}

export default Home;