import React from 'react';

const Hero = () => {
  const scrollToOverview = () => {
    document.getElementById('overview').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="container">
        <h1>Server-Side Rendering Fundamentals</h1>
        <p>Master the art of SSR and build lightning-fast, SEO-optimized web applications that deliver exceptional user experiences across all devices.</p>
        <button onClick={scrollToOverview} className="cta-button">
          Start Learning
        </button>
      </div>
    </section>
  );
};

export default Hero;
