"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  iconSrc: string;
  index?: number;
}

const ServiceCard = ({ title, description, iconSrc, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <motion.div 
        className="w-16 h-16 mb-4 relative"
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Image
          src={iconSrc}
          alt={`${title} icon`}
          fill
          className="object-contain"
        />
      </motion.div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

export default ServiceCard; 