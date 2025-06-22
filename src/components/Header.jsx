import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="logo">SSR Fundamentals Guide</div>
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection('overview')}>Overview</button></li>
          <li><button onClick={() => scrollToSection('how-it-works')}>How It Works</button></li>
          <li><button onClick={() => scrollToSection('benefits')}>Benefits</button></li>
          <li><button onClick={() => scrollToSection('examples')}>Examples</button></li>
          <li><button onClick={() => scrollToSection('comparison')}>Comparison</button></li>
          <li><button onClick={() => scrollToSection('implementation')}>Code</button></li>
          <li><button onClick={() => scrollToSection('faq')}>FAQ</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;