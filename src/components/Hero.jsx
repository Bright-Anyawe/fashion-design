import React from "react";
import "./styles/Hero.css";

const Hero = () => (
  <section className="hero-section">
    <div className="hero-content-container">
      <div>
        <div>
          <div
            className="hero-inner"
            style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuApUtQwBJSmqPmsk5ytvnIArZqEGXNHnk9-Ly2h79xnUchnz3EaO3g9KgPP1pwZMg2sw4CZDBt9QwlLmQdH_SY7vAjqrUMxlkggrg18HQrg8faHqOvuaxUDKBRdUspduRztyMbsBd3JowmLBgmDBusQ4g6ZqnZy8L9rXw-CZxsqGIcvoHsyZW6CLfJnU5lEHvLknYwYNhjyJFOPNgV1UUiuDBReiaKe4IUJUXwtYKat6FbBUJcBveUot7WfnIgKKtVCXCS5bAS2pOAm")' }}
          >
            <div>
              <h1 className="hero-title">Wear Better, Look Better</h1>
              <h2 className="hero-subtitle">
                Experience the artistry of NANA ESY's designs, where tradition meets contemporary style.
              </h2>
            </div>
            <button className="hero-btn">
              <span>Explore Designs</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
