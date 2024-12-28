"use client"
import React from 'react'
import Image from 'next/image'
import devices from '../../../public/images/bestService.png'
import familyPlan from '../../../public/images/familyPlan1.png'
import Link from 'next/link'
import { IoCheckbox } from 'react-icons/io5'
import { usePathname } from 'next/navigation'
const BestServices = () => {
  const pathname=usePathname()
  return (
    <div className='bg-[#040037]'>
    <div className="container mx-auto px-4 pt-[60px] pb-[60px]">
    <div className="flex flex-wrap">
      <div className="w-full lg:pl-[150px]   md:w-1/2">
                        <h1 className='text-[#E22D51] text-[20px] font-bold'>
                          {pathname === '/single-plan' ? (
    <>
      What’s Included in our single plans?
    </>
  ) : (
    <>What’s Included in our Friends and family plans?</>
  )}
                          </h1>
                        <h1 className='text-[#FFFFFF] text-[30px] mt-4 font-bold'>We Deliver the Best Services</h1>
                        <p className='text-[#FFFFFF] mt-4 mb-4'>
                        {pathname === '/single-plan' ? (
    <>
     It’s the ideal choice for those who prefer personal entertainment with full access to our extensive library of channels, movies, and shows.
    </>
  ) : (
    <>Designed to provide the best value, this plan allows multiple users to enjoy our services under one subscription.
    </>
  )}
                        </p>
                        <div className="flex flex-col space-y-3">
      
      {pathname === '/single-plan' ? (
    <>
   <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>28,000+ Live TV Channels
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>150,000+ Movies & TV Shows
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>4K, FHD, and HD Quality
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>Built-in VPN Protection
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>Stay informed with a 4-day Catch-Up feature and a user-friendly TV guide (EPG).</span>
      </div>
      
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>24/7 <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>Customer Support</Link>
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>No Sharing Needed
        </span>
      </div>
    </>
  ) : (
    <>
   <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>Multiple Device Access
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>All Premium Features
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>High-Quality Streaming
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>Global Access
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>24/7 <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>Customer Support</Link>
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={20} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>Flexible Streaming
        </span>
      </div>
    </>
  )}
  
    </div>
                        
            
      </div>
      <div className="w-full flex flex-col items-center justify-center md:w-1/2">
      <div className='bg-[#FFFFFF] mt-6 lg:mt-0 flex items-center justify-center lg:w-[450px] lg:h-[450px] rounded-[10px]'>
      {
        pathname==='/single-plan'?<Image src={devices} style={{width:'100%' ,height:'auto',objectFit:'cover'}} alt='img'/>:<Image src={familyPlan} style={{width:'100%' ,height:'auto',objectFit:'cover'}} alt='img'/>
      }
      </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default BestServices
