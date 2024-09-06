"use client";

import { PassengerTravelInterface } from "@/types/interface";
import { Seat } from "@phosphor-icons/react";
import React from "react";

export default function CardPassangerScreen({
  item,
}: {
  item: PassengerTravelInterface;
}) {
  return (
    <div className="w-full gap-y-3 flex flex-col p-4 border border-grey-100 rounded-lg shadow-md">
      <h5 className="text-neutral-700 font-semibold text-[22px]">
        {item?.nama}
      </h5>

      <div className="w-full flex flex-row justify-between">
        <div className="w-full flex flex-col gap-y-2">
          <div className="w-full grid grid-cols-2">
            <p className="text-neutral-400 text-[16px]">NIK</p>

            <p className="text-neutral-700 text-[16px]">{item?.nik}</p>
          </div>

          <div className="w-full grid grid-cols-2">
            <p className="text-neutral-400 text-[16px]">No. Telp</p>

            <p className="text-neutral-700 text-[16px]">{item?.no_telp}</p>
          </div>
        </div>

        <div className="w-full flex px-8 flex-row items-center justify-end gap-x-3">
          <Seat className="w-8 h-8 text-neutral-500" />

          <p className="text-neutral-700 text-[26px]">{item?.kursi}</p>
        </div>
      </div>
    </div>
  );
}
