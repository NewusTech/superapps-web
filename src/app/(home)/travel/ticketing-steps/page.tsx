"use client";

import banner from "@/../../public/assets/images/neededs/banner-travel-ticketing-conditions.png";
import TravelHowBookingSteps from "@/components/pages/travel-how-booking-steps";
import { howBookingStepSteps } from "@/constants/main";
import Image from "next/image";
import React from "react";

export default function TicketingStepsScreen() {
  return (
    <section className="flex flex-col md:w-full h-full justify-center items-center relative md:mb-0 pb-80">
      <div className="w-full h-full">
        <Image
          src={banner}
          alt="Banner"
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full flex flex-col items-center gap-y-10 mt-10 px-16">
        <h2 className="text-neutral-700 font-semibold text-[26px]">
          Bagaimana Cara Memesan Travel di Rama Tranz
        </h2>

        <div className="w-full grid grid-cols-3 gap-x-5">
          {howBookingStepSteps?.map((item: any, i: number) => {
            return <TravelHowBookingSteps key={i} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
}
