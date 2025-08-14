import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader, ImageOff } from 'lucide-react';

const ResponsiveImage = ({ src, alt, className, widths = [400, 800, 1200], sizes = "100vw" }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  // Función para generar URLs de Cloudinary con diferentes formatos
  const getOptimizedSrc = (originalSrc, width, format = 'auto') => {
    // Asumiendo que la URL original ya es de Cloudinary o se puede transformar
    // Ejemplo: https://res.cloudinary.com/demo/image/fetch/f_auto,q_auto,w_600/https://images.unsplash.com/photo-1587829741301-dc798b83add3
    // Necesitamos insertar el formato y el ancho correctamente
    const parts = originalSrc.split('/fetch/');
    if (parts.length < 2) return originalSrc; // No es una URL de fetch de Cloudinary

    const transformation = `f_${format},q_auto,w_${width}`;
    return `${parts[0]}/fetch/${transformation}/${parts[1]}`;
  };

  // Generar srcset para WebP y AVIF
  const webpSrcSet = widths.map(w => `${getOptimizedSrc(src, w, 'webp')} ${w}w`).join(', ');
  const avifSrcSet = widths.map(w => `${getOptimizedSrc(src, w, 'avif')} ${w}w`).join(', ');
  const defaultSrcSet = widths.map(w => `${getOptimizedSrc(src, w, 'jpeg')} ${w}w`).join(', '); // Fallback a JPEG/original

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
          <picture>
            {/* AVIF source */}
            <source srcSet={avifSrcSet} sizes={sizes} type="image/avif" />
            {/* WebP source */}
            <source srcSet={webpSrcSet} sizes={sizes} type="image/webp" />
            {/* Default image (e.g., JPEG/PNG) */}
            <motion.img
              key="image"
              src={src} // src por defecto para navegadores que no soportan srcset o picture
              srcSet={defaultSrcSet}
              sizes={sizes}
              alt={alt}
              className={className}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </picture>
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
          </motion.div>
        )}
      </AnimatePresence>
      {/* Hidden image to trigger load/error events - using a single source for simplicity */}
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

export default ResponsiveImage;