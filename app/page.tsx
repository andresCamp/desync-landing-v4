'use client'
import HeroSection from '@/components/hero/HeroSection'
import LogoCarousel from '@/components/LogoCarousel'
import Services from '@/components/Services'
import CaseStudies from '@/components/CaseStudies'
import Image from 'next/image'
import Industries from '@/components/Industries'
import MeetTheTeam from '@/components/MeetTheTeam'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroSection />
      

      <LogoCarousel />

      <Industries/>


      <Services />

      <CaseStudies />

      <MeetTheTeam />

    </main>
  )
}
