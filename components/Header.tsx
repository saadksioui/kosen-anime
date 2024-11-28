"use client"

import { NavLinks } from "@/constants";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="relative py-3">
      <nav className="w-[85%] lg:w-[95%] mx-auto flex items-center justify-between">
        <Image src={"/assets/WhiteLogo.svg"} width={200} height={200} className="w-36" alt="logo" />

        {/* Burger Menu Icon */}
        <button onClick={handleClick}
          className="lg:hidden flex flex-col justify-center items-center">
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} >
          </span>
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} >
          </span>
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} >
          </span>
        </button>

        {/* Menu for Mobile & Tablet */}
        <div className={`${isOpen ? "block absolute w-full h-screen left-0 top-full bg-[#0D1B2A] z-10" : "hidden"}`}>
          <ul className="flex flex-col items-center gap-4 mt-10">
            {
              NavLinks.map((link, index) => (
                <li key={index} className="text-white font-poppins text-xl font-semibold">
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        {/* Menu for Desktop */}
        <ul className="hidden lg:flex flex-row items-center gap-5">
          {
            NavLinks.map((link, index) => (
              <li key={index} className="text-white font-poppins">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))
          }
        </ul>
        {/* Search Bar */}
        <form className="hidden lg:flex items-center gap-2 border border-gray-300 rounded-md py-2 px-2">
          <Search color="white" />
          <input type="text" placeholder="Search..." className="bg-[#0D1B2A] outline-none text-white font-poppins" />
        </form>
        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <button className="bg-[#0D1B2A] border border-gray-300 rounded-md py-2 px-4 text-white font-poppins font-medium">Log In</button>
          <button className="bg-white rounded-md py-2 px-4 text-[#0D1B2A] font-poppins font-medium">Get Started</button>
        </div>
      </nav>
    </header>
  )
};

export default Header
