"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaTwitter, FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if(document.documentElement.scrollTop > 0){
      setIsScrolled(true);
    }else{
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", ()=>{});
    };
  }, []);


  return (
    <nav className={`w-full h-20 grid place-items-center fixed top-0 left-0 z-[99] ${isScrolled && "window-scrolled"}`}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="w-[7.5rem]">
          <Image
            src="/images/logo.png"
            alt="nav logo"
            width={120}
            height={66}
            className="w-full h-auto"
          />
        </Link>
        <div className="flex items-center gap-16">
          <Link href="#" className="hover:text-primary transition">
            Home
          </Link>
          <Link href="#about" className="hover:text-primary transition">
            About
          </Link>
          <Link href="#gallery" className="hover:text-primary transition">
            Gallery
          </Link>
          <Link href="#exhibitions" className="hover:text-primary transition">
            Exhibitions
          </Link>
        </div>
        <div className="flex items-center gap-[16px] text-white">
          <Link
            href="https://instagram.com"
            className="w-8 h-8 grid place-items-center rounded-lg linear-bg-1"
            target="_blank"
          >
            <AiFillInstagram className="text-bg-1"/>
          </Link>
          <Link
            href="https://instagram.com"
            className="w-8 h-8 grid place-items-center rounded-lg linear-bg-1"
            target="_blank"
          >
            <FaTwitter className="text-bg-1"/>
          </Link>
          <Link
            href="https://instagram.com"
            className="w-8 h-8 grid place-items-center rounded-lg linear-bg-1"
            target="_blank"
          >
            <FaYoutube className="text-bg-1"/>
          </Link>
        </div>
        <button className="hidden" id="nav__toggle-open">
          Menu
        </button>
        <button className="hidden" id="nav__toggle-close">
          Close
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
