"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ShoppingCart, Calendar, Cog, MessageSquare, LayoutGrid } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  tags: string[];
  index: number;
}

const ProjectCard = ({ title, description, icon, color, tags, index }: ProjectCardProps) => {
  return (
    <motion.div 
      className="bg-white/90 dark:bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1,
        type: "spring", 
        stiffness: 300,
        damping: 20
      }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
    >
      <div className="p-6">
        <div className="mb-6 relative">
          {/* 3D Icon Container */}
          <motion.div 
            className="w-20 h-20 relative mx-auto mb-4"
            animate={{ 
              y: [0, -8, 0],
              rotateY: [0, 10, 0],
              rotateX: [0, 5, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 6,
              ease: "easeInOut" 
            }}
          >
            {/* Glow effect */}
            <div 
              className="absolute inset-0 rounded-full blur-xl opacity-50" 
              style={{ backgroundColor: color }}
            ></div>
            
            {/* Icon container with gradient */}
            <div 
              className="absolute inset-0 rounded-xl flex items-center justify-center"
              style={{ 
                background: `linear-gradient(135deg, ${color} 0%, rgba(30, 27, 75, 0.9) 100%)`,
                transform: 'perspective(800px) rotateX(10deg) rotateY(15deg)',
                boxShadow: `0 15px 35px -5px ${color}40, 0 5px 15px rgba(0, 0, 0, 0.1)`
              }}
            >
              <div className="text-white">
                {icon}
              </div>
            </div>
          </motion.div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 dark:text-white text-center mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-6">{description}</p>
        
        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function PortfolioPage() {
  const projects = [
    {
      title: "eCommerce Platform",
      description: "Built a scalable store with custom checkout and CMS",
      icon: <ShoppingCart size={32} strokeWidth={1.5} />,
      color: "#4f46e5", // indigo
      tags: ["React", "Shopify", "Node.js", "GraphQL"]
    },
    {
      title: "Healthcare Booking App",
      description: "App for appointment scheduling and virtual visits",
      icon: <Calendar size={32} strokeWidth={1.5} />,
      color: "#8b5cf6", // violet
      tags: ["React Native", "Firebase", "Express.js"]
    },
    {
      title: "Automated CRM Tool",
      description: "CRM with automated workflows and smart alerts",
      icon: <Cog size={32} strokeWidth={1.5} />,
      color: "#06b6d4", // cyan
      tags: ["Vue.js", "MongoDB", "AWS Lambda"]
    },
    {
      title: "AI Chatbot for Support",
      description: "Chatbot system powered by GPT and WhatsApp integration",
      icon: <MessageSquare size={32} strokeWidth={1.5} />,
      color: "#ec4899", // pink
      tags: ["Python", "OpenAI", "WhatsApp API"]
    },
    {
      title: "Portfolio Website Template",
      description: "Template site for developers and freelancers",
      icon: <LayoutGrid size={32} strokeWidth={1.5} />,
      color: "#f59e0b", // amber
      tags: ["HTML/CSS", "JavaScript", "GSAP Animation"]
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
      <main className="pt-20 relative z-10">
        <section className="w-full py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-600 dark:to-purple-600 rounded-lg blur opacity-20"></div>
                  <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-gray-800 dark:text-white px-6 py-2">
                    Our Work
                  </h1>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-6">
                Explore our recent projects and see how we've helped businesses transform their digital presence.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  icon={project.icon}
                  color={project.color}
                  tags={project.tags}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </section>

        <section className="w-full py-16 bg-gray-50 dark:bg-gray-800/20">
          <div className="container mx-auto px-6">
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
                We'd love to hear about your next big idea. Get in touch with us to discuss how we can bring your vision to life.
              </p>
              <motion.button
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 