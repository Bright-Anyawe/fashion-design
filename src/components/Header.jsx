import React from "react";
import "./styles/Header.css";

const Header = () => (
  <header className="header">
    {/* Logo and Brand */}
    <a href="#" className="header__brand" aria-label="NANA ESY Home">
      <div className="header__logo">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
          <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor"></path>
        </svg>
      </div>
      <span className="header__brand-name">NANA ESY</span>
    </a>
    {/* Navigation */}
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li>
          <a className="header__nav-link" href="#">Home</a>
        </li>
        <li>
          <a className="header__nav-link" href="#">About</a>
        </li>
        <li>
          <a className="header__nav-link" href="#">Gallery</a>
        </li>
        <li>
          <a className="header__nav-link" href="#">Contact</a>
        </li>
      </ul>
    </nav>
    {/* CTA Button */}
    <a href="#" className="header__cta">
      <button className="header__cta-btn">
        <span className="header__cta-btn-text">Book a Consultation</span>
      </button>
    </a>
  </header>
);

export default Header;
