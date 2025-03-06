// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/products" style={styles.navLink}>Products</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.navLink}>About Us</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.navLink}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#121212',
    padding: '10px',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
 
};

export default Navbar;