import { Link, NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import SearchBar from '../ecommerce/SearchBar';
import { useCart } from '../../context/useCart';
import { useWishlist } from '../../context/useWishlist';

function Header({ templateName = 'modern', onTemplateChange }) {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  const handleSearch = (value) => {
    const nextParams = new URLSearchParams(searchParams);

    if (value.trim()) {
      nextParams.set('search', value);
    } else {
      nextParams.delete('search');
    }

    const nextQuery = nextParams.toString();
    navigate(`/products${nextQuery ? `?${nextQuery}` : ''}`, { replace: true });
  };
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/categories', label: 'Categories' },
    { path: '/wishlist', label: 'Wishlist' },
    { path: '/cart', label: 'Cart' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className={`site-header template-${templateName}`}>
      <div className="container header-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">M</span>
          <span>Ecommerce</span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
              <SearchBar value={searchQuery} onChange={handleSearch} placeholder="Search products" />
          <Link to="/wishlist" className="icon-link" aria-label="Wishlist">
            ♥ <span>{wishlistCount}</span>
          </Link>
          <Link to="/cart" className="icon-link" aria-label="Cart">
            🛒 <span>{cartCount}</span>
          </Link>
          {onTemplateChange && (
            <label className="template-select-wrap">
              <span>Template</span>
              <select value={templateName} onChange={(event) => onTemplateChange(event.target.value)}>
                <option value="classic">Classic</option>
                <option value="tech">Tech</option>
              </select>
            </label>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
