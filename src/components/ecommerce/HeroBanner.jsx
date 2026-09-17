import Button from '../common/Button';
import ProductScene3D from './ProductScene3D';
import { useTemplate } from '../../templates/TemplateShell';

function HeroBanner({ banner, onPrimaryAction }) {
  const templateName = useTemplate();

  return (
    <section className="hero-banner" style={{ backgroundImage: `url(${banner.image})` }}>
      <div className="hero-content">
        <p className="eyebrow">Trending essentials</p>
        <h1>{banner.title}</h1>
        <p>{banner.subtitle}</p>
        <Button onClick={onPrimaryAction}>{banner.buttonText}</Button>
      </div>
      <div className="template-visual" aria-hidden="true">
        <span className="visual-panel visual-panel-back" />
        <span className="visual-panel visual-panel-middle" />
        <span className="visual-panel visual-panel-front">
          <span className="visual-label">CURATED</span>
          <span className="visual-line visual-line-one" />
          <span className="visual-line visual-line-two" />
        </span>
      </div>
      <div className="hero-three-wrap">
        <ProductScene3D templateName={templateName} />
      </div>
    </section>
  );
}

export default HeroBanner;
