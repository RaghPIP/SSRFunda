import React from 'react';

const RealLifeExamples = () => {
  const examples = [
    {
      company: 'Netflix',
      logo: '🎬',
      description: 'Uses SSR for their homepage and content discovery pages to ensure fast loading and better SEO for their vast content library.',
      benefits: ['Faster content discovery', 'Better search rankings', 'Improved mobile experience'],
      tech: 'Node.js + React'
    },
    {
      company: 'Airbnb',
      logo: '🏠',
      description: 'Implements SSR for property listings and search results to provide instant content visibility and better search engine indexing.',
      benefits: ['Instant property visibility', 'Better search rankings', 'Improved booking conversion'],
      tech: 'Next.js + React'
    },
    {
      company: 'The Guardian',
      logo: '📰',
      description: 'Uses SSR for all article pages to ensure content is immediately readable and shareable across social platforms.',
      benefits: ['Instant article loading', 'Perfect social sharing', 'Accessibility compliance'],
      tech: 'Scala + React'
    },
    {
      company: 'Walmart',
      logo: '🛒',
      description: 'Leverages SSR for product pages and search results to improve conversion rates and provide better user experience.',
      benefits: ['Faster product discovery', '15% increase in conversions', 'Better mobile performance'],
      tech: 'Node.js + React'
    },
    {
      company: 'WhatsApp Web',
      logo: '💬',
      description: 'Uses SSR for the initial landing page to ensure fast loading while the main application loads in the background.',
      benefits: ['Instant page visibility', 'Better perceived performance', 'Fallback for slow connections'],
      tech: 'React + Custom SSR'
    },
    {
      company: 'Hulu',
      logo: '📺',
      description: 'Implements SSR for content browsing pages to improve discovery and ensure content is searchable and shareable.',
      benefits: ['Content discoverability', 'Social media integration', 'SEO optimization'],
      tech: 'Next.js + React'
    }
  ];

  return (
    <section id="examples" className="section">
      <div className="container">
        <h2 className="section-title">Real-Life SSR Examples</h2>
        <div className="examples-grid">
          {examples.map((example, index) => (
            <div key={index} className="example-card">
              <div className="example-header">
                <span className="company-logo">{example.logo}</span>
                <h3>{example.company}</h3>
                <span className="tech-badge">{example.tech}</span>
              </div>
              <p className="example-description">{example.description}</p>
              <div className="benefits-list-small">
                <h4>Key Benefits:</h4>
                <ul>
                  {example.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealLifeExamples;
