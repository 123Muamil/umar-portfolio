"use client";
import React, { JSX, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import header_img from '../../public/images/Popular-TV-Channels-and-Shows.jpg';
import { MdArrowRight } from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";
import { PiDotOutlineFill } from "react-icons/pi"; // Importing the bullet point icon
import { v4 as uuidv4 } from 'uuid';
import ChannelsCarousel from './ChannelsCarousel';
const PopularChannels = () => {
  const [openIndexes1, setOpenIndexes1] = useState<number[]>([]);
  const [openIndexes2, setOpenIndexes2] = useState<number[]>([]);
  const uid = uuidv4()
  const MoviesContent: string[] = [
    "Sports Channels",
    "Entertainment Channels",
    "News Channels",
    "Kids’ Channels",
    "Music Channels",
    "Global Favorites",
    "Regional Channels"
  ];

  const TVShowsContent: string[] = [
    "Sports Events",
    "Cultural and Award Shows",
    "Concerts and Live Performances",
    "Seasonal Premieres",
    "Movie TV Show Premieres",
    "International and Cultural Events"
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
  const movieDescriptions: { [key: string]: string | JSX.Element[] } = {
    "Sports Channels": [
      <ul key={uid}>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold'>ESPN</h1>: Live coverage of football, basketball, and international sports.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'>Sky Sports</h1>: Premier League, Formula 1, and cricket action.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'>Fox Sports</h1>: Top-tier sports from the USA.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]'/> <h1 className='text-[15px] font-bold whitespace-nowrap'>beIN Sports</h1>: Football leagues and global tournaments.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]'/> <h1 className='text-[15px] font-bold'>Eurosport</h1>: Live sports from Europe and beyond.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]'/> <h1 className='text-[15px] font-bold whitespace-nowrap'>WWE Network</h1>: Action-packed wrestling events and archives.</li>
      </ul>
    ],
    "Entertainment Channels": [
      <ul className='flex flex-col items-start' key={uid}>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold'>HBO</h1>: Award-winning original series and blockbuster movies.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'>Netflix Originals</h1>: Streaming the latest shows and exclusive content.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> AMC</h1>: Home of “Breaking Bad” and “The Walking Dead.”</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> Starz</h1>: Drama, thrillers, and more.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> Disney+</h1>: Family-friendly classics and new releases.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> National Geographic </h1>: Documentaries and exploration.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'>Star Plus</h1>: Leading Hindi entertainment.</li>
      </ul>
    ],
    "News Channels": [
      <ul key={uid}>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'>BBC News</h1>: Trusted global and local news updates.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> CNN</h1>: Breaking news and in-depth analysis.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> Al Jazeera</h1>: International perspectives on current events.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> Sky News</h1>: Round-the-clock news coverage.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> France 24</h1>: International news with a European focus.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> NDTV</h1>: India’s leading news channel.</li>
      </ul>
    ],
    "Kids’ Channels": [
      <ul key={uid}>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> Disney Channel</h1>: Family-friendly movies and series.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> Nickelodeon </h1>: Animated hits like “SpongeBob SquarePants.”</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> Cartoon Network</h1>: Classics like “Adventure Time” and “Ben 10.”</li>
      </ul>
    ],
    "Music Channels": [
      <ul key={uid}>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> MTV</h1>: Chart-topping hits and reality shows.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> VH1</h1>: Classic music videos and shows.</li>
      </ul>
    ],
    "Global Favorites": [
      <ul key={uid}>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> BBC One </h1>: Iconic British entertainment, news, and drama.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> HBO</h1>: World-renowned for its original series and films.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> CBS</h1>: Premier US network offering diverse programming.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> FOX</h1>: Popular shows, sports, and news.</li>
      </ul>
    ],
    "Regional Channels": [
      <ul key={uid}>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> Zee TV</h1>: Popular Indian dramas and reality shows.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> Al Jazeera</h1>: News and documentaries from the Middle East.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> TF1</h1>: France’s top TV network.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> Rai Italia</h1>: Italian entertainment and news.</li>
      </ul>
    ]
  };
  const TVShowsDescriptions: { [key: string]: string | JSX.Element[] } = {
    "Sports Events": [
      <ul key={uid}>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold'>FIFA World Cup</h1>: The pinnacle of global football.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'>Super Bowl</h1>: The biggest night in American sports.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'>UFC PPV Fights</h1>: High-energy mixed martial arts events.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]'/> <h1 className='text-[15px] font-bold whitespace-nowrap'>ICC Cricket World Cup</h1>: A must-watch for cricket fans.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]'/> <h1 className='text-[15px] font-bold'>UEFA Champions League Final</h1>: Witness Europe’s best battle it out.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]'/> <h1 className='text-[15px] font-bold whitespace-nowrap'>NFL Super Bowl</h1>: The biggest event in American football.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]'/> <h1 className='text-[15px] font-bold whitespace-nowrap'>Olympics</h1>: Global competition featuring a variety of sports.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]'/> <h1 className='text-[15px] font-bold'>English Premier League</h1>: Weekly matches featuring top-tier teams.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]'/> <h1 className='text-[15px] font-bold'>Copa Libertadores</h1>: South America’s premier football tournament.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]'/> <h1 className='text-[15px] font-bold'>Indian Premier League (IPL)</h1>: Action-packed T20 cricket.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]'/> <h1 className='text-[15px] font-bold'>The Ashes</h1>: Historic rivalry between England and Australia.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]'/> <h1 className='text-[15px] font-bold'>Wimbledon</h1>: The oldest and most prestigious Grand Slam.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]'/> <h1 className='text-[15px] font-bold'>US Open</h1>: Tennis stars battle it out in New York.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]'/> <h1 className='text-[15px] font-bold'>Australian Open</h1>: Kicking off the Grand Slam calendar.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]'/> <h1 className='text-[15px] font-bold'>NBA Finals</h1>: The best basketball teams in the USA compete.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]'/> <h1 className='text-[15px] font-bold'>FIBA World Cup</h1>: International basketball championship.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]'/> <h1 className='text-[15px] font-bold'>Formula 1 Grand Prix</h1>: High-speed racing across the globe.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]'/> <h1 className='text-[15px] font-bold'>Boxing Title Fights</h1>: High-stakes bouts featuring world champions.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]'/> <h1 className='text-[15px] font-bold'>WWE WrestleMania</h1>: The ultimate wrestling extravaganza.</li>
      </ul>
    ],
    "Entertainment Channels": [
      <ul className='flex flex-col items-start' key={uid}>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold'>HBO</h1>: Award-winning original series and blockbuster movies.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'>Netflix Originals</h1>: Streaming the latest shows and exclusive content.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> AMC</h1>: Home of “Breaking Bad” and “The Walking Dead.”</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> Starz</h1>: Drama, thrillers, and more.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> Disney+</h1>: Family-friendly classics and new releases.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> National Geographic </h1>: Documentaries and exploration.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'>Star Plus</h1>: Leading Hindi entertainment.</li>
      </ul>
    ],
    "News Channels": [
      <ul key={uid}>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'>BBC News</h1>: Trusted global and local news updates.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> CNN</h1>: Breaking news and in-depth analysis.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> Al Jazeera</h1>: International perspectives on current events.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> Sky News</h1>: Round-the-clock news coverage.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> France 24</h1>: International news with a European focus.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> NDTV</h1>: India’s leading news channel.</li>
      </ul>
    ],
    "Kids’ Channels": [
      <ul key={uid}>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> Disney Channel</h1>: Family-friendly movies and series.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> Nickelodeon </h1>: Animated hits like “SpongeBob SquarePants.”</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> Cartoon Network</h1>: Classics like “Adventure Time” and “Ben 10.”</li>
      </ul>
    ],
    "Music Channels": [
      <ul key={uid}>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> MTV</h1>: Chart-topping hits and reality shows.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> VH1</h1>: Classic music videos and shows.</li>
      </ul>
    ],
    "Global Favorites": [
      <ul key={uid}>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> BBC One </h1>: Iconic British entertainment, news, and drama.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> HBO</h1>: World-renowned for its original series and films.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> CBS</h1>: Premier US network offering diverse programming.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> FOX</h1>: Popular shows, sports, and news.</li>
      </ul>
    ],
    "Regional Channels": [
      <ul key={uid}>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> Zee TV</h1>: Popular Indian dramas and reality shows.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> Al Jazeera</h1>: News and documentaries from the Middle East.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> TF1</h1>: France’s top TV network.</li>
        <li className='flex'><PiDotOutlineFill size={40} className='mt-[-10px]' /> <h1 className='text-[15px] font-bold whitespace-nowrap'> Rai Italia</h1>: Italian entertainment and news.</li>
      </ul>
    ]
  };
//   const TVShowsDescriptions: { [key: string]: string } = {
//     "Top Series": "Binge-watch critically acclaimed shows from the UK, USA, and across the globe.",
//     "Trending Originals": "Explore exclusive original series and binge-worthy content.",
//     "Reality & Lifestyle": "Get your fill of cooking competitions, travel guides, and lifestyle inspiration.",
//     "Documentaries": "Dive into fascinating documentaries on nature, history, science, and true crime.",
//     "Kids’ Shows": "Keep the little ones entertained with educational and fun programming tailored for kids."
//   };

  const WattsappOpen = () => {
    window.open('https://wa.me/+447826176784', '_blank');
  };

  return (
    <div className="bg-[#040037] pb-[60px]">
  <div className="container mx-auto px-4 pt-[60px] pb-[100px]">
    <div className="grid lg:px-10 grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="col-span-1 flex flex-col justify-center items-start text-start">
        <h1 className="text-[#FFFFFF] text-[25px] font-bold">
          Most Popular <Link href="/" className="hover:text-[#67CDF0]">TV Channels and Events</Link>
        </h1>
        <p className="text-[#FFFFFF] text-[18px] mt-4 font-bold">
          Never miss out on the action with <Link href="/" className="text-[#E22D51] underline decoration-[#E22D51]">IPTV</Link> UK Services – your gateway to the most popular <Link href="/" className="text-[#E22D51] underline decoration-[#E22D51]">TV channels and events worldwide!</Link>
        </p>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Column */}
            <div className="p-4">
              <h1 className="text-[#FFFFFF] text-[30px] font-bold ml-3 mb-6">Top TV Channels</h1>
              <ul className="space-y-2">
                {MoviesContent.map((text, index) => (
                  <li key={`${text}-${index}`} className="flex items-start">
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
                        <div key={text} className="mt-1 text-sm text-[#FFFFFF]">{movieDescriptions[text]}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Second Column */}
            <div className="p-4">
              <h1 className="text-[#FFFFFF] text-[30px] font-bold ml-2 mb-6">Major Events</h1>
              <ul className="space-y-2">
                {TVShowsContent.map((text, index) => (
                  <li key={`${text}-${index}`} className="flex items-start">
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
                        <p key={text} className="mt-1 text-sm text-[#FFFFFF]">{TVShowsDescriptions[text]}</p>
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
        <Image src={header_img} style={{ width: '100%', height: '450px',objectFit:'cover', borderRadius: '10px', boxShadow: '0 0 10px red' }} alt="header_img" />
        <a
          className="bg-[#E22D51] mt-6 text-white w-full h-[60px] flex items-center justify-center cursor-pointer rounded-[30px] hover:bg-[#67CDF0]"
          onClick={WattsappOpen}
        >
          Join Now And Unlock Premium Content
        </a>
      </div>
    </div>
  </div>
  <ChannelsCarousel/>
</div>

  );
};

export default PopularChannels;
