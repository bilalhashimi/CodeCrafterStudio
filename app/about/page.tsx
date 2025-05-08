"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Wand2, Code2, LineChart, Sparkles } from 'lucide-react';

interface CharacterCardProps {
  title: string;
  role: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  animationDirection: 'left' | 'right' | 'up' | 'down';
  index: number;
}

const CharacterCard = ({ 
  title, 
  role, 
  description, 
  icon, 
  color, 
  animationDirection, 
  index 
}: CharacterCardProps) => {
  
  // Animation paths based on direction
  const getAnimationPath = () => {
    switch(animationDirection) {
      case 'left': return { x: [-5, 5, -5] };
      case 'right': return { x: [5, -5, 5] };
      case 'up': return { y: [-5, 5, -5] };
      case 'down': return { y: [5, -5, 5] };
      default: return { y: [-5, 5, -5] };
    }
  };

  return (
    <motion.div 
      className="bg-white/90 dark:bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.15,
        type: "spring", 
        stiffness: 300,
        damping: 20
      }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
    >
      <div className="p-8 flex flex-col items-center">
        {/* Character Container with Animation */}
        <div className="relative mb-6 w-40 h-40">
          {/* Background glow */}
          <div 
            className="absolute inset-0 rounded-full blur-xl opacity-60" 
            style={{ backgroundColor: color }}
          ></div>
          
          {/* Character silhouette */}
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-white/10 dark:from-white/10 dark:to-white/5 flex items-center justify-center overflow-hidden"
            animate={getAnimationPath()}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              ease: "easeInOut" 
            }}
          >
            {/* Animated Character Icon */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Stylized Icon/Character */}
              <motion.div
                className="relative z-10 text-white"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [-2, 2, -2]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
              >
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${color} 0%, rgba(30, 27, 75, 0.7) 100%)`,
                    boxShadow: `0 15px 35px -10px ${color}60`
                  }}
                >
                  {icon}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Character Name/Role and Description */}
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{title}</h3>
        <span className="text-sm font-medium mb-4" style={{ color }}>{role}</span>
        <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
      </div>
    </motion.div>
  );
};

export default function AboutPage() {
  const characters = [
    {
      title: "The Visionary",
      role: "Creative Director",
      description: "Dreams up the impossible and inspires the team to bring it to life.",
      icon: <Sparkles size={32} strokeWidth={1.5} />,
      color: "#8b5cf6", // violet
      animationDirection: 'up' as const
    },
    {
      title: "The Architect",
      role: "Lead Designer",
      description: "Crafts beautiful interfaces with an obsession for pixel-perfect details.",
      icon: <Wand2 size={32} strokeWidth={1.5} />,
      color: "#ec4899", // pink
      animationDirection: 'right' as const
    },
    {
      title: "The Engineer",
      role: "Senior Developer",
      description: "Transforms designs into elegant, efficient code that just works.",
      icon: <Code2 size={32} strokeWidth={1.5} />,
      color: "#06b6d4", // cyan
      animationDirection: 'left' as const
    },
    {
      title: "The Strategist",
      role: "Marketing Lead",
      description: "Analyzes data to uncover insights that drive business growth.",
      icon: <LineChart size={32} strokeWidth={1.5} />,
      color: "#f59e0b", // amber
      animationDirection: 'down' as const
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-[#0e0639] dark:via-[#1b0d4e] dark:to-[#17083b] text-gray-800 dark:text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="fixed top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-100/30 dark:bg-purple-700/20 blur-[100px] pointer-events-none"></div>
      <div className="fixed bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-indigo-100/30 dark:bg-blue-700/20 blur-[80px] pointer-events-none"></div>
      
      <NavBar />
      <main className="relative z-10">
        <section className="w-full py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                Who We Are
              </h1>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg md:text-xl">
                We're a collective of digital craftspeople passionate about creating exceptional experiences. 
                Our team blends artistic vision with technical excellence to build products that inspire and perform.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {characters.map((character, index) => (
                <CharacterCard
                  key={index}
                  title={character.title}
                  role={character.role}
                  description={character.description}
                  icon={character.icon}
                  color={character.color}
                  animationDirection={character.animationDirection}
                  index={index}
                />
              ))}
            </motion.div>
            
            <motion.div 
              className="text-center max-w-5xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Our Philosophy</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-center">
                <div className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <span className="text-2xl font-bold">01</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Innovation First</h3>
                  <p className="text-gray-600 dark:text-gray-300">We push boundaries and explore new frontiers to deliver cutting-edge solutions.</p>
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <span className="text-2xl font-bold">02</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">User Centered</h3>
                  <p className="text-gray-600 dark:text-gray-300">We design with real people in mind, creating experiences that delight and engage.</p>
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-pink-100 dark:bg-pink-500/20 flex items-center justify-center text-pink-600 dark:text-pink-400">
                    <span className="text-2xl font-bold">03</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Quality Obsessed</h3>
                  <p className="text-gray-600 dark:text-gray-300">We sweat the small stuff because we believe details make the difference.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-20 relative z-10">
          <div className="container mx-auto px-6">
            <motion.div 
              className="bg-white/90 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-12 text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                Let's Build Together
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                Ready to bring your vision to life? Our team is eager to collaborate with you on your next big project.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg inline-block shadow-lg shadow-blue-600/30"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 