import React, { useState } from 'react';
//import './Products.css'; // Import the CSS file for styling

const products = [
  { 
    name: "Goats", 
    img: "https://www.sierraclub.org/sites/default/files/styles/sierra_full_page_width/public/2022-09/SIERRA-GOATS-WB_0.png.webp?itok=u7T6uulH", 
    desc: "Healthy and well-fed goats.", 
    details: "Our goats are raised in a free-range environment, ensuring they are healthy and happy." 
  },
  { 
    name: "Bananas", 
    img: "https://www.datocms-assets.com/75077/1656653215-monika-guzikowska-bf8wyxuqobe-unsplash-crop.jpg?auto=format&w=1600", 
    desc: "Fresh organic bananas.", 
    details: "Grown without synthetic pesticides, our bananas are rich in flavor and nutrients." 
  },
  { 
    name: "Maize", 
    img: "https://agroandmoreug.com/wp-content/uploads/2024/04/Maize.jpg", 
    desc: "High-quality maize produce.", 
    details: "Our maize is cultivated using sustainable farming practices, ensuring top quality." 
  }
];

function Products() {
  const [visibleDetails, setVisibleDetails] = useState({}); // State to manage visibility of details

  // Toggle visibility of product details
  const toggleDetails = (index) => {
    setVisibleDetails((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the visibility for the clicked product
    }));
  };

  return (
    <div className="products-section">
      <h2 className="products-title">Our Products</h2>
      <div className="products-grid">
        {products.map((item, index) => (
          <div key={index} className="product-card">
            <img src={item.img} alt={item.name} className="product-image" />
            <div className="product-content">
              <h3 className="product-name">{item.name}</h3>
              <p className="product-desc">{item.desc}</p>
              <button 
                className="learn-more-btn" 
                onClick={() => toggleDetails(index)} // Toggle details on click
              >
                {visibleDetails[index] ? "Hide Details" : "Learn More"}
              </button>
              {visibleDetails[index] && ( // Conditionally render details
                <div className="product-details">
                  <p>{item.details}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;