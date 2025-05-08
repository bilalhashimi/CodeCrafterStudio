import React from 'react'
import NavBar from '@/components/NavBar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import PortfolioSection from '@/components/PortfolioSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-[#0e0639] dark:via-[#1b0d4e] dark:to-[#17083b] text-gray-800 dark:text-white relative overflow-hidden">
      {/* Background elements similar to portfolio page for consistency */}
      <div className="fixed top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-100/30 dark:bg-purple-700/20 blur-[100px] pointer-events-none"></div>
      <div className="fixed bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-indigo-100/30 dark:bg-blue-700/20 blur-[80px] pointer-events-none"></div>
      
      <NavBar />
      <main className="pt-20">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  )
} 