"use client"
import React, { useState } from 'react'
import { MdArrowRight } from 'react-icons/md';
import { RiArrowDownSFill } from 'react-icons/ri';
import Image from 'next/image';
import about from '../../../public/images/about1.png'
const Experience = () => {
    const [openIndexes1, setOpenIndexes1] = useState<number[]>([]);
      const MoviesContent: string[] = [
        "Live TV Channels",
        "Movies & TV Shows",
        "Sports Coverage",
        "High-Quality Streaming",
        "Catch-Up TV",
        "Electronic Program Guide (EPG)",
        "Built-in VPN Protection",
        "Global Access",
        "Device Compatibility",
        "Secure Payments",
        "24/7 Customer Support",
        "Optional Adult Channels",
        "Affordable Plans"
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
    <div className='bg-[#040037] pb-[60px] pt-[60px]'>
      <div className="container mx-auto px-4">
  <div className="flex flex-wrap lg:px-[100px]">
    <div className="w-full flex flex-col items-center justify-center sm:w-1/2 md:w-1/2">
    <div className='flex w-full lg:ml-[100px] gap-[100px] flex items-start mb-6'>
        <h1 className='text-[#E22D51] text-start text-[55px] font-bold'>14+</h1>
        <h1 className='text-[#FFFFFF] text-start text-[25px] font-bold mt-2'>Years <br/>
        of experience</h1>
    </div>
    <div className='bg-[#FFFFFF] mt-6 lg:mt-0 flex items-center justify-center  lg:h-[450px] rounded-[10px]' style={{boxShadow: '0 0 10px red'}}>
      <Image src={about} style={{width:'100%' ,height:'auto',objectFit:'cover'}} alt='img'/>
      </div>
    </div>
    <div className="w-full mt-6 lg:mt-0 flex flex-col items-center justify-center sm:w-1/2 md:w-1/2">
    <h1 className='text-[#E22D51] text-[20px] font-bold pl-[20px] lg:pl-[110px] '>
    Services We Provide – IPTV UK Services
                          </h1>

                          <h1 className='text-[#FFFFFF] text-[35px]  mt-4 mb-4 font-bold pl-[20px] lg:pl-[190px]'>Unlimited fun with IPTV UK Services</h1>
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



    </div>
  )
}

export default Experience
