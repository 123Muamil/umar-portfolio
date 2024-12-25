import React from 'react'
import { FaQuoteLeft } from "react-icons/fa6";
import profile1 from '../../public/images/profile1.png'
import Image from 'next/image';
const Testimonials = () => {
  return (
    <div className='bg-[#040037] pt-[60px] pb-[60px]'>
      <div className="container mx-auto">
  <div className="flex flex-wrap">
  <div className="w-full md:w-1/3 p-2">
      {/* Card Container */}
      <div className="w-72 h-72 relative bg-[#221E5B] shadow-lg rounded-lg p-4 flex flex-col justify-between items-center">
        {/* Circle with Icon */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#E22D51] w-16 h-16 rounded-full flex justify-center items-center">
          <FaQuoteLeft className="text-white text-2xl" />
        </div>

        {/* Quote Text */}
        <p className='text-[#FFFFFF] mt-12 px-4'>
          “The Friends and Family Plan is perfect! Everyone gets to enjoy their favorite shows, and it’s so affordable. Thank you!”
        </p>

        {/* Profile Section */}
        <div className="flex items-center w-full mt-4">
          {/* Profile Image */}
          <Image src={profile1} alt='profile' className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0"/>

          {/* Name and Location */}
          <div className="ml-4 flex flex-col">
            <span className='text-[#FFFFFF] text-[25px] font-bold'>Sarah Thompson</span>
            <span className="text-sm text-gray-500">Manchester</span>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 p-2">
      {/* Card Container */}
      <div className="w-72 h-72 relative bg-[#221E5B] shadow-lg rounded-lg p-4 flex flex-col justify-between items-center">
        {/* Circle with Icon */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#E22D51] w-16 h-16 rounded-full flex justify-center items-center">
          <FaQuoteLeft className="text-white text-2xl" />
        </div>

        {/* Quote Text */}
        <p className='text-[#FFFFFF] mt-12 px-4'>
          “The Friends and Family Plan is perfect! Everyone gets to enjoy their favorite shows, and it’s so affordable. Thank you!”
        </p>

        {/* Profile Section */}
        <div className="flex items-center w-full mt-4">
          {/* Profile Image */}
          <Image src={profile1} alt='profile' className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0"/>

          {/* Name and Location */}
          <div className="ml-4 flex flex-col">
            <span className='text-[#FFFFFF] text-[25px] font-bold'>Sarah Thompson</span>
            <span className="text-sm text-gray-500">Manchester</span>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 p-2">
      {/* Content for the third column */}
    </div>
  </div>
</div>

    </div>
  )
}

export default Testimonials
