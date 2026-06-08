import React from 'react';

import '../components/componetscss/brands.css'

function BrandsBar() {
  const brands = [" Sudhir Generators", " Chit Company", " Industrial Grade", " Yamunanagar"];

  return (
    <div className="brands-bar">
      <span className="brand-label">Authorized Dealer</span>
      {brands.map((brand, index) => (
        <div className="brand-chip" key={index}>{brand}</div>
      ))}
    </div>
  );
}

export default BrandsBar;