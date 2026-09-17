function QuantitySelector({ quantity, onIncrease, onDecrease, min = 1, max = 99 }) {
  return (
    <div className="quantity-selector" aria-label="Quantity selector">
      <button type="button" onClick={() => onDecrease()} aria-label="Decrease quantity" disabled={quantity <= min}>
        −
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={() => onIncrease()} aria-label="Increase quantity" disabled={quantity >= max}>
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
