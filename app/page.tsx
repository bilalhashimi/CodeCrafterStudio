import React from 'react'
import NavBar from '@/components/NavBar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import PortfolioSection from '@/components/PortfolioSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
      </main>
      <Footer />
    </>
  )
} 