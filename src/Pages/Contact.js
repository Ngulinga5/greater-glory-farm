import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef(); // Reference for form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setIsSending(true);

      emailjs
        .sendForm(
          "service_mpj4x9y", // Replace with your EmailJS Service ID
          "template_f5ifqs6", // Replace with your EmailJS Template ID
          formRef.current,
          "CRRBRLnUHFszsCsle" // Replace with your EmailJS Public Key
        )
        .then(
          (result) => {
            console.log("Email sent:", result.text);
            alert("Thank you for contacting us! We will get back to you soon.");
            setFormData({ name: "", email: "", message: "" }); // Clear the form
            setErrors({});
          },
          (error) => {
            console.error("Email error:", error.text);
            alert("Failed to send message. Please try again later.");
          }
        )
        .finally(() => {
          setIsSending(false);
        });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Reach out to us for inquiries, partnerships, or just to say hello.</p>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                {errors.message && <span className="error">{errors.message}</span>}
              </div>

              <button type="submit" className="submit-btn" disabled={isSending}>
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <h3>Visit Us</h3>
            <p>
              <strong>Greater Glory Farm</strong><br />
              Salima, Malawi<br />
              P O Box 461
            </p>

            <h3>Call Us</h3>
            <p>
              Phone: +265 999 016 234 / +265 995 472 784<br />
              Email: info@greatergloryfarm.com
            </p>

            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://facebook.com/greatergloryfarm" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook" style={{ color: "#1877f2" }}></i>
              </a>
              <a href="https://twitter.com/greatergloryfarm" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter" style={{ color: "#1da1f2" }}></i>
              </a>
              <a href="https://instagram.com/greatergloryfarm" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" style={{ color: "#e4405f" }}></i>
              </a>
              <a href="https://youtube.com/greatergloryfarm" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube" style={{ color: "#ff0000" }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
