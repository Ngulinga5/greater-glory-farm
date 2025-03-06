import React from 'react';
import './Footer.css'; // Import CSS for styling (optional)

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Greater Glory Farm. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;