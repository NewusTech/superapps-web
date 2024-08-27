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
import { travelCars, unggulans } from "@/constants/main";
import { ChevronRight } from "lucide-react";
import MobileFeatureTravelCar from "./feature";

export default function MobileTravelCarScreen() {
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
        {travelCars.map((item: any, i: number) => {
          return (
            <SwiperSlide key={i}>
              <div className="w-full flex flex-col justify-center items-center gap-y-6 pb-5 md:pb-0 md:p-5 bg-neutral-50 rounded-xl shadow-md border border-grey-100">
                <div className="w-full h-full">
                  <Image
                    src={item?.image}
                    alt="Travel Car"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover rounded-t-xl md:rounded-xl"
                  />
                </div>

                <div className="flex flex-col w-full gap-y-4 px-5 md:px-0">
                  <h5 className="font-semibold text-neutral-700 text-[18px]">
                    {item?.title}
                  </h5>

                  <p className="text-neutral-700 text-[14px] font-normal">
                    {item?.desc}
                  </p>

                  <div className="h-0.5 w-full border border-neutral-700 border-opacity-30"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 px-5 md:px-0 gap-y-4 md:gap-y-0 w-full">
                  {item?.icons?.map((car: any, i: number) => {
                    return <MobileFeatureTravelCar key={i} car={car} />;
                  })}
                </div>

                <div className="w-full px-3 md:px-0">
                  <Button className="bg-primary-700 text-neutral-50 w-full py-6 text-[16px]">
                    Lihat Detail Mobile
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
