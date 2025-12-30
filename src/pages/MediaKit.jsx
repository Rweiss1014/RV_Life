import './MediaKit.css';

function MediaKit() {
  const stats = [
    { label: "YouTube Subscribers", value: "10K+" },
    { label: "Monthly Blog Views", value: "25K+" },
    { label: "Instagram Followers", value: "8K+" },
    { label: "Email Subscribers", value: "5K+" }
  ];

  const services = [
    {
      title: "Sponsored Content",
      description: "Authentic product reviews and demonstrations integrated into my travel content"
    },
    {
      title: "Brand Partnerships",
      description: "Long-term collaborations with brands aligned with the RV lifestyle"
    },
    {
      title: "Social Media Campaigns",
      description: "Multi-platform promotion across YouTube, Instagram, and Pinterest"
    },
    {
      title: "Affiliate Marketing",
      description: "Honest product recommendations to my engaged audience"
    }
  ];

  return (
    <div className="mediakit-page">
      <section className="mediakit-hero">
        <div className="container">
          <h1>Work With Me</h1>
          <p>Partner with Making My Own Lane to reach engaged RV enthusiasts and adventure seekers</p>
        </div>
      </section>

      <section className="about-nancy section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src="/RTPG0qXRBmJvKtV6BrU4SYsaBtxPkyK2qYdEcoEp.png" alt="Nancy Carter" />
            </div>
            <div className="about-content">
              <h2>About Nancy Carter</h2>
              <p>
                I'm Nancy Carter, a solo female RV traveler documenting my full-time adventures across America.
                Since hitting the road in my Class C RV, I've built a community of engaged followers who trust my
                authentic recommendations and detailed travel guides.
              </p>
              <p>
                My content focuses on practical RV living tips, destination guides, product reviews, and inspiring
                others to pursue their travel dreams. I work exclusively with brands that align with my values and
                genuinely benefit my audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section section">
        <div className="container">
          <h2>Audience Reach</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section section">
        <div className="container">
          <h2>Collaboration Opportunities</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Create Something Amazing Together</h2>
            <p>Interested in working together? I'd love to hear about your brand and explore collaboration opportunities.</p>
            <a href="/contact" className="btn btn-primary">Get In Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MediaKit;
