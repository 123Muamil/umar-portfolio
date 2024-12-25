import React from 'react'
import who1 from '../../public/images/who1.png'
import who2 from '../../public/images/who2.png'
import who3 from '../../public/images/who3.png'
import Image from 'next/image'
import Link from 'next/link'
const WhoWeAre = () => {
  return (
    <div className="bg-[#221E5B] pt-[60px] pb-[60px]">
    <div className="container mx-auto p-6">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col space-y-6 ">
          {/* Header */}
          <Link href='/' className='text-[#E22D51] text-[25px] font-bold lg:mx-12 hover:text-[#67CDF0]'>Who We Are</Link>

          {/* Subheading */}
          <h3 className='text-[#FFFFFF] text-[40px] mt-4 font-bold lg:mx-12'>
            Our achievements over the years as an IPTV service Provider
          </h3>

          {/* Description */}
          <p className='text-[#FFFFFF] leading-[2.0] mt-4  lg:mx-12'>
            We are a leading provider of <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>IPTV</Link> services, passionate about
            revolutionizing your entertainment experience. With a commitment to
            quality, innovation, and customer satisfaction, we offer seamless
            streaming solutions tailored to your needs. Our platform delivers
            <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>thousands of channels</Link>, on-demand content, and live sports in HD and
            4K, accessible anytime, anywhere. Backed by a team of experts and
            24/7 <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>support</Link>, we strive to make premium entertainment <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>affordable and reliable</Link>. At our core, we believe in connecting you to a world of
            endless possibilities.
          </p>

          
        </div>
        <div className="w-full mt-6 flex flex-col lg:flex-row lg:w-1/2">
          <Image
            src={who1}
            alt="Main"
            className='w-full lg:w-[48%] h-full lg:h-[520px] mb-8 lg:mb-0'
            style={{objectFit:'cover',borderRadius:'10px',boxShadow: '0 0 10px red'}}
          />
          <div className="flex flex-col lg:flex-col w-full lg:w-[48%]  ml-0 lg:ml-4">
            <Image
              src={who2}
              alt="Top"
              className='mb-8 lg:mb-0'
              style={{width:'100%',height:'250px',borderRadius:'10px',boxShadow: '0 0 10px red'}}
            />
           <Image
              src={who3}
              alt="Top"
              className='lg:mt-4'
              style={{width:'100%',height:'250px',borderRadius:'10px',boxShadow: '0 0 10px red'}}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WhoWeAre
