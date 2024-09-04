import Image from "next/image";
import React from "react";

export default function ProfitScreen({ item }: any) {
  return (
    <div className="w-full flex flex-col md:flex-row gap-4">
      <div className="max-w-[32px]">
        <Image
          src={item?.image}
          alt={item?.title}
          width={400}
          height={400}
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
