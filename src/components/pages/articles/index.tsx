"use client";

import { ArrowRight, CalendarDots } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function ArticleScreen({ item }: any) {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-neutral-50 shadow-md rounded-xl gap-y-4">
      <div className="w-full h-full">
        <Image
          src={item?.image}
          alt={item?.title}
          width={400}
          height={400}
          className="w-full h-full rounded-t-xl"
        />
      </div>

      <div className="w-full flex flex-col gap-y-2 px-5">
        <div className="w-full flex flex-row gap-x-3">
          <CalendarDots className="w-6 h-6 text-neutral-400" />

          <p className="font-normal text-[14px] text-neutral-400">
            {item?.dateTime}
          </p>
        </div>

        <div className="w-full flex flex-row">
          <p className="font-bold text-neutral-700 text-[17px]">
            {item?.title}
          </p>
        </div>

        <p className="text-[14px] text-neutral-700 font-normal mt-2">
          {item?.desc}
        </p>
      </div>

      <div className="w-full flex flex-col items-center py-2 rounded-lg mb-4 mt-2">
        <Link
          href={"/article"}
          className="flex flex-row items-center gap-x-3 text-center text-neutral-700 font-normal text-[16px]">
          <p className="font-semibold text-neutral-700 text-[18px]">
            Lihat Selengkapnya
          </p>

          <ArrowRight className="w-6 h-6 text-neutral-700" />
        </Link>
      </div>
    </div>
  );
}
