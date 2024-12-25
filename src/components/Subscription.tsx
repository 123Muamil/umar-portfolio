"use client"
import React from 'react'
import Image from 'next/image'
import sub from '../../public/images/sub.png'
import sub1 from '../../public/images/sub1.png'
import sub2 from '../../public/images/sub2.png'
import SubscriptionPlans from './SubscriptionPlans'
const Subscription = () => {
    const WattsappOpen = () => {
        window.open('https://wa.me/+447826176784', '_blank');
    };
  return (
    <div className='bg-[#221E5B] '>
    <div className="container mx-auto px-4">
        <h1 className='text-[#FFFFFF] text-[35px] text-center font-bold pt-[60px]'>Get Your Subscription</h1>
  <div className="flex flex-wrap">
    <div className="w-full md:w-1/3 p-2 flex flex-col items-center justify-center mt-12">
     <Image src={sub2} style={{width:'350px',height:'350px',objectFit:'cover',borderRadius:'10px',boxShadow: '0 0 10px red'}} alt='img'/>
      <div className='flex gap-3 mt-6 '>
        <h1 className='text-[#E22D51] text-[40px] text-center font-bold ml-6 '>1.</h1>
        <div>
            <h1 className='text-[#FFFFFF] text-[20px] font-bold'>Place your order</h1>
            <p className="text-[#FFFFFF] text-[18px] mt-1 ">
Place your order today and experience premium IPTV streaming like never before!
</p>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 p-2 flex flex-col items-center justify-center mt-12">
     <Image src={sub1} style={{width:'350px',height:'350px',objectFit:'cover',borderRadius:'10px',boxShadow: '0 0 10px red'}} alt='img'/>
      <div className='flex gap-3 mt-6 '>
        <h1 className='text-[#E22D51] text-[40px] text-center font-bold ml-6'>2.</h1>
        <div>
            <h1 className='text-[#FFFFFF] text-[20px] font-bold'>Get your account</h1>
            <p className="text-[#FFFFFF] text-[18px] mt-1 ">
            Get your account now and unlock a world of premium IPTV entertainment!
</p>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 p-2 flex flex-col items-center justify-center mt-12">
     <Image src={sub} style={{width:'350px',height:'350px',objectFit:'cover',borderRadius:'10px',boxShadow: '0 0 10px red'}} alt='img'/>
      <div className='flex gap-3 mt-6 '>
        <h1 className='text-[#E22D51] text-[40px] text-center font-bold ml-6 '>3.</h1>
        <div>
            <h1 className='text-[#FFFFFF] text-[20px] font-bold'>Enjoy endless entertainment</h1>
            <p className="text-[#FFFFFF] text-[18px] mt-1 ">
            Access thousands of live channels, movies, and shows anytime, anywhere.
</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container mx-auto mt-[60px]  px-4 py-6 bg-[#040037] h-auto lg:h-[200px] rounded-[10px]">
  <div className="flex flex-wrap h-full">
    <div className="w-full md:w-1/3 p-2 flex items-center justify-center">
      <h1 className="text-[#FFFFFF] text-[30px] text-center text-justify font-bold">
        We are committed<br /> to giving our best<br /> services.
      </h1>
    </div>
    <div className="w-full md:w-1/3 p-2 flex items-center justify-center">
      <p className="text-[#FFFFFF] text-[18px] text-center text-justify">
        We are dedicated to delivering the highest quality services, ensuring excellence, reliability, and customer satisfaction every step of the way.
      </p>
    </div>
    <div className="w-full md:w-1/3 p-2 flex items-center justify-center">
      <a
        className="bg-[#E22D51] text-white flex items-center justify-center h-[50px] w-[200px] rounded-[30px] cursor-pointer hover:bg-[#67CDF0]"
        onClick={WattsappOpen}
      >
        Start Streaming
      </a>
    </div>
  </div>
</div>

<SubscriptionPlans/>

</div>
  )
}

export default Subscription
