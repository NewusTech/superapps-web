"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function SuperiorServiceScreen({ item }: any) {
  return (
    <div className="w-full h-full relative flex flex-col bg-neutral-50 rounded-xl shadow-md gap-y-8">
      <div className="w-full h-full">
        <Image
          src={item?.image}
          alt="Superior Service"
          width={200}
          height={200}
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>

      <div className="relative flex w-full justify-center">
        <div className="absolute -bottom-4 flex flex-row justify-center items-center self-center bg-neutral-50 shadow-md w-24 h-24 rounded-full">
          <Image
            src={item?.icon.src}
            alt="Superior Service"
            width={50}
            height={50}
          />
        </div>
      </div>

      <div className="flex flex-col w-full gap-y-5 items-center mb-6 px-8">
        <h5 className="text-neutral-700 font-semibold text-[26px]">
          {item?.title}
        </h5>

        <p className="text-neutral-700 font-normal text-[16px] leading-6 text-center">
          {item?.desc}
        </p>

        <div className="w-full flex flex-row justify-center">
          <Button className="bg-primary-700 py-6 px-16 gap-x-5">
            <p className="text-neutral-50 text-normal text-[14px]">
              Selengkapnya
            </p>

            <ChevronRight className="w-5 h-5 text-neutral-50" />
          </Button>
        </div>
      </div>
    </div>
  );
}
