import './Disclosure.css';

function Disclosure() {
  return (
    <div className="disclosure-page">
      <section className="page-hero">
        <div className="container">
          <h1>Disclosure Policy</h1>
          <p>Transparency and honesty in all partnerships</p>
        </div>
      </section>

      <section className="content-section section">
        <div className="container">
          <div className="content-wrapper">
            <div className="content-block">
              <h2>Affiliate Disclosure</h2>
              <p>
                Making My Own Lane participates in the Amazon Services LLC Associates Program and other affiliate
                advertising programs. These are designed to provide a means for sites to earn advertising fees by
                advertising and linking to partner websites.
              </p>
              <p>
                This means that when you click on certain links on this website and make a purchase, I may receive
                a small commission at no extra cost to you. These commissions help support the maintenance of this
                website and allow me to continue creating free content for you.
              </p>
            </div>

            <div className="content-block">
              <h2>Product Reviews & Recommendations</h2>
              <p>
                All product reviews and recommendations on this site are based on my genuine experience and honest
                opinion. I only recommend products and services that I personally use and believe will add value to
                your RV journey.
              </p>
              <p>
                Whether a product was purchased by me, gifted by a company, or provided for review purposes, my
                opinions remain completely my own. I am committed to providing authentic and unbiased reviews to
                help you make informed decisions.
              </p>
            </div>

            <div className="content-block">
              <h2>Sponsored Content</h2>
              <p>
                Occasionally, I partner with brands to create sponsored content. All sponsored posts are clearly
                marked as such. These partnerships are carefully selected to ensure they align with my values and
                genuinely benefit my audience.
              </p>
              <p>
                Even in sponsored content, I maintain full editorial control and only share honest opinions and
                experiences. I will never promote a product or service I don't believe in, regardless of compensation.
              </p>
            </div>

            <div className="content-block">
              <h2>Disclaimer</h2>
              <p>
                The content on this website contains the thoughts, opinions, and ideas of Nancy Carter and Making My
                Own Lane, and is for entertainment and informational purposes only. It is not intended to be a
                substitute for professional advice or guidance.
              </p>
              <p>
                While I strive to provide accurate and up-to-date information, I cannot guarantee the completeness,
                reliability, or accuracy of the content. Any action you take based on the information on this website
                is at your own risk.
              </p>
              <p>
                Making My Own Lane and Nancy Carter cannot be held liable for any accident, injury, loss, or damage
                that may occur as a result of applying the ideas and information provided on this website.
              </p>
            </div>

            <div className="content-block">
              <h2>Questions?</h2>
              <p>
                If you have any questions about this disclosure policy or any partnerships on this site, please
                don't hesitate to <a href="/contact">contact me</a>. I'm committed to transparency and am happy
                to address any concerns.
              </p>
            </div>

            <div className="update-notice">
              <p><strong>Last Updated:</strong> January 2025</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Disclosure;
