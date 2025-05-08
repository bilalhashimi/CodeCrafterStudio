"use client";

import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Megaphone, FileText, Cog, Lightbulb } from 'lucide-react';

const ServiceCard = ({ title, description, icon, index = 0 }: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  index?: number;
}) => {
  return (
    <motion.div 
      className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-md hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <motion.div 
        className="w-16 h-16 mb-4 relative flex items-center justify-center text-blue-400"
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Marketing & SEO',
      description: 'Boost your online visibility with our targeted marketing campaigns, strategic keyword optimization, and comprehensive analytics tracking. We help you reach the right audience at the right time.',
      icon: <Megaphone size={36} />
    },
    {
      title: 'Content Strategy',
      description: 'Engage your audience with compelling storytelling, professionally written blog articles, and social media content that aligns with your brand voice and business objectives.',
      icon: <FileText size={36} />
    },
    {
      title: 'Automation Services',
      description: 'Streamline your business processes with intelligent workflow automation, custom chatbot integration, and efficient task scheduling systems that save time and reduce operational costs.',
      icon: <Cog size={36} />
    },
    {
      title: 'Idea-to-Product Development',
      description: 'Transform your vision into reality with our comprehensive development process - from MVP creation and rapid prototyping to full-scale custom application development.',
      icon: <Lightbulb size={36} />
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
    <div className="min-h-screen bg-gradient-to-br from-[#0e0639] via-[#1b0d4e] to-[#17083b] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="fixed top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-700/20 blur-[100px] pointer-events-none"></div>
      <div className="fixed bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-blue-700/20 blur-[80px] pointer-events-none"></div>
      
      <NavBar />
      <main className="pt-20">
        <section className="w-full py-16">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">More Services We Offer</h1>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore our comprehensive range of professional services designed to help your business thrive in the digital landscape.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </section>

        <section className="w-full py-16">
          <div className="container mx-auto px-6">
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 shadow-xl p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <motion.div 
                    className="relative w-40 h-40 flex items-center justify-center"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 5,
                      ease: "easeInOut" 
                    }}
                  >
                    <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white">
                      <span className="text-3xl font-bold">24/7</span>
                    </div>
                  </motion.div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Dedicated Support & Consultation
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Our team of experts is available around the clock to provide technical support, strategic guidance, and personalized consultation for all your digital needs. We're committed to your success at every step of the journey.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">Technical Support</span>
                    <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm">Business Strategy</span>
                    <span className="px-3 py-1 bg-green-900/30 text-green-300 rounded-full text-sm">Ongoing Maintenance</span>
                    <span className="px-3 py-1 bg-amber-900/30 text-amber-300 rounded-full text-sm">Performance Optimization</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 