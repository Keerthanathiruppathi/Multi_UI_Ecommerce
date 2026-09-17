import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Products from '../../pages/Products';
import ProductDetails from '../../pages/ProductDetails';
import Cart from '../../pages/Cart';
import Checkout from '../../pages/Checkout';
import Wishlist from '../../pages/Wishlist';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import NotFound from '../../pages/NotFound';
import TemplateShell from '../TemplateShell';

function ClassicTemplate({ templateName = 'classic', onTemplateChange }) {
  return (
    <TemplateShell templateName={templateName} onTemplateChange={onTemplateChange}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TemplateShell>
  );
}

export default ClassicTemplate;