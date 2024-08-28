"use client";

import { Calendar, CalendarDots } from "@phosphor-icons/react";
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
  articles,
  destinations,
  travelRoutes,
  unggulans,
} from "@/constants/main";
import { ChevronRight } from "lucide-react";
import { Star } from "@phosphor-icons/react";
import Link from "next/link";

export default function MobileSliderArticleDetailScreen() {
  const swiperRef = useRef<any>(null);

  return (
    <div className="w-full flex flex-row items-center justify-center self-center gap-x-5">
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
        {articles.map((item: any, i: number) => {
          return (
            <SwiperSlide key={i}>
              <div className="w-full flex flex-col justify-center items-center bg-neutral-50 shadow-md rounded-xl gap-y-4">
                <div className="w-full h-full">
                  <Image
                    src={item?.image}
                    alt={item?.title}
                    width={400}
                    height={400}
                    className="w-full h-full rounded-t-xl"
                  />
                </div>

                <div className="w-full flex flex-col gap-y-2 px-5">
                  <div className="w-full flex flex-row gap-x-3">
                    <CalendarDots className="w-6 h-6 text-neutral-400" />

                    <p className="font-normal text-[14px] text-neutral-400">
                      {item?.dateTime}
                    </p>
                  </div>

                  <div className="w-full flex flex-row">
                    <p className="font-bold text-neutral-700 text-[17px]">
                      {item?.title}
                    </p>
                  </div>

                  <p className="text-[14px] text-neutral-700 font-normal mt-2">
                    {item?.desc}
                  </p>
                </div>

                <div className="w-full flex flex-col items-center py-2 rounded-lg mb-4 mt-2">
                  <Link
                    href={"/article"}
                    className="flex flex-row items-center gap-x-3 text-center text-neutral-700 font-normal text-[16px]">
                    <p className="font-semibold text-neutral-700 text-[18px]">
                      Lihat Selengkapnya
                    </p>

                    <ArrowRight className="w-6 h-6 text-neutral-700" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
