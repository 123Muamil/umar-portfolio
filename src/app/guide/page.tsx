import ContactUS from '@/components/ContactUS'
import Footer from '@/components/Footer'
import Rights from '@/components/Rights'
import Faqs from '@/pages/guide/Faqs'
import Header from '@/pages/guide/Header'
import React from 'react'

const page = () => {
  return (
    <>
     <Header/>
     <Faqs/>
     <ContactUS/>
     <Footer/>
     <Rights/>
    </>
  )
}

export default page
