import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Let's Connect</h1>
          <p>Have a question or want to work together? I'd love to hear from you!</p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                Whether you have a question about RV life, want to collaborate, or just want to say hi,
                feel free to reach out. I try to respond to all messages within 48 hours.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <h3>Follow My Journey</h3>
                  <div className="social-links">
                    <a href="https://www.youtube.com/channel/UCZkJ-pmcxI7SXAIxSB-bCfQ" target="_blank" rel="noopener noreferrer">
                      <img src="/youtube.png" alt="YouTube" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                      <img src="/instagram.png" alt="Instagram" />
                    </a>
                    <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                      <img src="/pinterest.png" alt="Pinterest" />
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <h3>Collaboration Opportunities</h3>
                  <p>Interested in working together? Check out my <a href="/media-kit-nancy-carter">media kit</a> for details.</p>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
