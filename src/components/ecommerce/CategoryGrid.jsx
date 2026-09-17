import CategoryCard from './CategoryCard';

function CategoryGrid({ categories = [] }) {
  if (!categories.length) {
    return <div className="empty-grid">No categories available.</div>;
  }

  return (
    <div className="category-grid">
      {categories.map((category, index) => (
        <CategoryCard key={category.id} category={category} index={index} />
      ))}
    </div>
  );
}

export default CategoryGrid;
