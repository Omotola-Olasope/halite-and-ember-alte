import React from 'react';
import { mockData } from '../mock';
import { Building2, TrendingUp, Laptop, CheckCircle } from 'lucide-react';

const Services = () => {
  const serviceIcons = {
    1: Building2,
    2: TrendingUp,
    3: Laptop
  };

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="page-hero">
        <h1 className="display-large">Our Services</h1>
        <p className="body-large hero-description">
          Comprehensive solutions in real estate, asset management, and technology consulting 
          designed to maximize your investment potential.
        </p>
      </section>

      {/* Services Detail */}
      <section className="services-detail-section">
        {mockData.services.map((service, idx) => {
          const IconComponent = serviceIcons[service.id];
          const isEven = idx % 2 === 0;
          
          return (
            <div key={service.id} className={`service-detail-card ${isEven ? 'even' : 'odd'}`}>
              <div className="service-detail-icon">
                <IconComponent size={48} />
              </div>
              <div className="service-detail-content">
                <h2 className="heading-1">{service.title}</h2>
                <p className="body-large">{service.description}</p>
                <div className="service-features-list">
                  <h3 className="heading-3">Key Capabilities</h3>
                  <ul className="features-list">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="feature-item">
                        <CheckCircle size={20} />
                        <span className="body-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Additional Services Info */}
      <section className="services-info-section">
        <h2 className="display-medium section-title">Why Choose Our Services</h2><br></br>
        <div className="info-grid">
          <div className="info-card">
            <h3 className="heading-2">Local Expertise</h3>
            <p className="body-medium">
              Deep understanding of UK and Nigerian markets with on-ground teams providing 
              real-time insights and strategic advantages.
            </p>
          </div>
          <div className="info-card">
            <h3 className="heading-2">Proven Track Record</h3>
            <p className="body-medium">
              Built on years of professional experience in property, technology, 
              and consultancy, with a disciplined approach to asset acquisition and stewardship.
            </p>
          </div>
          <div className="info-card">
            <h3 className="heading-2">Technology-Driven</h3>
            <p className="body-medium">
              Leveraging cutting-edge technology and data analytics to identify opportunities 
              support disciplined asset acquisition, decision-making, and long-term ownership.
            </p>
          </div>
          <div className="info-card">
            <h3 className="heading-2">End-to-End Support</h3>
            <p className="body-medium">
              From initial consultation to ongoing management, we provide comprehensive support 
              throughout your investment journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;