import Image from "next/image";
import React from "react";

export default function AboutUsNumberCard({ item }: any) {
  return (
    <div className="w-full flex flex-col justify-center p-4 gap-y-4 items-center border border-grey-100 rounded-xl shadow-md">
      <div className="w-[50px] h-[50px]">
        <Image
          src={item?.image}
          alt="Ramatranz"
          width={50}
          height={50}
          className="w-full h-full object-cover roundex-lg"
        />
      </div>

      <div className="w-full flex flex-row justify-center items-center">
        <p className="font-normal text-center text-neutral-700 text-[16px]">
          {item?.desc}
        </p>
      </div>
    </div>
  );
}
