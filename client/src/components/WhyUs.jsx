import React from 'react';

import './componetscss/why-us.css';
function WhyUs() {
  const reasons = [
    { num: "01", title: "Authorized Dealership", text: "Official authorized dealer of Sudhir Generators & Chit Company — ensuring 100% genuine products." },
    { num: "02", title: "Expert Technical Team", text: "Highly skilled engineers with 15+ years of experience in installation and maintenance." },
    { num: "03", title: "Fast Delivery & Installation", text: "Quick turnaround from order to installation. We act fast to prevent business loss." },
    { num: "04", title: "24/7 Emergency Support", text: "Round-the-clock helpline and on-site emergency services. Just a call away." },
    { num: "05", title: "Competitive Pricing", text: "Best market prices without compromising on quality. Flexible packages available." },
    { num: "06", title: "Pan-Haryana Coverage", text: "Serving Yamunanagar, Ambala, Kurukshetra, Karnal and surrounding areas." }
  ];

  return (
    <section id="why">
      <div className='center'>
        <span className="section-tag">Why Choose Us</span>
        <h2 className="section-title">Trusted by <span>Businesses</span><br/>Across Yamunanagar</h2>
      </div>
      <div className="why-grid">
        {reasons.map((item, index) => (
          <div className="why-item" key={index}>
            <div className="why-num">{item.num}</div>
            <div className="why-body">
              <div className="why-title">{item.title}</div>
              <p className="why-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyUs;