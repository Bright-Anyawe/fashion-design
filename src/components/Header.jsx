import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import styles from "./styles/Header.module.css"; // Use CSS module for scoping

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      role="banner"
    >
      {/* Logo and Brand */}
      <a 
        href="#home" 
        className={styles.brand} 
        aria-label="NANA ESY Home"
        onClick={(e) => handleNavClick(e, "#home")}
      >
        <GiClothes className={styles.logo} />
        <span className={styles.brandName}>NANA ESY</span>
      </a>
      {/* Navigation */}
      <nav className={styles.nav} aria-label="Main navigation">
        <button
          className={styles.menuToggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-nav-list"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul id="main-nav-list" className={`${styles.navList} ${menuOpen ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a 
                className={styles.navLink} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className={styles.ctaWrapper}>
            <a 
              href="#contact" 
              className={styles.cta}
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              <button className={styles.ctaBtn}>
                Book a Consultation
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
