import React from 'react';

const Overview = () => {
  const cards = [
    {
      icon: '🏗️',
      title: 'Build Process',
      description: 'SSR generates HTML on the server for each request, sending fully rendered pages to the browser. This ensures content is immediately visible and crawlable by search engines.'
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Users see content faster with SSR as the initial HTML is pre-rendered. Critical content loads immediately while JavaScript hydrates the page in the background.'
    },
    {
      icon: '🔍',
      title: 'SEO Benefits',
      description: 'Search engines can easily crawl and index SSR pages since content exists in the initial HTML response, improving search rankings and discoverability.'
    }
  ];

  return (
    <section id="overview" className="section">
      <div className="container">
        <h2 className="section-title">What is Server-Side Rendering?</h2>
        <div className="cards-grid">
          {cards.map((card, index) => (
            <div key={index} className="card fade-in">
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
