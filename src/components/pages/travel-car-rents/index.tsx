"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import FeatureTravelCar from "../travel_car/feature";
import Link from "next/link";
import { TravelCarInterface } from "@/types/interface";
import { CarSimple, GasPump, GitBranch, Seat } from "@phosphor-icons/react";

export default function TravelCarRentScreen({
  item,
}: {
  item: TravelCarInterface;
}) {
  const icons = item?.fasilitas.split(",");

  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-6 p-5 bg-neutral-50 rounded-xl shadow-md border border-grey-100">
      <div className="w-full h-full">
        <Image
           src={item.images.slice(0, 1)[0].image_url}
          alt="Travel Car"
          width={200}
          height={200}
          className="w-full h-full object-cover md:rounded-xl"
        />
      </div>

      <div className="flex flex-col w-full gap-y-4">
        <h5 className="font-semibold text-neutral-700 text-[24px]">
          {item?.type}
        </h5>

        <p className="text-neutral-700 text-[16px] font-normal">
          {item?.deskripsi}
        </p>

        <div className="h-0.5 w-full border border-neutral-700 border-opacity-30"></div>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 gap-y-5 w-full">
        <div className="flex flex-row md:items-center md:justify-center w-full gap-x-3">
          <CarSimple className="text-primary-700 w-6 h-6" />
          <p>{item.bagasi}</p>
        </div>
        <div className="flex flex-row md:items-center md:justify-center w-full gap-x-3">
          <GasPump className="text-primary-700 w-6 h-6" />
          <p>{item.bahan_bakar}</p>
        </div>
        <div className="flex flex-row md:items-center md:justify-center w-full gap-x-3">
          <Seat className="text-primary-700 w-6 h-6" />
          <p>Jumlah Kursi {item.jumlah_kursi}</p>
        </div>
        <div className="flex flex-row md:items-center md:justify-center w-full gap-x-3">
          <GitBranch className="text-primary-700 w-6 h-6" />
          <p>{item.transmisi}</p>
        </div>
      </div>

      <div className="w-full">
        <Link href={"/rent/form-rent"}>
          <Button
            onClick={() =>
              localStorage.setItem("travel_car_id", item?.id.toString())
            }
            className="bg-primary-700 text-neutral-50 w-full py-6 text-[16px]"
          >
            Rental Mobil Sekarang
          </Button>
        </Link>
      </div>
    </div>
  );
}
