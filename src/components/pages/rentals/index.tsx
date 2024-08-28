"use client";

import Image from "next/image";
import React from "react";

export default function RentalScreen({ item }: any) {
  return (
    <div className="flex flex-col w-full gap-y-3">
      <div className="flex flex-row items-center w-full gap-x-3">
        <div className="w-[40px] h-[40px]">
          <Image
            src={item?.image}
            alt={item?.title}
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>

        <h5 className="text-neutral-700 font-normal text-[20px]">
          {item?.title}
        </h5>
      </div>

      <div className="w-full">
        <p className="text-neutral-700 font-normal text-[16px]">{item?.desc}</p>
      </div>
    </div>
  );
}
