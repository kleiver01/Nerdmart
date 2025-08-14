import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Zap, Globe } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: Layout,
      title: 'Diseño Intuitivo',
      description: 'Navega con facilidad a través de interfaces creadas para tu comodidad y disfrute visual.',
    },
    {
      icon: Zap,
      title: 'Rendimiento Óptimo',
      description: 'Experimenta la velocidad y fluidez en cada interacción, sin esperas innecesarias.',
    },
    {
      icon: Globe,
      title: 'Alcance Global',
      description: 'Conecta con una comunidad diversa y comparte tu visión con el mundo entero.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 to-purple-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          ¿Por qué elegirnos?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.3 + index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;