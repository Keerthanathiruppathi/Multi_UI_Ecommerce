import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Ecommerce</h3>
          <p>Curated essentials for everyday style, comfort, and smarter living.</p>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/products">Shop</Link></li>
          </ul>
        </div>
        <div>
          <h4>Categories</h4>
          <ul>
            <li><Link to="/products">Fashion</Link></li>
            <li><Link to="/products">Electronics</Link></li>
            <li><Link to="/products">Home essentials</Link></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Ecommerce. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
