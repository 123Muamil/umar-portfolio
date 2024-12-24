import React from 'react'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import About from '@/components/About'
import OurServices from '@/components/OurServices'
import Features from '@/components/Features'
import ImageCarousel from '@/components/ImageCarousel'
import ChooseIPTVServices from '@/components/ChooseIPTVServices'
import PopularChannels from '@/components/PopularChannels'
import Subscription from '@/components/Subscription'
import Devices from '@/components/Devices'
const page = () => {
  return (
    <>
     <Navbar/> 
     <Header/>
     <About/>
     <OurServices/>
     <Features/>
     <ImageCarousel/>
     <ChooseIPTVServices/>
     <PopularChannels/>
     <Subscription/>
    <Devices/>
    </>
  )
}

export default page
