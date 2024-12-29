"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import reseller from '../../../public/images/reseller2.png';
import { MdArrowRight } from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";

const WelcomeIptv = () => {
  const [openIndexes1, setOpenIndexes1] = useState<number[]>([]);
  const MoviesContent: string[] = [
    "Video On Demand (VOD)",
    "Money-Back Guarantee",
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
    <div className="bg-[#08043C]">
      <div className="container mx-auto px-4 pt-[60px] pb-[100px]">
        <div className="grid lg:px-10 grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="col-span-1 flex flex-col items-center justify-center">
          <div className='bg-[#FFFFFF] mt-6 lg:mt-0 flex items-center justify-center lg:w-[550px] lg:h-[450px] rounded-[10px]' style={{boxShadow: '0 0 10px red'}}>
      <Image src={reseller} style={{width:'100%' ,height:'auto',objectFit:'cover'}} alt='img'/>
      </div>
            
          </div>
          <div className="col-span-1 flex flex-col lg:px-[80px] justify-center items-start text-start">
          <h1 className='text-[#E22D51] text-[20px] font-bold'>
          Welcome to IPTV UK Services
                          </h1>

                          <h1 className='text-[#FFFFFF] text-[45px] mt-4 font-bold'>Best IPTV UK Services</h1>
             <p className='text-[#FFFFFF] mb-8'>
             Your ultimate destination for premium entertainment. We specialize in providing top-quality IPTV services, offering a vast array of channels, shows, and movies from around the world. Our goal is to deliver an unparalleled viewing experience with unbeatable value and convenience.
             </p>
             <hr className="w-full h-[1px] bg-[#514D7C] border-0" />
            <div className="flex gap-4 mt-8">
            <div className='bg-[#FFFFFF] mt-6 lg:mt-0 flex items-center justify-center w-[50%] rounded-[10px]' style={{boxShadow: '0 0 10px red'}}>
      <Image src={reseller} style={{width:'100%' ,height:'auto',objectFit:'cover'}} alt='img'/>
      </div>
      <div >
      <h1 className='text-[#FFFFFF] text-[20px] mt-4 ml-3 mb-4 font-bold'>IPTV UK Services Offer</h1>
      
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
      </div>
    </div>
  );
};

export default WelcomeIptv;
