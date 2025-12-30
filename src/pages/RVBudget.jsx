import './RVBudget.css';

function RVBudget() {
  const budgetCategories = [
    { name: "RV Payment/Rent", amount: "$500-800/mo", notes: "RV loan, rental, or storage fees" },
    { name: "Insurance", amount: "$100-300/mo", notes: "RV and health insurance" },
    { name: "Fuel", amount: "$200-500/mo", notes: "Depends on travel frequency" },
    { name: "Campground Fees", amount: "$300-600/mo", notes: "Or $0 with memberships like Thousand Trails" },
    { name: "Food & Groceries", amount: "$300-500/mo", notes: "Cooking vs. eating out" },
    { name: "Utilities", amount: "$50-150/mo", notes: "Internet, phone, propane" },
    { name: "Maintenance", amount: "$100-300/mo", notes: "Emergency fund for repairs" },
    { name: "Entertainment", amount: "$100-200/mo", notes: "Activities and attractions" }
  ];

  return (
    <div className="budget-page">
      <section className="budget-hero">
        <div className="container">
          <h1>RV Budget Worksheet</h1>
          <p>Plan your full-time RV living expenses with this comprehensive guide</p>
        </div>
      </section>

      <section className="budget-intro section">
        <div className="container">
          <div className="intro-content">
            <h2>Understanding Your RV Budget</h2>
            <p>
              One of the most common questions I get is: "How much does it really cost to live in an RV full-time?"
              The truth is, it varies greatly depending on your travel style, RV type, and lifestyle choices.
            </p>
            <p>
              I've broken down the main expense categories to help you plan your budget. Remember, these are
              estimates based on my experience and can be adjusted to fit your specific situation.
            </p>
          </div>
        </div>
      </section>

      <section className="budget-breakdown section">
        <div className="container">
          <h2>Monthly Expense Breakdown</h2>
          <div className="budget-grid">
            {budgetCategories.map((category, index) => (
              <div key={index} className="budget-card">
                <div className="budget-category">{category.name}</div>
                <div className="budget-amount">{category.amount}</div>
                <div className="budget-notes">{category.notes}</div>
              </div>
            ))}
          </div>

          <div className="total-estimate">
            <h3>Total Estimated Monthly Cost</h3>
            <div className="total-amount">$1,650 - $3,350</div>
            <p>Your actual costs may vary based on travel frequency and lifestyle choices</p>
          </div>
        </div>
      </section>

      <section className="tips-section section">
        <div className="container">
          <h2>Money-Saving Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>Campground Memberships</h3>
              <p>Invest in Thousand Trails, Harvest Hosts, or Passport America to drastically reduce camping costs.</p>
            </div>
            <div className="tip-card">
              <h3>Work Camping</h3>
              <p>Exchange work for free camping at campgrounds, national parks, or through Amazon CamperForce.</p>
            </div>
            <div className="tip-card">
              <h3>Boondocking</h3>
              <p>Camp for free on public lands using apps like iOverlander and FreeRoam to find spots.</p>
            </div>
            <div className="tip-card">
              <h3>Meal Planning</h3>
              <p>Cook your own meals and shop strategically to save hundreds on food costs each month.</p>
            </div>
            <div className="tip-card">
              <h3>Slow Travel</h3>
              <p>Stay longer in each location to reduce fuel costs and take advantage of weekly/monthly rates.</p>
            </div>
            <div className="tip-card">
              <h3>Preventive Maintenance</h3>
              <p>Regular RV maintenance prevents costly emergency repairs down the road.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2>Want More RV Living Tips?</h2>
            <p>Subscribe to my newsletter for weekly updates, budget tips, and exclusive travel guides.</p>
            <a href="/#email-subscribe" className="btn btn-primary">Subscribe Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RVBudget;
