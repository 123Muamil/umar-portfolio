import ContactUS from '@/components/ContactUS'
import Devices from '@/components/Devices'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import ImageCarousel from '@/components/ImageCarousel'
import PopularChannels from '@/components/PopularChannels'
import Rights from '@/components/Rights'
import Community from '@/pages/contact/Community'
import Header from '@/pages/contact/Header'
import HelpUS from '@/pages/contact/HelpUS'
import Included from '@/pages/contact/Included'
import React from 'react'

const page = () => {
  return (
    <>
      <Header/>
      <HelpUS/>
      <Community/>
      <Included/>
      <Features/>
      <ImageCarousel/>
      <Devices/>
      <PopularChannels/>
      <ContactUS/>
      <Footer/>
      <Rights/>
    </>
  )
}

export default page
