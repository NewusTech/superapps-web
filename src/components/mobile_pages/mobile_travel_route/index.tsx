"use client";

import { Calendar } from "@phosphor-icons/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/css/grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid, Autoplay } from "swiper/modules";
import Image from "next/image";
import { RouteInterface } from "@/types/interface";
import { formatCurrency } from "@/helpers";

export type MobileTravelRouteProps = {
  travelRutes: RouteInterface[];
};

export default function MobileTravelRoute({ travelRutes }: MobileTravelRouteProps) {
  const swiperRef = useRef<any>(null);

  return (
    <div className="w-full md:pl-6 flex flex-row items-center justify-center self-center gap-x-5">
      <Swiper
        modules={[Navigation, Pagination, Grid]}
        slidesPerView={1}
        spaceBetween={20}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        ref={swiperRef}
        centeredSlides={false} // Untuk memastikan slide tidak di tengah
        slideToClickedSlide={true} // Memungkinkan snap ke slide yang diklik
        breakpoints={{
          // Untuk memodifikasi tampilan di layar lebih besar
          640: {
            slidesPerView: 1.2,
          },
        }}
      >
        {travelRutes.map((item, i: number) => {
          return (
            <SwiperSlide key={i} className="max-w-[25rem] w-full mx-auto">
              <div className="w-full flex flex-col justify-center items-center bg-neutral-50 shadow-md rounded-xl gap-y-4">
                <div className="w-full h-full relative">
                  <Image
                    src={item?.image_url || "/assets/images/neededs/destination-2.png"}
                    alt={item?.kota_asal}
                    width={200}
                    height={200}
                    className="w-full h-full rounded-xl"
                  />

                  <div className="absolute top-0 bg-warning-700 rounded-tl-xl rounded-br-xl px-5 py-3">
                    <p className="text-neutral-50 font-normal text-[14px]">Hot Promo</p>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-y-5 px-3 md:px-6">
                  <div className="w-full flex flex-row justify-between">
                    <p className="font-normal text-neutral-700 text-[17px]">{item?.kota_asal}</p>

                    <ArrowRight className="w-6 h-6 text-neutral-700" />

                    <p className="font-normal text-neutral-700 text-[17px]">{item?.kota_tujuan}</p>
                  </div>
                  <p className="text-[14px] text-neutral-700 font-normal">
                    {item?.deskripsi || "Nikmati perjalanan nyaman dari Bandar Lampung ke Jakarta dengan pemandangan indah sepanjang jalan."}
                  </p>
                </div>

                <div className="w-full bg-primary-700 py-4 rounded-b-xl">
                  <p className="text-center text-neutral-50 font-normal text-[18px]">{formatCurrency(item?.harga)}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
