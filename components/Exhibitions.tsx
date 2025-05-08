import React from "react";
import ContactBtn from "./ContactBtn";
import Image from "next/image";

const Exhibitions = () => {
  return (
    <section id="exhibitions" className="mt-10 md:mt-20 xl:mt-40">
      <div className="container relative">
        <h2>Exhibitions</h2>
        <div className="empty !w-104 absolute right-56 top-0 !hidden xl:!block" />

        <div className="grid lg:grid-cols-[auto_10rem] items-center justify-between">
          <p className="w-full lg:w-180 mt-4 xl:mt-0">
            A curated look at where my work has been showcased. Each exhibition
            is a chapter in my creative journey—spaces where my lens met the
            world, sparking connection, conversation, and inspiration. From
            local galleries to global features, these moments reflect the heart
            of my craft.
          </p>
          <ContactBtn className="!text-primary-variant hover:!text-primary hover:-translate-y-4 !hidden"/>
        </div>

        <div className="grid grid-cols-3 mt-8 lg:mt-20 gap-1 sm:gap-4 lg:gap-8">
          <article className="ex_article lg:border-[0.5rem] border-bg-4 transition row-[1/3]">
            <Image
              src="/images/ev.jpg"
              alt="gallery"
              width={720}
              height={720}
              className="w-full h-full object-cover"
            />
          </article>
          <article className="ex_article lg:border-[0.5rem] border-bg-4 transition">
            <Image
              src="/images/e1.jpg"
              alt="gallery"
              width={720}
              height={720}
              className="w-full h-auto object-cover"
            />
          </article>
          <article className="ex_article lg:border-[0.5rem] border-bg-4 transition">
            <Image
              src="/images/e2.jpg"
              alt="gallery"
              width={720}
              height={720}
              className="w-full h-auto object-cover"
            />
          </article>
          <article className="ex_article lg:border-[0.5rem] border-bg-4 transition col-[2/4] row-[2/3]">
            <Image
              src="/images/eh.jpg"
              alt="gallery"
              width={1440}
              height={720}
              className="w-full h-auto object-cover"
            />
          </article>
          <article className="ex_article lg:border-[0.5rem] border-bg-4 transition">
            <Image
              src="/images/e3.jpg"
              alt="gallery"
              width={720}
              height={720}
              className="w-full h-auto object-cover"
            />
          </article>
          <article className="ex_article lg:border-[0.5rem] border-bg-4 transition">
            <Image
              src="/images/e4.jpg"
              alt="gallery"
              width={720}
              height={720}
              className="w-full h-auto object-cover"
            />
          </article>
          <article className="ex_article lg:border-[0.5rem] border-bg-4 transition">
            <Image
              src="/images/e5.jpg"
              alt="gallery"
              width={720}
              height={720}
              className="w-full h-auto object-cover"
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Exhibitions;
