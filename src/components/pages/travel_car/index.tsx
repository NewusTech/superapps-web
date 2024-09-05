import Image from "next/image";
import React from "react";
import FeatureTravelCar from "./feature";
import { Button } from "@/components/ui/button";

import premio from "../../../../public/assets/images/neededs/rental/premio.png";
import commuter from "../../../../public/assets/images/neededs/rental/commuter.png";
import { TravelCarInterface } from "@/types/interface";
import MobileFeatureTravelCar from "@/components/mobile_pages/mobile_travel_car/feature";
import Link from "next/link";

export type MobilTravelCarScreenProps = {
  item: TravelCarInterface;
};

export default function TravelCarScreen(props: MobilTravelCarScreenProps) {
  const { item } = props;
  const icons = item?.fasilitas.split(",");
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-6 p-5 bg-neutral-50 rounded-xl shadow-md border border-grey-100">
      <div className="w-full h-full">
        <Image
          src={item.type === "Toyota Hiece Premio" ? premio : commuter}
          alt="Travel Car"
          width={200}
          height={200}
          className="w-full h-full object-cover md:rounded-xl"
        />
      </div>

      <div className="flex flex-col w-full gap-y-4">
        <h5 className="font-semibold text-neutral-700 text-[18px]">
          {item?.type}
        </h5>

        <p className="text-neutral-700 text-[14px] font-normal">
          {item?.deskripsi}
        </p>

        <div className="h-0.5 w-full border border-neutral-700 border-opacity-30"></div>
      </div>

      <div className="grid grid-cols-4 w-full">
        {icons?.map((car: any, i: number) => {
          return <MobileFeatureTravelCar key={i} car={car} />;
        })}
      </div>

      <div className="w-full">
        <Button className="bg-primary-700 text-neutral-50 w-full py-6 text-[16px]">
          Lihat Detail Mobile
        </Button>
      </div>
    </div>
  );
}
