import { Link } from 'react-router-dom';
import Rating from '../common/Rating';
import PriceDisplay from '../common/PriceDisplay';
import Button from '../common/Button';
import { useCart } from '../../context/useCart';
import { useWishlist } from '../../context/useWishlist';
import { useTemplate } from '../../templates/useTemplate';
import { getTemplateProductImage } from '../../config/templatePresentation';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const templateName = useTemplate();
  const image = getTemplateProductImage(templateName, product.id, product.image);
  const isWishlisted = wishlist.some((item) => item.id === product.id);
  const canMoveToCart = typeof product.onMoveToCart === 'function';
  const canRemove = typeof product.onRemove === 'function';

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={image} alt={product.name} loading="lazy" onError={(event) => {
          event.currentTarget.src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80';
        }} />
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <button
          type="button"
          className="wishlist-toggle"
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          onClick={() => {
            if (isWishlisted) {
              removeFromWishlist(product.id);
              return;
            }

            addToWishlist(product);
          }}
        >
          {isWishlisted ? '♥' : '♡'}
        </button>
      </div>

      <div className="product-info">
        <div className="product-meta">
          <span>{product.category}</span>
          <span>{product.stock} left</span>
        </div>

        <Link to={`/products/${product.id}`} className="product-name-link">
          <h3>{product.name}</h3>
        </Link>

        <Rating value={product.rating} reviewCount={product.reviewCount} />

        <PriceDisplay
          price={product.price}
          originalPrice={product.originalPrice}
          discount={product.discount}
        />

        <div className="product-actions">
          <Button onClick={() => addToCart(product, 1)}>Add to cart</Button>
          <Link to={`/products/${product.id}`} className="inline-link">View</Link>
        </div>

        {canMoveToCart && (
          <div className="wishlist-quick-actions">
            <Button variant="secondary" onClick={product.onMoveToCart}>Move to cart</Button>
            {canRemove && (
              <button type="button" className="text-button" onClick={product.onRemove}>Remove</button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
