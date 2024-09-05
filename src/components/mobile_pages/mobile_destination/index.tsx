"use client";

import { Calendar } from "@phosphor-icons/react";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/css/grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid, Autoplay } from "swiper/modules";
import Image from "next/image";
import { destinations, travelRoutes, unggulans } from "@/constants/main";
import { ChevronRight } from "lucide-react";
import { Star } from "@phosphor-icons/react";

export default function MobileDestinationScreen() {
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
        {destinations.map((item: any, i: number) => {
          return (
            <SwiperSlide key={i}>
              <div className="w-full flex flex-col justify-center items-center bg-neutral-50 shadow-md rounded-xl gap-y-4">
                <div className="w-full h-full relative">
                  <Image
                    src={item?.image}
                    alt={item?.from}
                    width={400}
                    height={400}
                    className="w-full h-full rounded-xl"
                  />

                  <div className="absolute top-0 bg-primary-700 rounded-tl-xl rounded-br-xl px-5 py-3">
                    <p className="text-neutral-50 font-normal text-[14px]">
                      {item?.location}
                    </p>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-y-1 px-2">
                  <div className="w-full flex flex-row justify-between">
                    <p className="font-normal text-neutral-700 text-[17px]">
                      {item?.title}
                    </p>

                    <Star className="w-6 h-6 text-neutral-700" />
                  </div>

                  <div className="w-full flex flex-row gap-x-3">
                    <p className="font-normal text-[14px] text-neutral-400">
                      {item?.subTitle}
                    </p>
                  </div>

                  <p className="text-[14px] text-neutral-700 font-normal mt-4">
                    {item?.desc}
                  </p>
                </div>

                <div className="w-11/12 bg-primary-700 py-2 rounded-lg mb-6 mt-4">
                  {/* <AlertDialog>
                    <AlertDialogTrigger className="w-full"> */}
                  <p className="text-center text-neutral-50 font-normal text-[16px]">
                    Lihat Selengkapnya
                  </p>
                  {/* </AlertDialogTrigger>
                    <AlertDialogContent className="w-full min-h-[600px] rounded-lg md:w-8/12 p-0">
                      <div className="md:w-full md:h-full flex flex-col md:flex-row">
                        <div className="w-full h-full md:w-full md:h-full">
                          <Image
                            src={item?.image}
                            alt={item?.from}
                            width={50}
                            height={50}
                            className="w-full h-full object-cover rounded-s-lg"
                          />
                        </div>

                        <div className="w-full flex flex-col gap-y-5 bg-neutral-50 p-5">
                          <div className="w-full flex flex-col gap-y-5">
                            <div className="w-full flex flex-row items-center border-b border-outline_border-100 justify-between">
                              <h3 className="font-semibold text-[18px] text-neutral-700">
                                Wisata Tegal Mas Island
                              </h3>

                              <AlertDialogFooter className="w-1/12">
                                <AlertDialogCancel className="border-none outline-none">
                                  <X className="w-6 h-6 text-neutral-700" />
                                </AlertDialogCancel>
                              </AlertDialogFooter>
                            </div>

                            <p className="text-neutral-700 font-normal text-[14px]">
                              Tegal Mas Island adalah pulau wisata di Teluk
                              Lampung, Lampung, yang terkenal dengan pantai
                              berpasir putih, air laut jernih, dan pemandangan
                              alam indah. Pulau ini menawarkan aktivitas
                              snorkeling, diving, serta penginapan unik,
                              menjadikannya destinasi favorit untuk liburan
                              eksotis yang mudah diakses dari Bandar Lampung
                            </p>
                          </div>

                          <div className="w-full flex flex-col">
                            <h3 className="font-semibold text-[18px] text-neutral-700 border-b border-outline_border-100">
                              Berikut kelebihan Tegal Mas Island
                            </h3>
                          </div> */}

                  {/* <ul className="w-full flex flex-col gap-y-5 pl-4">
                            <div className="w-full flex flex-col">
                              <li className="list-decimal">
                                Pemandangan Alam yang Memesona
                              </li>

                              <p className="text-neutral-700 font-normal text-[14px]">
                                Tegal Mas Island menawarkan pemandangan alam
                                yang luar biasa dengan hamparan pantai berpasir
                                putih, air laut yang jernih, dan perbukitan
                                hijau yang menambah keindahan pulau. Ini adalah
                                tempat yang sempurna untuk menikmati keindahan
                                alam.
                              </p>
                            </div>

                            <div className="w-full flex flex-col">
                              <li className="list-decimal">
                                Aktivitas Snorkeling dan Diving yang Menarik
                              </li>

                              <p className="text-neutral-700 font-normal text-[14px]">
                                Tegal Mas Island memiliki terumbu karang yang
                                indah dan keanekaragaman biota laut yang
                                memukau. Pengunjung dapat menikmati aktivitas
                                snorkeling dan diving untuk melihat keindahan
                                bawah laut yang menakjubkan.
                              </p>
                            </div>
                          </ul> */}
                  {/* </div>
                      </div>
                    </AlertDialogContent>
                  </AlertDialog> */}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
