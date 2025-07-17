import React, { useState } from "react";
import "./styles/Gallery.css";

const galleryData = {
  "Party Wears": [
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  ],
  "Wedding Wears": [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  ],
  "Ankara Wears": [
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
  ],
  "Traditional Wears": [
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80"
  ],
  "Office Wears": [
    "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  ],
  "Custom Styles": [
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  ]
};

const tabLabels = Object.keys(galleryData);

const Gallery = () => {
  const [activeTab, setActiveTab] = useState(tabLabels[0]);

  return (
    <section id="gallery" className="gallery-section">
      <h2 className="gallery-title">Gallery</h2>
      <div className="pb-3">
        <div className="gallery-tabs">
          {tabLabels.map((label) => (
            <a
              key={label}
              className={`gallery-tab${activeTab === label ? " active" : ""}`}
              href="#"
              onClick={e => { e.preventDefault(); setActiveTab(label); }}
            >
              <p>{label}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="gallery-grid">
        {galleryData[activeTab].map((img, idx) => (
          <img
            key={img + idx}
            src={img}
            alt={`${activeTab} ${idx + 1}`}
            className="gallery-img"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
