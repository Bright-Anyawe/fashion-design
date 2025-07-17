import React, { useState } from "react";
import "./styles/Contact.css";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTiktok, FaMapMarkerAlt } from "react-icons/fa";

const socialLinks = [
  { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
  { href: "https://instagram.com", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://tiktok.com", icon: <FaTiktok />, label: "TikTok" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info-section">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-desc">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          
          <div className="contact-details">
            <div className="contact-info">
              <div className="contact-icon"><FaPhoneAlt /></div>
              <div className="contact-text">
                <h3>Phone</h3>
                <p className="contact-phone">0242707678</p>
                <p className="contact-phone">0209131511</p>
              </div>
            </div>
            
            <div className="contact-info">
              <div className="contact-icon"><FaEnvelope /></div>
              <div className="contact-text">
                <h3>Email</h3>
                <p className="contact-phone">naaesy73@gmail.com</p>
              </div>
            </div>

            <div className="contact-info">
              <div className="contact-icon"><FaMapMarkerAlt /></div>
              <div className="contact-text">
                <h3>Location</h3>
                <p className="contact-phone">Accra, Ghana</p>
              </div>
            </div>
          </div>

          <div className="contact-socials-section">
            <h3 className="contact-socials-label">Follow us</h3>
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
        </div>

        <div className="contact-form-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className={`contact-input ${errors.name ? 'error' : ''}`}
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <input
                type="email"
                className={`contact-input ${errors.email ? 'error' : ''}`}
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <textarea
                className={`contact-input contact-message ${errors.message ? 'error' : ''}`}
                placeholder="Your Message"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button 
              type="submit" 
              className={`contact-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div className="submit-status success">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="submit-status error">
                Failed to send message. Please try again later.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
