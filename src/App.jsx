import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import TemplateEngine from './engine/TemplateEngine';
import { TEMPLATE_NAME } from './config/templateConfig';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

function App() {
  const [templateName, setTemplateName] = useState(() => {
    try {
      const savedTemplate = localStorage.getItem('northstar-template');
      return savedTemplate || TEMPLATE_NAME;
    } catch {
      return TEMPLATE_NAME;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('northstar-template', templateName);
    } catch {
      // Ignore storage issues in restricted environments.
    }
  }, [templateName]);

  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <TemplateEngine templateName={templateName} onTemplateChange={setTemplateName} />
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;