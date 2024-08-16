import { Bed, MapPin, Star } from "@phosphor-icons/react";
import { DimensionsIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

export default function ApartementScreen({ item }: any) {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-neutral-50 shadow-md rounded-xl gap-y-4">
      <div className="w-full h-full relative">
        <Image
          src={item?.image}
          alt={item?.location}
          width={200}
          height={200}
          className="w-full h-full rounded-t-xl"
        />

        <div className="absolute top-0 bg-secondary-700 rounded-tl-xl rounded-br-xl px-5 py-3">
          <p className="text-neutral-50 font-normal text-[14px]">
            {item?.location}
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-y-3 px-2">
        <div className="w-full flex flex-row justify-between">
          <p className="font-normal text-neutral-700 text-[17px]">
            {item?.title}
          </p>

          <Star className="w-6 h-6 text-neutral-700" />
        </div>

        <div className="w-full flex flex-row items-center gap-x-1">
          <MapPin className="w-4 h-4 text-neutral-400" />

          <p className="font-normal text-[14px] text-neutral-400">
            {item?.subTitle}
          </p>
        </div>

        <div className="w-full flex flex-row gap-x-3">
          <div className="flex flex-row border border-grey-100 rounded-lg gap-x-1 p-1">
            <Bed className="w-5 h-5 text-neutral-700" />

            <p className="text-[14px]">{item?.rooms}</p>
          </div>

          <div className="flex flex-row border border-grey-100 rounded-lg gap-x-1 p-1">
            <DimensionsIcon className="w-5 h-5 text-neutral-700" />

            <p className="text-[14px]">{item?.sizes}</p>
          </div>
        </div>

        <p className="text-[14px] text-neutral-700 font-normal mt-4">
          {item?.desc}
        </p>
      </div>

      <div className="w-full bg-primary-700 py-4 rounded-b-xl">
        <p className="text-center text-neutral-50 font-normal text-[18px]">
          {item?.price}
        </p>
      </div>
    </div>
  );
}
