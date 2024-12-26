import React from 'react'
import { FaFacebookF,FaInstagram ,FaPinterestP ,FaWhatsapp ,FaYoutube ,FaTelegramPlane,FaLinkedinIn,FaVimeoV ,FaRedditAlien,FaPatreon     } from "react-icons/fa";
import { FaThreads,FaTiktok,FaXTwitter,FaSnapchat ,FaSkype,FaDribbble ,FaBehance     } from "react-icons/fa6";
import Image from 'next/image';
import uk from '../../public/images/uk.png'
const Rights = () => {
  return (
    <div className="bg-[#514D7C] pt-[10px] pb-[60px]">
    <div className="container mx-auto">
      <div className="flex flex-wrap">
        <div className="w-full flex gap-3 px-8 lg:px-0  md:w-1/2">
          <h1 className='text-[#FFFFFF] mt-6'>IPTV UK Subscription </h1> <Image className='mt-6' src={uk} width={40} height={40} style={{width:'40px',height:'40px',objectFit:'cover'}} alt='uk'/> <h1 className='text-[#FFFFFF] mt-6'> | All Rights Reserved © 2024 By IPTV UK Services</h1>
        </div>
        <div className="w-full flex flex-wrap gap-3 px-8 lg:px-0 mt-6 lg:mt-0 md:w-1/2">
        <div className='bg-[#E22D51] w-[50px] h-[50px] rounded-[5px] flex items-center justify-center'>
        <FaThreads className="text-white text-3xl" />
        </div>
        <div className='bg-[#3B5998] w-[50px] h-[50px] rounded-[5px] flex items-center justify-center'>
        <FaFacebookF className="text-white text-3xl" />
        </div>
        <div className='bg-[#517FA4] w-[50px] h-[50px] rounded-[5px] flex items-center justify-center'>
        <FaInstagram  className="text-white text-3xl " />
        </div>
        <div className='bg-[#E62E2D] w-[50px] h-[50px] rounded-[5px] flex items-center justify-center'>
        <FaYoutube className="text-white text-3xl " />
        </div>
        <div className='bg-[#C92728] w-[50px] h-[50px] rounded-[5px] flex items-center justify-center'>
        <FaPinterestP className="text-white text-3xl " />
        </div>
        <div className='bg-[#64CF56] w-[50px] h-[50px] rounded-[5px] flex items-center justify-center'>
        <FaWhatsapp className="text-white text-3xl " />
        </div>
        <div className='bg-[#69C9D0] w-[50px] h-[50px] rounded-[5px] flex items-center justify-center'>
        <FaTiktok className="text-white text-3xl " />
        </div>
        <div className='bg-[#4488CD] w-[50px] h-[50px] rounded-[5px] flex items-center justify-center'>
        <FaTelegramPlane className="text-white text-3xl " />
        </div>
        <div className='bg-[#52A2F3] w-[50px] h-[50px] rounded-[5px] flex items-center justify-center'>
        <FaXTwitter className="text-white text-3xl " />
        </div>
        <div className='bg-[#4875B4] w-[50px] h-[50px] rounded-[5px] flex items-center justify-center'>
        <FaLinkedinIn className="text-white text-3xl " />
        </div>
        <div className='bg-[#FDFC01] w-[50px] h-[50px] rounded-[5px] flex items-center justify-center'>
        <FaSnapchat className="text-white text-3xl " />
        </div>
        <div className='bg-[#3d78D7] w-[50px] h-[50px] rounded-[5px] flex items-center justify-center'>
        <FaSkype className="text-white text-3xl " />
        </div>
        <div className='bg-[#5FBCFE] w-[50px] h-[50px] rounded-[5px] flex items-center justify-center'>
        <FaVimeoV className="text-white text-3xl " />
        </div>
        <div className='bg-[#E84C89] w-[50px] h-[50px] rounded-[5px] flex items-center justify-center'>
        <FaDribbble className="text-white text-3xl " />
        </div>
        <div className='bg-[#E7412C] w-[50px] h-[50px] rounded-[5px] flex items-center justify-center'>
        <FaRedditAlien className="text-white text-3xl " />
        </div>
        <div className='bg-[#3A69FF] w-[50px] h-[50px] rounded-[5px] flex items-center justify-center'>
        <FaBehance className="text-white text-3xl " />
        </div>
        <div className='bg-[#122D49] w-[50px] h-[50px] rounded-[5px] flex items-center justify-center'>
        <FaPatreon className="text-white text-3xl " />
        </div>
        </div>
      </div>
    </div>
  </div>  
  )
}

export default Rights
