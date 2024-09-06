"use client";

import { Calendar } from "@phosphor-icons/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function TravelRoute({ item }: any) {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-neutral-50 shadow-md rounded-xl gap-y-4">
      <div className="w-full h-full relative">
        <Image
          src={item?.image}
          alt={item?.from}
          width={200}
          height={200}
          className="w-full h-full rounded-t-xl"
        />

        <div className="absolute top-0 bg-warning-700 rounded-tl-xl rounded-br-xl px-5 py-3">
          <p className="text-neutral-50 font-normal text-[14px]">Hot Promo</p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-y-5 px-6">
        <div className="w-full flex flex-row justify-between">
          <p className="font-normal text-neutral-700 text-[17px]">
            {item?.from}
          </p>

          <ArrowRight className="w-6 h-6 text-neutral-700" />

          <p className="font-normal text-neutral-700 text-[17px]">{item?.to}</p>
        </div>

        <div className="w-full flex flex-row gap-x-3">
          <Calendar className="w-6 h-6 text-neutral-400" />

          <p className="font-normal text-[14px] text-neutral-400">
            {item?.date}
          </p>
        </div>

        <p className="text-[14px] text-neutral-700 font-normal">{item?.desc}</p>
      </div>

      <div className="w-full bg-primary-700 py-4 rounded-b-xl">
        <p className="text-center text-neutral-50 font-normal text-[18px]">
          {item?.price}
        </p>
      </div>
    </div>
  );
}
