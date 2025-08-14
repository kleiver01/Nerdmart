import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../mock/products';
import ProductCard from './ProductCard';
import { Sparkles } from 'lucide-react';

const FeaturedProducts = () => {
  // Seleccionar algunos productos destacados, por ejemplo, los 3 primeros
  const featured = products.slice(0, 3);

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Sparkles className="w-8 h-8 text-yellow-500" />
          Ofertas Destacadas
          <Sparkles className="w-8 h-8 text-yellow-500" />
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;