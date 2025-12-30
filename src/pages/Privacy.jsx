import './Privacy.css';

function Privacy() {
  return (
    <div className="privacy-page">
      <section className="page-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Your privacy matters to us</p>
        </div>
      </section>

      <section className="content-section section">
        <div className="container">
          <div className="content-wrapper">
            <div className="content-block">
              <h2>Information We Collect</h2>
              <p>
                When you visit Making My Own Lane, we may collect certain information about you, including:
              </p>
              <ul>
                <li>Email address (when you subscribe to our newsletter)</li>
                <li>Name (when you contact us or leave a comment)</li>
                <li>Browser type and version</li>
                <li>Pages you visit on our site</li>
                <li>Time and date of your visit</li>
                <li>Time spent on pages</li>
              </ul>
            </div>

            <div className="content-block">
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Send you our newsletter and updates (only if you've subscribed)</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website and content</li>
                <li>Analyze site traffic and user behavior</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="content-block">
              <h2>Email Subscriptions</h2>
              <p>
                When you subscribe to our email list, your information is processed in accordance with our Privacy
                Policy. We do not share your email address with third parties for marketing purposes.
              </p>
              <p>
                You can unsubscribe from our emails at any time by clicking the unsubscribe link at the bottom of
                any email we send you.
              </p>
            </div>

            <div className="content-block">
              <h2>Cookies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience. Cookies are small text files stored
                on your device that help us understand how you use our site.
              </p>
              <p>
                You can choose to disable cookies through your browser settings, but this may affect the
                functionality of some features on our website.
              </p>
            </div>

            <div className="content-block">
              <h2>Third-Party Services</h2>
              <p>
                We use third-party services such as Google Analytics to analyze website traffic and Amazon
                Associates for affiliate links. These services may collect information about your visit to our
                site and other websites.
              </p>
              <p>
                These third parties have their own privacy policies, and we encourage you to review them.
              </p>
            </div>

            <div className="content-block">
              <h2>Data Security</h2>
              <p>
                We take reasonable measures to protect your personal information from unauthorized access, use,
                or disclosure. However, no internet transmission is completely secure, and we cannot guarantee
                absolute security.
              </p>
            </div>

            <div className="content-block">
              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Lodge a complaint with a data protection authority</li>
              </ul>
            </div>

            <div className="content-block">
              <h2>Children's Privacy</h2>
              <p>
                Our website is not intended for children under 13 years of age. We do not knowingly collect
                personal information from children under 13.
              </p>
            </div>

            <div className="content-block">
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with
                an updated revision date.
              </p>
            </div>

            <div className="content-block">
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle your information, please
                <a href="/contact"> contact us</a>.
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

export default Privacy;
