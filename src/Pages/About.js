// pages/About.js
import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Greater Glory Farm</h1>
      <p style={styles.text}>
        Welcome to <strong>Greater Glory Farm</strong>, where nature meets nurture! We are a family-owned farm
        dedicated to sustainable agriculture, providing fresh, organic, and locally grown produce to our community.
      </p>
      <p style={styles.text}>
        Located in the heart of the countryside, our farm is committed to preserving the environment while delivering
        high-quality fruits, vegetables, and dairy products. We believe in the power of farming to bring people
        closer to nature and to each other.
      </p>
      <h2 style={styles.subHeading}>Our Mission</h2>
      <p style={styles.text}>
        Our mission is to promote sustainable farming practices, support local communities, and provide healthy,
        organic food options for everyone. We strive to be a beacon of hope and inspiration for a greener future.
      </p>
      <h2 style={styles.subHeading}>Our Values</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}><strong>Sustainability:</strong> We prioritize eco-friendly farming methods to protect the planet.</li>
        <li style={styles.listItem}><strong>Quality:</strong> We grow and harvest our produce with care, ensuring the highest standards.</li>
        <li style={styles.listItem}><strong>Community:</strong> We believe in building strong relationships with our neighbors and customers.</li>
        <li style={styles.listItem}><strong>Integrity:</strong> We are transparent and honest in everything we do.</li>
      </ul>
      <h2 style={styles.subHeading}>Visit Us</h2>
      <p style={styles.text}>
        Come and experience the beauty of Greater Glory Farm! Whether you're picking fresh produce, enjoying a farm tour,
        or attending one of our seasonal events, we welcome you to be a part of our farming family.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#2c7a4d', // Green color for a farm theme
    marginBottom: '20px',
  },
  subHeading: {
    fontSize: '2rem',
    color: '#3c8d5e', // Slightly lighter green
    marginTop: '30px',
    marginBottom: '15px',
  },
  text: {
    fontSize: '1.1rem',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  list: {
    listStyle: 'none',
    padding: '0',
    textAlign: 'left',
    display: 'inline-block',
  },
  listItem: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '10px',
  },
};

export default About;