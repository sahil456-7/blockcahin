import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blockchain from './pages/Blockchain';
import AIMachineLearning from './pages/AIMachineLearning';
import DeepLearning from './pages/DeepLearning';
import About from './pages/About';
import Services from './pages/Services';
import Support from './pages/Support';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import Research from './pages/Research';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blockchain" element={<Blockchain />} />
              <Route path="/ai-ml" element={<AIMachineLearning />} />
              <Route path="/deep-learning" element={<DeepLearning />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/products" element={<Products />} />
              <Route path="/research" element={<Research />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/support" element={<Support />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;