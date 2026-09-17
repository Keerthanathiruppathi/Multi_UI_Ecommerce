import { useTemplate } from '../templates/TemplateShell';

function About() {
  const templateName = useTemplate();
  const isTech = templateName === 'tech';
  return (
    <div className={`container section-spacing page-shell about-page about-${templateName}`}>
      <div className="content-card">
        <p className="eyebrow">{isTech ? 'SYSTEM / ABOUT' : 'About us'}</p>
        <h1>{isTech ? 'A storefront for better setups' : 'Modern retail made simple'}</h1>
        <p>
          {isTech
            ? 'We source dependable tools for work, play, and the spaces between. Every product is selected for useful specifications, honest value, and long service life.'
            : 'Ecommerce brings together everyday essentials across fashion, tech, home, and lifestyle. We focus on delivering stylish, useful products with a premium shopping experience inspired by classic department stores.'}
        </p>
      </div>
    </div>
  );
}

export default About;
