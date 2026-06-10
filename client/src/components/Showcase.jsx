import React from 'react';

import './componetscss/showcase.css';
import img1 from '../assets/Genraters.png';
import img2 from '../assets/Transformer.png';
import img3 from '../assets/Steblizer.png';
import img4 from '../assets/Pannels.png';
import img5 from '../assets/Chint.png';


function Showcase() {
  const items = [
    {imgSrc: img1 , label: "Industrial Generator Installation", sub: "Sudhir & Honda GENSET · Yamunanagar" },
    { imgSrc: img3 , label: "Servo Stabilizer Setup", sub: "OIL/AIR COOLED" },
    { imgSrc: img2 , label: "Transformer Commissioning", sub: "ISOLATION & AUTO" },
    { imgSrc: img4, label: "Electric Panel Build", sub: "MCC/VFD/SARTER Panels" },
    { imgSrc: img5 , label: "Industrial Switchgears", sub: "Power Distribution" }
  ];

  return (
    <section id="showcase">
      <div className="center">
        <span className="section-tag">Our Work</span>
        <h2 className="section-title">Power <span>Showcase</span></h2>
        <p className="section-desc">Installations and projects across Yamunanagar and Haryana.</p>
      </div>
      <div className="showcase-grid">
        {items.map((cell, index) => (
          <div className="showcase-cell" key={index}>
            <div className="showcase-img-wrap">
              <img 
                src={cell.imgSrc} 
                alt={cell.label} 
                className="showcase-img" 
              />
            </div>
            <div className="showcase-cell-inner">
             
              <div className="cell-label">{cell.label}</div>
              <div className="cell-sub">{cell.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Showcase;
