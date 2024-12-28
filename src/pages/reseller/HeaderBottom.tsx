"use client"
import React from 'react'
import Image from 'next/image'
import reseller from '../../../public/images/reseller1.png'
import Link from 'next/link'
const HeaderBottom = () => {
  return (
    <div className='bg-[#040037]'>
    <div className="container mx-auto px-4 pt-[60px] pb-[60px]">
    <div className="flex flex-wrap">
      <div className="w-full lg:pl-[150px]   md:w-1/2">
                        <h1 className='text-[#E22D51] text-[20px] font-bold'>
                        Looking to start a profitable IPTV business?
                          </h1>
                        <h1 className='text-[#FFFFFF] text-[30px] mt-4 font-bold'>Become an IPTV Reseller                        </h1>
                        <p className='text-[#FFFFFF] mt-4 mb-4'>
                        With our <span className='font-bold'>IPTV Reseller Panel</span>, you can easily manage, sell, and grow your IPTV services while earning high profits. Whether you’re new to the industry or already running a streaming business, our tools and <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>support</Link> make it easier to succeed.
                        </p>
                        <p className='text-[#FFFFFF] mt-4 mb-6'>
                        Our <span className='font-bold'>IPTV Reseller Panel</span> gives you complete control over creating and managing <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>IPTV subscriptions</Link> for your customers. With an easy-to-use dashboard, you can:
                        </p>
                        <div className="flex flex-col space-y-3 mt-6">
                       
        
        <span className='text-[#FFFFFF]'>✅ <span className='font-bold'>Create IPTV Accounts</span> – Instantly generate new subscriptions for clients.
        </span>
        <span className='text-[#FFFFFF]'>✅ <span className='font-bold'>Manage Users</span> – Monitor and update customer accounts with ease.
        </span>
        <span className='text-[#FFFFFF]'>✅ <span className='font-bold'>Set Your Pricing</span> – Sell at your rates and maximize profit margins.
        </span>
        <span className='text-[#FFFFFF]'>✅ <span className='font-bold'>Deliver Quality</span> – Provide access to thousands of premium UK and <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>international channels</Link>, VOD content, and live sports.
        </span>
      
    </div>
                        
            
      </div>
      <div className="w-full flex flex-col items-center justify-center md:w-1/2">
      <div className='bg-[#FFFFFF] mt-6 lg:mt-0 flex items-center justify-center lg:w-[550px] lg:h-[450px] rounded-[10px]' style={{boxShadow: '0 0 10px red'}}>
      <Image src={reseller} style={{width:'100%' ,height:'auto',objectFit:'cover'}} alt='img'/>
      </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default HeaderBottom
