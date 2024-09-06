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
import { ChevronRight } from "lucide-react";
import { Star } from "@phosphor-icons/react";
import { wisataProps } from "@/services/wisata/api";
import { truncateContent } from "@/helpers";
import parser from "html-react-parser";
import ButtonCustom from "@/components/buttonCustom/ButtonCustom";
import DestinationScreen from "@/components/pages/destination";

export type MobileDestinationScreenProps = {
  destinations: wisataProps[];
};

export default function MobileDestinationScreen(
  props: MobileDestinationScreenProps
) {
  const { destinations } = props;
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
        {destinations.map((item, i: number) => {
          return (
            <SwiperSlide key={i}>
              <DestinationScreen item={item}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
