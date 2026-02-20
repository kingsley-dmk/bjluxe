import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import ShopLayout from './components/ShopLayout';
import ServicesLayout from './components/ServicesLayout';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import PaymentSuccess from './pages/PaymentSuccess';
import Services from './pages/Services';
import Training from './pages/Training';
import CourseDetail from './pages/CourseDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Rentals from './pages/Rentals';
import ServiceDetail from './pages/ServiceDetail';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<ShopLayout />}>
                <Route index element={<Shop />} />
                <Route path="rentals" element={<Rentals />} />
                <Route path=":id" element={<ProductDetail />} />
              </Route>
              <Route path="/services" element={<ServicesLayout />}>
                <Route index element={<Services />} />
                <Route path="training" element={<Training />} />
                <Route path="training/:id" element={<CourseDetail />} />
                <Route path=":id" element={<ServiceDetail />} />
              </Route>
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
          <Footer />
          <Cart />
          <FloatingWhatsApp />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
