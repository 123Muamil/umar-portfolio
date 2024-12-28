import ChatCarousel from '@/components/ChatCarousel'
import ContactUS from '@/components/ContactUS'
import Devices from '@/components/Devices'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import ImageCarousel from '@/components/ImageCarousel'
import PopularChannels from '@/components/PopularChannels'
import Rights from '@/components/Rights'
import Subscription from '@/components/Subscription'
import Testimonials from '@/components/Testimonials'
import BestServices from '@/pages/single-plan/BestServices'
import Faqs from '@/pages/single-plan/Faqs'
import Header from '@/pages/single-plan/Header'
import React from 'react'

const page = () => {
  return (
    <>
      <Header/>
      <BestServices/>
      <Subscription/>
      <Devices/>
      <Faqs/>
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
