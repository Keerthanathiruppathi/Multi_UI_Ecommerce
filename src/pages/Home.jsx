import { Link } from 'react-router-dom';
import HeroBanner from '../components/ecommerce/HeroBanner';
import CategoryGrid from '../components/ecommerce/CategoryGrid';
import ProductGrid from '../components/ecommerce/ProductGrid';
import Button from '../components/common/Button';
import { bannerData } from '../data/bannerData';
import { categories } from '../data/categories';
import { featuredProducts } from '../data/products';
import { useTemplate } from '../templates/useTemplate';
import { getTemplateHero } from '../config/templatePresentation';

function Home() {
  const templateName = useTemplate();
  const isTech = templateName === 'tech';
  const banner = { ...bannerData[0], image: getTemplateHero(templateName, bannerData[0].image) };

  return (
    <div className={`page-shell home-${templateName}`}>
      <HeroBanner banner={banner} onPrimaryAction={() => window.location.assign('/products')} />

      <section className="section-spacing container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{isTech ? '01 / Departments' : 'Popular categories'}</p>
            <h2>{isTech ? 'Explore the system' : 'Shop by lifestyle'}</h2>
          </div>
          <Link to="/products" className="inline-link">See all</Link>
        </div>
        <CategoryGrid categories={categories} />
      </section>

      <section className="section-spacing container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{isTech ? '02 / Signal picks' : 'Our picks'}</p>
            <h2>{isTech ? 'High-performance essentials' : 'Featured products'}</h2>
          </div>
          <Link to="/products" className="inline-link">View more</Link>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>

      <section className="promo-strip container">
        <div>
          <p className="eyebrow">{isTech ? '03 / Concierge protocol' : 'Why choose us'}</p>
          <h3>{isTech ? 'Need help configuring your kit?' : 'Curated shopping, just better.'}</h3>
        </div>
        <Link to="/contact">
          <Button>Talk to a shopping expert</Button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
