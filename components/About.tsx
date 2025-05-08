import React from "react";
import ContactBtn from "./ContactBtn";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="mt-72">
      <div className="container grid grid-cols-[10rem_26rem_auto] gap-12 relative">
        <h2 className="absolute -top-28 z-1">
          About <br />
          Diana Ayi
        </h2>
        <ContactBtn className="!text-primary-variant self-end hover:-translate-y-4 hover:!text-primary" />

        <div className="relative group">
          <div className="w-64 h-96 bg-bg-4 absolute bottom-0" />
          <div className="relative bottom-4 left-4 saturate-0 brightness-[0.3] transition group-hover:saturate-100 group-hover:brightness-100 group-hover:left-0 group-hover:bottom-0 group-hover:box-shadow-[0_3rem_3rem_rgba(0,0,0,0.2)] group-hover:border-16 group-hover:border-bg-4">
            <Image
              src="/images/about.jpg"
              alt="about diana ayi"
              width={752}
              height={912}
              priority
              className="w-fullddd"
            />
          </div>
          <div className="absolute top-16 left-32 h-88 w-88 overflow-hidden shadow-[2rem_2rem_2rem_rgba(0,0,0,0.2)] transition group-hover:opacity-0">
            <Image
              src="/images/about.jpg"
              alt="about diana ayi"
              width={752}
              height={912}
              priority
            />
          </div>
        </div>

        <div className="ml-16">
          <div className="empty header__empty"></div>
          <div className="flex flex-col gap-4 text-[15px]">
            <p>
              Hi, I&apos;m Diana Ayi—a visual storyteller with a passion for
              capturing life&apos;s most authentic moments. Photography, for me,
              is more than just a craft; it&apos;s a way of seeing the
              extraordinary in the everyday.
            </p>
            <p>
              Whether it&apos;s the quiet stillness of nature, the vibrant energy
              of a city, or the raw emotion in someone&apos;s eyes, I aim to
              freeze those fleeting moments in time. My journey began with a
              simple camera and a deep curiosity for the world around me. 
            </p>
            <p>Every photo I take is an invitation to slow down, look
              closer, and feel something real. Let&apos;s create something beautiful together.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
