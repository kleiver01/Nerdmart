import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader, ImageOff } from 'lucide-react'; // Importar ImageOff

const ImageLoader = ({ src, alt, className }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  // URL de imagen de respaldo
  const fallbackImageUrl = 'https://via.placeholder.com/600x400?text=Imagen+no+disponible';

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Loader className="w-8 h-8 text-purple-500 dark:text-purple-300" />
            </motion.div>
          </motion.div>
        )}
        {!loading && !error && (
          <motion.img
            key="image"
            src={src}
            alt={alt}
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}
        {error && !loading && (
          <motion.div
            key="fallback"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg text-center p-2"
          >
            <ImageOff className="w-12 h-12 mb-2" />
            <p className="text-sm">Imagen no disponible</p>
            {/* Opcional: mostrar la imagen de respaldo directamente */}
            {/* <img src={fallbackImageUrl} alt="Imagen de respaldo" className="w-full h-full object-cover" /> */}
          </motion.div>
        )}
      </AnimatePresence>
      {/* Hidden image to trigger load/error events */}
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className="hidden"
      />
    </div>
  );
};

export default ImageLoader;