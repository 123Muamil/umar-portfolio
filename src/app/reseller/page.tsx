import ChatCarousel from '@/components/ChatCarousel'
import ContactUS from '@/components/ContactUS'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import ImageCarousel from '@/components/ImageCarousel'
import PopularChannels from '@/components/PopularChannels'
import Rights from '@/components/Rights'
import Testimonials from '@/components/Testimonials'
import ChooseOurIPTVReseller from '@/pages/reseller/ChooseOurIPTVReseller'
import Faqs from '@/pages/reseller/Faqs'
import Header from '@/pages/reseller/Header'
import HeaderBottom from '@/pages/reseller/HeaderBottom'
import IPTVBusiness from '@/pages/reseller/IPTVBusiness'
import ResellerPlan from '@/pages/reseller/ResellerPlan'
import React from 'react'

const page = () => {
  return (
    <>
      <Header/>
      <HeaderBottom/>
      <ChooseOurIPTVReseller/>
      <IPTVBusiness/>
      <ResellerPlan/>
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
