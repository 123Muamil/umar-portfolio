"use client"
import Link from 'next/link'
import React from 'react'
import { IoCheckbox } from 'react-icons/io5'
import Image from 'next/image';
import logo from '../../public/images/logo.png';
const Footer = () => {
    const WattsappOpen = () => {
        window.open('https://wa.me/+447826176784', '_blank');
    };
  return (
    <div className='bg-[#514D7C] pt-[60px] pb-[60px] border-b-[5px] border-white'>
      <div className="container mx-auto ">
  <div className="flex flex-wrap -mx-4">
    <div className="w-full sm:w-1/2 md:w-1/3 px-12 lg:px-4">
    <a href="#" className="text-2xl font-bold text-gray-800 ">
            <Image src={logo} alt="logo" width={200} height={200} />
          </a>
    <div className="flex flex-col space-y-3 mt-12">
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>🎥 28,000+ Live <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>Channels Worldwide</Link></span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>🎬 150,000+ Vods & Movies</span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>📺 16,000+ Series</span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>✅ Netflix, Prime Video, Disney+, & HBO</span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>✅ All Sports Channels </span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>🚀 Best Services in the UK, USA, Canada</span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>💯 20k+ Happy Customers</span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>📲 Free Trial Available</span>
      </div>
    </div>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 px-12 lg:px-4">
    <button className="bg-[#E22D51] text-white h-[50px] w-full mt-[70px] rounded-[5px] cursor-pointer hover:bg-[#67CDF0]" onClick={WattsappOpen}>
     Follow These Steps To Subscribe Now
    </button>
    <div className="flex flex-col space-y-3 mt-12">
      <div className="flex items-center space-x-3">
        <IoCheckbox size={60} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF] leading-[2.0]'><span className='text-[#040037] font-bold'>Sign Up:</span> Choose a <Link href='/' className=' hover:underline hover:decoration-white'>subscription plan</Link> that suits your needs and complete the payment process.</span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={60} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF] leading-[2.0]'> <span className='text-[#040037] font-bold'>Setup:</span> Users receive account credentials and a detailed <Link href='/' className=' hover:underline hover:decoration-white'>step guide</Link> tailored to their device after payment.</span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={60} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF] leading-[2.0]'><span className='text-[#040037] font-bold'>Stream:</span> Once the setup is complete, users can instantly access <Link href='/' className=' hover:underline hover:decoration-white'>live channels</Link>, on-demand content, and more.</span>
      </div>
    </div>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 px-12 lg:px-4">
    <button className="bg-[#E22D51] text-white h-[50px] w-full mt-[70px] rounded-[5px] cursor-pointer hover:bg-[#67CDF0]" onClick={WattsappOpen}>
     Here's Everything You Need
    </button>
    <div className="flex flex-col space-y-3 mt-12">
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <Link href='/' className='text-[#FFFFFF] mt-1 hover:underline hover:decoration-white'>Terms Of Service</Link>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <Link href='/' className='text-[#FFFFFF] mt-1 hover:underline hover:decoration-white'>Privacy Policy</Link>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <Link href='/' className='text-[#FFFFFF] mt-1 hover:underline hover:decoration-white'>Refund and Returns Policy</Link>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <Link href='/' className='text-[#FFFFFF] mt-1 hover:underline hover:decoration-white'>Channel list</Link>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <Link href='/' className='text-[#FFFFFF] mt-1 hover:underline hover:decoration-white'>Contact us</Link>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <Link href='/' className='text-[#FFFFFF] mt-1 hover:underline hover:decoration-white'>Plan Details</Link>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <Link href='/' className='text-[#FFFFFF] mt-1 hover:underline hover:decoration-white'>FAQs Support</Link>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <Link href='/' className='text-[#FFFFFF] mt-1 hover:underline hover:decoration-white'>Disclaimer</Link>
      </div>
    </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Footer
