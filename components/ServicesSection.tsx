"use client";

import React from 'react';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'We build responsive, high-performance websites that showcase your brand and drive conversions.',
      iconSrc: '/pictures/service-icon-1.png',
    },
    {
      title: 'UI/UX Design',
      description: 'Our design team creates intuitive, engaging user experiences that keep visitors coming back.',
      iconSrc: '/pictures/service-icon-1.png',
    },
    {
      title: 'Mobile Apps',
      description: 'We develop cross-platform mobile applications that provide a seamless user experience.',
      iconSrc: '/pictures/service-icon-1.png',
    },
    {
      title: 'Digital Marketing',
      description: 'Our marketing strategies help you reach your target audience and grow your online presence.',
      iconSrc: '/pictures/service-icon-1.png',
    },
    {
      title: 'SEO Optimization',
      description: 'We improve your search engine rankings to drive more organic traffic to your website.',
      iconSrc: '/pictures/service-icon-1.png',
    },
    {
      title: 'Content Strategy',
      description: 'Our content experts help you develop compelling narratives that engage your audience.',
      iconSrc: '/pictures/service-icon-1.png',
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the online world.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              iconSrc={service.iconSrc}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 