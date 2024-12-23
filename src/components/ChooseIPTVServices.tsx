"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import choose1 from '../../public/images/choose1.png'
import choose2 from '../../public/images/choose2.png'
import choose3 from '../../public/images/choose3.png'
import { MdArrowRight } from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";
const ChooseIPTVServices = () => {
    const [openIndexes1, setOpenIndexes1] = useState<number[]>([]);
    const MoviesContent: string[] = [
        "Premium Streaming Quality",
        "Extensive Content Library",
        "Affordable Plans",
        "Seamless Performance",
        "Device Compatibility",
        "Global Access",
        "Flexible Subscriptions",
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
        "Premium Streaming Quality": "Crystal-clear HD and 4K resolution for an immersive viewing experience.",
        "Extensive Content Library": "Thousands of live TV channels, movies, sports, and shows from around the world.",
        "Affordable Plans": "Budget-friendly options with unbeatable value for money.",
        "Seamless Performance": "Fast, uninterrupted streaming with minimal buffering.",
        "Device Compatibility": "Works perfectly on smart TVs, laptops, smartphones, and more.",
        "Global Access":"Watch your favorite content anywhere, anytime.",
        "Flexible Subscriptions":"No long-term contracts – you’re in control.",
        "24/7 Customer Support":"Always available to assist with setup, troubleshooting, or questions.",
        "Secure and Reliable":"Safe, trusted service with 99.9% uptime.",
        "Regular Updates":"Access the latest channels and content as we continuously expand our offerings."
      };
    
  return (
    <div className='bg-[#221E5B]'>
            <div className="container mx-auto px-4 pt-[80px] pb-[60px]">
                <div className="grid px-10 grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="col-span-1 flex flex-col items-center justify-center">
                       <Image src={choose1} style={{width:'100%',height:'450px',borderRadius:'10px',boxShadow: '0 0 10px red',}} alt='header_img'/>
                       <Image src={choose2} className='mt-12' style={{width:'100%',height:'450px',borderRadius:'10px',boxShadow: '0 0 10px red',}} alt='header_img'/>
                    </div>
                    <div className="col-span-1 flex flex-col justify-center items-start text-start ">
                        <h1 className='text-[#E22D51] text-[25px] font-bold'>Why Choose IPTV UK Services</h1>
                        <h1 className='text-[#FFFFFF] text-[45px] mt-4 font-bold'>Entertainment made simple, reliable, and affordable</h1>
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
                                                      color="#FFFFFF"
                                                      className="cursor-pointer"
                                                      onClick={() => toggleText(index, setOpenIndexes1, openIndexes1)}
                                                    />
                                                  )}
                                                </div>
                                                <div className="flex flex-col ml-2">
                                                  <span className="text-[#FFFFFF] text-[25px] font-bold">{text}</span>
                                                  {openIndexes1.includes(index) && (
                                                    <p className="mt-1 text-sm text-[#FFFFFF]">{movieDescriptions[text]}</p>
                                                  )}
                                                </div>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                        <Image src={choose3} className='mt-12' style={{width:'100%',height:'450px',objectFit:'cover',borderRadius:'10px',boxShadow: '0 0 10px red',}} alt='header_img'/>
                    </div>
                   
                </div>
            </div>
            
        </div>
  )
}

export default ChooseIPTVServices
