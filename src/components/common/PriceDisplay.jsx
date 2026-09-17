function PriceDisplay({ price, originalPrice, discount, className = '' }) {
  return (
    <div className={`price-display ${className}`.trim()}>
      <span className="current-price">₹{price.toLocaleString('en-IN')}</span>
      {originalPrice && <span className="original-price">₹{originalPrice.toLocaleString('en-IN')}</span>}
      {discount && <span className="discount-badge">{discount}% off</span>}
    </div>
  );
}

export default PriceDisplay;
