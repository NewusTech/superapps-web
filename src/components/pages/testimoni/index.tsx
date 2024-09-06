"use client";

import { promos, testimonies } from "@/constants/main";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/css/grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid, Autoplay } from "swiper/modules";
import { Star } from "@phosphor-icons/react";

export default function TestimoniScreen() {
  const swiperRef = useRef<any>(null);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col items-center px-16 gap-y-4">
        <h2 className="text-neutral-700 font-semibold text-[36px]">
          Testimoni Penumpang Kami
        </h2>

        <p className="font-normal text-center text-neutral-700 text-[14px]">
          Apa yang mereka katakan pada Rama Tranz
        </p>
      </div>

      <div className="w-full px-16 flex flex-row items-center justify-center self-center gap-x-5 mt-20">
        <div className="absolute left-14 z-10">
          <ChevronLeft className="text-neutral-50 swiper-button-prev border border-outline_border-100 rounded-full w-10 h-10" />
        </div>
        <div className="absolute right-14 z-10">
          <ChevronRight className="text-neutral-50 swiper-button-next border border-outline_border-100 rounded-full w-10 h-10" />
        </div>
        <div className="w-11/12 flex flex-row">
          <Swiper
            modules={[Navigation, Pagination, Grid, Autoplay]}
            autoplay={{ delay: 3000 }}
            slidesPerView={2}
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="mySwiper"
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            ref={swiperRef}
          >
            {testimonies.map((item: any, i: number) => {
              return (
                <SwiperSlide key={i}>
                  <div className="flex flex-col bg-neutral-50 rounded-lg p-5 w-full gap-y-6 mx-4 h-auto">
                    <div className="flex flex-row w-full gap-x-5 border-b pb-6 border-grey-100">
                      <div className="min-w-[50px] flex flex-row items-center justify-center max-h-[50px]">
                        <Image
                          src={item?.image}
                          alt="Carousel"
                          width={200}
                          height={200}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>

                      <div className="flex flex-col w-full gap-y-1">
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
                      <p className="text-neutral-700 font-normal text-[14px]">
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
