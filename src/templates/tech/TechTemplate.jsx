import TemplateShell from '../TemplateShell';
import TemplateRoutes from '../TemplateRoutes';

function TechTemplate({ templateName = 'tech', onTemplateChange }) {
  return (
    <TemplateShell templateName={templateName} onTemplateChange={onTemplateChange}>
      <TemplateRoutes />
    </TemplateShell>
  );
}

export default TechTemplate;
