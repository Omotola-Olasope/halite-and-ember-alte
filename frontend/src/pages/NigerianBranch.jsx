import React from 'react';
import { mockData } from '../mock';
import { Mail, Phone, MapPin, Users } from 'lucide-react';

const NigerianBranch = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="page-hero">
        <h1 className="display-large">{mockData.nigerianBranch.title}</h1>
        <p className="body-large hero-description">
          {mockData.nigerianBranch.description}
        </p>
      </section>

      {/* Highlights */}
      <section className="highlights-section">
        <h2 className="display-medium section-title">Our Strengths</h2><br></br>
        <div className="highlights-grid">
          {mockData.nigerianBranch.highlights.map((highlight, idx) => (
            <div key={idx} className="highlight-card">
              <div className="highlight-content">
                <p className="body-large">{highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="team-header">
          <Users size={32} />
          <h2 className="heading-1">Leadership Team</h2>
        </div>
        <div className="team-grid">
          {mockData.nigerianBranch.team.map((member, idx) => (
            <div key={idx} className="team-card">
              <h3 className="heading-2">{member.name}</h3>
              <p className="body-medium team-role">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Info */}
      <section className="branch-contact-section">
        <h2 className="display-medium section-title">Get in Touch</h2>
        <div className="contact-info-grid">
          <div className="contact-info-item">
            <MapPin size={24} />
            <div>
              <h3 className="heading-3">Address</h3>
              <p className="body-medium">{mockData.nigerianBranch.address}</p>
            </div>
          </div>
          <div className="contact-info-item">
            <Phone size={24} />
            <div>
              <h3 className="heading-3">Phone</h3>
              <p className="body-medium">{mockData.nigerianBranch.phone}</p>
            </div>
          </div>
          <div className="contact-info-item">
            <Mail size={24} />
            <div>
              <h3 className="heading-3">Email</h3>
              <p className="body-medium">{mockData.nigerianBranch.email}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NigerianBranch;