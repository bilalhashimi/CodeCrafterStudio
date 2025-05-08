"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4
      }
    })
  };

  return (
    <section className="w-full py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">About Us</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We are a team of passionate designers and developers dedicated to creating exceptional digital experiences.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image 
              src="/pictures/About Us-icon-1.png"
              alt="About Us"
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              At our core, we believe in the power of innovative design and technology to transform businesses and improve people's lives. Our mission is to deliver high-quality digital solutions that solve real problems and create meaningful connections.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Our Approach</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We take a collaborative and user-centered approach to every project. By understanding your business goals and user needs, we create tailored solutions that drive engagement and results.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg"
                custom={0}
                initial="hidden"
                animate="visible"
                variants={statVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">150+</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Projects Completed</p>
              </motion.div>
              <motion.div 
                className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg"
                custom={1}
                initial="hidden"
                animate="visible"
                variants={statVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">50+</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Happy Clients</p>
              </motion.div>
              <motion.div 
                className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg"
                custom={2}
                initial="hidden"
                animate="visible"
                variants={statVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">10+</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Years Experience</p>
              </motion.div>
              <motion.div 
                className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg"
                custom={3}
                initial="hidden"
                animate="visible"
                variants={statVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">24/7</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Support Available</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 