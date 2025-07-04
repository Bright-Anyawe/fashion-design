import React from "react";
import "./styles/Gallery.css";

const Gallery = () => (
  <section className="gallery-section">
    <h2 className="gallery-title">Gallery</h2>
    <div className="pb-3">
      <div className="gallery-tabs">
        <a className="gallery-tab active" href="#">
          <p>Party Wears</p>
        </a>
        <a className="gallery-tab" href="#">
          <p>Wedding Wears</p>
        </a>
        <a className="gallery-tab" href="#">
          <p>Ankara Wears</p>
        </a>
        <a className="gallery-tab" href="#">
          <p>Traditional Wears</p>
        </a>
        <a className="gallery-tab" href="#">
          <p>Office Wears</p>
        </a>
        <a className="gallery-tab" href="#">
          <p>Custom Styles</p>
        </a>
      </div>
    </div>
    <div className="gallery-grid">
      {/* Add gallery images here as needed */}
    </div>
  </section>
);

export default Gallery;
