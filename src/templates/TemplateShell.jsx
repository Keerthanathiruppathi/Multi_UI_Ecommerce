import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { getThemeVars } from '../config/themeConfig';
import { TemplateContext } from './TemplateContextValue';

function TemplateShell({ templateName, onTemplateChange, children }) {
  const themeVars = getThemeVars(templateName);

  return (
    <TemplateContext.Provider value={templateName}>
      <div className={`template-shell template-${templateName}`} style={themeVars}>
        <Header templateName={templateName} onTemplateChange={onTemplateChange} />
        <main className="page-content">{children}</main>
        <Footer />
      </div>
    </TemplateContext.Provider>
  );
}

export default TemplateShell;
