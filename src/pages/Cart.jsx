import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/ecommerce/CartItem';
import Button from '../components/common/Button';
import { useTemplate } from '../templates/TemplateShell';

function Cart() {
  const templateName = useTemplate();
  const isTech = templateName === 'tech';
  const { cart, updateQuantity, removeFromCart, subtotal, discount, shipping, tax, total, clearCart } = useCart();

  if (!cart.length) {
    return (
      <div className={`container section-spacing page-shell cart-page cart-${templateName}`}>
        <div className="state-card empty-state">
          <h2>{isTech ? 'Manifest is empty' : 'Your cart is empty'}</h2>
          <p>{isTech ? 'Add components to build your next deployment.' : 'Start shopping for everyday essentials and add them to your cart here.'}</p>
          <Link to="/products" className="inline-link">Browse products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`container section-spacing page-shell cart-page cart-${templateName} cart-layout`}>
      <div className="cart-items-panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{isTech ? 'ORDER / MANIFEST' : 'Your bag'}</p>
            <h2>{isTech ? 'Deployment manifest' : 'Cart summary'}</h2>
          </div>
          <button type="button" className="text-button" onClick={clearCart}>Clear cart</button>
        </div>

        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={(productId) => updateQuantity(productId, 1)}
            onDecrease={(productId) => updateQuantity(productId, -1)}
            onRemove={removeFromCart}
          />
        ))}
      </div>

      <aside className="cart-summary">
        <h3>Order summary</h3>
        <div className="summary-row">
          <span>Subtotal</span>
          <strong>₹{subtotal.toLocaleString('en-IN')}</strong>
        </div>
        <div className="summary-row">
          <span>Discount</span>
          <strong>-₹{discount.toLocaleString('en-IN')}</strong>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <strong>{shipping === 0 ? 'FREE' : `₹${shipping.toLocaleString('en-IN')}`}</strong>
        </div>
        <div className="summary-row">
          <span>GST (18%)</span>
          <strong>₹{tax.toLocaleString('en-IN')}</strong>
        </div>
        <div className="summary-row total-row">
          <span>Total</span>
          <strong>₹{total.toLocaleString('en-IN')}</strong>
        </div>
        <Link to="/checkout">
          <Button className="w-full">Proceed to checkout</Button>
        </Link>
      </aside>
    </div>
  );
}

export default Cart;
