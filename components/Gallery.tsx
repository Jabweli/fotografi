"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const Gallery = () => {
  return (
    <section id="gallery" className="mt-22 xl:mt-48">
      <div className="container">
        <div className="flex justify-between">
          <h2>My Gallery</h2>
          <div className="empty !hidden lg:!block" />
        </div>
        <p className="w-full lg:w-180 mt-4 xl:mt-0">
          Step into my world—one frame at a time. This collection captures the
          beauty, emotion, and fleeting moments that inspire me most. From
          candid portraits to breathtaking landscapes, every image is a piece of
          the story I&apos;m telling through my lens.
        </p>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            599: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1023: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mt-8 2xl:mt-20 h-148 !pb-20"
        >
          <SwiperSlide>
            <article>
              <Image
                src="/images/gallery1.jpg"
                alt="gallery"
                width={720}
                height={1024}
                className="w-full h-auto object-cover"
              />
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article>
              <Image
                src="/images/gallery2.jpg"
                alt="gallery"
                width={720}
                height={1024}
                className="w-full h-full object-cover"
              />
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article>
              <Image
                src="/images/gallery3.jpg"
                alt="gallery"
                width={720}
                height={1024}
              />
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article>
              <Image
                src="/images/gallery4.jpg"
                alt="gallery"
                width={720}
                height={1024}
              />
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article>
              <Image
                src="/images/gallery5.jpg"
                alt="gallery"
                width={720}
                height={1024}
              />
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article>
              <Image
                src="/images/gallery6.jpg"
                alt="gallery"
                width={720}
                height={1024}
              />
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article>
              <Image
                src="/images/gallery7.jpg"
                alt="gallery"
                width={720}
                height={1024}
              />
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article>
              <Image
                src="/images/gallery8.jpg"
                alt="gallery"
                width={720}
                height={1024}
              />
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article>
              <Image
                src="/images/gallery9.jpg"
                alt="gallery"
                width={720}
                height={1024}
              />
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article>
              <Image
                src="/images/gallery10.jpg"
                alt="gallery"
                width={720}
                height={1024}
              />
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article>
              <Image
                src="/images/gallery11.jpg"
                alt="gallery"
                width={720}
                height={1024}
              />
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
