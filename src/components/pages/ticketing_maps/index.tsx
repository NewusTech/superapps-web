import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import BranchLocation from "./branch";

export default function TicketingMaps({ item }: any) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-6 p-5 bg-neutral-50 rounded-xl shadow-md border border-grey-100">
      <div className="w-full min-h-[400px]">
        <iframe
          src={item?.map}
          className="border-none w-full h-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="flex flex-col w-full gap-y-4">
        <h5 className="font-semibold text-neutral-700 text-[18px]">
          {item?.location}
        </h5>
      </div>

      <div className="grid grid-cols-3 gap-x-5 w-full">
        {item?.subImages?.map((image: any, i: number) => {
          return <BranchLocation key={i} image={image} />;
        })}
      </div>

      <div className="w-full">
        <p>{item?.address}</p>
      </div>
    </div>
  );
}
