import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Mueve el texto a la mitad de la velocidad de scroll
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]); // Mueve el fondo más lento

  const handleExploreClick = () => {
    // Desplazarse a la sección de productos (asumiendo que ProductGrid está debajo del Hero)
    const productGridElement = document.getElementById('product-grid-section');
    if (productGridElement) {
      productGridElement.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
    }
  };

  return (
    <motion.section
      className="relative py-20 md:py-32 bg-gradient-to-br from-purple-500 to-indigo-700 dark:from-purple-800 dark:to-indigo-900 text-white overflow-hidden transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Fondo animado de partículas con parallax */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y: yBg }} // Aplicar parallax al fondo
      >
        <Sparkles className="w-full h-full" />
      </motion.div>
      
      {/* Contenido principal del Hero con parallax */}
      <motion.div
        className="container mx-auto px-4 text-center relative z-10"
        style={{ y: yText }} // Aplicar parallax al contenido
      >
        <motion.h2
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Tecnología que Impulsa <br className="hidden md:block" /> Tu Pasión
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl text-purple-100 dark:text-purple-300 mb-10 max-w-3xl mx-auto drop-shadow"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Descubre los gadgets más innovadores y los componentes más potentes para llevar tu experiencia al siguiente nivel.
        </motion.p>
        <motion.button
          onClick={handleExploreClick} // Añadir la función al botón
          className="px-10 py-4 bg-white text-purple-700 font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <Rocket className="w-6 h-6 mr-2" />
          Explorar Ahora
        </motion.button>

        {/* Elementos decorativos flotantes */}
        <motion.div
          className="absolute top-1/4 left-10 hidden md:block"
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="w-16 h-16 text-purple-300 opacity-70" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-10 hidden md:block"
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Sparkles className="w-12 h-12 text-indigo-300 opacity-70" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;