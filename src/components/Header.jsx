import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-main">Making My Own Lane</span>
            <span className="logo-sub">RV Life Adventures</span>
          </Link>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <Link to="/">Home</Link>
            <a href="https://www.youtube.com/channel/UCZkJ-pmcxI7SXAIxSB-bCfQ" target="_blank" rel="noopener noreferrer">YouTube</a>
            <Link to="/rv-budget-worksheet">RV Budget</Link>
            <Link to="/links">Resources</Link>
            <Link to="/blogsolofemalervliving">Blog</Link>
            <Link to="/media-kit-nancy-carter">Work With Me</Link>
            <Link to="/contact" className="btn-contact">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
