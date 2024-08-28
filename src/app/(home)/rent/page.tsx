"use client";

import MobileTravelCarRentScreen from "@/components/mobile_pages/mobile-travel-car-rent";
import RentalScreen from "@/components/pages/rentals";
import MobileSecondRentalScreen from "@/components/pages/rentals/secondRentalCard";
import TravelCarRentScreen from "@/components/pages/travel-car-rents";
import { rentals, travelCars } from "@/constants/main";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function RentPage() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [rents, setRents] = useState<any>();

  useEffect(() => {
    setRents(rentals);
  }, []);

  return (
    <section className="flex flex-col md:w-full h-full justify-center items-center relative md:mb-0 pb-36 md:pb-80">
      <div className="w-full flex flex-col gap-y-20 pb-12">
        <div className="w-full flex flex-col items-center gap-y-10 mt-28 px-8 md:px-36">
          <div className="w-full flex flex-col items-center gap-y-1">
            <div className="bg-neutral-200 rounded-md py-2 px-2 md:w-3/12">
              <p className="text-neutral-700 text-center text-[18px]">
                Berbagai Penginapan Kami
              </p>
            </div>

            <h2 className="text-neutral-700 text-center font-semibold text-[26px] md:text-[30px] mt-3 md:mt-0">
              Fitur Andalan Kami
            </h2>

            <p className="text-neutral-700 font-normal text-center text-[14px] md:text-[16px]">
              Nikmati berbagai fitur andalan Rama Trans dengan fasilitas modern,
              seperti kursi yang nyaman, AC, dan hiburan di dalam bus, yang
              membuka jalan bagi petualangan tak terlupakan dan solusi mobilitas
              yang lancar.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col md:grid grid-cols-3 gap-y-4 md:gap-y-0 gap-x-20 px-5 md:px-20">
          <div className="w-full grid grid-rows-2 gap-y-10">
            {rents?.firstContent?.map((item: any, i: number) => {
              return <RentalScreen key={i} item={item} />;
            })}
          </div>

          <div className="w-full h-full">
            <Image
              src={rents?.banner}
              alt="Banner"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>

          {!isMobile ? (
            <div className="w-full grid grid-rows-2 gap-y-10">
              {rents?.secondContent?.map((item: any, i: number) => {
                return <RentalScreen key={i} item={item} />;
              })}
            </div>
          ) : (
            <div className="w-full grid grid-rows-2 gap-y-10">
              {rents?.secondContent?.map((item: any, i: number) => {
                return <MobileSecondRentalScreen key={i} item={item} />;
              })}
            </div>
          )}
        </div>
      </div>

      <div className="w-full flex flex-col background-rental-armada gap-y-12 pb-20">
        <div className="w-full flex flex-col items-center gap-y-10 mt-12 px-8 md:px-36">
          <div className="w-full flex flex-col items-center gap-y-1">
            <div className="bg-neutral-50 rounded-md py-2 px-2 md:w-3/12">
              <p className="text-neutral-700 text-center text-[18px]">
                Nikmati Perjalanan Kami
              </p>
            </div>

            <h2 className="text-neutral-700 text-center font-semibold text-[26px] md:text-[30px] mt-3 md:mt-0">
              Armada Kendaraan Kami
            </h2>

            <p className="text-neutral-700 font-normal text-center text-[14px] md:text-[16px]">
              Nikmati berbagai fitur andalan Rama Trans dengan fasilitas modern,
              seperti kursi yang nyaman, AC, dan hiburan di dalam bus, yang
              membuka jalan bagi petualangan tak terlupakan dan solusi mobilitas
              yang lancar.
            </p>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 gap-x-12 px-16">
          {travelCars.map((item: any, i: number) => {
            return <TravelCarRentScreen key={i} item={item} />;
          })}
        </div>

        <div className="md:hidden grid grid-cols-1 gap-5">
          <MobileTravelCarRentScreen />
        </div>
      </div>
    </section>
  );
}
