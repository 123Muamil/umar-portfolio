"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import header_img from '../../public/images/subscribe.png'

const About = () => {
    const WattsappOpen = () => {
        window.open('https://wa.me/+447826176784', '_blank');
    };
  return (
    <div className='bg-[#040037]'>
            <div className="container mx-auto px-4 pt-[80px] pb-[60px]">
                <div className="grid px-10 grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="col-span-1 flex items-center justify-center">
                       <Image src={header_img} style={{width:'100%',height:'450px',objectFit:'cover',borderRadius:'10px',boxShadow: '0 0 10px red',}} alt='header_img'/>
                    </div>
                    <div className="col-span-1 flex flex-col justify-center items-start text-start ">
                        <h1 className='text-[#E22D51] text-[25px] font-bold'>About IPTV UK Services</h1>
                        <h1 className='text-[#FFFFFF] text-[45px] mt-4 font-bold'>Trusted premium IPTV provider in the UK</h1>
                        <div className="flex items-center mt-4">
  {/* <!-- Vertical Line on the left --> */}
  <div className="h-[100px]  border-l-2 border-[#E22D51] mr-4"></div>

  {/* <!-- Text on the right --> */}
  <p className='text-[#FFFFFF] text-[18px]  font-bold'>
    Stream smarter with our <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>IPTV</Link> UK services! Enjoy HD <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>channels, movies, and sports</Link> at unbeatable prices. Your entertainment, your way!
  </p>
</div>

                        <p className='text-[#FFFFFF] text-[18px] mt-4 font-bold'>We specialize in delivering high-quality streaming solutions that bring endless entertainment to your fingertips. We pride ourselves on offering HD and 4K streaming, user-friendly interfaces, and multi-device compatibility, ensuring you can enjoy your favorite content anywhere. Whether you love <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>sports, movies, news, or entertainment</Link>, we have something for everyone.</p>
                        <div className='flex gap-5 mt-4'>
                            <button className="bg-[#E22D51] text-white px-10 py-3 rounded-[30px] cursor-pointer hover:bg-[#67CDF0]" onClick={WattsappOpen}>
                            Subscribe Now
                            </button>
                            <h1 className="text-white text-[20px] mt-2" onClick={WattsappOpen}>
                            or WhatsApp +447826176784
                            </h1>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
  )
}

export default About
