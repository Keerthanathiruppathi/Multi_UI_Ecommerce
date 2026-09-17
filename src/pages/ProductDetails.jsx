import { useParams, Link, useNavigate } from 'react-router-dom';
import Rating from '../components/common/Rating';
import PriceDisplay from '../components/common/PriceDisplay';
import QuantitySelector from '../components/common/QuantitySelector';
import Button from '../components/common/Button';
import ProductGrid from '../components/ecommerce/ProductGrid';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/useCart';
import { useWishlist } from '../context/useWishlist';
import { useMemo, useState } from 'react';
import { useTemplate } from '../templates/useTemplate';
import { getTemplateProductImage } from '../config/templatePresentation';

function ProductDetails() {
  const { id } = useParams();
  const { addToCart, buyNow } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const templateName = useTemplate();

  const product = getProductById(id);

  const relatedProducts = useMemo(
    () => products.filter((item) => item.category === product?.category && item.id !== product?.id).slice(0, 4),
    [product]
  );

  if (!product) {
    return (
      <div className="container section-spacing">
        <div className="state-card empty-state">
          <h2>Product not found</h2>
          <p>The product you are looking for is unavailable or no longer exists.</p>
          <Link to="/products" className="inline-link">Return to products</Link>
        </div>
      </div>
    );
  }

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <div className="container section-spacing page-shell">
      <div className="product-details-layout">
        <div className="product-visual">
          <img src={getTemplateProductImage(templateName, product.id, product.image)} alt={product.name} onError={(event) => {
            event.currentTarget.src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80';
          }} />
        </div>

        <div className="product-details-copy">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <Rating value={product.rating} reviewCount={product.reviewCount} />
          <PriceDisplay price={product.price} originalPrice={product.originalPrice} discount={product.discount} />
          <p className="product-stock">{product.stock > 0 ? `${product.stock} items available` : 'Out of stock'}</p>
          <p className="description">{product.description}</p>

          <div className="product-detail-actions">
            <QuantitySelector
              quantity={quantity}
              onIncrease={() => setQuantity((current) => Math.min(current + 1, product.stock || 10))}
              onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
            />
            <Button onClick={() => addToCart(product, quantity)}>Add to cart</Button>
            <Button variant="secondary" onClick={() => {
              buyNow(product, quantity);
              navigate('/checkout');
            }}>
              Buy now
            </Button>
            <Button variant="secondary" onClick={() => {
              if (isWishlisted) {
                removeFromWishlist(product.id);
              } else {
                addToWishlist(product);
              }
            }}>
              {isWishlisted ? 'Saved to wishlist' : 'Add to wishlist'}
            </Button>
          </div>

          <div className="detail-points">
            <div>
              <strong>Brand</strong>
              <span>{product.brand}</span>
            </div>
            <div>
              <strong>Shipping</strong>
              <span>Free on orders above ₹2,000</span>
            </div>
            <div>
              <strong>Warranty</strong>
              <span>12-month service coverage</span>
            </div>
          </div>
        </div>
      </div>

      <section className="section-spacing">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Related</p>
            <h2>You may also like</h2>
          </div>
        </div>
        <ProductGrid products={relatedProducts} />
      </section>
    </div>
  );
}

export default ProductDetails;
