"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Mail, Phone, Linkedin, Twitter, Github, SendHorizontal } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === '',
      email: !/^\S+@\S+\.\S+$/.test(formData.email),
      message: formData.message.trim() === ''
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Mock form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after showing success
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <motion.form 
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onSubmit={handleSubmit}
    >
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-300 mb-2 text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full bg-white/10 border ${errors.name ? 'border-red-500' : 'border-white/20'} rounded-lg p-3 text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          placeholder="Your name"
        />
        {errors.name && <p className="mt-2 text-sm text-red-400">Please enter your name</p>}
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-300 mb-2 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-lg p-3 text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          placeholder="your.email@example.com"
        />
        {errors.email && <p className="mt-2 text-sm text-red-400">Please enter a valid email address</p>}
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-300 mb-2 text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full bg-white/10 border ${errors.message ? 'border-red-500' : 'border-white/20'} rounded-lg p-3 text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          placeholder="Tell us about your project..."
        ></textarea>
        {errors.message && <p className="mt-2 text-sm text-red-400">Please enter a message</p>}
      </div>

      <motion.button
        type="submit"
        className="w-full py-3 px-6 text-white font-semibold rounded-lg shadow-lg relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(to right, #4f46e5, #8b5cf6, #ec4899)',
          boxShadow: '0 10px 15px -3px rgba(79, 70, 229, 0.4)'
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
      >
        <span className="flex items-center justify-center">
          {isSubmitting ? (
            "Sending..."
          ) : submitSuccess ? (
            "Message Sent!"
          ) : (
            <>
              Send Message
              <SendHorizontal className="ml-2 w-5 h-5" />
            </>
          )}
        </span>
      </motion.button>
    </motion.form>
  );
};

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-gradient-to-br from-[#0e0639] via-[#1b0d4e] to-[#17083b] text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="fixed top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-700/20 blur-[100px] pointer-events-none"></div>
        <div className="fixed bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-blue-700/20 blur-[80px] pointer-events-none"></div>
        
        <section className="w-full py-20 relative z-10">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                Get in Touch
              </h1>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
                Have a project in mind? Let's build something great together.
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
              <div className="w-full lg:w-3/5">
                <ContactForm />
              </div>
              
              <div className="w-full lg:w-2/5">
                {/* Decorative 3D Element */}
                <motion.div 
                  className="relative mb-12 h-60 lg:h-80"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* Main floating shape */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 mx-auto w-40 h-40 rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(168, 85, 247, 0.4) 100%)',
                      boxShadow: '0 20px 50px -15px rgba(99, 102, 241, 0.5)',
                      transform: 'perspective(800px) rotateX(10deg) rotateY(-20deg)'
                    }}
                    animate={{ 
                      y: [0, -15, 0],
                      rotateY: [-20, -10, -20]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 6,
                      ease: "easeInOut" 
                    }}
                  />
                  
                  {/* Smaller shapes */}
                  <motion.div
                    className="absolute top-10 right-10 w-16 h-16 rounded-full bg-blue-500/50"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 4,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                  
                  <motion.div
                    className="absolute bottom-10 left-20 w-12 h-12 rounded-xl bg-purple-600/50"
                    style={{
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
                      delay: 0.5
                    }}
                  />
                </motion.div>
                
                {/* Alternative Contact Info */}
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Or reach us directly
                  </h3>
                  
                  <ul className="space-y-5">
                    <li className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                        <Mail className="w-5 h-5 text-blue-400" />
                      </div>
                      <a href="mailto:hello@codecrafter.studio" className="text-gray-300 hover:text-white transition-colors">
                        hello@codecrafter.studio
                      </a>
                    </li>
                    
                    <li className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                        <Phone className="w-5 h-5 text-purple-400" />
                      </div>
                      <a href="tel:+15551234567" className="text-gray-300 hover:text-white transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </li>
                    
                    <li>
                      <div className="flex items-center mt-6 space-x-4">
                        <motion.a 
                          href="https://linkedin.com" 
                          target="_blank"
                          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                          whileHover={{ y: -3 }}
                        >
                          <Linkedin className="w-5 h-5" />
                        </motion.a>
                        
                        <motion.a 
                          href="https://twitter.com" 
                          target="_blank"
                          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                          whileHover={{ y: -3 }}
                        >
                          <Twitter className="w-5 h-5" />
                        </motion.a>
                        
                        <motion.a 
                          href="https://github.com" 
                          target="_blank"
                          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                          whileHover={{ y: -3 }}
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 