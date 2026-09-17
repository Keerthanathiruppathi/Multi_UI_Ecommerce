import { useMemo, useState } from 'react';
import ProductGrid from '../components/ecommerce/ProductGrid';
import SearchBar from '../components/ecommerce/SearchBar';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { useSearchParams } from 'react-router-dom';
import { useTemplate } from '../templates/TemplateShell';

function Products() {
  const templateName = useTemplate();
  const isTech = templateName === 'tech';
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search') || '';
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sortBy, setSortBy] = useState('recommended');

  const setQuery = (value) => {
    const nextParams = new URLSearchParams(searchParams);

    if (value.trim()) {
      nextParams.set('search', value);
    } else {
      nextParams.delete('search');
    }

    setSearchParams(nextParams);
  };

  const filteredProducts = useMemo(() => {
    const lowerQuery = query.trim().toLowerCase();

    const nextProducts = products.filter((product) => {
      const searchableText = [product.name, product.category, product.brand, product.description]
        .join(' ')
        .toLowerCase();
      const matchesSearch = !lowerQuery || searchableText.includes(lowerQuery);
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesMin = product.price >= minPrice;
      const matchesMax = product.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesMin && matchesMax;
    });

    switch (sortBy) {
      case 'low-to-high':
        return [...nextProducts].sort((a, b) => a.price - b.price);
      case 'high-to-low':
        return [...nextProducts].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...nextProducts].sort((a, b) => b.rating - a.rating);
      case 'newest':
        return [...nextProducts].sort((a, b) => b.id - a.id);
      default:
        return [...nextProducts].sort((a, b) => Number(b.featured) - Number(a.featured));
    }
  }, [query, selectedCategory, minPrice, maxPrice, sortBy]);

  return (
    <div className={`container section-spacing page-shell products-page products-${templateName}`}>
      <div className="section-heading">
        <div>
          <p className="eyebrow">{isTech ? 'CATALOG / 001' : 'Collection'}</p>
          <h2>{isTech ? 'Browse the equipment index' : 'Shop all essentials'}</h2>
        </div>
      </div>

      <div className="filters-panel">
        <SearchBar value={query} onChange={setQuery} />

        <div className="filter-group">
          <label>
            <span>Category</span>
            <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
              <option value="all">All categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>{category.name}</option>
              ))}
            </select>
          </label>

          <label>
            <span>Min price</span>
            <input type="number" value={minPrice} onChange={(event) => setMinPrice(Number(event.target.value) || 0)} />
          </label>

          <label>
            <span>Max price</span>
            <input type="number" value={maxPrice} onChange={(event) => setMaxPrice(Number(event.target.value) || 5000)} />
          </label>

          <label>
            <span>Sort by</span>
            <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
              <option value="recommended">Recommended</option>
              <option value="low-to-high">Price: Low to high</option>
              <option value="high-to-low">Price: High to low</option>
              <option value="rating">Rating</option>
              <option value="newest">Newest</option>
            </select>
          </label>
        </div>
      </div>

      <ProductGrid products={filteredProducts} />
    </div>
  );
}

export default Products;
