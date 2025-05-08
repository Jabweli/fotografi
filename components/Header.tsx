import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactBtn from "./ContactBtn";

const Header = () => {
  return (
    <>
      <header className="w-full h-[100vh] relative top-0 overflow-hidden linear-bg-2">
        <div className="container header">
          <div className="group cursor-pointer">
            <div className="w-64 h-88 bg-bg-4 absolute" />
            <div className="relative top-4 left-4 saturate-0 brightness-[50%] transition group-hover:saturate-100 group-hover:brightness-100 group-hover:top-0 group-hover:left-0 group-hover:border-[16px] group-hover:border-bg-4">
              <Image
                src="/images/header.jpg"
                alt="header image"
                width={648}
                height={972}
                priority
              />
            </div>
            <div className="w-112 h-112 absolute top-24 left-24 overflow-hidden transition group-hover:opacity-0">
              <Image
                src="/images/header.jpg"
                alt="header image"
                width={648}
                height={972}
                priority
                className="w-full"
              />
            </div>
          </div>
          <div className="header__right">
            <div className="flex gap-8">
              <div className="empty header__empty"></div>
              <span className="text-primary-variant">
                #Best Travel Photographer 2025
              </span>
            </div>
            <h1 className="!text-[50px]">See The Beauty Of The World Through My Lense</h1>
            <p className="w-[85%] mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              dolorum repellat hic optio facilis eveniet non ducimus, alias, voluptatibus
              provident?
            </p>
            <Link href="mailto:stanlaus645@gmail.com" className="md:hidden">
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </header>
      <div className="header_frames absolute top-[88vh] right-176 transition">
        <div className="header_frame w-52 border-[0.4rem] border-bg-3 absolute">
          <Image
            src="/images/frame1.jpg"
            alt="header frame"
            width={456}
            height={583}
            className="w-full h-auto"
          />
        </div>
        <div className="header_frame w-52 border-[0.4rem] border-bg-3 absolute">
          <Image
            src="/images/frame2.jpg"
            alt="header frame"
            width={570}
            height={729}
            className="w-full h-auto"
          />
        </div>
      </div>
      <ContactBtn className="header_btn"/>
    </>
  );
};

export default Header;
