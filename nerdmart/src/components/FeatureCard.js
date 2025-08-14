import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      className="bg-white rounded-3xl shadow-xl p-8 text-center border border-gray-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="p-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full inline-flex mb-6"
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Icon className="w-10 h-10 text-white" />
      </motion.div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;