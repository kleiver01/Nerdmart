import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 dark:bg-gray-950 text-gray-300 py-10 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          className="flex justify-center space-x-6 mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.6 }}
        >
          <motion.a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Instagram className="w-7 h-7" />
          </motion.a>
          <motion.a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Twitter className="w-7 h-7" />
          </motion.a>
          <motion.a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Facebook className="w-7 h-7" />
          </motion.a>
        </motion.div>
        <motion.p
          className="text-sm"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.6 }}
        >
          © {new Date().getFullYear()} NerdMart. Todos los derechos reservados.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;