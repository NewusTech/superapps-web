import { promos } from "@/constants/main";
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

export default function PromotionScreen() {
  const swiperRef = useRef<any>(null);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-row justify-center">
        <h2 className="text-neutral-700 font-semibold text-[26px] md:text-[36px]">
          Nikmati Promo Kami
        </h2>
      </div>

      <div className="w-full pl-16 flex flex-row items-center justify-center self-center gap-x-5 mt-20">
        <Swiper
          modules={[Navigation, Pagination, Grid, Autoplay]}
          autoplay={{ delay: 3000 }}
          slidesPerView={1.7}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="mySwiper rounded-s-lg"
          loop={true}
          pagination={{ clickable: true }}
          ref={swiperRef}>
          {promos.map((image: any, i: number) => {
            return (
              <SwiperSlide key={i}>
                <div className="w-full flex flex-row items-center justify-center h-full">
                  <Image
                    src={image?.image}
                    alt="Carousel"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="w-full pr-16 flex flex-row justify-end mt-8">
        <div className="flex flex-row w-full justify-end gap-x-16">
          <ChevronLeft
            onClick={() => swiperRef?.current?.swiper?.slidePrev()}
            className="text-neutral-700 border border-outline_border-100 rounded-full swiper-button-prev w-10 h-10"
          />

          <ChevronRight
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className="text-neutral-700 border border-outline_border-100 rounded-full swiper-button-next w-10 h-10"
          />
        </div>
      </div>
    </div>
  );
}
