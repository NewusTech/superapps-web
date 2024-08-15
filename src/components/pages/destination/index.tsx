import { Calendar, Star } from "@phosphor-icons/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function DestinationScreen({ item }: any) {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-neutral-50 shadow-md rounded-xl gap-y-4">
      <div className="w-full h-full relative">
        <Image
          src={item?.image}
          alt={item?.from}
          width={400}
          height={400}
          className="w-full h-full rounded-t-xl"
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
        <p className="text-center text-neutral-50 font-normal text-[16px]">
          Lihat Selengkapnya
        </p>
      </div>
    </div>
  );
}
