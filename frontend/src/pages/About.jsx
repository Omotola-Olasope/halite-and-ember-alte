import React from 'react';
import { mockData } from '../mock';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="page-hero">
        <h1 className="display-large">About Halite & Ember</h1>
        <p className="body-large hero-description">
          Building bridges between markets, creating opportunities that transform communities.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section">
        <div className="mv-grid">
          <div className="mv-card">
            <h2 className="heading-1">Our Mission</h2>
            <p className="body-medium">{mockData.about.mission}</p>
          </div>
          <div className="mv-card">
            <h2 className="heading-1">Our Vision</h2>
            <p className="body-medium">{mockData.about.vision}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <h2 className="display-medium section-title">Our Values</h2><br></br>
        <div className="values-grid">
          {mockData.about.values.map((value, idx) => (
            <div key={idx} className="value-card">
              <div className="value-icon">
                <CheckCircle size={28} />
              </div>
              <h3 className="heading-2">{value.title}</h3>
              <p className="body-medium">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats-section">
        <h2 className="display-medium section-title">Our Impact</h2><br></br>
        <div className="stats-grid">
          {mockData.about.stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Description */}
      <section className="company-description-section">
        <div className="description-content">
          <h2 className="display-medium">Excellence Across Borders</h2>
          <p className="body-large">
            Halite & Ember represents the perfect blend of strategic expertise and local market knowledge. 
            With operations spanning the United Kingdom and Nigeria, we offer unparalleled insights into 
            two dynamic and complementary markets.
          </p>
          <p className="body-large">
            Our team of seasoned professionals brings together decades of experience in real estate 
            acquisition, asset management, and technology-driven business consulting. We don't just 
            execute transactions, we build lasting partnerships that drive sustainable growth.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;