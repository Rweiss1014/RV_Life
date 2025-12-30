import './Links.css';

function Links() {
  const resources = [
    {
      title: "RV Essentials",
      items: [
        { name: "Thousand Trails Membership", url: "https://subscribepage.io/thousandtrails", description: "Save on campground costs with this membership program" },
        { name: "Amazon RV Shop", url: "https://www.amazon.com/shop/makingmyownlane", description: "My favorite RV products and gear" },
        { name: "RV Budget Worksheet", url: "/rv-budget-worksheet", description: "Plan your RV finances effectively" }
      ]
    },
    {
      title: "Travel Planning",
      items: [
        { name: "National Parks Pass", url: "https://www.nps.gov/planyourvisit/passes.htm", description: "Annual pass for US National Parks" },
        { name: "Campendium", url: "https://www.campendium.com", description: "Find and review campgrounds" },
        { name: "iOverlander", url: "https://www.ioverlander.com", description: "Discover camping spots worldwide" }
      ]
    },
    {
      title: "RV Life Tools",
      items: [
        { name: "Harvest Hosts", url: "https://harvesthosts.com", description: "Unique overnight RV camping experiences" },
        { name: "GasBuddy", url: "https://www.gasbuddy.com", description: "Find the cheapest gas prices" },
        { name: "Weather Underground", url: "https://www.wunderground.com", description: "Detailed weather forecasts for trip planning" }
      ]
    },
    {
      title: "Connect With Me",
      items: [
        { name: "YouTube Channel", url: "https://www.youtube.com/channel/UCZkJ-pmcxI7SXAIxSB-bCfQ", description: "Watch my RV adventures" },
        { name: "Work With Me", url: "/media-kit-nancy-carter", description: "Collaboration opportunities" },
        { name: "Contact", url: "/contact", description: "Get in touch" }
      ]
    }
  ];

  return (
    <div className="links-page">
      <section className="links-hero">
        <div className="container">
          <h1>RV Living Resources</h1>
          <p>My favorite tools, memberships, and resources for full-time RV life</p>
        </div>
      </section>

      <section className="links-content section">
        <div className="container">
          <div className="resources-grid">
            {resources.map((section, index) => (
              <div key={index} className="resource-section">
                <h2>{section.title}</h2>
                <div className="resource-items">
                  {section.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={item.url}
                      className="resource-card"
                      target={item.url.startsWith('http') ? '_blank' : '_self'}
                      rel={item.url.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <span className="resource-arrow">→</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="disclaimer-box">
            <p>
              <strong>Disclosure:</strong> Some of these links are affiliate links, which means I may earn a
              small commission if you make a purchase through them at no extra cost to you. I only recommend
              products and services I personally use and believe will add value to your RV journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Links;
