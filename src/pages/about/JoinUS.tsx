"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { MdArrowRight } from 'react-icons/md';
import { RiArrowDownSFill } from 'react-icons/ri';
import { MdOutlineEdgesensorLow } from "react-icons/md";

const JoinUS = () => {
    const [openIndexes1, setOpenIndexes1] = useState<number[]>([]);
      const MoviesContent: string[] = [
        "Massive Library of Entertainment",
        "Premium Streaming Quality",
        "Advanced Features",
        "Tailored Options",
        "Global Access",
        "Affordable & Flexible Plans",
        "24/7 Customer Support",
        "Secure and Reliable",
        "Regular Updates"
      ];
    
      const toggleText = (
        index: number,
        setOpenIndexes: React.Dispatch<React.SetStateAction<number[]>>,
        openIndexes: number[]
      ): void => {
        if (openIndexes.includes(index)) {
          setOpenIndexes(openIndexes.filter((i) => i !== index));
        } else {
          setOpenIndexes([...openIndexes, index]);
        }
      };
      
      const movieDescriptions: { [key: string]: string } = {
        "Latest Blockbusters": "Stay ahead of the curve with the newest releases in action, thriller, drama, comedy, and sci-fi.",
        "Classic Favorites": "Relive the golden era of cinema with iconic films that never get old.",
        "Family Films": "Enjoy heartwarming tales and animated adventures perfect for all ages.",
        "Global Cinema": "Immerse yourself in award-winning films from Hollywood, Bollywood, Nollywood, and beyond.",
        "Genre Favorites": "    1. Action-packed thrillers 2. Romantic comedies 3. Spine-chilling horror 4. Inspiring biographies"
      };
  return (
    <div className='bg-[#221E5B] pb-[60px] pt-[60px]'>
      <div className="container mx-auto px-4">
  <div className="flex flex-wrap lg:px-[150px]">
    <div className="w-full sm:w-1/2 md:w-1/2">
    <h1 className='text-[#E22D51] text-[20px] font-bold'>
    Start Streaming Now With IPTV UK Services
                          </h1>

                          <h1 className='text-[#FFFFFF] text-[35px] mt-4 mb-4 font-bold'>IPTV setup made simple for you!</h1>
             <p className='text-[#FFFFFF] mb-8'>
             We deliver the best in entertainment straight to your screen. <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>Join us today</Link> and elevate your viewing experience with IPTV UK Services!
             </p>
             <p className='text-[#FFFFFF] mb-8'>
             Getting started with IPTV UK Services is as easy as 1-2-3! We’ve designed a simple, hassle-free setup process to ensure you can start enjoying premium entertainment in no time.
             </p>
    </div>
    <div className="w-full flex items-center justify-center sm:w-1/2 md:w-1/2">
       <ul className="space-y-2">
                          {MoviesContent.map((text, index) => (
                            <li key={index} className="flex items-start">
                              <div className="flex items-center">
                                {openIndexes1.includes(index) ? (
                                  <RiArrowDownSFill
                                    size={30}
                                    color="#FFFFFF"
                                    className="cursor-pointer"
                                    
                                    onClick={() => toggleText(index, setOpenIndexes1, openIndexes1)}
                                  />
                                ) : (
                                  <MdArrowRight
                                    size={30}
                                    style={{marginTop:'-5px'}}
                                    color="#FFFFFF"
                                    className="cursor-pointer"
                                    onClick={() => toggleText(index, setOpenIndexes1, openIndexes1)}
                                  />
                                )}
                              </div>
                              <div className="flex flex-col ml-2">
                                <span className="text-[#FFFFFF] font-bold">{text}</span>
                                {openIndexes1.includes(index) && (
                                  <p className="mt-1 text-sm text-[#FFFFFF]">{movieDescriptions[text]}</p>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
    </div>
  </div>
</div>
<div className="container mx-auto flex flex-col items-center justify-center px-4 mt-12">
  <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:px-[150px]">
  <div className="col-span-1 bg-[#040037] p-4 h-[350px] w-[280px] rounded-[10px] flex flex-col items-center justify-center text-center" style={{boxShadow: '0 0 10px red'}}>
  <div className="bg-[#E22D51] text-[#FFFFFF] rounded-full p-4 mb-2">
    <MdOutlineEdgesensorLow size={30}/>
  </div>
  <h2 className='text-[#FFFFFF] text-[30px] font-bold mt-4'>Choose Your Plan</h2>
  <p className="text-[#FFFFFF] mt-4">Select a subscription plan that fits your needs and budget.
</p>
</div>

<div className="col-span-1 bg-[#040037] p-4 h-[350px] w-[280px] rounded-[10px] flex flex-col items-center justify-center text-center" style={{boxShadow: '0 0 10px red'}}>
  <div className="bg-[#E22D51] text-[#FFFFFF] rounded-full p-4 mb-2">
    <MdOutlineEdgesensorLow size={30}/>
  </div>
  <h2 className='text-[#FFFFFF] text-[30px] font-bold mt-4'>Make Your Payment</h2>
  <p className="text-[#FFFFFF] mt-4">SMake your payment securely to receive instant account details.
</p>
</div>
<div className="col-span-1 bg-[#040037] p-4 h-[350px] w-[280px] rounded-[10px] flex flex-col items-center justify-center text-center" style={{boxShadow: '0 0 10px red'}}>
  <div className="bg-[#E22D51] text-[#FFFFFF] rounded-full p-4 mb-2">
    <MdOutlineEdgesensorLow size={30}/>
  </div>
  <h2 className='text-[#FFFFFF] text-[30px] font-bold mt-4'>Set Up Your Device</h2>
  <p className="text-[#FFFFFF] mt-4">Use our guide to configure IPTV on your preferred device.
</p>
</div>
<div className="col-span-1 bg-[#040037] p-4 h-[350px] w-[280px] rounded-[10px] flex flex-col items-center justify-center text-center" style={{boxShadow: '0 0 10px red'}}>
  <div className="bg-[#E22D51] text-[#FFFFFF] rounded-full p-4 mb-2">
    <MdOutlineEdgesensorLow size={30}/>
  </div>
  <h2 className='text-[#FFFFFF] text-[35px] font-bold mt-4'>Start Streaming</h2>
  <p className="text-[#FFFFFF] mt-4">Enjoy thousands of channels and shows instantly.
</p>
</div>
  </div>
</div>

    </div>
  )
}

export default JoinUS
