"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import header_img from '../../public/images/header_img.png'
const Header = () => {
    const WattsappOpen = () => {
        window.open('https://wa.me/+447826176784', '_blank');
    };

    return (
        <div className='bg-[#221E5B]'>
            <div className="container mx-auto px-4 pt-[60px] pb-[100px]">
                <div className="grid lg:px-10 grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="col-span-1 flex flex-col justify-center items-start text-start ">
                        <h1 className='text-[#E22D51] text-[25px] font-bold'>Welcome to IPTV UK Services</h1>
                        <h1 className='text-[#FFFFFF] text-[45px]  mt-4 font-bold'>Premium <Link href='/'>IPTV</Link><span className="hidden lg:inline"> <br /> </span> UK <Link href='/'>Subscription</Link></h1>
                        <p className='text-[#FFFFFF] text-[18px] mt-4 font-bold'>Discover the ultimate entertainment experience with <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>IPTV</Link> UK <br /> Services in the UK and <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>Worldwide</Link>. Enjoy access to thousands of live <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>TV channels</Link>, on-demand <br /> movies, and shows worldwide, all in stunning HD and 4K quality.</p>
                        <div className="flex flex-col w-full lg:flex-row gap-5 mt-4">
                            <button className="bg-[#E22D51] text-white h-[60px] w-full lg:w-[220px] rounded-[30px] cursor-pointer hover:bg-[#67CDF0]" onClick={WattsappOpen}>
                                Get Subscription Now
                            </button>
                            <button className="bg-[#E22D51] text-white h-[60px] w-full lg:w-[220px] rounded-[30px] cursor-pointer hover:bg-[#67CDF0]" onClick={WattsappOpen}>
                                Get A Free Trial Now
                            </button>
                        </div>
                    </div>
                    <div className="col-span-1 flex items-center justify-center">
                       <Image src={header_img} style={{width:'100%',height:'450px',borderRadius:'10px',boxShadow: '0 0 10px red',}} alt='header_img'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
