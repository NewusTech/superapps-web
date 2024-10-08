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
import MobileFeatureTravelCar from "../mobile_travel_car/feature";
import Link from "next/link";
import { TravelCarInterface } from "@/types/interface";
import { CarSimple, GasPump, GitBranch, Seat } from "@phosphor-icons/react";

type MobilTravelCarRent = {
  travelCars: TravelCarInterface[];
};

export default function MobileTravelCarRentScreen({
  travelCars,
}: MobilTravelCarRent) {
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
        ref={swiperRef}>
        {travelCars.map((item: any, i: number) => {
          return (
            <SwiperSlide key={i}>
              <div className="w-full flex flex-col justify-center items-center gap-y-6 pb-5 md:pb-0 md:p-5 bg-neutral-50 rounded-xl shadow-md border border-grey-100">
                <div className="w-full h-full">
                  <Image
                    src={item.images.slice(0, 1)[0].image_url}
                    alt="Travel Car"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover rounded-t-xl md:rounded-xl"
                  />
                </div>

                <div className="flex flex-col w-full gap-y-4 px-5 md:px-0">
                  <h5 className="font-semibold text-neutral-700 text-[18px]">
                    {item?.type}
                  </h5>

                  <div className="w-full min-h-[80px]">
                    <p className="text-neutral-700 text-[14px] font-normal">
                      {item?.deskripsi}
                    </p>
                  </div>

                  <div className="h-0.5 w-full border border-neutral-700 border-opacity-30"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 px-5 md:px-0 gap-y-4 md:gap-y-0 w-full">
                  <div className="flex flex-row md:items-center md:justify-center w-full gap-x-3">
                    <CarSimple className="text-primary-700 w-6 h-6" />
                    <p>{item.bagasi}</p>
                  </div>
                  <div className="flex flex-row md:items-center md:justify-center w-full gap-x-3">
                    <GasPump className="text-primary-700 w-6 h-6" />
                    <p>{item.bahan_bakar}</p>
                  </div>
                  <div className="flex flex-row md:items-center md:justify-center w-full gap-x-3">
                    <Seat className="text-primary-700 w-6 h-6" />
                    <p>Jumlah Kursi {item.jumlah_kursi}</p>
                  </div>
                  <div className="flex flex-row md:items-center md:justify-center w-full gap-x-3">
                    <GitBranch className="text-primary-700 w-6 h-6" />
                    <p>{item.transmisi}</p>
                  </div>
                </div>

                <div className="w-full px-3 md:px-0">
                  <Link href={"/rent/form-rent"}>
                    <Button
                      onClick={() =>
                        localStorage.setItem(
                          "travel_car_id",
                          item?.id.toString()
                        )
                      }
                      className="bg-primary-700 text-neutral-50 w-full py-6 text-[16px]">
                      Rental Mobil Sekarang
                    </Button>
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
