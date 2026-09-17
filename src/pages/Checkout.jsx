import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { useCart } from '../context/CartContext';

function Checkout() {
  const { cart, subtotal, discount, shipping, tax, total, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [country, setCountry] = useState('India');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (!cart.length) {
    return (
      <div className="container section-spacing">
        <div className="state-card empty-state">
          <h2>Checkout is unavailable</h2>
          <p>Add products before placing an order.</p>
          <Link to="/products" className="inline-link">Shop products</Link>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="container section-spacing">
        <div className="state-card success-state">
          <h2>Order confirmed</h2>
          <p>Thank you for shopping with Ecommerce. Your order is being prepared for dispatch.</p>
          <Link to="/products" className="inline-link">Continue shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container section-spacing page-shell checkout-layout">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Checkout</h2>

        <div className="form-grid two-col">
          <label>
            <span>First name</span>
            <input type="text" required placeholder="First name" />
          </label>
          <label>
            <span>Last name</span>
            <input type="text" required placeholder="Last name" />
          </label>
        </div>

        <div className="form-grid two-col">
          <label>
            <span>Email</span>
            <input type="email" required placeholder="you@example.com" />
          </label>
          <label>
            <span>Phone</span>
            <input type="tel" required placeholder="+91 98765 43210" />
          </label>
        </div>

        <h3>Shipping information</h3>
        <label>
          <span>Delivery country</span>
          <select value={country} onChange={(event) => setCountry(event.target.value)} required>
            <option>India</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Australia</option>
          </select>
        </label>
        <label>
          <span>Address</span>
          <input type="text" required placeholder="Street address" />
        </label>

        <div className="form-grid three-col">
          <label>
            <span>City</span>
            <input type="text" required placeholder="City" />
          </label>
          <label>
            <span>State</span>
            <input type="text" required placeholder="State" />
          </label>
          <label>
            <span>Pincode</span>
            <input type="text" required placeholder="Pincode" />
          </label>
        </div>
        <p className="location-note">Delivering to {country}. Enter your complete address to confirm delivery availability.</p>

        <h3>Payment method</h3>
        <div className="payment-options">
          <label><input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={(event) => setPaymentMethod(event.target.value)} /> Cash on Delivery</label>
          <label><input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={(event) => setPaymentMethod(event.target.value)} /> Credit / Debit Card</label>
          <label><input type="radio" name="payment" value="upi" checked={paymentMethod === 'upi'} onChange={(event) => setPaymentMethod(event.target.value)} /> UPI</label>
        </div>

        <Button type="submit">Place order</Button>
      </form>

      <aside className="checkout-summary">
        <h3>Order summary</h3>
        <div className="summary-row"><span>Subtotal</span><strong>₹{subtotal.toLocaleString('en-IN')}</strong></div>
        <div className="summary-row"><span>Discount</span><strong>-₹{discount.toLocaleString('en-IN')}</strong></div>
        <div className="summary-row"><span>Shipping</span><strong>{shipping === 0 ? 'FREE' : `₹${shipping.toLocaleString('en-IN')}`}</strong></div>
        <div className="summary-row"><span>GST (18%)</span><strong>₹{tax.toLocaleString('en-IN')}</strong></div>
        <div className="summary-row total-row"><span>Total</span><strong>₹{total.toLocaleString('en-IN')}</strong></div>
      </aside>
    </div>
  );
}

export default Checkout;
