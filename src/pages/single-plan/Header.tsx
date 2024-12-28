"use client"
import { usePathname } from 'next/navigation';
import React from 'react';

const Header: React.FC = () => {
  const pathname=usePathname()
  return (
    <header className="bg-[#221E5B] text-[#ffffff] pt-[100px] pb-[100px] p-6 text-center">
      <h1 className="text-[#FFFFFF] text-[45px] font-bold">
  {pathname === '/single-plan' ? (
    <>
      Single Plan – IPTV <br /> UK Services
    </>
  ) : (
    <>
    Friends and Family <br/> Plan – IPTV UK <br/> Services
    </>
  )}
</h1>

      <p className="mt-4 text-base md:text-lg">
        {pathname === '/single-plan' ? (
    <>
      The Single Plan is perfect for individual users who want to enjoy <br/> premium IPTV services on one device.
    </>
  ) : (
    <>
   Share the joy of premium entertainment with your loved ones <br/> through our <span className='font-bold'>Friends and Family Plan</span>.


    </>
  )}
      </p>
    </header>
  );
};

export default Header;
