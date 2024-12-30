"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import iptv from '../../../public/images/iptv2.png';
import { MdArrowRight } from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";

const ChooseUS = () => {
  const [openIndexes1, setOpenIndexes1] = useState<number[]>([]);
  const MoviesContent: string[] = [
    "✅ Wide Range of Servers",
    "✅ Ultra-Fast Streaming",
    "✅ Premium Content",
    "✅ HD & 4K Quality",
    "✅ 99.9% Uptime",
    "✅ Perfect for Resellers"
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
    <div className="bg-[#221E5B]">
      <div className="container mx-auto px-4 pt-[60px] pb-[100px]">
        <div className="grid lg:px-10 grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="col-span-1 flex flex-col items-center justify-center">
          <div className='bg-[#FFFFFF] mt-6 lg:mt-0 flex items-center justify-center lg:w-[550px] lg:h-[450px] rounded-[10px]' style={{boxShadow: '0 0 10px red'}}>
      <Image src={iptv} style={{width:'100%' ,height:'auto',objectFit:'cover'}} alt='img'/>
      </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-start text-start">
          <h1 className='text-[#E22D51] text-[20px] font-bold'>
          Why Choose Our IPTV Servers?
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
                <h1 className='text-[#FFFFFF] text-[45px] mt-4 font-bold'>Our Servers Are Ideal For:</h1>
                <div className="p-4 ">
                  <ul className="list-disc list-inside text-white space-y-2">
                  <li className="text-[#FFFFFF] text-[18px]">IPTV <Link href='/reseller' className='text-[#E22D51] underline decoration-[#E22D51]'>Resellers</Link> looking for reliable infrastructure to grow their business.</li>
  <li className="text-[#FFFFFF] text-[18px]">End-users who want premium live TV, sports, and VOD streaming.</li>
  <li className="text-[#FFFFFF] text-[18px]">Businesses needing scalable and fast IPTV server solutions.</li>
                  </ul>
                </div>
           
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ChooseUS;
