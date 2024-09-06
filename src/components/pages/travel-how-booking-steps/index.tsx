"use client";

import Image from "next/image";
import React from "react";

export default function TravelHowBookingSteps({ item }: any) {
  return (
    <div className="w-full flex flex-col items-center gap-y-5">
      <div className="w-8/12 h-full">
        <Image
          src={item?.image}
          alt={item?.title}
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="w-full flex flex-col items-center pb-5 gap-y-2">
        <h4 className="font-semibold text-[18px] text-neutral-700">
          {item?.title}
        </h4>

        <p className="text-neutral-700 text-center text-[14px]">{item?.desc}</p>
      </div>
    </div>
  );
}
