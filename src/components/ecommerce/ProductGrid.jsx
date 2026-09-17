import ProductCard from './ProductCard';

function ProductGrid({ products = [] }) {
  if (!products.length) {
    return <div className="empty-grid">No products available.</div>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
