import React from 'react'
import Image from 'next/image'
import devices from '../../public/images/devices.png'
import CompaniesCarousel from './CompaniesCarousel'
const Devices = () => {
  return (
    <div className='bg-[#040037] pb-[60px]'>
    <div className="container mx-auto px-4 pt-[60px] pb-[60px]">
    <div className="flex flex-wrap">
      <div className="w-full  md:w-1/2">
        <h2 className='text-[#FFFFFF] text-[35px] font-bold lg:ml-12'>All Devices Are Supported</h2>
        <p className='text-[#FFFFFF] mt-4 mb-5 lg:ml-12'>
          We ensure compatibility with a wide range of devices so you can enjoy premium entertainment on your preferred screen. Our service supports:
        </p>
        <ul className="list-disc pl-5 text-[#FFFFFF] lg:ml-12">
          <li><span className="text-[#FFFFFF] font-bold">Smart TVs:</span > Samsung, LG, Sony, Panasonic and more.</li>
          <li><span className="text-[#FFFFFF] font-bold">Streaming Devices:</span> Amazon Firestick, Roku, Apple TV and Chromecast.</li>
          <li><span className="text-[#FFFFFF] font-bold">Mobile Devices:</span> Android and iOS smartphones, iPhones, iPads and tablets.</li>
          <li><span className="text-[#FFFFFF] font-bold">Computers:</span> Windows PCs, MacBooks, laptops, iMacs, and Linux-based systems.</li>
          <li><span className="text-[#FFFFFF] font-bold">IPTV Boxes and Media Players:</span> MAG, Enigma2, Nvidia Shield, Formuler Boxes, and Android TV boxes.</li>
          <li><span className="text-[#FFFFFF] font-bold">Gaming Consoles:</span> Xbox Series X/S, Xbox One, PlayStation 4 and PlayStation 5.</li>
          <li><span className="text-[#FFFFFF] font-bold">Other Devices:</span> Android TV Boxes, Zgemma Boxes, and Kodi-enabled devices.</li>
        </ul>
      </div>
      <div className="w-full flex flex-col items-center justify-center md:w-1/2">
      <div className='bg-[#FFFFFF] mt-6 lg:mt-0 flex items-center justify-center lg:w-[450px] lg:h-[450px] rounded-[10px]'>
      <Image src={devices} style={{width:'100%' ,objectFit:'cover'}} alt='img'/>
      </div>
      </div>
    </div>
  </div>
  <CompaniesCarousel/>
  </div>
  )
}

export default Devices
