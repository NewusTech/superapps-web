import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import FeatureTravelCar from "../travel_car/feature";
import Link from "next/link";

export default function TravelCarRentScreen({ item }: any) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-6 p-5 bg-neutral-50 rounded-xl shadow-md border border-grey-100">
      <div className="w-full h-full">
        <Image
          src={item?.image}
          alt="Travel Car"
          width={200}
          height={200}
          className="w-full h-full object-cover md:rounded-xl"
        />
      </div>

      <div className="flex flex-col w-full gap-y-4">
        <h5 className="font-semibold text-neutral-700 text-[18px]">
          {item?.title}
        </h5>

        <p className="text-neutral-700 text-[14px] font-normal">{item?.desc}</p>

        <div className="h-0.5 w-full border border-neutral-700 border-opacity-30"></div>
      </div>

      <div className="grid grid-cols-4 w-full">
        {item?.icons?.map((car: any, i: number) => {
          return <FeatureTravelCar key={i} car={car} />;
        })}
      </div>

      <div className="w-full">
        <Link href={"/rent"}>
          <Button className="bg-primary-700 text-neutral-50 w-full py-6 text-[16px]">
            Rental Mobil Sekarang
          </Button>
        </Link>
      </div>
    </div>
  );
}
