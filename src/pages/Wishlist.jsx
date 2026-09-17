import { Link } from 'react-router-dom';
import { useCart } from '../context/useCart';
import { useWishlist } from '../context/useWishlist';
import ProductGrid from '../components/ecommerce/ProductGrid';
import { useTemplate } from '../templates/useTemplate';

function Wishlist() {
  const templateName = useTemplate();
  const isTech = templateName === 'tech';
  const { wishlist, removeFromWishlist, moveToCart } = useWishlist();
  const { addToCart } = useCart();

  const mappedWishlist = wishlist.map((product) => ({
    ...product,
    onMoveToCart: () => moveToCart(product, addToCart),
    onRemove: () => removeFromWishlist(product.id)
  }));

  if (!wishlist.length) {
    return (
      <div className={`container section-spacing page-shell wishlist-page wishlist-${templateName}`}>
        <div className="state-card empty-state">
          <h2>{isTech ? 'No saved signals' : 'Your wishlist is empty'}</h2>
          <p>{isTech ? 'Pin equipment here to compare it before deployment.' : 'Save products you love and come back to them later.'}</p>
          <Link to="/products" className="inline-link">Browse products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`container section-spacing page-shell wishlist-page wishlist-${templateName}`}>
      <div className="section-heading">
        <div>
          <p className="eyebrow">{isTech ? 'QUEUE / SAVED' : 'Saved items'}</p>
          <h2>{isTech ? 'Your shortlist' : 'Wishlist'}</h2>
        </div>
      </div>
      <ProductGrid products={mappedWishlist} />
    </div>
  );
}

export default Wishlist;
