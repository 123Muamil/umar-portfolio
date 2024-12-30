"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import iptv from '../../../public/images/iptv1.png';
import { MdArrowRight } from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";

const IPTVServers = () => {
  const [openIndexes1, setOpenIndexes1] = useState<number[]>([]);
  const [openIndexes2, setOpenIndexes2] = useState<number[]>([]);
  const MoviesContent: string[] = [
    "Opplex",
    "Starshare",
    "B1g",
    "5GLive",
    "Dino",
    "Trex",
    "Strong4K"
  ];

  const TVShowsContent: string[] = [
    "Mega OTT",
    "Crystal OTT",
    "4K OTT",
    "Lion OTT",
    "Sky Glasses",
    "Pilxi",
    "Extra OTT"
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
  const TVShowsDescriptions: { [key: string]: string } = {
    "Top Series": "Binge-watch critically acclaimed shows from the UK, USA, and across the globe.",
    "Trending Originals": "Explore exclusive original series and binge-worthy content.",
    "Reality & Lifestyle": "Get your fill of cooking competitions, travel guides, and lifestyle inspiration.",
    "Documentaries": "Dive into fascinating documentaries on nature, history, science, and true crime.",
    "Kids’ Shows": "Keep the little ones entertained with educational and fun programming tailored for kids."
  };
  const WattsappOpen = () => {
    window.open('https://wa.me/+447826176784', '_blank');
  };
  return (
    <div className='bg-[#040037]'>
      <div className="container mx-auto px-4 pt-[60px] pb-[100px]">
        <div className="grid lg:px-[100px] grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="col-span-1 flex flex-col justify-center items-start text-start">
          <h1 className='text-[#E22D51] text-[25px] font-bold'>Premium IPTV Servers – Reliable, Fast, and High-Quality Streaming</h1>
          <h1 className='text-[#FFFFFF] text-[45px] mt-4 font-bold'>ultimate destination for IPTV Servers!</h1>
            <p className="text-[#FFFFFF] text-[18px] mt-4 font-bold">
            We provide a wide range of high-performance IPTV servers that deliver ultra-fast streaming, premium content, and unmatched reliability. Whether you’re a <Link href="/reseller" className="text-[#E22D51] underline decoration-[#E22D51]">reseller</Link> or a direct user, our servers are designed to meet your entertainment and business needs. We offer a variety of top-tier IPTV servers to ensure you experience the best in live TV, sports, movies, and VOD. Explore our trusted servers below:
            </p>
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Column */}
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

                {/* Second Column */}
                <div className="p-4 ">
                  <ul className="space-y-2">
                    {TVShowsContent.map((text, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex items-center">
                          {openIndexes2.includes(index) ? (
                            <RiArrowDownSFill
                              size={30}
                              color="#FFFFFF"
                              className="cursor-pointer"
                              
                              onClick={() => toggleText(index, setOpenIndexes2, openIndexes2)}
                            />
                          ) : (
                            <MdArrowRight
                              size={30}
                              style={{marginTop:'-5px'}}
                              color="#FFFFFF"
                              className="cursor-pointer"
                              onClick={() => toggleText(index, setOpenIndexes2, openIndexes2)}
                            />
                          )}
                        </div>
                        <div className="flex flex-col ml-2">
                          <span className="text-[#FFFFFF] font-bold">{text}</span>
                          {openIndexes2.includes(index) && (
                            <p className="mt-1 text-sm text-[#FFFFFF]">{TVShowsDescriptions[text]}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center">
         
    
   
    <Image src={iptv} style={{ width: '100%', height: '450px',  borderRadius: '10px', boxShadow: '0 0 10px red' }} alt="header_img" />

            <a
              
              className="bg-[#E22D51] mt-6 text-white w-full h-[60px] flex items-center justify-center cursor-pointer rounded-[30px] hover:bg-[#67CDF0]"
          onClick={WattsappOpen}
            >
             
             Explore. Stream. Succeed – The Best IPTV Servers Are Here! 🚀
 

            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPTVServers;
