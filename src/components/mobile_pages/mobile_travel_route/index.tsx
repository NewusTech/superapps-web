"use client";

import { Calendar } from "@phosphor-icons/react";
import { ArrowRight } from "lucide-react";
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
import { travelRoutes, unggulans } from "@/constants/main";
import { ChevronRight } from "lucide-react";

export default function MobileTravelRoute({ item }: any) {
  const swiperRef = useRef<any>(null);

  return (
    <div className="w-full md:pl-6 flex flex-row items-center justify-center self-center gap-x-5">
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
        {travelRoutes.map((item: any, i: number) => {
          return (
            <SwiperSlide key={i}>
              <div className="w-full flex flex-col justify-center items-center bg-neutral-50 shadow-md rounded-xl gap-y-4">
                <div className="w-full h-full relative">
                  <Image
                    src={item?.image}
                    alt={item?.from}
                    width={200}
                    height={200}
                    className="w-full h-full rounded-xl"
                  />

                  <div className="absolute top-0 bg-warning-700 rounded-tl-xl rounded-br-xl px-5 py-3">
                    <p className="text-neutral-50 font-normal text-[14px]">
                      Hot Promo
                    </p>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-y-5 px-3 md:px-6">
                  <div className="w-full flex flex-row justify-between">
                    <p className="font-normal text-neutral-700 text-[17px]">
                      {item?.from}
                    </p>

                    <ArrowRight className="w-6 h-6 text-neutral-700" />

                    <p className="font-normal text-neutral-700 text-[17px]">
                      {item?.to}
                    </p>
                  </div>

                  <div className="w-full flex flex-row gap-x-3">
                    <Calendar className="w-6 h-6 text-neutral-400" />

                    <p className="font-normal text-[14px] text-neutral-400">
                      {item?.date}
                    </p>
                  </div>

                  <p className="text-[14px] text-neutral-700 font-normal">
                    {item?.desc}
                  </p>
                </div>

                <div className="w-full bg-primary-700 py-4 rounded-b-xl">
                  <p className="text-center text-neutral-50 font-normal text-[18px]">
                    {item?.price}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
