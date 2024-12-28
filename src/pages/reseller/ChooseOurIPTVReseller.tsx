"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import reseller from '../../../public/images/reseller2.png';
import { MdArrowRight } from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";

const ChooseOurIPTVReseller = () => {
  const [openIndexes1, setOpenIndexes1] = useState<number[]>([]);
  const MoviesContent: string[] = [
    "🚀 Low Investment, High Returns",
    "💼 User-Friendly Dashboard",
    "📺 Premium Content",
    "🔧 Full Support",
    "💡 Flexible Packages",
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
  const WattsappOpen = () => {
    window.open('https://wa.me/+447826176784', '_blank');
  };
  return (
    <div className="bg-[#221E5B]">
      <div className="container mx-auto px-4 pt-[60px] pb-[100px]">
        <div className="grid lg:px-10 grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="col-span-1 flex flex-col items-center justify-center">
          <div className='bg-[#FFFFFF] mt-6 lg:mt-0 flex items-center justify-center lg:w-[550px] lg:h-[450px] rounded-[10px]' style={{boxShadow: '0 0 10px red'}}>
      <Image src={reseller} style={{width:'100%' ,height:'auto',objectFit:'cover'}} alt='img'/>
      </div>
            <a
              
              className="bg-[#E22D51] mt-6 text-white w-[250px] h-[50px] flex items-center justify-center cursor-pointer rounded-[10px] hover:bg-[#67CDF0]"
          onClick={WattsappOpen}
            >
             Get Your Reseller Plan

            </a>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-start text-start">
          <h1 className='text-[#E22D51] text-[20px] font-bold'>
          Why Choose Our IPTV Reseller Panel?
                          </h1>
                          <h1 className='text-[#FFFFFF] text-[45px] mt-4 font-bold'>Best IPTV UK Services</h1>
           
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
                <h1 className='text-[#FFFFFF] text-[45px] mt-4 font-bold'>What You Get with Our IPTV Reseller Panel</h1>
                <div className="p-4 ">
                  <ul className="list-disc list-inside text-white space-y-2">
                  <li className="text-[#FFFFFF] text-[18px]">A <span className='font-bold'>dedicated IPTV panel</span> to manage accounts effortlessly.</li>
  <li className="text-[#FFFFFF] text-[18px]">Access to <span className='font-bold'>premium UK and</span> <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>international channels</Link>, VOD, and live TV.</li>
  <li className="text-[#FFFFFF] text-[18px]">Tools to monitor, edit, and extend customer subscriptions.</li>
  <li className="text-[#FFFFFF] text-[18px]"><span className='font-bold'>Competitive pricing</span> to maximize your earnings.</li>
                  </ul>
                </div>
           
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ChooseOurIPTVReseller;
