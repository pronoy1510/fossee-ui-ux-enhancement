import React, { Suspense, lazy } from 'react';
import './styles/globals.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Step 7: Performance Optimization - Lazy Loading components
const WorkshopCard = lazy(() => import('./components/Workshops/WorkshopCard'));

const workshopData = [
  {
    id: 1,
    title: "Advanced React Patterns",
    date: "Oct 24, 2026",
    instructor: "Dr. Arun Kumar",
    description: "Learn about Higher Order Components, Render Props, and the latest Hooks for building scalable applications.",
    type: "Technical"
  },
  {
    id: 2,
    title: "Modern UI/UX Design System",
    date: "Oct 28, 2026",
    instructor: "Sarah Jenkins",
    description: "Master the art of creating consistent design systems using Figma and modern CSS techniques.",
    type: "Design"
  },
  {
    id: 3,
    title: "Digital Marketing for Devs",
    date: "Nov 02, 2026",
    instructor: "Michael Ross",
    description: "A comprehensive guide on how to market your open-source projects and personal brand effectively.",
    type: "Marketing"
  }
];

function App() {
  return (
    <div className="App">
      {/* Step 7: Accessibility - Descriptive ARIA labels on common elements */}
      <header>
        <Navbar aria-label="Main Navigation" />
      </header>
      
      <main id="main-content" style={{ marginTop: '80px' }}>
        {/* Hero Section - Simple and fast, no heavy images used */}
        <section className="hero" aria-labelledby="hero-title" style={{ 
          padding: '6rem 0', 
          background: 'linear-gradient(135deg, #4f46e5 0%, #10b981 100%)', 
          color: 'white', 
          textAlign: 'center' 
        }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h1 id="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
              Level Up Your Skills with Expert Workshops
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: '0.9' }}>
              Join thousands of students learning from the best industry experts. Mobile-friendly, accessible, and high-performance booking.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn-login" style={{ background: 'white', color: '#4f46e5', padding: '14px 32px' }}>Browse All</button>
              <button className="btn-login" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid white', padding: '14px 32px' }}>Learn More</button>
            </div>
          </div>
        </section>

        {/* Workshop Grid Section */}
        <section id="workshops" className="container" aria-labelledby="workshops-title" style={{ padding: '5rem 20px' }}>
          <h2 id="workshops-title" className="section-title">Upcoming Workshops</h2>
          
          {/* Step 7: Suspense for Lazy Loading loading states */}
          <Suspense fallback={<div style={{ textAlign: 'center', padding: '2rem' }}>Loading workshops...</div>}>
            <div className="workshop-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
              gap: '2rem' 
            }}>
              {workshopData.map((workshop) => (
                <WorkshopCard key={workshop.id} {...workshop} />
              ))}
            </div>
          </Suspense>
        </section>
      </main>

      {/* Step 7: Semantic HTML footer */}
      <Footer />
    </div>
  );
}

export default App;
