import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-28">
      <div className="container border-t-[0.5rem] border-bg-4 pt-12">
        <div className="flex items-center gap-8">
          <h2 className="!text-5xl">support@fotografi.com</h2>
          <Link
            href=""
            className="w-20 h-20 rounded-full border-[0.2rem] border-primary-variant text-[2rem] flex items-center  justify-center text-primary-variant transition hover:text-primary hover:border-primary hover:-translate-y-4"
          >
            <FaArrowRight className="-rotate-45" />
          </Link>
        </div>
        <div className="flex items-center gap-12 my-5">
          <Link href="#home" className="transition hover:text-primary">Home</Link>
          <Link href="#about" className="transition hover:text-primary">About</Link>
          <Link href="#gallery" className="transition hover:text-primary">Gallery</Link>
          <Link href="#exhibitions" className="transition hover:text-primary">Exhibitions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
