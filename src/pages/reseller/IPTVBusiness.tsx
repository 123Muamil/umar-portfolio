"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import reseller from '../../../public/images/reseller3.png';
import { MdArrowRight } from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";

const IPTVBusiness = () => {
  const [openIndexes1, setOpenIndexes1] = useState<number[]>([]);
  const MoviesContent: string[] = [
    "💰 Unlimited Earning Potential",
    "🕒 Be Your Own Boss",
    "📺 Premium Content",
    "🔥 Growing Market",
  ];
  const partAContent:string[]=[
   "🚀 Optional Add-Ons",
   "💼 Payment Method"
  ]
  const partBContent:string[]=[
    "📺 Terms & Conditions",
    "📝 Customer Signature"
  ]
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
    <div className="bg-[#040037]">
      <div className="container mx-auto px-4 pt-[60px] pb-[100px]">
        <div className="grid lg:px-10 grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="col-span-1 flex flex-col justify-center items-start text-start">
          <h1 className='text-[#E22D51] text-[20px] font-bold'>
          Looking to start a profitable IPTV business?
                          </h1>
                          <h1 className='text-[#FFFFFF] text-[35px] mt-4 font-bold'>Why Become an IPTV Reseller?
                          </h1>
           
            <div className="p-4">
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
                <h1 className='text-[#FFFFFF] text-[35px] mt-4 font-bold'>Ready to Start Your IPTV Business?
                </h1>
                <p className='text-[#FFFFFF] mt-4 mb-6'>
                Don’t miss this opportunity to launch and grow your own IPTV business. Join us today and get access to the best reseller tools, premium content, and unmatched support.
                </p>
                <div className="p-4 ">
                  <ul className="list-disc list-inside text-white space-y-2">
                  <li className="text-[#FFFFFF] text-[18px]"><span className='font-bold'>👉 Sign Up Now to Become an IPTV Reseller!</span></li>
  <li className="text-[#FFFFFF] text-[18px]"><span className='font-bold'>📞 <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>Contact Us</Link> for More Details</span></li>
  <li className="text-[#FFFFFF] text-[18px] font-bold"> 🔗<Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>Get Started Here</Link></li>
                  </ul>
                </div>
           
          </div>
          <div className="col-span-1 flex flex-col items-start justify-center text-start">
          <div className='bg-[#FFFFFF] mt-6 lg:mt-0 flex items-center justify-center  lg:h-[450px] rounded-[10px]' style={{boxShadow: '0 0 10px red'}}>
      <Image src={reseller} style={{width:'100%' ,height:'auto',objectFit:'cover'}} alt='img'/>
      </div>
      <h1 className='text-[#E22D51] text-[20px] font-bold text-start mt-6 mb-4'>
      Looking to start a profitable IPTV business?
                          </h1>
                          <div className="container mx-auto p-4">

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                          <ul className="space-y-2">
                    {partAContent.map((text, index) => (
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
                  <ul className="space-y-2">
                    {partBContent.map((text, index) => (
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

export default IPTVBusiness;
