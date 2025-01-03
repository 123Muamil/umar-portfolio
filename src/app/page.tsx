import React from 'react'
import Header from '@/components/Header'
import About from '@/components/About'
import OurServices from '@/components/OurServices'
import Features from '@/components/Features'
import ImageCarousel from '@/components/ImageCarousel'
import ChooseIPTVServices from '@/components/ChooseIPTVServices'
import PopularChannels from '@/components/PopularChannels'
import Subscription from '@/components/Subscription'
import Devices from '@/components/Devices'
import WhoWeAre from '@/components/WhoWeAre'
import Testimonials from '@/components/Testimonials'
import ChatCarousel from '@/components/ChatCarousel'
import ContactUS from '@/components/ContactUS'
import Footer from '@/components/Footer'
import Rights from '@/components/Rights'
const page = () => {
  return (
    <>
     <Header/>
     <About/>
     <OurServices/>
     <Features/>
     <ImageCarousel/>
     <ChooseIPTVServices/>
     <PopularChannels/>
     <Subscription/>
    <Devices/>
    <WhoWeAre/>
    <Testimonials/>
    <ChatCarousel/>
    <ContactUS/>
    <Footer/>
    <Rights/>
    </>
  )
}

export default page
