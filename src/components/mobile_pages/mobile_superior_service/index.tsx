"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/css/grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid, Autoplay } from "swiper/modules";
import Image from "next/image";
import { unggulans } from "@/constants/main";
import { ChevronRight } from "lucide-react";

export default function MobileSuperiorServiceScreen() {
  const swiperRef = useRef<any>(null);

  return (
    <div className="w-full pl-6 flex flex-row items-center justify-center self-center gap-x-5">
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
        ref={swiperRef}
      >
        {unggulans.map((item: any, i: number) => {
          return (
            <SwiperSlide key={i}>
              <div className="w-full h-full relative flex flex-col bg-neutral-50 rounded-xl shadow-md gap-y-8">
                <div className="w-full max-h-[230px]">
                  <Image
                    src={item?.image}
                    alt="Superior Service"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                </div>

                <div className="relative flex w-full justify-center">
                  <div className="absolute -bottom-4 flex flex-row justify-center items-center self-center bg-neutral-50 shadow-md w-24 h-24 rounded-full">
                    <Image
                      src={item?.icon.src}
                      alt="Superior Service"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full gap-y-5 items-center mb-6 px-8">
                  <h5 className="text-neutral-700 font-semibold text-[26px]">
                    {item?.title}
                  </h5>

                  <p className="text-neutral-700 font-normal text-[16px] leading-6 text-center">
                    {item?.desc}
                  </p>

                  <div className="w-full flex flex-row justify-center">
                    <Button className="bg-primary-700 py-6 px-16 gap-x-5">
                      <p className="text-neutral-50 text-normal text-[14px]">
                        Selengkapnya
                      </p>

                      <ChevronRight className="w-5 h-5 text-neutral-50" />
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
