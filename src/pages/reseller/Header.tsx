"use client"
import { usePathname } from 'next/navigation';
import React from 'react';

const Header: React.FC = () => {
  const pathname=usePathname()
  return (
    <header className="bg-[#221E5B] text-[#ffffff] pt-[100px] pb-[100px] p-6 text-center">
      <h1 className="text-[#FFFFFF] text-[45px] font-bold">
      Reseller – IPTV UK <br/> Services
    </h1>

      <p className="mt-4 text-base md:text-lg">
      Take Control, Start Selling, and Maximize Your Earnings with Our <br/> IPTV Reseller Panel!
      </p>
    </header>
  );
};

export default Header;
