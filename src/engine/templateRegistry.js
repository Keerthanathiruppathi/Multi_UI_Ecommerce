import ClassicTemplate from '../templates/classic/ClassicTemplate';
import TechTemplate from '../templates/tech/TechTemplate';

export const templateRegistry = {
  classic: ClassicTemplate,
  tech: TechTemplate,
};

export const isValidTemplate = (templateName) => Boolean(templateRegistry[templateName]);

export const resolveTemplate = (templateName, fallback = 'classic') => (
  isValidTemplate(templateName) ? templateName : fallback
);