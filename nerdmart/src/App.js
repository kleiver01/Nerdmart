import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton'; // Importar el nuevo componente
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <motion.div
          className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <main>
            <HeroSection />
            <FeaturedProducts />
            <ProductGrid />
          </main>
          <Footer />
          <ScrollToTopButton /> {/* Añadir el botón de volver arriba */}
        </motion.div>
      </CartProvider>
    </ThemeProvider>
  );
}