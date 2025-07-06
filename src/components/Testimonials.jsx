import React from "react";
import "./styles/Testimonials.css";

const testimonials = [
  {
    name: "Ama Serwaa",
    role: "Bride",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    quote:
      "NANA ESY made my wedding dress dreams come true! The attention to detail and the fit were perfect. I felt like a queen on my special day."
  },
  {
    name: "Kwame Mensah",
    role: "Corporate Client",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    quote:
      "The custom office wear was stylish and comfortable. I received so many compliments at work. Highly recommend NANA ESY for unique designs!"
  },
  {
    name: "Efua Boateng",
    role: "Fashion Enthusiast",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    quote:
      "I love the vibrant Ankara styles! The fabrics are high quality and the service was excellent. Will definitely order again."
  }
];

const StarRating = ({ count }) => (
  <span className="testimonial-stars" aria-label={`Rated ${count} out of 5`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < count ? "star filled" : "star"}>★</span>
    ))}
  </span>
);

const Testimonials = () => (
  <section className="testimonials-section">
    <h2 className="testimonials-title">Testimonials</h2>
    <div className="testimonials-list">
      {testimonials.map((t, i) => (
        <div className="testimonial-card" key={t.name}>
          <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
          <div className="testimonial-content">
            <StarRating count={t.rating} />
            <p className="testimonial-quote">“{t.quote}”</p>
            <div className="testimonial-meta">
              <span className="testimonial-name">{t.name}</span>
              <span className="testimonial-role">{t.role}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
