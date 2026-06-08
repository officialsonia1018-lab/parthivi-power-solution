import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandsBar from './components/BrandsBar';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Showcase from './components/Showcase';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';
import './components/componetscss/responsive.css';



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandsBar />
      <div className="divider"></div>
      <Products />
      <div className="divider"></div>
      <WhyUs />
      <div className="divider"></div>
      <Showcase />
      <div className="divider"></div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;