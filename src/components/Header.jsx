import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import styles from "./styles/Header.module.css"; // Use CSS module for scoping

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "Contact", href: "#" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header} role="banner">
      {/* Logo and Brand */}
      <a href="#" className={styles.brand} aria-label="NANA ESY Home">
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
              <a className={styles.navLink} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li className={styles.ctaWrapper}>
            <a href="#" className={styles.cta}>
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
