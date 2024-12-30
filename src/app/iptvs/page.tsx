import ChatCarousel from '@/components/ChatCarousel'
import ContactUS from '@/components/ContactUS'
import Devices from '@/components/Devices'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import ImageCarousel from '@/components/ImageCarousel'
import PopularChannels from '@/components/PopularChannels'
import Rights from '@/components/Rights'
import Testimonials from '@/components/Testimonials'
import ChooseUS from '@/pages/iptvs/ChooseUS'
import Header from '@/pages/iptvs/Header'
import IPTVServers from '@/pages/iptvs/IPTVServers'
import React from 'react'

const page = () => {
  return (
    <>
      <Header/>
      <IPTVServers/>
      <ChooseUS/>
      <Devices/>
      <Features/>
      <ImageCarousel/>
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
