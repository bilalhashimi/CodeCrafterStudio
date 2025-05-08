"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

const NavBar = () => {
  // We'll keep the scrolled state for potential future use, but won't apply visual effects
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check in case the page is already scrolled on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="/">
            <Image 
              src="/pictures/logo .png" 
              alt="Logo" 
              width={150} 
              height={50}
              className="object-contain"
            />
          </Link>
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ y: -3 }}
            >
              <Link 
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
              >
                {item}
              </Link>
            </motion.div>
          ))}
          <ThemeToggle />
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <motion.button 
            className="outline-none mobile-menu-button"
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6 text-gray-500 hover:text-blue-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar; 