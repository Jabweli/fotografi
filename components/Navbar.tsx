"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaTwitter, FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const menuItems = [
  {
    label: "Home",
    link: "#home",
  },
  {
    label: "About",
    link: "#about",
  },
  {
    label: "Gallery",
    link: "#gallery",
  },
  {
    label: "Exhibitions",
    link: "#exhibitions",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <nav
      className={`w-full h-20 grid place-items-center fixed top-0 left-0 z-[99] ${
        isScrolled && "window-scrolled"
      }`}
    >
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

        {/* desktop nav */}
        <div className="hidden lg:flex items-center gap-16">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.link}
              className="hover:text-primary transition"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* mobile nav */}
        {isMenuOpen && (
          <div className="flex flex-col lg:hidden absolute top-[100%] right-0 gap-0 mt-5">
            {menuItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.link}
                onClick={() => setIsMenuOpen(false)}
                className="h-20 shadow-[-3rem_3rem_3rem_rgba(0,0,0,0.7)] bg-bg-4 w-full p-[1rem_5rem_1rem_3rem] flex items-center border-t-[1px] border-bg-2 animate-navAnimation rotate-x-90 opacity-0 origin-top"
                style={{animationDelay: `${200 * index}ms`}}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}

        <div className="hidden lg:flex items-center gap-[16px] text-white">
          <Link
            href="https://instagram.com"
            className="w-8 h-8 grid place-items-center rounded-lg linear-bg-1"
            target="_blank"
          >
            <AiFillInstagram className="text-bg-1" />
          </Link>
          <Link
            href="https://instagram.com"
            className="w-8 h-8 grid place-items-center rounded-lg linear-bg-1"
            target="_blank"
          >
            <FaTwitter className="text-bg-1" />
          </Link>
          <Link
            href="https://instagram.com"
            className="w-8 h-8 grid place-items-center rounded-lg linear-bg-1"
            target="_blank"
          >
            <FaYoutube className="text-bg-1" />
          </Link>
        </div>

        {!isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex lg:hidden cursor-pointer text-white"
          >
            <RiMenu3Fill size={28} />
          </button>
        )}
        {isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(false)}
            className="flex lg:hidden cursor-pointer text-white"
          >
            <IoClose size={30} />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
