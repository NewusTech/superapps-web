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
import {
  destinations,
  travelMaps,
  travelRoutes,
  unggulans,
} from "@/constants/main";
import { ChevronRight } from "lucide-react";
import { Star } from "@phosphor-icons/react";
import BranchLocation from "@/components/pages/ticketing_maps/branch";

export default function MobileTicketingMaps() {
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
        ref={swiperRef}>
        {travelMaps.map((item: any, i: number) => {
          return (
            <SwiperSlide key={i}>
              <div className="w-full flex flex-col justify-center items-center gap-y-4 p-3 bg-neutral-50 rounded-xl shadow-md border border-grey-100">
                <div className="w-full h-full">
                  <iframe
                    src={item?.map}
                    className="border-none w-full h-full"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="flex flex-col w-full gap-y-4">
                  <h5 className="font-semibold text-neutral-700 text-[18px]">
                    {item?.location}
                  </h5>
                </div>

                <div className="grid grid-cols-3 gap-x-1 w-full">
                  {item?.subImages?.map((image: any, i: number) => {
                    return <BranchLocation key={i} image={image} />;
                  })}
                </div>

                <div className="w-full">
                  <p className="font-normal text-neutral-700 text-[14px] md:text-[16px]">
                    {item?.address}
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
