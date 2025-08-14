import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Moon, Sun, Store, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { cartItems, totalItemsInCart, removeFromCart, cartTotal, clearCart } = useCart(); // Añadido clearCart
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCheckout = () => {
    alert('¡Felicidades! Has "comprado" tus productos. Ahora, si esto fuera una tienda real, te pediría tu tarjeta de crédito. 😉');
    clearCart(); // Vacía el carrito después de la "compra"
    setIsCartOpen(false); // Cierra el carrito después de la "compra"
  };

  return (
    <motion.header
      className="sticky top-0 z-50 p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg transition-colors duration-300"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.div
          className="flex items-center gap-3"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Store className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            NerdMart
          </h1>
        </motion.div>

        <nav className="flex items-center gap-6">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </motion.button>

          <motion.button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative p-2 rounded-full bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-700 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItemsInCart > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItemsInCart}
              </span>
            )}
          </motion.button>
        </nav>
      </div>

      {isCartOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute right-4 mt-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Tu Carrito</h3>
          {cartItems.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">El carrito está vacío. ¡Añade algo!</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center">
                    <img src={item.imageUrl} alt={item.name} className="w-12 h-12 object-cover rounded-md mr-3" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{item.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">${item.price.toFixed(2)} x {item.quantity}</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              ))}
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-lg font-bold text-gray-900 dark:text-white">Total:</span>
                <span className="text-lg font-bold text-purple-600 dark:text-purple-400">${cartTotal.toFixed(2)}</span>
              </div>
              <motion.button
                onClick={handleCheckout}
                className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Proceder al Pago
              </motion.button>
            </>
          )}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;