import QuantitySelector from '../common/QuantitySelector';
import PriceDisplay from '../common/PriceDisplay';

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} onError={(event) => {
          event.currentTarget.src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80';
        }} />
      </div>

      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>{item.category}</p>
        <div className="cart-item-controls">
          <QuantitySelector
            quantity={item.quantity}
            onIncrease={() => onIncrease(item.id)}
            onDecrease={() => onDecrease(item.id)}
          />
          <button type="button" className="text-button" onClick={() => onRemove(item.id)}>
            Remove
          </button>
        </div>
      </div>

      <div className="cart-item-price">
        <PriceDisplay price={item.price * item.quantity} originalPrice={item.originalPrice * item.quantity} discount={item.discount} />
      </div>
    </div>
  );
}

export default CartItem;
