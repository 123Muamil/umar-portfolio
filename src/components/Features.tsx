"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import header_img from '../../public/images/feature.png';
import singlePlan from '../../public/images/singlePlan2.png';
import familyPlan from '../../public/images/familyPlan5.png';
import about from '../../public/images/about2.png';
import { MdArrowRight } from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";
import { usePathname } from 'next/navigation';

const Features = () => {
  const [openIndexes1, setOpenIndexes1] = useState<number[]>([]);
  const [openIndexes2, setOpenIndexes2] = useState<number[]>([]);
  const pathname=usePathname()
  const MoviesContent: string[] = [
    "Latest Blockbusters",
    "Classic Favorites",
    "Family Films",
    "Global Cinema",
    "Genre Favorites",
  ];

  const TVShowsContent: string[] = [
    "Top Series",
    "Trending Originals",
    "Reality & Lifestyle",
    "Documentaries",
    "Kids’ Shows",
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
    <div className={`${
      pathname === '/single-plan'
        ? "bg-[#040037]"
        : pathname === '/about'
        ? "bg-[#221E5B]"
        : "bg-[#040037]"
    }`}
    >
      <div className="container mx-auto px-4 pt-[60px] pb-[100px]">
        <div className="grid lg:px-10 grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="col-span-1 flex flex-col justify-center items-start text-start">
            <h1 className="text-[#FFFFFF] text-[25px] font-bold">
              Featured <Link href="/" className="hover:text-[#67CDF0]">Movies and TV Shows</Link>
            </h1>
            <p className="text-[#FFFFFF] text-[18px] mt-4 font-bold">
              At <Link href="/" className="text-[#E22D51] underline decoration-[#E22D51]">IPTV</Link> UK Services, we bring you a world of entertainment with our extensive collection of movies and TV shows. Discover trending titles, timeless classics, and exclusive content, all in stunning 4K, FHD, and HD quality.
            </p>
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Column */}
                <div className="p-4">
                  <h1 className="text-[#FFFFFF] text-[30px] font-bold ml-3 mb-6">Movies</h1>
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
                  <h1 className="text-[#FFFFFF] text-[30px] font-bold ml-2 mb-6">TV Shows</h1>
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
          {
  pathname === '/single-plan' ? (
    <Image 
      src={singlePlan} 
      style={{ 
        width: '100%', 
        height: '450px', 
        objectFit: 'cover', 
        borderRadius: '10px', 
        boxShadow: '0 0 10px red' 
      }} 
      alt="header_img" 
    />
  ) : pathname === '/friends-and-family-plan' ? (
    <Image 
      src={familyPlan} 
      style={{ 
        width: '100%', 
        height: '450px', 
        objectFit: 'cover', 
        borderRadius: '10px', 
        boxShadow: '0 0 10px red' 
      }} 
      alt="header_img" 
    />
  ) :pathname==='/about'?(<>
   <Image 
      src={about} 
      style={{ 
        width: '100%', 
        height: '450px', 
       
        borderRadius: '10px', 
        boxShadow: '0 0 10px red' 
      }} 
      alt="header_img" 
    />
  </>): (
    <Image 
      src={header_img} 
      style={{ 
        width: '100%', 
        height: '450px', 
        objectFit: 'cover', 
        borderRadius: '10px', 
        boxShadow: '0 0 10px red' 
      }} 
      alt="header_img" 
    />
  )
}

            <a
              
              className="bg-[#E22D51] mt-6 text-white w-full h-[60px] flex items-center justify-center cursor-pointer rounded-[30px] hover:bg-[#67CDF0]"
          onClick={WattsappOpen}
            >
              {
  pathname === '/single-plan' ? (
    <p>Secure your subscription and start streaming!</p>
  ) : pathname === '/friends-and-family-plan' ? (
    <p>Start streaming with your subscription now!</p>
  ) :pathname==='/about'?(
<p>Choose your Subscription Plan Now</p>
  ) :(
    <p>Subscribe Today And Never Miss A Moment</p>
  )
}

            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
