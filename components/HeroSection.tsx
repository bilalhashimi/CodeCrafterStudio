"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-gray-900 overflow-hidden relative">
      {/* Background decorative shape */}
      <div className="absolute top-20 right-0 opacity-10 dark:opacity-5 -z-10">
        <div className="w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="flex flex-col w-full md:w-1/2 mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Building Digital Excellence
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            We create stunning websites and applications that drive business growth and deliver exceptional user experiences.
          </p>
          <div className="flex space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/services" 
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                Our Services
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/contact" 
                className="px-8 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-md hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full max-w-lg h-[400px]">
            {/* Custom 3D hero element instead of image */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Main gradient square with hole */}
              <motion.div
                className="absolute w-60 h-60"
                style={{
                  background: 'linear-gradient(135deg, #4338ca 0%, #ec4899 100%)',
                  borderRadius: '32px',
                  boxShadow: '0 25px 50px -12px rgba(79, 70, 229, 0.4)'
                }}
                animate={{ 
                  y: [0, -15, 0],
                  rotateY: [10, 5, 10],
                  rotateX: [5, 10, 5]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  ease: "easeInOut" 
                }}
              >
                {/* Inner cutout/hole */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transform: 'translateZ(10px)' }}
                >
                  <div 
                    className="w-28 h-28 bg-[#120a47]"
                    style={{ 
                      borderRadius: '16px',
                      boxShadow: 'inset 0 8px 24px rgba(0, 0, 0, 0.4)'
                    }}
                  ></div>
                </div>
              </motion.div>
              
              {/* Small blue sphere */}
              <motion.div
                className="absolute bottom-20 left-20 w-12 h-12 rounded-full bg-blue-600"
                style={{
                  boxShadow: '0 15px 30px -10px rgba(37, 99, 235, 0.5)'
                }}
                animate={{ 
                  y: [0, 10, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut",
                  delay: 1
                }}
              ></motion.div>
              
              {/* Small blue cube */}
              <motion.div
                className="absolute right-20 bottom-10 w-10 h-10 bg-blue-800"
                style={{
                  boxShadow: '0 10px 15px -5px rgba(30, 64, 175, 0.5)',
                  transform: 'perspective(800px) rotateX(20deg) rotateY(30deg)'
                }}
                animate={{ 
                  y: [0, -8, 0],
                  rotateY: [30, 40, 30]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5,
                  ease: "easeInOut",
                  delay: 2
                }}
              ></motion.div>
            </div>
            
            {/* Decorative floating elements */}
            <motion.div 
              className="absolute -bottom-10 -left-10 bg-blue-500 w-20 h-20 rounded-full opacity-70 z-10"
              animate={{ 
                y: [0, 15, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute -top-5 -right-5 bg-purple-500 w-16 h-16 rounded-full opacity-70 z-10"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2.5,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 