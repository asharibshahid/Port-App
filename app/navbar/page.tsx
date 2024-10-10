"use client"
import React, { useState } from 'react';
import Image from 'next/image';

import { FiMenu } from 'react-icons/fi'; // Hamburger icon
import { AiOutlineClose } from 'react-icons/ai'; // Close icon
import imageSrcNave from '../Picpro/Pfp-s/Pak-flg.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src={imageSrcNave}
            alt="Logo"
            width={60}
            height={60}
            className="mr-3"
          />
          <span className="text-white font-semibold text-lg">Welcome</span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <AiOutlineClose size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Navigation Links (Hidden on small screens, visible on medium and above) */}
        <ul className="hidden md:flex justify-center space-x-10 text-white font-semibold text-lg">
          <li className="hover:text-black transition duration-300 ease-in-out">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-black transition duration-300 ease-in-out">
            <a href="/about">About</a>
          </li>
          <li className="hover:text-black transition duration-300 ease-in-out">
            <a href="/projects">Projects</a>
          </li>
          <li className="hover:text-black transition duration-300 ease-in-out">
            <a href="/services">Services</a>
          </li>
          <li className="hover:text-black transition duration-300 ease-in-out">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

    
      {isOpen && (
        <ul className="md:hidden bg-gradient-to-r from-blue-500 to-purple-600 p-4 space-y-4 text-white font-semibold text-lg">
          <li className="hover:text-black transition duration-300 ease-in-out">
            <a href="/" onClick={toggleMenu}>Home</a>
          </li>
          <li className="hover:text-black transition duration-300 ease-in-out">
            <a href="/About" onClick={toggleMenu}>About</a>
          </li>
          <li className="hover:text-black transition duration-300 ease-in-out">
            <a href="/Project" onClick={toggleMenu}>Projects</a>
          </li>
          <li className="hover:text-black transition duration-300 ease-in-out">
            <a href="/Servi" onClick={toggleMenu}>Services</a>
          </li>
          <li className="hover:text-black transition duration-300 ease-in-out">
            <a href="/contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
