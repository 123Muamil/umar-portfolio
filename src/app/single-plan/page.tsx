import React from 'react'
import Header from '@/pages/single-plan/Header'
import BestServices from '@/pages/single-plan/BestServices'
import Subscription from '@/components/Subscription'
import Devices from '@/components/Devices'
import Faqs from '@/pages/single-plan/Faqs'
import Features from '@/components/Features'
import ImageCarousel from '@/components/ImageCarousel'
import Testimonials from '@/components/Testimonials'
import ChatCarousel from '@/components/ChatCarousel'
import PopularChannels from '@/components/PopularChannels'
import ContactUS from '@/components/ContactUS'
import Footer from '@/components/Footer'
import Rights from '@/components/Rights'
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
