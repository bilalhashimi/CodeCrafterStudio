"use client";

import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffect = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Deep blue/purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e0639] via-[#1b0d4e] to-[#17083b]"></div>
      
      {/* Soft glow effects */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-700/20 blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-blue-700/20 blur-[80px]"></div>
      
      {/* 3D shape - gradient square with rounded corners */}
      <motion.div 
        className="absolute top-1/2 right-1/3 w-36 h-36 rounded-2xl"
        style={{
          background: 'linear-gradient(135deg, #5643cc 0%, #ff5b79 100%)',
          boxShadow: '0 10px 30px rgba(86, 67, 204, 0.2)',
          transform: 'perspective(800px) rotateX(10deg) rotateY(-20deg)'
        }}
        animate={{
          y: [0, -15, 0],
          rotateY: [-20, -25, -20]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Small blue sphere */}
      <motion.div 
        className="absolute top-[40%] left-[30%] w-10 h-10 rounded-full bg-blue-700"
        style={{
          boxShadow: '0 5px 15px rgba(59, 130, 246, 0.3)'
        }}
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Small blue cube */}
      <motion.div 
        className="absolute bottom-[20%] right-[20%] w-8 h-8 bg-blue-900"
        style={{
          transform: 'perspective(800px) rotateX(45deg) rotateY(45deg)'
        }}
        animate={{
          y: [0, -8, 0],
          rotateY: [45, 55, 45]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
};

export default BackgroundEffect; 