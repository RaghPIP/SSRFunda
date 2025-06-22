import React from 'react';

const HowSSRWorks = () => {
  const steps = [
    { step: 1, title: 'User Request', description: 'Browser requests a page from server', icon: '🌐' },
    { step: 2, title: 'Server Processing', description: 'Server fetches data and renders HTML', icon: '⚙️' },
    { step: 3, title: 'HTML Response', description: 'Complete HTML sent to browser', icon: '📄' },
    { step: 4, title: 'Hydration', description: 'JavaScript makes page interactive', icon: '💧' }
  ];

  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <h2 className="section-title">How SSR Works</h2>
        <div className="ssr-diagram">
          <div className="diagram-container">
            {steps.map((step, index) => (
              <div key={index} className="diagram-step">
                <div className="step-number">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
                {index < steps.length - 1 && <div className="arrow">→</div>}
              </div>
            ))}
          </div>
          
          <div className="flow-description">
            <div className="flow-card">
              <h3>🖥️ Server Side</h3>
              <ul>
                <li>Receives HTTP request</li>
                <li>Fetches required data</li>
                <li>Renders React components to HTML</li>
                <li>Sends complete HTML response</li>
              </ul>
            </div>
            
            <div className="flow-card">
              <h3>🌐 Client Side</h3>
              <ul>
                <li>Receives pre-rendered HTML</li>
                <li>Displays content immediately</li>
                <li>Downloads JavaScript bundle</li>
                <li>Hydrates for interactivity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSSRWorks;