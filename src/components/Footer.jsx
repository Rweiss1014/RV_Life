import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Making My Own Lane</h3>
            <p>Join me on my full-time RV living adventure as a solo female traveler exploring the beauty of America.</p>
            <div className="social-links">
              <a href="https://www.youtube.com/channel/UCZkJ-pmcxI7SXAIxSB-bCfQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <img src="/youtube.png" alt="YouTube" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src="/instagram.png" alt="Instagram" />
              </a>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                <img src="/pinterest.png" alt="Pinterest" />
              </a>
              <a href="https://www.amazon.com/shop/makingmyownlane" target="_blank" rel="noopener noreferrer" aria-label="Amazon">
                <img src="/amazon.png" alt="Amazon" />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blogsolofemalervliving">Blog</Link></li>
              <li><Link to="/links">RV Resources</Link></li>
              <li><Link to="/rv-budget-worksheet">Budget Worksheet</Link></li>
              <li><Link to="/media-kit-nancy-carter">Work With Me</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="https://www.youtube.com/channel/UCZkJ-pmcxI7SXAIxSB-bCfQ" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href="https://subscribepage.io/thousandtrails" target="_blank" rel="noopener noreferrer">Thousand Trails</a></li>
              <li><a href="https://www.amazon.com/shop/makingmyownlane" target="_blank" rel="noopener noreferrer">Gift Ideas</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/disclosure">Disclosure</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Making My Own Lane. All Rights Reserved.</p>
          <p className="disclaimer-text">Content for entertainment purposes only. Not a substitute for professional advice.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
