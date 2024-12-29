import ChatCarousel from '@/components/ChatCarousel'
import ContactUS from '@/components/ContactUS'
import Devices from '@/components/Devices'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import ImageCarousel from '@/components/ImageCarousel'
import PopularChannels from '@/components/PopularChannels'
import Rights from '@/components/Rights'
import Testimonials from '@/components/Testimonials'
import Experience from '@/pages/about/Experience'
import Header from '@/pages/about/Header'
import JoinUS from '@/pages/about/JoinUS'
import WelcomeIptv from '@/pages/about/WelcomeIptv'
import React from 'react'

const page = () => {
  return (
    <>
      <Header/>
      <WelcomeIptv/>
      <JoinUS/>
      <Experience/>
      <Features/>
      <ImageCarousel/>
      <Devices/>
      <Testimonials/>
      <ChatCarousel/>
      <PopularChannels/>
      <ContactUS/>
      <Footer/>
      <Rights/>
    </>
  )
}

export default page
