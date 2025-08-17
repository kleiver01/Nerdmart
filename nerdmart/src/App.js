import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { products as allProducts } from './mock/products';

export default function App() {
  const [products, setProducts] = useState(allProducts);

  const handleSearch = (query) => {
    const filtered = allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filtered);
    document.getElementById('product-grid-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <CartProvider>
        <motion.div
          className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header onSearch={handleSearch} />
          <main>
            <HeroSection />
            <FeaturedProducts />
            <ProductGrid products={products} />
          </main>
          <Footer />
          <ScrollToTopButton />
        </motion.div>
      </CartProvider>
    </ThemeProvider>
  );
}