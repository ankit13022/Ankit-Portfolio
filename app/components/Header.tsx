"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi"; // Import the hamburger icon
import Social from "./social";

const Header: React.FC = () => {
  const [scroll, setScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      window.scrollY >= 90 ? setScroll(true) : setScroll(false);
    };
    window.addEventListener("scroll", updateScroll);

    return () => window.removeEventListener("scroll", updateScroll); // Clean up event listener
  }, []);

  return (
    <header
      className={`backdrop-filter backdrop-blur-lg ${
        scroll ? "bg-opacity-40" : "bg-opacity-0"
      } bg-gray-900 z-30 w-full text-white fixed p-3 md:px-20 transition-all duration-300`}
    >
      <div className="container mx-auto w-full flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-4 md:gap-8 justify-between items-center my-1 w-full md:w-auto">
          <Link
            href="#home"
            className="bg-yellow-600 h-10 w-10 flex items-center justify-center rounded-full"
          >
            <span className="text-white text-lg font-bold">A</span>
          </Link>
          <Social />
          <button
            className="md:hidden ml-auto mr-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FiMenu size={24} />
          </button>
        </div>
        <nav
          className={`flex-col md:flex-row flex items-center space-y-4 md:space-y-0 md:space-x-8 ${
            isMobileMenuOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <Link href="#" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="#about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="#projects" className="hover:text-gray-400">
            Projects
          </Link>
          <Link href="#experience" className="hover:text-gray-400">
            Experience
          </Link>
          <Link href="#contact" className="hover:text-gray-400">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
