import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      icon: '✅',
      title: 'Faster Initial Load',
      description: 'Users see content immediately without waiting for JavaScript to load and execute'
    },
    {
      icon: '🎯',
      title: 'Better SEO',
      description: 'Search engines can crawl and index content effectively, improving search rankings'
    },
    {
      icon: '📱',
      title: 'Mobile Performance',
      description: 'Reduced JavaScript execution improves performance on slower mobile devices'
    },
    {
      icon: '🌐',
      title: 'Social Sharing',
      description: 'Rich previews work perfectly when sharing links on social media platforms'
    },
    {
      icon: '⚡',
      title: 'Core Web Vitals',
      description: 'Improved metrics like FCP, LCP, and CLS for better user experience scores'
    },
    {
      icon: '🔧',
      title: 'Accessibility',
      description: 'Content is accessible even when JavaScript fails or is disabled'
    }
  ];

  return (
    <section id="benefits" className="section">
      <div className="container">
        <h2 className="section-title">Key Benefits of SSR</h2>
        <div className="benefits-list">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <div className="benefit-icon">{benefit.icon}</div>
              <div className="benefit-content">
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
