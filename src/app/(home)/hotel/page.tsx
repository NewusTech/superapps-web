"use client";

import banner from "@/../../public/assets/images/neededs/hotel-hero-image-1.png";
import bannerMobile from "@/../../public/assets/images/neededs/image-hero-hotel-mobile-1.png";
import MobileApartementScreen from "@/components/mobile_pages/mobile_apartement";
import ApartementScreen from "@/components/pages/apartements";
import { hotels } from "@/constants/main";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
import React from "react";

export default function HotelPage() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <section className="flex flex-col md:w-full h-full justify-center items-center relative md:mb-0 pb-36 md:pb-80">
      <div className="w-full h-full">
        {!isMobile ? (
          <Image
            src={banner}
            alt="Banner"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={bannerMobile}
            alt="Banner"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="w-full flex flex-col items-center gap-y-10 mt-10 px-8 md:px-16">
        <div className="w-full flex flex-col items-center gap-y-1">
          <div className="bg-neutral-200 rounded-md py-2 px-2 md:w-3/12">
            <p className="text-neutral-700 text-center text-[18px]">
              Berbagai Penginapan Kami
            </p>
          </div>

          <h2 className="text-neutral-700 text-center font-semibold text-[24px] md:text-[30px] mt-3 md:mt-0">
            Penginapan Andalan Kami
          </h2>

          <p className="text-neutral-700 font-normal text-center text-[14px] md:text-[16px]">
            Nikmati pengalaman menginap yang tak terlupakan di berbagai lokasi
            pilihan
          </p>
        </div>

        <div className="w-full md:grid grid-cols-3 gap-x-8">
          {!isMobile ? (
            hotels.map((item: any, i: number) => {
              return <ApartementScreen key={i} item={item} />;
            })
          ) : (
            <MobileApartementScreen />
          )}
        </div>
      </div>
    </section>
  );
}
