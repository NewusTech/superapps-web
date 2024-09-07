"use client";

import { promos, testimonies } from "@/constants/main";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/css/grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid, Autoplay } from "swiper/modules";
import { Star } from "@phosphor-icons/react";

export default function MobileTestimoniScreen() {
  const swiperRef = useRef<any>(null);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col px-8">
        <h2 className="text-neutral-700 font-semibold text-[26px] ">
          Testimoni Penumpang Kami
        </h2>

        <p className="font-normal text-neutral-700 text-[14px]">
          Apa yang mereka katakan pada Rama Tranz
        </p>
      </div>

      <div className="w-full px-4 flex flex-col items-center justify-center self-center gap-x-5 mt-8">
        <div className="w-full flex flex-row">
          <Swiper
            modules={[Navigation, Pagination, Grid, Autoplay]}
            autoplay={{ delay: 3000 }}
            slidesPerView={1.2}
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="mySwiper"
            loop={true}
            pagination={{ clickable: true }}
            ref={swiperRef}>
            {testimonies.map((item: any, i: number) => {
              return (
                <SwiperSlide key={i}>
                  <div className="flex flex-col min-h-[380px] bg-neutral-50 border border-grey-100 rounded-lg p-5 w-full gap-y-6 mx-4">
                    <div className="flex flex-col justify-center items-center w-full gap-y-2">
                      <div className="w-[50px] flex flex-row self-center items-center justify-center max-h-[50px]">
                        <Image
                          src={item?.image}
                          alt="Carousel"
                          width={200}
                          height={200}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>

                      <div className="flex flex-col justify-center items-center w-full gap-y-1">
                        <h5 className="text-primary-700 text-[16px] font-normal">
                          {item?.name}
                        </h5>

                        <p className="text-neutral-500 text-[14px]">
                          {item?.job}
                        </p>
                      </div>

                      <Star className="w-6 h-6" />
                    </div>

                    <div className="w-full">
                      <p className="text-neutral-700 text-center font-normal text-[14px]">
                        {item?.desc}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
