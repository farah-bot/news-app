'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode);
  };

  const getLinkClass = (href: string) => {
    const isActive = pathname === href;
    return `${isSticky ? 'text-white' : 'text-black'} font-medium ${isActive ? 'text-blue-500 font-semibold' : 'hover:text-blue-500'} transition-colors duration-300 block lg:inline-block py-2 lg:py-0 dark:text-white`;
  };

  return (
    <header
      className={`flex justify-between items-center py-[32px] px-[72px] pr-[28px] transition-all duration-300 ${isSticky ? 'bg-blue-500' : 'bg-transparent border-b-[1px] border-[#F2F2F2]'} fixed top-0 left-0 w-full z-10 font-sans font-medium ${isDarkMode ? 'dark:bg-gray-900 dark:text-white' : ''}`}
    >
      <div className="flex items-center space-x-4">
        <Link href="/">
          <img src={isSticky ? "/icon-white.svg" : "/icon.svg"} alt="Logo" className="w-10 h-10 cursor-pointer" />
        </Link>
        <Link href="/" className={`text-2xl font-bold ${isSticky ? 'text-white' : 'text-black'} dark:text-white`}>
          Berita Kini
        </Link>
      </div>

      <button className="lg:hidden p-2 text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? '×' : '≡'}
      </button>

      <nav
        ref={menuRef}
        className={`lg:flex lg:justify-end lg:gap-x-[32px] ${isMenuOpen ? 'block' : 'hidden'} absolute lg:relative top-0 left-0 w-full bg-blue-500 lg:bg-transparent lg:w-auto p-4 lg:p-0`}
      >
        <Link href="/" className={getLinkClass('/')}>
          Beranda
        </Link>
        <Link href="/berita/terbaru" className={getLinkClass('/berita/terbaru')}>
          Terbaru
        </Link>
        <Link href="/berita/hiburan" className={getLinkClass('/berita/hiburan')}>
          Hiburan
        </Link>
        <Link href="/berita/lifestyle" className={getLinkClass('/berita/lifestyle')}>
          Gaya Hidup
        </Link>
        <Link href="/berita/olahraga" className={getLinkClass('/berita/olahraga')}>
          Olahraga
        </Link>
        <Link href="/berita/nasional" className={getLinkClass('/berita/nasional')}>
          Nasional
        </Link>
        <Link href="/berita/internasional" className={getLinkClass('/berita/internasional')}>
          Internasional
        </Link>
      </nav>

      <button
        className="p-2 text-xl lg:ml-4"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? '🌙' : '🌞'}
      </button>
    </header>
  );
};

export default Header;
