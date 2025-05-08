"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      category: 'Web Development',
      imageSrc: '/pictures/portfolio-icon-1.png',
      description: 'A modern e-commerce platform with seamless user experience and secure payment processing.',
      link: '/portfolio/ecommerce',
    },
    {
      title: 'Mobile Banking App',
      category: 'App Development',
      imageSrc: '/pictures/portfolio-icon-1.png',
      description: 'A secure and intuitive mobile banking application with real-time transaction tracking.',
      link: '/portfolio/banking-app',
    },
    {
      title: 'Corporate Rebrand',
      category: 'Branding',
      imageSrc: '/pictures/portfolio-icon-1.png',
      description: 'Complete rebranding project for a multinational corporation, including digital assets.',
      link: '/portfolio/corporate-rebrand',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Portfolio</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <motion.div 
                  className="h-full w-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href={project.link} className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center">
                    View Project
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/portfolio" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
              View All Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection; 