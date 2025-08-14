import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ResponsiveImage from './ResponsiveImage'; // Usar el nuevo componente

const ProductCard = ({ product, index }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
    >
      <div className="relative h-48 overflow-hidden">
        <ResponsiveImage
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          widths={[400, 600, 800]} // Anchos de imagen para srcset
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Tamaños para srcset
        />
        <div className="absolute top-2 right-2 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          {product.category}
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 flex-grow">
          {product.description}
        </p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-current mr-1" />
            <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
              {product.rating} ({product.reviews})
            </span>
          </div>
          <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <motion.button
          onClick={() => addToCart(product)}
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShoppingCart className="w-5 h-5" />
          Añadir al Carrito
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;