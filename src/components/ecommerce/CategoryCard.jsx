import { useTemplate } from '../../templates/TemplateShell';
import { getTemplateCategoryImage } from '../../config/templatePresentation';

function CategoryCard({ category, index = 0 }) {
  const templateName = useTemplate();
  const image = getTemplateCategoryImage(templateName, index, category.image);

  return (
    <article className="category-card">
      <img src={image} alt={category.name} loading="lazy" onError={(event) => {
        event.currentTarget.src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80';
      }} />
      <div className="category-card-content">
        <h3>{category.name}</h3>
        <p>{category.description}</p>
      </div>
    </article>
  );
}

export default CategoryCard;
