import React from 'react';

import './componetscss/products.css';
import img1 from '../assets/Genraters.png';
import img2 from '../assets/Transformer.png';
import img3 from '../assets/Steblizer.png';
import img4 from '../assets/Pannels.png';
import img5 from '../assets/Chint.png';

function Products() {
  const productData = [
    { imgSrc: img1, isImage: true, name: "Generators", desc: "Sudhir and Honda generators provide dependable, fuel-efficient, and high-performance power options suitable for use in homes, businesses, and industries. Built to last and operate smoothly, they ensure consistent backup power with great efficiency and reliable performance.", tags: ["7.5 KVA – 3750 KVA", "Silent DG Sets", "Diesel"] },

    { imgSrc: img3, isImage: true, name: "Servo Stabilizers", desc: "Advanced voltage correction equipment that maintains a stable output voltage, protecting electrical appliances from fluctuations and power disturbances.", tags: ["20 KVA – 300 KVA", "Oil Cooled", "Air Cooled"] },

    { imgSrc: img2, isImage: true, name: "Transformers", desc: "High-quality electrical equipment used to efficiently step up or step down voltage levels for safe and reliable power distribution.", tags: ["100 KVA - 2500 KVA", "Isolation", "Auto"] },

    { imgSrc: img4 , isImage: true, name: "Electric Panels", desc: "Centralized power distribution system designed for safe control, monitoring, and protection of electrical circuits in industrial and commercial installations.", tags: ["MCC Panels", "VFD Panels", "Sarter Panels"] }
  ];

  return (
    <section id="products">
      <div className="center">
        <span className="section-tag">What We Offer</span>
        <h2 className="section-title">Our <span>Products</span></h2>
        <p className="section-desc">Premium power solutions engineered for reliability and uninterrupted performance.</p>
      </div>

      <div className="products-grid">
        {productData.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-icon-wrap">
              {/* Check karega ki agar image hai toh <img> tag chalaye, nahi toh emoji icon */}
              {product.isImage ? (
                <img src={product.imgSrc} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                product.icon
              )}
            </div>
            <div className="product-body">
              <div className="product-name">{product.name}</div>
              <p className="product-desc">{product.desc}</p>
              <div className="product-features">
                {product.tags.map((tag, i) => (
                  <span className="feature-tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;