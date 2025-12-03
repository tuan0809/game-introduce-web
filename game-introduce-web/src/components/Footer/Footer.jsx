import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">Game R</Link>
          <p className="footer-tag">Discover, review and share great games</p>
        </div>

        <nav className="footer-nav" aria-label="footer navigation">
          <Link to="/">Trang chủ</Link>
          <Link to="/aboutus">Về Game R</Link>
          <Link to="/game">Game Ngẫu nhiên</Link>
          <Link to="/support">Hỗ trợ</Link>
        </nav>

        <div className="footer-meta">
          <div className="footer-socials" aria-hidden>
            <a href="#" className="social">🐦</a>
            <a href="#" className="social">💬</a>
            <a href="#" className="social">▶️</a>
          </div>
          <small className="footer-copy">© {new Date().getFullYear()} Game R. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;