import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, TrendingUp, Laptop } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { mockData } from '../mock';

const Home = () => {
  return (
    <div className="page-container">
      {/* Hero Section with Spline */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <img src={`${process.env.PUBLIC_URL}/logo_black.png`} alt="Halite & Ember" className="dark-logo"/>
            <h1 className="display-huge">{mockData.company.name}</h1>
            <p className="hero-tagline">{mockData.company.tagline}</p>
            <p className="body-large hero-description">
              {mockData.company.description}
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn-primary">
                Explore Services
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="hero-spline">
            <Spline scene="https://prod.spline.design/CZ9R0SL0F7tD12gj/scene.splinecode" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview-section">
        <h2 className="display-large section-title">Our Expertise</h2> <br></br>
        <div className="services-grid">
          {mockData.services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                {service.id === 1 && <Building2 size={32} />}
                {service.id === 2 && <TrendingUp size={32} />}
                {service.id === 3 && <Laptop size={32} />}
              </div>
              <h3 className="heading-2">{service.title}</h3>
              <p className="body-medium">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="body-small">{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="section-cta">
          <Link to="/services" className="btn-primary">
            View All Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Global Presence */}
      <section className="global-section">
        <h2 className="display-large section-title">Our Businesses</h2><br></br>
        <div className="branches-grid">
          <div className="branch-card">
            <h3 className="heading-1">United Kingdom</h3>
            <p className="body-medium">{mockData.ukBranch.description}</p>
            <Link to="/uk-branch" className="btn-secondary">
              Learn More
              <ArrowRight size={20} />
            </Link>
          </div>
          <div className="branch-card">
            <h3 className="heading-1">Nigeria</h3>
            <p className="body-medium">{mockData.nigerianBranch.description}</p>
            <Link to="/nigerian-branch" className="btn-secondary">
              Learn More
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {mockData.about.stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="display-medium">Ready to Elevate Your Investments?</h2>
        <p className="body-large cta-text">
          Partner with Halite & Ember for strategic real estate solutions and expert consulting.
        </p> <br></br>
        <Link to="/contact" className="btn-primary btn-large">
          Start a Conversation
          <ArrowRight size={24} />
        </Link>
      </section>
    </div>
  );
};

export default Home;