import { resolveTemplate, templateRegistry } from './templateRegistry';

function TemplateEngine({ templateName, onTemplateChange }) {
  const safeTemplateName = resolveTemplate(templateName, 'classic');
  const Template = templateRegistry[safeTemplateName];

  if (!Template) {
    return (
      <div className="state-card empty-state">
        <h1>Template not found</h1>
        <p>No storefront exists for: {templateName}. Showing the default template instead.</p>
      </div>
    );
  }

  return <Template templateName={safeTemplateName} onTemplateChange={onTemplateChange} />;
}

export default TemplateEngine;