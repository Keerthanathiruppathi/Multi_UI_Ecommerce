import CategoryGrid from '../components/ecommerce/CategoryGrid';
import { categories } from '../data/categories';
import { useTemplate } from '../templates/useTemplate';

function Categories() {
  const templateName = useTemplate();
  const isTech = templateName === 'tech';

  return (
    <div className={`container section-spacing page-shell categories-page categories-${templateName}`}>
      <div className="section-heading">
        <div>
          <p className="eyebrow">{isTech ? 'INDEX / CATEGORY NODES' : 'Browse the departments'}</p>
          <h1>{isTech ? 'Choose a system' : 'Shop by category'}</h1>
        </div>
      </div>
      <CategoryGrid categories={categories} />
    </div>
  );
}

export default Categories;