"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import service1 from '../../public/images/service1.png'
import service2 from '../../public/images/service2.png'
import service3 from '../../public/images/service3.png'
import { IoCheckbox } from "react-icons/io5";
const OurServices = () => {
    const WattsappOpen = () => {
        window.open('https://wa.me/+447826176784', '_blank');
    };
  return (
    <div className='bg-[#221E5B]'>
            <div className="container mx-auto px-4 pt-[80px] pb-[60px]">
                <div className="grid px-10 grid-cols-1 sm:grid-cols-2 gap-4">
                
                    <div className="col-span-1 flex flex-col justify-center items-start text-start ">
                        <h1 className='text-[#E22D51] text-[25px] font-bold'><Link className='hover:text-[#67CDF0]' href='/'>IPTV</Link> UK Versatile services</h1>
                        <h1 className='text-[#FFFFFF] text-[45px] mt-4 font-bold'><Link className='hover:text-[#67CDF0]' href='/'>IPTV</Link> UK Services, your premier destination for top-quality IPTV solutions</h1>
                        <p className='text-[#FFFFFF] text-[18px] mt-4 mb-4 font-bold'>We focus on reliability, affordability, and customer satisfaction, making us a preferred choice for <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>IPTV</Link> services in the UK. We provide an unmatched streaming experience with a wide range of features designed to meet all your entertainment needs. Here’s what sets us apart:</p>
                        <div className="flex flex-col space-y-3">
      <div className="flex items-center space-x-3">
        <IoCheckbox size={30} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>Access to all <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>Premium channels</Link> from the UK, USA, and around the world, including Europe, Asia, Africa, and America.</span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={30} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>Comprehensive sports coverage with all <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>sports channels</Link> and Pay-per-view (PPV) events.</span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={30} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>A massive library of 28,000+ live <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>TV channels</Link> and 150,000+ <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>movies and shows</Link>, updated weekly with the latest releases.</span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={30} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>Enjoy 4K, FHD, and HD quality without buffering or freezing for seamless viewing.</span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={30} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>Stay informed with a 4-day Catch-Up feature and a user-friendly TV guide (EPG).</span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={30} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>Built-in VPN protection for a safe and secure streaming experience.</span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={30} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>Optional access to adult channels tailored to your preferences.</span>
      </div>
      <div className="flex items-center space-x-3">
        <IoCheckbox size={30} color='E22D51' className="text-xl" />
        <span className='text-[#FFFFFF]'>Our IPTV UK services offer 24/7 <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>customer support</Link>. Enjoy reliable, affordable, and top-quality entertainment anytime, anywhere!</span>
      </div>
    </div>
                        <div className='flex gap-5 mt-4'>
                            <button className="bg-[#E22D51] text-white px-10 py-3 rounded-[30px] cursor-pointer hover:bg-[#67CDF0]" onClick={WattsappOpen}>
                            Join Today
                            </button>
                            <h1 className="text-white text-[20px] mt-2" onClick={WattsappOpen}>
                            or WhatsApp +447826176784
                            </h1>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                       <Image className='mt-4' src={service1} style={{width:'100%',height:'350px',borderRadius:'10px',boxShadow: '0 0 10px red',}} alt='header_img'/>
                       <Image className='mt-4' src={service2} style={{width:'100%',height:'350px',borderRadius:'10px',boxShadow: '0 0 10px red',}} alt='header_img'/>
                       <Image className='mt-4' src={service3} style={{width:'100%',height:'350px',borderRadius:'10px',boxShadow: '0 0 10px red',}} alt='header_img'/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default OurServices
