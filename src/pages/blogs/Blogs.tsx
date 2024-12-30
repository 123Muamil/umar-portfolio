"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import reseller from '../../../public/images/reseller2.png';
import bloger from '../../../public/images/bloger.png';
import { FaLongArrowAltRight } from 'react-icons/fa';
const Blogs = () => {
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
          IPTV UK Services
                          </h1>

                          <h1 className='text-[#FFFFFF] text-[45px] mt-4 font-bold'>Say Goodbye to Cable: Why IPTV UK Services is Your Best Choice!
                          </h1>
            
            {/* Blogs Section */}
            <div className='mt-4'>
            <div className='flex gap-4'>
            <Image src={bloger} alt='img' width={60} height={60} style={{objectFit:'cover',borderRadius:'60px'}}/>
            <div className='mt-[8px]'>
                <p className='text-[#FFFFFF]'>Written By
                msmblogger99@gmail.com</p>
                <p className='text-[#FFFFFF]'>Posted on
                June 10, 2022</p>
            </div>
            </div>
               <p className='text-[#FFFFFF] mt-4'>Experience IPTV UK Services: 28,000+ channels, 150,000+ movies and shows, and live sports in 4K!</p>
               <button className='flex gap-3 text-[#FFFFFF] mt-4'>Read More <FaLongArrowAltRight className='mt-1' /></button>
            </div>
           
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Blogs;
