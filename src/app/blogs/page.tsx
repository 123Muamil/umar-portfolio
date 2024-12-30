import Footer from '@/components/Footer'
import Rights from '@/components/Rights'
import Blogs from '@/pages/blogs/Blogs'
import Header from '@/pages/blogs/Header'
import React from 'react'

const page = () => {
  return (
    <>
      <Header/>
      <Blogs/>
      <Footer/>
      <Rights/>
    </>
  )
}

export default page
