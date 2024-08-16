import Image from "next/image";
import React from "react";

export default function ProfitScreen({ item }: any) {
  return (
    <div className="w-full flex flex-row gap-x-4">
      <div className="max-w-[200px]">
        <Image
          src={item?.image}
          alt={item?.title}
          width={200}
          height={200}
          className="w-full h-full object-contain rounded-full"
        />
      </div>

      <div>
        <h5 className="text-neutral-700 font-semibold text-[18px]">
          {item?.title}
        </h5>

        <p>{item?.desc}</p>
      </div>
    </div>
  );
}
