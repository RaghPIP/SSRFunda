import React, { useState } from 'react';

const Implementation = () => {
  const [activeTab, setActiveTab] = useState('nextjs');

  const codeExamples = {
    nextjs: {
      title: 'Next.js SSR Implementation',
      language: 'JavaScript',
      code: `// pages/posts/[id].js - Next.js SSR Page
import { GetServerSideProps } from 'next'

export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <small>Published: {post.publishedAt}</small>
    </div>
  )
}

// This function runs on the server for each request
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params
  
  // Fetch data from API or database
  const post = await fetch(\`https://api.example.com/posts/\${id}\`)
    .then(res => res.json())
  
  // Pass data to the page via props
  return {
    props: {
      post,
    },
  }
}

// The HTML is generated on the server and sent to the client
// Search engines see the fully rendered content immediately`
    },
    express: {
      title: 'Express.js SSR Setup',
      language: 'Node.js',
      code: `// server.js - Express + React SSR
const express = require('express')
const React = require('react')
const { renderToString } = require('react-dom/server')
const App = require('./App')

const app = express()

app.get('*', async (req, res) => {
  // Fetch data based on route
  const data = await fetchDataForRoute(req.path)
  
  // Render React component to HTML string
  const html = renderToString(
    React.createElement(App, { data, url: req.path })
  )
  
  // Send complete HTML with pre-rendered content
  res.send(\`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR App</title>
        <meta charset="utf-8">
      </head>
      <body>
        <div id="root">\${html}</div>
        <script>
          window.__INITIAL_DATA__ = \${JSON.stringify(data)}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  \`)
})

app.listen(3000, () => {
  console.log('SSR server running on port 3000')
})`
    },
    nuxt: {
      title: 'Nuxt.js SSR Example',
      language: 'Vue.js',
      code: `<!-- pages/posts/_id.vue - Nuxt.js SSR Page -->
<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
    <small>Published: {{ post.publishedAt }}</small>
  </div>
</template>

<script>
export default {
  // This function runs on the server
  async asyncData({ params, $axios }) {
    // Fetch data from API
    const post = await $axios.$get(\`/api/posts/\${params.id}\`)
    
    return {
      post
    }
  },
  
  // SEO meta tags
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.excerpt
        }
      ]
    }
  }
}
</script>`
    }
  };

  return (
    <section id="implementation" className="section">
      <div className="container">
        <h2 className="section-title">Implementation Examples</h2>
        
        <div className="code-tabs">
          {Object.keys(codeExamples).map(tab => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'nextjs' ? 'Next.js' : tab === 'express' ? 'Express.js' : 'Nuxt.js'}
            </button>
          ))}
        </div>

        <div className="code-section">
          <div className="code-header">
            <div className="code-title">{codeExamples[activeTab].title}</div>
            <div className="code-lang">{codeExamples[activeTab].language}</div>
          </div>
          <pre><code>{codeExamples[activeTab].code}</code></pre>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
