import React from 'react'
import NavBar from '@/components/NavBar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import PortfolioSection from '@/components/PortfolioSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e0639] via-[#1b0d4e] to-[#17083b] text-white relative overflow-hidden">
      {/* Background elements similar to portfolio page for consistency */}
      <div className="fixed top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-700/20 blur-[100px] pointer-events-none"></div>
      <div className="fixed bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-blue-700/20 blur-[80px] pointer-events-none"></div>
      
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