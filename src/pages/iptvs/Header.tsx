import React from 'react';
const Header: React.FC = () => {
  return (
    <header className="bg-[#221E5B] text-[#ffffff] pt-[100px] pb-[100px] p-6 text-center">
      <h1 className="text-[#FFFFFF] text-[45px] font-bold">
      IPTVs – IPTV UK <br/> Services
    </h1>

      <p className="mt-4 text-base md:text-lg">
      We offer a variety of <span className='font-bold'>top-tier IPTV servers</span> to ensure you <br/> experience the best in live TV, sports, movies, and VOD.
      </p>
    </header>
  );
};

export default Header;
