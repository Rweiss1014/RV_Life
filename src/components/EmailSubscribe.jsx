import { useState } from 'react';
import './EmailSubscribe.css';

function EmailSubscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <section className="email-subscribe">
      <div className="container">
        <div className="subscribe-content">
          <h2>Join the Adventure</h2>
          <p>Subscribe to my email list and become part of the community! Get exclusive RV tips, travel stories, and inspiration delivered to your inbox.</p>
          <form onSubmit={handleSubmit} className="subscribe-form">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
          <p className="privacy-note">Your privacy is important to us. We do not share your information.</p>
        </div>
      </div>
    </section>
  );
}

export default EmailSubscribe;
