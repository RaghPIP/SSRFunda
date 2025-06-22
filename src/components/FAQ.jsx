import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "When should I use SSR over CSR?",
      answer: "Use SSR when SEO is critical, you need faster initial page loads, or your content changes frequently. It's ideal for e-commerce sites, blogs, news sites, and marketing pages. Use CSR for highly interactive applications like dashboards or when you don't need SEO."
    },
    {
      question: "What are the main challenges of implementing SSR?",
      answer: "Common challenges include increased server complexity, higher server costs, potential performance bottlenecks during peak traffic, code that must work in both browser and Node.js environments, and managing state hydration between server and client."
    },
    {
      question: "How does SSR affect performance?",
      answer: "SSR improves initial page load time and perceived performance, but can increase Time to Interactive (TTI). It reduces First Contentful Paint (FCP) and Largest Contentful Paint (LCP), which are crucial Core Web Vitals metrics."
    },
    {
      question: "Can I use SSR with existing React applications?",
      answer: "Yes, but it requires significant refactoring. You'll need to ensure your components work server-side, handle data fetching differently, and set up a Node.js server. Frameworks like Next.js make this transition easier."
    },
    {
      question: "What's the difference between SSR and Static Site Generation (SSG)?",
      answer: "SSR generates HTML on each request at runtime, while SSG generates HTML at build time. SSR is better for dynamic content that changes frequently, while SSG is perfect for content that doesn't change often and can be cached."
    },
    {
      question: "How do I handle authentication with SSR?",
      answer: "Handle authentication on the server using cookies or tokens. Check authentication status during server-side rendering and redirect or render appropriate content. Be careful not to expose sensitive data in the initial HTML."
    },
    {
      question: "What are hydration mismatches and how do I fix them?",
      answer: "Hydration mismatches occur when server-rendered HTML differs from client-rendered HTML. Common causes include date/time formatting, random values, or browser-specific APIs. Fix by ensuring identical rendering logic on both server and client."
    },
    {
      question: "Is SSR worth the complexity for small projects?",
      answer: "For small projects, consider SSG with frameworks like Gatsby or use services like Netlify/Vercel that handle complexity. SSR adds significant complexity and may be overkill unless you specifically need real-time server rendering."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;