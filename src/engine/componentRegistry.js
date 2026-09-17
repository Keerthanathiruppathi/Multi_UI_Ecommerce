export const componentRegistry = {
  modern: {
    Header: 'ModernHeader',
    ProductCard: 'ModernProductCard',
    Footer: 'ModernFooter'
  },
  classic: {
    Header: 'ClassicHeader',
    ProductCard: 'ClassicProductCard',
    Footer: 'ClassicFooter'
  },
  minimal: {
    Header: 'MinimalHeader',
    ProductCard: 'MinimalProductCard',
    Footer: 'MinimalFooter'
  }
};

export const getTemplateComponent = (templateName, componentName, fallback = null) => {
  const registry = componentRegistry[templateName] || componentRegistry.modern;
  return registry[componentName] || fallback;
};
