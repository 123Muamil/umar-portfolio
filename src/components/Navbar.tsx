"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/images/logo.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const linkClass = (link: string) => {
    return activeLink === link
      ? 'text-[#E32D51]'
      : 'text-[#FFFFFF] hover:text-[#5FBFDB]';
  };
  const WattsappOpen = () => {
    window.open('https://wa.me/+447826176784', '_blank');
  };
  return (
    <header className="bg-[#514D7C] sticky top-0 w-full shadow-md z-10">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-800">
            <Image src={logo} alt="logo" width={120} height={120} />
          </a>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center text-[20px] space-x-4">
            <a
              href="#"
              className={`${linkClass('home')}`}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </a>
            {/* Plans Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-[#FFFFFF] hover:text-[#4288AC] focus:outline-none"
              >
                Plans
              </button>
              {isDropdownOpen && (
                <ul className="absolute bg-white shadow-lg mt-2 rounded-md w-40">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white"
                    >
                      Single Plan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white"
                    >
                      Friends and Family Plan
                    </a>
                  </li>
                </ul>
              )}
            </div>
            <a
              href="#"
              className={`${linkClass('reseller')}`}
              onClick={() => handleLinkClick('reseller')}
            >
              Reseller
            </a>
            <a
              href="#"
              className={`${linkClass('guide')}`}
              onClick={() => handleLinkClick('guide')}
            >
              Guide
            </a>
            <a
              href="#"
              className={`${linkClass('iptvs')}`}
              onClick={() => handleLinkClick('iptvs')}
            >
              IPTVs
            </a>
            <a
              href="#"
              className={`${linkClass('about')}`}
              onClick={() => handleLinkClick('about')}
            >
              About
            </a>
            <a
              href="#"
              className={`${linkClass('contact')}`}
              onClick={() => handleLinkClick('contact')}
            >
              Contact
            </a>
            <a
              href="#"
              className={`${linkClass('blogs')}`}
              onClick={() => handleLinkClick('blogs')}
            >
              Blogs
            </a>
            <a
              
              className="bg-[#E22D51] text-white px-4  cursor-pointer py-2 rounded-md hover:bg-[#67CDF0]"
              onClick={WattsappOpen}
            >
              Get Subscription
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex flex-col  items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
  className={`md:hidden pl-6 flex flex-col fixed top-0 right-0 z-20 bg-white text-[#333] w-[90%] h-full shadow-lg transition-transform duration-500 ${
    isMobileMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
  }`}
  style={{ paddingRight: '10%' }} // This ensures the menu doesn't take the full width
>
  {/* Close Button */}
  <div className="flex justify-end pt-4" >
    <button
      onClick={toggleMobileMenu}
      className="text-gray-800 text-2xl focus:outline-none"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>
  </div>

  {/* Menu Items */}
  <a
    href="#"
    className={`${linkClass('home')} text-[#333] text-[20px] font-bold py-4 hover:text-[#E32D51]`}
    onClick={() => handleLinkClick('home')}
  >
    Home
  </a>

  {/* Plans Dropdown for Mobile */}
  <div className="relative">
    <button
      onClick={toggleDropdown}
      className="block text-[#333] text-[20px] font-bold py-4 hover:text-blue-600"
    >
      Plans
    </button>
    {isDropdownOpen && (
      <ul className="bg-white shadow-lg mt-2 rounded-md w-full">
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-[#333] text-[20px] hover:bg-blue-600 hover:text-white"
          >
            Single Plan
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-[#333] text-[20px] hover:bg-blue-600 hover:text-white"
          >
            Friends and Family Plan
          </a>
        </li>
      </ul>
    )}
  </div>

  <a
    href="#"
    className={`${linkClass('reseller')} text-[#333] text-[20px] font-bold font-bold py-4 hover:text-[#E32D51]`}
    onClick={() => handleLinkClick('reseller')}
  >
    Reseller
  </a>

  <a
    href="#"
    className={`${linkClass('guide')} text-[#333] text-[20px] font-bold font-bold py-4 hover:text-[#E32D51]`}
    onClick={() => handleLinkClick('guide')}
  >
    Guide
  </a>

  <a
    href="#"
    className={`${linkClass('iptvs')} text-[#333] text-[20px] font-bold font-bold py-4 hover:text-[#E32D51]`}
    onClick={() => handleLinkClick('iptvs')}
  >
    IPTVs
  </a>

  <a
    href="#"
    className={`${linkClass('about')} text-[#333] text-[20px] font-bold py-4 hover:text-[#E32D51]`}
    onClick={() => handleLinkClick('about')}
  >
    About
  </a>

  <a
    href="#"
    className={`${linkClass('contact')} text-[#333] text-[20px] font-bold py-4 hover:text-[#E32D51]`}
    onClick={() => handleLinkClick('contact')}
  >
    Contact
  </a>

  <a
    href="#"
    className={`${linkClass('blogs')} text-[#333] text-[20px] font-bold py-4 hover:text-[#E32D51]`}
    onClick={() => handleLinkClick('blogs')}
  >
    Blogs
  </a>

  <a
    className="block text-white bg-[#E22D51] px-4 py-2 cursor-pointer rounded-md hover:bg-[#67CDF0]"
    onClick={WattsappOpen}
  >
    Get Subscription
  </a>
</div>

      </nav>
    </header>
  );
};

export default Navbar;