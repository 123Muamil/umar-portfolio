"use client";
import Link from 'next/link';
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const Community = () => {
    const WattsappOpen = () => {
        window.open('https://wa.me/+447826176784', '_blank');
    };
  return (
    <div className='bg-[#221E5B] pt-[60px] pb-[60px] lg:px-[150px]'>
      
<div className="container  mx-auto px-4 bg-[#040037] text-white rounded-[10px] " style={{boxShadow: '0 0 10px red'}}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-12 pb-12">
        <div className="p-4 lg:px-[100px]">
          <h1 className='text-[#E22D51] text-[25px] font-bold'>Join IPTV UK Community</h1>
          <h1 className='text-[#FFFFFF] text-[40px] mt-4 font-bold'>Become a Member Today!</h1>
          <p className="mt-4">
            Unlock unlimited entertainment with HD & 4K streaming, <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>thousands of
            channels, affordable plans</Link>, and 24/7 <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>support</Link>. Stream anywhere,
            anytime—become a member now! 🚀
          </p>
          <div className="flex items-center gap-6 mt-6">
            {/* Left Side: WhatsApp Icon */}
            <div className='bg-[#E22D51] w-[80px] h-[80px] rounded-[10px] flex items-center justify-center'>
            <FaWhatsapp size={50} className="text-[#FFFFFF] text-4xl" />
            </div>
            
            {/* Right Side: WhatsApp Info */}
            <div className="text-justify">
              <p className='text-[#FFFFFF] text-[18px] lg:text-[25px] '>WhatsApp for a quote today!</p>
              <p className='text-[#FFFFFF] mt-2 text-[18px] lg:text-[25px]  '>+447826176784</p>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="p-4 lg:px-12">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-1">
                Name <span className='text-[#E22D51] text-[20px] font-bold'>*</span>
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-semibold mb-1">
                WhatsApp Number <span className='text-[#E22D51] text-[20px] font-bold'>*</span>
              </label>
              <input
                type="text"
                id="whatsapp"
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your WhatsApp number"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-semibold mb-1">
                Location
              </label>
              <input
                type="text"
                id="location"
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your location"
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold mb-1">
              Message <span className='text-[#E22D51] text-[20px] font-bold'>*</span>
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Enter your message"
            ></textarea>
          </div>

          {/* Button */}
          <div className="text-center">
            <button className="bg-[#E22D51] text-white text-[20px] font-bold h-[50px] w-full mt-3 rounded-[10px] cursor-pointer hover:bg-[#67CDF0]" onClick={WattsappOpen}>
              Become A Member
            </button>
          </div>
        </div>
      
      </div>
    </div>

    </div>
  )
}

export default Community
