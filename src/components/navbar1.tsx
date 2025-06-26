'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white">
          <Link href="#">Overview</Link>
          <Link href="#">Why Tedy?</Link>
          <Link href="#">Resources</Link>
          <Link href="#">Demo</Link>
          <Link href="#">Pricing</Link>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
            <Link
                href="/sign"
                className="bg-black text-white text-sm font-semibold py-2 px-5 rounded-full hover:opacity-90 transition"
            >
                Sign in
            </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                </svg>
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-90">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white">Overview</Link>
                <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white">Why Tedy?</Link>
                <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white">Resources</Link>
                <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white">Demo</Link>
                <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white">Pricing</Link>
                <Link href="/sign" className="block px-3 py-2 rounded-md text-base font-semibold text-white bg-black rounded-full text-center">Sign in</Link>
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
