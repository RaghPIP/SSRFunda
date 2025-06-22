import React from 'react';

const Comparison = () => {
  return (
    <section id="comparison" className="section">
      <div className="container">
        <h2 className="section-title">SSR vs CSR vs SSG</h2>
        <div className="comparison-table">
          <div className="table-header">
            Rendering Strategy Comparison
          </div>
          <div className="table-content">
            <div className="table-row">
              <div className="table-cell">
                <h4>Server-Side Rendering</h4>
                <p>HTML generated on server per request</p>
              </div>
              <div className="table-cell">
                <h4>Client-Side Rendering</h4>
                <p>HTML generated in browser with JavaScript</p>
              </div>
              <div className="table-cell">
                <h4>Static Site Generation</h4>
                <p>HTML pre-built at compile time</p>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell">
                <h4>⚡ Fast Initial Load</h4>
                <p>Content visible immediately</p>
              </div>
              <div className="table-cell">
                <h4>🔄 Dynamic Interactions</h4>
                <p>Rich interactivity after load</p>
              </div>
              <div className="table-cell">
                <h4>🚀 Blazing Fast</h4>
                <p>Served from CDN globally</p>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell">
                <h4>🎯 Great SEO</h4>
                <p>Search engines love it</p>
              </div>
              <div className="table-cell">
                <h4>📱 App-like Feel</h4>
                <p>Smooth navigation</p>
              </div>
              <div className="table-cell">
                <h4>💰 Cost Effective</h4>
                <p>Minimal server resources</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;