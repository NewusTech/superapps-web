"use client";

import { promos } from "@/constants/main";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/css/grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid, Autoplay } from "swiper/modules";

export default function MobilePromotionScreen() {
  const swiperRef = useRef<any>(null);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-row justify-center">
        <h2 className="text-neutral-700 font-semibold text-[26px]">
          Nikmati Promo Kami
        </h2>
      </div>

      <div className="w-full pl-6 flex flex-row items-center justify-center self-center gap-x-5 mt-12">
        <Swiper
          modules={[Navigation, Pagination, Grid, Autoplay]}
          autoplay={{ delay: 3000 }}
          slidesPerView={1.2}
          spaceBetween={20}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="mySwiper"
          loop={true}
          pagination={{ clickable: true }}
          ref={swiperRef}>
          {promos.map((image: any, i: number) => {
            return (
              <SwiperSlide key={i}>
                <div className="w-full flex flex-row items-center justify-center max-h-[250px] rounded-lg overflow-hidden">
                  <Image
                    src={image?.image}
                    alt="Carousel"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
