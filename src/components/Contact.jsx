import React from "react";
import "./styles/Contact.css";

const Contact = () => (
  <section className="contact-section">
    <h2 className="contact-title">Contact</h2>
    <p className="contact-desc">For inquiries and custom orders, please contact us at:</p>
    <div className="contact-info">
      <div className="contact-icon">
        {/* Phone SVG */}
      </div>
      <p className="contact-phone">0242707678</p>
    </div>
    {/* Add more contact info and form as needed */}
  </section>
);

export default Contact;
