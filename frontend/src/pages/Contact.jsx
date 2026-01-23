import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { mockData } from '../mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    // serviceID - templateID - form data - publicKey
    emailjs.send(
      'service_w6wo8ju',
      'template_pp0uzys',
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message
      },
      'c47rwtY9rbzUAqD2t'
    )
    .then(() => {
      setSubmitted(true);
      setLoading(false);
      
      // Reset after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 5000);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setError(true);
      setLoading(false);
      
      // Clear error after 5 seconds
      setTimeout(() => {
        setError(false);
      }, 5000);
    });
  };

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="page-hero">
        <h1 className="display-large">Contact Us</h1>
        <p className="body-large hero-description">
          Get in touch with our team to discuss your real estate and consultancy needs.
        </p>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-container">
            <h2 className="heading-1">Send us a Message</h2>
            
            {submitted && (
              <div className="success-message">
                <p className="body-large">Message sent successfully ✅</p>
              </div>
            )}
            
            {error && (
              <div className="error-message">
                <p className="body-large">Message not sent (service error) ❌</p>
              </div>
            )}
            
            {!submitted && (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-textarea"
                  />
                </div>
                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                  <Send size={20} />
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="contact-info-container">
            <h2 className="heading-1">Contact Information</h2>
            <div className="contact-details">
              <div className="contact-detail-item">
                <Mail size={24} />
                <div>
                  <h3 className="heading-3">Email</h3>
                  <p className="body-medium">{mockData.company.email}</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <Phone size={24} />
                <div>
                  <h3 className="heading-3">Phone</h3>
                  <p className="body-medium">{mockData.company.phone}</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <MapPin size={24} />
                <div>
                  <h3 className="heading-3">Headquarters</h3>
                  <p className="body-medium">{mockData.company.address}</p>
                </div>
              </div>
            </div>

            <div className="branch-contacts">
              <div className="branch-contact">
                <h3 className="heading-2">UK Office</h3>
                <p className="body-small">{mockData.ukBranch.email}</p>
                <p className="body-small">{mockData.ukBranch.phone}</p>
              </div>
              <div className="branch-contact">
                <h3 className="heading-2">Nigerian Office</h3>
                <p className="body-small">{mockData.nigerianBranch.email}</p>
                <p className="body-small">{mockData.nigerianBranch.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
