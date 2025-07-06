import React from "react";
import "./styles/Contact.css";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const socialLinks = [
  { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
  { href: "https://instagram.com", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://tiktok.com", icon: <FaTiktok />, label: "TikTok" },
];

const Contact = () => (
  <section className="contact-section">
    <h2 className="contact-title">Contact</h2>
    <p className="contact-desc">For inquiries and custom orders, please contact us at:</p>
    <div className="contact-main">
      <div className="contact-details">
        <div className="contact-info">
          <div className="contact-icon"><FaPhoneAlt /></div>
          <p className="contact-phone">0242707678</p>
        </div>
        <div className="contact-info">
          <div className="contact-icon"><FaPhoneAlt /></div>
          <p className="contact-phone">0209131511</p>
        </div>
        <div className="contact-info">
          <div className="contact-icon"><FaEnvelope /></div>
          <p className="contact-phone">naaesy73@gmail.com</p>
        </div>
      </div>
      <form className="contact-form">
        <input type="text" className="contact-input" placeholder="Your Name" />
        <input type="email" className="contact-input" placeholder="Your Email" />
        <textarea className="contact-input contact-message" placeholder="Your Message" rows={4} />
        <button type="submit" className="contact-btn">Send Message</button>
      </form>
    </div>
    <div className="contact-socials-section">
      <span className="contact-socials-label">Follow us</span>
      <div className="contact-socials">
        {socialLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="contact-social"
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
