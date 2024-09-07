"use client";

import { formatCurrency } from "@/helpers";
import { RouteInterface } from "@/types/interface";
import { Calendar } from "@phosphor-icons/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export type TravelRouteProps = {
  item: RouteInterface;
};
export default function TravelRoute({ item }: TravelRouteProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-neutral-50 shadow-md rounded-xl gap-y-4">
      <div className="w-full h-full relative">
        <Image
          src={item.image_url || "/assets/images/neededs/destination-2.png"}
          alt={item?.kota_asal}
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
            {item?.kota_asal}
          </p>

          <ArrowRight className="w-6 h-6 text-neutral-700" />

          <p className="font-normal text-neutral-700 text-[17px]">
            {item?.kota_tujuan}
          </p>
        </div>

        <p className="text-[14px] text-neutral-700 font-normal">
          {item?.deskripsi ||
            "Nikmati perjalanan nyaman dari Bandar Lampung ke Jakarta dengan pemandangan indah sepanjang jalan."}
        </p>
      </div>

      <div className="w-full bg-primary-700 py-4 rounded-b-xl">
        <p className="text-center text-neutral-50 font-normal text-[18px]">
          {formatCurrency(item?.harga)}
        </p>
      </div>
    </div>
  );
}
