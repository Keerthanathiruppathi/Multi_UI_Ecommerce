import { useContext } from 'react';
import { TemplateContext } from './TemplateContextValue';

export function useTemplate() {
  return useContext(TemplateContext);
}
