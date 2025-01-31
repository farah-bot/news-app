"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-between items-center py-[32px] px-[72px] pr-[28px] transition-all duration-300 ${
        isSticky ? 'bg-blue-500' : 'bg-transparent border-b-[1px] border-[#F2F2F2]'
      } fixed top-0 left-0 w-full z-10 font-sans font-medium`}
    >
      <div className="flex items-center space-x-4">
        <img 
          src={isSticky ? "/icon-white.svg" : "/icon.svg"} 
          alt="Logo" 
          className="w-10 h-10" 
        />
        <div className={`text-2xl font-bold ${isSticky ? 'text-white' : 'text-black'}`}>
          Berita Kini
        </div>
      </div>

      <button
        className="lg:hidden p-2 text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? '×' : '≡'}
      </button>

      <nav
        className={`lg:flex lg:justify-end lg:gap-x-[32px] ${
          isMenuOpen ? 'block' : 'hidden'
        } absolute lg:relative top-0 left-0 w-full bg-blue-500 lg:bg-transparent lg:w-auto p-4 lg:p-0`}
      >
        <Link
          href="#"
          className={`${
            isSticky ? 'text-white' : 'text-black'
          } font-medium hover:text-blue-500 transition-colors duration-300 block lg:inline-block py-2 lg:py-0`}
        >
          Beranda
        </Link>
        <Link
          href="#"
          className={`${
            isSticky ? 'text-white' : 'text-black'
          } font-medium hover:text-blue-500 transition-colors duration-300 block lg:inline-block py-2 lg:py-0`}
        >
          Terbaru
        </Link>
        <Link
          href="#"
          className={`${
            isSticky ? 'text-white' : 'text-black'
          } font-medium hover:text-blue-500 transition-colors duration-300 block lg:inline-block py-2 lg:py-0`}
        >
          Hiburan
        </Link>
        <Link
          href="#"
          className={`${
            isSticky ? 'text-white' : 'text-black'
          } font-medium hover:text-blue-500 transition-colors duration-300 block lg:inline-block py-2 lg:py-0`}
        >
          Gaya Hidup
        </Link>
        <Link
          href="#"
          className={`${
            isSticky ? 'text-white' : 'text-black'
          } font-medium hover:text-blue-500 transition-colors duration-300 block lg:inline-block py-2 lg:py-0`}
        >
          Olahraga
        </Link>
        <Link
          href="#"
          className={`${
            isSticky ? 'text-white' : 'text-black'
          } font-medium hover:text-blue-500 transition-colors duration-300 block lg:inline-block py-2 lg:py-0`}
        >
          Nasional
        </Link>
        <Link
          href="#"
          className={`${
            isSticky ? 'text-white' : 'text-black'
          } font-medium hover:text-blue-500 transition-colors duration-300 block lg:inline-block py-2 lg:py-0`}
        >
          Internasional
        </Link>
      </nav>
    </header>
  );
};

export default Header;
