import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactBtn from "./ContactBtn";

const Header = () => {
  return (
    <>
      <header id="home" className="w-full h-max lg:h-[100vh] relative top-0 overflow-hidden linear-bg-2">
        <div className="container header">
          <div className="group cursor-pointer">
            <div className="w-64 h-88 bg-bg-4 absolute hidden lg:block" />
            <div className="relative rounded-t-[290px] lg:rounded-t-none overflow-hidden xl:border-0 xl:top-4 xl:left-4 xl:saturate-0 xl:brightness-[50%] transition xl:group-hover:saturate-100 xl:group-hover:brightness-100 xl:group-hover:top-0 xl:group-hover:left-0 xl:group-hover:border-[16px] xl:group-hover:border-bg-4 xl:group-hover:w-full">
              <Image
                src="/images/header.jpg"
                alt="header image"
                width={648}
                height={972}
                priority
              />
            </div>
            <div className="w-112 h-112 hidden xl:block absolute top-24 left-24 overflow-hidden transition group-hover:opacity-0">
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
            <div className="flex flex-col lg:flex-row lg:gap-8">
              <div className="empty"></div>
              <span className="text-primary-variant">
                #Best Travel Photographer 2025
              </span>
            </div>
            <h1>See The Beauty Of The World Through My Lense</h1>
            <p className="w-full xl:w-[85%] mt-3">
            Every frame tells a story—of light, emotion, and the fleeting moments that often go unnoticed. Let me show you the world as I see it—raw, real, and breathtaking.
            </p>
            <Link href="mailto:stanlaus645@gmail.com" className="header_btn-md lg:hidden">
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </header>
       
      <div className="header_frames hidden xl:block absolute top-[88vh] right-176 2xl:right-212 2xl:top-[80vh] transition">
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
      <ContactBtn className="header_btn !hidden lg:!grid"/>
    </>
  );
};

export default Header;
