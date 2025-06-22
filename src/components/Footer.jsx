import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SSR Guide</h3>
            <p>Your comprehensive resource for mastering Server-Side Rendering with modern web frameworks.</p>
            <div className="social-links">
              <a href="https://github.com" className="social-link" title="GitHub">
                <span>🐙</span>
              </a>
              <a href="https://twitter.com" className="social-link" title="Twitter">
                <span>🐦</span>
              </a>
              <a href="https://linkedin.com" className="social-link" title="LinkedIn">
                <span>💼</span>
              </a>
              <a href="mailto:contact@ssrguide.com" className="social-link" title="Email">
                <span>📧</span>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#benefits">Benefits</a></li>
              <li><a href="#examples">Examples</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#comparison">Comparison</a></li>
              <li><a href="#implementation">Code Examples</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Documentation</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Frameworks</h4>
            <ul>
              <li><a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">Next.js</a></li>
              <li><a href="https://nuxtjs.org" target="_blank" rel="noopener noreferrer">Nuxt.js</a></li>
              <li><a href="https://kit.svelte.dev" target="_blank" rel="noopener noreferrer">SvelteKit</a></li>
              <li><a href="https://remix.run" target="_blank" rel="noopener noreferrer">Remix</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 SSR Fundamentals Guide. Built with React.js and modern web technologies.</p>
          <p className="made-with-love">Made with ❤️ for developers who care about performance</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;