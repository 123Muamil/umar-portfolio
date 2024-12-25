import React from 'react'
import { FaQuoteLeft } from "react-icons/fa6";
import profile1 from '../../public/images/profile1.png'
import profile2 from '../../public/images/profile2.png'
import profile3 from '../../public/images/profile3.png'
import profile4 from '../../public/images/profile4.png'
import profile5 from '../../public/images/profile5.png'
import profile6 from '../../public/images/profile6.png'
import profile7 from '../../public/images/profile7.png'
import profile8 from '../../public/images/profile8.png'
import Image from 'next/image';
import Link from 'next/link';
const Testimonials = () => {
  return (
    <div className='bg-[#040037] pt-[60px] pb-[60px]'>
      <div className="container mx-auto ">
      <div className="flex flex-wrap lg:px-[170px]">
  <div className="w-full md:w-1/3 p-2 mb-12 lg:mb-0">
    <div className="w-72 h-72 relative bg-[#221E5B] shadow-lg rounded-lg p-4 flex flex-col justify-between items-center">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#E22D51] w-16 h-16 rounded-full flex justify-center items-center">
        <FaQuoteLeft className="text-white text-2xl" />
      </div>
      <p className='text-[#FFFFFF] mt-12 px-4'>
        “The Friends and Family Plan is perfect! Everyone gets to enjoy their favorite shows, and it’s so affordable. Thank you!”
      </p>
      <div className="flex items-center w-full mt-4">
        <Image src={profile1} alt='profile' className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0"/>
        <div className="ml-4 flex flex-col">
          <span className='text-[#FFFFFF] text-[25px] font-bold'>Sarah Thompson</span>
          <span className="text-sm text-gray-500">Manchester</span>
        </div>
      </div>
    </div>
  </div>

  <div className="w-full md:w-1/3 p-2 mb-12 lg:mb-0">
    <div className="w-72 h-72 relative bg-[#221E5B] shadow-lg rounded-lg p-4 flex flex-col justify-between items-center">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#E22D51] w-16 h-16 rounded-full flex justify-center items-center">
        <FaQuoteLeft className="text-white text-2xl" />
      </div>
      <p className='text-[#FFFFFF] mt-12 px-4'>
        “Seamless streaming with no buffering. I love the variety of channels and the quality. Highly recommend IPTV UK Services!”
      </p>
      <div className="flex items-center w-full mt-4">
        <Image src={profile2} alt='profile' className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0"/>
        <div className="ml-4 flex flex-col">
          <span className='text-[#FFFFFF] text-[25px] font-bold'>James Walker</span>
          <span className="text-sm text-gray-500">Birmingham</span>
        </div>
      </div>
    </div>
  </div>

  <div className="w-full md:w-1/3 p-2 mb-12 lg:mb-0 order-first md:order-last lg:order-last">
    {/* Content for the third column */}
    <h2 className='text-[#E22D51] text-[25px] font-bold'>Testimonials</h2>
    <p className='text-[#FFFFFF] text-[40px] mt-4 font-bold'>What our clients say about us</p>
    <p className='text-[#FFFFFF] mt-4'>
      Our clients consistently praise our <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>IPTV</Link> service for its reliability, exceptional streaming quality, and outstanding customer support.
    </p>
  </div>
</div>

  {/* Second Section */}
  <div className="flex flex-wrap lg:mt-12 lg:px-[170px] ">
  <div className="w-full md:w-1/3 p-2 mb-12 lg:mb-0">
      {/* Card Container */}
      <div className="w-72 h-72 relative bg-[#221E5B] shadow-lg rounded-lg p-4 flex flex-col justify-between items-center">
        {/* Circle with Icon */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#E22D51] w-16 h-16 rounded-full flex justify-center items-center">
          <FaQuoteLeft className="text-white text-2xl" />
        </div>

        {/* Quote Text */}
        <p className='text-[#FFFFFF] mt-12 px-4'>
        “I was impressed by how smooth the streaming is, even during peak hours. It’s reliable and worth every penny.”
        </p>

        {/* Profile Section */}
        <div className="flex items-center w-full mt-4">
          {/* Profile Image */}
          <Image src={profile4} alt='profile' className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0"/>

          {/* Name and Location */}
          <div className="ml-4 flex flex-col">
            <span className='text-[#FFFFFF] text-[25px] font-bold'>Olivia Brown</span>
            <span className="text-sm text-gray-500">Leeds</span>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 p-2 mb-12 lg:mb-0">
      {/* Card Container */}
      <div className="w-72 h-72 relative bg-[#221E5B] shadow-lg rounded-lg p-4 flex flex-col justify-between items-center">
        {/* Circle with Icon */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#E22D51] w-16 h-16 rounded-full flex justify-center items-center">
          <FaQuoteLeft className="text-white text-2xl" />
        </div>

        {/* Quote Text */}
        <p className='text-[#FFFFFF] mt-12 px-4'>
        “Living abroad, I love being able to watch channels from back home. This service keeps me connected with my roots.”
        </p>

        {/* Profile Section */}
        <div className="flex items-center w-full mt-4">
          {/* Profile Image */}
          <Image src={profile3} alt='profile' className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0"/>

          {/* Name and Location */}
          <div className="ml-4 flex flex-col">
            <span className='text-[#FFFFFF] text-[25px] font-bold'>Emily Davis</span>
            <span className="text-sm text-gray-500">London</span>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 p-2 mb-12 lg:mb-0">
      {/* Card Container */}
      <div className="w-72 h-72 relative bg-[#221E5B] shadow-lg rounded-lg p-4 flex flex-col justify-between items-center">
        {/* Circle with Icon */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#E22D51] w-16 h-16 rounded-full flex justify-center items-center">
          <FaQuoteLeft className="text-white text-2xl" />
        </div>

        {/* Quote Text */}
        <p className='text-[#FFFFFF] mt-12 px-4'>
        “With this IPTV service, I never miss my favorite shows or live sports. It’s a game-changer!”
        </p>

        {/* Profile Section */}
        <div className="flex items-center w-full mt-4">
          {/* Profile Image */}
          <Image src={profile5} alt='profile' className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0"/>

          {/* Name and Location */}
          <div className="ml-4 flex flex-col">
            <span className='text-[#FFFFFF] text-[25px] font-bold'>Daniel Evans</span>
            <span className="text-sm text-gray-500">Liverpool</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Third Section */}
  <div className="flex flex-wrap lg:mt-12 lg:px-[170px]">
  <div className="w-full md:w-1/3 p-2 mb-12 lg:mb-0">
      {/* Card Container */}
      <div className="w-72 h-72 relative bg-[#221E5B] shadow-lg rounded-lg p-4 flex flex-col justify-between items-center">
        {/* Circle with Icon */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#E22D51] w-16 h-16 rounded-full flex justify-center items-center">
          <FaQuoteLeft className="text-white text-2xl" />
        </div>

        {/* Quote Text */}
        <p className='text-[#FFFFFF] mt-12 px-4'>
        “This service is perfect for my family. The variety of international channels and the HD quality are fantastic.”
        </p>

        {/* Profile Section */}
        <div className="flex items-center w-full mt-4">
          {/* Profile Image */}
          <Image src={profile6} alt='profile' className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0"/>

          {/* Name and Location */}
          <div className="ml-4 flex flex-col">
            <span className='text-[#FFFFFF] text-[25px] font-bold'>Chloe Wilson</span>
            <span className="text-sm text-gray-500">Bristol</span>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 p-2 mb-12 lg:mb-0">
      {/* Card Container */}
      <div className="w-72 h-72 relative bg-[#221E5B] shadow-lg rounded-lg p-4 flex flex-col justify-between items-center">
        {/* Circle with Icon */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#E22D51] w-16 h-16 rounded-full flex justify-center items-center">
          <FaQuoteLeft className="text-white text-2xl" />
        </div>

        {/* Quote Text */}
        <p className='text-[#FFFFFF] mt-12 px-4'>
        “The quality and affordability of this service are unmatched. I’m thoroughly impressed!”
        </p>

        {/* Profile Section */}
        <div className="flex items-center w-full mt-4">
          {/* Profile Image */}
          <Image src={profile7} alt='profile' className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0"/>

          {/* Name and Location */}
          <div className="ml-4 flex flex-col">
            <span className='text-[#FFFFFF] text-[25px] font-bold'>Liam Robinson</span>
            <span className="text-sm text-gray-500">Sheffield</span>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 p-2 mb-12 lg:mb-0">
      {/* Card Container */}
      <div className="w-72 h-72 relative bg-[#221E5B] shadow-lg rounded-lg p-4 flex flex-col justify-between items-center">
        {/* Circle with Icon */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#E22D51] w-16 h-16 rounded-full flex justify-center items-center">
          <FaQuoteLeft className="text-white text-2xl" />
        </div>

        {/* Quote Text */}
        <p className='text-[#FFFFFF] mt-12 px-4'>
        “Finally, a reliable IPTV service that delivers on its promises. Highly recommend it to everyone!”
        </p>

        {/* Profile Section */}
        <div className="flex items-center w-full mt-4">
          {/* Profile Image */}
          <Image src={profile8} alt='profile' className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0"/>

          {/* Name and Location */}
          <div className="ml-4 flex flex-col">
            <span className='text-[#FFFFFF] text-[25px] font-bold'>Thomas Mitchell</span>
            <span className="text-sm text-gray-500">Edinburgh</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Testimonials
